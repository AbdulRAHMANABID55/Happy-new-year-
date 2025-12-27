import React from 'react';
import { AdProps } from '../types';

export const AdBanner: React.FC<AdProps> = ({ slotId, className = '' }) => {
  return (
    <div className={`w-full my-4 flex justify-center items-center bg-slate-900/50 border border-slate-800 rounded-lg overflow-hidden min-h-[100px] ${className}`}>
      {/* 
        In a real scenario, this would be the Google AdSense code.
        For this demo, we visualize the placeholder.
      */}
      <div className="text-center p-4">
        <p className="text-slate-500 text-xs uppercase tracking-widest mb-1">Advertisement</p>
        <div className="w-[300px] h-[50px] bg-slate-800 animate-pulse rounded mx-auto flex items-center justify-center">
          <span className="text-slate-600 text-xs">Ad Space ({slotId})</span>
        </div>
      </div>
    </div>
  );
};