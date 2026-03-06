import Link from "next/link";

export default function PlantaCheckCasePage() {
  return (
    <main style={styles.page}>
      <div style={styles.container}>
        <section style={styles.hero}>
          <div style={styles.heroTop}>
            <span style={styles.badgePrimary}>Case técnico</span>
            <span style={styles.badgeSecondary}>Online e em evolução</span>
          </div>

          <h1 style={styles.h1}>PlantaCheck</h1>

          <p style={styles.subtitle}>
            Aplicação web autoral para controle inteligente de cuidados com
            plantas, com foco em organização doméstica, registro de eventos,
            cálculo automático de status e experiência mobile-first.
          </p>

          <div style={styles.heroButtons}>
            <a
              style={styles.primaryBtn}
              href="https://plantacheck.com.br"
              target="_blank"
              rel="noreferrer"
            >
              Abrir app
            </a>

            <a
              style={styles.secondaryBtn}
              href="https://github.com/giovane-geromini/plantacheck"
              target="_blank"
              rel="noreferrer"
            >
              Código no GitHub
            </a>

            <Link style={styles.secondaryBtn} href="/">
              Voltar ao portfólio
            </Link>
          </div>
        </section>

        <section style={styles.section}>
          <h2 style={styles.h2}>Visão do projeto</h2>
          <p style={styles.p}>
            O PlantaCheck nasceu como um projeto autoral para resolver um
            problema real do dia a dia: organizar cuidados com plantas de forma
            prática, visual e confiável. A proposta foi evoluir de um simples
            controle manual para uma aplicação web com regras de negócio,
            persistência de dados, autenticação e base preparada para expansão.
          </p>
          <p style={styles.p}>
            O projeto está funcional e publicado, mas segue em desenvolvimento
            contínuo. Hoje, ele já demonstra capacidade de modelagem de dados,
            construção de produto, deploy, integração com backend e evolução
            incremental orientada por uso real.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.h2}>Problema que o projeto resolve</h2>
          <div style={styles.grid2}>
            <article style={styles.card}>
              <h3 style={styles.h3}>Dor inicial</h3>
              <p style={styles.p}>
                Acompanhar rega, exposição ao sol e status das plantas de forma
                manual tende a gerar esquecimento, inconsistência e falta de
                visão geral, especialmente quando há várias plantas e mais de
                uma pessoa cuidando.
              </p>
            </article>

            <article style={styles.card}>
              <h3 style={styles.h3}>Solução proposta</h3>
              <p style={styles.p}>
                Centralizar o controle em uma aplicação web simples de usar, com
                cadastro rápido, eventos de cuidado, dashboard com prioridade
                visual e estrutura preparada para uso compartilhado dentro de
                uma casa.
              </p>
            </article>
          </div>
        </section>

        <section style={styles.section}>
          <h2 style={styles.h2}>Stack e arquitetura</h2>
          <div style={styles.grid4}>
            <article style={styles.card}>
              <h3 style={styles.h3}>Frontend</h3>
              <ul style={styles.list}>
                <li style={styles.listItem}>Next.js</li>
                <li style={styles.listItem}>TypeScript</li>
                <li style={styles.listItem}>Tailwind CSS</li>
                <li style={styles.listItem}>Abordagem mobile-first</li>
              </ul>
            </article>

            <article style={styles.card}>
              <h3 style={styles.h3}>Backend / Dados</h3>
              <ul style={styles.list}>
                <li style={styles.listItem}>Supabase</li>
                <li style={styles.listItem}>PostgreSQL</li>
                <li style={styles.listItem}>Autenticação</li>
                <li style={styles.listItem}>Persistência de eventos</li>
              </ul>
            </article>

            <article style={styles.card}>
              <h3 style={styles.h3}>Deploy</h3>
              <ul style={styles.list}>
                <li style={styles.listItem}>Vercel</li>
                <li style={styles.listItem}>Domínio próprio</li>
                <li style={styles.listItem}>Publicação contínua</li>
                <li style={styles.listItem}>Estrutura preparada para PWA</li>
              </ul>
            </article>

            <article style={styles.card}>
              <h3 style={styles.h3}>Abordagem técnica</h3>
              <ul style={styles.list}>
                <li style={styles.listItem}>Produto autoral</li>
                <li style={styles.listItem}>Regras de negócio centralizadas</li>
                <li style={styles.listItem}>Evolução incremental</li>
                <li style={styles.listItem}>Uso real como referência</li>
              </ul>
            </article>
          </div>
        </section>

        <section style={styles.section}>
          <h2 style={styles.h2}>Modelagem e lógica do sistema</h2>
          <div style={styles.grid2}>
            <article style={styles.card}>
              <h3 style={styles.h3}>Modelo orientado a eventos</h3>
              <p style={styles.p}>
                A lógica principal do PlantaCheck é baseada em eventos, como
                rega, exposição ao sol e ajustes de configuração. Isso permite
                que o status atual da planta seja derivado a partir do histórico
                de ações, em vez de depender apenas de campos estáticos.
              </p>
            </article>

            <article style={styles.card}>
              <h3 style={styles.h3}>Cálculo de status</h3>
              <p style={styles.p}>
                O dashboard prioriza plantas com base na próxima necessidade de
                cuidado, atraso e frequência cadastrada. Essa abordagem aproxima
                o projeto de uma lógica de produto real, com regras aplicadas ao
                dado e refletidas visualmente na interface.
              </p>
            </article>
          </div>
        </section>

        <section style={styles.section}>
          <h2 style={styles.h2}>Funcionalidades já implementadas</h2>
          <div style={styles.grid2}>
            <article style={styles.card}>
              <ul style={styles.list}>
                <li style={styles.listItem}>Login com autenticação</li>
                <li style={styles.listItem}>Primeiro acesso por link</li>
                <li style={styles.listItem}>Cadastro rápido de plantas</li>
                <li style={styles.listItem}>Controle de frequência de rega</li>
                <li style={styles.listItem}>Controle de frequência de sol</li>
              </ul>
            </article>

            <article style={styles.card}>
              <ul style={styles.list}>
                <li style={styles.listItem}>Dashboard com priorização visual</li>
                <li style={styles.listItem}>Ações em lote</li>
                <li style={styles.listItem}>Registro de eventos</li>
                <li style={styles.listItem}>Deploy em produção</li>
                <li style={styles.listItem}>Domínio próprio ativo</li>
              </ul>
            </article>
          </div>
        </section>

        <section style={styles.section}>
          <h2 style={styles.h2}>Screenshots do produto</h2>
          <div style={styles.shotsGrid}>
            <figure style={styles.shotCard}>
              <img
                src="/projects/plantacheck-login.png"
                alt="Tela de login do PlantaCheck"
                style={styles.shotImage}
              />
              <figcaption style={styles.shotCaption}>
                Tela de login com fluxo de acesso inicial e autenticação.
              </figcaption>
            </figure>

            <figure style={styles.shotCard}>
              <img
                src="/projects/plantacheck-cadastro.png"
                alt="Tela de cadastro de planta do PlantaCheck"
                style={styles.shotImage}
              />
              <figcaption style={styles.shotCaption}>
                Cadastro rápido com dados de rega e controle opcional de sol.
              </figcaption>
            </figure>

            <figure style={styles.shotCardWide}>
              <img
                src="/projects/plantacheck-dashboard.png"
                alt="Dashboard do PlantaCheck"
                style={styles.shotImage}
              />
              <figcaption style={styles.shotCaption}>
                Dashboard com filtros, status calculado e ações em lote.
              </figcaption>
            </figure>
          </div>
        </section>

        <section style={styles.section}>
          <h2 style={styles.h2}>Aprendizados técnicos</h2>
          <div style={styles.grid2}>
            <article style={styles.card}>
              <h3 style={styles.h3}>Produto + desenvolvimento</h3>
              <p style={styles.p}>
                O projeto exigiu pensar além do código: estrutura de uso,
                clareza na interface, priorização visual, fluxo de navegação e
                evolução de funcionalidades com base em necessidade real.
              </p>
            </article>

            <article style={styles.card}>
              <h3 style={styles.h3}>Dados + regras de negócio</h3>
              <p style={styles.p}>
                O PlantaCheck também consolidou minha prática em modelagem,
                persistência e interpretação de dados aplicados ao produto,
                aproximando desenvolvimento web e raciocínio orientado a dados.
              </p>
            </article>
          </div>
        </section>

        <section style={styles.section}>
          <h2 style={styles.h2}>Próximos evolutivos</h2>
          <div style={styles.card}>
            <ul style={styles.list}>
              <li style={styles.listItem}>Refinamentos visuais e de UX</li>
              <li style={styles.listItem}>Ajustes de regras de negócio</li>
              <li style={styles.listItem}>Melhorias de consistência de fluxo</li>
              <li style={styles.listItem}>Expansão gradual das funcionalidades</li>
              <li style={styles.listItem}>Evolução da camada de produto</li>
            </ul>
          </div>
        </section>
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
  hero: {
    padding: 22,
    borderRadius: 20,
    border: "1px solid rgba(255,255,255,0.10)",
    background: "rgba(255,255,255,0.04)",
    backdropFilter: "blur(10px)",
  },
  heroTop: {
    display: "flex",
    gap: 10,
    flexWrap: "wrap",
    marginBottom: 12,
  },
  badgePrimary: {
    fontSize: 12,
    padding: "6px 10px",
    borderRadius: 999,
    background: "rgba(34,197,94,0.12)",
    border: "1px solid rgba(34,197,94,0.28)",
    color: "#bbf7d0",
    fontWeight: 700,
  },
  badgeSecondary: {
    fontSize: 12,
    padding: "6px 10px",
    borderRadius: 999,
    border: "1px solid rgba(255,255,255,0.12)",
    background: "rgba(255,255,255,0.04)",
    color: "#e5e7eb",
    fontWeight: 600,
  },
  h1: {
    fontSize: 40,
    margin: "0 0 12px 0",
    lineHeight: 1.05,
    letterSpacing: -0.8,
  },
  h2: {
    fontSize: 26,
    margin: "0 0 14px 0",
    letterSpacing: -0.4,
  },
  h3: {
    margin: "0 0 10px 0",
    fontSize: 18,
    letterSpacing: -0.2,
  },
  subtitle: {
    margin: 0,
    fontSize: 18,
    lineHeight: 1.7,
    color: "#d1d5db",
    maxWidth: 860,
  },
  heroButtons: {
    display: "flex",
    flexWrap: "wrap",
    gap: 10,
    marginTop: 18,
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
  section: {
    marginTop: 30,
  },
  p: {
    margin: "0 0 10px 0",
    opacity: 0.94,
    lineHeight: 1.75,
    fontSize: 17,
  },
  grid2: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: 14,
  },
  grid4: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: 14,
  },
  card: {
    padding: 18,
    borderRadius: 18,
    border: "1px solid rgba(255,255,255,0.10)",
    background: "rgba(255,255,255,0.04)",
  },
  list: {
    margin: 0,
    paddingLeft: 18,
    lineHeight: 1.85,
    opacity: 0.96,
  },
  listItem: {
    margin: 0,
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
};