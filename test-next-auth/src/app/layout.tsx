"use client";
import "./globals.css";
import { SessionProvider, useSession } from "next-auth/react";
import CustomHeader from "./components/header"; 
import RequireAuth from "./components/RequireAuth"; 
import CustomSidebar from "./components/sidebar"; 
import { Layout } from "antd"; 
import React, { ReactNode } from "react";  

const { Content, Footer } = Layout;

interface AuthLayoutProps {
  children: ReactNode;
}

function AuthLayout({ children }: AuthLayoutProps) {
  const { data: session } = useSession();

  if (!session) {
    return <>{children}</>;
  }

  return (
    <>
      <CustomSidebar onSelect={(key) => console.log(`Selected: ${key}`)} />
      <Layout>
        <CustomHeader /> 
        <Content style={{ margin: '24px 16px 0' }}>
          {children} 
        </Content>
      </Layout>
    </>
  );
}

interface RootLayoutProps {
  children: ReactNode; 
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <SessionProvider>
          <Layout style={{ minHeight: '100vh' }}> 
            <AuthLayout>{children}</AuthLayout>
          </Layout>
        </SessionProvider>
      </body>
    </html>
  );
}