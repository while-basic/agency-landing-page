import { Lock, Shield, Brain, FileCheck, Server, Key } from 'lucide-react';
import { SecurityFeature } from '@/components/ui/SecurityFeature';
import { Button } from '@/components/ui/button';

export function Security() {
  return (
    <section id="security" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Enterprise-Grade Security & Compliance</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your data security is our top priority. We maintain the highest standards of data protection and regulatory compliance.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-start gap-12">
          <div className="flex-1 space-y-6">
            <SecurityFeature
              icon={<Lock className="h-6 w-6" />}
              title="End-to-End Encryption"
              description="Military-grade encryption for all data in transit and at rest using AES-256 and TLS 1.3 protocols."
            />
            <SecurityFeature
              icon={<Shield className="h-6 w-6" />}
              title="Compliance Certifications"
              description="SOC 2 Type II certified, GDPR compliant, and HIPAA ready. Regular third-party security audits."
            />
            <SecurityFeature
              icon={<Server className="h-6 w-6" />}
              title="Isolated Infrastructure"
              description="Dedicated training environments with complete network isolation for each client's data and models."
            />
            <SecurityFeature
              icon={<Key className="h-6 w-6" />}
              title="Access Control"
              description="Role-based access control (RBAC), multi-factor authentication, and detailed audit logging."
            />
            <SecurityFeature
              icon={<Brain className="h-6 w-6" />}
              title="Privacy-First Training"
              description="Advanced anonymization techniques and privacy-preserving machine learning methods."
            />
            <SecurityFeature
              icon={<FileCheck className="h-6 w-6" />}
              title="Data Governance"
              description="Comprehensive data handling policies, retention controls, and right-to-erasure compliance."
            />
          </div>
          <div className="flex-1 space-y-8">
            <img
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800"
              alt="Security Infrastructure"
              className="rounded-lg shadow-xl mb-6"
            />
            <div className="bg-background rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Security Certifications & Compliance</h3>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center space-x-2">
                  <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>SOC 2 Type II</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>GDPR</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>HIPAA</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>ISO 27001</span>
                </div>
              </div>
              <Button className="w-full" variant="outline">
                Download Security Whitepaper
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}