import { ThemeSwitcher } from "@/components/theme-switcher";
import React from "react";

const HomeFooter = () => {
  return (
    <footer className="w-full flex items-center justify-center border-t mx-auto text-center text-xs gap-8 py-16">
      <p>Copyright © 2024</p>
      <ThemeSwitcher />
    </footer>
  );
};

export default HomeFooter;
