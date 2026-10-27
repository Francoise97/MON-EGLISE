import React, { useState } from 'react';
import { TOGO_CHURCH_OVERVIEW, TOGO_TIMELINE_MILESTONES, LOCAL_PARISH_ADAMAVO_2 } from '../data/historyAndLeadership';
import { Calendar, Globe2, Landmark, Compass, Award, CheckCircle2, MapPin, Sparkles, BookOpen } from 'lucide-react';

export const HistorySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Toutes');

  const categories = ['Toutes', 'Fondation', 'Doctrine', 'Mission', 'Présent'];

  const filteredMilestones = selectedCategory === 'Toutes'
    ? TOGO_TIMELINE_MILESTONES
    : TOGO_TIMELINE_MILESTONES.filter(m => m.categorie === selectedCategory);

  return (
    <section id="histoire" className="py-20 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-amber-800 mb-2 font-mono">
            <span>Histoire &amp; Racines Nationales</span>
            <span aria-hidden="true">·</span>
            <span>1936 – Présent</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-stone-900 tracking-tight text-balance">
            L'Histoire Authentique des Assemblées de Dieu au Togo
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed font-sans font-normal">
            De l'implantation pionnière de 1936 dans le Nord du Togo jusqu'aux plus de 1 500 assemblées actuelles, découvrez l'épopée de foi de l'Église Évangélique des Assemblées de Dieu du Togo (EEADT) et l'histoire locale du <strong>Temple de la Résurrection à Adamavo 2</strong> avec le <strong>Pasteur AMOUZOU</strong>.
          </p>
        </div>

        {/* Archival Feature Card */}
        <div className="mt-12 bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0">
          
          {/* Historical Photo */}
          <div className="lg:col-span-5 relative min-h-[380px] bg-stone-900">
            <img
              src="/src/assets/images/historic_1914_founders_1793094477723.jpg"
              alt="Archives historiques des pionniers évangéliques au Togo"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover filter contrast-[1.05]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-transparent to-transparent flex items-end p-6">
              <p className="text-xs font-serif italic text-stone-300">
                L'enracinement de l'Évangile intégral en terre togolaise : de la semence pionnière de 1936 à l'investiture historique à l'ESTAO de Lomé.
              </p>
            </div>
          </div>

          {/* Curatorial Text Content */}
          <div className="lg:col-span-7 p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs text-stone-500 mb-3 uppercase tracking-wider font-medium">
                <span>Archives Officielles de l'EEADT</span>
                <span aria-hidden="true">·</span>
                <span>Documenté d'après les Actes Synodaux du Togo</span>
              </div>

              <h3 className="text-2xl font-serif font-bold text-stone-900 mb-4">
                La Grande Aventure de la Foi Pentecôtiste en République Togolaise
              </h3>

              <div className="prose prose-stone text-stone-700 text-sm leading-relaxed space-y-4">
                <p className="first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:text-amber-900 first-letter:float-left first-letter:mr-3 first-letter:mt-1">
                  Dès 1936, les premiers pionniers et évangélistes ont apporté le flambeau de la Pentecôte au Togo. Traversant les frontières depuis la Haute-Volta (Burkina Faso) et s'implantant d'abord dans la région des Savanes au Nord, puis descendant avec puissance vers Atakpamé, Kpalimé et Lomé, l'Évangile a touché des cœurs assoiffés de vérité et de délivrance.
                </p>
                <p>
                  En 1965, l'Église franchit un cap décisif vers l'indépendance avec l'élection de son premier président national togolais, le <strong>Rév. Pasteur Pasgo Bila Daniel</strong>. Pendant 22 ans, ce pionnier a structuré les statuts juridiques de l'EEADT, obtenu la reconnaissance officielle auprès des autorités républicaines et ouvert les premières écoles de formation biblique.
                </p>
                <p>
                  En 1987 s'ouvre l'ère bâtisseuse sous la présidence du <strong>Rév. Djakouti Mitré</strong>. Pendant 37 années d'une fécondité extraordinaire, l'Église est passée de quelques dizaines de paroisses à plus de <strong>1 500 assemblées locales</strong>. Lomé est devenue la capitale de la théologie évangélique ouest-africaine avec l'<strong>ESTAO</strong> et <strong>FATAD</strong>.
                </p>
                <p>
                  En juillet-octobre 2024, le <strong>Rév. Dr. Adadé Ayi Migbloessan</strong> a été élu et investi solennellement à l'ESTAO de Lomé pour porter la vision d'une Église sainte et conquérante. Au niveau local, la <strong>Paroisse d'Adamavo 2 (Temple de la Résurrection)</strong>, sous la houlette du <strong>Pasteur AMOUZOU</strong>, constitue l'un des piliers vivants de cette foi dans le Grand Lomé.
                </p>
              </div>
            </div>

            {/* Quick Proof Metrics Strip */}
            <div className="mt-8 pt-6 border-t border-stone-200 grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-xl sm:text-2xl font-serif font-bold text-amber-900 tabular-nums">1936</p>
                <p className="text-xs text-stone-500 mt-0.5">Implantation au Togo</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-serif font-bold text-amber-900 tabular-nums">1 500+</p>
                <p className="text-xs text-stone-500 mt-0.5">Paroisses au Togo</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-serif font-bold text-amber-900 tabular-nums">350 000+</p>
                <p className="text-xs text-stone-500 mt-0.5">Fidèles dans les 5 Régions</p>
              </div>
            </div>

          </div>

        </div>

        {/* Interactive Chronological Timeline */}
        <div className="mt-16">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 border-b border-stone-200">
            <div>
              <h3 className="text-xl font-serif font-bold text-stone-900">
                Grandes Étapes Historiques des Assemblées de Dieu du Togo
              </h3>
              <p className="text-xs text-stone-500 mt-1">
                La chronologie nationale des pionniers de 1936 jusqu'à la paroisse d'Adamavo 2 et l'investiture de 2024
              </p>
            </div>

            {/* Category Filter Tabs */}
            <div className="flex items-center gap-1 p-1 bg-stone-200/70 rounded-xl overflow-x-auto max-w-full">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                    selectedCategory === cat
                      ? 'bg-white text-stone-900 shadow-xs font-semibold'
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Timeline Grid */}
          <div className="mt-8 space-y-4">
            {filteredMilestones.map((milestone) => (
              <div 
                key={milestone.annee + milestone.titre}
                className="p-6 bg-white rounded-xl border border-stone-200 hover:border-amber-300 transition-all shadow-2xs hover:shadow-xs grid grid-cols-1 md:grid-cols-12 gap-4 items-center"
              >
                {/* Year and Location */}
                <div className="md:col-span-3">
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-serif font-bold text-amber-900 tabular-nums">
                      {milestone.annee}
                    </span>
                    <span className="text-xs text-stone-500 font-medium">
                      {milestone.categorie}
                    </span>
                  </div>
                  <p className="text-xs text-stone-500 mt-1 flex items-center gap-1">
                    <MapPin size={12} className="text-amber-700" />
                    <span>{milestone.lieu}</span>
                  </p>
                </div>

                {/* Milestone Details */}
                <div className="md:col-span-6">
                  <h4 className="text-base font-semibold text-stone-900">
                    {milestone.titre}
                  </h4>
                  <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                    {milestone.description}
                  </p>
                </div>

                {/* Historical Impact */}
                <div className="md:col-span-3 bg-stone-50 p-3 rounded-lg border border-stone-200/60">
                  <p className="text-[11px] font-semibold text-amber-950 uppercase tracking-wider">
                    Impact National au Togo
                  </p>
                  <p className="text-xs text-stone-600 mt-1">
                    {milestone.impact}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
