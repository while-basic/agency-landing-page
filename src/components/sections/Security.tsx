import { Lock, Shield, Brain } from 'lucide-react';
import { SecurityFeature } from '@/components/ui/SecurityFeature';

export function Security() {
  return (
    <section id="security" className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-6">Enterprise-Grade Security</h2>
            <div className="space-y-4">
              <SecurityFeature
                icon={<Lock className="h-6 w-6" />}
                title="End-to-End Encryption"
                description="All data is encrypted in transit and at rest using industry-standard protocols."
              />
              <SecurityFeature
                icon={<Shield className="h-6 w-6" />}
                title="SOC 2 Type II Compliant"
                description="Regular audits and compliance with highest security standards."
              />
              <SecurityFeature
                icon={<Brain className="h-6 w-6" />}
                title="Isolated Training"
                description="Dedicated infrastructure for each client ensures complete data isolation."
              />
            </div>
          </div>
          <div className="flex-1">
            <img
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800"
              alt="Security Infrastructure"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}