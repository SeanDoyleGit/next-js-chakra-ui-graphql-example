"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Box } from "@chakra-ui/react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box minH="100vh" pt="header-height" pb="footer-height">
      <Header />
      <main>{children}</main>
      <Footer />
    </Box>
  );
};

export default Layout;
