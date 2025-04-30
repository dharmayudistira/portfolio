import { Card, Gap } from "@/components/ui";

const ProjectsSection = () => {
  return (
    <section className="w-full flex flex-col">
      <div className="w-full grid grid-cols-12">
        <div className="col-span-4">
          <div className="h-full w-full content-end border-r">
            <p className="text-secondary px-2 font-code tracking-wide text-sm">
              [ projects section ]
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
                Things I&apos;m Proud Of.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Gap size="sm" />

      <div className="bg-secondary grid grid-cols-12 p-2 gap-2">
        <Card.Project
          title="Healthify - Telemedicine Platform"
          stacks={["React", "TypeScript", "Node.js", "WebRTC", "Tailwind CSS"]}
          link="https://healthify.demo"
        />

        <Card.Project
          title="EcoTrack - Carbon Footprint Monitor"
          stacks={["Next.js", "MongoDB", "GraphQL", "D3.js", "Material UI"]}
          link="https://ecotrack.demo"
        />

        <Card.Project
          title="CryptoVault - DeFi Dashboard"
          stacks={["React", "Solidity", "Web3.js", "Ethers.js", "Chakra UI"]}
          link="https://cryptovault.demo"
        />

        <Card.Project
          title="TaskMaster - Project Management Tool"
          stacks={[
            "Next.js",
            "PostgreSQL",
            "Prisma",
            "Socket.io",
            "Tailwind CSS",
          ]}
          link="https://taskmaster.demo"
        />
      </div>
    </section>
  );
};

export default ProjectsSection;
