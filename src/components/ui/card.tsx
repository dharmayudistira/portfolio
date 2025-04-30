import { cn } from "@/lib/utils";

interface BaseCardProps {
  className?: string;
}

interface ServiceCardProps extends BaseCardProps {
  title: string;
  description: string;
  leading: React.ReactNode;
}

interface TestimonyCardProps extends BaseCardProps {
  name: string;
  company: string;
  review: string;
}

interface DefaultCardProps extends BaseCardProps {
  title: string;
  description: string;
}

const Card = ({ title, description, className }: DefaultCardProps) => {
  const baseStyles = "p-4 bg-color rounded-lg border";

  return (
    <div className={cn(baseStyles, "flex flex-col", className)}>
      <p>{title}</p>
      <p>{description}</p>
    </div>
  );
};

const Service = ({
  title,
  description,
  leading,
  className,
}: ServiceCardProps) => {
  const baseStyles = "p-4 bg-color rounded-lg border";

  return (
    <div className={cn(baseStyles, "grid grid-cols-12", className)}>
      <div className="col-span-4">{leading}</div>
      <div className="col-span-8 grid grid-cols-8">
        <div className="col-span-4 flex flex-col gap-4">
          <p className="text-white font-bold text-2xl">{title}</p>
          <p className="text-secondary-light">{description}</p>
        </div>

        <div className="col-span-4 dots-pattern w-full h-full border rounded-sm" />
      </div>
    </div>
  );
};
Service.displayName = "Card.Service";

const Testimony = ({
  name,
  company,
  review,
  className,
}: TestimonyCardProps) => {
  return (
    <div className={cn("col-span-4 p-4 flex flex-col gap-8", className)}>
      <p className="text-secondary-light">{`"${review}"`}</p>

      <div className="flex flex-col">
        <p className="text-primary font-bold text-xl">{name}</p>
        <p className="text-secondary-light font-code text-sm">{company}</p>
      </div>
    </div>
  );
};
Testimony.displayName = "Card.Testimony";

Card.Service = Service;
Card.Testimony = Testimony;

export default Card;
