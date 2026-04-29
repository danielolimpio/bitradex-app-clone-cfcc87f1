import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Users, DollarSign, Zap } from "lucide-react";
import SEO from "@/seo/SEO";
const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const stats = [{
    value: "100+",
    label: "Multi Agent Self-Evolution System"
  }, {
    value: "50K",
    label: "Omnidimensional Intelligent System"
  }, {
    value: "13M",
    label: "Ten Million Dollar Fund Pool Increment"
  }, {
    value: "400%",
    label: "Ultra-High Annualized Return Rate"
  }];
  const advantages = [{
    icon: <TrendingUp className="w-12 h-12 text-primary" />,
    value: "30M",
    title: "High-quality trading data",
    description: "Real-time integration with global market liquidity"
  }, {
    icon: <Users className="w-12 h-12 text-primary" />,
    value: "50K+",
    title: "Omnidimensional Intelligent System",
    description: "Advanced AI-powered trading algorithms"
  }, {
    icon: <Zap className="w-12 h-12 text-primary" />,
    value: "Millisecond level",
    title: "Signal response speed",
    description: "Lightning-fast execution and analysis"
  }, {
    icon: <DollarSign className="w-12 h-12 text-primary" />,
    value: "$10M",
    title: "Security Fund",
    description: "Comprehensive asset protection mechanism"
  }];
  const reasons = [{
    title: "Smart investment with guaranteed compensation for peace of mind, stable and reassuring returns",
    description: "Comprehensive risk management and investor protection mechanisms ensure your assets are safeguarded at all times."
  }, {
    title: "Utilize fully-legal aluminum mechanisms, automatic de-check sandbox, and design with root capabilities",
    description: "Built on cutting-edge compliance frameworks with advanced security protocols and root-level system architecture for maximum reliability."
  }, {
    title: "Simple on-click operation, no worries about growth anymore",
    description: "User-friendly interface designed for traders of all experience levels. Our automated systems handle the complexity while you focus on results."
  }];
  return <div className="min-h-screen bg-background">
      <SEO />
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">AiBot</h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12">
              Your Intelligent Trading Co-Pilot, Making Every Decision More Efficient And Precise
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
          </div>
        </div>
      </section>

      {/* AI 30-360 Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">AI 30-360</h2>
            <p className="text-muted-foreground">Lock in higher returns, higher APY</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {["AI 3000", "AI 1500", "AI 900", "AI 300"].map((plan, index) => <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">{plan}</h3>
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Daily Earnings:</span>
                      <span className="font-semibold">Variable</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Historical Return:</span>
                      <span className="text-primary font-semibold">+{(index + 1) * 100}%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Participants:</span>
                      <span className="font-semibold">{(4 - index) * 1000}+</span>
                    </div>
                  </div>
                  <Button className="w-full" variant="outline">
                    Coming Soon
                  </Button>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* AI Daily Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">AI Daily</h2>
            <p className="text-muted-foreground">Deposit and withdraw anytime, flexible fund allocation</p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <h3 className="text-2xl mb-6 font-normal">AI Daily - Premium Package</h3>
                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div>
                    <div className="text-sm text-muted-foreground mb-2">Daily Earnings</div>
                    <div className="text-2xl font-bold text-primary">91.23%</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-2">Historical Return</div>
                    <div className="text-2xl font-bold text-primary">+352.00%</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-2">24 Hour Orders</div>
                    <div className="text-xl font-semibold">141</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-2">Participants Count</div>
                    <div className="text-xl font-semibold">19007</div>
                  </div>
                  <div className="col-span-2">
                    <div className="text-sm text-muted-foreground mb-2">Volatility</div>
                    <div className="text-xl font-semibold">19.17%</div>
                  </div>
                </div>
                <Button className="w-full" variant="outline">
                  Coming Soon
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Product Advantages */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Product Advantages</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => <div key={index} className="text-center">
                <div className="flex justify-center mb-4">{advantage.icon}</div>
                <div className="text-2xl font-bold text-primary mb-2">{advantage.value}</div>
                <h3 className="text-lg mb-2 font-normal">{advantage.title}</h3>
                <p className="text-sm text-muted-foreground">{advantage.description}</p>
              </div>)}
          </div>
        </div>
      </section>

      {/* 3 Reasons to Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">3 Reasons to Choose Us</h2>
          
          <div className="max-w-4xl mx-auto space-y-8">
            {reasons.map((reason, index) => <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl mb-3 font-normal">{reason.title}</h3>
                  <p className="text-muted-foreground">{reason.description}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* More About AiBot */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">More About AiBot</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Our AI-powered trading system combines cutting-edge machine learning algorithms with real-time market analysis to deliver unprecedented trading performance. With over 50,000 intelligent decision points and millisecond-level execution, AiBot represents the future of automated trading.
          </p>
          <div className="flex flex-col items-center">
            <Button size="lg" onClick={() => window.open('https://www.bitradex.com/en/account/register?inviteCode=7UII2W', '_blank')}>
              Get Started Today
            </Button>
            <p className="text-xs text-muted-foreground mt-2">Sign up on mobile</p>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
      <WhatsAppFloatingButton />
    </div>;
};
export default AboutUs;