import React, { useState, useEffect } from 'react';
import { User, ChurchMember, ArchiveDocument, PrayerRequest } from './types';
import { DEMO_USERS, INITIAL_MEMBERS, INITIAL_ARCHIVES, INITIAL_CULT_SCHEDULES, INITIAL_PRAYER_REQUESTS } from './data/mockData';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { HistorySection } from './components/HistorySection';
import { LeadershipSection } from './components/LeadershipSection';
import { DoctrineSection } from './components/DoctrineSection';
import { ArchivesSection } from './components/ArchivesSection';
import { CultSchedulesSection } from './components/CultSchedulesSection';
import { ContactSection } from './components/ContactSection';
import { SecurePortal } from './components/SecurePortal';
import { Footer } from './components/Footer';
import { AuthModal } from './components/AuthModal';

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>('accueil');
  const [isAuthModalOpen, setIsAuthModalOpen] = useState<boolean>(false);

  // Authenticated user state
  const [currentUser, setCurrentUser] = useState<User | null>(() => {
    try {
      localStorage.removeItem('ad_current_user');
      const saved = localStorage.getItem('ad_current_user_v2');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  // Members dynamic state with localStorage persistence
  const [members, setMembers] = useState<ChurchMember[]>(() => {
    try {
      localStorage.removeItem('ad_members_records');
      const saved = localStorage.getItem('ad_members_records_v2');
      return saved ? JSON.parse(saved) : INITIAL_MEMBERS;
    } catch {
      return INITIAL_MEMBERS;
    }
  });

  // Archives dynamic state with localStorage persistence
  const [archives, setArchives] = useState<ArchiveDocument[]>(() => {
    try {
      localStorage.removeItem('ad_archives_records');
      const saved = localStorage.getItem('ad_archives_records_v2');
      return saved ? JSON.parse(saved) : INITIAL_ARCHIVES;
    } catch {
      return INITIAL_ARCHIVES;
    }
  });

  // Prayer requests
  const [prayerRequests, setPrayerRequests] = useState<PrayerRequest[]>(() => {
    try {
      localStorage.removeItem('ad_prayers_records');
      const saved = localStorage.getItem('ad_prayers_records_v2');
      return saved ? JSON.parse(saved) : INITIAL_PRAYER_REQUESTS;
    } catch {
      return INITIAL_PRAYER_REQUESTS;
    }
  });

  // Sync to localStorage
  useEffect(() => {
    if (currentUser) {
      localStorage.setItem('ad_current_user_v2', JSON.stringify(currentUser));
    } else {
      localStorage.removeItem('ad_current_user_v2');
    }
  }, [currentUser]);

  useEffect(() => {
    localStorage.setItem('ad_members_records_v2', JSON.stringify(members));
  }, [members]);

  useEffect(() => {
    localStorage.setItem('ad_archives_records_v2', JSON.stringify(archives));
  }, [archives]);

  useEffect(() => {
    localStorage.setItem('ad_prayers_records_v2', JSON.stringify(prayerRequests));
  }, [prayerRequests]);


  // Tab navigation handler
  const handleNavigate = (tab: string) => {
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Auth handlers
  const handleLogin = (user: User) => {
    setCurrentUser(user);
    // If logging in from portal or header, guide user to portal
    if (currentTab !== 'gestion') {
      setCurrentTab('gestion');
    }
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setCurrentTab('accueil');
  };

  // Member CRUD
  const handleAddMember = (newMember: ChurchMember) => {
    setMembers(prev => [newMember, ...prev]);
  };

  const handleDeleteMember = (id: string) => {
    setMembers(prev => prev.filter(m => m.id !== id));
  };

  // Archive CRUD
  const handleAddArchive = (newArchive: ArchiveDocument) => {
    setArchives(prev => [newArchive, ...prev]);
  };

  const handleDeleteArchive = (id: string) => {
    setArchives(prev => prev.filter(a => a.id !== id));
  };

  // Prayer submit
  const handlePrayerSubmit = (req: { nomAuteur: string; requete: string; confidentialite: 'Publique' | 'Réservée aux Pasteurs & Intercesseurs' }) => {
    const newReq: PrayerRequest = {
      id: `pray-${Date.now()}`,
      nomAuteur: req.nomAuteur,
      requete: req.requete,
      confidentialite: req.confidentialite,
      dateSoumission: new Date().toISOString().split('T')[0],
      statut: 'En attente',
      reponsePastorale: 'Pris en charge par l\'équipe pastorale et porté dans la prière fraternelle.'
    };
    setPrayerRequests(prev => [newReq, ...prev]);
  };

  return (
    <div className="min-h-screen bg-stone-50 flex flex-col font-sans text-stone-900 selection:bg-amber-100 selection:text-amber-950">
      
      {/* Top Bar Header */}
      <Header
        currentTab={currentTab}
        onNavigate={handleNavigate}
        currentUser={currentUser}
        onOpenAuth={() => setIsAuthModalOpen(true)}
      />

      {/* Main Content Router */}
      <main className="flex-1">
        {currentTab === 'accueil' && (
          <>
            <HeroSection
              onExploreHistory={() => handleNavigate('histoire')}
              onExploreArchives={() => handleNavigate('archives')}
              onOpenPortal={() => {
                if (currentUser) {
                  handleNavigate('gestion');
                } else {
                  setIsAuthModalOpen(true);
                }
              }}
              onViewSchedules={() => handleNavigate('cultes')}
            />
            <HistorySection />
            <LeadershipSection />
            <DoctrineSection />
            <ArchivesSection
              archives={archives}
              currentUser={currentUser}
              onOpenAuth={() => setIsAuthModalOpen(true)}
              onNavigateToManagement={() => handleNavigate('gestion')}
            />
            <CultSchedulesSection
              schedules={INITIAL_CULT_SCHEDULES}
              prayerRequests={prayerRequests}
              onSubmitPrayer={handlePrayerSubmit}
            />
            <ContactSection
              onExploreHistory={() => handleNavigate('histoire')}
              onExploreDoctrine={() => handleNavigate('doctrine')}
            />
          </>
        )}

        {currentTab === 'histoire' && (
          <div className="pt-6">
            <HistorySection />
          </div>
        )}

        {currentTab === 'dirigeants' && (
          <div className="pt-6">
            <LeadershipSection />
          </div>
        )}

        {currentTab === 'doctrine' && (
          <div className="pt-6">
            <DoctrineSection />
          </div>
        )}

        {currentTab === 'archives' && (
          <div className="pt-6">
            <ArchivesSection
              archives={archives}
              currentUser={currentUser}
              onOpenAuth={() => setIsAuthModalOpen(true)}
              onNavigateToManagement={() => handleNavigate('gestion')}
            />
          </div>
        )}

        {currentTab === 'cultes' && (
          <div className="pt-6">
            <CultSchedulesSection
              schedules={INITIAL_CULT_SCHEDULES}
              prayerRequests={prayerRequests}
              onSubmitPrayer={handlePrayerSubmit}
            />
          </div>
        )}

        {currentTab === 'contact' && (
          <div className="pt-6">
            <ContactSection
              onExploreHistory={() => handleNavigate('histoire')}
              onExploreDoctrine={() => handleNavigate('doctrine')}
            />
          </div>
        )}

        {currentTab === 'gestion' && (
          currentUser ? (
            <SecurePortal
              currentUser={currentUser}
              members={members}
              archives={archives}
              onAddMember={handleAddMember}
              onDeleteMember={handleDeleteMember}
              onAddArchive={handleAddArchive}
              onDeleteArchive={handleDeleteArchive}
              onSwitchUser={(user) => setCurrentUser(user)}
            />
          ) : (
            <div className="py-24 text-center max-w-lg mx-auto px-4">
              <div className="w-16 h-16 rounded-2xl bg-amber-100 text-amber-900 flex items-center justify-center mx-auto mb-4 text-2xl font-serif font-bold">
                AD
              </div>
              <h2 className="text-2xl font-serif font-bold text-stone-900">
                Espace Sécurisé de l'Église
              </h2>
              <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                Veuillez vous authentifier pour accéder aux registres des membres, aux archives documentaires, au diaconat et à la direction pastorale.
              </p>
              <button
                onClick={() => setIsAuthModalOpen(true)}
                className="mt-6 px-6 py-3 text-xs font-semibold text-white bg-amber-800 hover:bg-amber-900 rounded-xl transition-colors shadow-sm"
              >
                Se Connecter (Pasteur, Diacre, Membre, Admin)
              </button>
            </div>
          )
        )}
      </main>

      {/* Institutional Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenAuth={() => setIsAuthModalOpen(true)}
      />

      {/* Authentication Modal */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        currentUser={currentUser}
        onLogin={handleLogin}
        onLogout={handleLogout}
      />

    </div>
  );
}
