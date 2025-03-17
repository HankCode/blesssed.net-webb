import type React from "react";
import { Sidebar } from "./_components/sidebar";
import { Header } from "./_components/header";
import { MobileNav } from "./_components/mobile-nav";

export const metadata = {
  title: "Manifest",
  description: "Personal desire manifestation app",
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen">
          <div className="hidden md:flex md:w-64 md:flex-col">
            <Sidebar />
          </div>
          <div className="flex flex-1 flex-col">
            <Header />
            <main className="flex-1 pb-16 md:pb-0">{children}</main>
            <MobileNav />
          </div>
        </div>
      </body>
    </html>
  );
}
