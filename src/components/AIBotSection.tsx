import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, BarChart3, Target, Clock, Trophy } from "lucide-react";
import mobileApp from "@/assets/mobile-app.png";

const AIBotSection = () => {
  const features = [
    {
      icon: Target,
      title: "One-Click Subscribe",
      description: "Start automated trading with just one click. Our AI handles everything from market analysis to trade execution."
    },
    {
      icon: BarChart3,
      title: "AI Course Strategy",
      description: "Advanced machine learning algorithms create personalized trading strategies based on your risk profile and market conditions."
    },
    {
      icon: Clock,
      title: "Fully Transparent Trading",
      description: "Every trade, decision, and profit is transparent. Track your AI bot's performance in real-time with detailed analytics."
    },
    {
      icon: Trophy,
      title: "Real-Time Risk Control",
      description: "Sophisticated risk management systems protect your investments with automated stop-losses and position sizing."
    }
  ];

  const stats = [
    { label: "Success Rate", value: "89%", subtext: "AI Bot" },
    { label: "Average Return", value: "24.7%", subtext: "Monthly" }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-primary text-primary-foreground px-6 py-2 rounded-full text-sm font-semibold mb-6">
            Launching our cutting edge
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            BitradX AI Bot: The Future of Trading
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our champions are exceptional because they are backed by intelligent automation technology that operates and profits even during your downtime.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Mobile App Image */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src={mobileApp} 
                alt="BitradX AI Bot Mobile App" 
                className="w-full max-w-md mx-auto h-auto"
              />
            </div>
            
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-primary opacity-20 blur-3xl rounded-full"></div>
            
            {/* Floating Stats */}
            <div className="absolute top-10 -right-10 bg-card/90 backdrop-blur-sm border border-border rounded-xl p-4 shadow-card">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">{stats[0].value}</div>
                <div className="text-sm text-muted-foreground">{stats[0].label}</div>
                <div className="text-xs text-primary">{stats[0].subtext}</div>
              </div>
            </div>

            <div className="absolute bottom-10 -left-10 bg-card/90 backdrop-blur-sm border border-border rounded-xl p-4 shadow-card">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">{stats[1].value}</div>
                <div className="text-sm text-muted-foreground">{stats[1].label}</div>
                <div className="text-xs text-green-400">{stats[1].subtext}</div>
              </div>
            </div>
          </div>

          {/* Right - Features */}
          <div className="space-y-8">
            <div className="grid gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0 group-hover:shadow-glow transition-all duration-300">
                    <feature.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Performance Stats */}
            <div className="bg-gradient-card border border-border rounded-2xl p-8 space-y-6">
              <h4 className="text-2xl font-bold text-foreground">Superior Performance</h4>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Win Rate</span>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="font-bold text-green-400">89%</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Avg. Return</span>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="font-bold text-green-400">24.7%</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Active Traders</span>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span className="font-bold text-primary">50K+</span>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <Button 
              size="lg" 
              className="w-full bg-gradient-primary hover:shadow-button transition-all duration-300 text-lg py-6"
            >
              Try AI Bot Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIBotSection;