import { Button } from '@/components/ui/button';

export function CTA() {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Data?</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Join leading companies that trust DataMind AI for their custom AI model development
        </p>
        <Button size="lg" variant="secondary">
          Contact Sales
        </Button>
      </div>
    </section>
  );
}