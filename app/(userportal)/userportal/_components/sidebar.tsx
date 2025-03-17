"use client";

import { cn } from "@/lib/utils";
import { Home, Users, Star, FileAudio, BookOpen, UserCircle } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const routes = [
  {
    label: "Home",
    icon: Home,
    href: "/userportal/",
    color: "text-slate-500",
  },
  {
    label: "Explore",
    icon: Users,
    href: "/userportal/explore",
    color: "text-slate-500",
  },
  {
    label: "Desires",
    icon: Star,
    href: "/userportal/desires",
    color: "text-slate-500",
  },
  {
    label: "Audio",
    icon: FileAudio,
    href: "/userportal/audio",
    color: "text-slate-500",
  },
  // {
  //   label: "Coaching",
  //   icon: BookOpen,
  //   href: "userportal/coaching",
  //   color: "text-slate-500",
  // },
  {
    label: "Profile",
    icon: UserCircle,
    href: "/userportal/profile",
    color: "text-slate-500",
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-white border-r">
      <div className="px-3 py-2 flex-1">
        <Link href="/" className="flex items-center pl-3 mb-10">
          <h1 className="text-xl font-bold">Manifest</h1>
        </Link>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:bg-slate-100 rounded-lg transition",
                pathname === route.href ? "bg-slate-100" : "text-slate-500"
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
