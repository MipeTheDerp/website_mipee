
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">

      {/* NAVIGATION BAR */}
      <nav className="flex items-center justify-between bg-slate-900 px-8 py-4 text-white shadow-md">

        {/* Logo area */}
        <div className="text-2xl font-blod tracking-tight">
          Mipee<span className="texr-blue-400"></span>
        </div>

        {/* Links area */}
        <div className="flex gap-6 font_medium">
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
      <div className="p-10">
        <h1 className="text-4xl font-extrabold mb-4">Welcome Home!👋</h1>
        <p className="text-lg text-gray-600">
          Look at that top bar!
        </p>
      </div>

    </main>
  );
}
