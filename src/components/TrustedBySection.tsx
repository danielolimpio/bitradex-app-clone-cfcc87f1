import aveAiLogo from "@/assets/partners/ave-ai.png";
import binanceLogo from "@/assets/partners/binance.png";
import tokenPocketLogo from "@/assets/partners/token-pocket.png";
import trustpilotLogo from "@/assets/partners/trustpilot.png";
import bitgetLogo from "@/assets/partners/bitget.png";
import coinmarketcapLogo from "@/assets/partners/coinmarketcap.png";
import tracxnLogo from "@/assets/partners/tracxn.png";
import odailyLogo from "@/assets/partners/odaily.png";
import chainalysisLogo from "@/assets/partners/chainalysis.png";
import certikLogo from "@/assets/partners/certik.png";
import chaincatcherLogo from "@/assets/partners/chaincatcher.png";
import rootdataLogo from "@/assets/partners/rootdata.png";

const TrustedBySection = () => {
  const partners = [
    { name: "AVE.AI", logo: aveAiLogo },
    { name: "Binance", logo: binanceLogo },
    { name: "Token Pocket", logo: tokenPocketLogo },
    { name: "Trustpilot", logo: trustpilotLogo },
    { name: "Bitget", logo: bitgetLogo },
    { name: "CoinMarketCap", logo: coinmarketcapLogo },
    { name: "Tracxn", logo: tracxnLogo },
    { name: "ODaily", logo: odailyLogo },
    { name: "Chainalysis", logo: chainalysisLogo },
    { name: "CertiK", logo: certikLogo },
    { name: "ChainCatcher", logo: chaincatcherLogo },
    { name: "RootData", logo: rootdataLogo }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Backed by top investors and compliant with global regulatory standards
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="flex items-center justify-center group"
            >
              <img 
                src={partner.logo} 
                alt={partner.name}
                className="max-h-16 md:max-h-20 w-auto object-contain filter brightness-75 opacity-70 group-hover:brightness-100 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
              />
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-card border border-border rounded-2xl p-12">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">500K+</div>
              <div className="text-sm text-muted-foreground">Active Traders</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">$2.5B</div>
              <div className="text-sm text-muted-foreground">Daily Volume</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">200+</div>
              <div className="text-sm text-muted-foreground">Trading Pairs</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">99.9%</div>
              <div className="text-sm text-muted-foreground">Uptime</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;