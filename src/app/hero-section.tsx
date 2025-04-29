import Link from "next/link";
import { ExternalLinkIcon } from "@radix-ui/react-icons";

const HeroSection = () => {
  return (
    <section className="w-full flex flex-col">
      <div className="h-24 w-full content-end border-b">
        <p className="text-secondary px-2 font-code tracking-wide text-sm">
          [ hero section ]
        </p>
      </div>

      <div className="w-full border-b px-2">
        <p className="text-white text-8xl font-bold tracking-tighter">
          Building Scalable Apps for Web, Mobile & Desktop.
        </p>
      </div>

      <div className="h-12 w-full content-end border-b">
        <p className="text-secondary px-2 font-code tracking-wide text-sm">
          text-secondary font-bold
        </p>
      </div>

      <div className="w-full px-2">
        <p className="text-secondary-light text-xl">
          Hi, I&apos;m{" "}
          <span className="text-primary font-bold">Dharma Yudistira</span>—a
          product engineer focused on seamless digital experiences across web
          and mobile. <br /> I currently work at{" "}
          <span className="text-primary font-bold">
            <Link
              href="https://zero-one-group.com"
              target="_blank"
              className="inline-flex items-center gap-2"
            >
              Zero One Group
              <ExternalLinkIcon className="w-4 h-4" />
            </Link>
          </span>
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
