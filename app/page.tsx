import { HeroSection } from '@/components/hero-section';
import { StreamSection } from '@/components/stream-section';
import { FeaturesSection } from '@/components/features-section';
import { CTASection } from '@/components/cta-section';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <StreamSection />
      <FeaturesSection />
      <CTASection />
    </main>
  );
}