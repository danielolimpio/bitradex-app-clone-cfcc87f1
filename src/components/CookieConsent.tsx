import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined");
    setIsVisible(false);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-8 left-8 z-50 max-w-md bg-background border border-border rounded-lg shadow-elegant p-6 animate-in slide-in-from-bottom-5">
      <button
        onClick={handleClose}
        className="absolute top-3 right-3 text-muted-foreground hover:text-foreground transition-colors"
        aria-label="Close"
      >
        <X className="w-5 h-5" />
      </button>

      <h3 className="text-lg font-semibold mb-3 pr-6">{t('cookies.title')}</h3>
      
      <p className="text-sm text-muted-foreground mb-4">
        {t('cookies.description')}
      </p>

      <div className="flex flex-col gap-2 mb-4">
        <a
          href="/privacy-policy"
          className="text-sm text-primary hover:underline"
        >
          {t('cookies.privacyPolicy')}
        </a>
        <a
          href="/terms-of-service"
          className="text-sm text-primary hover:underline"
        >
          {t('cookies.termsOfService')}
        </a>
        <a
          href="/disclaimer"
          className="text-sm text-primary hover:underline"
        >
          {t('cookies.cookiePolicy')}
        </a>
      </div>

      <div className="flex gap-2">
        <Button
          onClick={handleAccept}
          className="bg-gradient-primary hover:shadow-button flex-1"
        >
          {t('cookies.accept')}
        </Button>
        <Button
          onClick={handleDecline}
          variant="outline"
          className="flex-1"
        >
          {t('cookies.decline')}
        </Button>
      </div>
    </div>
  );
};

export default CookieConsent;
