export type PlantCheckCategory =
  | "Primeiro acesso"
  | "Dashboard e cadastro"
  | "Plantas e saúde"
  | "Lembretes e calendário"
  | "Jogos"
  | "Aprender"
  | "Perfil e configurações"
  | "Clima e Guia do Dia";

export type PlantCheckScreenshot = {
  id: string;
  file: string;
  src: string;
  title: string;
  category: PlantCheckCategory;
  featured?: boolean;
};

const basePath = "/projects/plantacheck/gallery";

const screenshot = (
  file: string,
  title: string,
  category: PlantCheckCategory,
  featured = false,
): PlantCheckScreenshot => ({
  id: file.replace(/\.png$/i, ""),
  file,
  src: `${basePath}/${file}`,
  title,
  category,
  featured,
});

export const plantCheckGallery: PlantCheckScreenshot[] = [
  screenshot("01-login.png", "Login e acesso seguro", "Primeiro acesso", true),
  screenshot("02-primeiro-acesso.png", "Solicitação do primeiro acesso", "Primeiro acesso"),
  screenshot("03-codigo-primeiro-acesso.png", "Validação por código", "Primeiro acesso"),
  screenshot("04-finalizar-cadastro.png", "Definição de senha", "Primeiro acesso"),
  screenshot("05-configurar-casa.png", "Configuração inicial da casa", "Primeiro acesso"),
  screenshot("06-criar-casa.png", "Criação da primeira casa", "Primeiro acesso"),

  screenshot("07-dashboard-vazio.png", "Dashboard antes da primeira planta", "Dashboard e cadastro"),
  screenshot("08-dashboard-vazio-recursos.png", "Recursos em estado vazio", "Dashboard e cadastro"),
  screenshot("09-lembretes-vazios.png", "Central de lembretes vazia", "Dashboard e cadastro"),
  screenshot("11-lista-plantas-vazia.png", "Coleção antes do primeiro cadastro", "Dashboard e cadastro"),
  screenshot("12-cadastro-planta-vazio.png", "Cadastro completo da planta", "Dashboard e cadastro"),
  screenshot("12-plantas-resumo-e-filtros.png", "Resumo da coleção e filtros", "Dashboard e cadastro"),
  screenshot("13-cadastro-contexto-rotina.png", "Contexto da rotina", "Dashboard e cadastro"),
  screenshot("13-plantas-galeria-principais.png", "Galeria principal de plantas", "Dashboard e cadastro", true),
  screenshot("14-cadastro-cuidados-e-luz.png", "Frequências de cuidado e luz", "Dashboard e cadastro"),
  screenshot("14-plantas-galeria-variedade.png", "Variedade de estados da coleção", "Dashboard e cadastro"),
  screenshot("15-planta-cadastro-incompleto.png", "Orientação para completar cadastro", "Dashboard e cadastro"),
  screenshot("15-primeira-planta-cadastrada.png", "Primeira planta cadastrada", "Dashboard e cadastro"),
  screenshot("16-dashboard-resumo-da-rotina.png", "Resumo inteligente da rotina", "Dashboard e cadastro", true),
  screenshot("17-dashboard-prioridade-e-radar.png", "Prioridade e Radar Inteligente", "Dashboard e cadastro", true),

  screenshot("16-detalhe-jiboia-inicial.png", "Detalhe completo da planta", "Plantas e saúde", true),
  screenshot("17-acoes-galeria-vazia.png", "Ações principais e galeria", "Plantas e saúde"),
  screenshot("18-resumo-planta-inicial.png", "Resumo consolidado da planta", "Plantas e saúde"),
  screenshot("19-checkup-saudavel-100.png", "Check-up com leitura 100/100", "Plantas e saúde"),
  screenshot("20-saude-jiboia-100.png", "Indicador de saúde da planta", "Plantas e saúde"),
  screenshot("21-card-jiboia-saudavel.png", "Card com saúde e contexto", "Plantas e saúde"),
  screenshot("22-resumo-jiboia-em-dia.png", "Rega e adubação em dia", "Plantas e saúde"),
  screenshot("23-historico-jiboia.png", "Histórico completo de cuidados", "Plantas e saúde", true),
  screenshot("24-version-announcement-v5.20.11.5.1.png", "Anúncio interno de nova versão", "Plantas e saúde", true),

  screenshot("25-lembretes-visao-geral.png", "Central de lembretes", "Lembretes e calendário"),
  screenshot("26-lembretes-cuidados-pendentes.png", "Cuidados pendentes por prioridade", "Lembretes e calendário"),
  screenshot("27-calendario-cuidados-mensal.png", "Calendário mensal de cuidados", "Lembretes e calendário", true),
  screenshot("28-calendario-detalhes-do-dia.png", "Detalhes dos cuidados do dia", "Lembretes e calendário"),
  screenshot("29-lembretes-filtros.png", "Filtros da Central de Lembretes", "Lembretes e calendário", true),

  screenshot("30-jogos-visao-geral.png", "Central de jogos e conquistas", "Jogos", true),
  screenshot("31-jogos-catalogo-desafios.png", "Catálogo de desafios", "Jogos"),
  screenshot("32-jogos-como-jogar-e-conquistas.png", "Regras e progresso das conquistas", "Jogos"),
  screenshot("33-jogos-trofeus-progresso.png", "Troféus e progresso real", "Jogos"),
  screenshot("34-jogos-trofeus-avancados.png", "Conquistas avançadas", "Jogos"),
  screenshot("35-soletra-verde-desafio-diario.png", "Soletra Verde: desafio diário", "Jogos", true),
  screenshot("36-soletra-verde-jogabilidade.png", "Jogabilidade do Soletra Verde", "Jogos"),
  screenshot("37-soletra-verde-dicas-e-respostas-protegidas.png", "Dicas e respostas protegidas", "Jogos"),
  screenshot("38-soletra-verde-como-jogar.png", "Como jogar o Soletra Verde", "Jogos"),

  screenshot("39-aprender-visao-geral-e-busca.png", "Aprender: visão geral e busca", "Aprender"),
  screenshot("40-aprender-guia-conectado-a-planta.png", "Guia conectado à planta da casa", "Aprender"),
  screenshot("41-aprender-diagnostico-visual-e-checkup.png", "Diagnóstico visual e check-up", "Aprender", true),
  screenshot("42-aprender-biblioteca-de-cuidados.png", "Biblioteca de cuidados", "Aprender"),
  screenshot("43-aprender-guias-cultivo-propagacao-e-problemas.png", "Guias de cultivo e problemas", "Aprender"),
  screenshot("44-aprender-enciclopedia-especie-detalhada.png", "Enciclopédia detalhada da espécie", "Aprender"),
  screenshot("45-aprender-catalogo-de-especies.png", "Catálogo de espécies", "Aprender"),

  screenshot("46-perfil-visao-geral-e-identidade.png", "Perfil e identidade", "Perfil e configurações"),
  screenshot("47-perfil-resumo-da-conta-e-atalhos.png", "Resumo da conta e atalhos", "Perfil e configurações"),
  screenshot("48-perfil-recursos-progresso-e-ultimo-registro.png", "Recursos, progresso e último registro", "Perfil e configurações"),
  screenshot("49-configuracoes-conta-e-atalhos.png", "Configurações da conta e casa", "Perfil e configurações"),
  screenshot("50-configuracoes-clima-e-checkups.png", "Clima e regras de check-up", "Perfil e configurações"),
  screenshot("51-configuracoes-checkups-e-notificacoes.png", "Check-ups e permissões", "Perfil e configurações"),
  screenshot("52-configuracoes-notificacoes-e-horarios.png", "Notificações e horários", "Perfil e configurações"),
  screenshot("53-configuracoes-horarios-exportacao-e-versao.png", "Exportação e versão do produto", "Perfil e configurações"),
  screenshot("54-configuracoes-versao-e-feedback.png", "Histórico de versões e feedback", "Perfil e configurações"),

  screenshot("55-dashboard-clima-integrado-e-rotina.png", "Clima integrado ao dashboard", "Clima e Guia do Dia", true),
  screenshot("56-clima-previsao-atual-e-recomendacoes.png", "Previsão atual e recomendações", "Clima e Guia do Dia", true),
  screenshot("57-clima-detalhes-do-dia.png", "Detalhes meteorológicos do dia", "Clima e Guia do Dia"),
  screenshot("58-clima-previsao-proximos-6-dias.png", "Previsão dos próximos seis dias", "Clima e Guia do Dia"),
  screenshot("59-configuracoes-clima-inteligente.png", "Configuração do clima inteligente", "Clima e Guia do Dia"),
  screenshot("60-guia-do-dia-clima-e-prioridades.png", "Guia do Dia: clima e prioridades", "Clima e Guia do Dia", true),
  screenshot("61-guia-do-dia-cuidados-para-resolver.png", "Cuidados organizados para resolver", "Clima e Guia do Dia"),
  screenshot("62-guia-do-dia-checkups-e-cadastros-pendentes.png", "Check-ups e cadastros pendentes", "Clima e Guia do Dia"),
];

export const plantCheckHomepageSlides = plantCheckGallery.filter(
  (item) => item.featured,
);

export const plantCheckCategories: PlantCheckCategory[] = [
  "Primeiro acesso",
  "Dashboard e cadastro",
  "Plantas e saúde",
  "Lembretes e calendário",
  "Jogos",
  "Aprender",
  "Perfil e configurações",
  "Clima e Guia do Dia",
];
