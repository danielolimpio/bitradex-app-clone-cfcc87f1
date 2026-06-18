import { useTranslation } from "react-i18next";
import { Info } from "lucide-react";

const LegalLanguageNotice = () => {
  const { t, i18n } = useTranslation();
  if (i18n.language === "en") return null;
  return (
    <div className="mb-8 flex items-start gap-3 rounded-lg border border-primary/30 bg-primary/5 p-4 text-sm">
      <Info className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
      <p className="text-muted-foreground">{t("legal.notice")}</p>
    </div>
  );
};

export default LegalLanguageNotice;
