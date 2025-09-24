import { Brain, Shield, Globe, Zap } from "lucide-react";

const WhyChooseSection = () => {
  const features = [
    {
      icon: Brain,
      title: "AI Intelligent",
      description: "Powered by the ARK Trading Model, our AI technology analyzes markets with trillion-parameter models for optimal trading strategies."
    },
    {
      icon: Shield,
      title: "Maximum Security",
      description: "UK-registered with multi-layer security protocols, asset segregation, and continuous security audits to protect your investments."
    },
    {
      icon: Globe,
      title: "Global Access",
      description: "Access our platform from anywhere in the world with multi-language support and localized customer service."
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Execute trades in milliseconds with our high-performance matching engine and low-latency infrastructure."
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Why Choose Bitradex
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover the advantages that make us the preferred platform for traders worldwide
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