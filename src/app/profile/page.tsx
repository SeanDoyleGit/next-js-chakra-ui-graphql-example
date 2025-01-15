"use client";

import ProfilePageUI from "@/components/ProfilePage";
import { useProfile } from "@/hooks/useProfile";

export default function ProfilePage() {
  const { username, jobTitle, avatarUrl, coverUrl, logout, updateProfile } = useProfile();

  return (
    <ProfilePageUI
      username={username}
      jobTitle={jobTitle}
      coverUrl={coverUrl}
      avatarUrl={avatarUrl}
      onLogout={logout}
      onUpdateProfile={updateProfile}
    />
  );
}
