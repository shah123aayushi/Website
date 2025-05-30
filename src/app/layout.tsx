import type { Metadata } from "next";
import Link from "next/link"; 
import "./globals.css";



export const metadata: Metadata = {
  title: "My Website",
  
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="bg-black text-white py-4 px-6">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">My Website</h1>
            <nav className="flex gap-6 text-sm">
              <Link href="/home" className="hover:underline">Home</Link>
              <Link href="/about" className="hover:underline">About</Link>
              <Link href="/contact" className="hover:underline">Contact</Link>
            </nav>
          </div>
        </header>

        <main className="max-w-6xl mx-auto py-10 px-6">{children}</main>

       
      </body>
    </html>
  );
}
