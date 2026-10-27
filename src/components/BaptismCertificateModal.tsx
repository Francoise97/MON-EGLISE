import React, { useRef } from 'react';
import { ChurchMember } from '../types';
import { ChurchLogo } from './ChurchLogo';
import { X, Printer, Download, CheckCircle2 } from 'lucide-react';

interface BaptismCertificateModalProps {
  member: ChurchMember | null;
  onClose: () => void;
}

export const BaptismCertificateModal: React.FC<BaptismCertificateModalProps> = ({
  member,
  onClose
}) => {
  const printRef = useRef<HTMLDivElement>(null);

  if (!member) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/75 backdrop-blur-xs">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Header */}
        <div className="bg-stone-900 text-white p-4 px-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CheckCircle2 size={18} className="text-amber-400" />
            <h3 className="text-base font-serif font-bold text-white">
              Certificat Officiel de Baptême d'Eau
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-white rounded-lg hover:bg-white/10"
          >
            <X size={18} />
          </button>
        </div>

        {/* Certificate Canvas */}
        <div className="p-8 overflow-y-auto bg-stone-100 flex items-center justify-center">
          <div 
            ref={printRef}
            className="w-full max-w-xl bg-[#FCFAF7] border-8 border-double border-amber-900/30 p-8 sm:p-10 shadow-lg text-center relative"
          >
            {/* Watermark Logo */}
            <div className="flex justify-center mb-4">
              <ChurchLogo size={60} showText={false} />
            </div>

            <p className="text-[11px] font-mono tracking-widest uppercase text-amber-900 font-semibold">
              Église Évangélique des Assemblées de Dieu
            </p>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 mt-1">
              Certificat de Baptême
            </h2>
            <p className="text-xs uppercase tracking-wider text-stone-500 font-medium mt-0.5">
              Par Immersion selon l'Ordonnance Scripturaire
            </p>

            <div className="my-6 border-b border-amber-900/20 max-w-xs mx-auto" />

            <p className="text-xs text-stone-600 font-serif italic">
              « Nous avons donc été ensevelis avec lui par le baptême en sa mort, afin que, comme Christ est ressuscité des morts par la gloire du Père, de même nous aussi nous marchions en nouveauté de vie. »
            </p>
            <p className="text-[10px] uppercase font-mono text-stone-500 mt-1">
              Romains 6:4
            </p>

            <div className="my-6 space-y-3 text-sm text-stone-800">
              <p>Il est solennellement certifié que :</p>
              <p className="text-2xl font-serif font-bold text-amber-950 underline decoration-amber-300 underline-offset-4">
                {member.prenom} {member.nom}
              </p>
              <p className="text-xs text-stone-600">
                Né(e) le {member.dateNaissance} · Matricule Ecclésial : {member.matricule}
              </p>
              <p className="text-xs text-stone-700 max-w-md mx-auto pt-2">
                A publiquement confessé Jésus-Christ comme son Sauveur personnel et Seigneur et a été baptisé(e) au nom du Père, du Fils et du Saint-Esprit.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-stone-300 grid grid-cols-2 gap-6 text-left text-xs">
              <div>
                <p className="text-[11px] text-stone-500">Date de Célébration :</p>
                <p className="font-semibold text-stone-900 font-mono mt-0.5">
                  {member.dateBaptemeEau || '23 Juin 2019'}
                </p>
                <p className="text-[11px] text-stone-500 mt-3">Lieu de Baptême :</p>
                <p className="font-medium text-stone-800 mt-0.5">
                  Temple Central des Assemblées de Dieu
                </p>
              </div>

              <div className="text-right">
                <p className="text-[11px] text-stone-500">Pasteur Célébrant :</p>
                <p className="font-serif font-bold text-stone-900 mt-0.5">
                  {member.pasteurBaptisant || 'Collège Pastoral Ordonné'}
                </p>
                <div className="mt-3 inline-block border-b-2 border-stone-800 pb-1 text-center font-serif italic text-amber-900 text-xs">
                  [ Sceau &amp; Signature Pastorale ]
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 bg-stone-50 border-t border-stone-200 flex items-center justify-between">
          <span className="text-xs text-stone-500">
            Document officiel délivré par le Conseil Pastoral
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-amber-800 hover:bg-amber-900 rounded-lg transition-colors"
            >
              <Printer size={14} />
              <span>Imprimer l'Acte</span>
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-stone-700 bg-white border border-stone-300 rounded-lg hover:bg-stone-100"
            >
              Fermer
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
