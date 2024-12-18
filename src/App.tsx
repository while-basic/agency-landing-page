import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { Features } from '@/components/sections/Features';
import { Security } from '@/components/sections/Security';
import { CTA } from '@/components/sections/CTA';

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Features />
      <Security />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;