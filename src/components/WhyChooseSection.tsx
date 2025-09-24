import { Brain, Shield, Globe, Zap } from "lucide-react";

const WhyChooseSection = () => {
  const features = [
    {
      icon: Brain,
      title: "AI Intelligent",
      description: "Advanced artificial intelligence algorithms analyze market trends and execute trades with precision and speed beyond human capabilities."
    },
    {
      icon: Shield,
      title: "Maximum Security",
      description: "Bank-level security protocols and multi-layer encryption ensure your digital assets are protected with the highest industry standards."
    },
    {
      icon: Globe,
      title: "Global Access",
      description: "Trade digital assets from anywhere in the world with 24/7 market access and support for multiple fiat currencies and cryptocurrencies."
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Ultra-low latency trading infrastructure ensures your orders are executed instantly, giving you the competitive edge in volatile markets."
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Why Choose BitradX
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover why elite traders and institutions choose our platform for digital asset trading with advanced technology and exceptional performance.
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
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;