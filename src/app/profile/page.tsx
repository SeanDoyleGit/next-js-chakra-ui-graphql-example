"use client";

import { useProfile } from "@/hooks/useProfile";
import ProfilePageUI from "@/components/ProfilePage";

export default function ProfilePage() {
	const { profile, logout } = useProfile();

	return <ProfilePageUI username={profile?.username} jobTitle={profile?.jobTitle} onLogout={logout} />;
}
