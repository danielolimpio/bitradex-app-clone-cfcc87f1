import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Twitter } from "lucide-react";

const OurTeam = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const leadership = [
    {
      name: "Michael Chen",
      role: "Chief Executive Officer",
      bio: "Former Goldman Sachs VP with 15+ years in fintech and blockchain. Led multiple successful exits in the crypto space.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop"
    },
    {
      name: "Sarah Martinez",
      role: "Chief Technology Officer",
      bio: "Ex-Google engineer specializing in distributed systems and high-frequency trading infrastructure.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop"
    },
    {
      name: "David Park",
      role: "Chief Operating Officer",
      bio: "Previously COO at Binance Asia. Expert in regulatory compliance and international market expansion.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop"
    },
    {
      name: "Emma Wilson",
      role: "Chief Financial Officer",
      bio: "Former CFO at Coinbase Europe. CPA with expertise in crypto asset management and financial regulations.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop"
    }
  ];

  const departments = [
    {
      title: "Engineering",
      members: [
        { name: "Alex Thompson", role: "VP of Engineering", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop" },
        { name: "Lisa Wang", role: "Lead Blockchain Developer", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop" },
        { name: "James Rodriguez", role: "Senior Backend Engineer", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop" },
        { name: "Maria Santos", role: "Security Engineer", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop" }
      ]
    },
    {
      title: "Product & Design",
      members: [
        { name: "Oliver Smith", role: "Head of Product", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop" },
        { name: "Sophie Anderson", role: "Lead UX Designer", image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300&h=300&fit=crop" },
        { name: "Marcus Lee", role: "Product Manager", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop" },
        { name: "Nina Patel", role: "UI Designer", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop" }
      ]
    },
    {
      title: "Business & Operations",
      members: [
        { name: "Robert Kim", role: "Head of Business Development", image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=300&h=300&fit=crop" },
        { name: "Jennifer Brooks", role: "Head of Compliance", image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=300&h=300&fit=crop" },
        { name: "Thomas Garcia", role: "Customer Success Lead", image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=300&h=300&fit=crop" },
        { name: "Isabella Rossi", role: "Operations Manager", image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=300&h=300&fit=crop" }
      ]
    }
  ];

  const advisors = [
    {
      name: "Dr. Richard Zhang",
      role: "Strategic Advisor",
      bio: "Former MIT Professor of Computer Science, pioneer in blockchain consensus mechanisms",
      image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=300&h=300&fit=crop"
    },
    {
      name: "Patricia O'Connor",
      role: "Regulatory Advisor",
      bio: "Ex-SEC Commissioner with deep expertise in securities and crypto regulation",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=300&h=300&fit=crop"
    },
    {
      name: "Hiroshi Tanaka",
      role: "Trading Advisor",
      bio: "Former Head of Trading at JPMorgan Asia, 20+ years in institutional trading",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=300&h=300&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Meet Our Team
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Industry veterans and innovators building the future of digital asset trading
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Leadership Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our executive team brings decades of experience from leading financial institutions and tech companies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((member, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow overflow-hidden">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-sm text-primary mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
                  <div className="flex space-x-3">
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      <Twitter className="w-5 h-5" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Departments */}
      {departments.map((dept, deptIndex) => (
        <section key={deptIndex} className={deptIndex % 2 === 1 ? "py-16 bg-muted/30" : "py-16"}>
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-center">{dept.title}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {dept.members.map((member, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow overflow-hidden">
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-1">{member.name}</h3>
                    <p className="text-sm text-muted-foreground">{member.role}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Advisory Board */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Advisory Board</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              World-class advisors guiding our strategic direction and innovation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {advisors.map((advisor, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow overflow-hidden">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={advisor.image} 
                    alt={advisor.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{advisor.name}</h3>
                  <p className="text-sm text-primary mb-3">{advisor.role}</p>
                  <p className="text-sm text-muted-foreground">{advisor.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Team</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            We're always looking for talented individuals to join our mission of revolutionizing digital asset trading.
          </p>
          <a 
            href="/careers"
            className="inline-flex items-center justify-center px-8 py-3 bg-gradient-primary text-primary-foreground rounded-lg hover:shadow-button transition-all duration-300"
          >
            View Open Positions
          </a>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
      <WhatsAppFloatingButton />
    </div>
  );
};

export default OurTeam;
