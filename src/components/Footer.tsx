import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, MapPin, Phone, Twitter, Facebook, Instagram, Linkedin, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/bitradex-logo.png";

const Footer = () => {
  const footerSections = [
    {
      title: "About Bitradex",
      links: [
        { text: "About Us", href: "/about-us" },
        { text: "Our Team", href: "/our-team" }, 
        { text: "Careers", href: "/careers" },
        { text: "Press & Media", href: "/press-media" },
        { text: "Contact Us", href: "/contact" }
      ]
    },
    {
      title: "Products",
      links: [
        { text: "Spot Trading", href: "/spot" },
        { text: "Futures Trading", href: "/futures" }, 
        { text: "AI Trading Bot", href: "#" },
        { text: "API Documentation", href: "#" },
        { text: "Mobile App", href: "#" }
      ]
    },
    {
      title: "Services",
      links: [
        { text: "Institutional", href: "/institutional" },
        { text: "VIP Program", href: "#" },
        { text: "Referral Program", href: "#" },
        { text: "Security", href: "#" },
        { text: "Support Center", href: "#" }
      ]
    },
    {
      title: "Support",
      links: [
        { text: "Help Center", href: "#" },
        { text: "Trading Guide", href: "#" },
        { text: "API Documentation", href: "#" },
        { text: "System Status", href: "#" },
        { text: "Bug Report", href: "#" }
      ]
    },
    {
      title: "Legal",
      links: [
        { text: "Terms of Service", href: "/terms-of-service" },
        { text: "Privacy Policy", href: "/privacy-policy" },
        { text: "Risk Disclosure", href: "/risk-disclosure" },
        { text: "AML Policy", href: "/aml-policy" },
        { text: "Compliance", href: "/compliance" }
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
              <img src={logo} alt="Bitradex" className="h-8 w-auto" />
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
                <span>+55 1298251-9116</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" />
                <span>contact@bitradex.app</span>
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
                    {link.href.startsWith('/') ? (
                      <Link 
                        to={link.href}
                        className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                      >
                        {link.text}
                      </Link>
                    ) : (
                      <a 
                        href={link.href}
                        className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                      >
                        {link.text}
                      </a>
                    )}
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
              © 2025 Bitradex | All rights reserved | Developed by{" "}
              <a 
                href="https://danielolimpio.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                DanielOlimpio
              </a>
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