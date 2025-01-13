"use client";
import HomePageUI from "@/components/HomePage";
import { useColorMode } from "@chakra-ui/react";

export default function HomePage() {
  const { colorMode, toggleColorMode } = useColorMode();

  return <HomePageUI colorMode={colorMode} toggleColorMode={toggleColorMode} />;
}
