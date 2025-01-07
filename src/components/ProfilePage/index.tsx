import type React from "react";
import { Box, Avatar, Button, VStack, Text, Center } from "@chakra-ui/react";

interface ProfilePageProps {
	username?: string;
	jobTitle?: string;
	onLogout: () => void;
}

export default function ProfilePage({ username, jobTitle, onLogout }: ProfilePageProps) {
	if (!username || !jobTitle) {
		return <Center h="100vh">Please login to view your profile</Center>;
	}

	return (
		<Box p={5}>
			<VStack spacing={4} align="center">
				<Avatar size="xl" />
				<Text>{username}</Text>
				<Text>{jobTitle}</Text>
				<Button colorScheme="blue" onClick={onLogout}>
					Logout
				</Button>
			</VStack>
		</Box>
	);
}
