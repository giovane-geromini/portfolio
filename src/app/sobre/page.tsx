import Image from "next/image";
import Link from "next/link";
import { professionalProfile } from "../../data/professionalProfile";

export default function AboutPage() {
  const [logisticsEducation, dataEducation, webEducation] =
    professionalProfile.education;

  return (
    <main className="about-page">
      <style>{`
        :root {
          color-scheme: dark;
        }

        .about-page {
          min-height: 100vh;
          overflow: hidden;
          color: #f8fafc;
          background:
            radial-gradient(circle at 12% 8%, rgba(59,130,246,0.14), transparent 30%),
            radial-gradient(circle at 88% 18%, rgba(16,185,129,0.14), transparent 34%),
            linear-gradient(180deg, #07101f 0%, #030712 50%, #020617 100%);
          font-family:
            Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
            "Segoe UI", sans-serif;
        }

        .about-shell {
          width: min(1180px, calc(100% - 32px));
          margin: 0 auto;
          padding: 28px 0 56px;
        }

        .about-nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          padding: 14px 0 34px;
        }

        .about-brand {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          color: #f8fafc;
          text-decoration: none;
        }

        .about-brand-mark {
          width: 42px;
          height: 42px;
          display: grid;
          place-items: center;
          border-radius: 14px;
          border: 1px solid rgba(96,165,250,0.38);
          background:
            linear-gradient(145deg, rgba(59,130,246,0.28), rgba(16,185,129,0.22));
          font-size: 13px;
          font-weight: 900;
          letter-spacing: 0.12em;
          box-shadow: 0 14px 34px rgba(2,6,23,0.34);
        }

        .about-brand strong,
        .about-brand small {
          display: block;
        }

        .about-brand strong {
          font-size: 14px;
        }

        .about-brand small {
          margin-top: 2px;
          color: #94a3b8;
          font-size: 11px;
        }

        .about-nav-links {
          display: flex;
          align-items: center;
          gap: 20px;
          flex-wrap: wrap;
        }

        .about-nav-links a {
          color: #cbd5e1;
          text-decoration: none;
          font-size: 13px;
          font-weight: 700;
        }

        .about-nav-links a:hover {
          color: #7dd3fc;
        }

        .about-hero {
          display: grid;
          grid-template-columns: minmax(0, 1.28fr) minmax(300px, 0.72fr);
          gap: 34px;
          align-items: center;
          padding: 54px 0 64px;
        }

        .about-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: #7dd3fc;
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .about-eyebrow::before {
          content: "";
          width: 24px;
          height: 1px;
          background: currentColor;
          opacity: 0.8;
        }

        .about-hero h1 {
          max-width: 830px;
          margin: 22px 0 24px;
          font-size: clamp(46px, 7vw, 92px);
          line-height: 0.98;
          letter-spacing: -0.065em;
        }

        .about-hero h1 span {
          display: block;
          background: linear-gradient(90deg, #60a5fa, #67e8f9, #86efac);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          padding-bottom: 0.08em;
        }

        .about-hero-lead {
          max-width: 800px;
          margin: 0;
          color: #cbd5e1;
          font-size: clamp(17px, 2vw, 21px);
          line-height: 1.72;
        }

        .about-hero-summary {
          max-width: 760px;
          margin: 18px 0 0;
          color: #94a3b8;
          font-size: 15px;
          line-height: 1.75;
        }

        .about-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 26px;
        }

        .about-button {
          min-height: 44px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0 16px;
          border-radius: 12px;
          border: 1px solid rgba(148,163,184,0.2);
          color: #f8fafc;
          background: rgba(15,23,42,0.72);
          text-decoration: none;
          font-size: 13px;
          font-weight: 800;
          transition:
            transform 180ms ease,
            border-color 180ms ease,
            background 180ms ease;
        }

        .about-button:hover {
          transform: translateY(-2px);
          border-color: rgba(125,211,252,0.48);
          background: rgba(30,41,59,0.92);
        }

        .about-button--primary {
          color: #04111f;
          border-color: rgba(96,165,250,0.62);
          background: linear-gradient(135deg, #60a5fa, #67e8f9);
        }

        .about-profile-panel {
          position: relative;
          padding: 22px;
          border-radius: 30px;
          border: 1px solid rgba(148,163,184,0.18);
          background:
            linear-gradient(150deg, rgba(15,23,42,0.96), rgba(5,25,26,0.9));
          box-shadow:
            0 28px 80px rgba(2,6,23,0.52),
            inset 0 1px 0 rgba(255,255,255,0.05);
        }

        .about-photo-wrap {
          width: min(100%, 330px);
          aspect-ratio: 1;
          margin: 0 auto 22px;
          overflow: hidden;
          border-radius: 50%;
          background: #020617;
          box-shadow:
            0 20px 60px rgba(0,0,0,0.42),
            0 0 0 1px rgba(148,163,184,0.12);
        }

        .about-photo {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          object-position: center;
        }

        .about-profile-status {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #86efac;
          font-size: 12px;
          font-weight: 800;
        }

        .about-profile-status::before {
          content: "";
          width: 8px;
          height: 8px;
          border-radius: 999px;
          background: #4ade80;
          box-shadow: 0 0 18px rgba(74,222,128,0.78);
        }

        .about-profile-panel h2 {
          margin: 14px 0 6px;
          font-size: 31px;
          line-height: 1;
          letter-spacing: -0.04em;
        }

        .about-profile-role {
          margin: 0;
          color: #dbeafe;
          font-size: 14px;
          font-weight: 700;
        }

        .about-profile-location {
          margin: 8px 0 0;
          color: #94a3b8;
          font-size: 13px;
        }

        .about-facts {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 12px;
          margin: 0 0 68px;
        }

        .about-fact {
          min-height: 126px;
          padding: 18px;
          border-radius: 20px;
          border: 1px solid rgba(148,163,184,0.16);
          background: rgba(15,23,42,0.66);
        }

        .about-fact span,
        .about-fact strong {
          display: block;
        }

        .about-fact span {
          color: #7dd3fc;
          font-size: 11px;
          font-weight: 900;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .about-fact strong {
          margin-top: 12px;
          font-size: 17px;
          line-height: 1.4;
        }

        .about-section {
          padding: 34px 0 52px;
        }

        .about-section-heading {
          max-width: 760px;
          margin-bottom: 24px;
        }

        .about-section-heading h2 {
          margin: 14px 0 12px;
          font-size: clamp(34px, 5vw, 58px);
          line-height: 1.03;
          letter-spacing: -0.05em;
        }

        .about-section-heading p {
          margin: 0;
          color: #94a3b8;
          font-size: 16px;
          line-height: 1.75;
        }

        .about-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
        }

        .about-card {
          padding: 22px;
          border-radius: 22px;
          border: 1px solid rgba(148,163,184,0.16);
          background:
            linear-gradient(145deg, rgba(15,23,42,0.82), rgba(15,23,42,0.55));
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.035);
        }

        .about-card h3 {
          margin: 0 0 10px;
          font-size: 20px;
          letter-spacing: -0.025em;
        }

        .about-card p {
          margin: 0;
          color: #aebbd0;
          font-size: 14px;
          line-height: 1.72;
        }

        .about-education-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 14px;
        }

        .about-education-card {
          position: relative;
          padding: 22px;
          overflow: hidden;
          border-radius: 22px;
          border: 1px solid rgba(148,163,184,0.16);
          background: rgba(15,23,42,0.72);
        }

        .about-education-card::before {
          content: "";
          position: absolute;
          top: 0;
          right: 0;
          left: 0;
          height: 2px;
          background: linear-gradient(90deg, #60a5fa, #67e8f9, #4ade80);
        }

        .about-education-card span {
          color: #86efac;
          font-size: 11px;
          font-weight: 900;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .about-education-card h3 {
          margin: 12px 0 7px;
          font-size: 21px;
        }

        .about-education-card strong {
          display: block;
          margin-bottom: 10px;
          color: #dbeafe;
          font-size: 13px;
        }

        .about-education-card small {
          display: block;
          margin-bottom: 14px;
          color: #64748b;
          font-size: 12px;
        }

        .about-education-card p {
          margin: 0;
          color: #94a3b8;
          font-size: 13px;
          line-height: 1.65;
        }

        .about-timeline {
          display: grid;
          gap: 16px;
        }

        .about-experience {
          display: grid;
          grid-template-columns: 220px minmax(0, 1fr);
          gap: 24px;
          padding: 24px;
          border-radius: 24px;
          border: 1px solid rgba(148,163,184,0.16);
          background:
            linear-gradient(140deg, rgba(15,23,42,0.78), rgba(6,20,31,0.7));
        }

        .about-experience-meta strong,
        .about-experience-meta span,
        .about-experience-meta small {
          display: block;
        }

        .about-experience-meta strong {
          font-size: 17px;
          line-height: 1.35;
        }

        .about-experience-meta span {
          margin-top: 8px;
          color: #7dd3fc;
          font-size: 13px;
          font-weight: 800;
        }

        .about-experience-meta small {
          margin-top: 5px;
          color: #64748b;
          line-height: 1.5;
        }

        .about-experience-content h3 {
          margin: 0 0 10px;
          font-size: 22px;
          letter-spacing: -0.025em;
        }

        .about-experience-content > p {
          margin: 0;
          color: #cbd5e1;
          line-height: 1.72;
        }

        .about-experience-content ul {
          margin: 16px 0 0;
          padding-left: 18px;
          color: #94a3b8;
        }

        .about-experience-content li {
          margin: 7px 0;
          line-height: 1.6;
        }

        .about-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 18px;
        }

        .about-tags span {
          padding: 7px 10px;
          border-radius: 999px;
          border: 1px solid rgba(96,165,250,0.18);
          background: rgba(30,41,59,0.74);
          color: #dbeafe;
          font-size: 11px;
          font-weight: 700;
        }

        .about-cert-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 14px;
        }

        .about-cert-card {
          padding: 20px;
          border-radius: 20px;
          border: 1px solid rgba(148,163,184,0.16);
          background: rgba(15,23,42,0.7);
        }

        .about-cert-card span {
          color: #86efac;
          font-size: 11px;
          font-weight: 800;
        }

        .about-cert-card h3 {
          margin: 12px 0 7px;
          font-size: 18px;
        }

        .about-cert-card strong {
          color: #cbd5e1;
          font-size: 13px;
        }

        .about-cert-card p {
          margin: 12px 0 0;
          color: #94a3b8;
          font-size: 13px;
          line-height: 1.65;
        }

        .about-skill-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
        }

        .about-skill-card {
          padding: 22px;
          border-radius: 22px;
          border: 1px solid rgba(148,163,184,0.16);
          background: rgba(15,23,42,0.68);
        }

        .about-skill-card h3 {
          margin: 0;
          font-size: 19px;
        }

        .about-skill-card > p {
          margin: 9px 0 0;
          color: #94a3b8;
          font-size: 13px;
          line-height: 1.6;
        }

        .about-contact {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 28px;
          margin-top: 28px;
          padding: 30px;
          border-radius: 28px;
          border: 1px solid rgba(96,165,250,0.2);
          background:
            radial-gradient(circle at 92% 18%, rgba(59,130,246,0.2), transparent 34%),
            linear-gradient(140deg, rgba(15,23,42,0.94), rgba(8,23,40,0.9));
        }

        .about-contact h2 {
          max-width: 760px;
          margin: 12px 0 0;
          font-size: clamp(32px, 5vw, 58px);
          line-height: 1.04;
          letter-spacing: -0.05em;
        }

        .about-footer {
          display: flex;
          justify-content: space-between;
          gap: 16px;
          flex-wrap: wrap;
          margin-top: 36px;
          padding-top: 20px;
          border-top: 1px solid rgba(148,163,184,0.14);
          color: #64748b;
          font-size: 12px;
        }

        @media (max-width: 960px) {
          .about-hero {
            grid-template-columns: 1fr;
          }

          .about-profile-panel {
            max-width: 520px;
          }

          .about-facts,
          .about-education-grid,
          .about-cert-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .about-experience {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 680px) {
          .about-shell {
            width: min(100% - 22px, 1180px);
            padding-top: 16px;
          }

          .about-nav {
            align-items: flex-start;
            padding-bottom: 18px;
          }

          .about-nav-links {
            justify-content: flex-end;
            gap: 12px;
          }

          .about-nav-links a:nth-child(2) {
            display: none;
          }

          .about-hero {
            padding: 34px 0 44px;
          }

          .about-hero h1 {
            font-size: clamp(45px, 16vw, 68px);
          }

          .about-facts,
          .about-grid,
          .about-education-grid,
          .about-cert-grid,
          .about-skill-grid {
            grid-template-columns: 1fr;
          }

          .about-contact {
            align-items: flex-start;
            flex-direction: column;
          }
        }
      `}</style>

      <div className="about-shell">
        <nav className="about-nav" aria-label="Navegação da página sobre">
          <Link className="about-brand" href="/">
            <span className="about-brand-mark" aria-hidden="true">
              GG
            </span>
            <span>
              <strong>Giovane Geromini</strong>
              <small>Voltar ao portfólio</small>
            </span>
          </Link>

          <div className="about-nav-links">
            <Link href="/">Início</Link>
            <Link href="/plantacheck">PlantaCheck</Link>
            <a href="#experiencia">Experiência</a>
            <a href="#competencias">Competências</a>
          </div>
        </nav>

        <header className="about-hero">
          <div>
            <span className="about-eyebrow">Sobre mim</span>
            <h1>
              Operação, dados e tecnologia
              <span>conectados pela experiência.</span>
            </h1>

            <p className="about-hero-lead">{professionalProfile.headline}</p>

            <p className="about-hero-summary">
              {professionalProfile.summary} Minha abordagem parte de uma
              premissa simples: {professionalProfile.approach.toLowerCase()}
            </p>

            <div className="about-actions">
              <a
                className="about-button about-button--primary"
                href={`mailto:${professionalProfile.email}`}
              >
                Falar comigo
              </a>
              <a
                className="about-button"
                href={professionalProfile.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a
                className="about-button"
                href={professionalProfile.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <Link className="about-button" href="/">
                Voltar ao portfólio
              </Link>
            </div>
          </div>

          <aside className="about-profile-panel">
            <div className="about-photo-wrap">
              <Image
                className="about-photo"
                src={professionalProfile.image}
                alt={`Foto profissional de ${professionalProfile.name}`}
                width={720}
                height={720}
                priority
                sizes="(max-width: 680px) 80vw, 330px"
              />
            </div>

            <span className="about-profile-status">
              {professionalProfile.availability}
            </span>
            <h2>{professionalProfile.name}</h2>
            <p className="about-profile-role">{professionalProfile.role}</p>
            <p className="about-profile-location">
              {professionalProfile.location}
            </p>
          </aside>
        </header>

        <section className="about-facts" aria-label="Resumo profissional">
          <article className="about-fact">
            <span>Atuação atual</span>
            <strong>Analista de Logística Pleno</strong>
          </article>
          <article className="about-fact">
            <span>Formação</span>
            <strong>{logisticsEducation.course}</strong>
          </article>
          <article className="about-fact">
            <span>Especialização</span>
            <strong>{dataEducation.course}</strong>
          </article>
          <article className="about-fact">
            <span>Em andamento</span>
            <strong>{webEducation.course}</strong>
          </article>
        </section>

        <section className="about-section">
          <div className="about-section-heading">
            <span className="about-eyebrow">Perfil profissional</span>
            <h2>Experiência prática antes, durante e depois do dado.</h2>
            <p>
              Minha trajetória reúne atendimento, controle operacional,
              logística, indicadores, automação e desenvolvimento de produtos.
              Isso me permite compreender o processo real antes de propor uma
              solução técnica.
            </p>
          </div>

          <div className="about-grid">
            <article className="about-card">
              <h3>Problemas reais como ponto de partida</h3>
              <p>
                Trabalho com cenários em que existem prazos, exceções,
                dependências entre áreas, dados incompletos e necessidade de
                resposta rápida. Essa vivência orienta soluções mais objetivas
                e aplicáveis.
              </p>
            </article>

            <article className="about-card">
              <h3>Visão orientada a produto</h3>
              <p>
                Procuro conectar regra de negócio, modelagem, interface,
                persistência e acompanhamento em produção, evitando tratar
                desenvolvimento como uma etapa isolada do processo.
              </p>
            </article>
          </div>
        </section>

        <section className="about-section">
          <div className="about-section-heading">
            <span className="about-eyebrow">Formação</span>
            <h2>Base acadêmica conectada ao que construo.</h2>
          </div>

          <div className="about-education-grid">
            {professionalProfile.education.map((education) => (
              <article className="about-education-card" key={education.course}>
                <span>{education.status}</span>
                <h3>{education.course}</h3>
                <strong>{education.institution}</strong>
                <small>{education.period}</small>
                <p>{education.details}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="experiencia" className="about-section">
          <div className="about-section-heading">
            <span className="about-eyebrow">Experiência</span>
            <h2>Uma trajetória construída em operações e evolução contínua.</h2>
            <p>
              As experiências abaixo destacam os pontos mais diretamente
              relacionados à análise, confiabilidade operacional, dados e
              melhoria de processos.
            </p>
          </div>

          <div className="about-timeline">
            {professionalProfile.experiences.map((experience) => (
              <article
                className="about-experience"
                key={`${experience.company}-${experience.role}`}
              >
                <div className="about-experience-meta">
                  <strong>{experience.company}</strong>
                  <span>{experience.period}</span>
                  <small>{experience.location}</small>
                </div>

                <div className="about-experience-content">
                  <h3>{experience.role}</h3>
                  <p>{experience.summary}</p>

                  <ul>
                    {experience.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>

                  {experience.technologies?.length ? (
                    <div className="about-tags">
                      {experience.technologies.map((technology) => (
                        <span key={technology}>{technology}</span>
                      ))}
                    </div>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="about-section">
          <div className="about-section-heading">
            <span className="about-eyebrow">Certificações</span>
            <h2>Conhecimentos complementares e validações.</h2>
          </div>

          <div className="about-cert-grid">
            {professionalProfile.certifications.map((certification) => (
              <article className="about-cert-card" key={certification.title}>
                <span>{certification.issuedAt}</span>
                <h3>{certification.title}</h3>
                <strong>{certification.issuer}</strong>
                <p>{certification.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="competencias" className="about-section">
          <div className="about-section-heading">
            <span className="about-eyebrow">Competências</span>
            <h2>Tecnologia, dados e operação no mesmo repertório.</h2>
            <p>
              As competências foram organizadas por contexto de aplicação para
              facilitar a leitura do meu perfil profissional e técnico.
            </p>
          </div>

          <div className="about-skill-grid">
            {professionalProfile.skillGroups.map((group) => (
              <article className="about-skill-card" key={group.title}>
                <h3>{group.title}</h3>
                <p>{group.description}</p>
                <div className="about-tags">
                  {group.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="about-contact">
          <div>
            <span className="about-eyebrow">Contato</span>
            <h2>
              Vamos conversar sobre dados, logística, automação ou produtos
              digitais.
            </h2>
          </div>

          <a
            className="about-button about-button--primary"
            href={`mailto:${professionalProfile.email}`}
          >
            Enviar e-mail
          </a>
        </section>

        <footer className="about-footer">
          <span>© {new Date().getFullYear()} Giovane Geromini</span>
          <span>Next.js • TypeScript • Vercel</span>
        </footer>
      </div>
    </main>
  );
}
