import React, { useState, useEffect, useCallback } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import SlideWrapper from './components/SlideWrapper';
import OverviewModal from './components/OverviewModal';
import ShortcutsModal from './components/ShortcutsModal';
import ApprovalModal from './components/ApprovalModal';

import Slide1Portada from './components/slides/Slide1Portada';
import Slide2ResumenPerfil from './components/slides/Slide2ResumenPerfil';
import Slide3BeneficiosMutuos from './components/slides/Slide3BeneficiosMutuos';
import Slide4Presupuesto from './components/slides/Slide4Presupuesto';
import Slide5LogisticaAgenda from './components/slides/Slide5LogisticaAgenda';
import Slide6SiguientesPasos from './components/slides/Slide6SiguientesPasos';
import Slide7Formalizacion from './components/slides/Slide7Formalizacion';

import { SLIDES } from './data/slidesData';

export default function App() {
  const totalSlides = SLIDES.length;

  // Read initial slide from URL hash (#/1 to #/7)
  const getSlideFromHash = () => {
    const match = window.location.hash.match(/^#\/([1-7])$/);
    if (match && match[1]) {
      const num = parseInt(match[1], 10);
      if (num >= 1 && num <= totalSlides) return num;
    }
    return 1;
  };

  const [currentSlide, setCurrentSlide] = useState(getSlideFromHash);
  const [direction, setDirection] = useState(1);
  const [currency, setCurrency] = useState("MXN");
  const [isOverviewOpen, setIsOverviewOpen] = useState(false);
  const [isShortcutsOpen, setIsShortcutsOpen] = useState(false);
  const [isApprovalModalOpen, setIsApprovalModalOpen] = useState(false);

  // Navigate function
  const navigateToSlide = useCallback((targetSlide) => {
    if (targetSlide < 1 || targetSlide > totalSlides || targetSlide === currentSlide) return;
    setDirection(targetSlide > currentSlide ? 1 : -1);
    setCurrentSlide(targetSlide);
    window.location.hash = `#/${targetSlide}`;
  }, [currentSlide, totalSlides]);

  const handleNext = useCallback(() => {
    if (currentSlide < totalSlides) {
      navigateToSlide(currentSlide + 1);
    }
  }, [currentSlide, totalSlides, navigateToSlide]);

  const handlePrev = useCallback(() => {
    if (currentSlide > 1) {
      navigateToSlide(currentSlide - 1);
    }
  }, [currentSlide, navigateToSlide]);

  const toggleCurrency = useCallback((val) => {
    if (val && typeof val === "string") {
      setCurrency(val);
    } else {
      setCurrency((prev) => (prev === "MXN" ? "USD" : "MXN"));
    }
  }, []);

  // Sync hash change
  useEffect(() => {
    const handleHashChange = () => {
      const slide = getSlideFromHash();
      if (slide !== currentSlide) {
        setDirection(slide > currentSlide ? 1 : -1);
        setCurrentSlide(slide);
      }
    };

    if (!window.location.hash || !window.location.hash.match(/^#\/[1-7]$/)) {
      window.location.hash = "#/1";
    }

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [currentSlide]);

  // Global Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Don't intercept when user is typing in inputs or textareas
      const activeEl = document.activeElement;
      if (activeEl && (activeEl.tagName === "INPUT" || activeEl.tagName === "TEXTAREA")) {
        return;
      }

      if (e.key === "Escape") {
        setIsOverviewOpen(false);
        setIsShortcutsOpen(false);
        setIsApprovalModalOpen(false);
        return;
      }

      // If a modal is open, avoid navigation keys
      if (isOverviewOpen || isShortcutsOpen || isApprovalModalOpen) return;

      switch (e.key) {
        case "ArrowRight":
        case "PageDown":
        case " ":
          e.preventDefault();
          handleNext();
          break;
        case "ArrowLeft":
        case "PageUp":
          e.preventDefault();
          handlePrev();
          break;
        case "Home":
          e.preventDefault();
          navigateToSlide(1);
          break;
        case "End":
          e.preventDefault();
          navigateToSlide(totalSlides);
          break;
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7": {
          const num = parseInt(e.key, 10);
          if (num >= 1 && num <= totalSlides) {
            navigateToSlide(num);
          }
          break;
        }
        case "g":
        case "G":
          setIsOverviewOpen((prev) => !prev);
          break;
        case "m":
        case "M":
          toggleCurrency();
          break;
        case "?":
          setIsShortcutsOpen((prev) => !prev);
          break;
        case "f":
        case "F":
          if (document.fullscreenElement) {
            document.exitFullscreen().catch(() => {});
          } else {
            document.documentElement.requestFullscreen().catch(() => {});
          }
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNext, handlePrev, navigateToSlide, isOverviewOpen, isShortcutsOpen, isApprovalModalOpen, totalSlides, toggleCurrency]);

  // Render current slide
  const renderCurrentSlide = () => {
    switch (currentSlide) {
      case 1:
        return (
          <Slide1Portada
            onNext={handleNext}
            onNavigateToSlide={navigateToSlide}
            onOpenApprovalModal={() => setIsApprovalModalOpen(true)}
          />
        );
      case 2:
        return (
          <Slide2ResumenPerfil
            onNavigateToSlide={navigateToSlide}
          />
        );
      case 3:
        return (
          <Slide3BeneficiosMutuos />
        );
      case 4:
        return (
          <Slide4Presupuesto
            currency={currency}
            onToggleCurrency={toggleCurrency}
          />
        );
      case 5:
        return (
          <Slide5LogisticaAgenda />
        );
      case 6:
        return (
          <Slide6SiguientesPasos
            onNavigateToSlide={navigateToSlide}
            onOpenApprovalModal={() => setIsApprovalModalOpen(true)}
          />
        );
      case 7:
        return (
          <Slide7Formalizacion
            onOpenApprovalModal={() => setIsApprovalModalOpen(true)}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="relative w-screen h-screen bg-[#f8f9fa] text-slate-800 overflow-hidden bg-light-pattern flex flex-col justify-between select-none">
      {/* Top Header Navigation */}
      <Header
        currentSlide={currentSlide}
        onNavigate={navigateToSlide}
        currency={currency}
        onToggleCurrency={toggleCurrency}
        onOpenOverview={() => setIsOverviewOpen(true)}
        onOpenShortcuts={() => setIsShortcutsOpen(true)}
        onOpenApprovalModal={() => setIsApprovalModalOpen(true)}
      />

      {/* Main Slide Content Stage */}
      <SlideWrapper
        slideKey={currentSlide}
        direction={direction}
        onSwipeLeft={handleNext}
        onSwipeRight={handlePrev}
      >
        {renderCurrentSlide()}
      </SlideWrapper>

      {/* Floating Center Dot Indicator */}
      <div className="fixed bottom-14 left-1/2 -translate-x-1/2 z-30 hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 border border-slate-200 backdrop-blur-md shadow-xs">
        {SLIDES.map((slide) => {
          const isActive = slide.id === currentSlide;
          return (
            <button
              key={slide.id}
              onClick={() => navigateToSlide(slide.id)}
              className="group relative p-1 focus:outline-none cursor-pointer"
              title={`${slide.id}. ${slide.title}`}
            >
              <div
                className={`h-2 rounded-full transition-all duration-300 ${
                  isActive ? "w-6 bg-emerald-600" : "w-2 bg-slate-300 group-hover:bg-slate-400"
                }`}
              />
            </button>
          );
        })}
      </div>

      {/* Presentation Control Footer */}
      <Footer
        currentSlide={currentSlide}
        totalSlides={totalSlides}
        onPrev={handlePrev}
        onNext={handleNext}
        onOpenOverview={() => setIsOverviewOpen(true)}
        onOpenApprovalModal={() => setIsApprovalModalOpen(true)}
      />

      {/* Modals */}
      <OverviewModal
        isOpen={isOverviewOpen}
        onClose={() => setIsOverviewOpen(false)}
        currentSlide={currentSlide}
        onSelectSlide={navigateToSlide}
      />

      <ShortcutsModal
        isOpen={isShortcutsOpen}
        onClose={() => setIsShortcutsOpen(false)}
      />

      <ApprovalModal
        isOpen={isApprovalModalOpen}
        onClose={() => setIsApprovalModalOpen(false)}
      />
    </div>
  );
}
