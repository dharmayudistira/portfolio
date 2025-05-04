// "use client";

// import Lenis from "lenis";
// import { useEffect, useState } from "react";

// const ScrollContext = ({ children }: { children: React.ReactNode }) => {
//   const [lenis, setLenis] = useState<Lenis | null>(null);
//   const [raf, setRaf] = useState<number | null>(null);

//   useEffect(() => {
//     const scroller = new Lenis();

//     function raf(time: any) {
//       scroller.raf(time);
//       return requestAnimationFrame(raf);
//     }

//     const rf = requestAnimationFrame(raf);
//     setRaf(rf);
//     setLenis(scroller);

//     return () => {
//       if (lenis) {
//         cancelAnimationFrame(raf);
//         scroller.destroy();
//       }
//     };
//   }, []);

//   return <></>;
// };

// export default ScrollContext;
