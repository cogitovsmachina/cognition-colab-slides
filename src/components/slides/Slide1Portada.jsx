import React from 'react';
import { ArrowRight, Sparkles, Building2, Calendar, FileText, UserCheck, ShieldCheck, ChevronRight } from 'lucide-react';
import { CognitionLogo, DevinLogo, WortevLogo, PartnershipBadge } from '../Logos';

export default function Slide1Portada({ onNext, onNavigateToSlide, onOpenApprovalModal }) {
  return (
    <div className="flex flex-col justify-between h-full max-w-6xl mx-auto py-2">
      {/* Top Header Label */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <PartnershipBadge />
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-semibold">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          Propuesta Ejecutiva 2026 • Alianza Estratégica
        </div>
      </div>

      {/* Main Hero Section */}
      <div className="my-auto py-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-lg bg-slate-900 text-slate-100 text-xs font-mono tracking-wide">
          <DevinLogo className="w-3.5 h-3.5" textClassName="text-white text-xs font-semibold" />
          <span className="text-slate-400">|</span>
          <span>Meetups Oficiales Ciudad de México</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.15] mb-5">
          Meetups de <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">Cognition (Devin)</span> en <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">Campus Wortev</span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl leading-relaxed mb-8">
          Alianza estratégica para posicionar a <strong className="text-slate-900 font-semibold">Campus Wortev</strong> como el <span className="text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded">Venue Partner Exclusivo</span> de la comunidad oficial de IA y software autónomo en la Ciudad de México.
        </p>

        {/* Metadata Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 mb-8">
          <div className="p-3.5 bg-white rounded-xl border border-slate-200 shadow-xs hover:border-indigo-300 transition-colors">
            <div className="flex items-center gap-2 text-indigo-600 text-xs font-semibold uppercase tracking-wider mb-1">
              <Building2 className="w-4 h-4" />
              <span>Para</span>
            </div>
            <div className="font-bold text-slate-900 text-sm">Paulina Pérez &amp; Dirección</div>
            <div className="text-xs text-slate-500">Campus Wortev</div>
          </div>

          <div className="p-3.5 bg-white rounded-xl border border-slate-200 shadow-xs hover:border-emerald-300 transition-colors">
            <div className="flex items-center gap-2 text-emerald-600 text-xs font-semibold uppercase tracking-wider mb-1">
              <UserCheck className="w-4 h-4" />
              <span>De</span>
            </div>
            <div className="font-bold text-slate-900 text-sm">Enrique Diaz</div>
            <div className="text-xs text-slate-500 truncate" title="Embajador Cognition CDMX / Co-org GDG CDMX">
              Embajador Cognition • GDG CDMX
            </div>
          </div>

          <div className="p-3.5 bg-white rounded-xl border border-slate-200 shadow-xs hover:border-slate-300 transition-colors">
            <div className="flex items-center gap-2 text-slate-600 text-xs font-semibold uppercase tracking-wider mb-1">
              <Calendar className="w-4 h-4" />
              <span>Fecha</span>
            </div>
            <div className="font-bold text-slate-900 text-sm">Octubre 12, 2026</div>
            <div className="text-xs text-slate-500">Temporada Q4 2026</div>
          </div>

          <div className="p-3.5 bg-white rounded-xl border border-slate-200 shadow-xs hover:border-slate-300 transition-colors">
            <div className="flex items-center gap-2 text-slate-600 text-xs font-semibold uppercase tracking-wider mb-1">
              <FileText className="w-4 h-4" />
              <span>Tipo</span>
            </div>
            <div className="font-bold text-slate-900 text-sm">Propuesta Ejecutiva</div>
            <div className="text-xs text-slate-500">Operativa &amp; Alianza</div>
          </div>
        </div>

        {/* CTA Actions */}
        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={onNext}
            className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer group"
          >
            <span>Explorar Propuesta</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => onNavigateToSlide(4)}
            className="px-5 py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-700 font-semibold text-sm border border-slate-300 hover:border-slate-400 transition-all flex items-center gap-2 cursor-pointer shadow-xs"
          >
            <span>Ver Presupuesto Financiado (~$79,800 MXN)</span>
            <ChevronRight className="w-4 h-4 text-slate-400" />
          </button>

          <button
            onClick={onOpenApprovalModal}
            className="px-5 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold text-sm shadow-sm transition-all flex items-center gap-2 cursor-pointer"
          >
            <ShieldCheck className="w-4 h-4" />
            <span>Aprobar Alianza</span>
          </button>
        </div>
      </div>

      {/* Quick Footnote Badges */}
      <div className="pt-3 border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 font-medium text-slate-700">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            Terraza Jacarandas (Aforo 120-150 pax)
          </span>
          <span className="hidden sm:inline text-slate-300">•</span>
          <span className="hidden sm:inline font-medium text-slate-700">
            2 Viernes por Mes (18:00 a 21:00 hrs)
          </span>
          <span className="hidden md:inline text-slate-300">•</span>
          <span className="hidden md:inline font-medium text-slate-700">
            Consumo Exclusivo de Catering Wortev
          </span>
        </div>
        <div className="font-mono text-[11px] text-slate-400">
          Usa las flechas <kbd className="px-1.5 py-0.5 bg-slate-100 border border-slate-300 rounded text-slate-600 font-mono text-[10px]">←</kbd> <kbd className="px-1.5 py-0.5 bg-slate-100 border border-slate-300 rounded text-slate-600 font-mono text-[10px]">→</kbd> para navegar
        </div>
      </div>
    </div>
  );
}
