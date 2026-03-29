import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you're looking for doesn't exist. Return to Heritage Passport Finder to check your citizenship eligibility.",
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black flex flex-col">
      {/* Header */}
      <header className="bg-white dark:bg-zinc-900 shadow-sm">
        <nav className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-green-700 dark:text-green-400">
            Heritage Passport Finder
          </Link>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <h1 className="text-6xl font-bold text-zinc-300 dark:text-zinc-700 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
            Page Not Found
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 mb-8">
            The page you&apos;re looking for doesn&apos;t exist or has been moved. 
            Let us help you find what you need.
          </p>
          
          <div className="space-y-4">
            <Link 
              href="/"
              className="block w-full bg-green-700 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-800 transition-colors"
            >
              Go to Homepage
            </Link>
            
            <Link 
              href="/#eligibility"
              className="block w-full border border-green-700 text-green-700 dark:text-green-400 px-6 py-3 rounded-xl font-semibold hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors"
            >
              Check Eligibility
            </Link>
          </div>

          <div className="mt-12 pt-8 border-t border-zinc-200 dark:border-zinc-700">
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
              Popular Country Guides
            </h3>
            <ul className="flex flex-wrap justify-center gap-2 text-sm">
              <li>
                <Link href="/italy-citizenship-by-descent" className="text-green-700 dark:text-green-400 hover:underline">
                  Italy
                </Link>
              </li>
              <li className="text-zinc-300">•</li>
              <li>
                <Link href="/ireland-citizenship-by-descent" className="text-green-700 dark:text-green-400 hover:underline">
                  Ireland
                </Link>
              </li>
              <li className="text-zinc-300">•</li>
              <li>
                <Link href="/germany-citizenship-by-descent" className="text-green-700 dark:text-green-400 hover:underline">
                  Germany
                </Link>
              </li>
              <li className="text-zinc-300">•</li>
              <li>
                <Link href="/poland-citizenship-by-descent" className="text-green-700 dark:text-green-400 hover:underline">
                  Poland
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-200 dark:border-zinc-700 py-6 text-center text-sm text-zinc-500">
        <p>© {new Date().getFullYear()} Heritage Passport Finder · Educational use only.</p>
      </footer>
    </div>
  );
}
