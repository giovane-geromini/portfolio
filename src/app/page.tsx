import Link from "next/link";

export default function Home() {
  const plantacheckDemoUrl = "";
  const hasPlantacheckDemo = Boolean(plantacheckDemoUrl);

  return (
    <main style={styles.page}>
      <div style={styles.container}>
        {/* Header */}
        <header style={styles.header}>
          <div style={styles.avatar} aria-hidden />
          <div style={styles.headerText}>
            <h1 style={styles.h1}>Giovane Geromini</h1>
            <p style={styles.subtitle}>
              Analista de Logística e Dados | BI e Automação | SQL |
              Desenvolvimento de Soluções | Pós em Engenharia de Dados
            </p>
            <div style={styles.badges}>
              <span style={styles.badge}>Next.js</span>
              <span style={styles.badge}>TypeScript</span>
              <span style={styles.badge}>SQL</span>
              <span style={styles.badge}>Power BI</span>
              <span style={styles.badge}>Supabase</span>
            </div>
          </div>
        </header>

        {/* CTA */}
        <section style={styles.ctaRow}>
          <a
            style={styles.primaryBtn}
            href="mailto:giovane.geromini@hotmail.com"
          >
            Falar comigo
          </a>
          <a
            style={styles.secondaryBtn}
            href="https://www.linkedin.com/in/giovanegeromini"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            style={styles.secondaryBtn}
            href="https://github.com/giovane-geromini"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </section>

        {/* Sobre */}
        <section style={styles.section}>
          <h2 style={styles.h2}>Sobre</h2>
          <p style={styles.p}>
            Sou analista com atuação orientada a dados e operações, em transição
            para desenvolvimento de soluções front-end e back-end. Gosto de
            transformar problemas reais em produtos com regras de negócio
            claras, indicadores confiáveis, automações e interfaces simples.
          </p>
          <p style={styles.p}>
            Atualmente, aprofundo conhecimentos em Engenharia de Dados, SQL,
            modelagem, ETL e desenvolvimento web, criando projetos próprios do
            zero ao deploy para fortalecer minha transição de carreira.
          </p>
        </section>

        {/* Projeto principal */}
        <section style={styles.section}>
          <div style={styles.featuredWrap}>
            <div style={styles.featuredIntro}>
              <div style={styles.featuredTop}>
                <span style={styles.featuredLabel}>Projeto principal</span>
                <span style={styles.featuredStatus}>Em evolução</span>
              </div>

              <h2 style={styles.featuredTitle}>PlantaCheck</h2>

              <p style={styles.featuredSubtitle}>
                Plataforma web para controle inteligente de cuidados com plantas,
                com foco em organização doméstica, eventos de rega e sol,
                status calculado automaticamente e experiência mobile-first.
              </p>

              <p style={styles.p}>
                O PlantaCheck é meu principal projeto autoral. Foi pensado como
                um produto real, com visão SaaS, regras de negócio próprias,
                arquitetura evolutiva e foco em usabilidade. A aplicação já
                contempla fluxo de login, dashboard com priorização visual,
                ações em lote, cadastro rápido e estrutura preparada para
                evolução como PWA.
              </p>

              <div style={styles.stackWrap}>
                <span style={styles.stackTitle}>Stack:</span>
                <div style={styles.stackBadges}>
                  <span style={styles.badge}>Next.js</span>
                  <span style={styles.badge}>TypeScript</span>
                  <span style={styles.badge}>Tailwind CSS</span>
                  <span style={styles.badge}>Supabase</span>
                  <span style={styles.badge}>PostgreSQL</span>
                  <span style={styles.badge}>PWA</span>
                  <span style={styles.badge}>Vercel</span>
                </div>
              </div>

              <div style={styles.featuredButtons}>
                <a
                  style={styles.primaryBtn}
                  href="https://github.com/giovane-geromini/plantacheck"
                  target="_blank"
                  rel="noreferrer"
                >
                  Ver repositório
                </a>

                {hasPlantacheckDemo ? (
                  <a
                    style={styles.secondaryBtn}
                    href={plantacheckDemoUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Abrir demo
                  </a>
                ) : (
                  <span style={styles.disabledBtn}>Demo em breve</span>
                )}
              </div>
            </div>

            <div style={styles.shotsGrid}>
              <figure style={styles.shotCard}>
                <img
                  src="/projects/plantacheck-login.png"
                  alt="Tela de login do PlantaCheck"
                  style={styles.shotImage}
                />
                <figcaption style={styles.shotCaption}>
                  Login com senha e primeiro acesso por link.
                </figcaption>
              </figure>

              <figure style={styles.shotCard}>
                <img
                  src="/projects/plantacheck-cadastro.png"
                  alt="Tela de cadastro rápido de plantas do PlantaCheck"
                  style={styles.shotImage}
                />
                <figcaption style={styles.shotCaption}>
                  Cadastro rápido com dados de rega e sol.
                </figcaption>
              </figure>

              <figure style={styles.shotCardWide}>
                <img
                  src="/projects/plantacheck-dashboard.png"
                  alt="Dashboard do PlantaCheck com status e ações em lote"
                  style={styles.shotImage}
                />
                <figcaption style={styles.shotCaption}>
                  Dashboard com filtros, status calculado e ações em lote.
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* Projetos */}
        <section style={styles.section}>
          <h2 style={styles.h2}>Outros projetos</h2>

          <div style={styles.grid}>
            <article style={styles.card}>
              <div style={styles.cardTop}>
                <h3 style={styles.h3}>SLA Calculator</h3>
                <span style={styles.tag}>Mini app</span>
              </div>
              <p style={styles.p}>
                Calculadora de SLA para apoio operacional e análise rápida de
                prazos, criada com foco em produtividade e aplicação prática no
                contexto logístico.
              </p>
              <div style={styles.cardLinks}>
                <a
                  style={styles.cardBtn}
                  href="https://github.com/giovane-geromini/sla-calculator"
                  target="_blank"
                  rel="noreferrer"
                >
                  Repo
                </a>
              </div>
            </article>

            <article style={styles.card}>
              <div style={styles.cardTop}>
                <h3 style={styles.h3}>Portfólio (este site)</h3>
                <span style={styles.tag}>MVP</span>
              </div>
              <p style={styles.p}>
                Site pessoal criado para centralizar minha apresentação
                profissional, projetos, links e evolução técnica com deploy na
                Vercel e SEO básico.
              </p>
              <div style={styles.cardLinks}>
                <Link style={styles.cardBtn} href="#roadmap">
                  Roadmap
                </Link>
              </div>
            </article>
          </div>
        </section>

        {/* Roadmap */}
        <section id="roadmap" style={styles.section}>
          <h2 style={styles.h2}>Roadmap</h2>
          <ul style={styles.ul}>
            <li style={styles.li}>✅ MVP online com domínio na Vercel</li>
            <li style={styles.li}>✅ SEO básico com metadata, robots e sitemap</li>
            <li style={styles.li}>
              ✅ Destaque principal do PlantaCheck com screenshots
            </li>
            <li style={styles.li}>
              🔜 Publicar demo pública do PlantaCheck
            </li>
            <li style={styles.li}>
              🔜 Adicionar seção técnica com arquitetura e decisões do projeto
            </li>
            <li style={styles.li}>
              🔜 Criar página dedicada para projetos
            </li>
          </ul>
        </section>

        {/* Footer */}
        <footer style={styles.footer}>
          <span>© {new Date().getFullYear()} Giovane Geromini</span>
          <span style={styles.dot}>•</span>
          <span>Feito com Next.js</span>
        </footer>
      </div>
    </main>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: "100vh",
    background:
      "radial-gradient(1200px 600px at 20% 10%, rgba(59,130,246,0.18), transparent 60%), radial-gradient(900px 500px at 80% 20%, rgba(34,197,94,0.16), transparent 55%), #0b1020",
    color: "#e5e7eb",
    padding: "48px 16px",
    fontFamily:
      "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial",
  },
  container: {
    maxWidth: 1080,
    margin: "0 auto",
  },
  header: {
    display: "flex",
    gap: 18,
    alignItems: "center",
    padding: 18,
    border: "1px solid rgba(255,255,255,0.10)",
    borderRadius: 16,
    background: "rgba(255,255,255,0.04)",
    backdropFilter: "blur(10px)",
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 16,
    border: "1px solid rgba(255,255,255,0.18)",
    background:
      "linear-gradient(135deg, rgba(59,130,246,0.9), rgba(34,197,94,0.85))",
    boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
    flex: "0 0 auto",
  },
  headerText: {
    flex: 1,
  },
  h1: {
    fontSize: 32,
    margin: 0,
    lineHeight: 1.1,
    letterSpacing: -0.6,
  },
  subtitle: {
    margin: "10px 0 0 0",
    opacity: 0.9,
    lineHeight: 1.4,
  },
  badges: {
    display: "flex",
    flexWrap: "wrap",
    gap: 8,
    marginTop: 12,
  },
  badge: {
    fontSize: 12,
    padding: "6px 10px",
    borderRadius: 999,
    border: "1px solid rgba(255,255,255,0.12)",
    background: "rgba(255,255,255,0.04)",
  },
  ctaRow: {
    display: "flex",
    flexWrap: "wrap",
    gap: 10,
    marginTop: 14,
  },
  primaryBtn: {
    padding: "10px 14px",
    borderRadius: 12,
    background: "rgba(59,130,246,0.95)",
    color: "#0b1020",
    fontWeight: 700,
    textDecoration: "none",
    border: "1px solid rgba(255,255,255,0.12)",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
  },
  secondaryBtn: {
    padding: "10px 14px",
    borderRadius: 12,
    background: "rgba(255,255,255,0.06)",
    color: "#e5e7eb",
    fontWeight: 600,
    textDecoration: "none",
    border: "1px solid rgba(255,255,255,0.10)",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
  },
  disabledBtn: {
    padding: "10px 14px",
    borderRadius: 12,
    background: "rgba(255,255,255,0.03)",
    color: "rgba(229,231,235,0.65)",
    fontWeight: 600,
    textDecoration: "none",
    border: "1px solid rgba(255,255,255,0.08)",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "not-allowed",
  },
  section: {
    marginTop: 28,
  },
  h2: {
    fontSize: 22,
    margin: "0 0 12px 0",
    letterSpacing: -0.3,
  },
  p: {
    margin: "0 0 10px 0",
    opacity: 0.92,
    lineHeight: 1.7,
  },
  featuredWrap: {
    display: "grid",
    gridTemplateColumns: "1.1fr 0.9fr",
    gap: 18,
    padding: 18,
    borderRadius: 18,
    border: "1px solid rgba(255,255,255,0.10)",
    background: "rgba(255,255,255,0.04)",
  },
  featuredIntro: {
    minWidth: 0,
  },
  featuredTop: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
    flexWrap: "wrap",
    marginBottom: 10,
  },
  featuredLabel: {
    fontSize: 12,
    padding: "6px 10px",
    borderRadius: 999,
    background: "rgba(34,197,94,0.12)",
    border: "1px solid rgba(34,197,94,0.28)",
    color: "#bbf7d0",
    fontWeight: 700,
  },
  featuredStatus: {
    fontSize: 12,
    padding: "6px 10px",
    borderRadius: 999,
    border: "1px solid rgba(255,255,255,0.12)",
    background: "rgba(255,255,255,0.04)",
    color: "#e5e7eb",
    fontWeight: 600,
  },
  featuredTitle: {
    margin: "0 0 10px 0",
    fontSize: 32,
    lineHeight: 1.1,
    letterSpacing: -0.6,
  },
  featuredSubtitle: {
    margin: "0 0 14px 0",
    fontSize: 17,
    lineHeight: 1.65,
    color: "#d1d5db",
  },
  stackWrap: {
    marginTop: 14,
  },
  stackTitle: {
    display: "inline-block",
    marginBottom: 10,
    fontWeight: 700,
    color: "#f3f4f6",
  },
  stackBadges: {
    display: "flex",
    flexWrap: "wrap",
    gap: 8,
  },
  featuredButtons: {
    display: "flex",
    flexWrap: "wrap",
    gap: 10,
    marginTop: 18,
  },
  shotsGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 12,
    alignContent: "start",
  },
  shotCard: {
    margin: 0,
    padding: 10,
    borderRadius: 16,
    border: "1px solid rgba(255,255,255,0.10)",
    background: "rgba(255,255,255,0.03)",
  },
  shotCardWide: {
    margin: 0,
    padding: 10,
    borderRadius: 16,
    border: "1px solid rgba(255,255,255,0.10)",
    background: "rgba(255,255,255,0.03)",
    gridColumn: "1 / -1",
  },
  shotImage: {
    width: "100%",
    height: "auto",
    display: "block",
    borderRadius: 12,
    border: "1px solid rgba(255,255,255,0.08)",
  },
  shotCaption: {
    marginTop: 8,
    fontSize: 13,
    lineHeight: 1.5,
    color: "#cbd5e1",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: 12,
    marginTop: 10,
  },
  card: {
    padding: 16,
    borderRadius: 16,
    border: "1px solid rgba(255,255,255,0.10)",
    background: "rgba(255,255,255,0.04)",
  },
  cardTop: {
    display: "flex",
    justifyContent: "space-between",
    gap: 10,
    alignItems: "center",
  },
  h3: {
    margin: 0,
    fontSize: 16,
    letterSpacing: -0.2,
  },
  tag: {
    fontSize: 12,
    padding: "6px 10px",
    borderRadius: 999,
    border: "1px solid rgba(255,255,255,0.12)",
    background: "rgba(255,255,255,0.04)",
    opacity: 0.95,
    whiteSpace: "nowrap",
  },
  cardLinks: {
    display: "flex",
    gap: 8,
    marginTop: 12,
  },
  cardBtn: {
    padding: "8px 10px",
    borderRadius: 12,
    background: "rgba(255,255,255,0.06)",
    color: "#e5e7eb",
    fontWeight: 600,
    textDecoration: "none",
    border: "1px solid rgba(255,255,255,0.10)",
    fontSize: 13,
  },
  ul: {
    margin: 0,
    paddingLeft: 18,
    lineHeight: 1.9,
    opacity: 0.95,
  },
  li: {
    margin: 0,
  },
  footer: {
    marginTop: 34,
    paddingTop: 18,
    borderTop: "1px solid rgba(255,255,255,0.10)",
    display: "flex",
    gap: 10,
    justifyContent: "center",
    flexWrap: "wrap",
    opacity: 0.8,
  },
  dot: {
    opacity: 0.6,
  },
};