import { LiveClock } from "@/components/ui";
import Image from "next/image";
import Link from "next/link";

interface SocialLink {
  href: string;
  icon: string;
  alt: string;
}

const socialLinks: SocialLink[] = [
  {
    href: "https://github.com/dharmayudistira",
    icon: "/icons/git.png",
    alt: "GitHub",
  },
  {
    href: "mailto:dharmayudistira2000@gmail.com",
    icon: "/icons/gmail.png",
    alt: "Gmail",
  },
  {
    href: "https://www.instagram.com/dharmayudistira_/",
    icon: "/icons/instagram.png",
    alt: "Instagram",
  },
  {
    href: "https://www.linkedin.com/in/dharmayudistira/",
    icon: "/icons/linkedin.png",
    alt: "LinkedIn",
  },
];

const SocialLinks = () => (
  <div className="w-fit bg-color absolute bottom-2 right-2 rounded-tl-xl border-l border-t flex gap-2 p-2">
    {socialLinks.map((link) => (
      <Link key={link.alt} href={link.href} target="_blank">
        <div className="border rounded-lg p-1.5 hover:bg-[#42454E]/80 transition-all duration-300 cursor-pointer">
          <Image
            src={link.icon}
            alt={link.alt}
            width={20}
            height={20}
            className="w-5 h-5"
            loading="lazy"
          />
        </div>
      </Link>
    ))}
  </div>
);

const HeroSection = () => {
  return (
    <>
      <div className="w-full h-12 xl:h-24"/>

      <div className="grid grid-cols-12 border-b-across border-t-across">
        <div className="col-span-12 xl:col-span-9 xl:border-r">
          <h1 className="mt-4 text-white text-4xl xl:text-6xl tracking-tighter px-2 font-bold border-b">
            Dharma Yudistira Eka Putra
          </h1>

          <p className="mt-4 border-b text-secondary px-2 font-code tracking-wide text-xs xl:text-sm">
            Greetings from{" "}
            <span className="text-secondary-light font-bold">
              Sidoarjo, Indonesia!
            </span>{" "}
            It&apos;s{" "}
            <LiveClock className="inline-block text-secondary-light font-bold" />{" "}
            here right now.
          </p>

          <p className="mt-10 border-b xl:border-b-0 text-secondary-light px-2.5 font-code tracking-wide text-xs xl:text-sm w-full xl:w-3/4">
            — a <span className="text-primary">Product Engineer</span> who loves
            turning ideas into clean, useful, and reliable digital products.
            <br />
            <br />I build for web, mobile, and desktop using stacks like{" "}
            <span className="text-primary">
              Flutter, Android Native, React/Next.js, and Tauri.
            </span>{" "}
            From fintech to e-commerce to internal automation, I focus on smooth
            user experiences and solid performance.
            <br />
            <br />
            Some highlights: a sneaker app with 100K+ downloads, a digital
            investment platform focused on transparency, and internal tools for
            streamlining multi-device data scraping and payment operations.
            <br />
            <br />
            I&apos;m a proud grad of State Polytechnic of Malang, a Top 10% grad
            of Bangkit 2021 Academy, was a Google Associate Android Developer,
            and once led a chapter of Google Developer Student Clubs.
            <br />
            <br />
            Now at{" "}
            <span className="text-primary font-bold">
              <Link
                href="https://zero-one-group.com"
                target="_blank"
                className="hover:underline"
              >
                Zero One Group
              </Link>
            </span>
            , I&apos;m helping shape digital products that make an impact. When
            I&apos;m not coding, I&apos;m probably mentoring, learning, or
            building something just for fun.
          </p>
        </div>

        <div className="col-span-12 xl:col-span-3 p-6 flex justify-center items-center dots-pattern">
          <div className="w-full p-2 h-full bg-color border rounded-xl border-dashed border-[#66D1FF] relative">
            <Image
              src="/images/profile-picture.jpg"
              alt="Profile"
              width={500}
              height={500}
              className="w-full h-full object-cover rounded-lg"
              priority
              quality={90}
            />
            <SocialLinks />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
