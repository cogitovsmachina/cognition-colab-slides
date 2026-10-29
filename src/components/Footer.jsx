import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, Minimize2, Link2, Check, Grid, ShieldCheck } from 'lucide-react';
import { SLIDES } from '../data/slidesData';

export default function Footer({
  currentSlide,
  totalSlides,
  onPrev,
  onNext,
  onOpenOverview,
  onOpenApprovalModal
}) {
  const [copied, setCopied] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => setIsFullscreen(true)).catch(() => {});
    } else {
      document.exitFullscreen().then(() => setIsFullscreen(false)).catch(() => {});
    }
  };

  const copySlideLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const currentSlideInfo = SLIDES.find((s) => s.id === currentSlide) || SLIDES[0];
  const progressPercent = (currentSlide / totalSlides) * 100;

  return (
    <footer className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-slate-200 transition-all select-none">
      {/* Animated Top Progress Bar */}
      <div className="h-1 bg-slate-100">
        <div
          className="h-full bg-gradient-to-r from-emerald-500 to-teal-600 transition-all duration-300 ease-out"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* Main Footer Controls */}
      <div className="h-12 px-4 sm:px-6 flex items-center justify-between">
        {/* Left Side: Counter & Current Slide Title */}
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs font-bold text-slate-800 bg-slate-100 border border-slate-200 px-2 py-0.5 rounded-md">
            {String(currentSlide).padStart(2, "0")} / {String(totalSlides).padStart(2, "0")}
          </span>

          <span className="text-xs font-semibold text-slate-700 hidden sm:inline">
            • {currentSlideInfo.title}
          </span>

          <span className="text-[11px] text-slate-400 hidden md:inline">
            (Navega con <kbd className="px-1 py-0.5 bg-slate-100 border border-slate-300 rounded text-[10px] text-slate-600 font-mono">←</kbd> <kbd className="px-1 py-0.5 bg-slate-100 border border-slate-300 rounded text-[10px] text-slate-600 font-mono">→</kbd> o <kbd className="px-1 py-0.5 bg-slate-100 border border-slate-300 rounded text-[10px] text-slate-600 font-mono">Espacio</kbd>)
          </span>
        </div>

        {/* Right Side: Navigation Buttons & Utilities */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Previous Slide Button */}
          <button
            onClick={onPrev}
            disabled={currentSlide <= 1}
            className={`p-1.5 sm:px-3 sm:py-1 rounded-lg border text-xs font-semibold flex items-center gap-1 transition-colors cursor-pointer ${
              currentSlide <= 1
                ? "bg-slate-50 text-slate-300 border-slate-200 cursor-not-allowed"
                : "bg-white text-slate-700 hover:bg-slate-100 border-slate-300"
            }`}
            title="Diapositiva anterior (Flecha Izquierda)"
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Anterior</span>
          </button>

          {/* Next Slide Button */}
          <button
            onClick={onNext}
            disabled={currentSlide >= totalSlides}
            className={`p-1.5 sm:px-3 sm:py-1 rounded-lg border text-xs font-bold flex items-center gap-1 transition-colors cursor-pointer ${
              currentSlide >= totalSlides
                ? "bg-slate-50 text-slate-300 border-slate-200 cursor-not-allowed"
                : "bg-emerald-600 hover:bg-emerald-700 text-white border-emerald-600 shadow-2xs"
            }`}
            title="Siguiente diapositiva (Flecha Derecha o Espacio)"
          >
            <span className="hidden sm:inline">Siguiente</span>
            <ChevronRight className="w-4 h-4" />
          </button>

          <div className="h-4 w-px bg-slate-200 mx-1 hidden sm:block" />

          {/* Copy Direct Link Button */}
          <button
            onClick={copySlideLink}
            className="p-1.5 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer relative"
            title="Copiar enlace a esta diapositiva"
          >
            {copied ? (
              <span className="flex items-center text-emerald-600 text-xs gap-1 font-semibold">
                <Check className="w-4 h-4" />
              </span>
            ) : (
              <Link2 className="w-4 h-4" />
            )}
            {copied && (
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded bg-slate-900 text-white text-[10px] whitespace-nowrap shadow-md">
                ¡Enlace copiado!
              </span>
            )}
          </button>

          {/* Fullscreen Button */}
          <button
            onClick={toggleFullscreen}
            className="p-1.5 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer hidden sm:block"
            title="Pantalla completa (Presiona 'F')"
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </footer>
  );
}
