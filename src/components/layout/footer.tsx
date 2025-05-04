import Link from "next/link";
import { Button, Gap } from "../ui";

const Footer = () => {
  return (
    <footer className="w-full flex flex-col">
      <div className="h-24 w-full content-end border-across">
        <p className="text-secondary px-2 font-code tracking-wide text-sm">
          [ have a project in mind? ]
        </p>
      </div>

      <div className="w-full px-2 border-across">
        <p className="text-white text-6xl font-bold tracking-tighter">
          Let&apos;s Talk with Me.
        </p>
      </div>

      <div className="h-12 w-full content-end border-across">
        <p className="text-secondary px-2 font-code tracking-wide text-sm">
          text-secondary font-bold
        </p>
      </div>

      <div className="w-full px-2 border-across">
        <p className="text-secondary-light text-xl">
          Feel free to drop me a line with project details. It would be a
          pleasure to help you with your website!
        </p>
      </div>

      <Gap size="sm" />

      <Link href="/about" className="px-2 border-across">
        <Button variant="secondary">Go to About</Button>
      </Link>

      <Gap size="sm" />
      <Gap size="sm" pattern="diagonal" />

      <div className="w-full h-48 flex justify-center items-end overflow-hidden">
        <p className="font-bold text-9xl -mb-3 tracking-tight bg-gradient-to-b from-white to-transparent text-transparent bg-clip-text">
          Product Engineer
        </p>
      </div>
    </footer>
  );
};

export default Footer;
