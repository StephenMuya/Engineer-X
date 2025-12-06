import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Eye, EyeOff, Cpu, Github, Mail, Linkedin, ArrowLeft } from 'lucide-react';

const AuthPages = () => {
  const [currentView, setCurrentView] = useState('signin');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useNavigate();

  const handleAuth = () => {
    navigate('/social-feed');
  };

  const SignInPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80')" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 via-purple-900/50 to-slate-900/50"></div>
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-md w-full">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <div className="bg-gradient-to-r from-cyan-500 to-purple-500 p-3 rounded-lg shadow-lg shadow-purple-500/50">
                <Cpu className="w-8 h-8 text-white" />
              </div>
              <span className="text-3xl font-bold text-white">
                Engineer<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">X</span>
              </span>
            </div>
            <h2 className="text-4xl font-bold text-white mb-2">Welcome Back</h2>
            <p className="text-gray-300">Sign in to continue your learning journey</p>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">
            <div className="space-y-6">
              <div>
                <label className="block text-white text-sm font-semibold mb-2">Email</label>
                <input
                  type="email"
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label className="block text-white text-sm font-semibold mb-2">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 rounded border-white/20 bg-white/10 text-cyan-500 focus:ring-cyan-500" />
                  <span className="ml-2 text-sm text-gray-300">Remember me</span>
                </label>
                <a href="#" className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors font-semibold">
                  Forgot password?
                </a>
              </div>

              <button
                type="button"
                onClick={handleAuth}
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white py-4 rounded-xl font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all hover:scale-105 transform"
              >
                Sign In
              </button>
            </div>

            <div className="mt-8">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-white/20"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-transparent text-gray-400">Or continue with</span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3">
                <button className="flex justify-center items-center py-3 px-4 rounded-xl bg-white/5 border border-white/20 hover:bg-white/10 hover:border-cyan-500/50 transition-all group">
                  <Github className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" />
                </button>
                <button className="flex justify-center items-center py-3 px-4 rounded-xl bg-white/5 border border-white/20 hover:bg-white/10 hover:border-cyan-500/50 transition-all group">
                  <Mail className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" />
                </button>
                <button className="flex justify-center items-center py-3 px-4 rounded-xl bg-white/5 border border-white/20 hover:bg-white/10 hover:border-cyan-500/50 transition-all group">
                  <Linkedin className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" />
                </button>
              </div>
            </div>

            <p className="text-center text-gray-300 text-sm mt-8">
              Don't have an account?{' '}
              <button 
                onClick={() => setCurrentView('signup')} 
                className="text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
              >
                Sign up
              </button>
            </p>
          </div>

          <Link to="/" className="mt-6 text-gray-400 hover:text-white flex items-center mx-auto group transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );

  const SignUpPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80')" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 via-purple-900/50 to-slate-900/50"></div>
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-md w-full">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <div className="bg-gradient-to-r from-cyan-500 to-purple-500 p-3 rounded-lg shadow-lg shadow-purple-500/50">
                <Cpu className="w-8 h-8 text-white" />
              </div>
              <span className="text-3xl font-bold text-white">
                Engineer<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">X</span>
              </span>
            </div>
            <h2 className="text-4xl font-bold text-white mb-2">Create Account</h2>
            <p className="text-gray-300">Join 50,000+ engineers leveling up their skills</p>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">
            <div className="space-y-5">
              <div>
                <label className="block text-white text-sm font-semibold mb-2">Full Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label className="block text-white text-sm font-semibold mb-2">Email</label>
                <input
                  type="email"
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label className="block text-white text-sm font-semibold mb-2">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a strong password"
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-white text-sm font-semibold mb-2">Confirm Password</label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm your password"
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <div className="flex items-start">
                <input type="checkbox" className="w-4 h-4 rounded border-white/20 bg-white/10 text-cyan-500 focus:ring-cyan-500 mt-1" />
                <span className="ml-2 text-sm text-gray-300">
                  I agree to the{' '}
                  <a href="#" className="text-cyan-400 hover:text-cyan-300 font-semibold">Terms of Service</a>
                  {' '}and{' '}
                  <a href="#" className="text-cyan-400 hover:text-cyan-300 font-semibold">Privacy Policy</a>
                </span>
              </div>

              <button
                type="button"
                onClick={handleAuth}
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white py-4 rounded-xl font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all hover:scale-105 transform"
              >
                Create Account
              </button>
            </div>

            <div className="mt-8">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-white/20"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-transparent text-gray-400">Or sign up with</span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3">
                <button className="flex justify-center items-center py-3 px-4 rounded-xl bg-white/5 border border-white/20 hover:bg-white/10 hover:border-cyan-500/50 transition-all group">
                  <Github className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" />
                </button>
                <button className="flex justify-center items-center py-3 px-4 rounded-xl bg-white/5 border border-white/20 hover:bg-white/10 hover:border-cyan-500/50 transition-all group">
                  <Mail className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" />
                </button>
                <button className="flex justify-center items-center py-3 px-4 rounded-xl bg-white/5 border border-white/20 hover:bg-white/10 hover:border-cyan-500/50 transition-all group">
                  <Linkedin className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" />
                </button>
              </div>
            </div>

            <p className="text-center text-gray-300 text-sm mt-8">
              Already have an account?{' '}
              <button 
                onClick={() => setCurrentView('signin')} 
                className="text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
              >
                Sign in
              </button>
            </p>
          </div>

          <Link to="/" className="mt-6 text-gray-400 hover:text-white flex items-center mx-auto group transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );

  return currentView === 'signin' ? <SignInPage /> : <SignUpPage />;
};

export default AuthPages;