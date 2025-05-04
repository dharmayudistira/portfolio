"use client";

import { Card, Gap } from "@/components/ui";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface Testimonial {
  name: string;
  company: string;
  review: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah Chen",
    company: "Microsoft",
    review:
      "Working with Dharma was a fantastic experience. His attention to detail and ability to deliver clean, efficient code made our project a success. His expertise in React and TypeScript really showed in the final product.",
  },
  {
    name: "Michael Rodriguez",
    company: "Tesla",
    review:
      "Dharma is an exceptional developer who brings both technical excellence and creative problem-solving to every project. He helped us optimize our web application performance and implement modern design patterns.",
  },
  {
    name: "Emily Thompson",
    company: "Amazon",
    review:
      "I was impressed by Dharma's ability to translate complex requirements into elegant solutions. His communication skills and proactive approach made the development process smooth and efficient.",
  },
  {
    name: "James Wilson",
    company: "Meta",
    review:
      "Dharma demonstrated outstanding expertise in frontend development. His work on our user interface significantly improved our application's user experience and performance metrics.",
  },
  {
    name: "Sophia Patel",
    company: "Netflix",
    review:
      "A truly talented developer who combines technical skill with great project management. Dharma consistently delivered high-quality code and was always ready to tackle new challenges.",
  },
  {
    name: "David Kim",
    company: "Adobe",
    review:
      "Working with Dharma was a pleasure. His deep understanding of modern web technologies and best practices helped us create a robust and scalable application.",
  },
  {
    name: "Lisa Anderson",
    company: "Spotify",
    review:
      "Dharma brought invaluable insights to our project. His expertise in frontend architecture and commitment to code quality resulted in a product that exceeded our expectations.",
  },
];

const TestimoniesSection = () => {
  return (
    <section className="w-full flex flex-col">
      <div className="w-full grid grid-cols-12">
        <div className="col-span-1 md:col-span-4">
          <div className="h-full w-full content-end border-r">
            <p className="text-secondary px-2 font-code tracking-wide text-sm">
              [ testimonies section ]
            </p>
          </div>
        </div>

        <div className="col-span-8">
          <div className="w-full h-full flex flex-col justify-end">
            <div className="h-12 w-full content-end border-across">
              <p className="text-secondary px-2 font-code tracking-wide text-sm">
                text-3xl font-bold
              </p>
            </div>

            <div className="w-full border-across">
              <p className="h-36 content-end text-white text-3xl font-bold px-2">
                Words from Those I&apos;ve Worked With.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Gap size="sm" pattern="diagonal" />

      <div className="grid grid-cols-12">
        <div className="col-span-4 p-4 border-r border-across flex justify-center items-center">
          <Image
            src="/icons/quote.png"
            alt="Quotation Mark"
            width={100}
            height={100}
            priority
          />
        </div>

        {testimonials.map((testimonial, index) => (
          <Card.Testimony
            key={`${testimonial.name}-${index}`}
            className={cn(
              `${index === 2 || index === 5 ? "border-across border-r" : ""}`,
              `${index === 0 || index === 3 || index === 6 ? "border-r" : ""}`
            )}
            name={testimonial.name}
            company={testimonial.company}
            review={testimonial.review}
          />
        ))}
      </div>
    </section>
  );
};

export default TestimoniesSection;
