import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { cormorantGaramond, nunitoSans, tuesdayNight } from "./fonts";
import "./globals.css";
import Sidebar from "./components/Sidebar";
import { SidebarProvider } from "./context/SidebarContext";
import MainContent from "./components/MainContent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next.js App with Sidebar and Footer",
  description: "A Next.js application with Tailwind CSS featuring a common sidebar and footer layout",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body 
        className={`${geistSans.variable} ${geistMono.variable} ${cormorantGaramond.variable} ${nunitoSans.variable} ${tuesdayNight.variable} antialiased`}
        suppressHydrationWarning
      >
        <SidebarProvider>
          <div className="page-container">
            <Sidebar />
            <MainContent>
              {children}
            </MainContent>
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}
