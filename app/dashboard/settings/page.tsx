'use client';

import React, { useState, useEffect } from 'react';
import { DashboardHeader } from '@/components/dashboard/DashboardHeader';
import { Button } from '@/components/ui/Button';
import { useAuth } from '@/components/providers/AuthProvider';
import { createClient } from '@/lib/supabase/client';
import { Check, Save, Trash2 } from 'lucide-react';

export default function SettingsPage() {
  const { user, profile, refreshProfile, isLoading } = useAuth();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const [savedSuccess, setSavedSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    if (user) {
      setFullName(profile?.fullName || user.user_metadata?.full_name || '');
      setEmail(user.email || '');
    }
  }, [user, profile]);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;
    setIsSaving(true);
    setErrorMessage(null);

    try {
      const supabase = createClient();
      if (supabase) {
        // 1. Update Auth metadata
        await supabase.auth.updateUser({
          data: { full_name: fullName.trim() },
        });

        // 2. Upsert profile in profiles table
        try {
          await supabase.from('profiles').upsert({
            id: user.id,
            full_name: fullName.trim(),
            email: user.email || '',
            updated_at: new Date().toISOString(),
          });
        } catch (dbErr) {
          console.warn('Profiles table update notice:', dbErr);
        }

        await refreshProfile();
        setSavedSuccess(true);
        setTimeout(() => setSavedSuccess(false), 2500);
      }
    } catch (err: any) {
      setErrorMessage(err.message || 'Failed to update profile settings.');
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return <div className="h-64 bg-gray-200/50 rounded-3xl animate-pulse" />;
  }

  return (
    <div className="space-y-8 max-w-3xl">
      <DashboardHeader
        title="Account Settings"
        subtitle="Manage your personal profile and application preferences."
      />

      {/* Profile Form */}
      <div className="bg-white border border-gray-200 rounded-3xl p-6 sm:p-8 space-y-6">
        <h3 className="text-lg font-bold text-black pb-3 border-b border-gray-100">
          Personal Information
        </h3>

        {errorMessage && (
          <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700">
            {errorMessage}
          </div>
        )}

        <form onSubmit={handleSave} className="space-y-4">
          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase text-gray-700">Full Name</label>
            <input
              type="text"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Your Full Name"
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-sm focus:outline-hidden focus:border-[#4D4AE8] text-black"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase text-gray-700">Email Address</label>
            <input
              type="email"
              disabled
              value={email}
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-500 cursor-not-allowed"
            />
            <p className="text-[11px] text-gray-400">Email is linked to your Supabase authentication account.</p>
          </div>

          <div className="pt-2 flex items-center justify-between">
            <Button
              type="submit"
              variant="primary"
              size="sm"
              isLoading={isSaving}
              leftIcon={<Save className="w-3.5 h-3.5" />}
            >
              Save Profile
            </Button>
            {savedSuccess && (
              <span className="text-xs font-bold text-emerald-600 flex items-center gap-1">
                <Check className="w-3.5 h-3.5" /> Saved successfully!
              </span>
            )}
          </div>
        </form>
      </div>

      {/* Data & Privacy */}
      <div className="bg-white border border-gray-200 rounded-3xl p-6 sm:p-8 space-y-4">
        <h3 className="text-lg font-bold text-black pb-3 border-b border-gray-100">
          Privacy & Local Cache
        </h3>

        <p className="text-xs text-gray-500 leading-relaxed">
          Your image conversion files are processed directly inside your browser. If you wish to purge all local cached conversion history from this device, you can clear it below.
        </p>

        <Button
          variant="outline"
          size="sm"
          onClick={() => {
            if (confirm('Clear all local conversion history from this browser?')) {
              localStorage.removeItem('imagetopdf_user_conversions');
              localStorage.removeItem('imagetopdf_demo_history');
              localStorage.removeItem('imagetopdf_demo_user');
              alert('Local browser cache cleared.');
            }
          }}
          className="text-red-600 hover:text-red-700 hover:bg-red-50 border-red-200"
          leftIcon={<Trash2 className="w-3.5 h-3.5" />}
        >
          Clear Local History Cache
        </Button>
      </div>
    </div>
  );
}
