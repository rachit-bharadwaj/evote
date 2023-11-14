import { ReactNode } from "react";

import type { Metadata } from "next";

import { Poppins } from "next/font/google";

import "@/app/globals.css";

// components
import { Footer, Navbar } from "@/components/shared";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: "400",
});

export const metadata: Metadata = {
  title: "eVote",
  description: "a platform for online voting",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`selection:bg-secondary selection:text-gray-100 ${poppins.variable}`}
    >
      <body className="justify-between min-h-screen flex flex-col">
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}
