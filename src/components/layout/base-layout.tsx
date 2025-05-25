"use client";

import { useScreenSize } from "@/hooks";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";
import Header from "./header";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const BaseLayout = ({ children }: { children: React.ReactNode }) => {
  const screenSize = useScreenSize();
  const pathname = usePathname();
  useSmoothScroll();

  return (
    <div className="relative w-full h-full flex flex-col items-center border-b overflow-hidden">
      <Header />

      <div className="flex w-full container items-stretch">
        {/* Left diagonal pattern */}
        <div className="w-8 diagonal-pattern border-x" />

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="w-full"
          >
            {children}
          </motion.div>
        </AnimatePresence>

        {/* Right diagonal pattern */}
        <div className="w-8 diagonal-pattern border-x" />
      </div>

      {/* Screen Size */}
      <div className="hidden xl:block absolute bottom-0 right-0">
        <p className="border-t border-l rounded-tl-md p-1 text-xs text-secondary">
          {screenSize}
        </p>
      </div>
    </div>
  );
};

export default BaseLayout;
