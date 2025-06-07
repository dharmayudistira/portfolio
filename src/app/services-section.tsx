import { Gap, ImageComparison, ServiceCard } from "@/components/ui";

const SERVICES = [
  {
    id: "00",
    title: "Website & Desktop",
    tech: "ReactJS | NextJS | Tauri | PWA",
    description:
      "I build fast, scalable, and modern websites and desktop apps — from sleek landing pages to robust internal platforms. Always optimized for performance and usability.",
  },
  {
    id: "01",
    title: "No-code Development",
    tech: "Webflow | Framer",
    description:
      "Need to launch fast? I use no-code tools to build clean, responsive sites — perfect for startups, portfolios, and MVPs — without sacrificing quality.",
  },
  {
    id: "02",
    title: "Mobile",
    tech: "Flutter | Android",
    description:
      "Cross-platform apps built with performance and polish. From Android-native to Flutter-based solutions, I deliver reliable mobile experiences that scale.",
  },
] as const;

const ServiceItem = ({ service }: { service: (typeof SERVICES)[number] }) => (
  <ServiceCard
    key={service.id}
    title={service.tech}
    description={service.description}
    leading={
      <div className="flex flex-col gap-4">
        <p className="text-secondary font-code tracking-wide text-xs xl:text-sm">
          [ {service.id} ]
        </p>
        <p className="text-primary font-bold text-xl xl:text-2xl">
          {service.title}
        </p>
      </div>
    }
  />
);

const SectionHeader = () => (
  <div className="w-full grid grid-cols-6 xl:grid-cols-12">
    <div className="col-span-2 xl:col-span-4">
      <div className="h-full w-full content-end border-r">
        <p className="text-secondary px-2 font-code tracking-wide text-xs xl:text-sm ">
          [ services <span className="hidden xl:inline">section</span> ]
        </p>
      </div>
    </div>

    <div className="col-span-4 xl:col-span-8">
      <div className="w-full h-full flex flex-col justify-end">
        <div className="h-12 w-full content-end border-b-across">
          <p className="text-secondary px-2 font-code tracking-wide xl:hidden text-xs">
            text-xl font-bold
          </p>
          <p className="text-secondary px-2 font-code tracking-wide hidden xl:block text-sm">
            text-3xl font-bold
          </p>
        </div>

        <div className="w-full border-b-across">
          <p className="h-18 xl:h-36 content-end text-white text-xl xl:text-3xl font-bold px-2">
            This is What I Do.
          </p>
        </div>
      </div>
    </div>
  </div>
);

const ServicesSection = () => {
  return (
    <section className="w-full flex flex-col">
      <SectionHeader />
      <Gap size="sm" />
      <div className="w-full bg-secondary p-2 xl:space-x-2 flex flex-col gap-2 xl:gap-0 xl:grid xl:grid-cols-12 border-b-across">
        <div className="col-span-4">
          <div className="w-full h-64 xl:h-full bg-color rounded-lg border">
            <ImageComparison
              beforeAsset="/images/web-dev.webp"
              afterAsset="/images/mobile-dev.webp"
            />
          </div>
        </div>

        <div className="col-span-8 space-y-2">
          {SERVICES.map((service) => (
            <ServiceItem key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
