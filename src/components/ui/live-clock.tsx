"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const LiveClock = ({ className }: { className?: string }) => {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const formatter = new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Jakarta",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true, // Enable 12-hour format with AM/PM
      });
      const now = new Date();
      setTime(formatter.format(now));
    };

    updateTime(); // Set initial time
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return <span className={cn("font-mono", className)}>{time}</span>;
};

export default LiveClock;
