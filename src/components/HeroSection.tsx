import { Button } from "@/components/ui/button";
import { Play, Star, TrendingUp, Shield, Zap } from "lucide-react";
import heroImage from "@/assets/olivier-giroud-hero.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero flex items-start overflow-hidden pt-0">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 border border-primary rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 border border-primary/50 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-primary/30 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-24">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="text-foreground">Champions Endorse</span>
                <br />
                <span className="text-foreground">Intelligence Leads</span>
              </h1>
              
              <div className="flex items-center space-x-4 text-primary">
                <span className="text-xl font-semibold">BitradX</span>
                <span className="text-lg">×</span>
                <span className="text-xl font-semibold">Olivier Giroud</span>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
                Next Our Champions, Our Digital Intelligence gains based on Open Mind Technology.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:shadow-button transition-all duration-300 text-lg px-8 py-6"
              >
                Register Now
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary/50 text-primary hover:bg-primary/10 transition-all duration-300 text-lg px-8 py-6"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="flex items-center space-x-8 pt-8">
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
              </div>
              
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary">500K+</div>
                  <div className="text-sm text-muted-foreground">Active Users</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">$2.5B</div>
                  <div className="text-sm text-muted-foreground">Volume Traded</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">99.9%</div>
                  <div className="text-sm text-muted-foreground">Uptime</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative h-full">
            <div className="relative z-10 h-full">
              <img 
                src={heroImage} 
                alt="Olivier Giroud - BitradX Global Brand Ambassador" 
                className="w-full h-full object-cover object-top max-w-none min-h-[600px] lg:min-h-[700px]"
              />
              
              {/* Floating Cards */}
              <div className="absolute -top-4 -left-4 bg-card/90 backdrop-blur-sm border border-border rounded-xl p-4 shadow-card">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">+24.5%</div>
                    <div className="text-xs text-muted-foreground">Today's Profit</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 bg-card/90 backdrop-blur-sm border border-border rounded-xl p-4 shadow-card">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                    <Shield className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">Secure</div>
                    <div className="text-xs text-muted-foreground">AI Protected</div>
                  </div>
                </div>
              </div>

              <div className="absolute top-1/2 -left-8 bg-card/90 backdrop-blur-sm border border-border rounded-xl p-4 shadow-card">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-yellow-500/20 rounded-full flex items-center justify-center">
                    <Zap className="w-5 h-5 text-yellow-400" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">Lightning</div>
                    <div className="text-xs text-muted-foreground">Fast Execution</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-primary opacity-20 blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;