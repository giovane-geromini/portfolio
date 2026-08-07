import Link from "next/link";
import PlantaCheckPhone from "../components/PlantaCheckPhone";
import PortfolioLightIntro from "../components/PortfolioLightIntro";
import ProfessionalProfileCard from "../components/ProfessionalProfileCard";
import { plantCheckHomepageSlides } from "../data/plantaCheckGallery";

const strengths = [
  {
    title: "Produto em produção",
    text: "Aplicação autoral publicada, com domínio próprio, autenticação, banco relacional e evolução baseada em uso real.",
  },
  {
    title: "Dados aplicados",
    text: "Experiência em SQL, indicadores, automação e modelagem para transformar processos operacionais em decisões confiáveis.",
  },
  {
    title: "Visão ponta a ponta",
    text: "Da identificação do problema ao desenho da regra de negócio, interface, persistência, deploy e melhoria contínua.",
  },
];

const plantCheckHighlights = [
  "Guia do Dia e Radar Inteligente",
  "Rega, adubação, luz e check-ups",
  "Saúde das plantas de 0 a 100",
  "Clima aplicado às recomendações",
  "Calendário e Central de Lembretes",
  "Galeria evolutiva e histórico",
  "Enciclopédia e diagnóstico visual",
  "Jogos, conquistas e Soletra Verde",
];

export default function Home() {
  return (
    <main className="portfolio-page">
      <PortfolioLightIntro />

      <div className="portfolio-orb portfolio-orb--blue" aria-hidden="true" />
      <div className="portfolio-orb portfolio-orb--green" aria-hidden="true" />

      <div className="portfolio-container">
        <nav className="portfolio-nav" aria-label="Navegação principal">
          <Link className="portfolio-brand" href="/">
            <span className="portfolio-brand-mark" aria-hidden="true">
              GG
            </span>
            <span>
              <strong>Portfólio</strong>
              <small>Dados, produtos e automação</small>
            </span>
          </Link>

          <div className="portfolio-nav-links">
            <Link href="/sobre">Sobre mim</Link>
            <a href="#plantacheck">PlantaCheck</a>
            <a href="#projetos">Projetos</a>
            <a href="#contato">Contato</a>
          </div>
        </nav>

        <header className="portfolio-hero">
          <div className="portfolio-hero-copy">
            <span className="eyebrow">Logística • Dados • Desenvolvimento de produtos</span>

            <h1>
              Transformo problemas operacionais em
              <span> dados confiáveis e produtos digitais.</span>
            </h1>

            <p className="portfolio-hero-lead">
              Minha trajetória foi construída em operações, logística,
              atendimento, indicadores e melhoria de processos. Hoje, conecto
              essa experiência ao desenvolvimento full-stack para criar
              automações, análises e aplicações com regras de negócio claras,
              experiência simples e utilidade real.
            </p>

            <div className="portfolio-actions">
              <a
                className="button button--primary"
                href="mailto:giovane.geromini_dev@outlook.com"
              >
                Falar comigo
              </a>
              <a
                className="button button--secondary"
                href="https://www.linkedin.com/in/giovanegeromini"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a
                className="button button--secondary"
                href="https://github.com/giovane-geromini"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>

            <div className="technology-row" aria-label="Tecnologias principais">
              {[
                "Next.js",
                "TypeScript",
                "SQL",
                "Power BI",
                "Supabase",
                "PostgreSQL",
              ].map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>
          </div>

          <ProfessionalProfileCard priority />
        </header>

        <section id="sobre" className="portfolio-section">
          <div className="section-heading">
            <span className="eyebrow">Como trabalho</span>
            <h2>Experiência operacional com mentalidade de produto.</h2>
            <p>
              A vivência em logística me ensinou a trabalhar com prazos,
              exceções, dados incompletos e decisões que precisam funcionar no
              mundo real. Essa base orienta a forma como estruturo dados,
              automações e aplicações digitais.
            </p>
            <Link className="text-link about-section-link" href="/sobre">
              Saiba mais sobre minha experiência, formação e competências →
            </Link>
          </div>

          <div className="strength-grid">
            {strengths.map((strength, index) => (
              <article className="glass-card" key={strength.title}>
                <span className="glass-card-index" aria-hidden="true">
                  0{index + 1}
                </span>
                <h3>{strength.title}</h3>
                <p>{strength.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="plantacheck" className="portfolio-section">
          <div className="plantacheck-feature">
            <div className="plantacheck-feature-copy">
              <div className="project-status-row">
                <span className="status-pill status-pill--green">
                  Projeto principal
                </span>
                <span className="status-pill">Beta funcional</span>
                <span className="status-pill">V5.20.11.5.1</span>
              </div>

              <span className="plantacheck-wordmark">PlantaCheck</span>
              <h2>Uma rotina de plantas transformada em produto digital.</h2>

              <p className="section-lead">
                PWA mobile-first que organiza plantas, interpreta histórico,
                clima e prioridades, e ajuda o usuário a decidir o que realmente
                precisa de atenção.
              </p>

              <p>
                O projeto evoluiu de um controle de regas para um ecossistema
                completo com casas compartilhadas, saúde, calendário,
                notificações, galeria evolutiva, aprendizado e gamificação.
              </p>

              <div className="feature-chip-grid">
                {plantCheckHighlights.map((highlight) => (
                  <span key={highlight}>{highlight}</span>
                ))}
              </div>

              <div className="plantacheck-explore-note">
                <span className="plantacheck-explore-icon" aria-hidden="true">
                  🌿
                </span>
                <div>
                  <strong>Case completo e navegável</strong>
                  <p>
                    A página dedicada apresenta a evolução do produto, decisões
                    técnicas, arquitetura e uma galeria interativa com as
                    principais telas dentro de um celular virtual.
                  </p>
                </div>
              </div>

              <div className="portfolio-actions">
                <a
                  className="button button--green"
                  href="https://plantacheck.com.br"
                  target="_blank"
                  rel="noreferrer"
                >
                  Abrir aplicação
                </a>

                <Link className="button button--secondary" href="/plantacheck">
                  Explorar case completo
                </Link>
              </div>

              <p className="private-repository-note">
                <span aria-hidden="true">🔒</span>
                Repositório privado. O portfólio apresenta o produto sem expor
                sua implementação integral.
              </p>
            </div>

            <div className="plantacheck-feature-phone">
              <PlantaCheckPhone
                slides={plantCheckHomepageSlides}
                compact
                title="Principais telas do PlantaCheck"
              />
            </div>
          </div>
        </section>

        <section className="portfolio-section">
          <div className="section-heading">
            <span className="eyebrow">Por trás do produto</span>
            <h2>Arquitetura, dados e experiência conectados.</h2>
          </div>

          <div className="capability-grid">
            <article className="glass-card glass-card--accent-blue">
              <h3>Arquitetura orientada a eventos</h3>
              <p>
                Regas, adubações, luz, check-ups e configurações formam uma
                linha do tempo que alimenta status, histórico e recomendações.
              </p>
            </article>

            <article className="glass-card glass-card--accent-green">
              <h3>Segurança por casa</h3>
              <p>
                Supabase Auth, PostgreSQL e Row Level Security isolam os dados
                de cada residência e dos seus membros.
              </p>
            </article>

            <article className="glass-card glass-card--accent-purple">
              <h3>Experiência mobile-first</h3>
              <p>
                Interface desenhada para uso diário no celular, instalada como
                PWA e validada em dispositivos reais.
              </p>
            </article>

            <article className="glass-card glass-card--accent-amber">
              <h3>Evolução contínua</h3>
              <p>
                Releases frequentes, changelog interno, tags, deploy e
                refinamentos orientados pelos problemas encontrados em uso.
              </p>
            </article>
          </div>
        </section>

        <section className="portfolio-section">
          <div className="section-heading">
            <span className="eyebrow">Dados & automação</span>
            <h2>Soluções que também nascem da operação.</h2>
          </div>

          <div className="data-panel">
            <article>
              <h3>Indicadores e confiabilidade</h3>
              <p>
                Construção e validação de bases, análises de SLA e OTD,
                acompanhamento de entregas e consolidação de dados para decisões
                gerenciais.
              </p>
            </article>

            <article>
              <h3>Automação de rotinas</h3>
              <p>
                Excel avançado, Power Query, SQL e Power BI aplicados à redução
                de tarefas manuais, padronização e rastreabilidade.
              </p>
            </article>

            <article>
              <h3>Transição para tecnologia</h3>
              <p>
                Desenvolvimento de aplicações próprias para consolidar
                back-end, modelagem, APIs, autenticação e experiência de
                produto.
              </p>
            </article>
          </div>
        </section>

        <section id="projetos" className="portfolio-section">
          <div className="section-heading">
            <span className="eyebrow">Outros projetos</span>
            <h2>Produtos e experiências em evolução.</h2>
          </div>

          <div className="project-grid project-grid--compact">
            <article className="project-card">
              <span className="status-pill">Produto próprio</span>
              <h3>Jornada Gamer</h3>
              <p>
                Aplicação em evolução para organizar histórico, progresso,
                análises e consultas sobre jogos.
              </p>
              <span className="muted-link">Em desenvolvimento</span>
            </article>

            <article className="project-card">
              <span className="status-pill">Este site</span>
              <h3>Portfólio</h3>
              <p>
                Experiência autoral para centralizar projetos, narrativa
                profissional e evolução técnica.
              </p>
              <a className="text-link" href="#contato">
                Entrar em contato →
              </a>
            </article>
          </div>
        </section>

        <section id="contato" className="portfolio-contact">
          <div>
            <span className="eyebrow">Contato</span>
            <h2>Vamos conversar sobre dados, operações ou produtos digitais.</h2>
          </div>

          <a
            className="button button--primary"
            href="mailto:giovane.geromini_dev@outlook.com"
          >
            Enviar e-mail
          </a>
        </section>

        <footer className="portfolio-footer">
          <span>© {new Date().getFullYear()} Giovane Geromini</span>
          <span>Next.js • TypeScript • Vercel</span>
        </footer>
      </div>
    </main>
  );
}
