import { BaseLayout } from "@/components/layout";
import { Gap, TechStackRunner } from "@/components/ui";
import HeroSection from "./hero-section";
import ExperienceSection from "./experience-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'About'
};

export default function Page() {
  return (
    <BaseLayout>
      <HeroSection />
      <Gap size="sm" />
      <TechStackRunner />
      <Gap size="sm" />
      <ExperienceSection />
      <Gap size="sm" />
      <Gap size="lg" pattern="dots" />
    </BaseLayout>
  );
}
