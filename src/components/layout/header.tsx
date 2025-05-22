import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconPlus } from "../ui";
import { motion } from "framer-motion";
import { memo } from "react";

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
    className="absolute inset-0 border border-dashed border-[#66D1FF]"
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
          className={`px-1 ${isActive ? "text-primary" : "text-white"}`}
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
  return (
    <header className="sticky top-0 z-50 w-full flex justify-center items-center border-b">
      <div className="w-full py-2 container flex justify-between items-center">
        <p className="text-2xl text-white font-bold">Dharma&apos;s Portfolio</p>

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
    </header>
  );
};

export default memo(Header);
