import React from 'react';

export function CognitionLogo({ className = "w-6 h-6", textClassName = "text-base font-bold tracking-tight" }) {
  return (
    <div className="flex items-center gap-2">
      <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="14" fill="#09090b" />
        <circle cx="50" cy="18" r="10" fill="#09090b" />
        <circle cx="50" cy="82" r="10" fill="#09090b" />
        <circle cx="22" cy="34" r="10" fill="#09090b" />
        <circle cx="78" cy="34" r="10" fill="#09090b" />
        <circle cx="22" cy="66" r="10" fill="#09090b" />
        <circle cx="78" cy="66" r="10" fill="#09090b" />
        <path d="M50 28V40M50 60V72M30 40L42 46M58 54L70 60M30 60L42 54M58 46L70 40" stroke="#09090b" strokeWidth="5" strokeLinecap="round" />
      </svg>
      {textClassName && <span className={`font-semibold text-slate-900 ${textClassName}`}>Cognition</span>}
    </div>
  );
}

export function DevinLogo({ className = "w-5 h-5", textClassName = "text-sm font-bold tracking-tight" }) {
  return (
    <div className="flex items-center gap-1.5">
      <div className="relative flex items-center justify-center p-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-600">
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="7" r="3.5" fill="currentColor" />
          <path d="M5 19c0-3.5 3.13-6.5 7-6.5s7 3 7 6.5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
          <circle cx="17.5" cy="16.5" r="2" fill="#10b981" />
        </svg>
      </div>
      {textClassName && (
        <span className={`text-slate-900 ${textClassName}`}>
          Devin <span className="text-emerald-600 font-mono text-[11px] font-normal px-1.5 py-0.5 rounded bg-emerald-50 border border-emerald-200">AI</span>
        </span>
      )}
    </div>
  );
}

export function WortevLogo({ className = "w-5 h-5", textClassName = "text-sm font-bold tracking-tight" }) {
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex items-center justify-center w-6 h-6 rounded-lg bg-gradient-to-tr from-indigo-600 to-violet-500 text-white font-bold text-xs shadow-xs">
        W
      </div>
      {textClassName && (
        <span className={`text-slate-900 ${textClassName}`}>
          Campus <span className="text-indigo-600">Wortev</span>
        </span>
      )}
    </div>
  );
}

export function PartnershipBadge() {
  return (
    <div className="flex items-center gap-2 px-3 py-1 bg-white/90 border border-slate-200 rounded-full shadow-xs backdrop-blur-md">
      <div className="flex items-center gap-1.5">
        <CognitionLogo className="w-4 h-4" textClassName="text-xs font-bold text-slate-800" />
      </div>
      <span className="text-slate-300 font-light">×</span>
      <div className="flex items-center gap-1.5">
        <WortevLogo className="w-4 h-4" textClassName="text-xs font-bold text-slate-800" />
      </div>
      <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
        Venue Partner
      </span>
    </div>
  );
}
