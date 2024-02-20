import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Ad Astra | Mental Health with Astronomy",
    template: `%s | Ad Astra`,
  },
  description: "The official site for Ad Astra app.",
  robots: {
    follow: true,
    index: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <Suspense>
          <main className="flex min-h-screen flex-col items-center justify-between">
            {children}
          </main>
        </Suspense>
      </body>
    </html>
  );
}
