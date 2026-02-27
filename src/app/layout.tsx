import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";

import "./globals.css";
import "./global.css";

const poppinsSans = Poppins({
  variable: "--font-poppins-sans",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Timely Management",
  description: "App for employee time management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        className={`${poppinsSans.variable} antialiased`}
      > 
        {children}
      </body>
    </html>
  );
}
