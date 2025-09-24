import { Button } from "@/components/ui/button";
import { Smartphone, TrendingUp, BarChart3, Wallet } from "lucide-react";

const TradingEcosystem = () => {
  const features = [
    {
      icon: Smartphone,
      title: "Spot Trading",
      description: "Trade cryptocurrencies instantly with real-time market prices and deep liquidity across 200+ trading pairs.",
      link: "Trade Now"
    },
    {
      icon: TrendingUp,
      title: "Futures Trading",
      description: "Advanced derivatives trading with up to 125x leverage, sophisticated risk management, and institutional-grade tools.",
      link: "Trade Now"
    },
    {
      icon: BarChart3,
      title: "AI Bot",
      description: "Automated trading strategies powered by artificial intelligence with proven track record of consistent profits.",
      link: "Learn More"
    },
    {
      icon: Wallet,
      title: "Web3 Wallet",
      description: "Secure, non-custodial wallet integration with DeFi protocols, NFT trading, and cross-chain asset management.",
      link: "Connect Now"
    }
  ];

  return (
    <section className="py-24 bg-bitradx-card">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Complete Trading Ecosystem
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Everything you need for professional digital asset trading - from spot and futures trading to AI-powered automation and Web3 integration.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative bg-gradient-card border border-border rounded-2xl p-8 hover:shadow-card transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
                  <feature.icon className="w-8 h-8 text-primary-foreground" />
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4 mb-6">
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* CTA Link */}
              <Button 
                variant="outline" 
                className="w-full border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                {feature.link}
              </Button>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-card border border-border rounded-2xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Ready to Start Trading?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join over 500,000 traders who trust BitradX for their digital asset trading needs. Get started in minutes with our intuitive platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:shadow-button transition-all duration-300 text-lg px-8 py-6"
              >
                Create Account
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary/50 text-primary hover:bg-primary/10 transition-all duration-300 text-lg px-8 py-6"
              >
                Explore Features
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TradingEcosystem;