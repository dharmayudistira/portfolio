"use client";

import { useScreenSize } from "@/hooks";
import Header from "./header";

const BaseLayout = ({ children }: { children: React.ReactNode }) => {
  const screenSize = useScreenSize();

  return (
    <div className="relative w-full h-full flex flex-col items-center border-b">
      <Header />

      <div className="flex w-full container items-stretch">
        {/* Left diagonal pattern */}
        <div className="w-8 diagonal-pattern border-x" />

        {/* Content */}
        <section className="w-full">{children}</section>

        {/* Right diagonal pattern */}
        <div className="w-8 diagonal-pattern" />
      </div>

      {/* Screen Size */}
      <div className="absolute bottom-0 right-0">
        <p className="border-t border-l rounded-tl-md p-1 text-xs text-secondary">
          {screenSize}
        </p>
      </div>
    </div>
  );
};

export default BaseLayout;
