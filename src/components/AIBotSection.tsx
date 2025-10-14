import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, BarChart3, Target, Clock, Trophy } from "lucide-react";
import videoBotSrc from "@/assets/video_aibot.mp4";

const AIBotSection = () => {
  const features = [
    {
      icon: Target,
      title: "One-Click Subscribe",
      description: "Start trading with AI in seconds. No complex setup or prior experience needed."
    },
    {
      icon: BarChart3,
      title: "AI-Driven Strategy",
      description: "Leverages trillion-parameter financial models to identify optimal trading opportunities."
    },
    {
      icon: Clock,
      title: "Fully Transparent Trading",
      description: "Real-time tracking of all trades and performance metrics with easy-to-understand dashboards."
    },
    {
      icon: Trophy,
      title: "Real-Time Risk Control",
      description: "Advanced risk management algorithms protect your capital in volatile market conditions."
    }
  ];

  const stats = [
    { label: "Success Rate", value: "89%", subtext: "AI Bot" },
    { label: "Average Return", value: "24.7%", subtext: "Monthly" }
  ];

  return (
    <section className="py-24 bg-[#0a0b0f]">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-primary text-primary-foreground px-6 py-2 rounded-full text-sm font-semibold mb-6">
            Powered by ARK Trading Model
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Bitradex AI Bot: The Future of Trading
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Say goodbye to constant market monitoring. Let our advanced AI do the trading for you with institutional-grade strategies.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Mobile App Image */}
          <div className="relative">
            <div className="relative z-10">
              <video 
                src={videoBotSrc}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-auto rounded-2xl"
              />
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
              <h4 className="text-2xl font-bold text-foreground">Example Performance</h4>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Win Rate*</span>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="font-bold text-green-400">65%</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Annual Return*</span>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="font-bold text-green-400">+178%</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Availability</span>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span className="font-bold text-primary">24/7</span>
                  </div>
                </div>
              </div>
              
              <p className="text-xs text-muted-foreground mt-4">
                *Example performance only. Past performance does not guarantee future results.
              </p>
            </div>

            {/* CTA Button */}
            <div className="flex flex-col">
              <Button 
                size="lg" 
                className="w-full bg-gradient-primary hover:shadow-button transition-all duration-300 text-lg py-6"
                onClick={() => window.open('https://www.bitradex.com/en/account/register?inviteCode=7UII2W', '_blank')}
              >
                Try AI Bot Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <p className="text-xs text-muted-foreground mt-1 text-center">Sign up on mobile</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIBotSection;