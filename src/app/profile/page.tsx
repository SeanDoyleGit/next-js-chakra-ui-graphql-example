"use client";

import type React from "react";
import { useProfile } from "@/hooks/useProfile";
import ProfilePageUI from "@/components/ProfilePage";

export default function ProfilePage() {
	const { profile, logout } = useProfile();

	return <ProfilePageUI username={profile?.username} jobTitle={profile?.jobTitle} onLogout={logout} />;
}
