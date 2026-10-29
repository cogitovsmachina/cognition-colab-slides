import React from 'react';
import { Handshake, Building, GraduationCap, Database, Megaphone, Check, ShieldCheck, Sparkles, Wifi, Monitor, Utensils } from 'lucide-react';
import { WortevLogo } from '../Logos';

export default function Slide3BeneficiosMutuos() {
  return (
    <div className="flex flex-col justify-between h-full max-w-6xl mx-auto py-2">
      {/* Slide Header */}
      <div>
        <div className="flex items-center gap-2 mb-2">
          <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 font-mono text-xs font-semibold">
            02. Modelo Ganar - Ganar
          </span>
          <span className="text-slate-400">•</span>
          <span className="text-xs font-medium text-slate-500">Página 3 del Documento</span>
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
          Modelo de Colaboración: Beneficios Mutuos
        </h2>
        <p className="text-sm sm:text-base text-slate-600 mt-1 max-w-3xl">
          Un intercambio de alto valor sin costo de alquiler directo: espacio e infraestructura a cambio de formación de élite, derrama económica y posicionamiento de marca.
        </p>
      </div>

      {/* Main Comparison Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 my-auto py-2">
        {/* Left Side: Lo que aporta y solicita la Comunidad (5 cols) */}
        <div className="lg:col-span-5 bg-gradient-to-b from-slate-50 to-white rounded-2xl border border-slate-200 p-5 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-slate-200 mb-3">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-slate-900 text-white">
                  <Building className="w-4 h-4 text-emerald-400" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base">Aporte &amp; Solicitud</h3>
                  <div className="text-[11px] text-slate-500">De la Comunidad Cognition</div>
                </div>
              </div>
              <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-slate-200 text-slate-700">
                Sede &amp; Espacio
              </span>
            </div>

            <div className="space-y-3">
              <div className="p-3 bg-white rounded-xl border border-slate-200/80 shadow-2xs">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-900 mb-1">
                  <span className="w-2 h-2 rounded-full bg-indigo-600"></span>
                  <span>Frecuencia y Horario Habitual</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  <strong>2 eventos al mes</strong>, programados en días <strong>viernes de 18:00 a 21:00 hrs</strong> (horario estelar de networking).
                </p>
              </div>

              <div className="p-3 bg-white rounded-xl border border-slate-200/80 shadow-2xs">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-900 mb-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                  <span>Espacio: Terraza Jacarandas</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-2">
                  Aforo de hasta 200 personas, óptimo para formato de taller / aula con mesas de trabajo para laptops.
                </p>
                <div className="flex flex-wrap gap-1.5 text-[10px] font-mono text-slate-500">
                  <span className="px-2 py-0.5 rounded bg-slate-100 flex items-center gap-1">
                    <Wifi className="w-3 h-3 text-emerald-600" /> 700 Mbps
                  </span>
                  <span className="px-2 py-0.5 rounded bg-slate-100 flex items-center gap-1">
                    <Monitor className="w-3 h-3 text-indigo-600" /> 2 Pantallas
                  </span>
                  <span className="px-2 py-0.5 rounded bg-slate-100">Tomas perimetrales</span>
                </div>
              </div>

              <div className="p-3 bg-emerald-50/70 rounded-xl border border-emerald-200 shadow-2xs">
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-950 mb-1">
                  <Utensils className="w-3.5 h-3.5 text-emerald-700" />
                  <span>Consumo Exclusivo Alimentos &amp; Bebidas</span>
                </div>
                <p className="text-xs text-emerald-800 leading-relaxed">
                  <strong>Compromiso formal</strong> de contratar exclusivamente la proveeduría de comida y bebida con el equipo interno de <strong>cocina/catering de Campus Wortev</strong>, garantizando flujo de ingresos constante.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-200 text-[11px] text-slate-500 flex items-center justify-between">
            <span>Uso sin fricción de instalaciones</span>
            <span className="font-semibold text-slate-700">~150 pax / fecha</span>
          </div>
        </div>

        {/* Right Side: Lo que recibe Campus Wortev a cambio (7 cols) */}
        <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-5 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-indigo-50 text-indigo-700 border border-indigo-200">
                  <Handshake className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base">Retorno de Valor para Campus Wortev</h3>
                  <div className="text-[11px] text-slate-500">Beneficios directos e institucionales</div>
                </div>
              </div>
              <WortevLogo className="w-4 h-4" textClassName="text-xs font-bold" />
            </div>

            {/* 3 Main Benefits as Specified in PDF */}
            <div className="space-y-3">
              {/* Benefit 1 */}
              <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/60 hover:bg-slate-50 transition-colors">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-indigo-600 text-white font-bold text-xs">
                    01
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900 flex items-center gap-1.5">
                        <GraduationCap className="w-4 h-4 text-indigo-600" />
                        <span>6 Horas de Formación Gratuita en IA al Mes</span>
                      </h4>
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-indigo-100 text-indigo-800">
                        Valor $1,500+ USD
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Talleres y masterclasses impartidos directamente por <strong>Enrique Diaz</strong> (ex-fundador y CTO de DEVF, fundador de AIClub, instructor con más de 10 años formando ingenieros para Stanford, Google y Techstars).
                    </p>
                    <div className="mt-2 flex flex-wrap gap-1.5 text-[10px] text-slate-700">
                      <span className="px-2 py-0.5 rounded-md bg-white border border-slate-200">Diseño de agentes autónomos</span>
                      <span className="px-2 py-0.5 rounded-md bg-white border border-slate-200">Automatización con LLMs</span>
                      <span className="px-2 py-0.5 rounded-md bg-white border border-slate-200">Observabilidad &amp; Arquitectura con IA</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Benefit 2 */}
              <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/60 hover:bg-slate-50 transition-colors">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-emerald-600 text-white font-bold text-xs">
                    02
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900 flex items-center gap-1.5">
                        <Database className="w-4 h-4 text-emerald-600" />
                        <span>Generación de Demanda &amp; Base de Datos Calificada</span>
                      </h4>
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800 font-mono">
                        +200-300 Leads / mes
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Entrega directa de la <strong>base de datos de registros</strong> de cada evento (estimada en más de 200 a 300 registros por fecha) para prospección comercial de membresías y nutrición de newsletters de Wortev.
                    </p>
                  </div>
                </div>
              </div>

              {/* Benefit 3 */}
              <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/60 hover:bg-slate-50 transition-colors">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-amber-500 text-white font-bold text-xs">
                    03
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900 flex items-center gap-1.5">
                        <Megaphone className="w-4 h-4 text-amber-600" />
                        <span>Presencia de Marca, Pitch Directivo &amp; Difusión</span>
                      </h4>
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-800">
                        Venue Partner
                      </span>
                    </div>
                    <ul className="text-xs text-slate-600 mt-1 space-y-1 list-disc list-inside">
                      <li>Reconocimiento como <strong>Venue Partner Oficial</strong> en banners, redes sociales y pantalla de entrada.</li>
                      <li><strong>Espacio de 5 a 10 min</strong> al inicio o cierre para que directivos de Wortev presenten su aceleradora, fondo y membresías.</li>
                      <li>Integración de marca en eventos aliados (GDG CDMX y colaboraciones con el Tec de Monterrey).</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
            <span className="flex items-center gap-1.5 text-emerald-700 font-medium">
              <Check className="w-4 h-4" /> Relación simbiótica 100% orientada al ROI de Campus Wortev
            </span>
            <span className="font-mono text-slate-400 text-[11px]">Diapositiva 03 / 07</span>
          </div>
        </div>
      </div>

      {/* Bottom Footer Note */}
      <div className="pt-2 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-500">
        <div>Ambas partes potencian su visibilidad sin generar fricciones operativas ni gastos no planeados.</div>
        <div className="font-mono text-slate-400 text-[11px]">3 Beneficios Estratégicos</div>
      </div>
    </div>
  );
}
