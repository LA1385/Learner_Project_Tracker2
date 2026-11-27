import type { Metadata } from "next";
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
  title: "Learner Project Tracker",
  description: "Track learner project submissions and weekly progress.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-slate-50 text-slate-900">

        <nav className="border-b border-slate-200 bg-slate-50 px-6 py-4">
          <div className="mx-auto max-w-5xl font-medium text-black">
            Nav Placeholder
          </div>
        </nav>

        <main className="flex-1 bg-slate-50">{children}</main>
        
        <footer className="border-t border-slate-200 bg-slate-50 px-6 py-4 text-sm text-slate-600">
          <div className="mx-auto max-w-5xl">
            Learner Project Tracker &copy; 2026
          </div>
        </footer>
      </body>
    </html>
  );
}
