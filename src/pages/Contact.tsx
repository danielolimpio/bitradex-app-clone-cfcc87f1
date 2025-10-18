import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Clock, MessageSquare, Headphones } from "lucide-react";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const contactMethods = [
    {
      icon: <Mail className="w-8 h-8 text-primary" />,
      title: "Email Support",
      description: "Get in touch via email for general inquiries",
      contact: "contact@bitradex.app",
      action: "Send Email"
    },
    {
      icon: <Phone className="w-8 h-8 text-primary" />,
      title: "Phone Support",
      description: "Speak directly with our support team",
      contact: "+55 1298251-9116",
      action: "Call Now"
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-primary" />,
      title: "Live Chat",
      description: "Chat with us in real-time for instant support",
      contact: "Available 24/7",
      action: "Start Chat"
    },
    {
      icon: <Headphones className="w-8 h-8 text-primary" />,
      title: "VIP Support",
      description: "Dedicated support for institutional clients",
      contact: "vip@bitradex.app",
      action: "Contact VIP"
    }
  ];

  const offices = [
    {
      city: "Paris",
      country: "France",
      address: "20 Rue de Penthièvre, Paris, 75008",
      phone: "+33 1 234 5678",
      email: "paris@bitradex.app"
    },
    {
      city: "São Paulo",
      country: "Brazil",
      address: "Av. Paulista, 1578 - Bela Vista",
      phone: "+55 1298251-9116",
      email: "saopaulo@bitradex.app"
    },
    {
      city: "Singapore",
      country: "Singapore",
      address: "1 Raffles Place, #40-02",
      phone: "+65 6789 0123",
      email: "singapore@bitradex.app"
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
              Get in Touch
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              We're here to help. Contact our team for support, partnerships, or general inquiries.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">{method.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{method.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{method.description}</p>
                  <p className="text-sm font-medium text-primary mb-4">{method.contact}</p>
                  <Button variant="outline" className="w-full">
                    {method.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">First Name</label>
                    <Input placeholder="John" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Last Name</label>
                    <Input placeholder="Doe" />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <Input type="email" placeholder="john.doe@example.com" />
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Subject</label>
                  <Input placeholder="How can we help you?" />
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Message</label>
                  <Textarea 
                    placeholder="Tell us more about your inquiry..."
                    className="min-h-[150px]"
                  />
                </div>
                
                <Button 
                  className="w-full bg-gradient-primary hover:shadow-button"
                  onClick={(e) => e.preventDefault()}
                >
                  Send Message
                </Button>
              </form>
            </div>

            {/* Office Locations */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Offices</h2>
              <p className="text-muted-foreground mb-8">
                Visit us at one of our global offices or reach out to our regional teams.
              </p>
              
              <div className="space-y-6">
                {offices.map((office, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-2">
                        {office.city}, {office.country}
                      </h3>
                      <div className="space-y-3 text-sm text-muted-foreground">
                        <div className="flex items-start space-x-3">
                          <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                          <span>{office.address}</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                          <span>{office.phone}</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                          <span>{office.email}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Business Hours */}
              <Card className="mt-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Clock className="w-6 h-6 text-primary" />
                    <h3 className="text-xl font-semibold">Business Hours</h3>
                  </div>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span className="font-medium">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday:</span>
                      <span className="font-medium">10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday:</span>
                      <span className="font-medium">Closed</span>
                    </div>
                    <div className="pt-3 border-t border-border mt-3">
                      <p className="text-primary font-medium">24/7 Online Support Available</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Quick answers to common questions. Can't find what you're looking for? Contact our support team.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">How do I create an account?</h3>
                <p className="text-sm text-muted-foreground">
                  Click on the "Sign Up" button in the header, fill in your details, verify your email, and complete the KYC process to start trading.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">What are the trading fees?</h3>
                <p className="text-sm text-muted-foreground">
                  Our fees are competitive and transparent. Maker fees start at 0.10% and taker fees at 0.15%, with volume-based discounts available.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">Is my account secure?</h3>
                <p className="text-sm text-muted-foreground">
                  Yes. We use bank-grade security including 2FA, cold storage for 95% of assets, and advanced encryption protocols.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">How long do withdrawals take?</h3>
                <p className="text-sm text-muted-foreground">
                  Crypto withdrawals are typically processed within 30 minutes. Fiat withdrawals may take 1-3 business days depending on your bank.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
      <WhatsAppFloatingButton />
    </div>
  );
};

export default Contact;
