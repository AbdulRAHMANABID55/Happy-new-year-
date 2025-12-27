import React from 'react';
import { motion } from 'framer-motion';

interface GreetingCardProps {
  senderName: string | null;
}

export const GreetingCard: React.FC<GreetingCardProps> = ({ senderName }) => {
  return (
    <div className="text-center px-4 py-2">
      {senderName && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8 p-4 bg-slate-800/30 rounded-xl border border-gold-500/20 backdrop-blur-sm"
        >
          <p className="text-slate-300 text-sm md:text-base mb-2 font-light">
            ✨ Aapke Pyaare Dost ne Dil se Bheja Hai ✨
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gold-400 text-glow animate-pulse-fast font-cursive">
            {senderName}
          </h2>
        </motion.div>
      )}

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="relative bg-gradient-to-b from-slate-900 to-black p-6 md:p-10 rounded-2xl shadow-2xl border-2 border-gold-500/30"
      >
        {/* Decorative elements */}
        <div className="absolute -top-4 -left-4 text-4xl">🎆</div>
        <div className="absolute -top-4 -right-4 text-4xl">🎆</div>
        <div className="absolute -bottom-4 -left-4 text-4xl">✨</div>
        <div className="absolute -bottom-4 -right-4 text-4xl">✨</div>

        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 bg-clip-text text-transparent font-cursive drop-shadow-sm">
          Happy New Year 2026
        </h1>
        
        {senderName && (
          <p className="text-xl md:text-3xl text-gold-400 font-bold mb-6 font-cursive animate-pulse">
            {senderName} ki taraf se Naya Saal Mubarak Ho!
          </p>
        )}

        <div className="space-y-4 text-lg md:text-xl leading-relaxed text-slate-100 font-medium">
          <p>
            ALLAH aap ko is saal (2026) mein saari khushiyan ata farmaye,
          </p>
          <p className="text-gold-400 font-semibold">
            Aap ke liye yeh naya saal barkat, sehat aur kamyabi ka zariya bane,
          </p>
          <p>
            Aapki har dua qabool ho aur daaman khushiyon se bhar jaye 🤲✨
          </p>
        </div>
      </motion.div>
    </div>
  );
};