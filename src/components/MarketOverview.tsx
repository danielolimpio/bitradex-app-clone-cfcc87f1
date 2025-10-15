import { TrendingUp, TrendingDown } from "lucide-react";
import { Link } from "react-router-dom";
import bitcoinLogo from "@/assets/crypto/bitcoin.png";
import ethereumLogo from "@/assets/crypto/ethereum.png";
import bnbLogo from "@/assets/crypto/bnb.png";
import solanaLogo from "@/assets/crypto/solana.png";

const MarketOverview = () => {
  const marketData = [
    {
      id: 1,
      name: "BTC",
      fullName: "Bitcoin",
      price: "$70,291.97",
      change: "+2.45%",
      volume: "$2.1B",
      marketCap: "$1.38T",
      isPositive: true,
      logo: bitcoinLogo
    },
    {
      id: 2,
      name: "ETH",
      fullName: "Ethereum",
      price: "$3,291",
      change: "-1.2%",
      volume: "$892M",
      marketCap: "$396B",
      isPositive: false,
      logo: ethereumLogo
    },
    {
      id: 3,
      name: "BNB",
      fullName: "Binance Coin",
      price: "$619",
      change: "+0.85%",
      volume: "$456M",
      marketCap: "$92B",
      isPositive: true,
      logo: bnbLogo
    },
    {
      id: 4,
      name: "SOL",
      fullName: "Solana",
      price: "$148.95",
      change: "-3.2%",
      volume: "$784M",
      marketCap: "$69B",
      isPositive: false,
      logo: solanaLogo
    }
  ];

  const tableHeaders = ["Rank", "Name", "Last Price", "24h Change", "24h Volume", "Market Cap"];

  return (
    <section id="market" className="py-24 bg-bitradx-card">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Market Overview
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay updated with real-time cryptocurrency prices and market trends
          </p>
        </div>

        {/* Market Table */}
        <div className="bg-background/50 backdrop-blur-sm rounded-2xl border border-border overflow-hidden shadow-card">
          {/* Mobile View */}
          <div className="md:hidden space-y-4 p-4">
            {marketData.map((coin, index) => (
              <div key={coin.id} className="bg-card/50 rounded-xl p-4 border border-border">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-3">
                    <span className="text-muted-foreground text-sm">#{index + 1}</span>
                    <img src={coin.logo} alt={coin.name} className="w-8 h-8 rounded-full" />
                    <div>
                      <div className="font-semibold text-foreground">{coin.name}</div>
                      <div className="text-xs text-muted-foreground">{coin.fullName}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-foreground">{coin.price}</div>
                    <div className="flex items-center space-x-1">
                      {coin.isPositive ? (
                        <TrendingUp className="w-3 h-3 text-green-400" />
                      ) : (
                        <TrendingDown className="w-3 h-3 text-red-400" />
                      )}
                      <span className={`text-sm ${coin.isPositive ? 'text-green-400' : 'text-red-400'}`}>
                        {coin.change}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <div className="text-muted-foreground text-xs">Volume</div>
                    <div className="text-foreground">{coin.volume}</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground text-xs">Market Cap</div>
                    <div className="text-foreground">{coin.marketCap}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop View */}
          <div className="hidden md:block">
            {/* Table Header */}
            <div className="bg-gradient-card border-b border-border">
              <div className="grid grid-cols-6 gap-4 p-6 text-sm font-semibold text-muted-foreground">
                {tableHeaders.map((header) => (
                  <div key={header} className="text-left">
                    {header}
                  </div>
                ))}
              </div>
            </div>

            {/* Table Body */}
            <div className="divide-y divide-border">
              {marketData.map((coin, index) => (
                <div 
                  key={coin.id}
                  className="grid grid-cols-6 gap-4 p-6 hover:bg-primary/5 transition-colors duration-200 group"
                >
                  {/* Rank */}
                  <div className="flex items-center">
                    <span className="text-muted-foreground font-medium">#{index + 1}</span>
                  </div>

                  {/* Name */}
                  <div className="flex items-center space-x-3">
                    <img src={coin.logo} alt={coin.name} className="w-10 h-10 rounded-full" />
                    <div>
                      <div className="font-semibold text-foreground">{coin.name}</div>
                      <div className="text-sm text-muted-foreground">{coin.fullName}</div>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="flex items-center">
                    <span className="font-bold text-foreground text-lg">{coin.price}</span>
                  </div>

                  {/* 24h Change */}
                  <div className="flex items-center space-x-1">
                    {coin.isPositive ? (
                      <TrendingUp className="w-4 h-4 text-green-400" />
                    ) : (
                      <TrendingDown className="w-4 h-4 text-red-400" />
                    )}
                    <span className={`font-semibold ${coin.isPositive ? 'text-green-400' : 'text-red-400'}`}>
                      {coin.change}
                    </span>
                  </div>

                  {/* Volume */}
                  <div className="flex items-center">
                    <span className="text-muted-foreground">{coin.volume}</span>
                  </div>

                  {/* Market Cap */}
                  <div className="flex items-center">
                    <span className="text-muted-foreground">{coin.marketCap}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Table Footer */}
          <div className="bg-gradient-card border-t border-border p-6">
            <div className="text-center">
              <Link to="/markets" className="text-primary hover:text-primary-foreground hover:bg-primary px-6 py-2 rounded-lg transition-all duration-300 inline-block">
                View More Markets →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketOverview;