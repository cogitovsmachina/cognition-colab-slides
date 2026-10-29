import React, { useState } from 'react';
import { Clock, Users, Laptop, Sparkles, Coffee, Award, CheckCircle2, Tv, Wifi, Plug, Check } from 'lucide-react';
import { AGENDA_ITEMS } from '../../data/slidesData';

export default function Slide5LogisticaAgenda() {
  const [activeStep, setActiveStep] = useState(2); // Default to Keynote highlight

  return (
    <div className="flex flex-col justify-between h-full max-w-6xl mx-auto py-2">
      {/* Slide Header */}
      <div>
        <div className="flex items-center gap-2 mb-1.5">
          <span className="px-2.5 py-0.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 font-mono text-xs font-semibold">
            04. Operación &amp; Experiencia
          </span>
          <span className="text-slate-400">•</span>
          <span className="text-xs font-medium text-slate-500">Página 6 del Documento</span>
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
          Logística &amp; Formato del Evento
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
          Planificación operativa probada para garantizar una experiencia de clase mundial tanto para asistentes como para el equipo de campus.
        </p>
      </div>

      {/* Main Grid: Logistics Cards (Top) & Agenda Timeline (Bottom) */}
      <div className="my-auto space-y-4 py-2">
        {/* Logistics Requirements 3-Column Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="p-3.5 bg-white rounded-xl border border-slate-200 shadow-xs">
            <div className="flex items-center gap-2 text-indigo-600 font-bold text-xs uppercase tracking-wider mb-1">
              <Users className="w-4 h-4" />
              <span>Capacidad &amp; Sede</span>
            </div>
            <div className="text-sm font-bold text-slate-900">Terraza Jacarandas</div>
            <p className="text-xs text-slate-500 mt-0.5">
              Aforo configurado para <strong>120 – 150 participantes</strong> (con capacidad total de hasta 200 personas).
            </p>
          </div>

          <div className="p-3.5 bg-white rounded-xl border border-slate-200 shadow-xs">
            <div className="flex items-center gap-2 text-emerald-600 font-bold text-xs uppercase tracking-wider mb-1">
              <Laptop className="w-4 h-4" />
              <span>Montaje Tipo Taller / Aula</span>
            </div>
            <div className="text-sm font-bold text-slate-900">Infraestructura Pro Tech</div>
            <p className="text-xs text-slate-500 mt-0.5">
              Tablones con tomas perimetrales para laptops, microfonía y <strong>proyección simultánea en 2 pantallas</strong>.
            </p>
          </div>

          <div className="p-3.5 bg-white rounded-xl border border-slate-200 shadow-xs">
            <div className="flex items-center gap-2 text-amber-600 font-bold text-xs uppercase tracking-wider mb-1">
              <Tv className="w-4 h-4" />
              <span>Recepción &amp; Registro</span>
            </div>
            <div className="text-sm font-bold text-slate-900">Check-in de Entrada</div>
            <p className="text-xs text-slate-500 mt-0.5">
              Módulo de recepción principal coordinado (staff Wortev + Cognition) y video institucional de bienvenida.
            </p>
          </div>
        </div>

        {/* Visual Agenda Timeline (18:00 - 21:00) */}
        <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 shadow-xs">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded-lg bg-slate-900 text-white">
                <Clock className="w-4 h-4 text-emerald-400" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-sm sm:text-base">Agenda Tipo (18:00 – 21:00 hrs)</h3>
                <span className="text-[11px] text-slate-500">Viernes de meetup en Terraza Jacarandas</span>
              </div>
            </div>
            <span className="px-2.5 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
              3 Horas de Alto Impacto
            </span>
          </div>

          {/* Timeline Steps */}
          <div className="space-y-2.5">
            {AGENDA_ITEMS.map((item, idx) => {
              const isSelected = activeStep === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`p-3 rounded-xl border transition-all cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                    isSelected
                      ? "bg-slate-900 text-white border-slate-900 shadow-md scale-[1.01]"
                      : "bg-slate-50/80 hover:bg-slate-100/80 border-slate-200/80 text-slate-800"
                  }`}
                >
                  <div className="flex items-start sm:items-center gap-3">
                    <div
                      className={`font-mono text-xs font-bold px-2.5 py-1 rounded-lg shrink-0 ${
                        isSelected ? "bg-emerald-500 text-slate-950" : "bg-white text-slate-700 border border-slate-200"
                      }`}
                    >
                      {item.time}
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <span className={`text-xs sm:text-sm font-bold ${isSelected ? "text-white" : "text-slate-900"}`}>
                          {item.title}
                        </span>
                      </div>
                      <p className={`text-xs mt-0.5 line-clamp-1 sm:line-clamp-none ${isSelected ? "text-slate-300" : "text-slate-500"}`}>
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        isSelected
                          ? "bg-white/20 text-emerald-300 border border-white/20"
                          : item.type === "credits"
                          ? "bg-purple-100 text-purple-800 font-mono"
                          : item.type === "wortev"
                          ? "bg-indigo-100 text-indigo-800"
                          : "bg-slate-200 text-slate-700"
                      }`}
                    >
                      {item.badge}
                    </span>
                    <span className={`text-[11px] font-mono ${isSelected ? "text-slate-400" : "text-slate-400"}`}>
                      {item.duration}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Slide Navigation Footnote */}
      <div className="pt-2 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-500">
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          <span>Incluye $200 USD en créditos de Cognition por participante para probar Devin en vivo.</span>
        </div>
        <span className="font-mono text-slate-400 text-[11px]">Diapositiva 05 / 07</span>
      </div>
    </div>
  );
}
