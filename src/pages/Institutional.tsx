import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Shield, TrendingUp, Zap, Users, Globe, Lock, BarChart3 } from "lucide-react";
import SEO from "@/seo/SEO";
const Institutional = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const features = [{
    icon: <Building2 className="w-12 h-12 text-primary" />,
    title: "Enterprise-Grade Infrastructure",
    description: "Scalable solutions built for institutional trading volumes with 99.99% uptime guarantee"
  }, {
    icon: <Shield className="w-12 h-12 text-primary" />,
    title: "Advanced Security",
    description: "Multi-signature wallets, cold storage, and institutional-grade custody solutions"
  }, {
    icon: <TrendingUp className="w-12 h-12 text-primary" />,
    title: "Deep Liquidity",
    description: "Access to deep order books and competitive pricing across multiple markets"
  }, {
    icon: <Zap className="w-12 h-12 text-primary" />,
    title: "High-Performance API",
    description: "Ultra-low latency trading APIs with FIX protocol support and WebSocket streaming"
  }, {
    icon: <Users className="w-12 h-12 text-primary" />,
    title: "Dedicated Support",
    description: "24/7 dedicated account management and technical support for institutional clients"
  }, {
    icon: <Globe className="w-12 h-12 text-primary" />,
    title: "Global Reach",
    description: "Multi-currency support with localized solutions for markets worldwide"
  }, {
    icon: <Lock className="w-12 h-12 text-primary" />,
    title: "Regulatory Compliance",
    description: "Full compliance with international regulations and comprehensive AML/KYC procedures"
  }, {
    icon: <BarChart3 className="w-12 h-12 text-primary" />,
    title: "Advanced Analytics",
    description: "Real-time reporting, customizable dashboards, and comprehensive portfolio analytics"
  }];
  const services = [{
    title: "Prime Brokerage",
    description: "Comprehensive prime brokerage services including margin financing, securities lending, and consolidated reporting across multiple venues.",
    benefits: ["Cross-margining capabilities", "Consolidated credit facility", "Multi-exchange access", "Unified reporting dashboard"]
  }, {
    title: "OTC Trading Desk",
    description: "Institutional-grade OTC trading with competitive pricing, deep liquidity, and settlement flexibility for large block trades.",
    benefits: ["Personalized pricing", "Deep liquidity pools", "Flexible settlement options", "Dedicated trading desk"]
  }, {
    title: "Custody Solutions",
    description: "Bank-grade custody services with multi-signature technology, insurance coverage, and comprehensive audit trails.",
    benefits: ["Cold storage solutions", "Insurance coverage", "Multi-signature security", "Comprehensive audit trails"]
  }, {
    title: "Market Making",
    description: "Algorithmic market making services with advanced strategies to optimize liquidity provision and risk management.",
    benefits: ["Customized strategies", "Real-time risk management", "Optimal spread management", "Performance analytics"]
  }];
  const stats = [{
    value: "$50B+",
    label: "Daily Trading Volume"
  }, {
    value: "500+",
    label: "Institutional Clients"
  }, {
    value: "50ms",
    label: "Average Latency"
  }, {
    value: "99.99%",
    label: "System Uptime"
  }];
  return <div className="min-h-screen bg-background">
      <SEO />
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Institutional Trading Solutions
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12">
              Trusted by leading financial institutions, hedge funds, and trading firms worldwide
            </p>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {stats.map((stat, index) => <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>)}
            </div>

            <div className="flex flex-col items-center gap-4">
              <Button size="lg" onClick={() => window.open('https://www.bitradex.com/en/account/register?inviteCode=7UII2W', '_blank')}>
                Contact Our Team
              </Button>
              <p className="text-xs text-muted-foreground">Get started with institutional trading</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Bitradex Institutional</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Enterprise-grade trading infrastructure designed for institutional clients
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => <div key={index} className="text-center">
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-lg mb-2 font-normal">{feature.title}</h3>
                <p className="text-sm text-muted-foreground font-normal">{feature.description}</p>
              </div>)}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive suite of institutional trading services
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-2xl mb-3 font-medium">{service.title}</h3>
                  <p className="text-muted-foreground mb-4 font-normal">{service.description}</p>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, idx) => <li key={idx} className="flex items-start gap-2">
                        <span className="text-primary mt-1">✓</span>
                        <span className="text-sm font-normal">{benefit}</span>
                      </li>)}
                  </ul>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* API & Integration Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">API & Integration</h2>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl mb-4 font-normal">REST API</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground font-normal">
                      <li>• Complete trading functionality</li>
                      <li>• Account management</li>
                      <li>• Historical data access</li>
                      <li>• Rate limiting: 100 req/sec</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl mb-4 font-normal">WebSocket API</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground font-normal">
                      <li>• Real-time market data</li>
                      <li>• Order updates</li>
                      <li>• Account notifications</li>
                      <li>• Sub-millisecond latency</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl mb-4 font-normal">FIX Protocol</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground font-normal">
                      <li>• FIX 4.2 & 4.4 support</li>
                      <li>• Drop copy reporting</li>
                      <li>• Custom message types</li>
                      <li>• Enterprise integration</li>
                    </ul>
                  </div>
                  <div className="font-normal">
                    <h3 className="text-xl mb-4 font-normal">Documentation</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground font-normal">
                      <li>• Comprehensive API docs</li>
                      <li>• Code examples</li>
                      <li>• Testing sandbox</li>
                      <li>• Developer support</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Security & Compliance</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Bank-grade security measures and regulatory compliance
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Shield className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="text-xl mb-3 font-normal">Security Measures</h3>
                <ul className="space-y-2 text-sm text-muted-foreground text-left font-normal">
                  <li>• Multi-signature wallets</li>
                  <li>• Cold storage (95%+ assets)</li>
                  <li>• Hardware security modules</li>
                  <li>• 24/7 security monitoring</li>
                  <li>• DDoS protection</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Lock className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Compliance</h3>
                <ul className="space-y-2 text-sm text-muted-foreground text-left font-normal">
                  <li>• Full KYC/AML procedures</li>
                  <li>• GDPR compliant</li>
                  <li>• SOC 2 Type II certified</li>
                  <li>• Regular audits</li>
                  <li>• Transaction monitoring</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Building2 className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Insurance</h3>
                <ul className="space-y-2 text-sm text-muted-foreground text-left font-normal">
                  <li>• $100M+ insurance coverage</li>
                  <li>• Crime insurance</li>
                  <li>• Cyber liability coverage</li>
                  <li>• Professional indemnity</li>
                  <li>• Lloyd's of London backed</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Join hundreds of institutional clients trading on Bitradex. Our team is ready to discuss your specific requirements and provide a tailored solution.
          </p>
          <div className="flex flex-col items-center gap-4">
            <Button size="lg" onClick={() => window.open('https://www.bitradex.com/en/account/register?inviteCode=7UII2W', '_blank')}>
              Schedule a Consultation
            </Button>
            <p className="text-xs text-muted-foreground">Contact our institutional sales team</p>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
      <WhatsAppFloatingButton />
    </div>;
};
export default Institutional;