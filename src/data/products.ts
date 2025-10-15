export type ProductGroup =
  | 'Produtos DC'
  | 'Produtos CX'
  | 'Laboratórios';

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

export const productGroups: ProductGroup[] = ['Produtos DC', 'Produtos CX', 'Laboratórios'];

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

const produtosDCBase: BaseProduct[] = [
    {
      id: 'banco-pan-dc',
      name: 'Banco Pan',
      group: 'Produtos DC',
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
      group: 'Produtos DC',
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
      group: 'Produtos DC',
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
      id: 'bv-financeira',
      name: 'BV Financeira',
      group: 'Produtos DC',
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
      group: 'Produtos DC',
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
      id: 'casa-pio',
      name: 'Casa Pio',
      group: 'Produtos DC',
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
      id: 'claro-cobranca',
      name: 'Claro Cobrança',
      group: 'Produtos DC',
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
      id: 'dmcard-dc',
      name: 'Dmcard',
      group: 'Produtos DC',
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
      id: 'mapfre-dc',
      name: 'Mapfre',
      group: 'Produtos DC',
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
      id: 'nubank-dc',
      name: 'Nubank',
      group: 'Produtos DC',
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
      group: 'Produtos DC',
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
      id: 'pgm-dc',
      name: 'PGM',
      group: 'Produtos DC',
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
      id: 'santander-dc',
      name: 'Santander',
      group: 'Produtos DC',
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
    }
  ];

  const produtosCXBase: BaseProduct[] = [
    {
      id: 'almaviva-cx',
      name: 'Almaviva',
      group: 'Produtos CX',
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
      id: 'agibank-cx',
      name: 'Agibank',
      group: 'Produtos CX',
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
      group: 'Produtos CX',
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
      group: 'Produtos CX',
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
      group: 'Produtos CX',
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
      id: 'blablacar-cx',
      name: 'BlaBlaCar',
      group: 'Produtos CX',
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
      id: 'c6bank-cx',
      name: 'C6 Bank',
      group: 'Produtos CX',
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
      id: 'caixa-cx',
      name: 'Caixa',
      group: 'Produtos CX',
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
      group: 'Produtos CX',
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
      id: 'gol-cx',
      name: 'GOL',
      group: 'Produtos CX',
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
      id: 'ibm-cx',
      name: 'IBM',
      group: 'Produtos CX',
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
    {
      id: 'neoenergia-cx',
      name: 'Neoenergia',
      group: 'Produtos CX',
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
      id: 'net-cx',
      name: 'Net',
      group: 'Produtos CX',
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
      id: 'safra-cx',
      name: 'Safra',
      group: 'Produtos CX',
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
      id: 'shopee-cx',
      name: 'Shopee',
      group: 'Produtos CX',
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
      id: 'tim-ativo',
      name: 'Tim Ativo',
      group: 'Produtos CX',
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
      group: 'Produtos CX',
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
      id: 'treinamento-cx',
      name: 'Treinamento',
      group: 'Produtos CX',
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
    },
    {
      id: 'xp-investimentos',
      name: 'XP Investimentos',
      group: 'Produtos CX',
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
    }
  ];

  const laboratoriosBase: BaseProduct[] = [
    {
      id: 'ache-laboratorios',
      name: 'Aché Laboratórios',
      group: 'Laboratórios',
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
      id: 'light-labs',
      name: 'Light',
      group: 'Laboratórios',
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
      group: 'Laboratórios',
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
      group: 'Laboratórios',
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
      id: 'rede-americas',
      name: 'Rede Americas',
      group: 'Laboratórios',
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
      id: 'sompo-labs',
      name: 'Sompo',
      group: 'Laboratórios',
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
      id: 'mercedes-benz-labs',
      name: 'Mercedes-Benz',
      group: 'Laboratórios',
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
    {
      id: 'qualicorp-labs',
      name: 'Qualicorp',
      group: 'Laboratórios',
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
    {
      id: 'qualidade-garantida-labs',
      name: 'Qualidade Garantida',
      group: 'Laboratórios',
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
      id: 'sky-labs',
      name: 'Sky',
      group: 'Laboratórios',
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
      id: 'uber-labs',
      name: 'Uber',
      group: 'Laboratórios',
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
      id: 'ultragaz-labs',
      name: 'Ultragaz',
      group: 'Laboratórios',
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
      id: 'unicsul-labs',
      name: 'Unicsul',
      group: 'Laboratórios',
      segment: 'Educação Superior',
      tagline: 'Jornada acadêmica omnichannel com retenção personalizada.',
      description:
        'Atendimento a alunos com analytics de evasão, suporte acadêmico multicanal e trilhas de engajamento digital.',
      website: 'https://www.unicsul.edu.br',
      tags: ['educação', 'retenção', 'analytics'],
      primaryColor: '#2D2A4A',
      accentColor: '#7866FF',
      headquarters: 'São Paulo, Brasil',
      status: 'expansao',
      lastUpdate: '2025-09-24'
    },
    {
      id: 'vivo-labs',
      name: 'Vivo',
      group: 'Laboratórios',
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
    }
  ];

  const produtosDC = produtosDCBase.map(buildProduct);
  const produtosCX = produtosCXBase.map(buildProduct);
  const laboratorios = laboratoriosBase.map(buildProduct);

  export const productsByGroup: Record<ProductGroup, Product[]> = {
    'Produtos DC': produtosDC,
    'Produtos CX': produtosCX,
    'Laboratórios': laboratorios
  };

  export const products: Product[] = [...produtosDC, ...produtosCX, ...laboratorios];
