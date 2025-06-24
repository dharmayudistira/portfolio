import Link from "next/link";
import { Button, Gap } from "../ui";

export const Footer = () => {
  return (
    <footer className="w-full flex flex-col">
      <div className="h-12 xl:h-24 w-full content-end border-b-across">
        <p className="text-secondary px-2 font-code tracking-wide text-xs xl:text-sm">
          [ have a project in mind? ]
        </p>
      </div>

      <div className="w-full px-2 border-b-across">
        <p className="text-white text-3xl xl:text-6xl font-bold tracking-tighter">
          Let&apos;s Talk with Me.
        </p>
      </div>

      <Gap size="sm" />

      <Link href="/about" className="px-2 border-b-across">
        <Button variant="secondary">Go to About</Button>
      </Link>

      <Gap size="sm" />
      <Gap size="sm" pattern="diagonal" />

      <div className="w-full h-24 xl:h-48 flex justify-center items-end overflow-hidden">
        <p className="font-bold text-[3rem] xl:text-9xl -mb-4.5 xl:-mb-3 tracking-tight bg-gradient-to-b from-white to-transparent text-transparent bg-clip-text whitespace-nowrap xl:whitespace-normal">
          Product Engineer
        </p>
      </div>
    </footer>
  );
};
