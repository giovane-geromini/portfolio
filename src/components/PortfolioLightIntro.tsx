"use client";

import {
  useEffect,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
} from "react";

const SESSION_KEY = "giovane-portfolio-intro-seen-v1";

type IntroState = "checking" | "visible" | "lit" | "hidden";

export default function PortfolioLightIntro() {
  const [state, setState] = useState<IntroState>("checking");
  const [dragDistance, setDragDistance] = useState(0);
  const pointerStartY = useRef<number | null>(null);
  const illuminatedRef = useRef(false);

  useEffect(() => {
    try {
      const hasSeenIntro = window.sessionStorage.getItem(SESSION_KEY) === "1";
      setState(hasSeenIntro ? "hidden" : "visible");
    } catch {
      setState("visible");
    }
  }, []);

  const markAsSeen = () => {
    try {
      window.sessionStorage.setItem(SESSION_KEY, "1");
    } catch {
      // A experiência continua funcionando mesmo quando o storage é bloqueado.
    }
  };

  const illuminate = () => {
    if (illuminatedRef.current) {
      return;
    }

    illuminatedRef.current = true;
    markAsSeen();
    setDragDistance(76);
    setState("lit");

    window.setTimeout(() => {
      setState("hidden");
    }, 1150);
  };

  const skipIntro = () => {
    markAsSeen();
    setState("hidden");
  };

  const handlePointerDown = (
    event: ReactPointerEvent<HTMLButtonElement>,
  ) => {
    pointerStartY.current = event.clientY;
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (
    event: ReactPointerEvent<HTMLButtonElement>,
  ) => {
    if (pointerStartY.current === null || state !== "visible") {
      return;
    }

    const distance = Math.max(
      0,
      Math.min(84, event.clientY - pointerStartY.current),
    );
    setDragDistance(distance);
  };

  const handlePointerUp = () => {
    pointerStartY.current = null;

    if (dragDistance >= 34) {
      illuminate();
      return;
    }

    setDragDistance(0);
  };

  if (state === "hidden") {
    return null;
  }

  return (
    <div
      className={`portfolio-intro${state === "lit" ? " is-lit" : ""}`}
      aria-label="Abertura interativa do portfólio"
    >
      <div className="portfolio-intro-grid" aria-hidden="true" />

      <div className="portfolio-intro-lamp" aria-hidden="true">
        <div className="portfolio-intro-cable" />
        <div className="portfolio-intro-shade" />
        <div className="portfolio-intro-bulb" />
        <div className="portfolio-intro-light-cone" />
      </div>

      <div className="portfolio-intro-copy">
        <span className="portfolio-intro-kicker">Laboratório digital</span>
        <h1>Ideias ficam mais claras quando ganham vida.</h1>
        <p>
          Dados, produtos e automações construídos para resolver problemas
          reais.
        </p>
      </div>

      <button
        type="button"
        className="portfolio-intro-cord"
        style={{
          transform: `translateX(-50%) translateY(${dragDistance}px)`,
        }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onClick={illuminate}
        disabled={state === "checking" || state === "lit"}
        aria-label="Puxar a corda e acender o portfólio"
      >
        <span className="portfolio-intro-cord-line" aria-hidden="true" />
        <span className="portfolio-intro-cord-handle" aria-hidden="true" />
        <span className="portfolio-intro-cord-label">
          Puxe para acender
        </span>
      </button>

      <button
        type="button"
        className="portfolio-intro-skip"
        onClick={skipIntro}
      >
        Entrar diretamente
      </button>
    </div>
  );
}
