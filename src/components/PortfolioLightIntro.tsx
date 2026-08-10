"use client";

import {
  useEffect,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
} from "react";
import { professionalProfile } from "../data/professionalProfile";

const SESSION_KEY = "giovane-portfolio-intro-seen-v4";
const DEFAULT_UNLOCK_DISTANCE = 176;
const UNLOCK_THRESHOLD_RATIO = 0.64;
const EXIT_DELAY_MS = 2700;

type IntroState = "checking" | "visible" | "unlocking" | "hidden";

type WeatherState = {
  city: string;
  temperature: number | null;
  apparentTemperature: number | null;
  condition: string;
  icon: string;
  source: "visitor" | "fallback" | "unavailable";
};

const INITIAL_WEATHER: WeatherState = {
  city: "Clima local",
  temperature: null,
  apparentTemperature: null,
  condition: "Carregando condições",
  icon: "◌",
  source: "unavailable",
};

function formatClock(date: Date) {
  return new Intl.DateTimeFormat("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(date);
}

function formatDate(date: Date) {
  const value = new Intl.DateTimeFormat("pt-BR", {
    weekday: "long",
    day: "numeric",
    month: "long",
  }).format(date);

  return value.charAt(0).toUpperCase() + value.slice(1);
}

export default function PortfolioLightIntro() {
  const [state, setState] = useState<IntroState>("checking");
  const [dragDistance, setDragDistance] = useState(0);
  const [clock, setClock] = useState("--:--");
  const [dateLabel, setDateLabel] = useState("Portfólio profissional");
  const [weather, setWeather] = useState<WeatherState>(INITIAL_WEATHER);

  const pointerStartX = useRef<number | null>(null);
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const maxUnlockDistanceRef = useRef(DEFAULT_UNLOCK_DISTANCE);
  const unlockingRef = useRef(false);
  const exitTimerRef = useRef<number | null>(null);

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      setClock(formatClock(now));
      setDateLabel(formatDate(now));
    };

    const updateUnlockDistance = () => {
      const sliderWidth = sliderRef.current?.clientWidth ?? 0;

      if (sliderWidth > 0) {
        maxUnlockDistanceRef.current = Math.max(78, sliderWidth - 52);
        setDragDistance((current) =>
          Math.min(current, maxUnlockDistanceRef.current),
        );
      }
    };

    updateDateTime();
    updateUnlockDistance();

    const clockTimer = window.setInterval(updateDateTime, 30_000);
    window.addEventListener("resize", updateUnlockDistance);

    try {
      const hasSeenIntro = window.sessionStorage.getItem(SESSION_KEY) === "1";
      setState(hasSeenIntro ? "hidden" : "visible");
    } catch {
      setState("visible");
    }

    return () => {
      window.clearInterval(clockTimer);
      window.removeEventListener("resize", updateUnlockDistance);

      if (exitTimerRef.current !== null) {
        window.clearTimeout(exitTimerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const controller = new AbortController();

    const loadWeather = async () => {
      try {
        const response = await fetch("/api/weather", {
          signal: controller.signal,
          cache: "no-store",
        });

        if (!response.ok) {
          throw new Error("Não foi possível carregar o clima.");
        }

        const data = (await response.json()) as WeatherState;

        setWeather({
          city: data.city || "Clima local",
          temperature:
            typeof data.temperature === "number" ? data.temperature : null,
          apparentTemperature:
            typeof data.apparentTemperature === "number"
              ? data.apparentTemperature
              : null,
          condition: data.condition || "Condição atual",
          icon: data.icon || "◌",
          source: data.source || "unavailable",
        });
      } catch (error) {
        if (error instanceof DOMException && error.name === "AbortError") {
          return;
        }

        setWeather({
          city: "São Carlos",
          temperature: null,
          apparentTemperature: null,
          condition: "Clima indisponível",
          icon: "◌",
          source: "unavailable",
        });
      }
    };

    loadWeather();

    return () => {
      controller.abort();
    };
  }, []);

  useEffect(() => {
    if (state === "hidden") {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [state]);

  const markAsSeen = () => {
    try {
      window.sessionStorage.setItem(SESSION_KEY, "1");
    } catch {
      // A experiência continua funcionando quando o storage é bloqueado.
    }
  };

  const unlockPortfolio = () => {
    if (
      unlockingRef.current ||
      state === "checking" ||
      state === "unlocking" ||
      state === "hidden"
    ) {
      return;
    }

    unlockingRef.current = true;
    markAsSeen();
    setDragDistance(maxUnlockDistanceRef.current);
    setState("unlocking");

    exitTimerRef.current = window.setTimeout(() => {
      setState("hidden");
    }, EXIT_DELAY_MS);
  };

  const skipIntro = () => {
    if (exitTimerRef.current !== null) {
      window.clearTimeout(exitTimerRef.current);
    }

    markAsSeen();
    setState("hidden");
  };

  const handlePointerDown = (event: ReactPointerEvent<HTMLButtonElement>) => {
    if (state !== "visible") {
      return;
    }

    pointerStartX.current = event.clientX;
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: ReactPointerEvent<HTMLButtonElement>) => {
    if (pointerStartX.current === null || state !== "visible") {
      return;
    }

    const distance = Math.max(
      0,
      Math.min(
        maxUnlockDistanceRef.current,
        event.clientX - pointerStartX.current,
      ),
    );

    setDragDistance(distance);
  };

  const handlePointerUp = () => {
    pointerStartX.current = null;

    if (
      dragDistance >=
      maxUnlockDistanceRef.current * UNLOCK_THRESHOLD_RATIO
    ) {
      unlockPortfolio();
      return;
    }

    setDragDistance(0);
  };

  if (state === "hidden") {
    return null;
  }

  const unlockProgress = Math.min(
    1,
    dragDistance / Math.max(1, maxUnlockDistanceRef.current),
  );

  const temperatureLabel =
    weather.temperature === null
      ? "--°"
      : `${Math.round(weather.temperature)}°`;

  return (
    <div
      className={`portfolio-intro is-${state}`}
      aria-label="Abertura interativa do portfólio"
      aria-busy={state === "checking"}
    >
      <div className="portfolio-intro-grid" aria-hidden="true" />
      <div
        className="portfolio-intro-orb portfolio-intro-orb--blue"
        aria-hidden="true"
      />
      <div
        className="portfolio-intro-orb portfolio-intro-orb--green"
        aria-hidden="true"
      />

      <div className="portfolio-intro-stage">
        <div className="portfolio-intro-copy">
          <span className="portfolio-intro-kicker">Laboratório digital</span>
          <h1>Ideias ganham força quando saem da tela.</h1>
          <p>
            Desbloqueie para conhecer projetos, dados e automações construídos
            para resolver problemas reais.
          </p>

          <div className="portfolio-intro-hint" aria-hidden="true">
            <span />
            Arraste o controle do celular para a direita
          </div>
        </div>

        <div className="portfolio-intro-phone-shell">
          <div className="portfolio-intro-phone">
            <span
              className="portfolio-intro-phone-speaker"
              aria-hidden="true"
            />
            <span
              className="portfolio-intro-phone-camera"
              aria-hidden="true"
            />

            <div className="portfolio-intro-screen">
              <div
                className="portfolio-intro-screen-background"
                aria-hidden="true"
              >
                <span className="portfolio-intro-screen-orb portfolio-intro-screen-orb--blue" />
                <span className="portfolio-intro-screen-orb portfolio-intro-screen-orb--green" />
                <span className="portfolio-intro-screen-grid" />
              </div>

              <div className="portfolio-intro-statusbar" aria-hidden="true">
                <span>{clock}</span>
                <span>● 5G ︽</span>
              </div>

              <div className="portfolio-intro-lock-layout">
                <div className="portfolio-intro-top-widgets">
                  <div className="portfolio-intro-weather">
                    <span
                      className="portfolio-intro-weather-icon"
                      aria-hidden="true"
                    >
                      {weather.icon}
                    </span>
                    <div>
                      <strong>{temperatureLabel}</strong>
                      <span>{weather.condition}</span>
                      <small>
                        {weather.city}
                        {weather.source === "visitor" ? " · aproximado" : ""}
                      </small>
                    </div>
                  </div>

                  <div className="portfolio-intro-lock-badge">
                    <span aria-hidden="true">⌁</span>
                    Tela bloqueada
                  </div>
                </div>

                <div className="portfolio-intro-lock-copy">
                  <strong>{clock}</strong>
                  <span>{dateLabel}</span>
                </div>

                <div className="portfolio-intro-identity-card">
                  <div className="portfolio-intro-avatar">
                    <img
                      src={professionalProfile.image}
                      alt=""
                      draggable={false}
                    />
                  </div>

                  <div className="portfolio-intro-identity-copy">
                    <strong>{professionalProfile.name}</strong>
                    <small>Dados • produtos • automação</small>
                    <em>Deslize abaixo para abrir o portfólio</em>
                  </div>
                </div>

                <div className="portfolio-intro-lock-spacer" aria-hidden="true" />

                <div className="portfolio-intro-notification">
                  <div className="portfolio-intro-notification-icon">GG</div>
                  <div>
                    <span>Portfólio profissional</span>
                    <strong>Projetos, experiência e produtos digitais</strong>
                    <small>
                      Desbloqueie para explorar meus trabalhos, trajetória e cases
                      em desenvolvimento.
                    </small>
                  </div>
                </div>

                <div ref={sliderRef} className="portfolio-intro-slider">
                  <span
                    className="portfolio-intro-slider-fill"
                    style={{ width: `${54 + dragDistance}px` }}
                    aria-hidden="true"
                  />

                  <button
                    type="button"
                    className="portfolio-intro-slider-handle"
                    style={{ transform: `translateX(${dragDistance}px)` }}
                    onPointerDown={handlePointerDown}
                    onPointerMove={handlePointerMove}
                    onPointerUp={handlePointerUp}
                    onPointerCancel={handlePointerUp}
                    onClick={unlockPortfolio}
                    disabled={state === "checking" || state === "unlocking"}
                    aria-label="Deslizar para desbloquear e abrir o portfólio"
                  >
                    <span aria-hidden="true">›</span>
                  </button>

                  <span
                    className="portfolio-intro-slider-label"
                    style={{
                      opacity: Math.max(0.18, 1 - unlockProgress * 1.15),
                    }}
                  >
                    deslize para entrar
                  </span>
                </div>
              </div>

              <div
                className="portfolio-intro-home-indicator"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>

        <button
          type="button"
          className="portfolio-intro-mobile-skip"
          onClick={skipIntro}
        >
          Entrar diretamente
        </button>

        <div className="portfolio-intro-mobile-scroll-cue" aria-hidden="true">
          <span>Role para conhecer o portfólio</span>
          <strong>↓</strong>
        </div>
      </div>

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
