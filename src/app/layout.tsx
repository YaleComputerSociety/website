import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@styles/globals.css";
// import localFont from "next/font/local";

import Navbar from "@components/Navbar";
import { Footer } from "@components/Footer";

const inter = Inter({ subsets: ["latin"] });
// const mona = localFont({ src: "../fonts/Mona-Sans.woff2" });

export const metadata: Metadata = {
  title: "Yale Computer Society",
  description: "The biggest tech club at Yale",
  icons: {
    icon: "./favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
