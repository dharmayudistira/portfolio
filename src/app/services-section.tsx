"use client";

import Card from "@/components/ui/card";
import { Gap } from "@/components/ui";

const ServicesSection = () => {
  return (
    <section className="w-full flex flex-col">
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
            <div className="h-12 w-full content-end border-b">
              <p className="text-secondary px-2 font-code tracking-wide text-sm">
                text-3xl font-bold
              </p>
            </div>

            <div className="w-full border-b">
              <p className="h-36 content-end text-white text-3xl font-bold px-2">
                This is What I Do.  
              </p>
            </div>
          </div>
        </div>
      </div>

      <Gap size="sm" />

      <div className="w-full bg-secondary p-2 space-y-4">
        <Card.Service
          title="ReactJS | NextJS | Tauri | PWA"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
          leading={
            <div className="flex flex-col gap-4">
              <p className="text-secondary font-code tracking-wide text-sm">
                [ 00 ]
              </p>

              <p className="text-primary font-bold text-2xl">
                Website & Desktop
              </p>
            </div>
          }
        />

        <Card.Service
          title="Webflow | Framer"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
          leading={
            <div className="flex flex-col gap-4">
              <p className="text-secondary font-code tracking-wide text-sm">
                [ 01 ]
              </p>

              <p className="text-primary font-bold text-2xl">
                No-code Development
              </p>
            </div>
          }
        />

        <Card.Service
          title="Flutter | Android"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
          leading={
            <div className="flex flex-col gap-4">
              <p className="text-secondary font-code tracking-wide text-sm">
                [ 02 ]
              </p>

              <p className="text-primary font-bold text-2xl">
                Mobile
              </p>
            </div>
          }
        />
      </div>
    </section>
  );
};

export default ServicesSection;
