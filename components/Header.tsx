import Link from "next/link";


export default function Header() {
  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-slate-200/50 sticky top-0 z-50 shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-bold text-blue-900 hover:text-blue-900 transition-colors"
          >
            Talon Software
          </Link>
          <div className="flex items-center space-x-8">
            <Link
              href="/"
              className="text-slate-700 font-medium hover:text-blue-600 transition-colors relative group"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/contact"
              className="text-slate-700 font-medium hover:text-blue-600 transition-colors relative group"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
