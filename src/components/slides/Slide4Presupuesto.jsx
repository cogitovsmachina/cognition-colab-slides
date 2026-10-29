import React, { useState } from 'react';
import { DollarSign, Utensils, Shirt, Info, TrendingUp, Sparkles, Filter, CheckCircle2 } from 'lucide-react';
import { BUDGET_ITEMS, EXCHANGE_RATE_USD_TO_MXN } from '../../data/slidesData';

export default function Slide4Presupuesto({ currency = "MXN", onToggleCurrency }) {
  const [filterMode, setFilterMode] = useState("all"); // 'all', 'wortev', 'swag'
  const isUsd = currency === "USD";

  const formatPrice = (mxnAmount) => {
    if (isUsd) {
      const usd = Math.round(mxnAmount / EXCHANGE_RATE_USD_TO_MXN);
      return `$${usd.toLocaleString('en-US')} USD`;
    }
    return `$${mxnAmount.toLocaleString('es-MX')} MXN`;
  };

  const filteredItems = BUDGET_ITEMS.filter((item) => {
    if (filterMode === "wortev") return item.beneficiary === "Wortev";
    if (filterMode === "swag") return item.beneficiary === "Cognition";
    return true;
  });

  const totalMxn = BUDGET_ITEMS.reduce((acc, curr) => acc + curr.totalMxn, 0);
  const wortevDirectMxn = BUDGET_ITEMS
    .filter((i) => i.beneficiary === "Wortev")
    .reduce((acc, curr) => acc + curr.totalMxn, 0);
  const monthlyTotalMxn = totalMxn * 2;
  const monthlyWortevMxn = wortevDirectMxn * 2;

  return (
    <div className="flex flex-col justify-between h-full max-w-6xl mx-auto py-2">
      {/* Slide Header with Currency Toggle */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 font-mono text-xs font-semibold">
              03. Inversión &amp; Derrama Económica
            </span>
            <span className="text-slate-400">•</span>
            <span className="text-xs font-medium text-slate-500">Páginas 4 &amp; 5 del Documento</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Presupuesto Estimado por Evento
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
            <strong className="text-slate-900">100% financiado por Cognition</strong> para un aforo proyectado de 120 a 150 asistentes.
          </p>
        </div>

        {/* Currency Switcher & Filter Pills */}
        <div className="flex items-center gap-2">
          <div className="flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200 text-xs">
            <button
              onClick={() => onToggleCurrency?.("MXN")}
              className={`px-3 py-1 rounded-lg font-bold transition-all cursor-pointer ${
                !isUsd ? "bg-white text-emerald-700 shadow-xs" : "text-slate-600 hover:text-slate-900"
              }`}
            >
              MXN ($)
            </button>
            <button
              onClick={() => onToggleCurrency?.("USD")}
              className={`px-3 py-1 rounded-lg font-bold transition-all cursor-pointer ${
                isUsd ? "bg-emerald-600 text-white shadow-xs" : "text-slate-600 hover:text-slate-900"
              }`}
            >
              USD ($)
            </button>
          </div>
        </div>
      </div>

      {/* Top 3 KPI Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-2">
        <div className="p-3.5 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-700 text-white shadow-md relative overflow-hidden">
          <div className="text-[11px] font-semibold text-emerald-100 uppercase tracking-wider mb-1 flex items-center justify-between">
            <span>Consumo Catering Wortev</span>
            <span className="bg-emerald-500/40 px-1.5 py-0.5 rounded text-[10px]">Facturado Directo</span>
          </div>
          <div className="text-2xl sm:text-3xl font-black font-mono tracking-tight">
            {formatPrice(wortevDirectMxn)}
          </div>
          <div className="text-xs text-emerald-100 mt-1 flex items-center justify-between">
            <span>Por evento (~47.4% del total)</span>
            <span className="font-semibold text-white">× 2 = {formatPrice(monthlyWortevMxn)}/mes</span>
          </div>
        </div>

        <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-xs">
          <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-1 flex items-center justify-between">
            <span>Total Presupuesto / Edición</span>
            <span className="bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded text-[10px]">120-150 pax</span>
          </div>
          <div className="text-2xl sm:text-3xl font-black text-slate-900 font-mono tracking-tight">
            ~{formatPrice(totalMxn)}
          </div>
          <div className="text-xs text-slate-500 mt-1 flex items-center justify-between">
            <span>Financiado por Cognition</span>
            <span className="font-semibold text-slate-700">~{isUsd ? "$4,200 USD" : "$79,800 MXN"}</span>
          </div>
        </div>

        <div className="p-3.5 rounded-2xl bg-slate-900 text-white shadow-xs">
          <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1 flex items-center justify-between">
            <span>Proyección Mensual (2 Meetups)</span>
            <span className="bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 rounded text-[10px]">Recurrente</span>
          </div>
          <div className="text-2xl sm:text-3xl font-black text-emerald-400 font-mono tracking-tight">
            ~{formatPrice(monthlyTotalMxn)}
          </div>
          <div className="text-xs text-slate-300 mt-1 flex items-center justify-between">
            <span>2 fechas al mes</span>
            <span className="font-semibold text-emerald-300 font-mono">Derrama fija en campus</span>
          </div>
        </div>
      </div>

      {/* Breakdown Table with Filtering */}
      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs my-auto">
        <div className="px-4 py-2.5 bg-slate-50/80 border-b border-slate-200 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-700">Desglose de Partidas Operativas:</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs">
            <button
              onClick={() => setFilterMode("all")}
              className={`px-2.5 py-1 rounded-md text-[11px] font-semibold transition-colors cursor-pointer ${
                filterMode === "all" ? "bg-slate-900 text-white" : "bg-white text-slate-600 hover:bg-slate-100"
              }`}
            >
              Todos (6)
            </button>
            <button
              onClick={() => setFilterMode("wortev")}
              className={`px-2.5 py-1 rounded-md text-[11px] font-semibold transition-colors cursor-pointer ${
                filterMode === "wortev" ? "bg-emerald-600 text-white" : "bg-white text-emerald-700 hover:bg-emerald-50"
              }`}
            >
              Solo Catering Wortev ($37,800)
            </button>
            <button
              onClick={() => setFilterMode("swag")}
              className={`px-2.5 py-1 rounded-md text-[11px] font-semibold transition-colors cursor-pointer ${
                filterMode === "swag" ? "bg-indigo-600 text-white" : "bg-white text-indigo-700 hover:bg-indigo-50"
              }`}
            >
              Swag Oficial Cognition
            </button>
          </div>
        </div>

        <div className="overflow-x-auto max-h-[300px] custom-scrollbar">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50/50 text-slate-500 font-medium text-[11px]">
                <th className="py-2 px-3 sm:px-4">Rubro &amp; Concepto</th>
                <th className="py-2 px-3">Descripción y Cantidad</th>
                <th className="py-2 px-3 text-right">Costo Unitario</th>
                <th className="py-2 px-3 sm:px-4 text-right">Total Estimado</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredItems.map((item) => (
                <tr
                  key={item.id}
                  className={`hover:bg-slate-50/80 transition-colors ${
                    item.highlight ? "bg-emerald-50/40 font-medium" : ""
                  }`}
                >
                  <td className="py-2.5 px-3 sm:px-4">
                    <div className="flex items-center gap-2">
                      {item.highlight ? (
                        <span className="p-1 rounded bg-emerald-100 text-emerald-700">
                          <Utensils className="w-3.5 h-3.5" />
                        </span>
                      ) : (
                        <span className="p-1 rounded bg-slate-100 text-slate-600">
                          <Shirt className="w-3.5 h-3.5" />
                        </span>
                      )}
                      <div>
                        <div className="font-bold text-slate-900">{item.rubro}</div>
                        <span
                          className={`inline-block text-[10px] px-1.5 py-0.2 rounded font-medium ${
                            item.highlight
                              ? "bg-emerald-100 text-emerald-800 border border-emerald-200"
                              : "bg-slate-100 text-slate-600"
                          }`}
                        >
                          {item.tag}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="py-2.5 px-3 text-slate-600 max-w-xs">{item.description}</td>
                  <td className="py-2.5 px-3 text-right font-mono text-slate-600 whitespace-nowrap">
                    {formatPrice(item.unitMxn)} / {item.unitLabel}
                  </td>
                  <td className="py-2.5 px-3 sm:px-4 text-right font-mono font-bold text-slate-900 whitespace-nowrap">
                    <span className={item.highlight ? "text-emerald-700 font-extrabold text-sm" : ""}>
                      {formatPrice(item.totalMxn)}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Official Footnote from PDF */}
      <div className="p-2.5 rounded-xl bg-amber-50/80 border border-amber-200/80 text-[11px] text-amber-900 flex items-start gap-2">
        <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
        <div className="leading-snug">
          <strong>Nota Operativa:</strong> Los roll-ups representan un costo único reutilizable para todas las ediciones. Los consumos de alimentos y bebidas se adaptarán a la cotización final del menú provisto por el chef o banquetera interna de Campus Wortev.
        </div>
      </div>

      {/* Slide Navigation Footnote */}
      <div className="pt-2 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-500">
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          <span>Cognition liquida directamente las facturas de catering emitidas por Campus Wortev.</span>
        </div>
        <span className="font-mono text-slate-400 text-[11px]">Diapositiva 04 / 07</span>
      </div>
    </div>
  );
}
