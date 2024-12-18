import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
            Train Custom AI Models with Your Private Data
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Transform your proprietary data into powerful AI models while maintaining complete privacy and control
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">Schedule Demo</Button>
            <Button size="lg" variant="outline">Learn More</Button>
          </div>
        </div>
      </div>
    </section>
  );
}