import Link from "next/link";
import PlantaCheckPhone from "../../components/PlantaCheckPhone";
import { plantCheckGallery } from "../../data/plantaCheckGallery";

const modules = [
  {
    title: "Rotina inteligente",
    text: "Rega, adubação, luz, check-ups, adiamentos e ações em lote organizados por prioridade.",
  },
  {
    title: "Saúde e histórico",
    text: "Pontuação de 0 a 100, recomendações, eventos por dia, autor e evolução da planta.",
  },
  {
    title: "Clima contextual",
    text: "Previsão, umidade, chuva, vento e luz natural aplicados à leitura da rotina.",
  },
  {
    title: "Aprendizado",
    text: "Enciclopédia, guias de cultivo e diagnóstico visual conectado às plantas da casa.",
  },
  {
    title: "Gamificação",
    text: "Soletra Verde, desafios diários, estatísticas e troféus ligados ao uso real do app.",
  },
  {
    title: "Operação do produto",
    text: "Notificações, calendário, exportação, feedback, versionamento e painel do beta.",
  },
];

const architecture = [
  {
    label: "Interface",
    value: "Next.js, React, TypeScript e experiência PWA mobile-first",
  },
  {
    label: "Dados",
    value: "PostgreSQL com modelagem orientada a eventos",
  },
  {
    label: "Backend",
    value: "Supabase Auth, Storage, Row Level Security e APIs",
  },
  {
    label: "Infraestrutura",
    value: "Vercel, domínio próprio, deploy contínuo e releases versionadas",
  },
];

const natureSignals = [
  {
    title: "Observar",
    text: "Histórico, saúde, clima e contexto ajudam a entender a planta antes de sugerir uma ação.",
    icon: "leaf",
  },
  {
    title: "Decidir",
    text: "As regras de negócio transformam sinais do dia a dia em prioridades simples e acionáveis.",
    icon: "drop",
  },
  {
    title: "Evoluir",
    text: "Cada registro amplia a leitura da rotina e cria uma base confiável para próximos cuidados.",
    icon: "growth",
  },
] as const;

type NatureIconProps = {
  kind: (typeof natureSignals)[number]["icon"];
};

function NatureIcon({ kind }: NatureIconProps) {
  if (kind === "drop") {
    return (
      <svg
        viewBox="0 0 48 48"
        width="28"
        height="28"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M24 6C19 14 12 20 12 29a12 12 0 0 0 24 0C36 20 29 14 24 6Z"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinejoin="round"
        />
        <path
          d="M18.5 30.5c1.1 3.4 3.7 5.4 7.2 5.8"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (kind === "growth") {
    return (
      <svg
        viewBox="0 0 48 48"
        width="28"
        height="28"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M24 40V20"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
        <path
          d="M24 24c-7 0-12-4.5-12-11 7 0 12 4.5 12 11Z"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinejoin="round"
        />
        <path
          d="M24 30c7 0 12-4.5 12-11-7 0-12 4.5-12 11Z"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinejoin="round"
        />
        <path
          d="M14 40h20"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 48 48"
      width="28"
      height="28"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M38 9C24 10 12 17 10 31c8 1 15-1 20-6 5-5 7-10 8-16Z"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
      <path
        d="M12 36c6-8 12-13 20-18"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function PlantaCheckCasePage() {
  return (
    <main className="case-page">
      <div className="portfolio-orb portfolio-orb--green" aria-hidden="true" />
      <div className="portfolio-orb portfolio-orb--blue" aria-hidden="true" />

      <div className="portfolio-container">
        <nav className="portfolio-nav" aria-label="Navegação do case">
          <Link className="portfolio-brand" href="/">
            <span className="portfolio-brand-mark" aria-hidden="true">
              GG
            </span>
            <span>
              <strong>Giovane Geromini</strong>
              <small>Voltar ao portfólio</small>
            </span>
          </Link>

          <div className="portfolio-nav-links">
            <a href="#produto">Produto</a>
            <a href="#experiencia">Experiência</a>
            <a href="#arquitetura">Arquitetura</a>
            <a href="#evolucao">Evolução</a>
          </div>
        </nav>

        <header className="case-hero">
          <div className="case-hero-copy">
            <div className="project-status-row">
              <span className="status-pill status-pill--green">Case técnico</span>
              <span className="status-pill">Beta funcional</span>
              <span className="status-pill">V5.20.11.5.1</span>
              <span className="status-pill">Uso real e contínuo</span>
            </div>

            <span className="plantacheck-wordmark">PlantaCheck</span>

            <h1>Cuidado de plantas com histórico, contexto e decisão.</h1>

            <p className="case-hero-lead">
              Produto autoral que combina gestão doméstica, regras de negócio,
              dados históricos, clima, conteúdo educativo e gamificação em uma
              PWA criada para uso diário.
            </p>

            <div className="portfolio-actions">
              <a
                className="button button--green"
                href="https://plantacheck.com.br"
                target="_blank"
                rel="noreferrer"
              >
                Abrir aplicação
              </a>
              <a className="button button--secondary" href="#experiencia">
                Navegar pelas telas
              </a>
              <Link className="button button--secondary" href="/">
                Voltar ao portfólio
              </Link>
            </div>

            <p className="private-repository-note">
              <span aria-hidden="true">🔒</span>
              O código-fonte permanece privado. Este case documenta decisões,
              recursos e resultados sem expor a implementação integral.
            </p>

            <p
              style={{
                margin: "16px 0 0",
                display: "flex",
                alignItems: "center",
                gap: 10,
                color: "#a7f3d0",
                fontSize: 14,
                lineHeight: 1.6,
              }}
            >
              <span
                style={{
                  width: 30,
                  height: 30,
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 999,
                  border: "1px solid rgba(74, 222, 128, 0.24)",
                  background: "rgba(34, 197, 94, 0.08)",
                  flex: "0 0 auto",
                }}
              >
                <NatureIcon kind="leaf" />
              </span>
              Tecnologia aplicada ao cuidado: observar melhor, decidir com
              contexto e construir histórico.
            </p>
          </div>

          <aside className="case-version-card">
            <span>Produto em produção</span>
            <strong>plantacheck.com.br</strong>
            <dl>
              <div>
                <dt>Plataforma</dt>
                <dd>PWA mobile-first</dd>
              </div>
              <div>
                <dt>Uso</dt>
                <dd>Beta real e contínuo</dd>
              </div>
              <div>
                <dt>Dados</dt>
                <dd>Supabase + PostgreSQL</dd>
              </div>
              <div>
                <dt>Proposta</dt>
                <dd>Rotina + contexto + histórico</dd>
              </div>
            </dl>
          </aside>
        </header>

        <section id="produto" className="portfolio-section">
          <div className="section-heading section-heading--wide">
            <span className="eyebrow">Visão do produto</span>
            <h2>De lembretes isolados para uma leitura completa da casa.</h2>
            <p>
              O PlantaCheck nasceu para resolver uma dificuldade prática:
              lembrar cuidados de várias plantas sem transformar frequências em
              ordens cegas. O app combina cadastro, histórico, sinais visuais,
              clima e prioridades para ajudar o usuário a observar antes de
              agir.
            </p>
          </div>

          <div className="problem-solution-grid">
            <article className="glass-card">
              <span className="glass-card-index">Problema</span>
              <h3>Informação espalhada e pouca confiança</h3>
              <p>
                Datas guardadas na memória, alarmes sem contexto e dificuldade
                para acompanhar várias plantas ou dividir os cuidados com outra
                pessoa.
              </p>
            </article>

            <article className="glass-card glass-card--accent-green">
              <span className="glass-card-index">Solução</span>
              <h3>Histórico que vira prioridade</h3>
              <p>
                Cada cuidado entra na linha do tempo e alimenta dashboard,
                lembretes, calendário, saúde e recomendações da casa.
              </p>
            </article>
          </div>
        </section>

        <section className="portfolio-section">
          <div className="section-heading section-heading--wide">
            <span className="eyebrow">Natureza + tecnologia</span>
            <h2>O app não tenta substituir a observação. Ele organiza sinais.</h2>
            <p>
              A lógica do produto foi desenhada para aproximar tecnologia e
              cuidado real. Em vez de tratar cada frequência como uma ordem
              isolada, o PlantaCheck reúne contexto suficiente para apoiar uma
              decisão mais consciente.
            </p>
          </div>

          <div className="module-grid">
            {natureSignals.map((signal) => (
              <article className="project-card" key={signal.title}>
                <div
                  style={{
                    width: 44,
                    height: 44,
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 14,
                    color: "#86efac",
                    border: "1px solid rgba(74, 222, 128, 0.22)",
                    background:
                      "linear-gradient(145deg, rgba(34,197,94,0.10), rgba(59,130,246,0.06))",
                    marginBottom: 16,
                  }}
                >
                  <NatureIcon kind={signal.icon} />
                </div>
                <h3>{signal.title}</h3>
                <p>{signal.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="experiencia" className="portfolio-section">
          <div className="section-heading section-heading--wide">
            <span className="eyebrow">Experiência interativa</span>
            <h2>Veja as principais telas dentro do celular virtual.</h2>
            <p>
              Use as categorias para percorrer onboarding, dashboard, plantas,
              saúde, calendário, jogos, aprendizado, configurações, clima e Guia
              do Dia. As imagens foram capturadas em uma casa demonstrativa
              criada especificamente para este case.
            </p>
            <p
              style={{
                marginTop: 12,
                color: "#a7f3d0",
                fontSize: 14,
                lineHeight: 1.7,
              }}
            >
              A galeria permite navegar pelo produto como uma demonstração
              visual do fluxo, da evolução e das decisões de interface.
            </p>
          </div>

          <div className="case-phone-panel">
            <PlantaCheckPhone
              slides={plantCheckGallery}
              showCategories
              showThumbnails
              title="Galeria interativa do PlantaCheck"
            />
          </div>
        </section>

        <section className="portfolio-section">
          <div className="section-heading">
            <span className="eyebrow">Módulos</span>
            <h2>Um produto integrado, não uma coleção de telas.</h2>
          </div>

          <div className="module-grid">
            {modules.map((module, index) => (
              <article className="glass-card" key={module.title}>
                <span className="glass-card-index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3>{module.title}</h3>
                <p>{module.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="arquitetura" className="portfolio-section">
          <div className="section-heading">
            <span className="eyebrow">Arquitetura</span>
            <h2>Uma base full-stack preparada para evolução.</h2>
          </div>

          <div className="architecture-panel">
            <div className="architecture-flow" aria-label="Fluxo da arquitetura">
              <span>Usuário</span>
              <i>→</i>
              <span>Next.js PWA</span>
              <i>→</i>
              <span>Supabase</span>
              <i>→</i>
              <span>PostgreSQL</span>
              <i>→</i>
              <span>Dashboard e histórico</span>
            </div>

            <dl className="architecture-list">
              {architecture.map((item) => (
                <div key={item.label}>
                  <dt>{item.label}</dt>
                  <dd>{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="portfolio-section">
          <div className="section-heading">
            <span className="eyebrow">Decisões técnicas</span>
            <h2>O que sustenta a experiência.</h2>
          </div>

          <div className="decision-grid">
            <article className="project-card">
              <h3>Modelo orientado a eventos</h3>
              <p>
                A tabela de eventos registra o que aconteceu, quando, em qual
                planta e por quem. O estado atual é derivado do histórico.
              </p>
            </article>

            <article className="project-card">
              <h3>Isolamento por casa</h3>
              <p>
                Autenticação e Row Level Security protegem coleções e permitem
                compartilhar uma residência com membros autorizados.
              </p>
            </article>

            <article className="project-card">
              <h3>Regras contextuais</h3>
              <p>
                Frequência, atraso, saúde, clima e adiamentos são combinados para
                produzir uma prioridade mais útil do que um simples alarme.
              </p>
            </article>

            <article className="project-card">
              <h3>Produto observável</h3>
              <p>
                Histórico de versões, feedbacks e ferramentas internas apoiam o
                acompanhamento do beta e a correção de problemas reais.
              </p>
            </article>
          </div>
        </section>

        <section id="evolucao" className="portfolio-section">
          <div className="section-heading">
            <span className="eyebrow">Evolução contínua</span>
            <h2>Aprendizados de um produto usado de verdade.</h2>
          </div>

          <div className="evolution-grid">
            <article className="glass-card glass-card--accent-blue">
              <h3>Do MVP ao ecossistema</h3>
              <p>
                O projeto começou com cadastro, rega e sol. Hoje conecta clima,
                check-ups, saúde, calendário, fotos, notificações, conteúdo e
                jogos.
              </p>
            </article>

            <article className="glass-card glass-card--accent-amber">
              <h3>Qualidade encontrada no uso</h3>
              <p>
                Cenários reais revelam inconsistências que não aparecem em
                protótipos. O fluxo entre capa e galeria de fotos é uma das
                prioridades registradas para a próxima retomada.
              </p>
            </article>

            <article className="glass-card glass-card--accent-green">
              <h3>Versionamento frequente</h3>
              <p>
                Releases curtas, tags, deploy e anúncio interno tornam a
                evolução rastreável para quem desenvolve e compreensível para
                quem usa.
              </p>
            </article>
          </div>
        </section>

        <section className="case-closing">
          <div>
            <span className="eyebrow">PlantaCheck</span>
            <h2>Produto, dados e experiência construídos em conjunto.</h2>
            <p>
              O case representa minha transição para tecnologia por meio de uma
              aplicação funcional, publicada e continuamente refinada — com a
              tecnologia servindo à observação, e não o contrário.
            </p>
          </div>

          <div className="portfolio-actions">
            <a
              className="button button--green"
              href="https://plantacheck.com.br"
              target="_blank"
              rel="noreferrer"
            >
              Abrir PlantaCheck
            </a>
            <Link className="button button--secondary" href="/">
              Voltar ao portfólio
            </Link>
          </div>
        </section>

        <footer className="portfolio-footer">
          <span>© {new Date().getFullYear()} Giovane Geromini</span>
          <span>Case PlantaCheck • V5.20.11.5.1</span>
        </footer>
      </div>
    </main>
  );
}
