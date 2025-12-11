import React, { useState } from 'react';
import { Search, Bell, User, Settings, LogOut, Home, BookOpen, Bookmark, TrendingUp, Menu, X, Heart, MessageCircle, Share2, Clock, Calendar, ChevronRight, Filter, Cpu, Github, Linkedin, Twitter, Mail, Edit, Bold, Italic, List, Code, Image, AlertTriangle } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [currentView, setCurrentView] = useState('home');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [newPost, setNewPost] = useState('');
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [showMessageDropdown, setShowMessageDropdown] = useState(false);
  const [showNotificationDropdown, setShowNotificationDropdown] = useState(false);

  const handleMessageClick = () => {
    setShowNotificationDropdown(false);
    setShowMessageDropdown(prev => !prev);
  };

  const handleNotificationClick = () => {
    setShowMessageDropdown(false);
    setShowNotificationDropdown(prev => !prev);
  };

  const navigate = useNavigate();

  const handleLogout = () => {
    setShowLogoutModal(false);
    navigate('/');
  };

  const categories = ['All', 'AI/ML', 'Web Development', 'DevOps', 'Cloud', 'Security', 'Tutorials'];

  const articles = [
    {
      id: 1,
      title: "Building Scalable Microservices with Kubernetes",
      excerpt: "Learn how to deploy and manage containerized applications at scale with Kubernetes orchestration",
      image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&q=80",
      category: "DevOps",
      author: "Sarah Chen",
      authorAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
      readTime: "12 min",
      date: "Nov 5, 2025",
      likes: 300,
      comments: 45,
      isBookmarked: false
    },
    {
      id: 2,
      title: "Deep Dive into Neural Networks",
      excerpt: "Understanding the fundamentals of deep learning and implementing your first neural network from scratch",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
      category: "AI/ML",
      author: "Michael Park",
      authorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
      readTime: "10 min",
      date: "Nov 3, 2025",
      likes: 412,
      comments: 67,
      isBookmarked: true
    },
    {
      id: 3,
      title: "React Server Components: The Future",
      excerpt: "Exploring the revolutionary approach to building faster, more efficient React applications",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80",
      category: "Web Development",
      author: "Emily Rodriguez",
      authorAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
      readTime: "8 min",
      date: "Nov 1, 2025",
      likes: 567,
      comments: 89,
      isBookmarked: false
    },
    {
      id: 4,
      title: "AWS vs Azure vs GCP: Cloud Comparison",
      excerpt: "An in-depth analysis of the top cloud providers and which one suits your needs best",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
      category: "Cloud",
      author: "David Kim",
      authorAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80",
      readTime: "15 min",
      date: "Oct 28, 2025",
      likes: 892,
      comments: 134,
      isBookmarked: true
    },
    {
      id: 5,
      title: "Mastering Git Workflows for Teams",
      excerpt: "Best practices and strategies for effective version control in software development teams",
      image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=800&q=80",
      category: "Tutorials",
      author: "Alex Thompson",
      authorAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
      readTime: "7 min",
      date: "Oct 25, 2025",
      likes: 345,
      comments: 56,
      isBookmarked: false
    },
    {
      id: 6,
      title: "Zero Trust Security Architecture",
      excerpt: "Implementing modern security principles to protect your infrastructure",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
      category: "Security",
      author: "Jennifer Liu",
      authorAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80",
      readTime: "11 min",
      date: "Oct 22, 2025",
      likes: 678,
      comments: 92,
      isBookmarked: false
    }
  ];

  const notificationsData = [
    {
      id: 1,
      type: 'like',
      icon: <Heart className="w-4 h-4 text-red-400" />,
      title: 'Sarah Chen liked your article',
      description: 'on "Building Scalable Microservices..."',
      time: '5m ago',
      isRead: false,
    },
    {
      id: 2,
      type: 'comment',
      icon: <MessageCircle className="w-4 h-4 text-cyan-400" />,
      title: 'Michael Park commented',
      description: '"Great insights! Have you tried..."',
      time: '1h ago',
      isRead: false,
    },
    {
      id: 3,
      type: 'follow',
      icon: <User className="w-4 h-4 text-purple-400" />,
      title: 'Emily Rodriguez started following you',
      description: '',
      time: '3h ago',
      isRead: true,
    },
  ];

  const messagesData = [
    {
      id: 1,
      sender: 'Alex Thompson',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80',
      message: 'Hey, I had a question about your latest article on Git workflows. Could we chat?',
      time: '10m ago',
      isRead: false,
    },
    {
      id: 2,
      sender: 'Jennifer Liu',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80',
      message: 'Just read your piece on Zero Trust. Fantastic work!',
      time: '2h ago',
      isRead: false,
    },
    {
      id: 3,
      sender: 'David Kim',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80',
      message: 'Let\'s sync up about the cloud comparison doc tomorrow.',
      time: '1d ago',
      isRead: true,
    },
  ];

  const ProfileModal = () => (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-white/20 rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-white">My Profile</h2>
          <button onClick={() => setShowProfileModal(false)} className="text-gray-400 hover:text-white">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="space-y-6">
          <div className="flex items-center space-x-6">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80"
                alt="Profile"
                className="w-24 h-24 rounded-full border-4 border-cyan-500"
              />
              <button className="absolute bottom-0 right-0 bg-gradient-to-r from-cyan-500 to-purple-500 p-2 rounded-full">
                <Edit className="w-4 h-4 text-white" />
              </button>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">John Developer</h3>
              <p className="text-gray-400">Full Stack Engineer</p>
              <p className="text-cyan-400 text-sm">john.dev@example.com</p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white/5 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-cyan-400">42</div>
              <div className="text-gray-400 text-sm">Articles Read</div>
            </div>
            <div className="bg-white/5 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-purple-400">18</div>
              <div className="text-gray-400 text-sm">Bookmarked</div>
            </div>
            <div className="bg-white/5 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-pink-400">127</div>
              <div className="text-gray-400 text-sm">Comments</div>
            </div>
          </div>

          <div>
            <label className="block text-white text-sm font-semibold mb-2">Full Name</label>
            <input
              type="text"
              defaultValue="John Developer"
              className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>

          <div>
            <label className="block text-white text-sm font-semibold mb-2">Bio</label>
            <textarea
              rows="3"
              placeholder="Tell us about yourself..."
              className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              defaultValue="Passionate software engineer specializing in cloud architecture and distributed systems."
            />
          </div>

          <div>
            <label className="block text-white text-sm font-semibold mb-2">Interests</label>
            <div className="flex flex-wrap gap-2">
              {['AI/ML', 'Cloud', 'DevOps', 'Security'].map((interest) => (
                <span key={interest} className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/50 text-cyan-400 px-4 py-2 rounded-full text-sm">
                  {interest}
                </span>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-white text-sm font-semibold mb-4">Social Links</label>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Github className="w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="github.com/username"
                  className="flex-1 px-4 py-2 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>
              <div className="flex items-center space-x-3">
                <Linkedin className="w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="linkedin.com/in/username"
                  className="flex-1 px-4 py-2 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>
              <div className="flex items-center space-x-3">
                <Twitter className="w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="twitter.com/username"
                  className="flex-1 px-4 py-2 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <button className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-500 text-white py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all">
              Save Changes
            </button>
            <button onClick={() => setShowProfileModal(false)} className="px-6 bg-white/10 text-white py-3 rounded-xl font-semibold hover:bg-white/20 transition-all">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const NotificationDropdown = ({ notifications, onClose }) => (
    <div className="absolute right-0 mt-2 w-80 bg-slate-800 border border-white/10 rounded-xl shadow-2xl z-50">
      <div className="p-4 border-b border-white/10 flex justify-between items-center">
        <h3 className="font-semibold text-white">Notifications</h3>
        <button onClick={onClose} className="text-gray-400 hover:text-white"><X className="w-4 h-4" /></button>
      </div>
      <div className="max-h-80 overflow-y-auto">
        {notifications.map(n => (
          <div key={n.id} className={`p-3 border-b border-white/5 flex items-start space-x-3 hover:bg-white/5 ${!n.isRead ? 'bg-white/5' : ''}`}>
            <div className="flex-shrink-0 mt-1">{n.icon}</div>
            <div className="flex-1">
              <p className={`text-sm ${!n.isRead ? 'text-white' : 'text-gray-300'}`}>{n.title}</p>
              <p className="text-xs text-gray-400">{n.description}</p>
              <p className="text-xs text-gray-500 mt-1">{n.time}</p>
            </div>
            {!n.isRead && <div className="w-2 h-2 bg-cyan-400 rounded-full self-center"></div>}
          </div>
        ))}
      </div>
      <div className="p-2 text-center border-t border-white/10">
        <button className="text-sm text-cyan-400 hover:underline">View all notifications</button>
      </div>
    </div>
  );

  const MessageDropdown = ({ messages, onClose }) => (
    <div className="absolute right-0 mt-2 w-80 bg-slate-800 border border-white/10 rounded-xl shadow-2xl z-50">
      <div className="p-4 border-b border-white/10 flex justify-between items-center">
        <h3 className="font-semibold text-white">Messages</h3>
        <button onClick={onClose} className="text-gray-400 hover:text-white"><X className="w-4 h-4" /></button>
      </div>
      <div className="max-h-80 overflow-y-auto">
        {messages.map(m => (
          <div key={m.id} className={`p-3 border-b border-white/5 flex items-start space-x-3 hover:bg-white/5 ${!m.isRead ? 'bg-white/5' : ''}`}>
            <img src={m.avatar} alt={m.sender} className="w-10 h-10 rounded-full" />
            <div className="flex-1">
              <div className="flex justify-between items-baseline">
                <p className={`text-sm font-semibold ${!m.isRead ? 'text-white' : 'text-gray-300'}`}>{m.sender}</p>
                <p className="text-xs text-gray-500">{m.time}</p>
              </div>
              <p className="text-sm text-gray-400 line-clamp-2">{m.message}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="p-2 text-center border-t border-white/10">
        <button className="text-sm text-cyan-400 hover:underline">Read more messages</button>
      </div>
    </div>
  );

  const LogoutModal = () => (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-white/20 rounded-3xl p-8 max-w-md w-full">
        <div className="flex justify-center mb-4">
          <div className="bg-yellow-500/20 p-3 rounded-full border-2 border-yellow-500/50">
            <AlertTriangle className="w-8 h-8 text-yellow-400" />
          </div>
        </div>
        <h2 className="text-2xl font-bold text-white text-center mb-2">Confirm Logout</h2>
        <p className="text-gray-300 text-center mb-8">Are you sure you want to log out?</p>
        <div className="flex space-x-4">
          <button onClick={() => setShowLogoutModal(false)} className="flex-1 px-6 py-3 bg-white/10 border border-white/20 text-white rounded-lg hover:bg-white/20 transition-all font-semibold">
            Cancel
          </button>
          <button onClick={handleLogout} className="flex-1 px-6 py-3 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-lg hover:shadow-lg hover:shadow-pink-500/50 transition-all font-semibold">
            Logout
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Top Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-slate-900/95 backdrop-blur-lg border-b border-white/10 z-40">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="text-white lg:hidden">
                <Menu className="w-6 h-6" />
              </button>
              <Link to="/" className="flex items-center space-x-2">
                <div className="bg-gradient-to-r from-cyan-500 to-purple-500 p-2 rounded-lg">
                  <Cpu className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold text-white hidden sm:block">
                  Engineer<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">X</span>
                </span>
              </Link>
            </div>

            <div className="flex-1 max-w-2xl mx-8 hidden md:block">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles, topics, authors..."
                  className="w-full pl-12 pr-4 py-2 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="relative">
                <button onClick={handleMessageClick} className="relative text-gray-400 hover:text-white">
                  <Mail className="w-6 h-6" />
                  <span className="absolute -top-1 -right-1 bg-cyan-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    2
                  </span>
                </button>
                {showMessageDropdown && <MessageDropdown messages={messagesData} onClose={() => setShowMessageDropdown(false)} />}
              </div>
              <div className="relative">
                <button onClick={handleNotificationClick} className="relative text-gray-400 hover:text-white">
                  <Bell className="w-6 h-6" />
                  <span className="absolute -top-1 -right-1 bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    2
                  </span>
                </button>
                {showNotificationDropdown && <NotificationDropdown notifications={notificationsData} onClose={() => setShowNotificationDropdown(false)} />}
              </div>
              <button onClick={() => { setShowProfileModal(true); setShowMessageDropdown(false); setShowNotificationDropdown(false); }} className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80"
                  alt="Profile"
                  className="w-8 h-8 rounded-full border-2 border-cyan-500"
                />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex pt-16">
        {/* Sidebar */}
        <aside className={`fixed lg:static inset-y-0 left-0 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 transition-transform duration-300 ease-in-out w-64 bg-slate-900/50 backdrop-blur-lg border-r border-white/10 z-30 pt-16 lg:pt-0`}>
          <div className="p-6 space-y-6">
            <div>
              <h3 className="text-gray-400 text-sm font-semibold mb-3">MENU</h3>
              <nav className="space-y-2">
                <button
                  onClick={() => setCurrentView('home')}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all ${
                    currentView === 'home' ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 border border-cyan-500/50' : 'text-gray-400 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <Home className="w-5 h-5" />
                  <span className="font-medium">Home</span>
                </button>
                <button
                  onClick={() => setCurrentView('trending')}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all ${
                    currentView === 'trending' ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 border border-cyan-500/50' : 'text-gray-400 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <TrendingUp className="w-5 h-5" />
                  <span className="font-medium">Trending</span>
                </button>
                <button
                  onClick={() => setCurrentView('bookmarks')}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all ${
                    currentView === 'bookmarks' ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 border border-cyan-500/50' : 'text-gray-400 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <Bookmark className="w-5 h-5" />
                  <span className="font-medium">Bookmarks</span>
                </button>
                <button
                  onClick={() => setShowProfileModal(true)}
                  className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-gray-400 hover:bg-white/5 hover:text-white transition-all"
                >
                  <User className="w-5 h-5" />
                  <span className="font-medium">Profile</span>
                </button>
                <Link 
                  to="/settings"
                  className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-gray-400 hover:bg-white/5 hover:text-white transition-all"
                >
                  <Settings className="w-5 h-5" />
                  <span className="font-medium">Settings</span>
                </Link>
              </nav>
            </div>

            <div>
              <h3 className="text-gray-400 text-sm font-semibold mb-3">CATEGORIES</h3>
              <nav className="space-y-1">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`w-full text-left px-4 py-2 rounded-lg transition-all ${
                      selectedCategory === category ? 'text-cyan-400 bg-white/5' : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </nav>
            </div>

            <button 
              onClick={() => setShowLogoutModal(true)}
              className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-red-400 hover:bg-red-500/10 transition-all"
            >
              <LogOut className="w-5 h-5" />
              <span className="font-medium">Logout</span>
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 lg:p-8 overflow-y-auto">
          <div className="max-w-7xl mx-auto">
            {/* Create Post */}
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 mb-8">
              <div className="flex space-x-4">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80" 
                  alt="You" 
                  className="w-12 h-12 rounded-full border-2 border-cyan-500" 
                />
                <div className="flex-1">
                  <textarea
                    value={newPost}
                    onChange={(e) => setNewPost(e.target.value)}
                    placeholder="What's on your mind, John?"
                    className="w-full bg-transparent text-white placeholder-gray-400 focus:outline-none resize-none text-lg mb-3"
                    rows="3"
                  />
                  <div className="flex items-center justify-between pt-3 border-t border-white/10">
                    <div className="flex items-center space-x-1">
                      <button className="p-2 text-gray-400 hover:text-cyan-400 hover:bg-white/10 rounded-lg transition-all" title="Add image">
                        <Image className="w-5 h-5" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-cyan-400 hover:bg-white/10 rounded-lg transition-all" title="Bold">
                        <Bold className="w-5 h-5" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-cyan-400 hover:bg-white/10 rounded-lg transition-all" title="Italic">
                        <Italic className="w-5 h-5" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-cyan-400 hover:bg-white/10 rounded-lg transition-all" title="Code">
                        <Code className="w-5 h-5" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-cyan-400 hover:bg-white/10 rounded-lg transition-all" title="List">
                        <List className="w-5 h-5" />
                      </button>
                    </div>
                    <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all">
                      Post
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Header */}
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-white mb-2">
                {currentView === 'home' && 'Discover Articles'}
                {currentView === 'trending' && 'Trending Now'}
                {currentView === 'bookmarks' && 'My Bookmarks'}
              </h1>
              <p className="text-gray-400">
                {currentView === 'home' && 'Explore the latest in technology and engineering'}
                {currentView === 'trending' && 'Most popular articles this week'}
                {currentView === 'bookmarks' && 'Your saved articles for later reading'}
              </p>
            </div>

            {/* Category Filter Bar */}
            <div className="mb-8 flex items-center justify-between">
              <div className="flex items-center space-x-2 overflow-x-auto pb-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-full font-semibold whitespace-nowrap transition-all ${
                      selectedCategory === cat
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg'
                        : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
              <button className="hidden lg:flex items-center space-x-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 transition-all">
                <Filter className="w-4 h-4" />
                <span>Filter</span>
              </button>
            </div>

            {/* Articles Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((article) => (
                <div key={article.id} className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-purple-500/20 transition-all group">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        {article.category}
                      </span>
                    </div>
                    <button className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm p-2 rounded-full hover:bg-black/70 transition-all">
                      <Bookmark className={`w-4 h-4 ${article.isBookmarked ? 'text-cyan-400 fill-cyan-400' : 'text-white'}`} />
                    </button>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center space-x-2 mb-3">
                      <img 
                        src={article.authorAvatar}
                        alt={article.author}
                        className="w-8 h-8 rounded-full"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-white text-sm font-medium truncate">{article.author}</p>
                        <div className="flex items-center space-x-2 text-xs text-gray-400">
                          <Clock className="w-3 h-3" />
                          <span>{article.readTime}</span>
                          <span>•</span>
                          <Calendar className="w-3 h-3" />
                          <span>{article.date}</span>
                        </div>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-2">{article.excerpt}</p>

                    <div className="flex items-center justify-between pt-4 border-t border-white/10">
                      <div className="flex items-center space-x-4">
                        <button className="flex items-center space-x-1 text-gray-400 hover:text-red-400 transition-colors">
                          <Heart className="w-4 h-4" />
                          <span className="text-sm">{article.likes}</span>
                        </button>
                        <button className="flex items-center space-x-1 text-gray-400 hover:text-cyan-400 transition-colors">
                          <MessageCircle className="w-4 h-4" />
                          <span className="text-sm">{article.comments}</span>
                        </button>
                      </div>
                      <button className="text-gray-400 hover:text-white transition-colors">
                        <Share2 className="w-4 h-4" />
                      </button>
                    </div>

                    <button className="w-full mt-4 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 text-cyan-400 py-2 rounded-xl font-semibold hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-purple-500/20 transition-all flex items-center justify-center space-x-2">
                      <span>Read Article</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>

      {showProfileModal && <ProfileModal />}
      {showLogoutModal && <LogoutModal />}
    </div>
  );
};

export default Dashboard;