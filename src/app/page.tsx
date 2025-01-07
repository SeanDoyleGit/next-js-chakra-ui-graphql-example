"use client";
import { useColorMode } from "@chakra-ui/react";
import HomePageUI from "@/components/HomePage";

export default function HomePage() {
	const { colorMode, toggleColorMode } = useColorMode();

	return <HomePageUI colorMode={colorMode} toggleColorMode={toggleColorMode} />;
}
