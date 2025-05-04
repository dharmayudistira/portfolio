import BaseLayout from "@/components/layout/base-layout";
import HeroSection from "./hero-section";
import ServicesSection from "./services-section";
import TestimoniesSection from "./testimonies-section";
import ProjectsSection from "./projects-section";
import BlogsSection from "./blogs-section";
import { Gap } from "@/components/ui";
import Footer from "@/components/layout/footer";

export default function Home() {
  return (
    <BaseLayout>
      <HeroSection />
      <Gap size="lg" />
      <ServicesSection />
      <Gap size="lg" />
      <TestimoniesSection />
      <Gap size="lg" />
      <ProjectsSection />
      <Gap size="lg" />
      <BlogsSection />
      <Gap size="lg" pattern="diagonal" />
      <Gap size="sm" />
      <Footer />
    </BaseLayout>
  );
}
