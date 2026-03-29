import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";
import LoadingScreen from "@/components/LoadingScreen";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nexio Dev - Digital Solutions for Your Business",
  description: "Tailwind Template for Startups - Digital Solutions for Your Business",
  icons: {
    icon: [
      { url: "/images/Logos/ND3.jpg", sizes: "any", type: "image/jpeg" },
      { url: "/favicon.ico", sizes: "any" }
    ],
    shortcut: "/images/Logos/ND3.jpg",
    apple: [
      { url: "/images/Logos/ND3.jpg", sizes: "180x180", type: "image/jpeg" }
    ],
    other: [
      { rel: "icon", url: "/images/Logos/ND3.jpg", sizes: "any" }
    ]
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slate-900">
        <ClientLayout>
          <LoadingScreen />
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
