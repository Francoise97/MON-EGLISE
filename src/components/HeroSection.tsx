import React from 'react';
import { ArrowRight, BookOpen, Clock, Calendar, Users, ShieldCheck, MapPin, Sparkles } from 'lucide-react';
import { LOCAL_PARISH_ADAMAVO_2, TOGO_CHURCH_OVERVIEW } from '../data/historyAndLeadership';

interface HeroSectionProps {
  onExploreHistory: () => void;
  onExploreArchives: () => void;
  onOpenPortal: () => void;
  onViewSchedules: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreHistory,
  onExploreArchives,
  onOpenPortal,
  onViewSchedules
}) => {
  return (
    <section className="relative bg-stone-900 text-white overflow-hidden">
      {/* Background imagery with measured contrast scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/church_sanctuary_interior_1793094477151.jpg"
          alt="Sanctuaire du Temple de la Résurrection d'Adamavo 2"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center filter brightness-[0.34] contrast-[1.1]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/65 to-stone-950/85" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-14 lg:pt-24 lg:pb-20">
        <div className="max-w-3xl">
          
          {/* Editorial Kicker */}
          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold tracking-widest uppercase text-amber-300/90 mb-3 font-sans">
            <span className="flex items-center gap-1.5 text-amber-400">
              <MapPin size={13} />
              <span>Adamavo 2, Grand Lomé</span>
            </span>
            <span aria-hidden="true" className="text-amber-500">·</span>
            <span>Golfe 6 · Togo</span>
            <span aria-hidden="true" className="text-amber-500">·</span>
            <span>EEADT depuis 1936</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-[1.15] text-balance">
            Église des Assemblées de Dieu
            <span className="block text-amber-400 font-serif text-2xl sm:text-3xl lg:text-4xl mt-1.5 font-semibold">
              Paroisse d'Adamavo 2 · Temple de la Résurrection
            </span>
          </h1>

          {/* Pastoral Badge */}
          <div className="mt-4 inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-lg bg-white/10 border border-white/20 backdrop-blur-xs text-xs sm:text-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-stone-300">Conduite Spirituelle &amp; Pastorale :</span>
            <span className="font-semibold text-white tracking-wide">Pasteur AMOUZOU</span>
          </div>

          <p className="mt-5 text-base sm:text-lg text-stone-200 leading-relaxed font-sans max-w-2xl font-light">
            Bienvenue sur le portail officiel du <strong>Temple de la Résurrection à Adamavo 2</strong>. Une communauté chrétienne pentecôtiste fervente et chaleureuse, unie dans la proclamation de l'Évangile intégral, l'exercice des dons de l'Esprit et la communion fraternelle au Togo.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3 sm:gap-4">
            <button
              onClick={onViewSchedules}
              className="inline-flex items-center gap-2 px-5 py-3 text-xs sm:text-sm font-semibold text-stone-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-all shadow-lg hover:shadow-amber-400/20"
            >
              <Clock size={16} />
              <span>Horaires des Cultes &amp; Semaine</span>
              <ArrowRight size={14} />
            </button>

            <button
              onClick={onExploreHistory}
              className="inline-flex items-center gap-2 px-5 py-3 text-xs sm:text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/25 rounded-xl transition-all backdrop-blur-xs"
            >
              <BookOpen size={16} className="text-amber-300" />
              <span>Histoire &amp; Dirigeants du Togo (1936–Présent)</span>
            </button>

            <button
              onClick={onExploreArchives}
              className="inline-flex items-center gap-2 px-4 py-3 text-xs font-semibold text-stone-300 hover:text-white bg-stone-800/60 hover:bg-stone-800 border border-stone-700 rounded-xl transition-all"
            >
              <ShieldCheck size={15} className="text-amber-400" />
              <span>Archives Officielles</span>
            </button>
          </div>

          {/* Scripture banner */}
          <div className="mt-8 pt-5 border-t border-white/15 max-w-2xl">
            <p className="text-xs sm:text-sm italic text-stone-300 font-serif leading-relaxed">
              « Jésus lui dit : Je suis la résurrection et la vie. Celui qui croit en moi vivra, quand même il serait mort. »
            </p>
            <p className="text-[11px] uppercase tracking-wider text-amber-300/90 mt-1 font-sans">
              Jean 11:25 · Verset d'ancrage du Temple de la Résurrection d'Adamavo 2
            </p>
          </div>

        </div>
      </div>

      {/* Operational Utility Ribbon - 4-column KPI strip below hero */}
      <div className="relative z-10 border-t border-white/10 bg-stone-950/85 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 lg:gap-8">
            
            <div className="flex items-start gap-3">
              <div className="p-2.5 rounded-lg bg-amber-500/10 text-amber-400 shrink-0">
                <Clock size={18} />
              </div>
              <div>
                <p className="text-[11px] text-stone-400 uppercase tracking-wider">Culte du Dimanche</p>
                <p className="text-sm font-semibold text-white mt-0.5">08h00 – 11h30</p>
                <p className="text-xs text-amber-300 mt-0.5">Adoration &amp; Sainte-Cène</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2.5 rounded-lg bg-amber-500/10 text-amber-400 shrink-0">
                <Calendar size={18} />
              </div>
              <div>
                <p className="text-[11px] text-stone-400 uppercase tracking-wider">Semaine à Adamavo 2</p>
                <p className="text-xs sm:text-sm font-semibold text-white mt-0.5">Lundi JAD &amp; Mardi Hommes</p>
                <p className="text-xs text-stone-400 mt-0.5">18h30 (JAD) · 19h30 (Hommes)</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2.5 rounded-lg bg-amber-500/10 text-amber-400 shrink-0">
                <Users size={18} />
              </div>
              <div>
                <p className="text-[11px] text-stone-400 uppercase tracking-wider">Berger Local</p>
                <p className="text-sm font-semibold text-white mt-0.5">Pasteur AMOUZOU</p>
                <p className="text-xs text-stone-400 mt-0.5">Temple de la Résurrection</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2.5 rounded-lg bg-amber-500/10 text-amber-400 shrink-0">
                <ShieldCheck size={18} />
              </div>
              <div>
                <p className="text-[11px] text-stone-400 uppercase tracking-wider">Présidence Nationale EEADT</p>
                <p className="text-xs sm:text-sm font-semibold text-white mt-0.5">Rév. Dr. Adadé Ayi</p>
                <p className="text-xs text-stone-400 mt-0.5">ESTAO Lomé · 1 500+ Églises</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
