import {
  Brain,
  Zap,
  Shield,
  Globe,
  Clock,
  Sparkles
} from "lucide-react";

const features = [
  {
    name: "AI-Powered Intelligence",
    description: "Advanced neural networks driving natural interactions",
    icon: Brain
  },
  {
    name: "Real-time Processing",
    description: "Lightning-fast responses with minimal latency",
    icon: Zap
  },
  {
    name: "Enterprise Security",
    description: "Bank-grade encryption and data protection",
    icon: Shield
  },
  {
    name: "Global Availability",
    description: "Deployed across multiple regions for optimal performance",
    icon: Globe
  },
  {
    name: "24/7 Availability",
    description: "Always online and ready to engage",
    icon: Clock
  },
  {
    name: "Custom Personalities",
    description: "Tailored avatar behavior and responses",
    icon: Sparkles
  }
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            Powerful Features
          </h2>
          <p className="mt-4 text-lg text-foreground/80">
            Everything you need to create engaging digital experiences
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="relative group"
            >
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-primary/10 to-primary/5 opacity-0 group-hover:opacity-100 transition-all" />
              <div className="relative p-6 space-y-6">
                <feature.icon className="h-8 w-8 text-primary" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {feature.name}
                  </h3>
                  <p className="mt-2 text-foreground/80">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}