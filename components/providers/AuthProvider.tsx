'use client';

import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import type { User } from '@supabase/supabase-js';
import { createClient, isSupabaseConfigured } from '@/lib/supabase/client';
import { UserProfile } from '@/types';

interface AuthContextType {
  user: User | null;
  profile: UserProfile | null;
  isLoading: boolean;
  signOut: () => Promise<void>;
  refreshProfile: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  profile: null,
  isLoading: true,
  signOut: async () => {},
  refreshProfile: async () => {},
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchProfile = useCallback(async (currentUser: User | null) => {
    if (!currentUser) {
      setProfile(null);
      return;
    }

    const supabase = createClient();
    let fullName = currentUser.user_metadata?.full_name || 
                   currentUser.user_metadata?.name || 
                   currentUser.email?.split('@')[0] || 
                   'User';
    let avatarUrl = currentUser.user_metadata?.avatar_url || '';

    if (supabase) {
      try {
        const { data, error } = await supabase
          .from('profiles')
          .select('full_name, avatar_url')
          .eq('id', currentUser.id)
          .maybeSingle();

        if (data && !error) {
          if (data.full_name) fullName = data.full_name;
          if (data.avatar_url) avatarUrl = data.avatar_url;
        }
      } catch (err) {
        console.warn('Profile fetch warning (fallback to user metadata):', err);
      }
    }

    setProfile({
      id: currentUser.id,
      email: currentUser.email || '',
      fullName,
      avatarUrl,
      plan: 'free',
      conversionsToday: 0,
      conversionsThisMonth: 0,
      totalConversions: 0,
      storageUsedBytes: 0,
    });
  }, []);

  useEffect(() => {
    // Clean up any legacy mock user data from previous sessions
    if (typeof window !== 'undefined') {
      try {
        localStorage.removeItem('imagetopdf_demo_user');
      } catch {
        // ignore
      }
    }

    if (!isSupabaseConfigured) {
      setIsLoading(false);
      return;
    }

    const supabase = createClient();
    if (!supabase) {
      setIsLoading(false);
      return;
    }

    // Get current session
    supabase.auth.getSession().then(({ data: { session } }) => {
      const activeUser = session?.user ?? null;
      setUser(activeUser);
      if (activeUser) {
        fetchProfile(activeUser).finally(() => setIsLoading(false));
      } else {
        setProfile(null);
        setIsLoading(false);
      }
    }).catch(() => {
      setIsLoading(false);
    });

    // Listen to Supabase auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (_event, session) => {
      const activeUser = session?.user ?? null;
      setUser(activeUser);
      if (activeUser) {
        await fetchProfile(activeUser);
      } else {
        setProfile(null);
      }
      setIsLoading(false);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [fetchProfile]);

  const signOut = async () => {
    setIsLoading(true);
    const supabase = createClient();
    if (supabase) {
      await supabase.auth.signOut();
    }
    if (typeof window !== 'undefined') {
      localStorage.removeItem('imagetopdf_demo_user');
    }
    setUser(null);
    setProfile(null);
    setIsLoading(false);
  };

  const refreshProfile = async () => {
    if (user) {
      await fetchProfile(user);
    }
  };

  return (
    <AuthContext.Provider value={{ user, profile, isLoading, signOut, refreshProfile }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
