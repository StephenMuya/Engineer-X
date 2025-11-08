import React, { useState, useEffect } from 'react';
import { CheckCircle, X, Sparkles, Zap } from 'lucide-react';

const LoginSuccessCard = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 100);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-white text-center">
          <p className="text-xl">Card closed. Refresh to see again.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      <div 
        className={`relative bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-cyan-500/50 rounded-3xl p-8 max-w-md w-full shadow-2xl transform transition-all duration-500 ${
          animate ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        }`}
      >
        {/* Animated Background Effects */}
        <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        </div>

        {/* Close Button */}
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Content */}
        <div className="relative z-10 text-center">
          {/* Success Icon */}
          <div className="relative inline-flex items-center justify-center mb-6">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full blur-xl opacity-60"></div>
            <div className="relative bg-gradient-to-r from-cyan-500 to-purple-500 p-4 rounded-full shadow-lg shadow-purple-500/50">
              <CheckCircle className="w-12 h-12 text-white" />
            </div>
            {/* Sparkle Effects */}
            <div className="absolute -top-2 -right-2">
              <Sparkles className="w-6 h-6 text-yellow-400" />
            </div>
            <div className="absolute -bottom-2 -left-2">
              <Zap className="w-5 h-5 text-cyan-400" />
            </div>
          </div>

          {/* Title */}
          <h2 className="text-3xl font-bold text-white mb-3">
            Welcome Back! 🎉
          </h2>

          {/* Message */}
          <p className="text-gray-300 text-lg mb-6">
            You've successfully logged in to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 font-bold">
              Engineer X
            </span>
          </p>

          {/* User Info */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 mb-6">
            <div className="flex items-center justify-center space-x-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                JD
              </div>
              <div className="text-left">
                <div className="text-white font-semibold">John Developer</div>
                <div className="text-gray-400 text-sm">john.dev@example.com</div>
              </div>
            </div>
          </div>

          {/* Action Button */}
          <button 
            onClick={handleClose}
            className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white py-3 rounded-xl font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all hover:scale-105 transform"
          >
            Continue to Dashboard
          </button>

          {/* Info text */}
          <p className="text-gray-500 text-xs mt-4">
            Click anywhere to continue
          </p>
        </div>

        {/* Decorative Top Border */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-t-3xl"></div>
      </div>
    </div>
  );
};

export default LoginSuccessCard;