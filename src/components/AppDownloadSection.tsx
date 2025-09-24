import { Button } from "@/components/ui/button";
import { Smartphone, Download, Star, Shield } from "lucide-react";
import appDownload from "@/assets/app-download.png";

const AppDownloadSection = () => {
  const appFeatures = [
    "Real-time market data",
    "Advanced charting tools", 
    "AI trading bot integration",
    "Secure biometric login",
    "Push notifications",
    "Multi-language support"
  ];

  return (
    <section className="py-24 bg-bitradx-card relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-primary rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 border border-primary/50 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-block bg-gradient-primary text-primary-foreground px-6 py-2 rounded-full text-sm font-semibold">
                Start to Download
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
                iOS & Android
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Experience the power of BitradX on the go. Download our mobile app and trade cryptocurrencies anytime, anywhere with professional-grade tools and AI automation.
              </p>
            </div>

            {/* App Features */}
            <div className="grid grid-cols-2 gap-4">
              {appFeatures.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>

            {/* App Store Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:shadow-button transition-all duration-300 flex items-center space-x-3"
              >
                <Smartphone className="w-5 h-5" />
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="text-sm font-bold">App Store</div>
                </div>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center space-x-3"
              >
                <Download className="w-5 h-5" />
                <div className="text-left">
                  <div className="text-xs">Get it on</div>
                  <div className="text-sm font-bold">Google Play</div>
                </div>
              </Button>
            </div>

            {/* App Stats */}
            <div className="flex items-center space-x-8 pt-6">
              <div className="flex items-center space-x-2">
                <div className="flex">
                  {[1,2,3,4,5].map((star) => (
                    <Star key={star} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">4.8/5 Rating</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">100% Secure</span>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <img 
              src={appDownload} 
              alt="BitradX Mobile App Download" 
              className="w-full h-auto"
            />
            
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-primary opacity-20 blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownloadSection;