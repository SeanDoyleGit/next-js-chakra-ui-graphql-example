"use client";

import LoginModal from "@/components/LoginModal";
import { ProfileProvider } from "@/hooks/useProfile";
import theme from "@/theme";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import ApolloClientProvider from "./apolloClient";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <ProfileProvider>
        <ApolloClientProvider>
          {children}
          <LoginModal />
        </ApolloClientProvider>
      </ProfileProvider>
    </ChakraProvider>
  );
}
