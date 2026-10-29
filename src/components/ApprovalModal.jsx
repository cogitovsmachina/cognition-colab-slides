import React, { useState } from 'react';
import { X, ShieldCheck, Check, Copy, Calendar, Mail, Building, Utensils, Award, Sparkles, Send } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PartnershipBadge } from './Logos';

export default function ApprovalModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "Paulina Pérez",
    role: "Dirección de Campus Wortev",
    email: "paulina.perez@wortev.com",
    notes: "Aprobamos la propuesta para iniciar con la validación de fechas de octubre y noviembre para Terraza Jacarandas y cotizar el menú de catering interno.",
    datesConfirmed: true,
    cateringRequested: true,
    kickoffScheduled: true
  });
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.55 }
    });
  };

  const handleCopyReceipt = () => {
    const text = `CONFIRMACIÓN DE ALIANZA ESTRATÉGICA
Alianza: Meetups de Cognition (Devin) en Campus Wortev
Para: Enrique Diaz (Embajador Cognition CDMX / GDG CDMX)
De: ${formData.name} - ${formData.role}
Estatus: Alianza Aprobada en Principio
Acuerdos Iniciales:
✓ Validación de disponibilidad en Terraza Jacarandas (2 viernes/mes, 18:00 - 21:00 hrs)
✓ Cotización formal de alimentos y bebidas con el equipo interno de cocina de Wortev (~$37,800 MXN / evento)
✓ Inclusión de 6 horas mensuales de capacitación gratuita en IA para miembros de Wortev
Folio: #CW-COG-2026-Q4`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/65 backdrop-blur-sm animate-fade-scale"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-xl bg-white border border-slate-200 rounded-2xl shadow-2xl p-5 sm:p-6 overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-3.5 border-b border-slate-200">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-emerald-50 text-emerald-700">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-slate-900">
                Aprobación &amp; Coordinación de Alianza
              </h2>
              <p className="text-xs text-slate-500">
                Campus Wortev × Cognition (Devin)
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

        {/* Modal Body */}
        <div className="overflow-y-auto py-3 custom-scrollbar">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 text-xs text-slate-600 leading-relaxed">
                Esta acción confirma el <strong>visto bueno directivo</strong> para proceder con la reserva de fechas en Terraza Jacarandas y emisión de cotización del catering interno para los meetups oficiales de Cognition.
              </div>

              {/* Checkboxes for 3 Next Steps */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-800 uppercase tracking-wider block">
                  Compromisos de Arranque (Paso a Paso):
                </label>

                <label className="flex items-start gap-2.5 p-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 transition-colors cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.datesConfirmed}
                    onChange={(e) => setFormData({ ...formData, datesConfirmed: e.target.checked })}
                    className="mt-0.5 w-4 h-4 rounded text-emerald-600 focus:ring-emerald-500"
                  />
                  <div className="text-xs">
                    <span className="font-bold text-slate-900">1. Validar fechas en Terraza Jacarandas</span>
                    <p className="text-slate-500 text-[11px]">Bloquear 2 viernes por mes (18:00 a 21:00 hrs) en octubre y noviembre.</p>
                  </div>
                </label>

                <label className="flex items-start gap-2.5 p-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 transition-colors cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.cateringRequested}
                    onChange={(e) => setFormData({ ...formData, cateringRequested: e.target.checked })}
                    className="mt-0.5 w-4 h-4 rounded text-emerald-600 focus:ring-emerald-500"
                  />
                  <div className="text-xs">
                    <span className="font-bold text-slate-900">2. Solicitar cotización del catering interno</span>
                    <p className="text-slate-500 text-[11px]">Menú de pizzas artesanales, bocadillos y bebidas (~$37,800 MXN / evento).</p>
                  </div>
                </label>

                <label className="flex items-start gap-2.5 p-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 transition-colors cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.kickoffScheduled}
                    onChange={(e) => setFormData({ ...formData, kickoffScheduled: e.target.checked })}
                    className="mt-0.5 w-4 h-4 rounded text-emerald-600 focus:ring-emerald-500"
                  />
                  <div className="text-xs">
                    <span className="font-bold text-slate-900">3. Coordinar sesión de Kick-off</span>
                    <p className="text-slate-500 text-[11px]">Reunión de 20 min con Enrique Diaz para afinar detalles y lanzar convocatoria.</p>
                  </div>
                </label>
              </div>

              {/* Contact Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
                    Nombre del Representante
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:border-emerald-600"
                    required
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
                    Cargo / Dirección
                  </label>
                  <input
                    type="text"
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:border-emerald-600"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
                  Notas adicionales o fechas tentativas preferidas
                </label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:border-emerald-600"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-lg cursor-pointer"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 text-xs font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 rounded-lg shadow-sm flex items-center gap-1.5 cursor-pointer"
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>Aprobar Alianza &amp; Notificar</span>
                </button>
              </div>
            </form>
          ) : (
            /* Confirmation Receipt */
            <div className="py-4 text-center space-y-4">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-xs">
                <Check className="w-8 h-8 stroke-[2.5]" />
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  ¡Alianza Confirmada con Éxito!
                </h3>
                <p className="text-xs text-slate-600 mt-1 max-w-sm mx-auto">
                  Hemos generado el registro de visto bueno para Campus Wortev como Venue Partner Oficial de Cognition en CDMX.
                </p>
              </div>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-left max-w-md mx-auto text-xs space-y-2">
                <div className="flex justify-between font-mono text-[11px] text-slate-400 pb-2 border-b border-slate-200">
                  <span>FOLIO DE CONFIRMACIÓN</span>
                  <span className="font-bold text-slate-800">#CW-COG-2026-Q4</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Representante:</span>
                  <span className="font-bold text-slate-800">{formData.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Cargo:</span>
                  <span className="font-medium text-slate-700">{formData.role}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Derrama Facturada a Catering:</span>
                  <span className="font-bold text-emerald-700">$37,800 MXN / evento</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Formación Gratuita:</span>
                  <span className="font-bold text-indigo-700">6 Horas de IA / mes</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
                <button
                  onClick={handleCopyReceipt}
                  className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs border border-slate-300 transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? "Copiado" : "Copiar Confirmación"}</span>
                </button>

                <button
                  onClick={onClose}
                  className="px-5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow-xs transition-colors cursor-pointer"
                >
                  Listo / Continuar Presentación
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
