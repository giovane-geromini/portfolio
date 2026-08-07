export type ProfessionalExperience = {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
  technologies?: string[];
};

export type ProfessionalEducation = {
  institution: string;
  course: string;
  period: string;
  status: string;
  details: string;
};

export type ProfessionalCertification = {
  title: string;
  issuer: string;
  issuedAt: string;
  description: string;
};

export type SkillGroup = {
  title: string;
  description: string;
  skills: string[];
};

export type ProfessionalProfile = {
  name: string;
  role: string;
  location: string;
  availability: string;
  image: string;
  email: string;
  linkedin: string;
  github: string;
  headline: string;
  summary: string;
  approach: string;
  education: ProfessionalEducation[];
  certifications: ProfessionalCertification[];
  experiences: ProfessionalExperience[];
  skillGroups: SkillGroup[];
};

export const professionalProfile = {
  name: "Giovane Geromini",
  role: "Analista de Logística e Dados",
  location: "São Carlos, São Paulo, Brasil",
  availability: "Disponível para oportunidades em tecnologia",
  image: "/profile/giovane-geromini-tech.png",
  email: "giovane.geromini_dev@outlook.com",
  linkedin: "https://www.linkedin.com/in/giovanegeromini",
  github: "https://github.com/giovane-geromini",
  headline:
    "Experiência operacional transformada em dados, automação e produtos digitais.",
  summary:
    "Profissional com trajetória construída em logística, operações, atendimento, indicadores e melhoria de processos. Hoje, conecto essa experiência ao desenvolvimento full-stack e à Engenharia de Dados para criar soluções com regras de negócio claras, dados confiáveis e utilidade real.",
  approach:
    "Entender o problema, organizar os dados, definir a lógica, construir a solução e acompanhar o resultado em produção.",
  education: [
    {
      institution: "Estácio",
      course: "Tecnólogo em Logística",
      period: "abr. 2023 — abr. 2025",
      status: "Concluído",
      details:
        "Formação voltada à gestão logística, transportes, planejamento, projetos, operações e Logística 4.0.",
    },
    {
      institution: "Estácio",
      course: "Pós-graduação em Engenharia de Dados",
      period: "jun. 2025 — jun. 2026",
      status: "Concluída",
      details:
        "Aprofundamento em SQL, modelagem, ETL, bancos relacionais, Data Warehouse, arquitetura e estruturas de dados.",
    },
    {
      institution: "IFRS",
      course: "Desenvolvimento Web",
      period: "jul. 2026 — jan. 2027",
      status: "Em andamento",
      details:
        "HTML, CSS, JavaScript, lógica de programação, banco de dados e desenvolvimento de projetos web.",
    },
  ],
  certifications: [
    {
      title: "English CEFR B1",
      issuer: "English Fluency Online",
      issuedAt: "abr. 2024",
      description:
        "Certificação de proficiência em inglês no nível intermediário B1.",
    },
    {
      title: "Power BI: Formação Básica",
      issuer: "LinkedIn Learning",
      issuedAt: "out. 2023",
      description:
        "Fundamentos de modelagem, visualização e construção de relatórios no Power BI.",
    },
    {
      title: "Excel Impressionador",
      issuer: "Hashtag Treinamentos",
      issuedAt: "set. 2023",
      description:
        "Excel aplicado a análise, produtividade, automação e inteligência de negócios.",
    },
  ],
  experiences: [
    {
      company: "Faber-Castell Brasil",
      role: "Analista de Logística Pleno",
      period: "ago. 2025 — atual",
      location: "São Carlos, SP · Híbrido",
      summary:
        "Atuação em Customer Service como ponto focal entre clientes, transportadoras e áreas internas, com foco no cumprimento de SLA, qualidade operacional e visibilidade das entregas.",
      highlights: [
        "Acompanhamento diário de notas fiscais e mercadorias em trânsito, com análise de atrasos, ocorrências, reclamações e devoluções.",
        "Extração, consolidação e validação de dados provenientes de dashboards, SAP, Microsoft Dynamics e sistemas logísticos.",
        "Construção de relatórios gerenciais, classificações de causa, análises de SLA e OTD e apresentações de performance de transportadoras.",
        "Padronização de processos e automação de rotinas com Excel, Power Query, SQL e Power BI.",
      ],
      technologies: [
        "SAP ERP",
        "Microsoft Dynamics",
        "Excel",
        "Power Query",
        "Power BI",
        "SQL",
      ],
    },
    {
      company: "Shopee",
      role: "Analista de Logística Júnior | Last Mile e Logística Reversa",
      period: "set. 2023 — ago. 2025",
      location: "São Paulo, SP · Presencial",
      summary:
        "Atuação operacional e analítica na logística reversa do Last Mile Hub, acompanhando pacotes em insucesso de entrega e os fluxos de retorno ao seller.",
      highlights: [
        "Análise diária de pacotes retornados, classificação de status e direcionamento para reentrega, devolução ou tratativa.",
        "Monitoramento de aging, produtividade, conformidade com o método FIFO e redução de tempo parado.",
        "Consolidação de dados operacionais em planilhas, relatórios, dashboards e indicadores de desempenho.",
        "Controle de coletas, pacotes avariados, reprocessos, Drop Off e rastreabilidade física e sistêmica.",
      ],
      technologies: [
        "Planilhas Google",
        "Excel",
        "Planejamento operacional",
        "Logística reversa",
        "BI",
      ],
    },
    {
      company: "Movida Aluguel de Carros",
      role: "Auxiliar de Frota | Controle Operacional e Indicadores",
      period: "jun. 2023 — out. 2023",
      location: "São Carlos, SP · Presencial",
      summary:
        "Controle dos processos de veículos improdutivos, manutenção corretiva e preventiva, documentação e retorno dos automóveis à operação.",
      highlights: [
        "Acompanhamento de reparos, revisões, avarias, orçamentos, fornecedores e prazos de conclusão.",
        "Registro de evidências, laudos, pareceres técnicos e documentação dos processos.",
        "Criação de planilhas de controle da frota e indicadores operacionais.",
      ],
      technologies: ["Excel", "Gestão de frota", "Indicadores", "Manutenção"],
    },
    {
      company: "Eixo SP Concessionária de Rodovias",
      role: "Operador de Centro de Controle Operacional",
      period: "jun. 2021 — jun. 2023",
      location: "Itirapina, SP · Presencial",
      summary:
        "Monitoramento da operação rodoviária e coordenação de recursos de atendimento, resgate, inspeção, guincho e suporte ao usuário.",
      highlights: [
        "Operação de rádio, CFTV, painéis de informação e sistemas de registro de ocorrências.",
        "Acionamento e acompanhamento de recursos internos e externos durante eventos operacionais.",
        "Tratamento de ocorrências, comunicação com áreas de apoio e controle da disponibilidade da frota.",
      ],
      technologies: [
        "CFTV",
        "Sistemas de chamados",
        "Operação rodoviária",
        "Gestão de recursos",
      ],
    },
    {
      company: "Eixo SP Concessionária de Rodovias",
      role: "Atendente de Centro de Controle Operacional",
      period: "nov. 2020 — jun. 2021",
      location: "Itirapina, SP · Presencial",
      summary:
        "Atendimento e orientação aos usuários das rodovias, registro de solicitações e transmissão de pedidos de socorro ao Centro de Controle Operacional.",
      highlights: [
        "Atendimento ao usuário e registro estruturado das necessidades informadas.",
        "Encaminhamento de solicitações operacionais e manifestações para as áreas responsáveis.",
      ],
      technologies: ["Atendimento", "Sistemas de chamados", "Operação rodoviária"],
    },
  ],
  skillGroups: [
    {
      title: "Desenvolvimento e produto",
      description:
        "Tecnologias e práticas utilizadas na construção de aplicações e produtos próprios.",
      skills: [
        "Next.js",
        "React.js",
        "TypeScript",
        "JavaScript",
        "HTML5",
        "CSS",
        "Desenvolvimento full-stack",
        "Arquitetura de software",
        "UX",
        "Lógica de negócios",
        "Visual Studio Code",
        "GitHub",
      ],
    },
    {
      title: "Dados e inteligência de negócios",
      description:
        "Competências ligadas à estruturação, análise, confiabilidade e visualização de dados.",
      skills: [
        "SQL",
        "Modelagem de dados",
        "ETL",
        "Bancos de dados relacionais",
        "PostgreSQL",
        "Supabase",
        "Engenharia de Dados",
        "Data Warehouse",
        "Arquitetura de dados",
        "Microsoft Power BI",
        "Visualização de dados",
        "Inteligência de negócios",
      ],
    },
    {
      title: "Logística e operações",
      description:
        "Experiência aplicada em transporte, atendimento, gestão de fluxo e melhoria operacional.",
      skills: [
        "Gestão logística",
        "Logística reversa",
        "Planejamento logístico",
        "Planejamento operacional",
        "Transportes",
        "SLA e OTD",
        "Tratamento de ocorrências",
        "Gestão de frota",
        "Gestão de recursos",
        "SAP ERP",
        "Microsoft Dynamics ERP",
        "Logística 4.0",
      ],
    },
    {
      title: "Ferramentas, análise e idiomas",
      description:
        "Recursos utilizados para produtividade, comunicação e apoio à tomada de decisão.",
      skills: [
        "Microsoft Excel",
        "Power Query",
        "Microsoft Office",
        "Planilhas Google",
        "Habilidades analíticas",
        "Pensamento computacional",
        "Gestão de projetos",
        "Inglês B1",
        "Inglês para negócios",
      ],
    },
  ],
} satisfies ProfessionalProfile;
