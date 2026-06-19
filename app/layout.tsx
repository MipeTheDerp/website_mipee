import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen flex flex-col bg-gray-50 text-gray-900 antialiased`}
      >
        {/* NAVIGATION BAR */}
        <nav className="flex items-center justify-between bg-slate-900 px-8 py-4 text-white shadow-md">
          <div className="text-2xl font-bold tracking-tight">
            Mipee<span className="text-blue-400">.</span>
          </div>
          <div className="flex gap-6 font-medium">
            <Link href="/" className="hover:text-blue-400 transition-colors">
              Home
            </Link>
            <Link href="/settings" className="hover:text-blue-400 transition-colors">
              Settings
            </Link>
            <Link href="/support" className="hover:text-blue-400 transition-colors">
              Support
            </Link>
          </div>
        </nav>

        {/* MAIN PAGE CONTENT */}
        <div className="flex-grow">{children}</div>
      </body>
    </html>
  );
}