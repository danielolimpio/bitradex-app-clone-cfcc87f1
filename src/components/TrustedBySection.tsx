const TrustedBySection = () => {
  const partners = [
    { name: "Binance", logo: "B" },
    { name: "Coinbase", logo: "C" },
    { name: "Kraken", logo: "K" },
    { name: "FTX", logo: "F" },
    { name: "Huobi", logo: "H" },
    { name: "OKX", logo: "O" },
    { name: "KuCoin", logo: "KC" },
    { name: "Bybit", logo: "BB" },
    { name: "Gate.io", logo: "G" },
    { name: "Bitget", logo: "BG" },
    { name: "MEXC", logo: "M" },
    { name: "Bitrue", logo: "BR" }
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
            Join the world's leading exchanges and financial institutions who trust BitradX for their trading infrastructure.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="group flex items-center justify-center p-6 bg-gradient-card border border-border rounded-xl hover:shadow-card transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-3 mx-auto group-hover:shadow-glow transition-all duration-300">
                  <span className="text-primary-foreground font-bold text-lg">{partner.logo}</span>
                </div>
                <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors duration-300">
                  {partner.name}
                </span>
              </div>
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