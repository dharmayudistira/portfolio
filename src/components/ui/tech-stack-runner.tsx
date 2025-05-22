import { ReactNode } from "react";
import {
  SiDart,
  SiFlutter,
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiSupabase,
  SiTailwindcss,
} from "react-icons/si";

interface TechStackItem {
  id: number;
  name: string;
  icon: ReactNode;
}

const techStackData: TechStackItem[] = [
  { id: 1, name: "Dart", icon: <SiDart color="var(--color-secondary-light)" /> },
  { id: 2, name: "Flutter", icon: <SiFlutter color="var(--color-secondary-light)" /> },
  {
    id: 3,
    name: "Next.JS",
    icon: <SiNextdotjs color="var(--color-secondary-light)" />,
  },
  { id: 4, name: "React", icon: <SiReact color="var(--color-secondary-light)" /> },
  {
    id: 5,
    name: "Typescript",
    icon: <SiTypescript color="var(--color-secondary-light)" />,
  },
  {
    id: 6,
    name: "Supabase",
    icon: <SiSupabase color="var(--color-secondary-light)" />,
  },
  {
    id: 7,
    name: "Tailwind",
    icon: <SiTailwindcss color="var(--color-secondary-light)" />,
  },
];

const TechStackRunner = () => {
  return (
    <div className="border-b-across">
      <div
        className="text-stack-runner"
        style={
          {
            "--slider-height": "60px",
            "--slider-item-width": "160px",
            "--slider-item-height": "50px",
            "--slider-item-count": techStackData.length,
          } as React.CSSProperties
        }
      >
        {techStackData.map((item) => (
          <div
            key={item.id}
            className="text-stack-runner-item"
            style={{ "--item-number": item.id } as React.CSSProperties}
          >
            {item.icon}
            <p className="text-lg text-secondary-light">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStackRunner;
