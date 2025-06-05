import { Gap, TestimonyCard } from "@/components/ui";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface Testimonial {
  name: string;
  company: string;
  review: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Aris Ripandi",
    company: "Senior Product Engineer at Zero One Group",
    review:
      "Working with Dharma was a fantastic experience. His attention to detail and ability to deliver clean, efficient code made our project a success. His expertise in React and TypeScript really showed in the final product.",
  },
  {
    name: "Doni Rubiagatra",
    company: "Google Developer Expert (Cloud)",
    review:
      "Dharma brought invaluable insights to our project. His proactive attitude, expertise in frontend architecture, and commitment to code quality resulted in a product that exceeded our expectations.",
  },
  {
    name: "Muhammad Ilham Adhim",
    company: "Front-End Developer at Belli AI",
    review:
      "A truly talented developer who combines technical skill with great project management. Dharma consistently delivered high-quality code and was always ready to tackle new challenges.",
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
    name: "David Kim",
    company: "Adobe",
    review:
      "Working with Dharma was a pleasure. His deep understanding of modern web technologies and best practices helped us create a robust and scalable application.",
  },
];

const QuoteImage = () => (
  <Image
    src="/icons/quote.png"
    alt="Quotation Mark"
    width={100}
    height={100}
    priority
    quality={90}
    className="object-contain w-12 h-12 xl:w-24 xl:h-24"
  />
);

const TestimonialItem = ({
  testimonial,
  index,
}: {
  testimonial: Testimonial;
  index: number;
}) => (
  <TestimonyCard
    key={`${testimonial.name}-${index}`}
    className={cn("border-b-across", {
      "xl:border-r": index === 0 || index === 2 || index == 6,
      "border-r xl:border-r-0": index === 1,
      "border-r": index === 3 || index === 5,
    })}
    name={testimonial.name}
    company={testimonial.company}
    review={testimonial.review}
  />
);

const SectionHeader = () => (
  <div className="w-full grid grid-cols-6 xl:grid-cols-12">
    <div className="col-span-2 xl:col-span-4">
      <div className="h-full w-full content-end border-r">
        <p className="text-secondary px-2 font-code tracking-wide text-xs xl:text-sm ">
          <span className="hidden xl:block">
            [ testimonies <span className="hidden xl:inline">section</span> ]
          </span>

          <span className="block xl:hidden">[testimony]</span>
        </p>
      </div>
    </div>

    <div className="col-span-4 xl:col-span-8">
      <div className="w-full h-full flex flex-col justify-end">
        <div className="h-12 w-full content-end border-b-across">
          <p className="text-secondary px-2 font-code tracking-wide text-xs xl:hidden">
            text-xl font-bold
          </p>
          <p className="text-secondary px-2 font-code tracking-wide hidden xl:block text-sm">
            text-3xl font-bold
          </p>
        </div>

        <div className="w-full border-b-across">
          <p className="h-18 xl:h-36 content-end text-white text-xl xl:text-3xl font-bold px-2">
            Words from Those I&apos;ve Worked With.
          </p>
        </div>
      </div>
    </div>
  </div>
);

const TestimoniesSection = () => {
  return (
    <section className="w-full flex flex-col">
      <SectionHeader />
      <Gap size="sm" pattern="diagonal" />

      <div className="grid grid-cols-12">
        <div className="col-span-6 xl:col-span-4 p-4 border-r border-b-across flex justify-center items-center">
          <QuoteImage />
        </div>

        {testimonials.map((testimonial, index) => (
          <TestimonialItem
            key={`${testimonial.name}-${index}`}
            testimonial={testimonial}
            index={index}
          />
        ))}

        <div className="col-span-12 xl:col-span-4 p-4 border-b-across flex justify-center items-center">
          <QuoteImage />
        </div>
      </div>
    </section>
  );
};

export default TestimoniesSection;
