"use client";

import ProfilePageUI from "@/components/ProfilePage";
import { useProfile } from "@/hooks/useProfile";

export default function ProfilePage() {
  const { profile, logout, updateProfile } = useProfile();

  return <ProfilePageUI username={profile?.username} jobTitle={profile?.jobTitle} onLogout={logout} onUpdateProfile={updateProfile} />;
}
