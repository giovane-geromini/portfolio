import Link from "next/link";
import PlantaCheckPhone from "./PlantaCheckPhone";
import { plantCheckHomepageSlides } from "../data/plantaCheckGallery";
import styles from "./PlantaCheckHomeFeature.module.css";

const highlights = [
  "Guia do Dia e Radar Inteligente",
  "Rega, adubação, luz e check-ups",
  "Saúde das plantas de 0 a 100",
  "Clima aplicado às recomendações",
  "Calendário e Central de Lembretes",
  "Galeria evolutiva e histórico",
  "Enciclopédia e diagnóstico visual",
  "Jogos, conquistas e Soletra Verde",
];

const caseContents = [
  {
    label: "Produto",
    value: "Problema, proposta e módulos conectados",
  },
  {
    label: "Arquitetura",
    value: "Next.js, Supabase, PostgreSQL e segurança",
  },
  {
    label: "Experiência",
    value: "Galeria navegável com as principais telas",
  },
  {
    label: "Evolução",
    value: "Decisões técnicas, aprendizados e releases",
  },
];

function BotanicalCircuit() {
  return (
    <svg
      className={styles.botanicalCircuit}
      viewBox="0 0 620 520"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M110 470C155 405 182 345 191 284C202 210 185 152 214 93"
        className={styles.stem}
      />
      <path
        d="M191 285C146 266 114 231 101 191C149 188 183 211 201 251"
        className={styles.leaf}
      />
      <path
        d="M206 163C242 129 284 116 325 126C305 171 267 192 218 186"
        className={styles.leaf}
      />
      <path
        d="M155 383C115 376 83 352 64 316C104 302 142 316 172 350"
        className={styles.leaf}
      />

      <path d="M313 112H404V176H474" className={styles.circuit} />
      <path d="M333 248H432V315H523" className={styles.circuit} />
      <path d="M286 382H388V433H482" className={styles.circuit} />
      <circle cx="404" cy="112" r="5" className={styles.node} />
      <circle cx="474" cy="176" r="5" className={styles.node} />
      <circle cx="432" cy="248" r="5" className={styles.node} />
      <circle cx="523" cy="315" r="5" className={styles.node} />
      <circle cx="388" cy="382" r="5" className={styles.node} />
      <circle cx="482" cy="433" r="5" className={styles.node} />
    </svg>
  );
}

export default function PlantaCheckHomeFeature() {
  return (
    <section id="plantacheck" className="portfolio-section">
      <div className={styles.feature}>
        <BotanicalCircuit />

        <div className={styles.copy}>
          <div className={styles.statusRow}>
            <span className={styles.statusPrimary}>Projeto principal</span>
            <span className={styles.status}>Beta em produção</span>
            <span className={styles.status}>V5.20.11.5.1</span>
          </div>

          <span className={styles.wordmark}>PlantaCheck</span>

          <h2 className={styles.title}>
            Uma rotina de plantas transformada em produto digital.
          </h2>

          <p className={styles.lead}>
            PWA mobile-first que combina histórico, clima, saúde, prioridades e
            regras de negócio para ajudar o usuário a entender o que realmente
            precisa de atenção.
          </p>

          <p className={styles.description}>
            O projeto nasceu de uma necessidade real e evoluiu para um
            ecossistema completo: casas compartilhadas, calendário, lembretes,
            galeria evolutiva, conteúdo educativo, gamificação e uma rotina de
            cuidados orientada por contexto.
          </p>

          <div className={styles.highlightGrid} aria-label="Recursos do PlantaCheck">
            {highlights.map((highlight) => (
              <span key={highlight}>{highlight}</span>
            ))}
          </div>

          <div className={styles.casePanel}>
            <div className={styles.casePanelHeader}>
              <span className={styles.caseIcon} aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 21V11M12 11C9.2 11 7 8.8 7 6c2.8 0 5 2.2 5 5ZM12 14c2.8 0 5-2.2 5-5-2.8 0-5 2.2-5 5Z"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>

              <div>
                <span className={styles.caseEyebrow}>Case técnico completo</span>
                <strong>O produto por dentro, sem expor o código-fonte.</strong>
              </div>
            </div>

            <p>
              A página dedicada vai além das screenshots: documenta problema,
              arquitetura, decisões de produto, evolução e uma galeria
              interativa das principais telas.
            </p>

            <div className={styles.caseContentGrid}>
              {caseContents.map((item) => (
                <div key={item.label}>
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.actions}>
            <a
              className={`button button--green ${styles.appButton}`}
              href="https://plantacheck.com.br"
              target="_blank"
              rel="noreferrer"
            >
              <span>Abrir PlantaCheck</span>
              <span aria-hidden="true">↗</span>
            </a>

            <Link
              className={`button button--secondary ${styles.caseButton}`}
              href="/plantacheck"
            >
              <span>
                <small>Conheça a construção</small>
                Explorar case técnico
              </span>
              <span className={styles.arrow} aria-hidden="true">
                →
              </span>
            </Link>
          </div>

          <p className={styles.repositoryNote}>
            <span aria-hidden="true">🔒</span>
            Repositório privado. O portfólio documenta o produto, suas decisões
            e resultados sem expor a implementação integral.
          </p>
        </div>

        <div className={styles.visual}>
          <div className={styles.visualHalo} aria-hidden="true" />

          <div className={styles.visualHeader}>
            <div>
              <span className={styles.visualEyebrow}>Produto em uso real</span>
              <strong>Veja a experiência funcionando.</strong>
            </div>
            <span className={styles.liveBadge}>
              <i aria-hidden="true" />
              Online
            </span>
          </div>

          <div className={styles.phoneWrap}>
            <PlantaCheckPhone
              slides={plantCheckHomepageSlides}
              compact
              title="Principais telas do PlantaCheck"
            />
          </div>

          <div className={styles.visualFooter}>
            <span>Aplicação real</span>
            <i aria-hidden="true" />
            <span>Case navegável</span>
            <i aria-hidden="true" />
            <span>Arquitetura documentada</span>
          </div>
        </div>
      </div>
    </section>
  );
}
