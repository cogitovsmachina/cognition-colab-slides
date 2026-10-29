import React from 'react';
import { CalendarCheck, FileSpreadsheet, Rocket, ArrowRight, CheckCircle2, Clock, ShieldCheck, ChevronRight } from 'lucide-react';

export default function Slide6SiguientesPasos({ onNavigateToSlide, onOpenApprovalModal }) {
  const steps = [
    {
      number: "01",
      title: "Validación de Disponibilidad",
      timeline: "Inmediato (Semana 1)",
      responsible: "Campus Wortev & Enrique Diaz",
      icon: CalendarCheck,
      color: "border-indigo-500 text-indigo-600 bg-indigo-50",
      description: "Revisar y bloquear en agenda los viernes tentativos de los meses de octubre y noviembre para el uso exclusivo de Terraza Jacarandas (18:00 a 21:00 hrs).",
      deliverable: "Fechas bloqueadas en calendario de Campus Wortev."
    },
    {
      number: "02",
      title: "Cotización del Catering Interno",
      timeline: "Semana 1 - 2",
      responsible: "Equipo de Alimentos y Bebidas Wortev",
      icon: FileSpreadsheet,
      color: "border-emerald-500 text-emerald-600 bg-emerald-50",
      description: "Recepción formal de la propuesta de menú (pizzas artesanales, canapés y bebidas) y cotización oficial por parte del chef o banquetera interna del campus.",
      deliverable: "Cotización final para orden de compra financiada por Cognition."
    },
    {
      number: "03",
      title: "Aprobación Directiva & Kick-off",
      timeline: "Semana 2",
      responsible: "Paulina Pérez, Dirección & Cognition",
      icon: Rocket,
      color: "border-amber-500 text-amber-600 bg-amber-50",
      description: "Visto bueno formal de la dirección de Wortev, firma del convenio de colaboración y publicación de la convocatoria oficial del primer meetup.",
      deliverable: "Lanzamiento en redes, apertura de registro y envío de invitaciones."
    }
  ];

  return (
    <div className="flex flex-col justify-between h-full max-w-6xl mx-auto py-2">
      {/* Slide Header */}
      <div>
        <div className="flex items-center gap-2 mb-1.5">
          <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 font-mono text-xs font-semibold">
            05. Ruta de Implementación
          </span>
          <span className="text-slate-400">•</span>
          <span className="text-xs font-medium text-slate-500">Página 6 del Documento</span>
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
          Siguientes Pasos &amp; Plan de Arranque
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
          Un proceso ágil en 3 fases para materializar la alianza y lanzar la primera edición con alta convocatoria.
        </p>
      </div>

      {/* 3 Step Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-auto py-2">
        {steps.map((step, idx) => {
          const IconComponent = step.icon;
          return (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between relative group hover:-translate-y-0.5"
            >
              <div>
                {/* Step Header */}
                <div className="flex items-center justify-between mb-3 pb-2.5 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <div className={`p-2 rounded-xl border ${step.color}`}>
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <span className="font-mono text-xs font-bold text-slate-400">PASO {step.number}</span>
                  </div>
                  <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full flex items-center gap-1">
                    <Clock className="w-3 h-3 text-slate-400" /> {step.timeline}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors">
                  {step.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {step.description}
                </p>
              </div>

              {/* Deliverable Box */}
              <div className="pt-3 border-t border-slate-100">
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                  Entregable Clave
                </div>
                <div className="text-xs font-medium text-slate-800 flex items-start gap-1.5 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{step.deliverable}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Action Callout Bar */}
      <div className="p-4 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-800 to-indigo-950 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-md">
        <div>
          <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold mb-0.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>¿Listos para dar el paso 1?</span>
          </div>
          <div className="text-sm font-bold text-white">
            Validar disponibilidad de fechas para la primera edición de meetups
          </div>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenApprovalModal}
            className="px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-xs shadow-xs transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <ShieldCheck className="w-4 h-4" />
            <span>Confirmar Interés / Validar Fechas</span>
          </button>

          <button
            onClick={() => onNavigateToSlide(7)}
            className="px-3.5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-medium border border-white/15 transition-all flex items-center gap-1 cursor-pointer"
          >
            <span>Formalización</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Footnote */}
      <div className="pt-2 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-500">
        <div>Propuesta presentada formalmente por Enrique Diaz • Octubre 12, 2026</div>
        <span className="font-mono text-slate-400 text-[11px]">Diapositiva 06 / 07</span>
      </div>
    </div>
  );
}

function Sparkles({ className = "w-4 h-4" }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  );
}
