import React from 'react';
import { X, Keyboard, HelpCircle } from 'lucide-react';

export default function ShortcutsModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const shortcuts = [
    { key: "→ / Espacio / AvPág", action: "Avanzar a la siguiente diapositiva" },
    { key: "← / RePág", action: "Retroceder a la diapositiva anterior" },
    { key: "Inicio / Fin", action: "Ir a la primera / última diapositiva" },
    { key: "1 – 7", action: "Saltar directamente a la diapositiva N" },
    { key: "G", action: "Abrir / cerrar vista general en cuadrícula" },
    { key: "M", action: "Alternar moneda entre MXN ($) y USD ($)" },
    { key: "F", action: "Activar / salir de pantalla completa" },
    { key: "?", action: "Abrir / cerrar esta ventana de atajos" },
    { key: "Esc", action: "Cerrar ventanas modales" }
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-scale"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md bg-white border border-slate-200 rounded-2xl shadow-2xl p-5 overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-200">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-indigo-50 text-indigo-700">
              <Keyboard className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-bold text-slate-900">Atajos de Teclado</h2>
              <p className="text-xs text-slate-500">Navega la presentación con agilidad</p>
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

        {/* Shortcuts List */}
        <div className="divide-y divide-slate-100 my-3">
          {shortcuts.map((sc, idx) => (
            <div key={idx} className="py-2 flex items-center justify-between text-xs">
              <span className="text-slate-600 font-medium">{sc.action}</span>
              <kbd className="px-2 py-0.5 rounded bg-slate-100 border border-slate-300 font-mono text-[11px] font-bold text-slate-800 shadow-2xs">
                {sc.key}
              </kbd>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
          <span>También puedes deslizar la pantalla en móvil</span>
          <button
            onClick={onClose}
            className="px-3 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold cursor-pointer"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
}
