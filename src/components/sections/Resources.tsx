import { ArrowRight, BookOpen, FileText, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export function Resources() {
  return (
    <section id="resources" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Resources & Insights</h2>
          <p className="text-lg text-muted-foreground">
            Stay informed with the latest insights, guides, and best practices in AI and machine learning
          </p>
        </div>

        <Tabs defaultValue="blog" className="mb-16">
          <TabsList className="grid w-full grid-cols-3 max-w-[400px] mx-auto">
            <TabsTrigger value="blog">Blog</TabsTrigger>
            <TabsTrigger value="whitepapers">Whitepapers</TabsTrigger>
            <TabsTrigger value="faqs">FAQs</TabsTrigger>
          </TabsList>
          
          <TabsContent value="blog" className="mt-8">
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>The Future of Private LLMs</CardTitle>
                  <CardDescription>AI & Privacy</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Explore how private LLMs are revolutionizing enterprise data handling while maintaining security.
                  </p>
                  <Button variant="link" className="p-0">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Optimizing LLM Training</CardTitle>
                  <CardDescription>Technical Guide</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Best practices for fine-tuning large language models on private datasets.
                  </p>
                  <Button variant="link" className="p-0">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>AI Security Measures</CardTitle>
                  <CardDescription>Security</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Essential security considerations when implementing AI in enterprise environments.
                  </p>
                  <Button variant="link" className="p-0">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="whitepapers" className="mt-8">
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <FileText className="h-8 w-8 text-primary mb-4" />
                  <CardTitle>Enterprise AI Security Framework</CardTitle>
                  <CardDescription>Technical Whitepaper</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Comprehensive guide to implementing secure AI systems in enterprise environments.
                  </p>
                  <Button>Download PDF</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <FileText className="h-8 w-8 text-primary mb-4" />
                  <CardTitle>ROI of Custom LLM Solutions</CardTitle>
                  <CardDescription>Business Analysis</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Detailed analysis of the business impact and ROI of custom AI implementations.
                  </p>
                  <Button>Download PDF</Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="faqs" className="mt-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                    <HelpCircle className="h-5 w-5 text-primary" />
                    How secure is our private data during training?
                  </h3>
                  <p className="text-muted-foreground">
                    Your data never leaves your secure environment. We implement end-to-end encryption and isolated training environments for each client.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                    <HelpCircle className="h-5 w-5 text-primary" />
                    What kind of performance improvements can we expect?
                  </h3>
                  <p className="text-muted-foreground">
                    Clients typically see 40-60% improvement in process efficiency and 30-50% reduction in operational costs.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                    <HelpCircle className="h-5 w-5 text-primary" />
                    How long does the implementation process take?
                  </h3>
                  <p className="text-muted-foreground">
                    Typical implementation takes 4-8 weeks, depending on the complexity and scale of the solution.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                    <HelpCircle className="h-5 w-5 text-primary" />
                    What ongoing support do you provide?
                  </h3>
                  <p className="text-muted-foreground">
                    We offer 24/7 technical support, regular model updates, and continuous performance monitoring.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="text-center">
          <Button variant="outline" size="lg">
            View All Resources
            <BookOpen className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
} 