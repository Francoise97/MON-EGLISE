import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, Landmark, Globe, BookOpen, Sparkles, User } from 'lucide-react';
import { LOCAL_PARISH_ADAMAVO_2, TOGO_CHURCH_OVERVIEW } from '../data/historyAndLeadership';

interface ContactSectionProps {
  onExploreHistory: () => void;
  onExploreDoctrine: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  onExploreHistory,
  onExploreDoctrine
}) => {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    destinataire: 'Paroisse Adamavo 2 (Pasteur AMOUZOU)',
    sujet: 'Demande pastorale ou prière',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.message.trim()) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        nom: '',
        email: '',
        telephone: '',
        destinataire: 'Paroisse Adamavo 2 (Pasteur AMOUZOU)',
        sujet: 'Demande pastorale ou prière',
        message: ''
      });
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 bg-stone-100/70 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-amber-800 mb-2 font-mono">
            <Landmark size={14} className="text-amber-800" />
            <span>Localisation &amp; Coordonnées Officielles</span>
            <span aria-hidden="true">·</span>
            <span>Togo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-stone-900 tracking-tight text-balance">
            Temple de la Résurrection (Adamavo 2) &amp; Siège National
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed font-sans">
            Retrouvez les coordonnées complètes de la <strong>Paroisse d'Adamavo 2 (Temple de la Résurrection)</strong> sous la conduite du <strong>Pasteur AMOUZOU</strong>, ainsi que le Siège National de l'EEADT et les campus théologiques à Lomé.
          </p>
        </div>

        {/* Info Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Official Headquarter Cards */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* FEATURED: Local Parish Adamavo 2 Card */}
            <div className="bg-gradient-to-br from-stone-950 via-stone-900 to-amber-950 text-white rounded-2xl border border-stone-800 p-6 sm:p-8 shadow-md">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-mono uppercase bg-amber-400/20 text-amber-300 px-2.5 py-0.5 rounded font-semibold border border-amber-400/30">
                    <Sparkles size={12} className="text-amber-400" />
                    <span>Paroisse Locale</span>
                  </span>
                  <h3 className="text-2xl font-serif font-bold text-white mt-2">
                    {LOCAL_PARISH_ADAMAVO_2.nom} · {LOCAL_PARISH_ADAMAVO_2.quartier}
                  </h3>
                  <p className="text-xs text-amber-300 font-medium mt-0.5">
                    {LOCAL_PARISH_ADAMAVO_2.titreOfficiel}
                  </p>
                  <p className="text-xs text-stone-300 mt-1 flex items-center gap-1.5">
                    <User size={13} className="text-amber-400" />
                    <span>Bergerie : <strong>{LOCAL_PARISH_ADAMAVO_2.pasteurTitulaire}</strong></span>
                  </p>
                </div>
                <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-400/40 text-amber-300 flex items-center justify-center shrink-0">
                  <MapPin size={24} />
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-stone-200">
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <div className="flex items-center gap-2 text-amber-300 font-semibold mb-1">
                    <MapPin size={15} />
                    <span>Adresse Exacte :</span>
                  </div>
                  <p className="text-stone-300 leading-relaxed text-[11px]">
                    {LOCAL_PARISH_ADAMAVO_2.coordonnees.adresseComplete}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <div className="flex items-center gap-2 text-amber-300 font-semibold mb-1">
                    <Phone size={15} />
                    <span>Ligne Pastorale :</span>
                  </div>
                  <p className="font-mono text-white text-[12px]">
                    {LOCAL_PARISH_ADAMAVO_2.coordonnees.telephone}
                  </p>
                  <p className="text-[10px] text-stone-400 mt-0.5">Pasteur AMOUZOU &amp; Secrétariat</p>
                </div>

                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <div className="flex items-center gap-2 text-amber-300 font-semibold mb-1">
                    <Clock size={15} />
                    <span>Permanence Pastorale :</span>
                  </div>
                  <p className="text-stone-300 leading-relaxed text-[11px]">
                    {LOCAL_PARISH_ADAMAVO_2.coordonnees.permanencePastorale}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <div className="flex items-center gap-2 text-amber-300 font-semibold mb-1">
                    <Mail size={15} />
                    <span>Courriel Paroissial :</span>
                  </div>
                  <p className="text-stone-300 font-mono text-[11px]">
                    {LOCAL_PARISH_ADAMAVO_2.coordonnees.email}
                  </p>
                </div>
              </div>
            </div>

            {/* National HQ Card */}
            <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-sm">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-[11px] font-mono uppercase bg-amber-100 text-amber-900 px-2.5 py-0.5 rounded font-semibold">
                    Siège National de l'EEADT
                  </span>
                  <h3 className="text-xl font-serif font-bold text-stone-900 mt-2">
                    Bureau Exécutif National des Assemblées de Dieu du Togo
                  </h3>
                  <p className="text-xs text-stone-500 mt-1">
                    Présidence du Rév. Dr. Adadé Ayi Migbloessan · Lomé, Togo
                  </p>
                </div>
                <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 text-amber-800 flex items-center justify-center shrink-0">
                  <Landmark size={24} />
                </div>
              </div>

              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-stone-600">
                <div className="p-3 rounded-xl bg-stone-50 border border-stone-200/70">
                  <span className="font-semibold text-stone-800 block">Siège Administratif :</span>
                  <span>Grand Sanctuaire Central &amp; Bureau National</span>
                  <span className="block text-stone-500">Lomé, République Togolaise</span>
                </div>

                <div className="p-3 rounded-xl bg-stone-50 border border-stone-200/70">
                  <span className="font-semibold text-stone-800 block">Instituts Théologiques :</span>
                  <span>ESTAO &amp; FATAD à Lomé</span>
                  <span className="block text-stone-500">Formation pastorale supérieure</span>
                </div>
              </div>
            </div>

            {/* Regional Dioceses in Togo */}
            <div className="bg-stone-900 text-white rounded-2xl p-6 sm:p-8 shadow-md">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-400 mb-3">
                <Globe size={14} />
                <span>Les 5 Régions Ecclésiastiques du Togo (Plus de 1 500 Paroisses)</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
                <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                  <p className="font-semibold text-white">Région Grand Lomé</p>
                  <p className="text-[11px] text-amber-300 mt-0.5">Adamavo 2, Golfe 1 à 7, Bè</p>
                </div>
                <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                  <p className="font-semibold text-white">Région Maritime</p>
                  <p className="text-[11px] text-stone-400 mt-0.5">Tsévié, Aného, Tabligbo</p>
                </div>
                <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                  <p className="font-semibold text-white">Région Plateaux</p>
                  <p className="text-[11px] text-stone-400 mt-0.5">Atakpamé, Kpalimé</p>
                </div>
                <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                  <p className="font-semibold text-white">Région Centrale</p>
                  <p className="text-[11px] text-stone-400 mt-0.5">Sokodé, Blitta, Tchamba</p>
                </div>
                <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                  <p className="font-semibold text-white">Région Kara</p>
                  <p className="text-[11px] text-stone-400 mt-0.5">Kara, Bafilo, Bassar</p>
                </div>
                <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                  <p className="font-semibold text-white">Région Savanes</p>
                  <p className="text-[11px] text-stone-400 mt-0.5">Dapaong, Mango, Cinkassé</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Direct Contact & Inquiry Form */}
          <div className="lg:col-span-5 bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-sm">
            <h3 className="text-xl font-serif font-bold text-stone-900">
              Formulaire de Contact Paroissial
            </h3>
            <p className="text-xs text-stone-500 mt-1 leading-relaxed">
              Pour contacter le <strong>Pasteur AMOUZOU</strong> au Temple de la Résurrection d'Adamavo 2 ou le secrétariat de l'église.
            </p>

            {submitted ? (
              <div className="mt-6 p-5 bg-emerald-50 border border-emerald-200 rounded-xl text-center space-y-2">
                <CheckCircle2 size={32} className="text-emerald-600 mx-auto" />
                <h4 className="text-sm font-semibold text-emerald-900">Message Transmis avec Succès</h4>
                <p className="text-xs text-emerald-700">
                  Votre message a été transmis au Pasteur AMOUZOU et au secrétariat paroissial d'Adamavo 2. Que le Seigneur vous bénisse.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-4 text-xs">
                <div>
                  <label className="block font-semibold text-stone-700 mb-1">
                    Destinataire
                  </label>
                  <select
                    value={formData.destinataire}
                    onChange={(e) => setFormData({ ...formData, destinataire: e.target.value })}
                    className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500/30"
                  >
                    <option value="Paroisse Adamavo 2 (Pasteur AMOUZOU)">Paroisse Adamavo 2 (Pasteur AMOUZOU)</option>
                    <option value="Secrétariat Paroissial Adamavo 2">Secrétariat Paroissial d'Adamavo 2</option>
                    <option value="Département de la Jeunesse (JAD)">Département de la Jeunesse (JAD - Adamavo 2)</option>
                    <option value="Ministère des Hommes">Ministère des Hommes (Adamavo 2)</option>
                    <option value="Bureau Exécutif National (EEADT Lomé)">Bureau Exécutif National (EEADT Lomé)</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-stone-700 mb-1">
                    Nom &amp; Prénom *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.nom}
                    onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                    placeholder="Ex: Frère / Sœur..."
                    className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500/30"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block font-semibold text-stone-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="votre.email@domaine.com"
                      className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500/30"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-stone-700 mb-1">
                      Téléphone *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.telephone}
                      onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}
                      placeholder="+228 90 ... ..."
                      className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500/30"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-stone-700 mb-1">
                    Objet de votre Demande
                  </label>
                  <input
                    type="text"
                    value={formData.sujet}
                    onChange={(e) => setFormData({ ...formData, sujet: e.target.value })}
                    placeholder="Ex: Demande de prière, baptême, rendez-vous pastoral..."
                    className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500/30"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-stone-700 mb-1">
                    Votre Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Écrivez votre message au Pasteur AMOUZOU..."
                    className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500/30 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-4 text-xs font-semibold text-white bg-amber-800 hover:bg-amber-900 rounded-xl transition-colors shadow-sm flex items-center justify-center gap-2"
                >
                  <Send size={14} />
                  <span>Envoyer au Pasteur AMOUZOU &amp; Secrétariat</span>
                </button>
              </form>
            )}

            <div className="mt-6 pt-6 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-500">
              <button onClick={onExploreHistory} className="text-amber-800 hover:underline">
                Histoire du Togo 1936 →
              </button>
              <button onClick={onExploreDoctrine} className="text-amber-800 hover:underline">
                16 Vérités de Foi →
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
