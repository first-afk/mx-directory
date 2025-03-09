import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import 'easymde/dist/easymde.min.css';
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const workFamily = localFont(  {
  src: [
    {
      path: './fonts/WorkSans-Black.ttf',
      weight: "900",
      style: "normal",
    },
    {
      path: './fonts/WorkSans-ExtraBold.ttf',
      weight: "800",
      style: "normal",
    },
    {
      path: './fonts/WorkSans-Bold.ttf',
      weight: "700",
      style: "normal",
    },
    {
      path: './fonts/WorkSans-SemiBold.ttf',
      weight: "600",
      style: "normal",
    },
    {
      path: './fonts/WorkSans-Medium.ttf',
      weight: "500",
      style: "normal",
    },
    {
      path: './fonts/WorkSans-Regular.ttf',
      weight: "400",
      style: "normal",
    },
    // {
    //   path: './fonts/WorkSans-Thin.ttf',
    //   weight: "300",
    //   style: "normal",
    // },
    {
      path: './fonts/WorkSans-ExtraLight.ttf',
      weight: "100",
      style: "normal",
    },
  ],
  variable: "--font-family-sans",
})
export const metadata: Metadata = {
  title: "MX Directory",
  description: "Pitch, Vote and Grow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={workFamily.variable}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
