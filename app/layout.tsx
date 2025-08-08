import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Automobili Galerija",
  description:
    "Automobili Galerija – Rabljena vozila vrhunske kvalitete iz uvoza. Pregledaj ponudu, zatraži uvoz po narudžbi i saznaj više o našoj ponudi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const year = new Date().getFullYear();
  return (
    <html lang="hr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 text-gray-900 min-h-screen`}
      >
        <header className="bg-white shadow-sm sticky top-0 z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/ag-logo.png"
                alt="AG logo"
                width={32}
                height={32}
                className="h-8 w-auto"
              />
              <span className="font-semibold text-lg hidden sm:block">
                Automobili Galerija
              </span>
            </Link>
            <nav className="flex space-x-4">
              <Link
                href="/"
                className="text-gray-700 hover:text-red-600 transition-colors"
              >
                Početna
              </Link>
              <Link
                href="/vozila"
                className="text-gray-700 hover:text-red-600 transition-colors"
              >
                Vozila
              </Link>
              <Link
                href="/uvoz"
                className="text-gray-700 hover:text-red-600 transition-colors"
              >
                Uvoz po narudžbi
              </Link>
              <Link
                href="/otkup"
                className="text-gray-700 hover:text-red-600 transition-colors"
              >
                Otkup
              </Link>
              <Link
                href="/admin"
                className="text-red-600 font-medium hover:underline"
              >
                Admin
              </Link>
            </nav>
          </div>
        </header>
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {children}
        </main>
        <footer className="bg-white border-t py-4 text-sm text-gray-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center">
            <p>© {year} Automobili Galerija. Sva prava pridržana.</p>
            <p className="mt-2 sm:mt-0">
              Osječka ul. 186, 31431 Čepin | Kardinala Alojzija Stepinca 7, Čepin
              | OIB: 41514176622 | IBAN: HR7723400091110673287 | Tel: +385 99
              234 5556
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
