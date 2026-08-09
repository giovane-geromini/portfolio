import Image from "next/image";
import Link from "next/link";
import { professionalProfile } from "../../data/professionalProfile";

const trajectoryPillars = [
  {
    number: "01",
    title: "Operação",
    text: "Experiência em ambientes com prazo, exceção, atendimento, transporte, frota e tomada de decisão em tempo real.",
  },
  {
    number: "02",
    title: "Dados",
    text: "Estruturação, análise e automação de bases para transformar informação operacional em acompanhamento confiável.",
  },
  {
    number: "03",
    title: "Produto",
    text: "Aplicações próprias para conectar regra de negócio, dados, interface, persistência e evolução contínua.",
  },
];


type IconName =
  | "mail"
  | "linkedin"
  | "github"
  | "plant"
  | "briefcase"
  | "graduation"
  | "database"
  | "code";

type BrandAsset = {
  src: string;
  alt: string;
  className: string;
};

const educationBrandByInstitution: Record<string, BrandAsset> = {
  Estácio: {
    src: "/brands/estacio.png",
    alt: "Estácio",
    className: "brand-estacio",
  },
  IFRS: {
    src: "/brands/ifrs.png",
    alt: "Instituto Federal do Rio Grande do Sul",
    className: "brand-ifrs",
  },
};

function getExperienceBrand(company: string): BrandAsset | null {
  if (company.startsWith("Faber-Castell")) {
    return {
      src: "/brands/faber-castell.png",
      alt: "Faber-Castell",
      className: "brand-faber",
    };
  }

  if (company.startsWith("Shopee")) {
    return {
      src: "/brands/shopee.png",
      alt: "Shopee",
      className: "brand-shopee",
    };
  }

  if (company.startsWith("Movida")) {
    return {
      src: "/brands/movida.png",
      alt: "Movida",
      className: "brand-movida",
    };
  }

  if (company.startsWith("Eixo SP")) {
    return {
      src: "/brands/eixo-sp.png",
      alt: "Eixo SP",
      className: "brand-eixo",
    };
  }

  return null;
}

function UiIcon({ name }: { name: IconName }) {
  const commonProps = {
    width: 18,
    height: 18,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": true,
  } as const;

  if (name === "mail") {
    return (
      <svg {...commonProps}>
        <path d="M4 6.5h16v11H4v-11Z" stroke="currentColor" strokeWidth="1.7" />
        <path d="m5 7.5 7 5 7-5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (name === "linkedin") {
    return (
      <svg {...commonProps}>
        <rect x="4" y="4" width="16" height="16" rx="3.5" stroke="currentColor" strokeWidth="1.7" />
        <path d="M8 10v6M8 8v.01M11.5 16v-3.4c0-1.45.85-2.35 2.15-2.35 1.28 0 2.35.78 2.35 2.75v3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    );
  }

  if (name === "github") {
    return (
      <svg {...commonProps}>
        <path d="M12 3.7a8.3 8.3 0 0 0-2.63 16.18c.42.08.57-.18.57-.4v-1.55c-2.34.5-2.83-.99-2.83-.99-.38-.97-.94-1.23-.94-1.23-.77-.52.06-.51.06-.51.85.06 1.3.87 1.3.87.76 1.3 1.99.93 2.48.71.08-.55.3-.93.54-1.14-1.87-.21-3.84-.94-3.84-4.15 0-.92.33-1.67.87-2.26-.09-.21-.38-1.07.08-2.23 0 0 .71-.23 2.32.86A8.05 8.05 0 0 1 12 7.59c.72 0 1.44.1 2.12.28 1.61-1.09 2.32-.86 2.32-.86.46 1.16.17 2.02.08 2.23.54.59.87 1.34.87 2.26 0 3.22-1.97 3.93-3.85 4.14.31.27.58.79.58 1.58v2.35c0 .22.15.49.58.4A8.3 8.3 0 0 0 12 3.7Z" fill="currentColor" />
      </svg>
    );
  }

  if (name === "plant") {
    return (
      <svg {...commonProps}>
        <path d="M12 20v-8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        <path d="M12 13c-3.8.1-6.2-2-6.5-5.4 3.9-.35 6.35 1.5 6.5 5.4Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
        <path d="M12.2 10.5c.35-3.55 2.55-5.5 6.3-5.45.1 3.65-2.1 5.55-6.3 5.45Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
        <path d="M7.5 20h9" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    );
  }

  if (name === "briefcase") {
    return (
      <svg {...commonProps}>
        <path d="M4 8h16v10H4V8Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
        <path d="M9 8V6.7c0-.95.75-1.7 1.7-1.7h2.6c.95 0 1.7.75 1.7 1.7V8M4 12h16M10 12v1.3h4V12" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (name === "graduation") {
    return (
      <svg {...commonProps}>
        <path d="m3.5 9 8.5-4 8.5 4-8.5 4-8.5-4Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
        <path d="M7 11v4.1c1.4 1.15 3.05 1.7 5 1.7s3.6-.55 5-1.7V11M20.5 9v5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    );
  }

  if (name === "database") {
    return (
      <svg {...commonProps}>
        <ellipse cx="12" cy="6" rx="6.5" ry="2.7" stroke="currentColor" strokeWidth="1.7" />
        <path d="M5.5 6v6c0 1.5 2.9 2.7 6.5 2.7s6.5-1.2 6.5-2.7V6M5.5 12v5.5c0 1.5 2.9 2.7 6.5 2.7s6.5-1.2 6.5-2.7V12" stroke="currentColor" strokeWidth="1.7" />
      </svg>
    );
  }

  return (
    <svg {...commonProps}>
      <path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 5l-4 14" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

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
          position: relative;
          min-height: 100vh;
          overflow: hidden;
          color: #f8fafc;
          background:
            radial-gradient(circle at 10% 8%, rgba(59,130,246,0.15), transparent 28%),
            radial-gradient(circle at 88% 16%, rgba(16,185,129,0.14), transparent 32%),
            linear-gradient(180deg, #07101f 0%, #030712 48%, #020617 100%);
          font-family:
            Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
            "Segoe UI", sans-serif;
        }

        .about-page::before {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px);
          background-size: 56px 56px;
          mask-image: linear-gradient(to bottom, rgba(0,0,0,0.82), transparent 74%);
          content: "";
          pointer-events: none;
        }

        .about-page::after {
          position: absolute;
          top: 280px;
          right: -210px;
          width: 520px;
          height: 520px;
          border: 1px solid rgba(74,222,128,0.08);
          border-radius: 50%;
          box-shadow:
            0 0 0 70px rgba(74,222,128,0.018),
            0 0 0 145px rgba(59,130,246,0.012);
          content: "";
          pointer-events: none;
        }

        .about-shell {
          position: relative;
          z-index: 1;
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

        .about-brand-titleline {
          display: flex;
          align-items: baseline;
          gap: 8px;
          flex-wrap: wrap;
        }

        .about-brand-name {
          color: #7dd3fc;
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
            "Liberation Mono", "Courier New", monospace;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.055em;
          text-shadow: 0 0 24px rgba(125, 211, 252, 0.24);
        }

        .about-brand-name::before {
          margin-right: 7px;
          color: #4ade80;
          content: "//";
          opacity: 0.72;
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
          transition:
            color 160ms ease,
            transform 160ms ease;
        }

        .about-nav-links a:hover {
          color: #7dd3fc;
          transform: translateY(-1px);
        }

        .about-hero {
          display: grid;
          grid-template-columns: minmax(0, 1.25fr) minmax(320px, 0.75fr);
          gap: 42px;
          align-items: center;
          padding: 54px 0 56px;
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
          max-width: 850px;
          margin: 22px 0 24px;
          font-size: clamp(48px, 7vw, 92px);
          line-height: 0.99;
          letter-spacing: -0.065em;
        }

        .about-hero h1 span {
          display: block;
          padding-bottom: 0.09em;
          background: linear-gradient(90deg, #60a5fa, #67e8f9 46%, #86efac);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .about-hero-lead {
          max-width: 800px;
          margin: 0;
          color: #d7e2f1;
          font-size: clamp(17px, 2vw, 21px);
          line-height: 1.72;
        }

        .about-hero-summary {
          max-width: 790px;
          margin: 18px 0 0;
          color: #94a3b8;
          font-size: 15px;
          line-height: 1.78;
        }

        .about-focus-row {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 22px;
        }

        .about-focus-row span {
          padding: 7px 10px;
          border: 1px solid rgba(148,163,184,0.16);
          border-radius: 999px;
          background: rgba(15,23,42,0.64);
          color: #cbd5e1;
          font-size: 11px;
          font-weight: 760;
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
          gap: 9px;
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


        .about-button-icon {
          display: grid;
          width: 27px;
          height: 27px;
          flex: 0 0 auto;
          place-items: center;
          border-radius: 999px;
          background: rgba(255,255,255,0.055);
          color: #9ed8ff;
          transition: transform 180ms ease, background 180ms ease;
        }

        .about-button--primary .about-button-icon {
          background: rgba(4,17,31,0.1);
          color: #04111f;
        }

        .about-button:hover .about-button-icon {
          transform: translateY(-1px) rotate(-3deg);
          background: rgba(125,211,252,0.1);
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
          overflow: hidden;
          padding: 22px;
          border-radius: 30px;
          border: 1px solid rgba(148,163,184,0.18);
          background:
            radial-gradient(circle at 86% 10%, rgba(74,222,128,0.12), transparent 32%),
            linear-gradient(150deg, rgba(15,23,42,0.96), rgba(5,25,26,0.9));
          box-shadow:
            0 28px 80px rgba(2,6,23,0.52),
            inset 0 1px 0 rgba(255,255,255,0.05);
        }

        .about-profile-panel::after {
          position: absolute;
          right: -56px;
          bottom: -56px;
          width: 180px;
          height: 180px;
          border: 1px solid rgba(74,222,128,0.09);
          border-radius: 50%;
          content: "";
          pointer-events: none;
        }

        .about-photo-wrap {
          position: relative;
          z-index: 1;
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
          position: relative;
          z-index: 1;
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
          position: relative;
          z-index: 1;
          margin: 14px 0 6px;
          font-size: 31px;
          line-height: 1;
          letter-spacing: -0.04em;
        }

        .about-profile-role {
          position: relative;
          z-index: 1;
          margin: 0;
          color: #dbeafe;
          font-size: 14px;
          font-weight: 700;
        }

        .about-profile-location {
          position: relative;
          z-index: 1;
          margin: 8px 0 0;
          color: #94a3b8;
          font-size: 13px;
        }

        .about-profile-bridge {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 7px;
          margin-top: 18px;
          padding-top: 16px;
          border-top: 1px solid rgba(148,163,184,0.12);
        }

        .about-profile-bridge span {
          color: #64748b;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .about-profile-bridge strong {
          display: block;
          margin-top: 4px;
          color: #dbeafe;
          font-size: 11px;
          line-height: 1.4;
        }

        .about-facts {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 12px;
          margin: 0 0 64px;
        }

        .about-fact {
          position: relative;
          display: flex;
          min-height: 138px;
          align-items: center;
          gap: 17px;
          overflow: hidden;
          padding: 22px 20px;
          border-radius: 20px;
          border: 1px solid rgba(148,163,184,0.16);
          background:
            radial-gradient(circle at 92% 8%, rgba(96,165,250,0.085), transparent 34%),
            linear-gradient(145deg, rgba(255,255,255,0.022), transparent 74%),
            rgba(15,23,42,0.66);
          transition:
            transform 180ms ease,
            border-color 180ms ease,
            background 180ms ease;
        }

        .about-fact:hover {
          transform: translateY(-2px);
          border-color: rgba(125,211,252,0.26);
          background:
            radial-gradient(circle at 92% 8%, rgba(96,165,250,0.12), transparent 36%),
            linear-gradient(145deg, rgba(255,255,255,0.032), transparent 74%),
            rgba(15,23,42,0.72);
        }

        .about-fact::after {
          position: absolute;
          right: -28px;
          bottom: -42px;
          width: 110px;
          height: 110px;
          border: 1px solid rgba(125,211,252,0.07);
          border-radius: 50%;
          content: "";
          pointer-events: none;
        }

        .about-fact-icon {
          position: relative;
          z-index: 1;
          display: grid;
          width: 50px;
          height: 50px;
          flex: 0 0 50px;
          place-items: center;
          margin: 0;
          border: 1px solid rgba(125,211,252,0.24);
          border-radius: 50%;
          background:
            radial-gradient(circle at 50% 46%, rgba(125,211,252,0.22), transparent 58%),
            linear-gradient(145deg, rgba(30,41,59,0.96), rgba(8,24,40,0.94));
          color: #7dd3fc;
          box-shadow:
            0 12px 30px rgba(2,6,23,0.28),
            0 0 18px rgba(56,189,248,0.07),
            inset 0 1px 0 rgba(255,255,255,0.055);
          line-height: 0;
          transition:
            transform 180ms ease,
            border-color 180ms ease,
            box-shadow 180ms ease;
        }

        .about-fact-icon svg {
          width: 23px;
          height: 23px;
          display: block;
          overflow: visible;
        }

        .about-fact:hover .about-fact-icon {
          transform: translateY(-1px) scale(1.035);
          border-color: rgba(125,211,252,0.4);
          box-shadow:
            0 14px 32px rgba(2,6,23,0.32),
            0 0 28px rgba(56,189,248,0.12),
            inset 0 1px 0 rgba(255,255,255,0.07);
        }

        .about-fact-copy {
          position: relative;
          z-index: 1;
          min-width: 0;
          display: flex;
          flex: 1 1 auto;
          flex-direction: column;
          justify-content: center;
          gap: 9px;
        }

        .about-fact-copy span,
        .about-fact-copy strong {
          display: block;
          margin: 0;
        }

        .about-fact-copy span {
          color: #7dd3fc;
          font-size: 11px;
          font-weight: 900;
          letter-spacing: 0.12em;
          line-height: 1.2;
          text-transform: uppercase;
        }

        .about-fact-copy strong {
          font-size: 17px;
          line-height: 1.38;
          text-wrap: balance;
        }

        .about-section {
          padding: 36px 0 50px;
        }

        .about-section-heading {
          max-width: 790px;
          margin-bottom: 26px;
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

        .about-pillar-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 14px;
        }

        .about-pillar-card {
          position: relative;
          overflow: hidden;
          min-height: 210px;
          padding: 22px;
          border-radius: 22px;
          border: 1px solid rgba(148,163,184,0.16);
          background:
            linear-gradient(145deg, rgba(15,23,42,0.84), rgba(15,23,42,0.55));
        }

        .about-pillar-card::after {
          position: absolute;
          right: -34px;
          bottom: -48px;
          width: 140px;
          height: 140px;
          border-radius: 50%;
          border: 1px solid rgba(96,165,250,0.07);
          content: "";
        }

        .about-pillar-number {
          display: inline-flex;
          width: 34px;
          height: 34px;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(96,165,250,0.16);
          border-radius: 11px;
          color: #7dd3fc;
          background: rgba(59,130,246,0.06);
          font-size: 11px;
          font-weight: 900;
        }

        .about-pillar-card h3 {
          margin: 26px 0 10px;
          font-size: 22px;
          letter-spacing: -0.03em;
        }

        .about-pillar-card p {
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

        .about-education-brand {
          position: relative;
          display: grid;
          width: 100%;
          min-height: 86px;
          place-items: center;
          margin-bottom: 18px;
          isolation: isolate;
        }

        .about-education-brand::before {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 170px;
          height: 76px;
          border-radius: 50%;
          background:
            radial-gradient(circle at 50% 50%, rgba(226,232,240,0.08), transparent 36%),
            radial-gradient(circle at 50% 50%, rgba(125,211,252,0.12), transparent 72%);
          filter: blur(11px);
          content: "";
          pointer-events: none;
          transform: translate(-50%, -50%);
          z-index: -1;
        }

        .about-education-brand img {
          position: relative;
          width: auto;
          max-width: 170px;
          height: 62px;
          object-fit: contain;
          object-position: center;
          filter: drop-shadow(0 9px 20px rgba(0,0,0,0.26));
          transition: transform 200ms ease, filter 200ms ease;
          z-index: 1;
        }

        .about-education-card:hover .about-education-brand img {
          transform: translateY(-2px) scale(1.035);
          filter: drop-shadow(0 14px 28px rgba(59,130,246,0.18));
        }

        .about-education-brand.brand-estacio img {
          height: 68px;
          max-width: 176px;
          filter:
            brightness(0) invert(1) opacity(0.94)
            drop-shadow(0 10px 24px rgba(56,189,248,0.14));
        }

        .about-education-card:hover .about-education-brand.brand-estacio img {
          transform: translateY(-2px) scale(1.035);
          filter:
            brightness(0) invert(1) opacity(1)
            drop-shadow(0 14px 30px rgba(56,189,248,0.22));
        }

        .about-education-brand.brand-ifrs img {
          height: 72px;
          max-width: 132px;
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
          position: relative;
          display: grid;
          gap: 16px;
        }

        .about-timeline::before {
          position: absolute;
          top: 10px;
          bottom: 10px;
          left: 11px;
          width: 1px;
          background: linear-gradient(
            180deg,
            rgba(96,165,250,0.44),
            rgba(74,222,128,0.28),
            transparent
          );
          content: "";
        }

        .about-experience {
          position: relative;
          display: grid;
          grid-template-columns: 220px minmax(0, 1fr);
          gap: 24px;
          margin-left: 30px;
          padding: 24px;
          border-radius: 24px;
          border: 1px solid rgba(148,163,184,0.16);
          background:
            linear-gradient(140deg, rgba(15,23,42,0.78), rgba(6,20,31,0.7));
        }

        .about-experience::before {
          position: absolute;
          top: 29px;
          left: -24px;
          width: 11px;
          height: 11px;
          border: 2px solid #07101f;
          border-radius: 50%;
          background: #60a5fa;
          box-shadow: 0 0 0 4px rgba(96,165,250,0.08);
          content: "";
        }

        .about-experience:first-child::before {
          background: #4ade80;
          box-shadow: 0 0 0 4px rgba(74,222,128,0.08);
        }

        .about-experience-meta {
          display: flex;
          min-width: 0;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          text-align: center;
        }

        .about-experience-brand {
          position: relative;
          display: grid;
          width: 100%;
          min-height: 88px;
          place-items: center;
          margin: 12px 0 8px;
          isolation: isolate;
        }

        .about-experience-brand::before {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 184px;
          height: 82px;
          border-radius: 50%;
          background: radial-gradient(circle at 50% 50%, rgba(96,165,250,0.115), transparent 72%);
          filter: blur(11px);
          content: "";
          opacity: 0.86;
          transform: translate(-50%, -50%);
          z-index: -1;
        }

        .about-experience-brand img {
          width: auto;
          max-width: 194px;
          height: 60px;
          object-fit: contain;
          object-position: center;
          filter: drop-shadow(0 9px 20px rgba(0,0,0,0.28));
          transition: transform 200ms ease, filter 200ms ease;
        }

        .about-experience:hover .about-experience-brand img {
          transform: translateY(-2px) scale(1.035);
          filter: drop-shadow(0 14px 28px rgba(96,165,250,0.12));
        }

        .about-experience-brand.brand-faber::before {
          background: radial-gradient(circle, rgba(52,211,153,0.16), transparent 70%);
        }

        .about-experience-brand.brand-shopee::before,
        .about-experience-brand.brand-movida::before {
          background: radial-gradient(circle, rgba(251,146,60,0.15), transparent 70%);
        }

        .about-experience-brand.brand-eixo::before {
          background: radial-gradient(circle, rgba(96,165,250,0.17), transparent 70%);
        }

        .about-experience-brand.brand-faber img {
          height: 60px;
          max-width: 202px;
        }

        .about-experience-brand.brand-shopee img {
          height: 74px;
          max-width: 158px;
        }

        .about-experience-brand.brand-movida img {
          height: 64px;
          max-width: 188px;
        }

        .about-experience-brand.brand-eixo img {
          height: 62px;
          max-width: 192px;
        }

        .about-experience-meta strong,
        .about-experience-meta span,
        .about-experience-meta small {
          display: block;
        }

        .about-experience-meta strong {
          width: 100%;
          font-size: 17px;
          line-height: 1.35;
          text-align: center;
        }

        .about-experience-meta span {
          width: 100%;
          margin-top: 8px;
          color: #7dd3fc;
          font-size: 13px;
          font-weight: 800;
        }

        .about-experience-meta small {
          width: 100%;
          margin-top: 5px;
          color: #64748b;
          line-height: 1.5;
          text-align: center;
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

        .about-plantacheck-bridge {
          display: grid;
          grid-template-columns: minmax(0, 1fr) auto;
          gap: 28px;
          align-items: center;
          margin: 38px 0 10px;
          padding: 30px;
          border: 1px solid rgba(74,222,128,0.18);
          border-radius: 27px;
          background:
            radial-gradient(circle at 92% 18%, rgba(74,222,128,0.12), transparent 32%),
            linear-gradient(145deg, rgba(11,23,34,0.94), rgba(8,19,33,0.92));
        }

        .about-plantacheck-bridge h2 {
          margin: 13px 0 12px;
          font-size: clamp(30px, 4.5vw, 52px);
          line-height: 1.03;
          letter-spacing: -0.05em;
        }

        .about-plantacheck-bridge p {
          max-width: 730px;
          margin: 0;
          color: #94a3b8;
          line-height: 1.72;
        }

        .about-contact {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 28px;
          margin-top: 40px;
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
            max-width: 540px;
          }

          .about-facts,
          .about-education-grid,
          .about-cert-grid,
          .about-pillar-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .about-pillar-grid article:last-child {
            grid-column: 1 / -1;
          }

          .about-experience {
            grid-template-columns: 1fr;
          }

          .about-plantacheck-bridge {
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

          .about-nav-links a:nth-child(2),
          .about-nav-links a:nth-child(4) {
            display: none;
          }

          .about-hero {
            padding: 34px 0 42px;
          }

          .about-hero h1 {
            font-size: clamp(45px, 16vw, 68px);
          }

          .about-profile-bridge {
            grid-template-columns: 1fr;
          }

          .about-facts,
          .about-pillar-grid,
          .about-education-grid,
          .about-cert-grid,
          .about-skill-grid {
            grid-template-columns: 1fr;
          }

          .about-fact {
            min-height: 122px;
            gap: 15px;
            padding: 18px;
          }

          .about-fact-icon {
            width: 48px;
            height: 48px;
            flex-basis: 48px;
          }

          .about-pillar-grid article:last-child {
            grid-column: auto;
          }

          .about-section {
            padding: 30px 0 42px;
          }

          .about-timeline::before {
            left: 8px;
          }

          .about-experience {
            margin-left: 25px;
            padding: 20px;
          }

          .about-experience::before {
            left: -22px;
          }

          .about-education-brand img {
            max-width: 150px;
          }

          .about-experience-brand img {
            max-width: 176px;
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
              <span className="about-brand-titleline">
                <strong>Portfólio</strong>
                <span className="about-brand-name">Giovane Geromini</span>
              </span>
              <small>Voltar à página inicial</small>
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

            <div className="about-focus-row" aria-label="Áreas de atuação">
              <span>Logística e operações</span>
              <span>Dados e automação</span>
              <span>Desenvolvimento full-stack</span>
              <span>Produtos digitais</span>
            </div>

            <div className="about-actions">
              <a
                className="about-button about-button--primary"
                href={`mailto:${professionalProfile.email}`}
              >
                <span className="about-button-icon"><UiIcon name="mail" /></span>
                Falar comigo
              </a>

              <a
                className="about-button"
                href={professionalProfile.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                <span className="about-button-icon"><UiIcon name="linkedin" /></span>
                LinkedIn
              </a>

              <a
                className="about-button"
                href={professionalProfile.github}
                target="_blank"
                rel="noreferrer"
              >
                <span className="about-button-icon"><UiIcon name="github" /></span>
                GitHub
              </a>

              <Link className="about-button" href="/plantacheck">
                <span className="about-button-icon"><UiIcon name="plant" /></span>
                Ver PlantaCheck
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

            <div className="about-profile-bridge" aria-label="Resumo do perfil">
              <div>
                <span>Base</span>
                <strong>Operações</strong>
              </div>
              <div>
                <span>Evolução</span>
                <strong>Dados</strong>
              </div>
              <div>
                <span>Direção</span>
                <strong>Tecnologia</strong>
              </div>
            </div>
          </aside>
        </header>

        <section className="about-facts" aria-label="Resumo profissional">
          <article className="about-fact">
            <span className="about-fact-icon"><UiIcon name="briefcase" /></span>
            <div className="about-fact-copy">
              <span>Atuação atual</span>
              <strong>Analista de Logística Pleno</strong>
            </div>
          </article>

          <article className="about-fact">
            <span className="about-fact-icon"><UiIcon name="graduation" /></span>
            <div className="about-fact-copy">
              <span>Formação</span>
              <strong>{logisticsEducation.course}</strong>
            </div>
          </article>

          <article className="about-fact">
            <span className="about-fact-icon"><UiIcon name="database" /></span>
            <div className="about-fact-copy">
              <span>Especialização</span>
              <strong>{dataEducation.course}</strong>
            </div>
          </article>

          <article className="about-fact">
            <span className="about-fact-icon"><UiIcon name="code" /></span>
            <div className="about-fact-copy">
              <span>Em andamento</span>
              <strong>{webEducation.course}</strong>
            </div>
          </article>
        </section>

        <section className="about-section">
          <div className="about-section-heading">
            <span className="about-eyebrow">Minha construção profissional</span>
            <h2>Da operação ao dado. Do dado ao produto.</h2>
            <p>
              A tecnologia entrou na minha trajetória como consequência da
              necessidade de organizar melhor problemas reais. O repertório
              operacional continua sendo a base; dados e desenvolvimento
              ampliam o que consigo construir a partir dele.
            </p>
          </div>

          <div className="about-pillar-grid">
            {trajectoryPillars.map((pillar) => (
              <article className="about-pillar-card" key={pillar.title}>
                <span className="about-pillar-number">{pillar.number}</span>
                <h3>{pillar.title}</h3>
                <p>{pillar.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="about-section">
          <div className="about-section-heading">
            <span className="about-eyebrow">Formação</span>
            <h2>Base acadêmica conectada ao que construo.</h2>
            <p>
              Logística formou a visão de processo. Engenharia de Dados ampliou
              a capacidade analítica e estrutural. Desenvolvimento Web conecta
              essas duas bases à construção de produtos utilizáveis.
            </p>
          </div>

          <div className="about-education-grid">
            {professionalProfile.education.map((education) => {
              const brand = educationBrandByInstitution[education.institution];

              return (
                <article className="about-education-card" key={education.course}>
                  {brand ? (
                    <div className={`about-education-brand ${brand.className}`}>
                      <Image
                        src={brand.src}
                        alt={`Logo ${brand.alt}`}
                        width={220}
                        height={90}
                        sizes="150px"
                      />
                    </div>
                  ) : null}

                  <span>{education.status}</span>
                  <h3>{education.course}</h3>
                  <strong>{education.institution}</strong>
                  <small>{education.period}</small>
                  <p>{education.details}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section id="experiencia" className="about-section">
          <div className="about-section-heading">
            <span className="about-eyebrow">Experiência</span>
            <h2>Uma trajetória construída em operações e evolução contínua.</h2>
            <p>
              Cada etapa adicionou uma camada diferente: atendimento,
              monitoramento, frota, logística reversa, Customer Service,
              indicadores e automação. Hoje essas experiências se conectam à
              minha transição para tecnologia.
            </p>
          </div>

          <div className="about-timeline">
            {professionalProfile.experiences.map((experience) => {
              const brand = getExperienceBrand(experience.company);

              return (
                <article
                  className="about-experience"
                  key={`${experience.company}-${experience.role}`}
                >
                  <div className="about-experience-meta">
                    <strong>{experience.company}</strong>

                    {brand ? (
                      <div className={`about-experience-brand ${brand.className}`}>
                        <Image
                          src={brand.src}
                          alt={`Logo ${brand.alt}`}
                          width={240}
                          height={90}
                          sizes="170px"
                        />
                      </div>
                    ) : null}

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
              );
            })}
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
              As competências estão agrupadas pelo contexto em que são
              aplicadas. A intenção é mostrar não apenas ferramentas, mas como
              elas se conectam ao trabalho e aos produtos que desenvolvo.
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

        <section className="about-plantacheck-bridge">
          <div>
            <span className="about-eyebrow">Projeto principal</span>
            <h2>PlantaCheck coloca essa transição em prática.</h2>
            <p>
              O produto reúne modelagem, autenticação, regras de negócio,
              histórico, experiência mobile-first e evolução contínua em uma
              aplicação real publicada e usada no dia a dia.
            </p>
          </div>

          <Link className="about-button about-button--primary" href="/plantacheck">
            Explorar case técnico
          </Link>
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
          <span>Perfil profissional • Next.js • TypeScript • Vercel</span>
        </footer>
      </div>
    </main>
  );
}
