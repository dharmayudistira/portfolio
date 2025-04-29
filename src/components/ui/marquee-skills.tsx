import Image from "next/image";

type SkillType = {
  logo: string;
  name: string;
};

const skills: SkillType[] = [
  {
    logo: "/icons/bloc.png",
    name: "BLOC",
  },
  {
    logo: "/icons/dart.png",
    name: "Dart",
  },
  {
    logo: "/icons/riverpod.png",
    name: "Riverpod",
  },
  {
    logo: "/icons/flutter.png",
    name: "Flutter",
  },
  {
    logo: "/icons/nextjs.png",
    name: "NextJS",
  },
  {
    logo: "/icons/react.png",
    name: "React",
  },
  {
    logo: "/icons/tailwind.png",
    name: "Tailwind",
  },
  {
    logo: "/icons/typescript.png",
    name: "Typescript",
  },
  {
    logo: "/icons/supabase.png",
    name: "Supabase",
  },
];

const MarqueeSkills = () => {
  return (
    <div className="marquee-skills bg-secondary p-2">
      <ul>
        {skills.map((skill) => (
          <li key={skill.name} className="flex items-center gap-8">
            <Image
              className="w-10 h-10 object-cover rounded-full"
              src={skill.logo}
              width={100}
              height={100}
              alt={skill.name}
              priority
            />
            <p className="skill-name text-white font-bold">{skill.name}</p>
          </li>
        ))}
      </ul>

      {/* TODO : Make a duplicate of the first ul for temporary solution (scroll infinite) */}
      <ul aria-hidden>
        {skills.map((skill) => (
          <li key={skill.name} className="flex items-center gap-8">
            <Image
              className="w-10 h-10 object-cover rounded-full"
              src={skill.logo}
              width={100}
              height={100}
              alt={skill.name}
              priority
            />
            <p className="skill-name text-white font-bold font-code">{skill.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MarqueeSkills;
