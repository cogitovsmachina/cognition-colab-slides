import React from 'react';
import { X, ArrowRight, CheckCircle2, LayoutGrid } from 'lucide-react';
import { SLIDES } from '../data/slidesData';

export default function OverviewModal({ isOpen, onClose, currentSlide, onSelectSlide }) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-scale"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-white border border-slate-200 rounded-2xl shadow-2xl p-5 sm:p-6 overflow-hidden flex flex-col max-h-[88vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-3.5 border-b border-slate-200">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-emerald-50 text-emerald-700">
              <LayoutGrid className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900">
                Índice de Diapositivas
              </h2>
              <p className="text-xs text-slate-500">
                Selecciona cualquier sección para navegar instantáneamente
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
            title="Cerrar (Esc)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Slides Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 my-4 overflow-y-auto pr-1 custom-scrollbar">
          {SLIDES.map((slide) => {
            const isCurrent = slide.id === currentSlide;
            return (
              <button
                key={slide.id}
                onClick={() => {
                  onSelectSlide(slide.id);
                  onClose();
                }}
                className={`relative flex flex-col text-left p-4 rounded-xl border transition-all cursor-pointer group ${
                  isCurrent
                    ? "bg-emerald-50/80 border-emerald-500 ring-2 ring-emerald-500/20 shadow-xs"
                    : "bg-white hover:bg-slate-50 border-slate-200 hover:border-slate-300"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`font-mono text-xs font-bold px-2 py-0.5 rounded ${
                      isCurrent
                        ? "bg-emerald-600 text-white"
                        : "bg-slate-100 text-slate-600 group-hover:bg-slate-200"
                    }`}
                  >
                    {String(slide.id).padStart(2, "0")}
                  </span>
                  <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                    {slide.category}
                  </span>
                </div>

                <h3 className="font-bold text-sm text-slate-900 group-hover:text-emerald-700 transition-colors mb-1">
                  {slide.title}
                </h3>

                <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed flex-1">
                  {slide.subtitle}
                </p>

                <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] font-medium text-slate-400 group-hover:text-emerald-700">
                  <span>{isCurrent ? "Diapositiva actual" : "Ir a diapositiva"}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            );
          })}
        </div>

        {/* Modal Footer */}
        <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span>Puedes presionar la tecla <kbd className="px-1.5 py-0.5 bg-slate-100 border border-slate-300 rounded font-mono text-[10px] text-slate-700">G</kbd> para abrir o cerrar esta vista</span>
          </div>
          <button
            onClick={onClose}
            className="px-3 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold cursor-pointer"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}
