import { Bot, Database, LineChart, Code, Cloud, Wrench } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export function Services() {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            End-to-end AI solutions for enterprises, from data preparation to model deployment and maintenance
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <Database className="h-8 w-8 mb-4 text-primary" />
              <CardTitle>Data Preparation</CardTitle>
              <CardDescription>
                Expert data handling for optimal AI training
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>Data Cleaning & Structuring</li>
                <li>Format Optimization</li>
                <li>Privacy-Preserving Processing</li>
                <li>Quality Assurance</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Bot className="h-8 w-8 mb-4 text-primary" />
              <CardTitle>LLM Training</CardTitle>
              <CardDescription>
                Custom AI models trained on your private data
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>Fine-tuning Large Language Models</li>
                <li>Domain-Specific Training</li>
                <li>Performance Optimization</li>
                <li>Continuous Model Improvement</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Cloud className="h-8 w-8 mb-4 text-primary" />
              <CardTitle>Model Deployment</CardTitle>
              <CardDescription>
                Seamless integration into your infrastructure
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>API Development</li>
                <li>Chatbot Integration</li>
                <li>Scalable Infrastructure</li>
                <li>Performance Monitoring</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Code className="h-8 w-8 mb-4 text-primary" />
              <CardTitle>Custom Solutions</CardTitle>
              <CardDescription>
                Tailored AI implementations for your industry
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>Healthcare AI Solutions</li>
                <li>Financial Services AI</li>
                <li>Retail & E-commerce</li>
                <li>Manufacturing Intelligence</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Wrench className="h-8 w-8 mb-4 text-primary" />
              <CardTitle>Maintenance & Support</CardTitle>
              <CardDescription>
                Ongoing optimization and technical support
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>24/7 Technical Support</li>
                <li>Regular Model Updates</li>
                <li>Performance Tuning</li>
                <li>Security Patches</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <LineChart className="h-8 w-8 mb-4 text-primary" />
              <CardTitle>Analytics & Reporting</CardTitle>
              <CardDescription>
                Comprehensive insights and performance metrics
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>Model Performance Analytics</li>
                <li>ROI Tracking</li>
                <li>Usage Statistics</li>
                <li>Custom Reports</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
} 