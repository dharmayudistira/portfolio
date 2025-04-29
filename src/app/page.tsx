import BaseLayout from "@/components/layout/base-layout";
import HeroSection from "./hero-section";
import { Gap } from "@/components/ui";

export default function Home() {
  return (
    <BaseLayout>
      <HeroSection />
      <Gap size="lg" />
    </BaseLayout>
  );
}
