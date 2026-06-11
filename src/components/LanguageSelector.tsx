import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import englishFlag from "@/assets/flags/english.svg";
import portugueseFlag from "@/assets/flags/portuguese.svg";
import spanishFlag from "@/assets/flags/spanish.svg";
import germanFlag from "@/assets/flags/german.svg";
import indonesianFlag from "@/assets/flags/indonesian.svg";
import thaiFlag from "@/assets/flags/thai.svg";
import koreanFlag from "@/assets/flags/korean.svg";
import russianFlag from "@/assets/flags/russian.svg";
import japaneseFlag from "@/assets/flags/japanese.svg";
import malayFlag from "@/assets/flags/malay.svg";
import chineseFlag from "@/assets/flags/chinese.svg";

const languages = [
  { code: "en", name: "English", flag: englishFlag },
  { code: "pt", name: "Português", flag: portugueseFlag },
  { code: "es", name: "Español", flag: spanishFlag },
  { code: "de", name: "Deutsch", flag: germanFlag },
  { code: "id", name: "Indonesian", flag: indonesianFlag },
  { code: "ms", name: "Bahasa Melayu", flag: malayFlag },
  { code: "th", name: "ไทย", flag: thaiFlag },
  { code: "ko", name: "한국어", flag: koreanFlag },
  { code: "ja", name: "日本語", flag: japaneseFlag },
  { code: "zh", name: "中文", flag: chineseFlag },
  { code: "ru", name: "Русский", flag: russianFlag },
];

const SUPPORTED = languages.map((l) => l.code);

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState(i18n.language || "en");

  const handleLanguageChange = (langCode: string) => {
    i18n.changeLanguage(langCode);
    setCurrentLang(langCode);
    localStorage.setItem("language", langCode);

    // Update URL prefix without full reload
    if (typeof window !== "undefined") {
      const parts = window.location.pathname.split("/").filter(Boolean);
      const hasLangPrefix = parts.length > 0 && SUPPORTED.includes(parts[0]);
      const rest = hasLangPrefix ? parts.slice(1) : parts;
      const newPath = langCode === "en" ? "/" + rest.join("/") : "/" + langCode + (rest.length ? "/" + rest.join("/") : "");
      const finalPath = newPath === "//" ? "/" : newPath.replace(/\/+$/, "") || "/";
      window.history.replaceState({}, "", finalPath + window.location.search);
    }
  };

  const currentLanguage = languages.find((lang) => lang.code === currentLang) || languages[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors focus:outline-none">
        <img src={currentLanguage.flag} alt={currentLanguage.name} className="w-6 h-4 object-cover rounded-sm" />
        <Globe className="w-4 h-4" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48 bg-background border-border z-50 max-h-96 overflow-y-auto">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => handleLanguageChange(language.code)}
            className={`flex items-center gap-3 cursor-pointer ${currentLang === language.code ? "bg-muted" : ""}`}
          >
            <img src={language.flag} alt={language.name} className="w-6 h-4 object-cover rounded-sm" />
            <span>{language.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSelector;
