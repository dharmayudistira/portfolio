"use client";

import { memo } from "react";
import Card from "@/components/ui/card";
import { Gap } from "@/components/ui";

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

const ServiceCard = memo(
  ({ service }: { service: (typeof SERVICES)[number] }) => (
    <Card.Service
      key={service.id}
      title={service.tech}
      description={service.description}
      leading={
        <div className="flex flex-col gap-4">
          <p className="text-secondary font-code tracking-wide text-sm">
            [ {service.id} ]
          </p>
          <p className="text-primary font-bold text-2xl">{service.title}</p>
        </div>
      }
    />
  )
);

ServiceCard.displayName = "ServiceCard";

const SectionHeader = memo(() => (
  <div className="w-full grid grid-cols-12">
    <div className="col-span-4">
      <div className="h-full w-full content-end border-r">
        <p className="text-secondary px-2 font-code tracking-wide text-sm">
          [ services section ]
        </p>
      </div>
    </div>

    <div className="col-span-8">
      <div className="w-full h-full flex flex-col justify-end">
        <div className="h-12 w-full content-end border-b-across">
          <p className="text-secondary px-2 font-code tracking-wide text-sm">
            text-3xl font-bold
          </p>
        </div>

        <div className="w-full border-b-across">
          <p className="h-36 content-end text-white text-3xl font-bold px-2">
            This is What I Do.
          </p>
        </div>
      </div>
    </div>
  </div>
));

SectionHeader.displayName = "SectionHeader";

const ServicesSection = memo(() => {
  return (
    <section className="w-full flex flex-col">
      <SectionHeader />
      <Gap size="sm" />
      <div className="w-full bg-secondary p-2 space-y-2 border-b-across">
        {SERVICES.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
});

ServicesSection.displayName = "ServicesSection";

export default ServicesSection;
