"use client";

import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
} from "react";
import type {
  PlantCheckCategory,
  PlantCheckScreenshot,
} from "../data/plantaCheckGallery";

type PlantCheckPhoneProps = {
  slides: PlantCheckScreenshot[];
  compact?: boolean;
  showCategories?: boolean;
  showThumbnails?: boolean;
  title?: string;
};

const ALL_CATEGORIES = "Todas";

export default function PlantaCheckPhone({
  slides,
  compact = false,
  showCategories = false,
  showThumbnails = false,
  title = "Demonstração interativa do PlantaCheck",
}: PlantCheckPhoneProps) {
  const [category, setCategory] = useState<string>(ALL_CATEGORIES);
  const [index, setIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const pointerStartX = useRef<number | null>(null);
  const pointerStartY = useRef<number | null>(null);

  const categories = useMemo(() => {
    return Array.from(new Set(slides.map((slide) => slide.category)));
  }, [slides]);

  const visibleSlides = useMemo(() => {
    if (category === ALL_CATEGORIES) {
      return slides;
    }

    return slides.filter((slide) => slide.category === category);
  }, [category, slides]);

  const activeSlide = visibleSlides[index] ?? visibleSlides[0];

  useEffect(() => {
    setIndex(0);
  }, [category]);

  useEffect(() => {
    if (index >= visibleSlides.length) {
      setIndex(0);
    }
  }, [index, visibleSlides.length]);

  useEffect(() => {
    if (!activeSlide || typeof window === "undefined") {
      return;
    }

    const nextIndex = (index + 1) % visibleSlides.length;
    const previousIndex =
      (index - 1 + visibleSlides.length) % visibleSlides.length;

    [visibleSlides[nextIndex], visibleSlides[previousIndex]]
      .filter(Boolean)
      .forEach((slide) => {
        const image = new window.Image();
        image.src = slide.src;
      });
  }, [activeSlide, index, visibleSlides]);

  useEffect(() => {
    if (!isExpanded) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsExpanded(false);
      }
    };

    window.addEventListener("keydown", onEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onEscape);
    };
  }, [isExpanded]);

  if (!activeSlide) {
    return null;
  }

  const goToPrevious = () => {
    setIndex((current) =>
      current === 0 ? visibleSlides.length - 1 : current - 1,
    );
  };

  const goToNext = () => {
    setIndex((current) =>
      current === visibleSlides.length - 1 ? 0 : current + 1,
    );
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      goToPrevious();
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      goToNext();
    }

    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setIsExpanded(true);
    }
  };

  const handlePointerDown = (
    event: ReactPointerEvent<HTMLButtonElement>,
  ) => {
    pointerStartX.current = event.clientX;
    pointerStartY.current = event.clientY;
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerUp = (
    event: ReactPointerEvent<HTMLButtonElement>,
  ) => {
    if (pointerStartX.current === null || pointerStartY.current === null) {
      return;
    }

    const distanceX = event.clientX - pointerStartX.current;
    const distanceY = event.clientY - pointerStartY.current;

    pointerStartX.current = null;
    pointerStartY.current = null;

    if (Math.abs(distanceX) > 45 && Math.abs(distanceX) > Math.abs(distanceY)) {
      if (distanceX > 0) {
        goToPrevious();
      } else {
        goToNext();
      }
      return;
    }

    setIsExpanded(true);
  };

  const setSelectedCategory = (selectedCategory: string) => {
    setCategory(selectedCategory);
  };

  return (
    <section
      className={`pc-phone-showcase${compact ? " pc-phone-showcase--compact" : ""}`}
      aria-label={title}
    >
      {showCategories ? (
        <div className="pc-category-tabs" aria-label="Categorias de telas">
          <button
            type="button"
            className={`pc-category-tab${
              category === ALL_CATEGORIES ? " is-active" : ""
            }`}
            onClick={() => setSelectedCategory(ALL_CATEGORIES)}
          >
            Todas
          </button>

          {categories.map((item) => (
            <button
              key={item}
              type="button"
              className={`pc-category-tab${category === item ? " is-active" : ""}`}
              onClick={() => setSelectedCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>
      ) : null}

      <div className="pc-phone-stage">
        <button
          type="button"
          className="pc-phone-arrow pc-phone-arrow--previous"
          onClick={goToPrevious}
          aria-label="Tela anterior"
        >
          ‹
        </button>

        <div
          className="pc-phone"
          tabIndex={0}
          onKeyDown={handleKeyDown}
          aria-label={`${activeSlide.title}. Use as setas do teclado para navegar.`}
        >
          <div className="pc-phone-speaker" aria-hidden="true" />
          <div className="pc-phone-camera" aria-hidden="true" />

          <button
            type="button"
            className="pc-phone-screen"
            onPointerDown={handlePointerDown}
            onPointerUp={handlePointerUp}
            aria-label={`Ampliar ${activeSlide.title}`}
          >
            <img
              key={activeSlide.src}
              src={activeSlide.src}
              alt={activeSlide.title}
              draggable={false}
            />
          </button>

          <div className="pc-phone-home-indicator" aria-hidden="true" />
        </div>

        <button
          type="button"
          className="pc-phone-arrow pc-phone-arrow--next"
          onClick={goToNext}
          aria-label="Próxima tela"
        >
          ›
        </button>
      </div>

      <div className="pc-phone-meta" aria-live="polite">
        <div>
          <span className="pc-phone-category">{activeSlide.category}</span>
          <h3>{activeSlide.title}</h3>
        </div>

        <span className="pc-phone-counter">
          {index + 1} / {visibleSlides.length}
        </span>
      </div>

      <div className="pc-phone-progress" aria-hidden="true">
        <span
          style={{
            width: `${((index + 1) / visibleSlides.length) * 100}%`,
          }}
        />
      </div>

      <p className="pc-phone-help">
        Arraste a tela, use as setas ou clique para ampliar.
      </p>

      {showThumbnails ? (
        <div className="pc-thumbnail-strip" aria-label="Miniaturas das telas">
          {visibleSlides.map((slide, slideIndex) => (
            <button
              key={slide.id}
              type="button"
              className={`pc-thumbnail${
                slideIndex === index ? " is-active" : ""
              }`}
              onClick={() => setIndex(slideIndex)}
              aria-label={`Abrir ${slide.title}`}
              aria-current={slideIndex === index ? "true" : undefined}
            >
              <img src={slide.src} alt="" loading="lazy" />
            </button>
          ))}
        </div>
      ) : null}

      {isExpanded ? (
        <div
          className="pc-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={activeSlide.title}
        >
          <button
            type="button"
            className="pc-lightbox-backdrop"
            onClick={() => setIsExpanded(false)}
            aria-label="Fechar visualização ampliada"
          />

          <div className="pc-lightbox-content">
            <button
              type="button"
              className="pc-lightbox-close"
              onClick={() => setIsExpanded(false)}
              aria-label="Fechar"
            >
              ×
            </button>

            <button
              type="button"
              className="pc-lightbox-arrow pc-lightbox-arrow--previous"
              onClick={goToPrevious}
              aria-label="Tela anterior"
            >
              ‹
            </button>

            <img src={activeSlide.src} alt={activeSlide.title} />

            <button
              type="button"
              className="pc-lightbox-arrow pc-lightbox-arrow--next"
              onClick={goToNext}
              aria-label="Próxima tela"
            >
              ›
            </button>

            <div className="pc-lightbox-caption">
              <strong>{activeSlide.title}</strong>
              <span>
                {index + 1} de {visibleSlides.length}
              </span>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
