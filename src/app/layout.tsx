import type { Metadata } from "next";
import { Inter } from "next/font/google";
<<<<<<< HEAD
<<<<<<< HEAD
import "@styles/globals.css";
// import localFont from "next/font/local";

=======

import "@styles/globals.css";
>>>>>>> d4869af (Rewrite the entire codebase in nextjs with stricter eslint and typescript settings)
=======
import "@styles/globals.css";
// import localFont from "next/font/local";

>>>>>>> 96faa32 (Add ian photo)
import Navbar from "@components/Navbar";
import { Footer } from "@components/Footer";

const inter = Inter({ subsets: ["latin"] });
<<<<<<< HEAD
<<<<<<< HEAD
// const mona = localFont({ src: "../fonts/Mona-Sans.woff2" });
=======
>>>>>>> d4869af (Rewrite the entire codebase in nextjs with stricter eslint and typescript settings)
=======
// const mona = localFont({ src: "../fonts/Mona-Sans.woff2" });
>>>>>>> 96faa32 (Add ian photo)

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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      <body className={`bg-ycs-black text-white ${inter.className}`}>
=======
      <body className={inter.className}>
>>>>>>> d4869af (Rewrite the entire codebase in nextjs with stricter eslint and typescript settings)
=======
      <body className={`bg-ycs-black ${inter.className}`}>
>>>>>>> e793b80 (Attempt to fix background color bug)
=======
      <body className={`bg-ycs-black text-white ${inter.className}`}>
>>>>>>> f88d129 (Fix safari sponsors placement glitch; attempt to fix infrequent black text glitch)
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
