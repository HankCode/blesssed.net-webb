import type React from "react";
import Link from "next/link";

export default function ExploreLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Explore</h2>
      </div>

      <div className="border-b pb-2">
        <nav className="flex gap-4 overflow-x-auto">
          <Link
            href="/userportal/explore"
            className="text-sm font-medium hover:text-primary px-1 py-2 border-b-2 border-primary"
          >
            Overview
          </Link>
          <Link
            href="/userportal/explore/success-stories"
            className="text-sm font-medium text-muted-foreground hover:text-primary px-1 py-2"
          >
            Success Stories
          </Link>
          <Link
            href="/userportal/explore/community"
            className="text-sm font-medium text-muted-foreground hover:text-primary px-1 py-2"
          >
            Community
          </Link>
          <Link
            href="/userportal/explore/events"
            className="text-sm font-medium text-muted-foreground hover:text-primary px-1 py-2"
          >
            Events
          </Link>
        </nav>
      </div>

      {children}
    </div>
  );
}
