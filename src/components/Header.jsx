import React from 'react';
import { Grid, HelpCircle, DollarSign, ShieldCheck, ChevronRight } from 'lucide-react';
import { CognitionLogo, DevinLogo, WortevLogo } from './Logos';
import { SLIDES } from '../data/slidesData';

export default function Header({
  currentSlide,
  onNavigate,
  currency,
  onToggleCurrency,
  onOpenOverview,
  onOpenShortcuts,
  onOpenApprovalModal
}) {
  return (
    <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200/90 select-none">
      {/* Top Brand Strip */}
      <div className="h-14 px-4 sm:px-6 flex items-center justify-between gap-4">
        {/* Brand Lockup */}
        <div className="flex items-center gap-2.5 sm:gap-4 shrink-0">
          <div className="flex items-center gap-2">
            <CognitionLogo className="w-5 h-5" textClassName="text-sm font-bold text-slate-900 hidden sm:inline" />
            <DevinLogo className="w-4 h-4" textClassName="text-xs font-bold text-slate-700 hidden md:inline" />
          </div>

          <span className="text-slate-300 font-light">×</span>

          <div className="flex items-center gap-1.5">
            <WortevLogo className="w-4 h-4" textClassName="text-xs sm:text-sm font-bold text-slate-900" />
            <span className="hidden lg:inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
              Venue Partner
            </span>
          </div>
        </div>

        {/* Right Action Utilities */}
        <div className="flex items-center gap-2">
          {/* Currency Switcher */}
          <button
            onClick={() => onToggleCurrency(currency === "MXN" ? "USD" : "MXN")}
            className="px-2.5 py-1 text-xs font-mono font-bold rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 transition-colors flex items-center gap-1 cursor-pointer"
            title="Alternar moneda (Presiona 'M')"
          >
            <DollarSign className="w-3.5 h-3.5 text-emerald-600" />
            <span>{currency}</span>
            <span className="text-[10px] text-slate-400 font-normal hidden sm:inline">(M)</span>
          </button>

          {/* Overview Grid Button */}
          <button
            onClick={onOpenOverview}
            className="p-1.5 sm:px-2.5 sm:py-1 text-xs font-semibold rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 transition-colors flex items-center gap-1.5 cursor-pointer"
            title="Vista de Diapositivas (Presiona 'G')"
          >
            <Grid className="w-4 h-4 text-slate-600" />
            <span className="hidden sm:inline">Diapositivas</span>
          </button>

          {/* Shortcuts Help Button */}
          <button
            onClick={onOpenShortcuts}
            className="p-1.5 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
            title="Atajos de teclado (Presiona '?')"
          >
            <HelpCircle className="w-4 h-4" />
          </button>

          {/* CTA Button */}
          <button
            onClick={onOpenApprovalModal}
            className="px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold text-xs shadow-xs transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span className="hidden xs:inline">Aprobar Alianza</span>
          </button>
        </div>
      </div>

      {/* Secondary Horizontal Slide Nav Pills (Identical to DevFest Reference) */}
      <div className="border-t border-slate-100 bg-slate-50/90 px-4 py-1.5 overflow-x-auto no-scrollbar flex items-center justify-start md:justify-center gap-1.5">
        {SLIDES.map((slide) => {
          const isActive = slide.id === currentSlide;
          return (
            <button
              key={slide.id}
              onClick={() => onNavigate(slide.id)}
              className={`px-3 py-1 text-xs font-medium rounded-md transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                isActive
                  ? "bg-emerald-600 text-white shadow-xs font-bold"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/70"
              }`}
              title={slide.subtitle}
            >
              <span className={`font-mono text-[10px] ${isActive ? "text-emerald-100" : "text-slate-400"}`}>
                {String(slide.id).padStart(2, "0")}.
              </span>
              <span>{slide.title}</span>
            </button>
          );
        })}
      </div>
    </header>
  );
}
