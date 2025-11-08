import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Github, Linkedin, Twitter, Mail, BookOpen, Code, Cpu, Zap, TrendingUp, Users, Sparkles, Rocket, Shield, Brain, Eye, EyeOff } from 'lucide-react';

const ProductLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentPage, setCurrentPage] = useState('landing'); // 'landing', 'signin', 'signup'
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const stats = [
    { icon: <BookOpen className="w-8 h-8" />, value: "150+", label: "Articles Published" },
    { icon: <Users className="w-8 h-8" />, value: "50K+", label: "Monthly Readers" },
    { icon: <TrendingUp className="w-8 h-8" />, value: "95%", label: "Satisfaction Rate" },
    { icon: <Code className="w-8 h-8" />, value: "20+", label: "Code Tutorials" }
  ];

  const features = [
    {
      icon: <Brain className="w-12 h-12" />,
      title: "AI & Machine Learning",
      description: "Deep dives into neural networks, deep learning architectures, and practical ML implementations."
    },
    {
      icon: <Code className="w-12 h-12" />,
      title: "Web Development",
      description: "Modern frameworks, best practices, and cutting-edge techniques for building scalable applications."
    },
    {
      icon: <Cpu className="w-12 h-12" />,
      title: "Cloud & DevOps",
      description: "Infrastructure as code, containerization, CI/CD pipelines, and cloud architecture patterns."
    },
    {
      icon: <Rocket className="w-12 h-12" />,
      title: "System Design",
      description: "Scalable architecture patterns, distributed systems, and engineering best practices."
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Security",
      description: "Application security, cryptography, secure coding practices, and vulnerability management."
    },
    {
      icon: <Sparkles className="w-12 h-12" />,
      title: "Emerging Tech",
      description: "Stay ahead with insights on blockchain, quantum computing, edge computing, and more."
    }
  ];

  const benefits = [
    "In-depth technical articles written by industry experts",
    "Step-by-step tutorials with real-world examples",
    "Weekly insights on the latest technology trends",
    "Code samples and GitHub repositories",
    "Community-driven discussions and Q&A",
    "Career advice and industry best practices"
  ];

  // Sign In Page
  const SignInPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-4 py-20">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="bg-gradient-to-r from-cyan-500 to-purple-500 p-3 rounded-lg">
              <Cpu className="w-8 h-8 text-white" />
            </div>
            <span className="text-3xl font-bold text-white">Engineer<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">X</span></span>
          </div>
          <h2 className="text-4xl font-bold text-white mb-2">Welcome Back</h2>
          <p className="text-gray-400">Sign in to continue your learning journey</p>
        </div>

        <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8">
          <form className="space-y-6">
            <div>
              <label className="block text-white text-sm font-semibold mb-2">Email</label>
              <input
                type="email"
                placeholder="your.email@example.com"
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>

            <div>
              <label className="block text-white text-sm font-semibold mb-2">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input type="checkbox" className="w-4 h-4 rounded border-white/20 bg-white/10 text-cyan-500 focus:ring-cyan-500" />
                <span className="ml-2 text-sm text-gray-400">Remember me</span>
              </label>
              <a href="#" className="text-sm text-cyan-400 hover:text-cyan-300">Forgot password?</a>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white py-4 rounded-xl font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all hover:scale-105"
            >
              Sign In
            </button>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/10"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-slate-900/50 text-gray-400">Or continue with</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              <button className="flex justify-center items-center py-3 px-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                <Github className="w-5 h-5 text-white" />
              </button>
              <button className="flex justify-center items-center py-3 px-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                <Mail className="w-5 h-5 text-white" />
              </button>
              <button className="flex justify-center items-center py-3 px-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                <Linkedin className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>

          <p className="text-center text-gray-400 text-sm mt-6">
            Don't have an account?{' '}
            <button onClick={() => setCurrentPage('signup')} className="text-cyan-400 hover:text-cyan-300 font-semibold">
              Sign up
            </button>
          </p>
        </div>

        <button
          onClick={() => setCurrentPage('landing')}
          className="mt-6 text-gray-400 hover:text-white flex items-center mx-auto"
        >
          ← Back to home
        </button>
      </div>
    </div>
  );

  // Sign Up Page
  const SignUpPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-4 py-20">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="bg-gradient-to-r from-cyan-500 to-purple-500 p-3 rounded-lg">
              <Cpu className="w-8 h-8 text-white" />
            </div>
            <span className="text-3xl font-bold text-white">Engineer<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">X</span></span>
          </div>
          <h2 className="text-4xl font-bold text-white mb-2">Create Account</h2>
          <p className="text-gray-400">Join 50,000+ engineers leveling up their skills</p>
        </div>

        <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8">
          <form className="space-y-6">
            <div>
              <label className="block text-white text-sm font-semibold mb-2">Full Name</label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>

            <div>
              <label className="block text-white text-sm font-semibold mb-2">Email</label>
              <input
                type="email"
                placeholder="your.email@example.com"
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>

            <div>
              <label className="block text-white text-sm font-semibold mb-2">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a strong password"
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
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
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                >
                  {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div className="flex items-start">
              <input type="checkbox" className="w-4 h-4 rounded border-white/20 bg-white/10 text-cyan-500 focus:ring-cyan-500 mt-1" />
              <span className="ml-2 text-sm text-gray-400">
                I agree to the{' '}
                <a href="#" className="text-cyan-400 hover:text-cyan-300">Terms of Service</a>
                {' '}and{' '}
                <a href="#" className="text-cyan-400 hover:text-cyan-300">Privacy Policy</a>
              </span>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white py-4 rounded-xl font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all hover:scale-105"
            >
              Create Account
            </button>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/10"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-slate-900/50 text-gray-400">Or sign up with</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              <button className="flex justify-center items-center py-3 px-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                <Github className="w-5 h-5 text-white" />
              </button>
              <button className="flex justify-center items-center py-3 px-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                <Mail className="w-5 h-5 text-white" />
              </button>
              <button className="flex justify-center items-center py-3 px-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                <Linkedin className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>

          <p className="text-center text-gray-400 text-sm mt-6">
            Already have an account?{' '}
            <button onClick={() => setCurrentPage('signin')} className="text-cyan-400 hover:text-cyan-300 font-semibold">
              Sign in
            </button>
          </p>
        </div>

        <button
          onClick={() => setCurrentPage('landing')}
          className="mt-6 text-gray-400 hover:text-white flex items-center mx-auto"
        >
          ← Back to home
        </button>
      </div>
    </div>
  );

  // Render based on current page
  if (currentPage === 'signin') {
    return <SignInPage />;
  }

  if (currentPage === 'signup') {
    return <SignUpPage />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2 cursor-pointer" onClick={() => setCurrentPage('landing')}>
              <div className="bg-gradient-to-r from-cyan-500 to-purple-500 p-2 rounded-lg">
                <Cpu className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">Engineer<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">X</span></span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-white hover:text-cyan-400 transition-colors">Home</a>
              <a href="#features" className="text-white hover:text-cyan-400 transition-colors">Features</a>
              <a href="#about" className="text-white hover:text-cyan-400 transition-colors">About</a>
              <a href="#contact" className="text-white hover:text-cyan-400 transition-colors">Contact</a>
              <button onClick={() => setCurrentPage('signin')} className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-2 rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition-all">
                Sign In
              </button>
            </div>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900/98 backdrop-blur-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 text-white hover:bg-slate-800 rounded-md">Home</a>
              <a href="#features" className="block px-3 py-2 text-white hover:bg-slate-800 rounded-md">Features</a>
              <a href="#about" className="block px-3 py-2 text-white hover:bg-slate-800 rounded-md">About</a>
              <a href="#contact" className="block px-3 py-2 text-white hover:bg-slate-800 rounded-md">Contact</a>
              <button onClick={() => setCurrentPage('signin')} className="w-full mt-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-2 rounded-full">
                Sign In
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80" 
            alt="Technology Background"
            className="w-full h-full object-cover"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-purple-900/85 to-slate-900/90"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 w-full px-4 py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="inline-block mb-6">
                <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-lg shadow-purple-500/50">
                  🚀 Welcome to Engineer X
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Your Gateway to
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 mt-2">
                  Engineering Excellence
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed">
                Discover cutting-edge insights, tutorials, and deep dives into artificial intelligence, 
                cloud computing, web development, and modern engineering practices. Join a community 
                of developers building the future.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                <button onClick={() => setCurrentPage('signup')} className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-10 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all hover:scale-105">
                  Get Started Free
                </button>
                <button className="bg-white/10 backdrop-blur-lg border border-white/20 text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition-all">
                  Learn More
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
                {stats.map((stat, idx) => (
                  <div key={idx} className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all hover:scale-105">
                    <div className="text-cyan-400 mb-3 flex justify-center">{stat.icon}</div>
                    <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">What We Cover</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive content across the full spectrum of modern engineering and technology
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all hover:scale-105 group">
                <div className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 backdrop-blur-lg border border-white/10 rounded-3xl p-12 md:p-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Why Choose Engineer X?
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  We're more than just a blog. We're a comprehensive learning platform designed 
                  to accelerate your engineering career and keep you at the forefront of technology.
                </p>
                <div className="space-y-4">
                  {benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <div className="bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full p-1 mt-1">
                        <ArrowRight className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-300 text-lg">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-3xl blur-3xl opacity-30"></div>
                <img 
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=80" 
                  alt="Engineering team"
                  className="relative rounded-3xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-cyan-600/20 to-purple-600/20 backdrop-blur-lg border border-white/10 rounded-3xl p-12 text-center">
            <div className="bg-gradient-to-r from-cyan-500 to-purple-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Zap className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Stay Ahead of the Curve</h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join 50,000+ engineers receiving weekly insights, tutorials, and industry trends 
              directly in their inbox. Never miss an important update.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto mb-6">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-lg"
              />
              <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-10 py-4 rounded-full font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all whitespace-nowrap text-lg hover:scale-105">
                Subscribe Free
              </button>
            </div>
            <p className="text-gray-400 text-sm">No spam, unsubscribe anytime. Your privacy matters to us.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-3xl blur-3xl opacity-20"></div>
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80" 
                  alt="Team collaboration"
                  className="relative rounded-3xl shadow-2xl"
                />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">About Engineer X</h2>
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                Engineer X was founded by a team of passionate software engineers, data scientists, 
                and technology enthusiasts who believe in the power of shared knowledge.
              </p>
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                Our mission is simple: democratize access to high-quality technical education and 
                empower engineers worldwide to build innovative solutions that shape the future.
              </p>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Whether you're a beginner taking your first steps in programming or a seasoned architect 
                designing complex systems, Engineer X provides the insights you need to excel.
              </p>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all">
                  <Code className="w-10 h-10 text-cyan-400 mb-3 mx-auto" />
                  <div className="text-white font-semibold text-sm">Expert Authors</div>
                </div>
                <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all">
                  <BookOpen className="w-10 h-10 text-purple-400 mb-3 mx-auto" />
                  <div className="text-white font-semibold text-sm">Deep Dives</div>
                </div>
                <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all">
                  <Cpu className="w-10 h-10 text-pink-400 mb-3 mx-auto" />
                  <div className="text-white font-semibold text-sm">Latest Tech</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Ready to Level Up Your Skills?
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Join thousands of engineers who are already advancing their careers with Engineer X
          </p>
          <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-12 py-5 rounded-full text-xl font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all hover:scale-105" onClick={() => setCurrentPage('signup')}>
            Sign Up Now - It's Free
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-slate-900/50 backdrop-blur-lg border-t border-white/10 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-gradient-to-r from-cyan-500 to-purple-500 p-2 rounded-lg">
                  <Cpu className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold text-white">EngineerX</span>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                Empowering engineers with knowledge and insights to build the future.
              </p>
              <div className="flex space-x-3">
                <a href="#" className="bg-white/5 hover:bg-white/10 p-3 rounded-lg transition-all hover:scale-110">
                  <Twitter className="w-5 h-5 text-gray-400 hover:text-cyan-400" />
                </a>
                <a href="#" className="bg-white/5 hover:bg-white/10 p-3 rounded-lg transition-all hover:scale-110">
                  <Github className="w-5 h-5 text-gray-400 hover:text-cyan-400" />
                </a>
                <a href="#" className="bg-white/5 hover:bg-white/10 p-3 rounded-lg transition-all hover:scale-110">
                  <Linkedin className="w-5 h-5 text-gray-400 hover:text-cyan-400" />
                </a>
                <a href="#" className="bg-white/5 hover:bg-white/10 p-3 rounded-lg transition-all hover:scale-110">
                  <Mail className="w-5 h-5 text-gray-400 hover:text-cyan-400" />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4 text-lg">Company</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#about" className="hover:text-cyan-400 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Our Team</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Careers</a></li>
                <li><a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4 text-lg">Resources</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Tutorials</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Community</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Newsletter</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4 text-lg">Legal</h3>
              <ul className="space-y-3 text-gray-400 mb-6">
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Cookie Policy</a></li>
              </ul>
              <p className="text-gray-400 text-sm">contact@engineerx.com</p>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2025 Engineer X. All rights reserved. Built with passion for technology and engineering excellence.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ProductLanding;