"use client";

import { useState, useEffect } from "react";
import HeaderAuth from "@/components/header-auth";
import Link from "next/link";

const HomeHeader = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if page is scrolled more than 10px
      setScrolled(window.scrollY > 10);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Call handleScroll initially to set the correct state
    handleScroll();

    // Remove event listener on cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate header height: normal is 16 (h-16 = 4rem = 64px), 40% larger is 64px * 1.4 = 89.6px
  // Convert to rem for better scaling: 89.6px / 16 = 5.6rem

  return (
    <nav
      className={`w-full flex justify-center fixed z-40 transition-all duration-300 ${
        scrolled ? "bg-white h-16" : "bg-transparent h-[5.6rem]"
      }`}
    >
      <div className="w-full max-w-5xl flex justify-between items-center p-3 px-5 text-sm">
        <div className="flex gap-5 items-center font-semibold">
          <Link href={"/"} className="text-lg font-semibold">
            <img
              src="/img/blesssed-logo.png"
              alt="Blesssed"
              className={`transition-all duration-300 ${scrolled ? "h-10" : "h-14"}`}
            />
          </Link>
        </div>
        <HeaderAuth />
      </div>
    </nav>
  );
};

export default HomeHeader;
