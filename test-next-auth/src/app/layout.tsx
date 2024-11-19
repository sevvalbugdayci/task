"use client";
import "./globals.css";
import { SessionProvider, useSession } from "next-auth/react";
import CustomHeader from "./components/header"; 
import { useRouter } from 'next/navigation'; 
import { useEffect } from 'react';
import CustomSidebar from "./components/sidebar"; 
import { Layout } from "antd"; 
import React, { ReactNode } from "react";  

const { Content, Footer } = Layout;

interface AuthLayoutProps {
  children: ReactNode;
}

function AuthLayout({ children }: AuthLayoutProps) {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") return;
    if (!session) {
      router.push("/auth/login");
    }
  }, [session, status, router]);

  if (status === "loading") {
    return <div style={{ textAlign: 'center', marginTop: '20px' }}>Loading...</div>;
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