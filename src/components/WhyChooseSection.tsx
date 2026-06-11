import { Brain, Shield, Globe, Zap } from "lucide-react";
import { useTranslation } from "react-i18next";

const WhyChooseSection = () => {
  const { t } = useTranslation();
  const features = [
    { icon: Brain, key: "ai" },
    { icon: Shield, key: "security" },
    { icon: Globe, key: "global" },
    { icon: Zap, key: "fast" },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {t("whyChoose.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t("whyChoose.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map(({ icon: Icon, key }) => (
            <div
              key={key}
              className="group relative bg-gradient-card border border-border rounded-2xl p-8 hover:shadow-card transition-all duration-300 hover:-translate-y-1"
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
                  <Icon className="w-8 h-8 text-primary-foreground" />
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  {t(`whyChoose.items.${key}.title`)}
                </h3>
                <p className="text-muted-foreground leading-relaxed font-normal">
                  {t(`whyChoose.items.${key}.description`)}
                </p>
              </div>

              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
