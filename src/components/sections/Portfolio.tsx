import { ArrowRight, BarChart, Building2, Stethoscope } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export function Portfolio() {
  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
          <p className="text-lg text-muted-foreground">
            Discover how leading organizations are transforming their operations with our custom AI solutions
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card>
            <CardHeader>
              <Stethoscope className="h-8 w-8 text-primary mb-4" />
              <CardTitle>Healthcare Provider</CardTitle>
              <CardDescription>AI-Powered Medical Records Analysis</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Leading healthcare provider improved patient care with custom LLM trained on medical records.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Processing Time</span>
                    <span className="font-semibold text-primary">-85%</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Accuracy Rate</span>
                    <span className="font-semibold text-primary">98.5%</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Cost Savings</span>
                    <span className="font-semibold text-primary">$2.5M/year</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Building2 className="h-8 w-8 text-primary mb-4" />
              <CardTitle>Financial Institution</CardTitle>
              <CardDescription>Automated Risk Assessment</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Major bank implemented AI-driven risk assessment system for loan applications.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Decision Speed</span>
                    <span className="font-semibold text-primary">-60%</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Risk Detection</span>
                    <span className="font-semibold text-primary">+45%</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Processing Volume</span>
                    <span className="font-semibold text-primary">3x</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <BarChart className="h-8 w-8 text-primary mb-4" />
              <CardTitle>E-commerce Giant</CardTitle>
              <CardDescription>Customer Service Enhancement</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Global e-commerce platform enhanced customer support with AI-powered assistance.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Response Time</span>
                    <span className="font-semibold text-primary">-75%</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Customer Satisfaction</span>
                    <span className="font-semibold text-primary">+40%</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Support Capacity</span>
                    <span className="font-semibold text-primary">5x</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg">
            View More Case Studies
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="mt-20 bg-muted/50 rounded-lg p-8">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Client Testimonials</h3>
            <blockquote className="text-lg italic text-muted-foreground mb-6">
              "DataMind AI's custom LLM solution has revolutionized how we handle customer inquiries. 
              The AI's understanding of our specific business context is remarkable."
            </blockquote>
            <div className="font-semibold">Jane Smith</div>
            <div className="text-sm text-muted-foreground">CTO, Global Retail Solutions</div>
          </div>
        </div>
      </div>
    </section>
  );
} 