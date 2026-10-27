import React, { useState } from 'react';
import { 
  TOGO_LEADERSHIP_CHRONOLOGY, 
  TOGO_REPRESENTATIVES, 
  TOGO_CHURCH_OVERVIEW,
  LOCAL_PARISH_ADAMAVO_2 
} from '../data/historyAndLeadership';
import { HistoricalLeader } from '../types';
import { Award, CheckCircle2, ChevronRight, BookOpen, Quote, X, Landmark, MapPin, Users, HeartHandshake, Shield, Sparkles } from 'lucide-react';

export const LeadershipSection: React.FC = () => {
  const [selectedLeader, setSelectedLeader] = useState<HistoricalLeader | null>(null);
  const [activeFilter, setActiveFilter] = useState<'tous' | 'presidents' | 'local'>('tous');

  const filteredLeaders = activeFilter === 'local'
    ? TOGO_LEADERSHIP_CHRONOLOGY.filter(l => l.id.includes('amouzou'))
    : activeFilter === 'presidents'
    ? TOGO_LEADERSHIP_CHRONOLOGY.filter(l => !l.id.includes('amouzou'))
    : TOGO_LEADERSHIP_CHRONOLOGY;

  return (
    <section id="dirigeants" className="py-20 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-amber-800 mb-2">
            <span>Gouvernance Spirituelle du Togo</span>
            <span aria-hidden="true">·</span>
            <span>Des Pionniers de 1936 à Aujourd'hui</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-stone-900 tracking-tight text-balance">
            La Lignée des Dirigeants des Assemblées de Dieu du Togo
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed font-sans">
            Retracez la succession apostolique et pastorale de l'Église Évangélique des Assemblées de Dieu du Togo (EEADT) : des pionniers de 1936 au premier président national le Rév. Pasgo Bila Daniel, à l'ère bâtisseuse du Rév. Djakouti Mitré (37 ans), au président actuel le Rév. Dr. Adadé Ayi Migbloessan, ainsi que le berger de la paroisse locale d'Adamavo 2, le <strong>Pasteur AMOUZOU</strong>.
          </p>
        </div>

        {/* SPOTLIGHT : PAROISSE D'ADAMAVO 2 - TEMPLE DE LA RÉSURRECTION AVEC LE PASTEUR AMOUZOU */}
        <div className="mt-12 bg-gradient-to-br from-stone-950 via-stone-900 to-amber-950 text-white rounded-2xl border border-stone-800 p-6 sm:p-8 shadow-xl relative overflow-hidden">
          <div className="relative z-10">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-white/10">
              <div>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-amber-300 font-mono">
                  <Sparkles size={14} className="text-amber-400" />
                  <span>Paroisse Locale en Vedette</span>
                  <span aria-hidden="true">·</span>
                  <span>Grand Lomé (Golfe 6, Togo)</span>
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mt-1">
                  Temple de la Résurrection · Adamavo 2
                </h3>
                <p className="text-xs sm:text-sm text-stone-300 mt-1 max-w-2xl font-sans">
                  Église locale sous l'autorité spirituelle de l'EEADT, implantée à Adamavo 2 pour rayonner de la puissance de la Résurrection du Christ.
                </p>
              </div>

              <div className="flex items-center gap-3 shrink-0 bg-white/10 backdrop-blur-xs p-3.5 rounded-xl border border-white/15">
                <MapPin size={22} className="text-amber-400 shrink-0" />
                <div className="text-xs">
                  <p className="font-semibold text-white">Localisation : Adamavo 2</p>
                  <p className="text-[11px] text-stone-300">Route de Baguida · Commune du Golfe 6, Togo</p>
                </div>
              </div>
            </div>

            {/* Pasteur AMOUZOU Profile Box */}
            <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              
              <div className="lg:col-span-8 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-300 font-serif font-bold text-2xl shrink-0 shadow-inner">
                    A
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase bg-amber-400/20 text-amber-300 px-2.5 py-0.5 rounded font-semibold border border-amber-400/30">
                      Berger Titulaire d'Adamavo 2
                    </span>
                    <h4 className="text-2xl font-serif font-bold text-white mt-1.5">
                      Pasteur AMOUZOU
                    </h4>
                    <p className="text-xs text-amber-300 font-medium">
                      Pasteur Titulaire de l'Église des Assemblées de Dieu – Temple de la Résurrection (Adamavo 2)
                    </p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-stone-200 leading-relaxed font-sans">
                  {LOCAL_PARISH_ADAMAVO_2.biographiePasteur}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-xs">
                    <p className="font-semibold text-amber-300 flex items-center gap-1.5">
                      <CheckCircle2 size={13} className="text-amber-400" />
                      <span>Rassemblements Spécifiques :</span>
                    </p>
                    <p className="text-stone-300 mt-1 text-[11px]">
                      • Lundi (18h30) : Jeunesse JAD (Direct Web)<br />
                      • Mardi (19h30) : Rassemblement des Hommes<br />
                      • Dimanche (08h00) : Culte d'Adoration &amp; Sainte-Cène
                    </p>
                  </div>

                  <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-xs">
                    <p className="font-semibold text-amber-300 flex items-center gap-1.5">
                      <CheckCircle2 size={13} className="text-amber-400" />
                      <span>Permanence &amp; Accueil :</span>
                    </p>
                    <p className="text-stone-300 mt-1 text-[11px]">
                      Mardis et Jeudis (09h00 – 13h00) sur rendez-vous pastoral pour prière, conseil et écoute fraternelle.
                    </p>
                  </div>
                </div>
              </div>

              {/* Pastoral Quote Card */}
              <div className="lg:col-span-4 bg-amber-950/40 border border-amber-800/60 rounded-xl p-5 flex flex-col justify-between h-full">
                <div>
                  <Quote size={24} className="text-amber-400/50 mb-2" />
                  <p className="text-xs sm:text-sm italic font-serif text-amber-100 leading-relaxed">
                    « Au Temple de la Résurrection d'Adamavo 2, nous proclamons que Jésus-Christ est vivant hier, aujourd'hui et éternellement, capable de restaurer toute vie brisée et de bénir abondamment nos familles. »
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-amber-800/40 text-[11px] font-sans text-amber-300 font-semibold">
                  — Pasteur AMOUZOU, Berger d'Adamavo 2
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* NATIONAL PRESIDENTS GALLERY (From Pioneer to Current) */}
        <div className="mt-16">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 border-b border-stone-200">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-800">
                <Landmark size={14} />
                <span>Succession Présidentielle Nationale (EEADT)</span>
              </div>
              <h3 className="text-2xl font-serif font-bold text-stone-900 mt-1">
                Les Présidents Nationaux des Assemblées de Dieu du Togo
              </h3>
              <p className="text-xs text-stone-500 mt-0.5">
                Les serviteurs de Dieu qui ont présidé aux destinées de l'Église au Togo depuis 1936
              </p>
            </div>

            <div className="flex items-center gap-1 p-1 bg-stone-100 rounded-xl">
              <button
                onClick={() => setActiveFilter('tous')}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                  activeFilter === 'tous' ? 'bg-white text-stone-900 shadow-xs font-semibold' : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                Tous les Dirigeants ({TOGO_LEADERSHIP_CHRONOLOGY.length})
              </button>
              <button
                onClick={() => setActiveFilter('presidents')}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                  activeFilter === 'presidents' ? 'bg-white text-stone-900 shadow-xs font-semibold' : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                Présidents Nationaux
              </button>
              <button
                onClick={() => setActiveFilter('local')}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                  activeFilter === 'local' ? 'bg-white text-stone-900 shadow-xs font-semibold' : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                Paroisse d'Adamavo 2
              </button>
            </div>
          </div>

          {/* Leaders Grid */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredLeaders.map((leader, index) => {
              const isCurrent = leader.estActuel;
              const isAmouzou = leader.id.includes('amouzou');

              return (
                <div
                  key={leader.id}
                  className={`rounded-2xl border transition-all p-6 flex flex-col justify-between shadow-2xs hover:shadow-md ${
                    isAmouzou
                      ? 'bg-amber-50/80 border-amber-300 ring-2 ring-amber-400/20'
                      : isCurrent
                      ? 'bg-stone-900 text-white border-stone-800'
                      : 'bg-stone-50/70 hover:bg-white border-stone-200'
                  }`}
                >
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <span className={`text-xs font-mono font-semibold ${isCurrent ? 'text-amber-400' : 'text-amber-900'}`}>
                        {String(index + 1).padStart(2, '0')}.
                      </span>
                      <span className={`text-[11px] font-mono px-2 py-0.5 rounded border ${
                        isCurrent 
                          ? 'bg-white/10 text-amber-300 border-white/20' 
                          : 'bg-white text-stone-700 border-stone-200'
                      }`}>
                        {leader.mandat}
                      </span>
                    </div>

                    <h4 className={`text-lg font-serif font-bold mt-3 ${isCurrent ? 'text-white' : 'text-stone-900'}`}>
                      {leader.nom}
                    </h4>
                    <p className={`text-xs font-medium mt-0.5 ${isCurrent ? 'text-amber-300' : 'text-amber-800'}`}>
                      {leader.titre}
                    </p>

                    <p className={`text-[11px] mt-2 italic font-serif ${isCurrent ? 'text-stone-400' : 'text-stone-500'}`}>
                      Époque : {leader.epoque}
                    </p>

                    <p className={`text-xs mt-3 line-clamp-3 leading-relaxed ${isCurrent ? 'text-stone-300' : 'text-stone-600'}`}>
                      {leader.biographie}
                    </p>

                    <div className={`mt-4 pt-3 border-t ${isCurrent ? 'border-white/10' : 'border-stone-200'}`}>
                      <p className={`text-[11px] font-semibold uppercase tracking-wider mb-1.5 ${isCurrent ? 'text-amber-300' : 'text-stone-800'}`}>
                        Fait Marquant :
                      </p>
                      <p className={`text-xs flex items-start gap-1.5 ${isCurrent ? 'text-stone-300' : 'text-stone-600'}`}>
                        <CheckCircle2 size={13} className="text-amber-500 shrink-0 mt-0.5" />
                        <span>{leader.realisationsCles[0]}</span>
                      </p>
                    </div>
                  </div>

                  <div className={`mt-6 pt-3 border-t flex items-center justify-between ${isCurrent ? 'border-white/10' : 'border-stone-200'}`}>
                    <span className={`text-[11px] ${isCurrent ? 'text-stone-400' : 'text-stone-500'}`}>
                      Nationalité : {leader.nationalite}
                    </span>
                    <button
                      onClick={() => setSelectedLeader(leader)}
                      className={`text-xs font-semibold flex items-center gap-1 hover:underline ${
                        isCurrent ? 'text-amber-300 hover:text-white' : 'text-amber-800 hover:text-amber-950'
                      }`}
                    >
                      <span>Fiche Complète</span>
                      <ChevronRight size={13} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* TOGO EXECUTIVE BOARD MEMBERS (BUREAU EXÉCUTIF NATIONAL) */}
        <div className="mt-16 bg-stone-900 text-white rounded-2xl border border-stone-800 p-6 sm:p-8 shadow-lg">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-stone-800">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-amber-400 font-mono">
                Conseil Général Électif d'Atakpamé &amp; ESTAO Lomé
              </span>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mt-1">
                Le Bureau Exécutif National des Assemblées de Dieu du Togo
              </h3>
              <p className="text-xs text-stone-300 mt-1 max-w-2xl font-sans">
                L'équipe dirigeante investie le 13 octobre 2024 assurant la gouvernance doctrinale, administrative et missionnaire pour l'ensemble du territoire togolais.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0 bg-stone-800/90 p-3 rounded-xl border border-stone-700">
              <Landmark size={20} className="text-amber-400 shrink-0" />
              <div className="text-xs">
                <p className="font-semibold text-white">Siège : Lomé, Togo</p>
                <p className="text-[11px] text-stone-400">Campus de l'ESTAO · 5 Régions</p>
              </div>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {TOGO_REPRESENTATIVES.map((rep, idx) => (
              <div key={idx} className="p-4 bg-stone-850 rounded-xl border border-stone-700/80 hover:border-amber-400/60 transition-colors">
                <div className="flex items-center justify-between text-[11px] mb-1">
                  <span className="text-amber-400 font-semibold">{rep.fonction}</span>
                </div>
                <h5 className="text-sm font-semibold text-white">{rep.nom}</h5>
                <p className="text-xs text-stone-300 mt-1 leading-relaxed">{rep.roleDescription}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Selected Leader Modal Details */}
        {selectedLeader && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/75 backdrop-blur-xs">
            <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden flex flex-col max-h-[90vh]">
              
              <div className="bg-stone-900 text-white p-6 flex items-center justify-between">
                <div>
                  <span className="text-xs uppercase tracking-widest text-amber-300 font-semibold">
                    Archive Biographique Officielle EEADT
                  </span>
                  <h3 className="text-2xl font-serif font-bold text-white mt-1">
                    {selectedLeader.nom}
                  </h3>
                  <p className="text-xs text-stone-300 mt-0.5">
                    {selectedLeader.titre} · Mandat : {selectedLeader.mandat}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedLeader(null)}
                  className="p-1.5 text-stone-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="p-6 overflow-y-auto space-y-6">
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-2">
                    Contexte &amp; Biographie Pastorale
                  </h4>
                  <p className="text-sm text-stone-700 leading-relaxed font-sans">
                    {selectedLeader.biographie}
                  </p>
                </div>

                {/* Quote */}
                <div className="p-4 bg-amber-50/80 border border-amber-200 rounded-xl relative">
                  <Quote size={20} className="text-amber-700/40 absolute top-3 right-3" />
                  <p className="text-xs sm:text-sm italic font-serif text-amber-950 leading-relaxed">
                    « {selectedLeader.citationMarquante} »
                  </p>
                  <p className="text-[11px] uppercase tracking-wider font-semibold text-amber-800 mt-2">
                    — {selectedLeader.nom}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-3">
                    Réalisations Majeures pour l'Église au Togo
                  </h4>
                  <ul className="space-y-2">
                    {selectedLeader.realisationsCles.map((realisation, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-stone-700 bg-stone-50 p-2.5 rounded-lg border border-stone-200">
                        <CheckCircle2 size={15} className="text-amber-800 shrink-0 mt-0.5" />
                        <span>{realisation}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="p-4 bg-stone-50 border-t border-stone-200 flex justify-end">
                <button
                  onClick={() => setSelectedLeader(null)}
                  className="px-4 py-2 text-xs font-semibold text-stone-800 bg-white border border-stone-300 rounded-lg hover:bg-stone-100 transition-colors"
                >
                  Fermer la Fiche
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
