import { Button } from "@/components/ui/button";
import { Brain } from "lucide-react";

export function HeroSection() {
  return (
    <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <Brain className="h-16 w-16 text-primary" />
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-foreground">
            Next Generation{" "}
            <span className="text-primary">Digital Avatars</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl leading-8 text-foreground/80 max-w-2xl mx-auto">
            Experience the future of digital interaction with our AI-powered avatars.
            Seamless, realistic, and ready for your next project.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg">
              Get Started
            </Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}