import React, { useState, useEffect } from 'react';
import { Home, Search, ArrowLeft, Cpu, AlertTriangle, BookOpen, TrendingUp, Code } from 'lucide-react';

const Error404Page = () => {
  const [glitchEffect, setGlitchEffect] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitchEffect(true);
      setTimeout(() => setGlitchEffect(false), 200);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const popularLinks = [
    { icon: <Home className="w-5 h-5" />, label: 'Home', path: '/' },
    { icon: <TrendingUp className="w-5 h-5" />, label: 'Trending Articles', path: '/trending' },
    { icon: <BookOpen className="w-5 h-5" />, label: 'Browse Categories', path: '/categories' },
    { icon: <Code className="w-5 h-5" />, label: 'Tutorials', path: '/tutorials' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat opacity-10"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80')" }}
        ></div>
        
        {/* Floating Particles */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-75"></div>
        <div className="absolute bottom-32 left-40 w-2 h-2 bg-pink-400 rounded-full animate-pulse delay-150"></div>
        <div className="absolute bottom-20 right-20 w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-12">
        <div className="max-w-4xl w-full text-center">
          {/* Logo */}
          <div className="flex items-center justify-center space-x-2 mb-12">
            <div className="bg-gradient-to-r from-cyan-500 to-purple-500 p-3 rounded-lg shadow-lg shadow-purple-500/50">
              <Cpu className="w-8 h-8 text-white" />
            </div>
            <span className="text-3xl font-bold text-white">
              Engineer<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">X</span>
            </span>
          </div>

          {/* 404 Error */}
          <div className="mb-8">
            <div className={`text-9xl md:text-[200px] font-bold mb-4 ${glitchEffect ? 'glitch' : ''}`}>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                404
              </span>
            </div>
            <div className="flex items-center justify-center space-x-3 mb-6">
              <AlertTriangle className="w-8 h-8 text-yellow-400" />
              <h1 className="text-4xl md:text-5xl font-bold text-white">Page Not Found</h1>
            </div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Oops! Looks like this page took a detour into the digital void. 
              The page you're looking for doesn't exist or has been moved.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for articles, topics, tutorials..."
                className="w-full pl-12 pr-4 py-4 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="flex items-center space-x-2 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all hover:scale-105">
              <Home className="w-5 h-5" />
              <span>Back to Home</span>
            </button>
            <button className="flex items-center space-x-2 px-8 py-4 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 text-white font-semibold hover:bg-white/20 transition-all">
              <ArrowLeft className="w-5 h-5" />
              <span>Go Back</span>
            </button>
          </div>

          {/* Popular Links */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-6">Popular Destinations</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {popularLinks.map((link, index) => (
                <button
                  key={index}
                  className="flex items-center space-x-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-purple-500/20 hover:border-cyan-500/50 text-left transition-all group"
                >
                  <div className="text-cyan-400 group-hover:scale-110 transition-transform">
                    {link.icon}
                  </div>
                  <span className="text-white font-semibold">{link.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Help Text */}
          <div className="mt-12">
            <p className="text-gray-400 text-sm">
              Need help? Contact us at{' '}
              <a href="mailto:support@engineerx.com" className="text-cyan-400 hover:text-cyan-300 font-semibold transition-colors">
                support@engineerx.com
              </a>
            </p>
          </div>

          {/* Fun Error Code */}
          <div className="mt-8 inline-block bg-black/30 backdrop-blur-sm border border-white/10 rounded-lg px-6 py-3">
            <code className="text-cyan-400 text-sm font-mono">
              ERROR_CODE: PAGE_NOT_FOUND | TIMESTAMP: {new Date().toISOString()}
            </code>
          </div>
        </div>
      </div>

      {/* CSS for Glitch Effect */}
      <style jsx>{`
        @keyframes glitch {
          0% {
            transform: translate(0);
          }
          20% {
            transform: translate(-2px, 2px);
          }
          40% {
            transform: translate(-2px, -2px);
          }
          60% {
            transform: translate(2px, 2px);
          }
          80% {
            transform: translate(2px, -2px);
          }
          100% {
            transform: translate(0);
          }
        }

        .glitch {
          animation: glitch 0.3s infinite;
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        .delay-75 {
          animation-delay: 0.75s;
        }

        .delay-150 {
          animation-delay: 1.5s;
        }
      `}</style>
    </div>
  );
};

export default Error404Page;