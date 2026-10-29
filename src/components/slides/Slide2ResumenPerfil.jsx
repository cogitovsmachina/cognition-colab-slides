import React from 'react';
import { Target, Users, Zap, Briefcase, Award, TrendingUp, Cpu, CheckCircle2, ChevronRight } from 'lucide-react';
import { DevinLogo } from '../Logos';

export default function Slide2ResumenPerfil({ onNavigateToSlide }) {
  return (
    <div className="flex flex-col justify-between h-full max-w-6xl mx-auto py-2">
      {/* Slide Header */}
      <div>
        <div className="flex items-center gap-2 mb-2">
          <span className="px-2.5 py-0.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 font-mono text-xs font-semibold">
            01. Visión General &amp; Ecosistema
          </span>
          <span className="text-slate-400">•</span>
          <span className="text-xs font-medium text-slate-500">Páginas 1 &amp; 2 del Documento</span>
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
          Resumen Ejecutivo &amp; Contexto de la Comunidad
        </h2>
        <p className="text-sm sm:text-base text-slate-600 mt-1 max-w-3xl">
          Una alianza estratégica que une el talento top tech de Inteligencia Artificial con las instalaciones y el ecosistema emprendedor de Campus Wortev.
        </p>
      </div>

      {/* Main Content Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 my-auto py-2">
        {/* Section 1: Resumen Ejecutivo (Left 6 cols) */}
        <div className="lg:col-span-6 flex flex-col justify-between bg-white rounded-2xl border border-slate-200/90 p-5 shadow-xs hover:shadow-md transition-shadow">
          <div>
            <div className="flex items-center justify-between mb-3 pb-2.5 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-emerald-50 text-emerald-600 border border-emerald-200">
                  <Target className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-slate-900 text-base">1. Resumen Ejecutivo de la Alianza</h3>
              </div>
              <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-slate-100 text-slate-700">
                Venue Partner
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
              La presente propuesta plantea una alianza estratégica entre <strong className="text-slate-900 font-semibold">Campus Wortev</strong> y la comunidad oficial de <strong className="text-slate-900 font-semibold">Cognition</strong> en la Ciudad de México para posicionar a Wortev como el <span className="text-emerald-700 font-semibold underline decoration-emerald-300">Venue Partner Exclusivo</span> de meetups y workshops especializados en IA y desarrollo autónomo con Devin.
            </p>

            {/* Core Deal Pillars */}
            <div className="space-y-2.5">
              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/70">
                <div className="mt-0.5 p-1 rounded-md bg-indigo-100 text-indigo-700">
                  <Calendar className="w-3.5 h-3.5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">2 Eventos Mensuales en Viernes</div>
                  <div className="text-xs text-slate-500">Horario ideal de 18:00 a 21:00 hrs en Terraza Jacarandas.</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-emerald-50/60 border border-emerald-200/60">
                <div className="mt-0.5 p-1 rounded-md bg-emerald-200/60 text-emerald-800">
                  <Award className="w-3.5 h-3.5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">6 Horas de Formación Técnica Gratuita</div>
                  <div className="text-xs text-slate-600">Capacitación de primer nivel en IA al mes para los miembros activos de Wortev.</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-amber-50/60 border border-amber-200/60">
                <div className="mt-0.5 p-1 rounded-md bg-amber-200/60 text-amber-800">
                  <TrendingUp className="w-3.5 h-3.5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Captación de Talento &amp; Consumo Exclusivo</div>
                  <div className="text-xs text-slate-600">Ingresos 100% garantizados para la cocina y servicio de catering interno de Wortev.</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
            <span className="text-slate-500">Inversión 100% financiada por Cognition</span>
            <button
              onClick={() => onNavigateToSlide(3)}
              className="text-emerald-700 font-semibold hover:underline flex items-center gap-1 cursor-pointer"
            >
              Ver Beneficios Ganar-Ganar <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Section 2: Contexto de Cognition & Audiencia (Right 6 cols) */}
        <div className="lg:col-span-6 flex flex-col justify-between bg-white rounded-2xl border border-slate-200/90 p-5 shadow-xs hover:shadow-md transition-shadow">
          <div>
            <div className="flex items-center justify-between mb-3 pb-2.5 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-slate-900 text-white">
                  <Cpu className="w-4 h-4 text-emerald-400" />
                </div>
                <h3 className="font-bold text-slate-900 text-base">2. Contexto de Cognition &amp; Perfil</h3>
              </div>
              <DevinLogo className="w-4 h-4" textClassName="text-xs font-bold" />
            </div>

            {/* Cognition Bio */}
            <div className="p-3 rounded-xl bg-slate-900 text-slate-100 mb-3.5">
              <div className="flex items-center gap-1.5 text-emerald-400 text-xs font-semibold mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Sobre Cognition AI</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Empresa tecnológica de vanguardia y creadora de <strong className="text-white">Devin</strong>, el primer ingeniero de software completamente autónomo basado en IA. Con clientes globales como <strong className="text-emerald-300">NASA</strong>, <strong className="text-emerald-300">OpenRouter</strong>, <strong className="text-emerald-300">Mercor</strong> y grandes instituciones financieras.
              </p>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 gap-2.5 mb-3.5">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <div className="text-2xl font-black text-slate-900 font-mono tracking-tight">120 – 150</div>
                <div className="text-xs font-bold text-slate-700">Asistentes Presenciales</div>
                <div className="text-[11px] text-slate-500">Por edición en Terraza Jacarandas</div>
              </div>

              <div className="p-3 rounded-xl bg-indigo-50/70 border border-indigo-200">
                <div className="text-2xl font-black text-indigo-700 font-mono tracking-tight">Top 5%</div>
                <div className="text-xs font-bold text-slate-800">Industria Tech</div>
                <div className="text-[11px] text-slate-500">Ingenieros Senior, Leads &amp; VCs</div>
              </div>
            </div>

            {/* Potential for Wortev */}
            <div className="p-3 rounded-xl bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-100 text-xs text-slate-700">
              <div className="font-bold text-indigo-900 flex items-center gap-1.5 mb-1">
                <Briefcase className="w-3.5 h-3.5 text-indigo-600" />
                <span>Potencial de Negocio para Campus Wortev</span>
              </div>
              <p className="leading-relaxed">
                Los asistentes son <strong>clientes calificados de alto valor</strong> para la venta de membresías privadas de coworking, alquiler de oficinas, programas de aceleración e inversión para el fondo de capital de Wortev.
              </p>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
            <span>Comunidad GDG CDMX &amp; AIClub CDMX</span>
            <span className="font-mono font-medium text-slate-700">200-300 registros / fecha</span>
          </div>
        </div>
      </div>

      {/* Bottom Summary Pill */}
      <div className="pt-2 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-500">
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          <span>Alianza estratégica libre de costo de arrendamiento tradicional compensada con derrama y formación.</span>
        </div>
        <span className="font-mono text-slate-400 text-[11px]">Diapositiva 02 / 07</span>
      </div>
    </div>
  );
}

function Calendar({ className = "w-4 h-4" }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function Sparkles({ className = "w-4 h-4" }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  );
}
