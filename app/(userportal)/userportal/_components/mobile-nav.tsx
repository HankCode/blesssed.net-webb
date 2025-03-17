"use client";

import { cn } from "@/lib/utils";
import { Home, Users, Star, FileAudio, UserCircle } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const routes = [
  {
    label: "Home",
    icon: Home,
    href: "/",
  },
  {
    label: "Explore",
    icon: Users,
    href: "/explore",
  },
  {
    label: "Desires",
    icon: Star,
    href: "/desires",
  },
  {
    label: "Audio",
    icon: FileAudio,
    href: "/audio",
  },
  {
    label: "Profile",
    icon: UserCircle,
    href: "/profile",
  },
];

export function MobileNav() {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex justify-around items-center h-16 bg-white border-t md:hidden">
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            "flex flex-col items-center justify-center w-full h-full",
            pathname === route.href || pathname.startsWith(`${route.href}/`)
              ? "text-primary"
              : "text-muted-foreground"
          )}
        >
          <route.icon className="h-5 w-5" />
          <span className="text-xs mt-1">{route.label}</span>
        </Link>
      ))}
    </div>
  );
}
