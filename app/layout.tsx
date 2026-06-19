import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link"; // VIKTIG: Vi må huske å importere Link her nå!



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Mipee - Home", // <-- Bytt ut "Create Next App" med det du vil at skal stå i fanen!
  description: "Velkommen til min nye nettside", // Du kan også endre denne hvis du vil
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

    {/* NAVIGATION BAR - Ligger nå i layout, og vises på ALLE sider automatisk! */}
    <nav className="flex items-center justify-between bg-slate-900 px-8 py-4 text-white shadow-md">
      {/* Logo area */}
      <div className="text-2xl font-bold tracking-tight">
        Mipee<span className="text-blue-400"></span>
      </div>

      {/* Links area */}
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

    {/* Her lastes innholdet fra de forskjellige sidene inn (Home, Support osv.) */}
    <div className="flex-grow">
      {children}
    </div>
    
    <body className="min-h-full flex flex-col">{children}</body>
  </html>
  );
}


