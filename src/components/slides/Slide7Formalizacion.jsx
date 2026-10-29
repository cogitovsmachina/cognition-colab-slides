import React, { useState } from 'react';
import { Mail, MessageSquare, ShieldCheck, Copy, Check, Download, ExternalLink, Sparkles, Building, Award, CheckCircle } from 'lucide-react';
import { CognitionLogo, DevinLogo, WortevLogo, PartnershipBadge } from '../Logos';
import confetti from 'canvas-confetti';

export default function Slide7Formalizacion({ onOpenApprovalModal }) {
  const [copied, setCopied] = useState(false);

  const handleCopySummary = () => {
    const summaryText = `Propuesta de Colaboración Estratégica: Meetups de Cognition (Devin) en Campus Wortev
- Objetivo: Posicionar a Campus Wortev como Venue Partner exclusivo para meetups de IA.
- Frecuencia: 2 viernes al mes (18:00 a 21:00 hrs) en Terraza Jacarandas (120-150 pax).
- Presupuesto: ~$79,800 MXN financiado 100% por Cognition.
- Derrama para Wortev: $37,800 MXN de consumo directo facturado a la cocina/catering de Wortev por edición.
- Valor para Wortev: 6 horas de formación gratuita en IA al mes (impartida por Enrique Diaz), entrega de base de datos de 200-300 registros por fecha, visibilidad institucional y $200 USD en créditos Cognition por asistente.
- Contacto: Enrique Diaz (Embajador Cognition CDMX / GDG CDMX).`;

    navigator.clipboard.writeText(summaryText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleCelebrate = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
    onOpenApprovalModal();
  };

  return (
    <div className="flex flex-col justify-between h-full max-w-6xl mx-auto py-2">
      {/* Slide Header */}
      <div>
        <div className="flex items-center gap-2 mb-1.5">
          <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 font-mono text-xs font-semibold">
            06. Cierre &amp; Formalización
          </span>
          <span className="text-slate-400">•</span>
          <span className="text-xs font-medium text-slate-500">Alianza Estratégica 2026</span>
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
          Formalización &amp; Contacto Directo
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
          Construyamos juntos el polo de inteligencia artificial y tecnología más influyente de la Ciudad de México.
        </p>
      </div>

      {/* Main Grid: Executive Summary Recap + Contact Info */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 my-auto py-2">
        {/* Left Side: Summary Card (7 cols) */}
        <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-5 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
              <PartnershipBadge />
              <span className="text-[11px] font-mono font-bold text-slate-500">
                Octubre 12, 2026
              </span>
            </div>

            <h3 className="font-bold text-slate-900 text-base mb-2">
              Resumen de Compromisos Clave de la Alianza
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-4">
              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80">
                <div className="text-[11px] font-bold text-slate-500 uppercase">Frecuencia &amp; Sede</div>
                <div className="text-xs font-bold text-slate-900 mt-0.5">2 Viernes / mes (18:00 - 21:00)</div>
                <div className="text-[11px] text-slate-500">Terraza Jacarandas (120-150 pax)</div>
              </div>

              <div className="p-2.5 rounded-xl bg-emerald-50/70 border border-emerald-200">
                <div className="text-[11px] font-bold text-emerald-800 uppercase">Derrama para Wortev</div>
                <div className="text-xs font-bold text-emerald-950 mt-0.5">$37,800 MXN / fecha</div>
                <div className="text-[11px] text-emerald-700 font-mono">$75,600 MXN facturados al mes</div>
              </div>

              <div className="p-2.5 rounded-xl bg-indigo-50/70 border border-indigo-200">
                <div className="text-[11px] font-bold text-indigo-800 uppercase">Capacitación Mensual</div>
                <div className="text-xs font-bold text-indigo-950 mt-0.5">6 Horas de Formación en IA</div>
                <div className="text-[11px] text-indigo-700">Impartidas por Enrique Diaz</div>
              </div>

              <div className="p-2.5 rounded-xl bg-purple-50/70 border border-purple-200">
                <div className="text-[11px] font-bold text-purple-800 uppercase">Leads Calificados</div>
                <div className="text-xs font-bold text-purple-950 mt-0.5">200 – 300 Registros</div>
                <div className="text-[11px] text-purple-700">Top 5% industria tech / startups</div>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 text-xs text-slate-700 border border-slate-200/80 flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div className="leading-relaxed">
                Adicionalmente, cada asistente recibe <strong>$200 USD en créditos de Cognition</strong> y Campus Wortev cuenta con mención estelar de Venue Partner en todas las plataformas y escenarios del evento.
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap items-center gap-3">
            <button
              onClick={handleCelebrate}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold text-xs shadow-sm transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Aprobar / Formalizar Alianza</span>
            </button>

            <button
              onClick={handleCopySummary}
              className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs border border-slate-200 transition-all flex items-center gap-1.5 cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700">¡Copiado al portapapeles!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copiar Resumen Ejecutivo</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Right Side: Proponente Contact Card (5 cols) */}
        <div className="lg:col-span-5 bg-gradient-to-b from-slate-900 to-slate-950 text-white rounded-2xl p-5 shadow-lg flex flex-col justify-between border border-slate-800">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-mono text-[10px] font-bold border border-emerald-500/30">
                Proponente Oficial
              </span>
            </div>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center text-slate-950 font-black text-xl shadow-md">
                ED
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">Enrique Diaz</h4>
                <p className="text-xs text-emerald-400 font-medium">
                  Embajador de Cognition (Devin) en CDMX
                </p>
                <p className="text-[11px] text-slate-400">
                  Co-organizador de GDG CDMX (Google Developer Groups)
                </p>
              </div>
            </div>

            <div className="space-y-2 text-xs text-slate-300 leading-relaxed mb-4 bg-slate-800/60 p-3 rounded-xl border border-slate-700/60">
              <div className="font-semibold text-white flex items-center gap-1.5 text-[11px] uppercase tracking-wider text-slate-400 mb-1">
                <Award className="w-3.5 h-3.5 text-emerald-400" />
                <span>Trayectoria</span>
              </div>
              <p>
                • Ex-fundador y CTO de <strong>DEVF</strong>.<br />
                • Fundador de <strong>AIClub</strong>.<br />
                • Instructor con más de 10 años formando ingenieros para <strong>Stanford, Google y Techstars</strong>.
              </p>
            </div>

            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2 text-slate-300 p-2 rounded-lg bg-slate-800/40 border border-slate-700/40">
                <Mail className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span className="font-mono text-[11px] truncate">enrique@cognition.ai / gdgcdmx@gmail.com</span>
              </div>

              <div className="flex items-center gap-2 text-slate-300 p-2 rounded-lg bg-slate-800/40 border border-slate-700/40">
                <Building className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                <span className="text-[11px]">Ciudad de México • Terraza Jacarandas Wortev</span>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
            <span>Para: Paulina Pérez &amp; Dirección</span>
            <span className="text-emerald-400 font-mono font-semibold">Q4 2026</span>
          </div>
        </div>
      </div>

      {/* Slide Navigation Footnote */}
      <div className="pt-2 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-500">
        <div>
          ¿Deseas imprimir o guardar en PDF? Usa <kbd className="px-1.5 py-0.5 bg-slate-100 border border-slate-300 rounded text-slate-600 font-mono text-[10px]">Cmd / Ctrl + P</kbd>
        </div>
        <span className="font-mono text-slate-400 text-[11px]">Diapositiva 07 / 07</span>
      </div>
    </div>
  );
}
