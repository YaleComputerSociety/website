import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
// import { Inter } from "next/font/google";
import { DM_Sans } from 'next/font/google';
import '@styles/globals.css';
// import localFont from "next/font/local";

import Navbar from '@components/Navbar';
import { Footer } from '@components/Footer';
import { AuthProvider } from '@components/AuthContext';

// const inter = Inter({ subsets: ["latin"] });
const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
});
// const mona = localFont({ src: "../fonts/Mona-Sans.woff2" });

export const metadata: Metadata = {
  title: 'Yale Computer Society',
  description: 'The biggest tech club at Yale',
  icons: {
    icon: './favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`  bg-[#000000] text-white ${dmSans.className}`}>
        <AuthProvider>
          <Navbar />
          {children}
          <Footer />
          <Analytics />
        </AuthProvider>
      </body>
    </html>
  );
}
