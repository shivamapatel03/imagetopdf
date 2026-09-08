-- ImageToPDF.online Database Schema for Supabase PostgreSQL
-- Run this script in the Supabase SQL Editor to initialize tables, RLS policies, and triggers.

-- Enable UUID extension if not already enabled
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. PROFILES TABLE
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name TEXT,
  email TEXT NOT NULL,
  avatar_url TEXT,
  created_at TIMESTAMPTZ DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Enable RLS on profiles
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own profile"
  ON public.profiles FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "Users can update own profile"
  ON public.profiles FOR UPDATE
  USING (auth.uid() = id);

-- 2. SUBSCRIPTIONS TABLE
CREATE TABLE IF NOT EXISTS public.subscriptions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  plan_name TEXT NOT NULL DEFAULT 'free', -- 'free' or 'premium'
  status TEXT NOT NULL DEFAULT 'active', -- 'active', 'cancelled', 'expired', 'failed'
  payment_provider TEXT DEFAULT 'razorpay', -- 'razorpay', 'stripe'
  payment_id TEXT,
  subscription_id TEXT,
  amount_in_inr INTEGER DEFAULT 19,
  start_date TIMESTAMPTZ DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  expiry_date TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

ALTER TABLE public.subscriptions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own subscriptions"
  ON public.subscriptions FOR SELECT
  USING (auth.uid() = user_id);

-- 3. USAGE_LIMITS TABLE
CREATE TABLE IF NOT EXISTS public.usage_limits (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL UNIQUE REFERENCES auth.users(id) ON DELETE CASCADE,
  conversions_today INTEGER DEFAULT 0 NOT NULL,
  conversions_this_month INTEGER DEFAULT 0 NOT NULL,
  total_conversions INTEGER DEFAULT 0 NOT NULL,
  storage_used_bytes BIGINT DEFAULT 0 NOT NULL,
  last_conversion_date DATE DEFAULT CURRENT_DATE NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

ALTER TABLE public.usage_limits ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own usage limits"
  ON public.usage_limits FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can update own usage limits"
  ON public.usage_limits FOR UPDATE
  USING (auth.uid() = user_id);

-- 4. CONVERSIONS TABLE
CREATE TABLE IF NOT EXISTS public.conversions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  original_file_name TEXT NOT NULL,
  converted_file_name TEXT NOT NULL,
  tool_used TEXT NOT NULL DEFAULT 'image-to-pdf',
  file_size BIGINT DEFAULT 0,
  page_count INTEGER DEFAULT 1,
  status TEXT NOT NULL DEFAULT 'completed', -- 'completed', 'failed'
  storage_path TEXT,
  created_at TIMESTAMPTZ DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

ALTER TABLE public.conversions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own conversions"
  ON public.conversions FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own conversions"
  ON public.conversions FOR INSERT
  WITH CHECK (auth.uid() = user_id OR auth.uid() IS NULL);

-- 5. FUNCTION & TRIGGER: Auto-create profile & usage limit on signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, full_name, email, avatar_url)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data->>'full_name', NEW.raw_user_meta_data->>'name', ''),
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'avatar_url', '')
  );

  INSERT INTO public.usage_limits (user_id, conversions_today, conversions_this_month, total_conversions, storage_used_bytes)
  VALUES (NEW.id, 0, 0, 0, 0);

  INSERT INTO public.subscriptions (user_id, plan_name, status, start_date)
  VALUES (NEW.id, 'free', 'active', NOW());

  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
