"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconPlus } from "../ui";
import { motion } from "framer-motion";
import { memo, useState } from "react";
import Image from "next/image";
import { IoMenuSharp, IoCloseSharp } from "react-icons/io5";
import { cn } from "@/lib/utils";

interface NavigationItemProps {
  href: string;
  label: string;
}

const navigationItems = [
  { href: "/", label: "Home" },
  { href: "/playgrounds", label: "Playgrounds" },
  { href: "/blogs", label: "Blogs" },
  { href: "/about", label: "About" },
] as const;

const navItemVariants = {
  hover: { scale: 1.05 },
  tap: { scale: 0.95 },
};

const ActiveStateOverlay = memo(() => (
  <motion.div
    layoutId="activeNavItem"
    className="absolute inset-0 border border-dashed border-[#66D1FF] bg-[#66D1FF]/15"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.2 }}
  >
    <IconPlus className="absolute -top-2 -left-2 w-4 h-4" color="#66D1FF" />
    <IconPlus className="absolute -bottom-2 -left-2 w-4 h-4" color="#66D1FF" />
    <IconPlus className="absolute -top-2 -right-2 w-4 h-4" color="#66D1FF" />
    <IconPlus className="absolute -bottom-2 -right-2 w-4 h-4" color="#66D1FF" />
  </motion.div>
));

ActiveStateOverlay.displayName = "ActiveStateOverlay";

const NavigationItem = memo(({ href, label }: NavigationItemProps) => {
  const pathname = usePathname();
  const isActive = pathname?.split("/")[1] === href.replace("/", "");

  return (
    <Link href={href}>
      <div className="relative">
        {isActive && <ActiveStateOverlay />}
        <motion.p
          className={cn("px-1 text-sm xl:text-base", {
            "text-primary": isActive,
            "text-white": !isActive,
          })}
          variants={navItemVariants}
          whileHover="hover"
          whileTap="tap"
          transition={{ duration: 0.2 }}
        >
          {label}
        </motion.p>
      </div>
    </Link>
  );
});

NavigationItem.displayName = "NavigationItem";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full flex flex-col bg-background backdrop-blur-sm overflow-x-hidden">
      <div className="w-full py-2 container flex justify-between items-center border-b-across">
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="Dharma's Portfolio"
            width={128}
            height={128}
            className="w-10 h-10 rounded-lg"
          />
        </Link>

        <nav className="hidden gap-4 text-white xl:flex">
          {navigationItems.map((item) => (
            <NavigationItem
              key={item.href}
              href={item.href}
              label={item.label}
            />
          ))}
        </nav>

        {isMenuOpen ? (
          <motion.div
            className="xl:hidden"
            key="close"
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.2, type: "spring", stiffness: 200 }}
          >
            <IoCloseSharp
              className="text-primary  w-6 h-6"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
          </motion.div>
        ) : (
          <motion.div
            className="xl:hidden"
            key="menu"
            initial={{ rotate: 90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: -90, opacity: 0 }}
            transition={{ duration: 0.2, type: "spring", stiffness: 200 }}
          >
            <IoMenuSharp
              className="text-primary w-6 h-6"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
          </motion.div>
        )}
      </div>

      {isMenuOpen && (
        <div
          className={cn(
            "w-full transition-all duration-300 px-4 py-4 border-b-across"
          )}
        >
          <nav className="flex gap-4 text-white">
            {navigationItems.map((item) => (
              <NavigationItem
                key={item.href}
                href={item.href}
                label={item.label}
              />
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default memo(Header);
