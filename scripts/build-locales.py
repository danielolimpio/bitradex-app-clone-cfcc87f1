#!/usr/bin/env python3
"""Generate complete locale files for all supported languages.
- Base: en.json (canonical structure)
- Overlay: existing locale file if present (preserves user translations)
- Translations for high-visibility homepage keys (hero, whyChoose, ecosystem, aiBot, footer, cookies, appDownload, trustedBy, marketOverview, common, nav) provided inline below.
- All other keys fall back to English via deep-merge.
"""
import json, copy, os

ROOT = os.path.join(os.path.dirname(__file__), "..", "src", "i18n", "locales")

def load(name):
    p = os.path.join(ROOT, name)
    if os.path.exists(p):
        with open(p, "r", encoding="utf-8") as f:
            return json.load(f)
    return {}

def save(name, data):
    with open(os.path.join(ROOT, name), "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

def deep_merge(base, overlay):
    """Returns base updated with overlay (overlay wins). Recursive for dicts."""
    out = copy.deepcopy(base)
    for k, v in overlay.items():
        if k in out and isinstance(out[k], dict) and isinstance(v, dict):
            out[k] = deep_merge(out[k], v)
        else:
            out[k] = copy.deepcopy(v)
    return out

EN = load("en.json")

# ============ Translations for core homepage UI ============
# Only sections users see on landing page and global components are translated here.
# Anything missing falls back to English via deep_merge with EN base.

TRANSLATIONS = {
    "pt": {
        "common": {
            "signupMobile": "Cadastre-se no celular", "learnMore": "Saiba Mais", "tradeNow": "Negociar Agora",
            "getStarted": "Começar", "comingSoon": "Em Breve", "readMore": "Leia Mais", "applyNow": "Candidatar-se",
            "viewMore": "Ver Mais Mercados →", "send": "Enviar", "submit": "Enviar", "perpetual": "Perpétuo",
            "spot": "Spot", "buy": "Comprar", "sell": "Vender", "price": "Preço", "amount": "Quantidade",
            "total": "Total", "available": "Disponível", "deposit": "Depositar", "withdraw": "Sacar",
            "transfer": "Transferir", "high24h": "Máx 24H", "low24h": "Mín 24H", "volume24h": "Vol 24H", "change24h": "Var 24h"
        },
        "nav": {"home": "Início", "aboutUs": "Sobre", "market": "Mercado", "futures": "Futuros", "spot": "Spot",
                "institutional": "Institucional", "contactUs": "Contato", "login": "Entrar", "signup": "Cadastrar",
                "signupMobile": "Cadastre-se no celular", "faq": "FAQ"},
        "hero": {
            "headline1": "Campeões Endossam", "headline2": "A Inteligência Lidera",
            "ambassador": "O craque campeão da Copa do Mundo Olivier Giroud se torna oficialmente Embaixador Global da Bitradex",
            "registerNow": "Cadastrar Agora", "watchDemo": "Ver Demonstração",
            "stats": {"activeUsers": "Usuários Ativos", "volumeTraded": "Volume Negociado", "uptime": "Disponibilidade"}
        },
        "whyChoose": {
            "title": "Por que Escolher a Bitradex",
            "subtitle": "Descubra as vantagens que nos tornam a plataforma preferida de traders em todo o mundo",
            "items": {
                "ai": {"title": "IA Inteligente", "description": "Movida pelo Modelo de Trading ARK, nossa tecnologia de IA analisa mercados com modelos de trilhões de parâmetros para estratégias otimizadas."},
                "security": {"title": "Segurança Máxima", "description": "Registrada no Reino Unido com protocolos de segurança em camadas, segregação de ativos e auditorias contínuas para proteger seus investimentos."},
                "global": {"title": "Acesso Global", "description": "Acesse nossa plataforma de qualquer lugar do mundo com suporte multilíngue e atendimento ao cliente localizado."},
                "fast": {"title": "Ultra Rápida", "description": "Execute operações em milissegundos com nosso motor de matching de alta performance e infraestrutura de baixa latência."}
            }
        },
        "marketOverview": {
            "title": "Visão do Mercado",
            "subtitle": "Mantenha-se atualizado com preços de criptomoedas e tendências em tempo real",
            "headers": {"rank": "Rank", "name": "Nome", "lastPrice": "Último Preço", "change24h": "Variação 24h", "volume24h": "Volume 24h", "marketCap": "Capitalização"},
            "viewMore": "Ver Mais Mercados →", "volume": "Volume"
        },
        "aiBot": {
            "badge": "Movido pelo Modelo de Trading ARK",
            "title": "Bitradex AI Bot: O Futuro do Trading",
            "subtitle": "Diga adeus ao monitoramento constante do mercado. Deixe nossa IA avançada operar por você com estratégias de nível institucional.",
            "features": {
                "oneClick": {"title": "Assine com Um Clique", "description": "Comece a operar com IA em segundos. Sem configuração complexa ou experiência prévia."},
                "strategy": {"title": "Estratégia por IA", "description": "Aproveita modelos financeiros de trilhões de parâmetros para identificar as melhores oportunidades."},
                "transparent": {"title": "Trading Totalmente Transparente", "description": "Acompanhe em tempo real todas as operações e métricas de desempenho em dashboards simples."},
                "risk": {"title": "Controle de Risco em Tempo Real", "description": "Algoritmos avançados de gerenciamento de risco protegem seu capital em mercados voláteis."}
            },
            "performance": {"title": "Exemplo de Performance", "winRate": "Taxa de Acerto*", "annualReturn": "Retorno Anual*", "availability": "Disponibilidade", "disclaimer": "*Performance apenas ilustrativa. Resultados passados não garantem retornos futuros."},
            "cta": "Testar AI Bot Agora"
        },
        "ecosystem": {
            "title": "Ecossistema Completo de Trading",
            "subtitle": "Explore nosso conjunto completo de produtos e serviços projetados para todos os tipos de traders",
            "items": {
                "spot": {"title": "Trading Spot", "description": "Compre e venda criptomoedas diretamente com taxas competitivas.", "cta": "Negociar"},
                "futures": {"title": "Trading de Futuros", "description": "Opere com alavancagem e posicione-se comprado ou vendido no mercado.", "cta": "Negociar"},
                "aiBot": {"title": "AI Bot", "description": "Ative o AI Bot com um clique. Estratégias quantitativas inteligentes para trading automático.", "cta": "Saiba Mais"},
                "btxCard": {"title": "Cartão BTX", "description": "Emitido em parceria com a Visa, aceito globalmente, suporta Apple Pay, Google Pay e mais. Taxa de apenas 0,7%.", "cta": "Saiba Mais"}
            },
            "ctaTitle": "Pronto para Começar a Operar?",
            "ctaSubtitle": "Junte-se a mais de 500.000 traders que confiam na Bitradex. Comece em minutos com nossa plataforma intuitiva.",
            "createAccount": "Criar Conta", "exploreFeatures": "Explorar Recursos"
        },
        "trustedBy": {
            "title": "Confiada pelos Líderes do Setor",
            "subtitle": "Apoiada por investidores de topo e em conformidade com padrões regulatórios globais",
            "stats": {"activeTraders": "Traders Ativos", "dailyVolume": "Volume Diário", "tradingPairs": "Pares de Trading", "uptime": "Disponibilidade"}
        },
        "appDownload": {
            "badge": "Negocie em Qualquer Lugar com o App Bitradex",
            "title": "Escaneie para Baixar",
            "description": "Experimente todo o poder da Bitradex no seu bolso. Nosso app oferece acesso completo a todos os recursos, incluindo AI Bot e mercados em tempo real.",
            "platforms": "iOS & Android", "platformsDesc": "Use a câmera do celular para escanear o QR code e baixar.",
            "appStore": "App Store", "appStoreSmall": "Baixe na", "googlePlay": "Google Play", "googlePlaySmall": "Disponível na",
            "rating": "Nota 4.8/5", "secure": "100% Seguro"
        }
    },
    "es": {
        "common": {"signupMobile": "Regístrate en el móvil", "learnMore": "Saber Más", "tradeNow": "Operar Ahora", "getStarted": "Empezar", "viewMore": "Ver Más Mercados →"},
        "nav": {"home": "Inicio", "aboutUs": "Acerca", "market": "Mercado", "futures": "Futuros", "spot": "Spot", "institutional": "Institucional", "contactUs": "Contacto", "login": "Iniciar Sesión", "signup": "Registrarse", "signupMobile": "Regístrate en el móvil", "faq": "FAQ"},
        "hero": {"headline1": "Los Campeones Avalan", "headline2": "La Inteligencia Lidera",
                 "ambassador": "El campeón mundial Olivier Giroud se une oficialmente a Bitradex como Embajador Global de Marca",
                 "registerNow": "Registrarse Ahora", "watchDemo": "Ver Demo",
                 "stats": {"activeUsers": "Usuarios Activos", "volumeTraded": "Volumen Negociado", "uptime": "Disponibilidad"}},
        "whyChoose": {"title": "Por qué Elegir Bitradex", "subtitle": "Descubre las ventajas que nos hacen la plataforma preferida de traders en todo el mundo",
                      "items": {
                          "ai": {"title": "IA Inteligente", "description": "Impulsada por el modelo ARK Trading, nuestra IA analiza mercados con modelos de billones de parámetros para estrategias óptimas."},
                          "security": {"title": "Máxima Seguridad", "description": "Registrada en Reino Unido con protocolos de seguridad multicapa, segregación de activos y auditorías continuas."},
                          "global": {"title": "Acceso Global", "description": "Accede desde cualquier lugar del mundo con soporte multilingüe y atención al cliente localizada."},
                          "fast": {"title": "Ultra Rápida", "description": "Ejecuta operaciones en milisegundos con nuestro motor de alto rendimiento y baja latencia."}
                      }},
        "aiBot": {"badge": "Impulsado por el Modelo ARK", "title": "Bitradex AI Bot: El Futuro del Trading",
                  "subtitle": "Olvídate de monitorear el mercado constantemente. Deja que nuestra IA opere por ti con estrategias institucionales.",
                  "cta": "Probar AI Bot"},
        "ecosystem": {"title": "Ecosistema Completo de Trading", "subtitle": "Explora nuestro conjunto completo de productos y servicios para todo tipo de traders",
                      "ctaTitle": "¿Listo para Empezar?", "createAccount": "Crear Cuenta", "exploreFeatures": "Explorar Funciones"},
        "trustedBy": {"title": "La Confían los Líderes del Sector", "subtitle": "Respaldada por los principales inversores y cumpliendo estándares regulatorios globales"},
        "appDownload": {"title": "Escanea para Descargar", "description": "Experimenta todo el poder de Bitradex en tu bolsillo.", "rating": "Calificación 4.8/5", "secure": "100% Seguro"}
    },
    "de": {
        "common": {"signupMobile": "Auf dem Handy registrieren", "learnMore": "Mehr Erfahren", "tradeNow": "Jetzt Handeln", "getStarted": "Loslegen"},
        "nav": {"home": "Start", "aboutUs": "Über Uns", "market": "Markt", "futures": "Futures", "spot": "Spot", "institutional": "Institutionell", "contactUs": "Kontakt", "login": "Anmelden", "signup": "Registrieren", "signupMobile": "Auf dem Handy registrieren", "faq": "FAQ"},
        "hero": {"headline1": "Champions Empfehlen", "headline2": "Intelligenz Führt",
                 "ambassador": "Weltmeister Olivier Giroud wird offiziell globaler Markenbotschafter von Bitradex",
                 "registerNow": "Jetzt Registrieren", "watchDemo": "Demo Ansehen",
                 "stats": {"activeUsers": "Aktive Nutzer", "volumeTraded": "Handelsvolumen", "uptime": "Verfügbarkeit"}},
        "whyChoose": {"title": "Warum Bitradex Wählen", "subtitle": "Entdecken Sie die Vorteile, die uns zur bevorzugten Plattform für Trader weltweit machen",
                      "items": {
                          "ai": {"title": "KI-Intelligenz", "description": "Angetrieben vom ARK Trading Model analysiert unsere KI Märkte mit Billionen-Parameter-Modellen."},
                          "security": {"title": "Maximale Sicherheit", "description": "In UK registriert mit mehrschichtigen Sicherheitsprotokollen und kontinuierlichen Audits."},
                          "global": {"title": "Globaler Zugang", "description": "Zugriff von überall mit mehrsprachiger Unterstützung und lokalisiertem Support."},
                          "fast": {"title": "Blitzschnell", "description": "Trades in Millisekunden mit Hochleistungs-Matching-Engine und niedriger Latenz."}
                      }},
        "aiBot": {"title": "Bitradex AI Bot: Die Zukunft des Tradings", "cta": "AI Bot Testen"},
        "ecosystem": {"title": "Komplettes Trading-Ökosystem", "createAccount": "Konto Erstellen"},
        "trustedBy": {"title": "Vertrauen Branchenführer"},
        "appDownload": {"title": "Zum Download Scannen", "rating": "4.8/5 Bewertung", "secure": "100% Sicher"}
    },
    "id": {
        "common": {"signupMobile": "Daftar via ponsel", "learnMore": "Pelajari", "tradeNow": "Trading Sekarang", "getStarted": "Mulai"},
        "nav": {"home": "Beranda", "aboutUs": "Tentang", "market": "Pasar", "futures": "Futures", "spot": "Spot", "institutional": "Institusional", "contactUs": "Kontak", "login": "Masuk", "signup": "Daftar", "signupMobile": "Daftar via ponsel", "faq": "FAQ"},
        "hero": {"headline1": "Juara Mendukung", "headline2": "Kecerdasan Memimpin",
                 "ambassador": "Bintang juara Piala Dunia Olivier Giroud resmi bergabung dengan Bitradex sebagai Duta Merek Global",
                 "registerNow": "Daftar Sekarang", "watchDemo": "Tonton Demo",
                 "stats": {"activeUsers": "Pengguna Aktif", "volumeTraded": "Volume Diperdagangkan", "uptime": "Uptime"}},
        "whyChoose": {"title": "Mengapa Memilih Bitradex", "subtitle": "Temukan keunggulan yang membuat kami platform pilihan trader di seluruh dunia",
                      "items": {
                          "ai": {"title": "AI Cerdas", "description": "Didukung oleh ARK Trading Model, teknologi AI kami menganalisis pasar dengan model triliunan parameter."},
                          "security": {"title": "Keamanan Maksimal", "description": "Terdaftar di Inggris dengan protokol keamanan berlapis dan audit keamanan berkelanjutan."},
                          "global": {"title": "Akses Global", "description": "Akses platform kami dari mana saja dengan dukungan multibahasa dan layanan pelanggan lokal."},
                          "fast": {"title": "Sangat Cepat", "description": "Eksekusi trading dalam milidetik dengan mesin matching berperforma tinggi."}
                      }},
        "aiBot": {"title": "Bitradex AI Bot: Masa Depan Trading", "cta": "Coba AI Bot"},
        "ecosystem": {"title": "Ekosistem Trading Lengkap", "createAccount": "Buat Akun"},
        "trustedBy": {"title": "Dipercaya Pemimpin Industri"},
        "appDownload": {"title": "Scan untuk Download", "rating": "Rating 4.8/5", "secure": "100% Aman"}
    },
    "th": {
        "common": {"signupMobile": "สมัครบนมือถือ", "learnMore": "เรียนรู้เพิ่ม", "tradeNow": "เทรดเลย", "getStarted": "เริ่มต้น"},
        "nav": {"home": "หน้าแรก", "aboutUs": "เกี่ยวกับเรา", "market": "ตลาด", "futures": "ฟิวเจอร์ส", "spot": "สปอต", "institutional": "สถาบัน", "contactUs": "ติดต่อ", "login": "เข้าสู่ระบบ", "signup": "สมัคร", "signupMobile": "สมัครบนมือถือ", "faq": "FAQ"},
        "hero": {"headline1": "แชมป์เปี้ยนรับรอง", "headline2": "ปัญญาประดิษฐ์นำทาง",
                 "ambassador": "แชมป์ฟุตบอลโลก Olivier Giroud เข้าร่วม Bitradex อย่างเป็นทางการในฐานะแบรนด์แอมบาสเดอร์ระดับโลก",
                 "registerNow": "สมัครเลย", "watchDemo": "ดูเดโม",
                 "stats": {"activeUsers": "ผู้ใช้งาน", "volumeTraded": "ปริมาณการเทรด", "uptime": "Uptime"}},
        "whyChoose": {"title": "ทำไมต้องเลือก Bitradex", "subtitle": "ค้นพบข้อได้เปรียบที่ทำให้เราเป็นแพลตฟอร์มที่เทรดเดอร์ทั่วโลกเลือกใช้",
                      "items": {
                          "ai": {"title": "AI อัจฉริยะ", "description": "ขับเคลื่อนโดย ARK Trading Model วิเคราะห์ตลาดด้วยโมเดลพารามิเตอร์ล้านล้าน"},
                          "security": {"title": "ความปลอดภัยสูงสุด", "description": "จดทะเบียนในสหราชอาณาจักร พร้อมโปรโตคอลความปลอดภัยหลายชั้นและการตรวจสอบต่อเนื่อง"},
                          "global": {"title": "เข้าถึงได้ทั่วโลก", "description": "เข้าถึงแพลตฟอร์มได้ทุกที่ พร้อมรองรับหลายภาษาและบริการลูกค้าท้องถิ่น"},
                          "fast": {"title": "รวดเร็วทันใจ", "description": "เทรดในระดับมิลลิวินาทีด้วยเอนจิ้นจับคู่ออเดอร์ประสิทธิภาพสูง"}
                      }},
        "aiBot": {"title": "Bitradex AI Bot: อนาคตของการเทรด", "cta": "ลอง AI Bot"},
        "ecosystem": {"title": "ระบบนิเวศการเทรดที่ครบครัน", "createAccount": "สร้างบัญชี"},
        "trustedBy": {"title": "ได้รับความไว้วางใจจากผู้นำในวงการ"},
        "appDownload": {"title": "สแกนเพื่อดาวน์โหลด", "rating": "เรตติ้ง 4.8/5", "secure": "ปลอดภัย 100%"}
    },
    "ko": {
        "common": {"signupMobile": "모바일에서 가입", "learnMore": "자세히 보기", "tradeNow": "지금 거래", "getStarted": "시작하기"},
        "nav": {"home": "홈", "aboutUs": "소개", "market": "마켓", "futures": "선물", "spot": "현물", "institutional": "기관", "contactUs": "문의", "login": "로그인", "signup": "가입", "signupMobile": "모바일에서 가입", "faq": "FAQ"},
        "hero": {"headline1": "챔피언이 인정하는", "headline2": "AI가 선도하는 거래",
                 "ambassador": "월드컵 챔피언 올리비에 지루가 Bitradex 글로벌 브랜드 앰배서더로 공식 합류",
                 "registerNow": "지금 가입", "watchDemo": "데모 보기",
                 "stats": {"activeUsers": "활성 사용자", "volumeTraded": "거래량", "uptime": "가동률"}},
        "whyChoose": {"title": "Bitradex를 선택하는 이유", "subtitle": "전 세계 트레이더들이 선호하는 플랫폼이 된 이유를 확인하세요",
                      "items": {
                          "ai": {"title": "지능형 AI", "description": "ARK 트레이딩 모델 기반, 조 단위 파라미터로 시장을 분석합니다"},
                          "security": {"title": "최고 수준의 보안", "description": "영국 등록, 다층 보안 프로토콜 및 지속적인 보안 감사"},
                          "global": {"title": "글로벌 액세스", "description": "전 세계 어디서나 다국어 지원과 현지화된 고객 서비스로 이용 가능"},
                          "fast": {"title": "초고속 처리", "description": "고성능 매칭 엔진으로 밀리초 단위 거래 체결"}
                      }},
        "aiBot": {"title": "Bitradex AI Bot: 거래의 미래", "cta": "AI Bot 시작"},
        "ecosystem": {"title": "완전한 트레이딩 생태계", "createAccount": "계정 생성"},
        "trustedBy": {"title": "업계 선두 기업의 신뢰"},
        "appDownload": {"title": "스캔하여 다운로드", "rating": "평점 4.8/5", "secure": "100% 안전"}
    },
    "ru": {
        "common": {"signupMobile": "Регистрация в моб.", "learnMore": "Подробнее", "tradeNow": "Торговать", "getStarted": "Начать"},
        "nav": {"home": "Главная", "aboutUs": "О Нас", "market": "Рынок", "futures": "Фьючерсы", "spot": "Спот", "institutional": "Институциональный", "contactUs": "Контакты", "login": "Войти", "signup": "Регистрация", "signupMobile": "Регистрация в моб.", "faq": "FAQ"},
        "hero": {"headline1": "Чемпионы Рекомендуют", "headline2": "Интеллект Ведёт",
                 "ambassador": "Чемпион мира Оливье Жиру официально становится глобальным посланником бренда Bitradex",
                 "registerNow": "Регистрация", "watchDemo": "Смотреть Демо",
                 "stats": {"activeUsers": "Активные Пользователи", "volumeTraded": "Объём Торгов", "uptime": "Доступность"}},
        "whyChoose": {"title": "Почему Bitradex", "subtitle": "Узнайте преимущества, которые делают нас предпочитаемой платформой для трейдеров по всему миру",
                      "items": {
                          "ai": {"title": "Умный ИИ", "description": "Основан на модели ARK Trading с триллионами параметров для оптимальных стратегий"},
                          "security": {"title": "Максимальная Безопасность", "description": "Регистрация в Великобритании, многоуровневая защита и постоянный аудит"},
                          "global": {"title": "Глобальный Доступ", "description": "Доступ из любой точки мира с многоязычной поддержкой"},
                          "fast": {"title": "Молниеносная Скорость", "description": "Исполнение сделок за миллисекунды на высокопроизводительном движке"}
                      }},
        "aiBot": {"title": "Bitradex AI Bot: Будущее Трейдинга", "cta": "Попробовать AI Bot"},
        "ecosystem": {"title": "Полная Торговая Экосистема", "createAccount": "Создать Аккаунт"},
        "trustedBy": {"title": "Доверие Лидеров Индустрии"},
        "appDownload": {"title": "Сканируйте для Загрузки", "rating": "Рейтинг 4.8/5", "secure": "100% Безопасно"}
    },
    "ja": {
        "common": {"signupMobile": "モバイルで登録", "learnMore": "詳細を見る", "tradeNow": "今すぐ取引", "getStarted": "始める"},
        "nav": {"home": "ホーム", "aboutUs": "会社概要", "market": "マーケット", "futures": "先物", "spot": "現物", "institutional": "機関投資家", "contactUs": "お問い合わせ", "login": "ログイン", "signup": "登録", "signupMobile": "モバイルで登録", "faq": "FAQ"},
        "hero": {"headline1": "チャンピオンが認める", "headline2": "AIが先導する取引",
                 "ambassador": "ワールドカップ王者オリヴィエ・ジルーがBitradexのグローバル・ブランドアンバサダーに正式就任",
                 "registerNow": "今すぐ登録", "watchDemo": "デモを見る",
                 "stats": {"activeUsers": "アクティブユーザー", "volumeTraded": "取引高", "uptime": "稼働率"}},
        "whyChoose": {"title": "Bitradexが選ばれる理由", "subtitle": "世界中のトレーダーに選ばれる理由をご覧ください",
                      "items": {
                          "ai": {"title": "AIインテリジェンス", "description": "ARKトレーディングモデルを搭載し、兆パラメータで市場を分析し最適な戦略を提供"},
                          "security": {"title": "最高水準のセキュリティ", "description": "英国登録、多層セキュリティプロトコルと継続的な監査で資産を保護"},
                          "global": {"title": "グローバルアクセス", "description": "多言語対応とローカライズされたサポートで世界中からアクセス可能"},
                          "fast": {"title": "超高速処理", "description": "高性能マッチングエンジンによりミリ秒単位で取引を執行"}
                      }},
        "aiBot": {"title": "Bitradex AI Bot: 取引の未来", "cta": "AI Botを試す"},
        "ecosystem": {"title": "完全なトレーディングエコシステム", "createAccount": "アカウント作成"},
        "trustedBy": {"title": "業界リーダーから信頼"},
        "appDownload": {"title": "スキャンしてダウンロード", "rating": "4.8/5 評価", "secure": "100% 安全"}
    },
    "ms": {
        "common": {"signupMobile": "Daftar di telefon", "learnMore": "Ketahui Lebih", "tradeNow": "Dagang Sekarang", "getStarted": "Mula"},
        "nav": {"home": "Utama", "aboutUs": "Tentang", "market": "Pasaran", "futures": "Futures", "spot": "Spot", "institutional": "Institusi", "contactUs": "Hubungi", "login": "Log Masuk", "signup": "Daftar", "signupMobile": "Daftar di telefon", "faq": "FAQ"},
        "hero": {"headline1": "Juara Mengesahkan", "headline2": "Kecerdasan Memimpin",
                 "ambassador": "Bintang juara Piala Dunia Olivier Giroud secara rasmi menyertai Bitradex sebagai Duta Jenama Global",
                 "registerNow": "Daftar Sekarang", "watchDemo": "Tonton Demo",
                 "stats": {"activeUsers": "Pengguna Aktif", "volumeTraded": "Volum Dagangan", "uptime": "Uptime"}},
        "whyChoose": {"title": "Mengapa Pilih Bitradex", "subtitle": "Temui kelebihan yang menjadikan kami platform pilihan pedagang di seluruh dunia",
                      "items": {
                          "ai": {"title": "AI Pintar", "description": "Dikuasakan oleh Model Dagangan ARK, menganalisis pasaran dengan model trilion parameter"},
                          "security": {"title": "Keselamatan Maksimum", "description": "Berdaftar di UK dengan protokol keselamatan berlapis dan audit berterusan"},
                          "global": {"title": "Akses Global", "description": "Akses platform dari mana sahaja dengan sokongan pelbagai bahasa"},
                          "fast": {"title": "Pantas Kilat", "description": "Laksanakan dagangan dalam milisaat dengan enjin padanan berprestasi tinggi"}
                      }},
        "aiBot": {"title": "Bitradex AI Bot: Masa Depan Dagangan", "cta": "Cuba AI Bot"},
        "ecosystem": {"title": "Ekosistem Dagangan Lengkap", "createAccount": "Cipta Akaun"},
        "trustedBy": {"title": "Dipercayai Peneraju Industri"},
        "appDownload": {"title": "Imbas untuk Muat Turun", "rating": "Penilaian 4.8/5", "secure": "100% Selamat"}
    },
    "zh": {
        "common": {"signupMobile": "在手机上注册", "learnMore": "了解更多", "tradeNow": "立即交易", "getStarted": "开始"},
        "nav": {"home": "首页", "aboutUs": "关于我们", "market": "市场", "futures": "合约", "spot": "现货", "institutional": "机构", "contactUs": "联系我们", "login": "登录", "signup": "注册", "signupMobile": "在手机上注册", "faq": "FAQ"},
        "hero": {"headline1": "冠军推荐", "headline2": "智能引领",
                 "ambassador": "世界杯冠军吉鲁正式加入Bitradex出任全球品牌大使",
                 "registerNow": "立即注册", "watchDemo": "观看演示",
                 "stats": {"activeUsers": "活跃用户", "volumeTraded": "交易量", "uptime": "在线率"}},
        "whyChoose": {"title": "为什么选择 Bitradex", "subtitle": "发现使我们成为全球交易者首选平台的优势",
                      "items": {
                          "ai": {"title": "智能AI", "description": "由ARK交易模型驱动,使用万亿参数模型分析市场,提供最佳交易策略"},
                          "security": {"title": "最高安全性", "description": "英国注册,多层安全协议、资产隔离和持续审计保护您的投资"},
                          "global": {"title": "全球访问", "description": "支持多语言和本地化客户服务,全球任何地方均可访问"},
                          "fast": {"title": "闪电般快速", "description": "高性能撮合引擎,毫秒级交易执行"}
                      }},
        "aiBot": {"title": "Bitradex AI Bot:交易的未来", "cta": "立即试用AI Bot"},
        "ecosystem": {"title": "完整的交易生态系统", "createAccount": "创建账户"},
        "trustedBy": {"title": "受到行业领袖信赖"},
        "appDownload": {"title": "扫码下载", "rating": "4.8/5 评分", "secure": "100% 安全"}
    },
}

for lang, overrides in TRANSLATIONS.items():
    existing = load(f"{lang}.json")  # preserves user-translated FAQ etc.
    # Merge: EN base ← existing user translations ← new core translations
    merged = deep_merge(EN, existing)
    merged = deep_merge(merged, overrides)
    save(f"{lang}.json", merged)
    print(f"✓ {lang}.json written ({len(json.dumps(merged))} chars)")
