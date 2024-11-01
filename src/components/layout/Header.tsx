"use client";

import { useEffect, useState } from "react";
import DesktopNavigation from "./DesktopNavigation";
import Logo from "./Logo";
import MobileNavigation from "./MobileNavigation";
import { cn } from "@/lib/utils";

export default function Header() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 w-full py-5 bg-slate-100/95 backdrop-blur-sm z-50 transition duration-500",
        scroll ? "shadow-2xl" : ""
      )}
    >
      <nav className="container mx-auto px-3 md:px-5">
        <div className="w-full flex items-center justify-between">
          <Logo />
          <MobileNavigation />
          <DesktopNavigation />
        </div>
      </nav>
    </header>
  );
}
