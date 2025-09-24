import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, MapPin, Phone, Twitter, Facebook, Instagram, Linkedin, Globe } from "lucide-react";

const Footer = () => {
  const footerSections = [
    {
      title: "About BitradX",
      links: [
        "About Us",
        "Our Team", 
        "Careers",
        "Press & Media",
        "Contact Us"
      ]
    },
    {
      title: "Products",
      links: [
        "Spot Trading",
        "Futures Trading", 
        "AI Trading Bot",
        "API Documentation",
        "Mobile App"
      ]
    },
    {
      title: "Services",
      links: [
        "Institutional",
        "VIP Program",
        "Referral Program",
        "Security",
        "Support Center"
      ]
    },
    {
      title: "Support",
      links: [
        "Help Center",
        "Trading Guide",
        "API Documentation",
        "System Status",
        "Bug Report"
      ]
    },
    {
      title: "Legal",
      links: [
        "Terms of Service",
        "Privacy Policy",
        "Risk Disclosure",
        "AML Policy",
        "Compliance"
      ]
    }
  ];

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" }
  ];

  return (
    <footer className="bg-bitradx-darker border-t border-border">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid lg:grid-cols-6 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">B</span>
              </div>
              <span className="text-2xl font-bold text-foreground">BitradX</span>
            </div>
            
            <p className="text-muted-foreground leading-relaxed max-w-md">
              AI-Driven Capital Alpha Generation. Leading the future of digital asset trading with intelligent automation and professional-grade tools.
            </p>

            {/* Newsletter Signup */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">Stay Updated</h4>
              <div className="flex gap-2">
                <Input 
                  placeholder="Enter your email" 
                  className="bg-background/50 border-border"
                />
                <Button className="bg-gradient-primary hover:shadow-button">
                  <Mail className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                <span>20 Rue de Penthièvre, Paris, 75008, FR</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" />
                <span>+33 1 42 96 12 34</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" />
                <span>contact@bitradx.app</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index} className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href="#" 
                      className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer Bottom */}
        <div className="py-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-sm text-muted-foreground">
              © 2024 BitradX. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-gradient-card border border-border rounded-lg flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 group"
                >
                  <social.icon className="w-4 h-4 text-muted-foreground group-hover:text-primary-foreground" />
                </a>
              ))}
            </div>

            {/* Language Selector */}
            <div className="flex items-center space-x-2">
              <Globe className="w-4 h-4 text-muted-foreground" />
              <select className="bg-transparent text-muted-foreground text-sm border-0 focus:outline-none">
                <option value="pt">🇧🇷 Português</option>
                <option value="en">🇺🇸 English</option>
                <option value="fr">🇫🇷 Français</option>
                <option value="es">🇪🇸 Español</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;