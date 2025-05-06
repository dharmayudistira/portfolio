import BaseLayout from "@/components/layout/base-layout";
import HeroSection from "@/components/layout/hero-section";
import { Gap } from "@/components/ui";
import ProjectList from "./project-list";
import Footer from "@/components/layout/footer";

export default function Page() {
  return (
    <BaseLayout>
      <HeroSection
        title="My Work, My Craft."
        description={
          <p className="text-secondary-light text-xl">
            These projects reflect my growth, creativity, and commitment to
            building things that matter.
          </p>
        }
      />
      <Gap size="lg" />
      <ProjectList />
      <Gap size="sm" pattern="diagonal" />
      <Footer />
    </BaseLayout>
  );
}
