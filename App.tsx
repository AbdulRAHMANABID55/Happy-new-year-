import React, { useState, useEffect } from 'react';
import { Countdown } from './components/Countdown';
import { GreetingCard } from './components/GreetingCard';
import { ShareInput } from './components/ShareInput';
import { BackgroundEffects } from './components/BackgroundEffects';
import { AdBanner } from './components/AdBanner';
import { AppState } from './types';

const App: React.FC = () => {
  const [state, setState] = useState<AppState>('countdown');
  const [senderName, setSenderName] = useState<string | null>(null);

  useEffect(() => {
    // Parse URL parameter for sender name
    const params = new URLSearchParams(window.location.search);
    const sender = params.get('sender');
    if (sender) {
      setSenderName(sender);
    }
  }, []);

  const handleCountdownComplete = () => {
    setState('reveal');
  };

  return (
    <div className="min-h-screen w-full relative overflow-x-hidden flex flex-col">
      {state === 'countdown' && (
        <Countdown onComplete={handleCountdownComplete} />
      )}

      {state === 'reveal' && (
        <>
          <BackgroundEffects />
          
          <main className="relative z-10 flex-grow flex flex-col items-center justify-start py-8 px-4 w-full max-w-2xl mx-auto">
            {/* Top Ad Unit */}
            <AdBanner slotId="top-banner-1" className="mb-4" />

            <GreetingCard senderName={senderName} />

            <div className="w-full mt-8">
                <ShareInput />
            </div>

            {/* Bottom Ad Unit */}
            <AdBanner slotId="bottom-banner-1" className="mt-8" />
            
            <footer className="mt-12 text-center text-slate-600 text-xs">
                <p>© 2026 Happy New Year Wishes. Share joy!</p>
            </footer>
          </main>
        </>
      )}
    </div>
  );
};

export default App;