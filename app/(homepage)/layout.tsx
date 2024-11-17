import HeaderAuth from "@/components/header-auth";
import { ThemeSwitcher } from "@/components/theme-switcher";
import Link from "next/link";

export default function HomepageLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen flex flex-col items-center">
      <div className="flex-1 w-full flex flex-col gap-20 items-center">
        {/* Header */}
        <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
          <div className="w-full max-w-5xl flex justify-between items-center p-3 px-5 text-sm">
            <div className="flex gap-5 items-center font-semibold">
              <Link href={"/"} className="text-lg font-semibold">
                imagemaker
              </Link>
            </div>
            <HeaderAuth />
          </div>
        </nav>
        {/* Main */}
        <div className="flex flex-col gap-20 max-w-5xl p-5">{children}</div>
        {/* Footer */}
        <footer className="w-full flex items-center justify-center border-t mx-auto text-center text-xs gap-8 py-16">
          <p>Copyright © 2024</p>
          <ThemeSwitcher />
        </footer>
      </div>
    </main>
  );
}
