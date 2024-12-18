import { Shield, Sparkles, MessageSquare } from 'lucide-react';
import { FeatureCard } from '@/components/ui/FeatureCard';

export function Features() {
  return (
    <section id="features" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose DataMind AI</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Shield className="h-10 w-10" />}
            title="Privacy First"
            description="Your data never leaves your secure environment. Train models with complete privacy and control."
          />
          <FeatureCard
            icon={<Sparkles className="h-10 w-10" />}
            title="Custom Models"
            description="Build specialized AI models tailored to your industry and specific use cases."
          />
          <FeatureCard
            icon={<MessageSquare className="h-10 w-10" />}
            title="24/7 Support"
            description="Expert support team available around the clock to ensure smooth implementation."
          />
        </div>
      </div>
    </section>
  );
}