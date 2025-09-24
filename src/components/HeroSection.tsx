import { Button } from "@/components/ui/button";
import { Play, Star, TrendingUp, Shield, Zap } from "lucide-react";
import heroImage from "@/assets/olivier-giroud-hero.png";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-hero flex items-start overflow-hidden min-h-[70vh] lg:min-h-[80vh] xl:min-h-[85vh] 2xl:min-h-[75vh]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 border border-primary rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 border border-primary/50 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-primary/30 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-0">
        <div className="grid lg:grid-cols-2 gap-0 items-stretch relative">
          {/* Left Content */}
          <div className="space-y-8 flex flex-col justify-center pt-4 lg:pt-8 pb-0 relative z-20 px-4 lg:px-8">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                <span className="text-foreground">Champions Endorse</span>
                <br />
                <span className="text-foreground">Intelligence Leads</span>
              </h1>
              
              <div className="flex items-center space-x-4 text-primary">
                <span className="text-xl font-semibold">Bitradex</span>
                <span className="text-lg">×</span>
                <span className="text-xl font-semibold">Olivier Giroud</span>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
                World Cup champion star Olivier Giroud officially joins Bitradex as Global Brand Ambassador
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
          <div className="absolute top-0 right-0 bottom-0 left-[65%] lg:left-[45%] z-10">
            <img 
              src={heroImage} 
              alt="Olivier Giroud - Bitradex Global Brand Ambassador" 
              className="h-full w-full object-cover object-right"
            />
            
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-primary opacity-20 blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;