// SEO keywords by language. Each language gets ONLY its own keyword set.
// Brand keyword "Bitradex" is global priority across all locales.

export type SeoLang = "en" | "pt" | "es" | "de" | "id" | "th" | "ko" | "ru";

export const SITE_URL = "https://bitradex.app";
export const BRAND = "Bitradex";

interface SeoLocale {
  htmlLang: string;
  ogLocale: string;
  siteName: string;
  defaultTitle: string;
  defaultDescription: string;
  keywords: string[];
  pages: Record<string, { title: string; description: string }>;
}

const brandCore = [
  "Bitradex",
  "Bitradex login",
  "Bitradex app",
  "Bitradex exchange",
  "Bitradex platform",
  "Bitradex.ai",
  "Bitradex.com",
  "Bitradex AI bot",
  "Bitradex AI trading",
  "Bitradex automated trading",
  "Bitradex ARK model",
  "Bitradex futures",
  "Bitradex spot trading",
  "Bitradex staking",
  "Bitradex token",
  "BTX token",
  "Bitradex BTX",
  "Bitradex coinmarketcap",
  "Bitradex certik",
  "Bitradex security audit",
  "Bitradex proof of reserves",
  "Bitradex card",
  "Bitradex BTX card",
  "Bitradex UK registration",
  "BITRADEX FINTECH LIMITED",
];

export const seoLocales: Record<SeoLang, SeoLocale> = {
  en: {
    htmlLang: "en",
    ogLocale: "en_US",
    siteName: "Bitradex",
    defaultTitle: "Bitradex | AI-Powered Crypto Exchange & Trading Platform",
    defaultDescription:
      "Bitradex is a trusted AI-powered cryptocurrency exchange. Trade BTC, ETH, BNB and SOL on spot and futures markets, use the Bitradex AI bot, and earn with the BTX token.",
    keywords: [
      ...brandCore,
      "Bitradex review",
      "Bitradex legit",
      "Bitradex scam",
      "Bitradex trustworthy",
      "Bitradex reliable",
      "Bitradex fraud",
      "Bitradex register",
      "Bitradex sign up",
      "Bitradex invite code",
      "Bitradex referral code",
      "Bitradex bonus",
      "Bitradex welcome bonus",
      "Bitradex signup bonus",
      "Bitradex referral bonus",
      "Bitradex how to withdraw",
      "Bitradex how to deposit",
      "Bitradex withdrawal",
      "Bitradex deposit",
      "Bitradex fees",
      "Bitradex KYC",
      "Bitradex tutorial",
      "Bitradex app download",
      "Bitradex mobile app",
      "Bitradex iOS",
      "Bitradex Android",
      "Bitradex play store",
      "Bitradex app store",
      "Bitradex ROI",
      "Bitradex passive income",
      "Bitradex yield",
      "Bitradex investment",
      "Bitradex returns",
      "Bitradex profit",
      "Bitradex daily income",
      "Bitradex vs binance",
      "Bitradex vs OKX",
      "Bitradex vs bybit",
      "Bitradex alternative",
      "Bitradex security",
      "Bitradex regulation",
      "Bitradex MSB registration",
      "Bitradex Singapore",
      "AI crypto trading bot",
      "automated crypto trading platform",
      "best AI crypto exchange",
    ],
    pages: {
      "/": {
        title: "Bitradex | AI-Powered Crypto Exchange & Trading Platform",
        description:
          "Trade crypto with confidence on Bitradex. AI trading bot, spot & futures markets, BTX token, CertiK audited security and global compliance.",
      },
      "/about-us": {
        title: "About Bitradex | Mission, Team & Company Information",
        description:
          "Learn about Bitradex, BITRADEX FINTECH LIMITED, our mission, team and our vision for AI-powered crypto trading worldwide.",
      },
      "/markets": {
        title: "Bitradex Markets | Live Crypto Prices BTC, ETH, BNB, SOL",
        description:
          "Live crypto market prices on Bitradex. Track BTC, ETH, BNB, SOL and the BTX token in real time across spot and futures markets.",
      },
      "/spot": {
        title: "Bitradex Spot Trading | Buy & Sell Crypto Instantly",
        description:
          "Trade crypto on Bitradex Spot with low fees, deep liquidity and TradingView charts for BTC, ETH, BNB, SOL and BTX.",
      },
      "/futures": {
        title: "Bitradex Futures | Leveraged Crypto Derivatives Trading",
        description:
          "Trade Bitradex Futures with up to high leverage, advanced risk tools and AI-powered automation on a CertiK audited platform.",
      },
      "/institutional": {
        title: "Bitradex Institutional | OTC, Custody & API Trading",
        description:
          "Bitradex institutional services: OTC desk, secure custody, API access, deep liquidity and dedicated support for funds and corporates.",
      },
      "/contact": {
        title: "Contact Bitradex | Customer Support & Help Center",
        description:
          "Contact the Bitradex team for support with login, withdrawals, deposits, KYC, AI bot and account questions.",
      },
      "/our-team": {
        title: "Our Team | Bitradex Leadership & Engineers",
        description:
          "Meet the Bitradex leadership team behind our AI-powered crypto exchange and the BTX token ecosystem.",
      },
      "/careers": {
        title: "Careers at Bitradex | Join the Crypto & AI Revolution",
        description:
          "Open roles at Bitradex. Build the future of AI-powered crypto trading with a global team in engineering, compliance and product.",
      },
      "/press-media": {
        title: "Bitradex Press & Media | News, Brand Assets & Releases",
        description:
          "Bitradex press releases, media kit, brand assets and official statements about the BTX token, partnerships and milestones.",
      },
      "/terms-of-service": {
        title: "Terms of Service | Bitradex",
        description:
          "Read the Bitradex Terms of Service governing use of the platform, accounts, trading, fees and the BTX token.",
      },
      "/privacy-policy": {
        title: "Privacy Policy | Bitradex",
        description:
          "How Bitradex collects, uses and protects your personal data, KYC information and account activity.",
      },
      "/risk-disclosure": {
        title: "Risk Disclosure | Bitradex Crypto Trading Risks",
        description:
          "Important risk disclosure for trading crypto, futures and derivatives on Bitradex, including volatility and leverage risks.",
      },
      "/aml-policy": {
        title: "AML Policy | Bitradex Anti-Money Laundering",
        description:
          "Bitradex AML policy, KYC requirements and our commitment to fighting money laundering and terrorist financing.",
      },
      "/compliance": {
        title: "Compliance | Bitradex Global Regulatory Standards",
        description:
          "Bitradex compliance program: UK registration, MSB registration, sanctions screening and regulatory cooperation worldwide.",
      },
    },
  },

  pt: {
    htmlLang: "pt-BR",
    ogLocale: "pt_BR",
    siteName: "Bitradex",
    defaultTitle: "Bitradex | Exchange de Criptomoedas com IA e Bot de Trading",
    defaultDescription:
      "A Bitradex é uma corretora de criptomoedas com inteligência artificial. Negocie BTC, ETH, BNB e SOL no spot e futuros, use o bot de IA e ganhe com o token BTX.",
    keywords: [
      ...brandCore,
      "Bitradex é confiável",
      "Bitradex é golpe",
      "Bitradex seguro",
      "Bitradex reclame aqui",
      "Bitradex é uma corretora",
      "Bitradex funciona",
      "Bitradex depoimentos",
      "Bitradex opiniões",
      "Bitradex reclamações",
      "Bitradex vale a pena",
      "Bitradex como ganhar dinheiro",
      "Bitradex cadastro",
      "Bitradex criação de conta",
      "Bitradex login",
      "Bitradex saque",
      "Bitradex depósito",
      "Bitradex como usar",
      "Bitradex tutorial",
      "Bitradex taxas",
      "Bitradex KYC",
      "Bitradex bônus",
      "Bitradex código de convite",
      "Bitradex código de indicação",
      "Bitradex bot de IA",
      "Bitradex trading automatizado",
      "Bitradex futuros",
      "Bitradex spot",
      "Bitradex staking",
      "Bitradex token",
      "Bitradex BTX",
      "Bitradex coinmarketcap",
      "Bitradex certik",
      "Bitradex auditoria de segurança",
      "Bitradex cartão",
      "Bitradex registro UK",
      "Bitradex vs binance",
      "Bitradex alternativa",
      "Bitradex renda passiva",
      "Bitradex investimento",
      "Bitradex lucro",
      "corretora de criptomoedas com IA",
      "melhor exchange de criptomoedas",
      "bot de trading de criptomoedas",
    ],
    pages: {
      "/": {
        title: "Bitradex | Exchange de Criptomoedas com IA e Bot de Trading",
        description:
          "Negocie cripto com confiança na Bitradex. Bot de IA, spot e futuros, token BTX, segurança auditada pela CertiK e compliance global.",
      },
      "/about-us": {
        title: "Sobre a Bitradex | Missão, Equipe e Empresa",
        description:
          "Conheça a Bitradex (BITRADEX FINTECH LIMITED), nossa missão, equipe e visão para o trading de cripto com IA em todo o mundo.",
      },
      "/markets": {
        title: "Mercados Bitradex | Cotações ao Vivo BTC, ETH, BNB, SOL",
        description:
          "Cotações de criptomoedas ao vivo na Bitradex. Acompanhe BTC, ETH, BNB, SOL e o token BTX em tempo real no spot e futuros.",
      },
      "/spot": {
        title: "Bitradex Spot | Compre e Venda Cripto na Hora",
        description:
          "Negocie cripto no Spot da Bitradex com taxas baixas, alta liquidez e gráficos TradingView de BTC, ETH, BNB, SOL e BTX.",
      },
      "/futures": {
        title: "Bitradex Futuros | Trading com Alavancagem em Cripto",
        description:
          "Negocie Bitradex Futuros com alavancagem, ferramentas de risco avançadas e automação de IA em uma plataforma auditada pela CertiK.",
      },
      "/institutional": {
        title: "Bitradex Institucional | OTC, Custódia e API",
        description:
          "Serviços institucionais da Bitradex: mesa OTC, custódia segura, acesso por API, alta liquidez e suporte dedicado para fundos e empresas.",
      },
      "/contact": {
        title: "Contato Bitradex | Suporte ao Cliente e Central de Ajuda",
        description:
          "Entre em contato com a equipe Bitradex para suporte com login, saque, depósito, KYC, bot de IA e dúvidas da sua conta.",
      },
      "/our-team": {
        title: "Nossa Equipe | Liderança e Engenheiros da Bitradex",
        description:
          "Conheça a liderança da Bitradex por trás da nossa exchange de criptomoedas com IA e do ecossistema do token BTX.",
      },
      "/careers": {
        title: "Carreiras na Bitradex | Junte-se à Revolução de IA e Cripto",
        description:
          "Vagas abertas na Bitradex. Construa o futuro do trading de cripto com IA em uma equipe global de engenharia, compliance e produto.",
      },
      "/press-media": {
        title: "Imprensa e Mídia Bitradex | Notícias e Releases Oficiais",
        description:
          "Releases, kit de imprensa, ativos de marca e comunicados oficiais da Bitradex sobre o token BTX, parcerias e marcos.",
      },
      "/terms-of-service": {
        title: "Termos de Serviço | Bitradex",
        description:
          "Leia os Termos de Serviço da Bitradex que regem o uso da plataforma, contas, trading, taxas e o token BTX.",
      },
      "/privacy-policy": {
        title: "Política de Privacidade | Bitradex",
        description:
          "Como a Bitradex coleta, utiliza e protege seus dados pessoais, informações de KYC e atividade da conta.",
      },
      "/risk-disclosure": {
        title: "Divulgação de Riscos | Riscos do Trading na Bitradex",
        description:
          "Divulgação de riscos para negociação de cripto, futuros e derivativos na Bitradex, incluindo volatilidade e alavancagem.",
      },
      "/aml-policy": {
        title: "Política AML | Prevenção à Lavagem de Dinheiro Bitradex",
        description:
          "Política AML da Bitradex, requisitos de KYC e nosso compromisso no combate à lavagem de dinheiro e ao financiamento do terrorismo.",
      },
      "/compliance": {
        title: "Compliance | Padrões Regulatórios Globais da Bitradex",
        description:
          "Programa de compliance da Bitradex: registro no Reino Unido, MSB, screening de sanções e cooperação regulatória.",
      },
    },
  },

  es: {
    htmlLang: "es",
    ogLocale: "es_ES",
    siteName: "Bitradex",
    defaultTitle: "Bitradex | Exchange de Criptomonedas con IA y Bot de Trading",
    defaultDescription:
      "Bitradex es un exchange de criptomonedas con inteligencia artificial. Opera BTC, ETH, BNB y SOL en spot y futuros, usa el bot de IA y gana con el token BTX.",
    keywords: [
      ...brandCore,
      "Bitradex es confiable",
      "Bitradex estafa",
      "Bitradex opiniones",
      "Bitradex funciona",
      "Bitradex seguro",
      "Bitradex reseña",
      "Bitradex registro",
      "Bitradex iniciar sesión",
      "Bitradex retiro",
      "Bitradex depósito",
      "Bitradex comisiones",
      "Bitradex KYC",
      "Bitradex tutorial",
      "Bitradex cómo usar",
      "Bitradex bono",
      "Bitradex código de invitación",
      "Bitradex código de referido",
      "Bitradex bot IA",
      "Bitradex trading automatizado",
      "Bitradex futuros",
      "Bitradex spot",
      "Bitradex staking",
      "Bitradex token BTX",
      "Bitradex coinmarketcap",
      "Bitradex certik",
      "Bitradex tarjeta",
      "Bitradex vs binance",
      "Bitradex alternativa",
      "Bitradex ingresos pasivos",
      "Bitradex inversión",
      "exchange de criptomonedas con IA",
    ],
    pages: {
      "/": {
        title: "Bitradex | Exchange de Criptomonedas con IA y Bot de Trading",
        description:
          "Opera cripto con confianza en Bitradex. Bot de IA, spot y futuros, token BTX, seguridad auditada por CertiK y cumplimiento global.",
      },
    },
  },

  de: {
    htmlLang: "de",
    ogLocale: "de_DE",
    siteName: "Bitradex",
    defaultTitle: "Bitradex | KI-Krypto-Börse und Trading-Plattform",
    defaultDescription:
      "Bitradex ist eine vertrauenswürdige KI-Krypto-Börse. Handeln Sie BTC, ETH, BNB und SOL auf Spot- und Futures-Märkten mit dem Bitradex KI-Bot.",
    keywords: [
      ...brandCore,
      "Bitradex Erfahrungen",
      "Bitradex seriös",
      "Bitradex Betrug",
      "Bitradex Test",
      "Bitradex Anmeldung",
      "Bitradex Auszahlung",
      "Bitradex Einzahlung",
      "Bitradex Gebühren",
      "Bitradex KYC",
      "Bitradex Tutorial",
      "Bitradex KI-Bot",
      "Bitradex Futures",
      "Bitradex Spot",
      "Bitradex Staking",
      "Bitradex Token BTX",
      "Bitradex CertiK",
      "Bitradex Karte",
      "Bitradex vs Binance",
      "KI-Krypto-Börse",
      "Krypto Trading Bot",
    ],
    pages: {
      "/": {
        title: "Bitradex | KI-Krypto-Börse und Trading-Plattform",
        description:
          "Handeln Sie Krypto sicher auf Bitradex. KI-Bot, Spot & Futures, BTX-Token, von CertiK geprüfte Sicherheit und globale Compliance.",
      },
    },
  },

  id: {
    htmlLang: "id",
    ogLocale: "id_ID",
    siteName: "Bitradex",
    defaultTitle: "Bitradex | Exchange Kripto AI & Platform Trading",
    defaultDescription:
      "Bitradex adalah exchange cryptocurrency berbasis AI. Trading BTC, ETH, BNB, dan SOL di spot dan futures, gunakan bot AI, dan dapatkan dengan token BTX.",
    keywords: [
      ...brandCore,
      "Bitradex aman",
      "Bitradex penipuan",
      "Bitradex review",
      "Bitradex daftar",
      "Bitradex masuk",
      "Bitradex penarikan",
      "Bitradex deposit",
      "Bitradex biaya",
      "Bitradex KYC",
      "Bitradex tutorial",
      "Bitradex bot AI",
      "Bitradex futures",
      "Bitradex spot",
      "Bitradex staking",
      "Bitradex token BTX",
      "Bitradex CertiK",
      "Bitradex kartu",
      "Bitradex vs binance",
      "exchange kripto AI",
      "bot trading kripto",
    ],
    pages: {
      "/": {
        title: "Bitradex | Exchange Kripto AI & Platform Trading",
        description:
          "Trading kripto dengan percaya diri di Bitradex. Bot AI, pasar spot & futures, token BTX, keamanan diaudit CertiK, dan kepatuhan global.",
      },
    },
  },

  th: {
    htmlLang: "th",
    ogLocale: "th_TH",
    siteName: "Bitradex",
    defaultTitle: "Bitradex | กระดานเทรดคริปโต AI และแพลตฟอร์มเทรด",
    defaultDescription:
      "Bitradex คือกระดานเทรดคริปโตที่ขับเคลื่อนด้วย AI เทรด BTC ETH BNB และ SOL ในตลาด spot และ futures พร้อมบอท AI และเหรียญ BTX",
    keywords: [
      ...brandCore,
      "Bitradex ปลอดภัยไหม",
      "Bitradex หลอกลวง",
      "Bitradex รีวิว",
      "Bitradex สมัคร",
      "Bitradex เข้าสู่ระบบ",
      "Bitradex ถอนเงิน",
      "Bitradex ฝากเงิน",
      "Bitradex ค่าธรรมเนียม",
      "Bitradex KYC",
      "Bitradex สอนใช้",
      "Bitradex บอท AI",
      "Bitradex futures",
      "Bitradex spot",
      "Bitradex staking",
      "Bitradex token BTX",
      "Bitradex CertiK",
      "Bitradex บัตร",
      "กระดานเทรดคริปโต AI",
      "บอทเทรดคริปโต",
    ],
    pages: {
      "/": {
        title: "Bitradex | กระดานเทรดคริปโต AI และแพลตฟอร์มเทรด",
        description:
          "เทรดคริปโตอย่างมั่นใจบน Bitradex บอท AI ตลาด spot และ futures เหรียญ BTX ความปลอดภัยที่ตรวจสอบโดย CertiK และการปฏิบัติตามกฎระดับโลก",
      },
    },
  },

  ko: {
    htmlLang: "ko",
    ogLocale: "ko_KR",
    siteName: "Bitradex",
    defaultTitle: "Bitradex | AI 암호화폐 거래소 및 트레이딩 플랫폼",
    defaultDescription:
      "Bitradex는 AI 기반 암호화폐 거래소입니다. BTC, ETH, BNB, SOL을 현물 및 선물 시장에서 거래하고 AI 봇과 BTX 토큰을 활용하세요.",
    keywords: [
      ...brandCore,
      "Bitradex 후기",
      "Bitradex 사기",
      "Bitradex 안전",
      "Bitradex 가입",
      "Bitradex 로그인",
      "Bitradex 출금",
      "Bitradex 입금",
      "Bitradex 수수료",
      "Bitradex KYC",
      "Bitradex 사용법",
      "Bitradex AI 봇",
      "Bitradex 선물",
      "Bitradex 현물",
      "Bitradex 스테이킹",
      "Bitradex BTX 토큰",
      "Bitradex CertiK",
      "Bitradex 카드",
      "AI 암호화폐 거래소",
      "암호화폐 자동매매 봇",
    ],
    pages: {
      "/": {
        title: "Bitradex | AI 암호화폐 거래소 및 트레이딩 플랫폼",
        description:
          "Bitradex에서 자신 있게 암호화폐를 거래하세요. AI 봇, 현물 및 선물 시장, BTX 토큰, CertiK 감사 보안, 글로벌 컴플라이언스.",
      },
    },
  },

  ru: {
    htmlLang: "ru",
    ogLocale: "ru_RU",
    siteName: "Bitradex",
    defaultTitle: "Bitradex | Криптобиржа с ИИ и торговая платформа",
    defaultDescription:
      "Bitradex — криптобиржа с искусственным интеллектом. Торгуйте BTC, ETH, BNB и SOL на спот и фьючерсах, используйте ИИ-бота и токен BTX.",
    keywords: [
      ...brandCore,
      "Bitradex отзывы",
      "Bitradex развод",
      "Bitradex надежность",
      "Bitradex регистрация",
      "Bitradex вход",
      "Bitradex вывод",
      "Bitradex депозит",
      "Bitradex комиссии",
      "Bitradex KYC",
      "Bitradex как пользоваться",
      "Bitradex ИИ-бот",
      "Bitradex фьючерсы",
      "Bitradex спот",
      "Bitradex стейкинг",
      "Bitradex токен BTX",
      "Bitradex CertiK",
      "Bitradex карта",
      "криптобиржа с ИИ",
      "бот для торговли криптовалютой",
    ],
    pages: {
      "/": {
        title: "Bitradex | Криптобиржа с ИИ и торговая платформа",
        description:
          "Торгуйте криптой уверенно на Bitradex. ИИ-бот, спот и фьючерсы, токен BTX, безопасность с аудитом CertiK и глобальный комплаенс.",
      },
    },
  },
};

export const seoLangs: SeoLang[] = [
  "en",
  "pt",
  "es",
  "de",
  "id",
  "th",
  "ko",
  "ru",
];
