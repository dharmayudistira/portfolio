import { cn } from "@/lib/utils";

interface CardProps {
  className?: string;
  title: string;
  description: string;
  leading?: React.ReactNode;
}

interface CardRootProps extends CardProps {
  variant?: "service";
}

const Card = ({
  title,
  description,
  variant,
  leading,
  className,
}: CardRootProps) => {
  const baseStyles = "p-4 bg-color rounded-lg border";

  if (variant === "service") {
    return (
      <div className={cn(baseStyles, "grid grid-cols-12", className)}>
        <div className="col-span-4">{leading}</div>
        <div className="col-span-8 grid grid-cols-8">
          <div className="col-span-4 flex flex-col gap-4">
            <p className="text-white font-bold text-2xl">{title}</p>
            <p className="text-secondary-light">{description}</p>
          </div>

          <div className="col-span-4 dots-pattern w-full h-full border" />
        </div>
      </div>
    );
  }

  return (
    <div className={cn(baseStyles, "flex flex-col", className)}>
      <p>{title}</p>
      <p>{description}</p>
    </div>
  );
};

const Service = (props: CardProps) => <Card {...props} variant="service" />;
Service.displayName = "Card.Service";

Card.Service = Service;

export default Card;
