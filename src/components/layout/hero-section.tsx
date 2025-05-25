type HeroSectionProps = {
  title: string;
  description: React.ReactNode;
};

const HeroSection = ({ title, description }: HeroSectionProps) => {
  return (
    <section className="w-full flex flex-col">
      <div className="h-12 xl:h-24 w-full content-end border-b-across">
        <p className="text-secondary px-2 font-code tracking-wide text-xs xl:text-sm">
          [ hero section ]
        </p>
      </div>

      <div className="w-full border-b-across px-2">
        <p className="text-white text-4xl xl:text-8xl font-bold tracking-tighter">
          {title}
        </p>
      </div>

      <div className="h-8 xl:h-12 w-full content-end border-b-across">
        <p className="text-secondary px-2 font-code tracking-wide text-xs xl:hidden">
          text-secondary text-xs tracking-wide
        </p>
        <p className="text-secondary px-2 font-code tracking-wide text-sm hidden xl:block">
          text-secondary text-sm tracking-wide
        </p>
      </div>

      <div className="w-full px-2 border-b-across">{description}</div>
    </section>
  );
};

export default HeroSection;
