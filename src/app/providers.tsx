"use client";

import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "@/theme";
import { ProfileProvider } from "@/hooks/useProfile";
import LoginModal from "@/components/LoginModal";

export function Providers({ children }: { children: React.ReactNode }) {
	return (
		<ChakraProvider theme={theme}>
			<ColorModeScript initialColorMode={theme.config.initialColorMode} />
			<ProfileProvider>
				{children}
				<LoginModal />
			</ProfileProvider>
		</ChakraProvider>
	);
}
