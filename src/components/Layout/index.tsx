"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useProfile } from "@/hooks/useProfile";
import { Box } from "@chakra-ui/react";

interface LayoutUIProps {
  username: string | null;
  avatarUrl: string | null;
  children: React.ReactNode;
}

export const LayoutUI = ({ username, avatarUrl, children }: LayoutUIProps) => {
  return (
    <Box h="100vh" pt="header-height" pb="footer-height">
      <Header username={username} avatarUrl={avatarUrl} />
      <main>{children}</main>
      <Footer />
    </Box>
  );
};

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { username, avatarUrl } = useProfile();

  return (
    <LayoutUI username={username} avatarUrl={avatarUrl}>
      {children}
    </LayoutUI>
  );
};

export default Layout;
