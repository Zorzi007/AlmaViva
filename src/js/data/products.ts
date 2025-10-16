export type ProductGroup =
  | 'Bancos e Instituições Financeiras'
  | 'Comércio, Varejo e Marcas'
  | 'Telecomunicações e Tecnologia'
  | 'Saúde e Farmacêuticas'
  | 'Energia, Gás e Indústria'
  | 'Transportes, Mobilidade e Viagens'
  | 'Serviços Diversos / Outros Setores';

export interface Product {
  id: string;
  name: string;
  group: ProductGroup;
  segment: string;
  tagline: string;
  description: string;
  website: string;
  tags: string[];
  primaryColor: string;
  accentColor: string;
  headquarters: string;
  status: 'ativo' | 'expansao' | 'beta';
  lastUpdate: string;
  logo: string;
}

export const productGroups: ProductGroup[] = [
  'Bancos e Instituições Financeiras',
  'Comércio, Varejo e Marcas',
  'Telecomunicações e Tecnologia',
  'Saúde e Farmacêuticas',
  'Energia, Gás e Indústria',
  'Transportes, Mobilidade e Viagens',
  'Serviços Diversos / Outros Setores'
];

type BaseProduct = Omit<Product, 'logo'>;

const buildProduct = (product: BaseProduct): Product => {
  let logo = '';
  try {
    const hostname = new URL(product.website).hostname.replace(/^www\./, '');
    logo = `https://logo.clearbit.com/${hostname}`;
  } catch (error) {
    console.warn(`Não foi possível gerar logo para ${product.name}`, error);
  }
  return { ...product, logo };
};

const baseProducts: BaseProduct[] = [
  // Bancos e Instituições Financeiras
  {
    id: 'banco-pan-dc',
    name: 'Banco Pan',
    group: 'Bancos e Instituições Financeiras',
    segment: 'Banking Digital Core',
    tagline: 'Onboarding unificado e growth orientado por analytics.',
    description:
      'Ecossistema financeiro completo com trilhas de atendimento omnichannel, modelos de scoring proprietários e monitoramento em tempo real da jornada do cliente.',
    website: 'https://www.bancopan.com.br',
    tags: ['fintech', 'analytics', 'onboarding'],
    primaryColor: '#183B8A',
    accentColor: '#F2C94C',
    headquarters: 'São Paulo, Brasil',
    status: 'ativo',
    lastUpdate: '2025-08-19'
  },
  {
    id: 'bradesco-long',
    name: 'Bradesco Longo',
    group: 'Bancos e Instituições Financeiras',
    segment: 'Execução de Crédito',
    tagline: 'Estratégias full stack para crédito consignado de alta escala.',
    description:
      'Plataforma híbrida que associa operações humanas de alta especialização a modelos de automação cognitiva, garantindo velocidade e precisão na concessão de crédito.',
    website: 'https://banco.bradesco',
    tags: ['crédito', 'automação', 'compliance'],
    primaryColor: '#C00030',
    accentColor: '#FF7A5A',
    headquarters: 'Osasco, Brasil',
    status: 'expansao',
    lastUpdate: '2025-07-03'
  },
  {
    id: 'bradesco-cobranca',
    name: 'Bradesco Cobrança',
    group: 'Bancos e Instituições Financeiras',
    segment: 'Credit Lifecycle',
    tagline: 'Cobrança omnichannel com ciência comportamental aplicada.',
    description:
      'Mesh de canais com roteamento dinâmico, análise de propensão e squads especializados por fase da carteira.',
    website: 'https://banco.bradesco',
    tags: ['cobrança', 'dados-comportamentais', 'omnicanal'],
    primaryColor: '#B0002D',
    accentColor: '#FF6B5D',
    headquarters: 'Osasco, Brasil',
    status: 'ativo',
    lastUpdate: '2025-08-14'
  },
  {
    id: 'bradesco-seguros',
    name: 'Bradesco Seguros',
    group: 'Bancos e Instituições Financeiras',
    segment: 'Seguros & Previdência',
    tagline: 'Fronteira digital com monitoramento proativo da carteira segurada.',
    description:
      'Orquestração entre canais humano-digitais para sinistros, previdência e saúde, com IA para priorização de riscos e war rooms regulatórios integrados.',
    website: 'https://www.bradescoseguros.com.br',
    tags: ['seguros', 'sinistros', 'governança'],
    primaryColor: '#B0002D',
    accentColor: '#FF8C69',
    headquarters: 'São Paulo, Brasil',
    status: 'ativo',
    lastUpdate: '2025-09-28'
  },
  {
    id: 'bv-financeira',
    name: 'BV Financeira',
    group: 'Bancos e Instituições Financeiras',
    segment: 'Financiamento Automotivo',
    tagline: 'Originação acelerada com analytics de risco em tempo real.',
    description:
      'Pipeline unificado que conecta prospecção digital, modelos de score proprietários e atendimento consultivo para concessionárias.',
    website: 'https://www.bv.com.br',
    tags: ['auto', 'originação', 'analytics'],
    primaryColor: '#F23111',
    accentColor: '#FF9A62',
    headquarters: 'São Paulo, Brasil',
    status: 'expansao',
    lastUpdate: '2025-09-22'
  },
  {
    id: 'c6bank-dc',
    name: 'C6 Bank DC',
    group: 'Bancos e Instituições Financeiras',
    segment: 'Digital Collections',
    tagline: 'Cobrança 100% digital com IA conversacional multicanal.',
    description:
      'Plataforma proprietária que integra bots híbridos, análise de sentimento e recuperação assistida por especialistas high-touch.',
    website: 'https://www.c6bank.com.br',
    tags: ['ia', 'cobrança', 'automação'],
    primaryColor: '#101010',
    accentColor: '#FFD54F',
    headquarters: 'São Paulo, Brasil',
    status: 'ativo',
    lastUpdate: '2025-09-01'
  },
  {
    id: 'c6bank-cx',
    name: 'C6 Bank',
    group: 'Bancos e Instituições Financeiras',
    segment: 'Experiência Digital',
    tagline: 'CX guiada por squads full digital e insight em streaming.',
    description:
      'Operação data-driven com uso de IA conversacional, jornadas low-effort e métricas de saúde do cliente em dashboards prescritivos.',
    website: 'https://www.c6bank.com.br',
    tags: ['ia', 'streaming-data', 'ux'],
    primaryColor: '#000000',
    accentColor: '#FFCC00',
    headquarters: 'São Paulo, Brasil',
    status: 'ativo',
    lastUpdate: '2025-07-26'
  },
  {
    id: 'nubank-dc',
    name: 'Nubank',
    group: 'Bancos e Instituições Financeiras',
    segment: 'Digital Banking',
    tagline: 'Conversão e suporte escaláveis com cultura customer-first.',
    description:
      'Squads dedicados a retenção e upsell utilizando jornadas hiperpersonalizadas e insights de speech analytics.',
    website: 'https://nubank.com.br',
    tags: ['fintech', 'retenção', 'speech-analytics'],
    primaryColor: '#8A05BE',
    accentColor: '#FF4ECD',
    headquarters: 'São Paulo, Brasil',
    status: 'ativo',
    lastUpdate: '2025-09-04'
  },
  {
    id: 'itau-curto',
    name: 'Itaú Curto',
    group: 'Bancos e Instituições Financeiras',
    segment: 'Ciclo de Crédito',
    tagline: 'Recuperação ágil integrada a modelos anti-fraude.',
    description:
      'Arquitetura que combina RPA, análise comportamental e atendimento humano consultivo para maximizar retorno e reduzir perdas.',
    website: 'https://www.itau.com.br',
    tags: ['banco', 'anti-fraude', 'rpa'],
    primaryColor: '#FF6200',
    accentColor: '#FDBA74',
    headquarters: 'São Paulo, Brasil',
    status: 'beta',
    lastUpdate: '2025-10-01'
  },
  {
    id: 'itau-longo',
    name: 'Itaú Longo',
    group: 'Bancos e Instituições Financeiras',
    segment: 'Gestão de Carteiras Long Tail',
    tagline: 'Estrutura híbrida para carteiras maduras com foco em recolocação.',
    description:
      'Combina squads jurídicos, RPA e analytics preditivo para carteiras de longo prazo, garantindo conformidade e redução de perdas.',
    website: 'https://www.itau.com.br',
    tags: ['crédito', 'long-tail', 'automação'],
    primaryColor: '#FF6200',
    accentColor: '#FFB873',
    headquarters: 'São Paulo, Brasil',
    status: 'ativo',
    lastUpdate: '2025-09-30'
  },
  {
    id: 'santander-dc',
    name: 'Santander',
    group: 'Bancos e Instituições Financeiras',
    segment: 'Financial Experience',
    tagline: 'Jornada multicanal com governança regulatória nativa.',
    description:
      'Hub que conecta canais digitais e humanos com métricas de experiência, compliance automatizado e cockpit operacional unificado.',
    website: 'https://www.santander.com.br',
    tags: ['governança', 'omnicanal', 'compliance'],
    primaryColor: '#E4002B',
    accentColor: '#FF7A00',
    headquarters: 'São Paulo, Brasil',
    status: 'ativo',
    lastUpdate: '2025-08-28'
  },
  {
    id: 'agibank-cx',
    name: 'Agibank',
    group: 'Bancos e Instituições Financeiras',
    segment: 'Finanças Omnicanal',
    tagline: 'CX humanizada com trilhas digitais e pontos físicos integrados.',
    description:
      'Squads híbridos cuidando do relacionamento com uso de dados geográficos, personalização por perfil e indicadores de saúde financeira.',
    website: 'https://www.agibank.com.br',
    tags: ['fintech', 'omnicanal', 'personalização'],
    primaryColor: '#00A859',
    accentColor: '#7CF3C7',
    headquarters: 'Porto Alegre, Brasil',
    status: 'ativo',
    lastUpdate: '2025-09-10'
  },
  {
    id: 'banco-daycoval-cx',
    name: 'Banco Daycoval',
    group: 'Bancos e Instituições Financeiras',
    segment: 'Corporate Banking',
    tagline: 'Relacionamento consultivo com insights preditivos por carteira.',
    description:
      'Ciclo completo de atendimento a empresas com cockpit de indicadores, playbooks digitais e células especialistas por segmento.',
    website: 'https://www.daycoval.com.br',
    tags: ['corporate', 'consultivo', 'insights'],
    primaryColor: '#004AAD',
    accentColor: '#63A4FF',
    headquarters: 'São Paulo, Brasil',
    status: 'ativo',
    lastUpdate: '2025-08-18'
  },
  {
    id: 'inter-cx',
    name: 'Banco Inter',
    group: 'Bancos e Instituições Financeiras',
    segment: 'Super App Financeiro',
    tagline: 'CX com foco em lifetime value e monetização cruzada.',
    description:
      'Squads omnichannel alinhados a OKRs de valor, utilizando analytics de sentimento em tempo real e orquestração de campanhas.',
    website: 'https://www.inter.co',
    tags: ['fintech', 'super-app', 'sentimento'],
    primaryColor: '#FF6F00',
    accentColor: '#FFB347',
    headquarters: 'Belo Horizonte, Brasil',
    status: 'expansao',
    lastUpdate: '2025-08-11'
  },
  {
    id: 'bmg-cx',
    name: 'Bmg',
    group: 'Bancos e Instituições Financeiras',
    segment: 'Empréstimo Consignado',
    tagline: 'Suporte premium com automação de contratos e retenção.',
    description:
      'Fluxos digitais de contratação, backoffice com RPA e squads de relacionamento com foco em NPS e share of wallet.',
    website: 'https://www.bancobmg.com.br',
    tags: ['consignado', 'rpa', 'nps'],
    primaryColor: '#FF5B2E',
    accentColor: '#FFB996',
    headquarters: 'São Paulo, Brasil',
    status: 'expansao',
    lastUpdate: '2025-07-30'
  },
  {
    id: 'caixa-cx',
    name: 'Caixa',
    group: 'Bancos e Instituições Financeiras',
    segment: 'Banca Pública',
    tagline: 'Operações de serviços públicos com foco em inclusão digital.',
    description:
      'Estruturas de atendimento convergentes, filas inteligentes e insights de políticas públicas para programas sociais.',
    website: 'https://www.caixa.gov.br',
    tags: ['serviço-público', 'inclusão', 'analytics'],
    primaryColor: '#005CA9',
    accentColor: '#FFA300',
    headquarters: 'Brasília, Brasil',
    status: 'ativo',
    lastUpdate: '2025-08-09'
  },
  {
    id: 'digio-cx',
    name: 'Digio',
    group: 'Bancos e Instituições Financeiras',
    segment: 'Plataforma Financeira',
    tagline: 'Atendimento digital-first com squads dedicados por produto.',
    description:
      'Hub com voice bots, monitoramento de tickets e automação de backoffice para cartões, empréstimos e marketplace.',
    website: 'https://www.digio.com.br',
    tags: ['fintech', 'automação', 'marketplace'],
    primaryColor: '#0047AB',
    accentColor: '#2ED2FF',
    headquarters: 'Barueri, Brasil',
    status: 'expansao',
    lastUpdate: '2025-09-20'
  },
  {
    id: 'safra-cx',
    name: 'Safra',
    group: 'Bancos e Instituições Financeiras',
    segment: 'Wealth Banking',
    tagline: 'Relacionamento de alto padrão com consultores suportados por IA.',
    description:
      'Plataforma de insights de investimento, roteirização de atendimento premium e governança rigorosa de dados.',
    website: 'https://www.safra.com.br',
    tags: ['wealth', 'insights', 'ia'],
    primaryColor: '#00205B',
    accentColor: '#A58D3F',
    headquarters: 'São Paulo, Brasil',
    status: 'ativo',
    lastUpdate: '2025-09-11'
  },
  {
    id: 'xp-investimentos',
    name: 'XP Investimentos',
    group: 'Bancos e Instituições Financeiras',
    segment: 'Wealth Experience',
    tagline: 'Hypercare premiado com copiloto IA para assessores.',
    description:
      'UX de investimentos com roteirização inteligente, GED proprietária e insights de carteira preditivos.',
    website: 'https://www.xpi.com.br',
    tags: ['investimentos', 'assistente-ia', 'ux'],
    primaryColor: '#1C1C1C',
    accentColor: '#FFD700',
    headquarters: 'São Paulo, Brasil',
    status: 'expansao',
    lastUpdate: '2025-09-17'
  },

  // Comércio, Varejo e Marcas
  {
    id: 'casa-pio',
    name: 'Casa Pio',
    group: 'Comércio, Varejo e Marcas',
    segment: 'Varejo Moda',
    tagline: 'Customer care preditivo e centrado em lifetime value.',
    description:
      'Sistema integrado que controla captação, cobrança, retargeting e fidelização com KPIs unificados e engines de recomendação.',
    website: 'https://www.casapio.com.br',
    tags: ['varejo', 'fidelização', 'insights'],
    primaryColor: '#7C3AED',
    accentColor: '#22D3EE',
    headquarters: 'Recife, Brasil',
    status: 'ativo',
    lastUpdate: '2025-06-21'
  },
  {
    id: 'shopee-cx',
    name: 'Shopee',
    group: 'Comércio, Varejo e Marcas',
    segment: 'Marketplace',
    tagline: 'Suporte seller-buyer com automação e community care.',
    description:
      'Centros de suporte multilingue, prevenção de fraude em tempo real e orquestração de comunidade com creators e vendedores.',
    website: 'https://www.shopee.com.br',
    tags: ['ecommerce', 'fraude', 'community'],
    primaryColor: '#FF5722',
    accentColor: '#FFC107',
    headquarters: 'São Paulo, Brasil',
    status: 'ativo',
    lastUpdate: '2025-09-03'
  },
  {
    id: 'brazino-777',
    name: 'Brazino 777',
    group: 'Comércio, Varejo e Marcas',
    segment: 'iGaming & Entretenimento',
    tagline: 'CX hiperresponsiva com moderação e suporte multilíngue.',
    description:
      'Operação que integra suporte instantâneo, prevenção de fraude e gestão de comunidades para elevar lifetime value em apostas esportivas.',
    website: 'https://www.brazino777.com',
    tags: ['igaming', 'suporte-24x7', 'fraude'],
    primaryColor: '#1A1A2E',
    accentColor: '#E43F5A',
    headquarters: 'Curitiba, Brasil',
    status: 'expansao',
    lastUpdate: '2025-09-19'
  },
  {
    id: 'cea-retail',
    name: 'C&A',
    group: 'Comércio, Varejo e Marcas',
    segment: 'Varejo de Moda',
    tagline: 'Orquestração omnichannel com styling assistido por dados.',
    description:
      'Integração de loja física e digital com recomendação personalizada, provadores inteligentes e pós-venda consultivo.',
    website: 'https://www.cea.com.br',
    tags: ['moda', 'omnicanal', 'recomendação'],
    primaryColor: '#0047BA',
    accentColor: '#00AEEF',
    headquarters: 'São Paulo, Brasil',
    status: 'ativo',
    lastUpdate: '2025-08-31'
  },

  // Telecomunicações e Tecnologia
  {
    id: 'claro-cobranca',
    name: 'Claro',
    group: 'Telecomunicações e Tecnologia',
    segment: 'Telco Collections',
    tagline: 'Gestão de inadimplência com journeys hipercontextuais.',
    description:
      'Uso de modelos preditivos, engine de canais preferenciais e squads dedicados para clientes premium e massivo.',
    website: 'https://www.claro.com.br',
    tags: ['telco', 'journey', 'inadimplência'],
    primaryColor: '#E60012',
    accentColor: '#FFB400',
    headquarters: 'São Paulo, Brasil',
    status: 'ativo',
    lastUpdate: '2025-08-06'
  },
  {
    id: 'net-cx',
    name: 'Net',
    group: 'Telecomunicações e Tecnologia',
    segment: 'Media & Broadband',
    tagline: 'CX com foco em estabilidade, suporte técnico e upsell.',
    description:
      'Centros de experiência com inteligência de rede, suporte proativo para falhas e campanhas de upgrade alinhadas a demanda.',
    website: 'https://www.net.com.br',
    tags: ['banda-larga', 'proatividade', 'upsell'],
    primaryColor: '#0097CE',
    accentColor: '#1DD7FF',
    headquarters: 'São Paulo, Brasil',
    status: 'expansao',
    lastUpdate: '2025-08-02'
  },
  {
    id: 'sky-labs',
    name: 'Sky Brasil',
    group: 'Telecomunicações e Tecnologia',
    segment: 'Media & Satélite',
    tagline: 'CX com foco em streaming híbrido e fidelização de base.',
    description:
      'Centralização de contatos, uso de analytics para upgrade de pacotes e suporte técnico guiado por realidade aumentada.',
    website: 'https://www.sky.com.br',
    tags: ['media', 'fidelização', 'ra'],
    primaryColor: '#D71920',
    accentColor: '#F9B233',
    headquarters: 'São Paulo, Brasil',
    status: 'expansao',
    lastUpdate: '2025-07-21'
  },
  {
    id: 'vivo-labs',
    name: 'Vivo',
    group: 'Telecomunicações e Tecnologia',
    segment: 'Telco Experience',
    tagline: 'Experiência telco com foco em churn zero.',
    description:
      'Modelo híbrido de atendimento com motor de recomendações next-best-action e monitoramento proativo de SLA.',
    website: 'https://www.vivo.com.br',
    tags: ['telecom', 'churn', 'next-best-action'],
    primaryColor: '#660099',
    accentColor: '#FF66FF',
    headquarters: 'São Paulo, Brasil',
    status: 'ativo',
    lastUpdate: '2025-09-27'
  },
  {
    id: 'tim-ativo',
    name: 'Tim Ativo',
    group: 'Telecomunicações e Tecnologia',
    segment: 'Telco Engagement',
    tagline: 'Prospecção e upgrade com engine de campanhas dinâmica.',
    description:
      'Estratégias outbound com priorização por valor, squads ágeis e dashboards de conversão ao vivo.',
    website: 'https://www.tim.com.br',
    tags: ['telco', 'campanhas', 'outbound'],
    primaryColor: '#0033A0',
    accentColor: '#00B5E2',
    headquarters: 'Rio de Janeiro, Brasil',
    status: 'ativo',
    lastUpdate: '2025-08-30'
  },
  {
    id: 'tim-receptivo',
    name: 'Tim Receptivo',
    group: 'Telecomunicações e Tecnologia',
    segment: 'Customer Care',
    tagline: 'Atendimento full care com suporte técnico e consultoria digital.',
    description:
      'Plataforma unificada de tickets, help desk técnico com RA assistida e squads dedicados a pequenas empresas.',
    website: 'https://www.tim.com.br',
    tags: ['telco', 'suporte', 'helpdesk'],
    primaryColor: '#0033A0',
    accentColor: '#66D9FF',
    headquarters: 'São Paulo, Brasil',
    status: 'ativo',
    lastUpdate: '2025-09-07'
  },
  {
    id: 'ibm-cx',
    name: 'IBM',
    group: 'Telecomunicações e Tecnologia',
    segment: 'Tecnologia Enterprise',
    tagline: 'Customer success com foco em adoção de soluções mission-critical.',
    description:
      'Modelos de suporte premium, war rooms operacionais e orquestração entre squads de produto e sucesso do cliente.',
    website: 'https://www.ibm.com',
    tags: ['enterprise', 'customer-success', 'war-room'],
    primaryColor: '#0530AD',
    accentColor: '#4B6CFF',
    headquarters: 'São Paulo, Brasil',
    status: 'ativo',
    lastUpdate: '2025-07-12'
  },

  // Saúde e Farmacêuticas
  {
    id: 'ache-laboratorios',
    name: 'Aché Laboratórios',
    group: 'Saúde e Farmacêuticas',
    segment: 'Health CX',
    tagline: 'Experiência farmacêutica com compliance regulatório.',
    description:
      'Monitoramento integrado de campanhas, farmacovigilância digital e squads de relacionamento com médicos suportados por IA.',
    website: 'https://www.ache.com.br',
    tags: ['saúde', 'compliance', 'farma'],
    primaryColor: '#C53030',
    accentColor: '#FBB6CE',
    headquarters: 'Guarulhos, Brasil',
    status: 'ativo',
    lastUpdate: '2025-07-29'
  },
  {
    id: 'dpsp',
    name: 'DPSP',
    group: 'Saúde e Farmacêuticas',
    segment: 'Varejo Farmacêutico',
    tagline: 'Roteiro de saúde com cuidado farmacêutico humanizado.',
    description:
      'Hubs omnichannel que integram teleatendimento, marketplace de saúde e programas de fidelidade com analytics de prescrição.',
  website: 'https://www.drogariasaopaulo.com.br',
    tags: ['saúde', 'farmácia', 'fidelização'],
    primaryColor: '#E4002B',
    accentColor: '#00A4E0',
    headquarters: 'São Paulo, Brasil',
    status: 'ativo',
    lastUpdate: '2025-09-23'
  },
  {
    id: 'qualicorp-labs',
    name: 'Qualicorp',
    group: 'Saúde e Farmacêuticas',
    segment: 'Health Plans',
    tagline: 'Customer care regulatório com motor preditivo de churn.',
    description:
      'Squads para beneficiários corporativos e individuais, análise preditiva de cancelamentos e jornadas digitais de retenção.',
    website: 'https://www.qualicorp.com.br',
    tags: ['saúde', 'churn', 'retenção'],
    primaryColor: '#1F2B6C',
    accentColor: '#6E8DF7',
    headquarters: 'São Paulo, Brasil',
    status: 'ativo',
    lastUpdate: '2025-08-27'
  },

  // Energia, Gás e Indústria
  {
    id: 'neoenergia-cx',
    name: 'Neoenergia',
    group: 'Energia, Gás e Indústria',
    segment: 'Energia Inteligente',
    tagline: 'Experiência distribuída com leitura digital e autoatendimento.',
    description:
      'Aplicativos e centrais integradas com acompanhamento de consumo, redesenho de faturamento e atuação em campo conectada.',
    website: 'https://www.neoenergia.com',
    tags: ['energia', 'autoatendimento', 'field-service'],
    primaryColor: '#00933D',
    accentColor: '#F5B400',
    headquarters: 'Recife, Brasil',
    status: 'ativo',
    lastUpdate: '2025-09-06'
  },
  {
    id: 'light-labs',
    name: 'Light',
    group: 'Energia, Gás e Indústria',
    segment: 'Energia Distribuída',
    tagline: 'Gestão ativa de clientes com telemetria e operação em campo.',
    description:
      'Monitoramento de redes, priorização de equipes de campo e atendimento proativo para interrupções críticas.',
    website: 'https://www.light.com.br',
    tags: ['energia', 'telemetria', 'field-service'],
    primaryColor: '#005F6A',
    accentColor: '#00C2B8',
    headquarters: 'Rio de Janeiro, Brasil',
    status: 'ativo',
    lastUpdate: '2025-08-07'
  },
  {
    id: 'enel-labs',
    name: 'Enel',
    group: 'Energia, Gás e Indústria',
    segment: 'Energy Experience',
    tagline: 'Gestão energética com predição de demanda e voz do cliente.',
    description:
      'Cockpit com telemetria de consumo, alertas proativos e squads de campo integrados a analytics.',
    website: 'https://www.enel.com.br',
    tags: ['energia', 'telemetria', 'field-service'],
    primaryColor: '#0072BC',
    accentColor: '#66C6F1',
    headquarters: 'Fortaleza, Brasil',
    status: 'ativo',
    lastUpdate: '2025-08-22'
  },
  {
    id: 'liquigas-labs',
    name: 'Liquigás',
    group: 'Energia, Gás e Indústria',
    segment: 'Distribuição de Gás',
    tagline: 'Orquestração logística com experiência premium para revendas.',
    description:
      'Integração de pedidos, roteirização inteligente e canais digitais para consumidores e revendedores.',
    website: 'https://www.liquigas.com.br',
    tags: ['logística', 'rota-inteligente', 'omnichannel'],
    primaryColor: '#008E5A',
    accentColor: '#F4B400',
    headquarters: 'São Paulo, Brasil',
    status: 'expansao',
    lastUpdate: '2025-09-09'
  },
  {
    id: 'ultragaz-labs',
    name: 'Ultragaz',
    group: 'Energia, Gás e Indústria',
    segment: 'Energia Residencial',
    tagline: 'Experiência B2C com logística ágil e relacionamento consultivo.',
    description:
      'Plataforma que integra pedidos digitais, distribuição inteligente e suporte consultivo para clientes e revendedores.',
    website: 'https://www.ultragaz.com.br',
    tags: ['energia', 'last-mile', 'customer-care'],
    primaryColor: '#00599C',
    accentColor: '#FF8C00',
    headquarters: 'São Paulo, Brasil',
    status: 'ativo',
    lastUpdate: '2025-09-18'
  },
  {
    id: 'cemig',
    name: 'Cemig',
    group: 'Energia, Gás e Indústria',
    segment: 'Energia Integrada',
    tagline: 'Operação digital para distribuição e geração com visão 360º do cliente.',
    description:
      'Controle integrado de redes, atendimento regulatório e squads de campo suportados por IoT para elevar satisfação e eficiência operacional.',
    website: 'https://www.cemig.com.br',
    tags: ['energia', 'iot', 'campo'],
    primaryColor: '#005C3C',
    accentColor: '#A3D900',
    headquarters: 'Belo Horizonte, Brasil',
    status: 'expansao',
    lastUpdate: '2025-09-14'
  },

  // Transportes, Mobilidade e Viagens
  {
    id: 'blablacar-cx',
    name: 'BlaBlaCar',
    group: 'Transportes, Mobilidade e Viagens',
    segment: 'Mobilidade Compartilhada',
    tagline: 'Jornadas digitais com confiança e reputação em primeiro plano.',
    description:
      'Modelos de scoring social, suporte proativo em viagens e monitoramento de reputação com detecção de abuso.',
    website: 'https://www.blablacar.com.br',
    tags: ['mobilidade', 'trust-score', 'experiência-digital'],
    primaryColor: '#00B4EB',
    accentColor: '#41E8B3',
    headquarters: 'São Paulo, Brasil',
    status: 'ativo',
    lastUpdate: '2025-09-15'
  },
  {
    id: 'gol-cx',
    name: 'Gol Linhas Aéreas',
    group: 'Transportes, Mobilidade e Viagens',
    segment: 'Aviação Digital',
    tagline: 'Omnicanalidade centrada em experiência aeroportuária.',
    description:
      'Arquitetura que combina NPS transacional, service design com mapas de jornada e war room em tempo real para eventos críticos.',
    website: 'https://www.voegol.com.br',
    tags: ['transporte', 'nps', 'war-room'],
    primaryColor: '#FF6600',
    accentColor: '#FFE082',
    headquarters: 'São Paulo, Brasil',
    status: 'ativo',
    lastUpdate: '2025-09-05'
  },
  {
    id: 'uber-labs',
    name: 'Uber',
    group: 'Transportes, Mobilidade e Viagens',
    segment: 'Mobilidade On-Demand',
    tagline: 'Trust & Safety com monitoramento em tempo real e IA.',
    description:
      'Centros especializados em segurança, suporte para motoristas e passageiros com analytics de comportamento e resposta rápida.',
    website: 'https://www.uber.com',
    tags: ['mobilidade', 'segurança', 'ia'],
    primaryColor: '#000000',
    accentColor: '#1FBAD6',
    headquarters: 'São Paulo, Brasil',
    status: 'ativo',
    lastUpdate: '2025-09-02'
  },
  {
    id: 'mercedes-benz-labs',
    name: 'Mercedes-Benz',
    group: 'Transportes, Mobilidade e Viagens',
    segment: 'Automotivo Premium',
    tagline: 'Experiência de pós-venda com concierge digital e físico integrado.',
    description:
      'Programa que conecta atendimento premium, telemetria de veículos e processos de manutenção com foco em satisfação total.',
    website: 'https://www.mercedes-benz.com.br',
    tags: ['automotivo', 'concierge', 'telemetria'],
    primaryColor: '#0A2740',
    accentColor: '#7EC8E3',
    headquarters: 'São Bernardo do Campo, Brasil',
    status: 'ativo',
    lastUpdate: '2025-09-13'
  },

  // Serviços Diversos / Outros Setores
  {
    id: 'almaviva-cx',
    name: 'Almaviva',
    group: 'Serviços Diversos / Outros Setores',
    segment: 'Customer Experience as a Service',
    tagline: 'Experiência elevada construída por design service e dados.',
    description:
      'Plataforma proprietária QualityMon Evolution integrando voice of customer, jornada digital e insights acionáveis com dashboards interativos.',
    website: 'https://www.almavivaitalia.com',
    tags: ['cx', 'dados', 'journey'],
    primaryColor: '#0EA5E9',
    accentColor: '#36E4DA',
    headquarters: 'Belo Horizonte, Brasil',
    status: 'ativo',
    lastUpdate: '2025-09-30'
  },
  {
    id: 'mapfre-dc',
    name: 'Mapfre',
    group: 'Serviços Diversos / Outros Setores',
    segment: 'Seguros Finance',
    tagline: 'Cobertura financeira e cobrança com visão 360º da apólice.',
    description:
      'Integração entre sinistros, cobrança e relacionamento com motor de priorização por ticket e risco.',
    website: 'https://www.mapfre.com.br',
    tags: ['seguros', 'priorização', 'sinistros'],
    primaryColor: '#E2231A',
    accentColor: '#FF6F61',
    headquarters: 'São Paulo, Brasil',
    status: 'beta',
    lastUpdate: '2025-09-08'
  },
  {
    id: 'dmcard-dc',
    name: 'DMCARD',
    group: 'Serviços Diversos / Outros Setores',
    segment: 'Private Label',
    tagline: 'Recuperação de crédito com motor white-label customizável.',
    description:
      'Flows sob medida para redes varejistas com métricas de performance por bandeira e squads especialistas em fidelização.',
    website: 'https://www.dmcard.com.br',
    tags: ['private-label', 'fidelização', 'customização'],
    primaryColor: '#4F3BC8',
    accentColor: '#8C6BFF',
    headquarters: 'São José dos Campos, Brasil',
    status: 'ativo',
    lastUpdate: '2025-07-18'
  },
  {
    id: 'pgm-dc',
    name: 'PGM',
    group: 'Serviços Diversos / Outros Setores',
    segment: 'Cobrança Judicial',
    tagline: 'Orquestração legal-tech com compliance end-to-end.',
    description:
      'Arquitetura que combina equipes jurídicas especializadas, automação documental e dashboards de risco regulatório.',
    website: 'https://www.pgm.com.br',
    tags: ['legal-tech', 'compliance', 'processos'],
    primaryColor: '#1D3557',
    accentColor: '#4CC9F0',
    headquarters: 'Porto Alegre, Brasil',
    status: 'expansao',
    lastUpdate: '2025-09-29'
  },
  {
    id: 'bat-servicos',
    name: 'BAT',
    group: 'Serviços Diversos / Outros Setores',
    segment: 'Consumer Goods CX',
    tagline: 'Suporte regulado com rastreabilidade ponta a ponta.',
    description:
      'Programas de relacionamento e canais digitais integrados a compliance global e monitoramento de trade marketing.',
    website: 'https://www.bat.com',
    tags: ['consumer-goods', 'compliance', 'trade'],
    primaryColor: '#002D62',
    accentColor: '#40B5E6',
    headquarters: 'São Paulo, Brasil',
    status: 'ativo',
    lastUpdate: '2025-08-26'
  },
  {
    id: 'chain-servicos',
    name: 'Chain',
    group: 'Serviços Diversos / Outros Setores',
    segment: 'Supply Chain Digital',
    tagline: 'Comando logístico com torres de controle 24/7.',
    description:
      'Orquestração de pedidos B2B, tracking em tempo real e squads especialistas para reduzir rupturas e elevar serviço.',
    website: 'https://www.chain.com.br',
    tags: ['logística', 'torre-controle', 'analytics'],
    primaryColor: '#111827',
    accentColor: '#F97316',
    headquarters: 'São Paulo, Brasil',
    status: 'expansao',
    lastUpdate: '2025-09-21'
  },
  {
    id: 'copa-energia',
    name: 'Copa Energia',
    group: 'Serviços Diversos / Outros Setores',
    segment: 'Energia B2B',
    tagline: 'Clima corporativo com supply seguro e sustentável.',
    description:
      'Gerenciamento de carteiras corporativas, automação de contratos e squads consultivos para projetos de transição energética.',
    website: 'https://www.copaenergia.com.br',
    tags: ['energia', 'b2b', 'sustentabilidade'],
    primaryColor: '#004B8D',
    accentColor: '#7BC143',
    headquarters: 'São Paulo, Brasil',
    status: 'ativo',
    lastUpdate: '2025-09-25'
  },
  {
    id: 'fibrasil',
    name: 'Fibrasil',
    group: 'Serviços Diversos / Outros Setores',
    segment: 'Infraestrutura de Fibra',
    tagline: 'Backbone neutro com suporte SLA premium para ISPs.',
    description:
      'NOC 24/7, analytics de rede e squads de ativação acelerada garantindo disponibilidade e expansão coordenada.',
    website: 'https://www.fibrasil.com.br',
    tags: ['infraestrutura', 'fibra', 'noc'],
    primaryColor: '#1F2937',
    accentColor: '#60A5FA',
    headquarters: 'São Paulo, Brasil',
    status: 'expansao',
    lastUpdate: '2025-09-20'
  },
  {
    id: 'qualidade-garantida-labs',
    name: 'Qualidade Garantida',
    group: 'Serviços Diversos / Outros Setores',
    segment: 'Assurance Operacional',
    tagline: 'Auditoria contínua de CX com squads forenses e analytics.',
    description:
      'Framework que combina escuta ativa, auditoria de processos e analytics para elevar compliance e experiência.',
    website: 'https://www.almavivaitalia.com',
    tags: ['auditoria', 'compliance', 'analytics'],
    primaryColor: '#0F172A',
    accentColor: '#38BDF8',
    headquarters: 'São Paulo, Brasil',
    status: 'beta',
    lastUpdate: '2025-09-16'
  },
  {
    id: 'sompo-labs',
    name: 'Sompo Seguros',
    group: 'Serviços Diversos / Outros Setores',
    segment: 'Seguros Smart',
    tagline: 'Sinistros com respondentes digitais e humanos combinados.',
    description:
      'Plataforma que utiliza modelos de detecção de fraude, chatbots especializados e células high touch para casos críticos.',
    website: 'https://www.sompo.com.br',
    tags: ['seguros', 'detecção-fraude', 'chatbots'],
    primaryColor: '#1E293B',
    accentColor: '#F97316',
    headquarters: 'São Paulo, Brasil',
    status: 'expansao',
    lastUpdate: '2025-08-08'
  },
  {
    id: 'rede-americas',
    name: 'Rede Americas',
    group: 'Serviços Diversos / Outros Setores',
    segment: 'Healthcare Network',
    tagline: 'Operação conectada com visão 360º do paciente.',
    description:
      'Integração de centrais de atendimento, telemedicina e indicadores laboratoriais em uma única camada de decisão.',
    website: 'https://www.redeamericas.com.br',
    tags: ['telemedicina', 'integração', 'analytics'],
    primaryColor: '#0F172A',
    accentColor: '#38BDF8',
    headquarters: 'Rio de Janeiro, Brasil',
    status: 'beta',
    lastUpdate: '2025-09-12'
  },
  {
    id: 'unisul',
    name: 'Unisul',
    group: 'Serviços Diversos / Outros Setores',
    segment: 'Educação Superior',
    tagline: 'Jornada acadêmica omnichannel com retenção personalizada.',
    description:
      'Atendimento a alunos com analytics de evasão, suporte acadêmico multicanal e trilhas de engajamento digital.',
    website: 'https://www.unisul.br',
    tags: ['educação', 'retenção', 'analytics'],
    primaryColor: '#1E3A8A',
    accentColor: '#60A5FA',
    headquarters: 'Tubarão, Brasil',
    status: 'expansao',
    lastUpdate: '2025-09-24'
  },
  {
    id: 'treinamento-cx',
    name: 'Treinamento',
    group: 'Serviços Diversos / Outros Setores',
    segment: 'Academia de Performance',
    tagline: 'Lifelong learning com academias digitais e labs imersivos.',
    description:
      'Programas contínuos com plataformas de microlearning, labs presenciais e monitoramento de skill score.',
    website: 'https://www.almavivaitalia.com',
    tags: ['learning', 'people', 'performance'],
    primaryColor: '#6C5CE7',
    accentColor: '#74F0ED',
    headquarters: 'Belo Horizonte, Brasil',
    status: 'beta',
    lastUpdate: '2025-08-25'
  }
];

const mappedProducts = baseProducts.map(buildProduct);

export const products: Product[] = mappedProducts;

export const productsByGroup: Record<ProductGroup, Product[]> = productGroups.reduce(
  (accumulator, group) => {
    accumulator[group] = mappedProducts.filter((product) => product.group === group);
    return accumulator;
  },
  {} as Record<ProductGroup, Product[]>
);
