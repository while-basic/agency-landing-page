import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Services } from '@/components/sections/Services';
import { Security } from '@/components/sections/Security';
import { Portfolio } from '@/components/sections/Portfolio';
import { Technology } from '@/components/sections/Technology';
import { Resources } from '@/components/sections/Resources';
import { CTA } from '@/components/sections/CTA';

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Security />
      <Portfolio />
      <Technology />
      <Resources />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;