import { Server, Cloud, Cpu, Network, Shield, Workflow } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export function Technology() {
  return (
    <section id="technology" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Technology Stack</h2>
          <p className="text-lg text-muted-foreground">
            State-of-the-art infrastructure and tools powering our AI solutions
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <Cpu className="h-8 w-8 text-primary mb-4" />
              <CardTitle>Model Architecture</CardTitle>
              <CardDescription>Advanced AI Model Infrastructure</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Custom GPT Architecture</li>
                <li>• Transfer Learning Capabilities</li>
                <li>• Multi-Modal Support</li>
                <li>• Distributed Training</li>
                <li>• AutoML Integration</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Cloud className="h-8 w-8 text-primary mb-4" />
              <CardTitle>Cloud Infrastructure</CardTitle>
              <CardDescription>Scalable Computing Resources</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Multi-Cloud Support</li>
                <li>• Auto-Scaling Clusters</li>
                <li>• GPU Acceleration</li>
                <li>• Container Orchestration</li>
                <li>• Edge Computing Options</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Shield className="h-8 w-8 text-primary mb-4" />
              <CardTitle>Security Framework</CardTitle>
              <CardDescription>Enterprise-Grade Protection</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• End-to-End Encryption</li>
                <li>• Secure Enclaves</li>
                <li>• Access Control</li>
                <li>• Audit Logging</li>
                <li>• Compliance Tools</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Server className="h-8 w-8 text-primary mb-4" />
              <CardTitle>Data Processing</CardTitle>
              <CardDescription>Efficient Data Handling</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Distributed Processing</li>
                <li>• Stream Processing</li>
                <li>• Data Validation</li>
                <li>• ETL Pipeline</li>
                <li>• Data Versioning</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Network className="h-8 w-8 text-primary mb-4" />
              <CardTitle>API Integration</CardTitle>
              <CardDescription>Seamless Connectivity</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• RESTful APIs</li>
                <li>• GraphQL Support</li>
                <li>• WebSocket Integration</li>
                <li>• Custom Connectors</li>
                <li>• API Authentication</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Workflow className="h-8 w-8 text-primary mb-4" />
              <CardTitle>Development Tools</CardTitle>
              <CardDescription>Comprehensive Toolkit</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Model Monitoring</li>
                <li>• Performance Analytics</li>
                <li>• Debug Tools</li>
                <li>• Testing Framework</li>
                <li>• CI/CD Pipeline</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 bg-background rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Technology Partners</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center">
            <div className="flex items-center justify-center h-16 bg-primary/10 rounded-lg">AWS</div>
            <div className="flex items-center justify-center h-16 bg-primary/10 rounded-lg">Google Cloud</div>
            <div className="flex items-center justify-center h-16 bg-primary/10 rounded-lg">Microsoft Azure</div>
            <div className="flex items-center justify-center h-16 bg-primary/10 rounded-lg">NVIDIA</div>
          </div>
        </div>
      </div>
    </section>
  );
} 