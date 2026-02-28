// src/app/page.tsx
import Link from "next/link";

export default function Home() {
  return (
    <main style={styles.page}>
      <div style={styles.container}>
        {/* Header */}
        <header style={styles.header}>
          <div style={styles.avatar} aria-hidden />
          <div style={styles.headerText}>
            <h1 style={styles.h1}>Giovane Geromini</h1>
            <p style={styles.subtitle}>
              Analista de Logística e Dados | BI e Automação | SQL | Desenvolvimento de Soluções | Pós em Engenharia de Dados
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
          <a style={styles.primaryBtn} href="mailto:giovane.geromini@hotmail.com">
            Falar comigo
          </a>
          <a style={styles.secondaryBtn} href="https://www.linkedin.com/in/giovanegeromini" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a style={styles.secondaryBtn} href="https://github.com/giovane-geromini" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </section>

        {/* Sobre */}
        <section style={styles.section}>
          <h2 style={styles.h2}>Sobre</h2>
          <p style={styles.p}>
            Sou analista com atuação orientada a dados e operações, em transição para desenvolvimento de soluções
            (front-end e back-end). Gosto de transformar problemas reais em produtos: indicadores confiáveis, automações
            e aplicações web com regras de negócio claras e interfaces simples.
          </p>
          <p style={styles.p}>
            Atualmente, aprofundo conhecimentos em Engenharia de Dados (SQL, modelagem, ETL) e desenvolvo projetos próprios
            do zero ao deploy.
          </p>
        </section>

        {/* Projetos */}
        <section style={styles.section}>
          <h2 style={styles.h2}>Projetos em destaque</h2>

          <div style={styles.grid}>
            <article style={styles.card}>
              <div style={styles.cardTop}>
                <h3 style={styles.h3}>PlantaCheck</h3>
                <span style={styles.tag}>Em evolução</span>
              </div>
              <p style={styles.p}>
                App web para controle inteligente de cuidados com plantas: casas compartilhadas, ambientes, eventos de rega/sol
                e status calculado automaticamente.
              </p>
              <div style={styles.cardLinks}>
                <a style={styles.cardBtn} href="https://github.com/giovane-geromini/plantacheck" target="_blank" rel="noreferrer">
                  Repo
                </a>
              </div>
            </article>

            <article style={styles.card}>
              <div style={styles.cardTop}>
                <h3 style={styles.h3}>SLA Calculator</h3>
                <span style={styles.tag}>Mini app</span>
              </div>
              <p style={styles.p}>
                Calculadora de SLA para apoio operacional e análise rápida de prazos.
              </p>
              <div style={styles.cardLinks}>
                <a style={styles.cardBtn} href="https://github.com/giovane-geromini/sla-calculator" target="_blank" rel="noreferrer">
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
                Site simples e direto para centralizar projetos, links e evolução.
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
            <li style={styles.li}>✅ MVP: página única com links e projetos</li>
            <li style={styles.li}>🔜 SEO básico (title/description/OG)</li>
            <li style={styles.li}>🔜 Seção detalhada do PlantaCheck (prints + arquitetura)</li>
            <li style={styles.li}>🔜 Deploy na Vercel + domínio (opcional)</li>
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
    background: "radial-gradient(1200px 600px at 20% 10%, rgba(59,130,246,0.18), transparent 60%), radial-gradient(900px 500px at 80% 20%, rgba(34,197,94,0.16), transparent 55%), #0b1020",
    color: "#e5e7eb",
    padding: "48px 16px",
    fontFamily: "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial",
  },
  container: { maxWidth: 980, margin: "0 auto" },
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
  headerText: { flex: 1 },
  h1: { fontSize: 32, margin: 0, lineHeight: 1.1, letterSpacing: -0.6 },
  subtitle: { margin: "10px 0 0 0", opacity: 0.9, lineHeight: 1.4 },
  badges: { display: "flex", flexWrap: "wrap", gap: 8, marginTop: 12 },
  badge: {
    fontSize: 12,
    padding: "6px 10px",
    borderRadius: 999,
    border: "1px solid rgba(255,255,255,0.12)",
    background: "rgba(255,255,255,0.04)",
  },
  ctaRow: { display: "flex", flexWrap: "wrap", gap: 10, marginTop: 14 },
  primaryBtn: {
    padding: "10px 14px",
    borderRadius: 12,
    background: "rgba(59,130,246,0.95)",
    color: "#0b1020",
    fontWeight: 700,
    textDecoration: "none",
    border: "1px solid rgba(255,255,255,0.12)",
  },
  secondaryBtn: {
    padding: "10px 14px",
    borderRadius: 12,
    background: "rgba(255,255,255,0.06)",
    color: "#e5e7eb",
    fontWeight: 600,
    textDecoration: "none",
    border: "1px solid rgba(255,255,255,0.10)",
  },
  section: { marginTop: 28 },
  h2: { fontSize: 18, margin: "0 0 10px 0", letterSpacing: -0.2 },
  p: { margin: "0 0 10px 0", opacity: 0.92, lineHeight: 1.6 },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: 12,
    marginTop: 10,
  },
  card: {
    padding: 16,
    borderRadius: 16,
    border: "1px solid rgba(255,255,255,0.10)",
    background: "rgba(255,255,255,0.04)",
  },
  cardTop: { display: "flex", justifyContent: "space-between", gap: 10, alignItems: "center" },
  h3: { margin: 0, fontSize: 16, letterSpacing: -0.2 },
  tag: {
    fontSize: 12,
    padding: "6px 10px",
    borderRadius: 999,
    border: "1px solid rgba(255,255,255,0.12)",
    background: "rgba(255,255,255,0.04)",
    opacity: 0.95,
    whiteSpace: "nowrap",
  },
  cardLinks: { display: "flex", gap: 8, marginTop: 12 },
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
  ul: { margin: 0, paddingLeft: 18, lineHeight: 1.8, opacity: 0.95 },
  li: { margin: 0 },
  footer: {
    marginTop: 34,
    paddingTop: 18,
    borderTop: "1px solid rgba(255,255,255,0.10)",
    display: "flex",
    gap: 10,
    justifyContent: "center",
    opacity: 0.8,
  },
  dot: { opacity: 0.6 },
};