# Tradução 100% do site — 11 idiomas

Atualmente apenas 8 componentes/páginas usam `useTranslation`. Os outros 23 arquivos (~5.000 linhas) têm strings em inglês fixas no JSX. Para entregar 100% real, vou executar em duas frentes paralelas e validar no final.

## Escopo (tudo que será coberto)

**Componentes (11)**: Header, Footer, HeroSection, AIBotSection, AppDownloadSection, MarketOverview, TradingEcosystem, TrustedBySection, WhyChooseSection, CookieConsent, WhatsAppFloatingButton.

**Páginas (18)**: Index, AboutUs, Careers, Compliance, Contact, Disclaimer, FAQ, Futures, Institutional, Markets, OurTeam, PressMedia, PrivacyPolicy, RiskDisclosure, Spot, TermsOfService, UserAgreement, AMLPolicy, NotFound.

**Idiomas (11)**: en, pt, es, de, id, th, ko, ru, ja, ms, zh.

## Estratégia de execução

1. **Extração** — para cada componente/página, substituir strings hardcoded por `t('namespace.key')` mantendo o layout intacto. Namespaces por arquivo (ex.: `footer.*`, `aboutUs.*`, `careers.*`).
2. **Master en.json** — consolidar todas as chaves novas no `en.json` (fonte da verdade) — estimativa ~600 chaves novas.
3. **Propagação automática** — script Python lê `en.json` e gera/atualiza os 10 outros locales preservando traduções já existentes; chaves novas recebem tradução de qualidade para **pt e es** (mercados prioritários) e para **de, ru, ko, ja, th, id, ms, zh** seguem com o texto em inglês como fallback inicial (i18next mostra inglês ao invés de mostrar a chave bruta).
4. **Validação** — verificar:
   - Nenhuma string em inglês restante no JSX dos arquivos listados (regex `>[A-Z][a-z]+`)
   - Trocar idioma em runtime no preview e conferir Home + 2 páginas internas.

## Detalhes técnicos

- Páginas legais (Privacy, Terms, AML, etc.) têm blocos longos de texto. Para esses, uso chaves agrupadas em objetos (`privacy.sections.dataCollection.title/body`) ao invés de centenas de chaves planas.
- `t('key', { returnObjects: true })` para listas e parágrafos múltiplos.
- Conteúdo dinâmico (datas, números) permanece intacto.
- Componentes shadcn (`ui/*`) não são tocados — não têm cópia.

## Entregáveis

- ~30 arquivos `.tsx` refatorados com `useTranslation`.
- 11 arquivos JSON de locale atualizados.
- Script `scripts/build-locales.py` ajustado para preservar chaves traduzidas.
- Screenshot do preview em PT confirmando tradução completa da Home.

## Custo / tempo

Trabalho extenso: ~40–60 edições de arquivo. Vou rodar tudo em sequência sem pedir confirmação intermediária. Idiomas asiáticos (ja, ko, th, zh, ms, id, ru, de) ficarão com tradução **parcial** nesta rodada (fallback inteligente para inglês nas chaves novas) — se quiser tradução nativa profissional em todos os 11, posso fazer uma segunda passada focada só em locales depois.

Confirma para eu executar?