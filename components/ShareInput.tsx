import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

export const ShareInput: React.FC = () => {
  const [name, setName] = useState('');

  const handleShare = () => {
    if (!name.trim()) {
      alert("Please enter your name first!");
      return;
    }

    // Construct the URL with the sender parameter
    const baseUrl = window.location.href.split('?')[0];
    const shareUrl = `${baseUrl}?sender=${encodeURIComponent(name.trim())}`;
    
    const message = `🎁 ${name.trim()} ne aapke liye 2026 ka khaas tohfa bheja hai! 👇\n\n${shareUrl}`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, '_blank');
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 }}
      className="w-full max-w-md mx-auto mt-8 bg-slate-800 p-6 rounded-xl border border-slate-700 shadow-xl"
    >
      <div className="text-center mb-4">
        <h3 className="text-lg font-semibold text-white mb-1">
          Aap bhi apna naam likh kar kisi khaas ko bhejein 🎁
        </h3>
        <div className="h-1 w-16 bg-gold-500 mx-auto rounded-full"></div>
      </div>

      <div className="flex flex-col gap-3">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Apna Naam Likhein..."
          className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-600 text-white placeholder-slate-500 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-colors text-center text-lg"
        />
        
        <button
          onClick={handleShare}
          className="group w-full bg-green-600 hover:bg-green-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg transform transition-all active:scale-95 flex items-center justify-center gap-2"
        >
          <span className="text-xl">WhatsApp</span>
          <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      <p className="text-xs text-slate-500 text-center mt-4">
        Clicking button opens WhatsApp to share
      </p>
    </motion.div>
  );
};