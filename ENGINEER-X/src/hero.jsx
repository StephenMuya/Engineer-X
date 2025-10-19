import React from 'react';

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-8 overflow-hidden bg-[#0a0a0a]">
      {/* Background Animation */}
      <div className="absolute inset-0 z-0">
        {/* Grid Background */}
        <div 
          className="absolute w-full h-full opacity-100"
          style={{
            backgroundImage: 'linear-gradient(rgba(0, 255, 157, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 157, 0.03) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
            animation: 'gridMove 20s linear infinite'
          }}
        />
        
        {/* Gradient Orbs */}
        <div 
          className="absolute w-[400px] h-[400px] rounded-full opacity-40 blur-[80px]"
          style={{
            background: 'radial-gradient(circle, #00ff9d, transparent)',
            top: '-100px',
            left: '-100px',
            animation: 'float1 8s ease-in-out infinite'
          }}
        />
        <div 
          className="absolute w-[350px] h-[350px] rounded-full opacity-40 blur-[80px]"
          style={{
            background: 'radial-gradient(circle, #00b8ff, transparent)',
            bottom: '-100px',
            right: '-100px',
            animation: 'float2 8s ease-in-out infinite'
          }}
        />
        <div 
          className="absolute w-[300px] h-[300px] rounded-full opacity-40 blur-[80px]"
          style={{
            background: 'radial-gradient(circle, #9d00ff, transparent)',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            animation: 'float3 8s ease-in-out infinite'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl text-center">
        {/* Logo */}
        <div 
          className="text-xl font-bold tracking-[0.15em] mb-12 opacity-0"
          style={{ animation: 'fadeInDown 1s ease forwards' }}
        >
          ENGINEER <span className="text-[#00ff9d]">X</span>
        </div>

        {/* Main Heading */}
        <h1 
          className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight mb-6 opacity-0"
          style={{
            background: 'linear-gradient(135deg, #fff 0%, #00ff9d 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            animation: 'fadeInUp 1s ease 0.3s forwards'
          }}
        >
          Build. Code. Innovate.
        </h1>

        {/* Subtitle */}
        <p 
          className="text-xl md:text-2xl lg:text-3xl text-[#b0b0b0] mb-12 leading-relaxed opacity-0"
          style={{ animation: 'fadeInUp 1s ease 0.6s forwards' }}
        >
          Exploring the intersection of engineering, technology, and innovation.<br />
          Where ideas transform into reality.
        </p>

        {/* CTA Buttons */}
        <div 
          className="flex gap-6 justify-center flex-wrap opacity-0"
          style={{ animation: 'fadeInUp 1s ease 0.9s forwards' }}
        >
          <a
            href="#blog"
            className="px-10 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:-translate-y-1 text-[#0a0a0a]"
            style={{
              background: 'linear-gradient(135deg, #00ff9d, #00b8ff)',
              boxShadow: '0 10px 30px rgba(0, 255, 157, 0.3)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 15px 40px rgba(0, 255, 157, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 255, 157, 0.3)';
            }}
          >
            Read Articles
          </a>
          <a
            href="#about"
            className="px-10 py-4 text-lg font-semibold rounded-full border-2 border-[#00ff9d] text-white transition-all duration-300 hover:-translate-y-1"
            style={{ background: 'transparent' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(0, 255, 157, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
            }}
          >
            About Me
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0"
        style={{ animation: 'fadeIn 1s ease 1.5s forwards, bounce 2s ease-in-out 2s infinite' }}
      >
        <div 
          className="w-0.5 h-10 mx-auto mb-2.5"
          style={{ background: 'linear-gradient(to bottom, transparent, #00ff9d)' }}
        />
      </div>

      {/* Animations */}
      <style>{`
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }

        @keyframes float1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -30px) scale(1.1); }
          66% { transform: translate(-30px, 30px) scale(0.9); }
        }

        @keyframes float2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-20px, 20px) scale(1.1); }
          66% { transform: translate(20px, -20px) scale(0.9); }
        }

        @keyframes float3 {
          0%, 100% { transform: translate(-50%, -50%) scale(1); }
          33% { transform: translate(calc(-50% + 30px), calc(-50% - 30px)) scale(1.1); }
          66% { transform: translate(calc(-50% - 30px), calc(-50% + 30px)) scale(0.9); }
        }

        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          to { opacity: 1; }
        }

        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(10px); }
        }
      `}</style>
    </section>
  );
}
export default HeroSection;