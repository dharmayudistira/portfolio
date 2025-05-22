"use client";

import { Button } from "@/components/ui";
import { cn } from "@/lib/utils";
import Image from "next/image";

export type ExperienceItem = {
  companyLogo: string;
  companyName: string;
  role: string;
  startDate: string;
  endDate: string;
};

const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    companyLogo: "/images/zog.jpg",
    companyName: "Zero One Group",
    role: "Product Engineer",
    startDate: "September 2022",
    endDate: "Present",
  },
  {
    companyLogo: "/images/dicoding.jpg",
    companyName: "Dicoding",
    role: "External Reviewer",
    startDate: "Part-Time / On-Demand",
    endDate: "",
  },
  {
    companyLogo: "/images/dicoding.jpg",
    companyName: "Kampus Merdeka x Dicoding",
    role: "Multiplatform Graduate",
    startDate: "August 2021",
    endDate: "January 2022",
  },
  {
    companyLogo: "/images/neurafarm.jpg",
    companyName: "Neurafarm",
    role: "Software Engineer - Flutter",
    startDate: "June 2021",
    endDate: "September 2021",
  },
  {
    companyLogo: "/images/bangkit.jpeg",
    companyName: "Bangkit Academy 2021",
    role: "Mobile Development Graduate",
    startDate: "Februari 2021",
    endDate: "July 2021",
  },
  {
    companyLogo: "/images/dsc.jpg",
    companyName: "Google Developer Student Clubs",
    role: "Lead",
    startDate: "August 2019",
    endDate: "August 2020",
  },
];

interface ExperienceItemProps extends ExperienceItem {
  index: number;
  isLast: boolean;
}

const ExperienceItem = ({
  index,
  companyLogo,
  companyName,
  role,
  startDate,
  endDate,
  isLast,
}: ExperienceItemProps) => {
  const dateRange = endDate
    ? `[ ${startDate} - ${endDate} ]`
    : `[ ${startDate} ]`;

  return (
    <div className={cn("grid grid-cols-12", !isLast && "border-b")}>
      <div className="col-span-2 flex items-center justify-center p-3 border-r">
        <div className="p-1 border border-dashed rounded-xl">
          <Image
            src={companyLogo}
            alt={`${companyName} logo`}
            width={40}
            height={40}
            className="rounded-lg"
            loading={index === 0 ? "eager" : "lazy"}
            priority={index === 0}
          />
        </div>
      </div>
      <div className="col-span-10 flex justify-between px-2">
        <div className="flex flex-col justify-center gap-1">
          <p className="text-white text-lg font-bold">{companyName}</p>
          <p className="text-secondary-light text-sm">{role}</p>
        </div>

        <p className="text-secondary-light text-sm pt-2">{dateRange}</p>
      </div>
    </div>
  );
};

const ExperienceSection = () => {
  return (
    <div className="grid grid-cols-12 border-b-across">
      <div className="col-span-5 border-r px-2 flex flex-col gap-4 pt-4">
        <p className="text-3xl font-bold text-white">
          Experience with a variety of Projects and industries.
        </p>
        <p className="text-secondary-light">
          Hands-on experience across mobile, web, and desktop — solving
          problems, building products, and learning along the way.
        </p>

        <Button
          variant="secondary"
          className="mt-4"
          onClick={() => {
            window.open("/pdf/dharma-resume.pdf");
          }}
        >
          Download CV
        </Button>
      </div>

      <div className="col-span-7 pt-4 flex flex-col">
        <div className="h-12 content-end border-b">
          <p className="text-secondary px-2 font-code tracking-wide text-sm">
            [ experiences ]
          </p>
        </div>
        {EXPERIENCE_ITEMS.map((item, index) => (
          <ExperienceItem
            key={`${item.companyName}-${index}`}
            {...item}
            index={index}
            isLast={index === EXPERIENCE_ITEMS.length - 1}
          />
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;
