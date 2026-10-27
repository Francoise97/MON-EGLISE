import React, { useState } from 'react';
import { CultSchedule, PrayerRequest } from '../types';
import { LOCAL_PARISH_ADAMAVO_2 } from '../data/historyAndLeadership';
import { Clock, MapPin, User, Video, Heart, Send, CheckCircle2, CalendarCheck, Shield } from 'lucide-react';

interface CultSchedulesSectionProps {
  schedules: CultSchedule[];
  prayerRequests: PrayerRequest[];
  onSubmitPrayer: (req: { nomAuteur: string; requete: string; confidentialite: 'Publique' | 'Réservée aux Pasteurs & Intercesseurs' }) => void;
}

export const CultSchedulesSection: React.FC<CultSchedulesSectionProps> = ({
  schedules,
  prayerRequests,
  onSubmitPrayer
}) => {
  const [authorName, setAuthorName] = useState('');
  const [prayerText, setPrayerText] = useState('');
  const [confidentialite, setConfidentialite] = useState<'Publique' | 'Réservée aux Pasteurs & Intercesseurs'>('Publique');
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!prayerText.trim()) return;

    onSubmitPrayer({
      nomAuteur: authorName.trim() || 'Fidèle d\'Adamavo 2',
      requete: prayerText.trim(),
      confidentialite
    });

    setAuthorName('');
    setPrayerText('');
    setSubmittedSuccess(true);
    setTimeout(() => setSubmittedSuccess(false), 5000);
  };

  return (
    <section id="cultes" className="py-20 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-amber-800 mb-2">
            <span>Paroisse d'Adamavo 2 · Temple de la Résurrection</span>
            <span aria-hidden="true">·</span>
            <span>Grand Lomé, Golfe 6, Togo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-stone-900 tracking-tight text-balance">
            Horaires des Cultes &amp; Rassemblements Hebdomadaires
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed font-sans">
            Rejoignez l'assemblée du <strong>Temple de la Résurrection à Adamavo 2</strong> sous la direction spirituelle du <strong>Pasteur AMOUZOU</strong>. Venez vivre des moments d'adoration vivante, d'enseignement biblique et d'intercession puissante.
          </p>
        </div>

        {/* Worship Atmosphere Feature for Adamavo 2 */}
        <div className="mt-12 rounded-2xl overflow-hidden relative min-h-[300px] sm:min-h-[360px] bg-stone-950 flex items-end shadow-lg">
          <img
            src="/src/assets/images/congregation_worship_service_1793094479066.jpg"
            alt="Adoration fervente au Temple de la Résurrection d'Adamavo 2"
            referrerPolicy="no-referrer"
            className="absolute inset-0 w-full h-full object-cover filter brightness-[0.42]"
          />
          <div className="relative z-10 p-6 sm:p-10 max-w-3xl text-white">
            <span className="text-xs uppercase tracking-widest font-mono text-amber-300">
              « Jésus lui dit : Je suis la résurrection et la vie » — Jean 11:25
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold mt-2">
              Le Sanctuaire de la Présence Divine à Adamavo 2
            </h3>
            <p className="text-xs sm:text-sm text-stone-200 mt-2 font-sans leading-relaxed">
              Sous l'onction de l'Esprit Saint et la conduite du Pasteur AMOUZOU, le Temple de la Résurrection accueille chaque âme avec amour. Nos cultes sont rythmés par la louange profonde, l'autorité de la Parole biblique et des exaucements de prières.
            </p>
          </div>
        </div>

        {/* Schedules Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {schedules.map((schedule) => (
            <div
              key={schedule.id}
              className="bg-stone-50 rounded-2xl border border-stone-200 p-6 flex flex-col justify-between hover:border-amber-400/80 transition-all shadow-2xs hover:shadow-xs group"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-amber-900 uppercase tracking-wider font-mono">
                    {schedule.jour}
                  </span>
                  {schedule.estEnDirect && (
                    <span className="inline-flex items-center gap-1 text-[11px] font-medium text-red-600 bg-red-50 border border-red-200 px-2 py-0.5 rounded-full">
                      <Video size={11} />
                      <span>Direct Web</span>
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-serif font-bold text-stone-900 mt-2 group-hover:text-amber-900 transition-colors">
                  {schedule.titre}
                </h3>

                <div className="mt-4 space-y-2 text-xs text-stone-600">
                  <div className="flex items-center gap-2">
                    <Clock size={14} className="text-amber-800 shrink-0" />
                    <span className="font-semibold text-stone-900">{schedule.horaire}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={14} className="text-amber-800 shrink-0" />
                    <span className="truncate">{schedule.lieu}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User size={14} className="text-amber-800 shrink-0" />
                    <span className="font-medium text-stone-800">{schedule.orateur}</span>
                  </div>
                </div>

                <p className="text-xs text-stone-600 mt-4 leading-relaxed bg-white p-3 rounded-xl border border-stone-200/60">
                  {schedule.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-200 flex items-center justify-between text-xs">
                <span className="text-stone-500">Adamavo 2 · Golfe 6</span>
                <span className="text-amber-800 font-semibold">Entrée libre &amp; ouverte à tous</span>
              </div>
            </div>
          ))}
        </div>

        {/* Prayer Requests & Intercession Hub */}
        <div className="mt-16 bg-stone-50 rounded-2xl border border-stone-200 p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start shadow-sm">
          
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-amber-800 mb-2">
              <Heart size={14} className="text-amber-700" />
              <span>Intercession Paroissiale d'Adamavo 2</span>
            </div>
            <h3 className="text-2xl font-serif font-bold text-stone-900">
              Déposez Votre Sujet de Prière au Pasteur AMOUZOU
            </h3>
            <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed">
              Le Pasteur AMOUZOU et le collège d'intercession du Temple de la Résurrection présentent fidèlement chaque requête lors du culte, du rassemblement des hommes du mardi soir et des veillées de combat spirituel.
            </p>

            {submittedSuccess && (
              <div className="mt-4 p-3.5 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center gap-2 text-xs text-emerald-800 font-medium">
                <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                <span>Votre requête a été transmise avec succès au Pasteur AMOUZOU et à l'équipe d'intercession.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="mt-6 space-y-3.5">
              <div>
                <label className="block text-xs font-medium text-stone-700 mb-1">
                  Votre Nom ou Identifiant (optionnel)
                </label>
                <input
                  type="text"
                  value={authorName}
                  onChange={(e) => setAuthorName(e.target.value)}
                  placeholder="ex: Frère Emmanuel ou 'Une sœur en Christ d'Adamavo'"
                  className="w-full text-xs px-3.5 py-2.5 bg-white border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-600"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-700 mb-1">
                  Votre Sujet de Prière ou Témoignage *
                </label>
                <textarea
                  rows={3}
                  value={prayerText}
                  onChange={(e) => setPrayerText(e.target.value)}
                  placeholder="Décrivez votre besoin : guérison, délivrance, conversion d'un proche, paix dans le foyer, travail..."
                  required
                  className="w-full text-xs px-3.5 py-2.5 bg-white border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-600 resize-none"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-700 mb-1">
                  Niveau de Confidentialité
                </label>
                <select
                  value={confidentialite}
                  onChange={(e) => setConfidentialite(e.target.value as any)}
                  className="w-full text-xs px-3.5 py-2.5 bg-white border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-600"
                >
                  <option value="Publique">Publique (partagée au tableau de prière de l'Église)</option>
                  <option value="Réservée aux Pasteurs & Intercesseurs">Réservée au Pasteur AMOUZOU &amp; Collège d'Intercession</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-2.5 px-4 text-xs font-semibold text-white bg-amber-800 hover:bg-amber-900 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                <Send size={14} />
                <span>Transmettre à l'Équipe Pastorale d'Adamavo 2</span>
              </button>
            </form>
          </div>

          {/* Recent Public Prayers & Testimonies */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-xl border border-stone-200 shadow-2xs">
            <h4 className="text-base font-serif font-bold text-stone-900 pb-4 border-b border-stone-200">
              Requêtes en Cours &amp; Témoignages du Temple de la Résurrection
            </h4>
            <div className="mt-4 space-y-4">
              {prayerRequests.map((req) => (
                <div key={req.id} className="p-4 bg-stone-50 rounded-xl border border-stone-200/80">
                  <div className="flex items-center justify-between text-xs text-stone-500 mb-1.5 font-medium">
                    <span className="text-stone-900 font-semibold">{req.nomAuteur}</span>
                    <span className="font-mono text-[11px]">{req.dateSoumission}</span>
                  </div>
                  <p className="text-xs text-stone-700 leading-relaxed">
                    « {req.requete} »
                  </p>
                  {req.reponsePastorale && (
                    <div className="mt-2.5 pt-2 border-t border-stone-200/70 text-[11px] text-amber-950 bg-amber-50/70 p-2.5 rounded-lg">
                      <span className="font-semibold text-amber-900">Suivi Pastoral : </span>
                      {req.reponsePastorale}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
