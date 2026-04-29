import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Briefcase, Users, TrendingUp, Heart, Zap, Globe } from "lucide-react";
import SEO from "@/seo/SEO";

const Careers = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    {
      icon: <TrendingUp className="w-8 h-8 text-primary" />,
      title: "Competitive Compensation",
      description: "Industry-leading salaries, equity options, and performance bonuses"
    },
    {
      icon: <Heart className="w-8 h-8 text-primary" />,
      title: "Health & Wellness",
      description: "Comprehensive health insurance, mental health support, and gym memberships"
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "Professional Growth",
      description: "Learning budgets, conference attendance, and mentorship programs"
    },
    {
      icon: <Globe className="w-8 h-8 text-primary" />,
      title: "Remote Flexibility",
      description: "Work from anywhere with flexible hours and unlimited PTO"
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Inclusive Culture",
      description: "Diverse team, regular team events, and collaborative environment"
    },
    {
      icon: <Briefcase className="w-8 h-8 text-primary" />,
      title: "Latest Technology",
      description: "Top-tier equipment, cutting-edge tools, and modern tech stack"
    }
  ];

  const openPositions = [
    {
      title: "Senior Backend Engineer",
      department: "Engineering",
      location: "Remote / Paris",
      type: "Full-time",
      description: "Build scalable trading infrastructure and high-performance APIs for institutional clients.",
      requirements: ["5+ years backend development", "Experience with microservices", "Proficient in Go/Rust", "Knowledge of distributed systems"]
    },
    {
      title: "Blockchain Developer",
      department: "Engineering",
      location: "Remote / Singapore",
      type: "Full-time",
      description: "Develop and maintain blockchain integrations, smart contracts, and Web3 infrastructure.",
      requirements: ["3+ years blockchain development", "Solidity/Rust expertise", "DeFi protocol experience", "Security-first mindset"]
    },
    {
      title: "Product Manager",
      department: "Product",
      location: "São Paulo / Remote",
      type: "Full-time",
      description: "Lead product strategy and roadmap for our AI trading bot and institutional products.",
      requirements: ["4+ years product management", "Fintech/Crypto experience", "Data-driven approach", "Strong communication skills"]
    },
    {
      title: "Security Engineer",
      department: "Security",
      location: "Remote",
      type: "Full-time",
      description: "Ensure platform security, conduct audits, and implement advanced security protocols.",
      requirements: ["5+ years security engineering", "Penetration testing experience", "Crypto security knowledge", "Security certifications"]
    },
    {
      title: "UX/UI Designer",
      department: "Design",
      location: "Remote / Paris",
      type: "Full-time",
      description: "Create intuitive and beautiful interfaces for our trading platforms and mobile apps.",
      requirements: ["3+ years UX/UI design", "Figma proficiency", "Mobile design experience", "Portfolio required"]
    },
    {
      title: "Compliance Officer",
      department: "Legal & Compliance",
      location: "Paris",
      type: "Full-time",
      description: "Manage regulatory compliance, AML/KYC procedures, and liaise with regulators.",
      requirements: ["5+ years compliance role", "Crypto regulations knowledge", "Legal background preferred", "Multi-jurisdictional experience"]
    },
    {
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description: "Manage cloud infrastructure, CI/CD pipelines, and ensure system reliability.",
      requirements: ["4+ years DevOps experience", "Kubernetes/Docker expertise", "AWS/GCP knowledge", "Monitoring tools proficiency"]
    },
    {
      title: "Data Scientist",
      department: "Data & AI",
      location: "Remote / Singapore",
      type: "Full-time",
      description: "Build ML models for trading algorithms, market prediction, and risk analysis.",
      requirements: ["3+ years data science", "ML/AI expertise", "Python proficiency", "Financial markets knowledge"]
    }
  ];

  const values = [
    {
      title: "Innovation First",
      description: "We embrace cutting-edge technology and encourage creative problem-solving"
    },
    {
      title: "User-Centric",
      description: "Every decision is made with our traders and investors in mind"
    },
    {
      title: "Transparency",
      description: "Open communication, honest feedback, and clear expectations"
    },
    {
      title: "Excellence",
      description: "We set high standards and continuously strive to exceed them"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO />
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Build the Future of Trading
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Join a team of world-class engineers, designers, and innovators reshaping digital asset trading
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg" className="bg-gradient-primary hover:shadow-button">
                View Open Positions
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Join Bitradex?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We offer more than just a job – it's an opportunity to make a real impact in the crypto industry
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Open Positions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're hiring talented individuals across multiple departments
            </p>
          </div>

          <div className="space-y-6 max-w-5xl mx-auto">
            {openPositions.map((position, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-semibold mb-2">{position.title}</h3>
                      <div className="flex flex-wrap gap-3">
                        <Badge variant="secondary" className="flex items-center gap-1">
                          <Briefcase className="w-3 h-3" />
                          {position.department}
                        </Badge>
                        <Badge variant="outline" className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {position.location}
                        </Badge>
                        <Badge variant="outline" className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {position.type}
                        </Badge>
                      </div>
                    </div>
                    <Button className="bg-gradient-primary hover:shadow-button whitespace-nowrap">
                      Apply Now
                    </Button>
                  </div>
                  
                  <p className="text-muted-foreground mb-4">{position.description}</p>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Requirements:</h4>
                    <ul className="space-y-1">
                      {position.requirements.map((req, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Hiring Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A transparent and efficient process designed to find the best fit for both parties
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { step: "01", title: "Application", description: "Submit your application and resume through our careers portal" },
              { step: "02", title: "Screening", description: "Our team reviews your application and reaches out for initial chat" },
              { step: "03", title: "Interviews", description: "Technical and behavioral interviews with team members" },
              { step: "04", title: "Offer", description: "Receive your offer and join the Bitradex family!" }
            ].map((stage, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {stage.step}
                </div>
                <h3 className="text-lg font-semibold mb-2">{stage.title}</h3>
                <p className="text-sm text-muted-foreground">{stage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Don't See Your Role?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            We're always looking for exceptional talent. Send us your resume and tell us how you can contribute to Bitradex.
          </p>
          <Button 
            size="lg"
            variant="outline"
            onClick={() => window.location.href = 'mailto:careers@bitradex.app'}
          >
            Send General Application
          </Button>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
      <WhatsAppFloatingButton />
    </div>
  );
};

export default Careers;
