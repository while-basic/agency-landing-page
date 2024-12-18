import { Users, Target, Award, Lightbulb } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">About DataMind AI</h2>
          <p className="text-lg text-muted-foreground">
            We're a team of AI experts, data scientists, and engineers passionate about helping businesses harness the power of their data through custom AI solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div>
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-muted-foreground mb-6">
              To democratize AI technology by enabling organizations to leverage their private data safely and effectively, creating customized AI solutions that drive real business value.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Target className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h4 className="font-semibold">Vision</h4>
                  <p className="text-sm text-muted-foreground">To be the leading provider of private data AI solutions, setting industry standards for security and innovation.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Award className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h4 className="font-semibold">Excellence</h4>
                  <p className="text-sm text-muted-foreground">Committed to delivering exceptional results through cutting-edge technology and expertise.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Lightbulb className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h4 className="font-semibold">Innovation</h4>
                  <p className="text-sm text-muted-foreground">Continuously pushing boundaries in AI technology while maintaining the highest security standards.</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">Leadership Team</h3>
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-4">
                <CardContent className="p-0">
                  <div className="w-20 h-20 bg-primary/10 rounded-full mb-4 mx-auto flex items-center justify-center">
                    <Users className="h-10 w-10 text-primary" />
                  </div>
                  <h4 className="font-semibold text-center">Dr. Sarah Chen</h4>
                  <p className="text-sm text-muted-foreground text-center">Chief AI Officer</p>
                </CardContent>
              </Card>
              <Card className="p-4">
                <CardContent className="p-0">
                  <div className="w-20 h-20 bg-primary/10 rounded-full mb-4 mx-auto flex items-center justify-center">
                    <Users className="h-10 w-10 text-primary" />
                  </div>
                  <h4 className="font-semibold text-center">Michael Rodriguez</h4>
                  <p className="text-sm text-muted-foreground text-center">CTO</p>
                </CardContent>
              </Card>
              <Card className="p-4">
                <CardContent className="p-0">
                  <div className="w-20 h-20 bg-primary/10 rounded-full mb-4 mx-auto flex items-center justify-center">
                    <Users className="h-10 w-10 text-primary" />
                  </div>
                  <h4 className="font-semibold text-center">Emma Thompson</h4>
                  <p className="text-sm text-muted-foreground text-center">Head of Security</p>
                </CardContent>
              </Card>
              <Card className="p-4">
                <CardContent className="p-0">
                  <div className="w-20 h-20 bg-primary/10 rounded-full mb-4 mx-auto flex items-center justify-center">
                    <Users className="h-10 w-10 text-primary" />
                  </div>
                  <h4 className="font-semibold text-center">David Park</h4>
                  <p className="text-sm text-muted-foreground text-center">Lead Engineer</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-primary mb-2">50+</div>
            <p className="text-sm text-muted-foreground">Enterprise Clients</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">100M+</div>
            <p className="text-sm text-muted-foreground">Data Points Processed</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
            <p className="text-sm text-muted-foreground">Uptime SLA</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">24/7</div>
            <p className="text-sm text-muted-foreground">Expert Support</p>
          </div>
        </div>
      </div>
    </section>
  );
} 