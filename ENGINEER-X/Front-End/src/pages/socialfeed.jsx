import React, { useState } from 'react';
import { Home, TrendingUp, Bell, Mail, User, Search, Image, Code, Smile, MoreHorizontal, Heart, MessageCircle, Repeat2, Share2, Bookmark, UserPlus, Check, X, Cpu, Settings, LogOut, Menu, Send } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const SocialFeed = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [newPost, setNewPost] = useState('');
  const [likedPosts, setLikedPosts] = useState(new Set());
  const [repostedPosts, setRepostedPosts] = useState(new Set());
  const [bookmarkedPosts, setBookmarkedPosts] = useState(new Set());
  const [followingUsers, setFollowingUsers] = useState(new Set([2, 3]));
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const [comments, setComments] = useState({});
  const [newComment, setNewComment] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [searchFilter, setSearchFilter] = useState('all'); // 'all', 'users', 'posts', 'comments'

  const posts = [
    {
      id: 1,
      author: 'Sarah Chen',
      username: '@sarahchen',
      avatar: 'https://i.pravatar.cc/150?img=1',
      timestamp: '2h ago',
      content: 'Just deployed my first Kubernetes cluster in production! 🚀 The journey from Docker containers to K8s orchestration has been incredible. Here are my top 3 lessons learned...',
      image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&q=80',
      likes: 756,
      comments: 45,
      reposts: 28,
      tags: ['#Kubernetes', '#DevOps', '#CloudNative']
    },
    {
      id: 2,
      author: 'Michael Torres',
      username: '@miguelt',
      avatar: 'https://i.pravatar.cc/150?img=12',
      timestamp: '4h ago',
      content: 'Working on a neural network that can predict code bugs before they happen. The model is showing 87% accuracy on our test dataset. AI-assisted debugging might be closer than we think! 🤖',
      codeSnippet: `def predict_bugs(code):
    model = load_model('bug_predictor.h5')
    features = extract_features(code)
    prediction = model.predict(features)
    return prediction > 0.85`,
      likes: 567,
      comments: 89,
      reposts: 45,
      tags: ['#AI', '#MachineLearning', '#CodeQuality']
    },
    {
      id: 3,
      author: 'Emily Rodriguez',
      username: '@emilydev',
      avatar: 'https://i.pravatar.cc/150?img=5',
      timestamp: '6h ago',
      content: 'React Server Components are a game changer! Just migrated our app and saw a 40% reduction in bundle size and 60% faster initial page loads. The future of web development is looking bright ✨',
      likes: 445,
      comments: 67,
      reposts: 34,
      tags: ['#React', '#WebDev', '#Performance']
    },
    {
      id: 4,
      author: 'David Kim',
      username: '@davidk',
      avatar: 'https://i.pravatar.cc/150?img=8',
      timestamp: '8h ago',
      content: 'Spent the weekend comparing AWS, Azure, and GCP for our next project. Each has its strengths, but the decision came down to our specific use case. Thread 🧵👇',
      likes: 789,
      comments: 123,
      reposts: 56,
      tags: ['#Cloud', '#AWS', '#Azure', '#GCP']
    },
    {
      id: 5,
      author: 'Jessica Lee',
      username: '@jessicalee',
      avatar: 'https://i.pravatar.cc/150?img=9',
      timestamp: '10h ago',
      content: 'Zero Trust Architecture isn\'t just a buzzword - it\'s essential. Just completed our security audit and the improvements are significant. Never trust, always verify 🔒',
      likes: 623,
      comments: 91,
      reposts: 67,
      tags: ['#CyberSecurity', '#ZeroTrust', '#InfoSec']
    }
  ];

  const suggestedUsers = [
    { id: 1, name: 'Alex Johnson', username: '@alexj', avatar: 'https://i.pravatar.cc/150?img=3', bio: 'Full-stack dev | Cloud enthusiast' },
    { id: 4, name: 'Lisa Wang', username: '@lisawang', avatar: 'https://i.pravatar.cc/150?img=45', bio: 'ML Engineer @ TechCorp' },
    { id: 5, name: 'James Brown', username: '@jamesbrown', avatar: 'https://i.pravatar.cc/150?img=15', bio: 'DevOps | Open Source Contributor' },
    { id: 6, name: 'Sarah Chen', username: '@sarahchen', avatar: 'https://i.pravatar.cc/150?img=1', bio: 'Kubernetes Expert | Speaker' },
    { id: 7, name: 'Michael Torres', username: '@miguelt', avatar: 'https://i.pravatar.cc/150?img=12', bio: 'AI Researcher | Neural Networks' },
    { id: 8, name: 'Emily Rodriguez', username: '@emilydev', avatar: 'https://i.pravatar.cc/150?img=5', bio: 'React Specialist | Web Performance' }
  ];

  const allComments = [
    { id: 1, postId: 1, author: 'Tom Wilson', username: '@tomw', content: 'Great insights on K8s! Thanks for sharing.', avatar: 'https://i.pravatar.cc/150?img=20' },
    { id: 2, postId: 1, author: 'Rachel Green', username: '@rachelg', content: 'This helped me understand pod networking better!', avatar: 'https://i.pravatar.cc/150?img=21' },
    { id: 3, postId: 2, author: 'Chris Evans', username: '@chrise', content: 'The accuracy is impressive! What dataset did you use?', avatar: 'https://i.pravatar.cc/150?img=22' },
    { id: 4, postId: 3, author: 'Nina Patel', username: '@ninap', content: 'RSC changed my development workflow completely', avatar: 'https://i.pravatar.cc/150?img=23' },
    { id: 5, postId: 4, author: 'Mark Davis', username: '@markd', content: 'Would love to see your comparison spreadsheet', avatar: 'https://i.pravatar.cc/150?img=24' }
  ];

  const navigate = useNavigate();

  const handlePostCreation = () => {
    navigate('/article-editor');
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    setShowSearchResults(query.length > 0);
  };

  const getFilteredResults = () => {
    if (!searchQuery.trim()) return { users: [], posts: [], comments: [] };

    const query = searchQuery.toLowerCase();

    const filteredUsers = suggestedUsers.filter(user => 
      user.name.toLowerCase().includes(query) || 
      user.username.toLowerCase().includes(query) ||
      user.bio.toLowerCase().includes(query)
    );

    const filteredPosts = posts.filter(post =>
      post.content.toLowerCase().includes(query) ||
      post.author.toLowerCase().includes(query) ||
      post.tags?.some(tag => tag.toLowerCase().includes(query))
    );

    const filteredComments = allComments.filter(comment =>
      comment.content.toLowerCase().includes(query) ||
      comment.author.toLowerCase().includes(query)
    );

    return { users: filteredUsers, posts: filteredPosts, comments: filteredComments };
  };

  const searchResults = getFilteredResults();

  const trendingTopics = [
    { tag: '#AI', posts: '12.5K posts' },
    { tag: '#Kubernetes', posts: '8.3K posts' },
    { tag: '#WebDev', posts: '15.2K posts' },
    { tag: '#CyberSecurity', posts: '6.7K posts' },
    { tag: '#CloudComputing', posts: '9.1K posts' }
  ];

  const toggleLike = (postId) => {
    const newLikes = new Set(likedPosts);
    if (newLikes.has(postId)) {
      newLikes.delete(postId);
    } else {
      newLikes.add(postId);
    }
    setLikedPosts(newLikes);
  };

  const toggleRepost = (postId) => {
    const newReposts = new Set(repostedPosts);
    if (newReposts.has(postId)) {
      newReposts.delete(postId);
    } else {
      newReposts.add(postId);
    }
    setRepostedPosts(newReposts);
  };

  const toggleBookmark = (postId) => {
    const newBookmarks = new Set(bookmarkedPosts);
    if (newBookmarks.has(postId)) {
      newBookmarks.delete(postId);
    } else {
      newBookmarks.add(postId);
    }
    setBookmarkedPosts(newBookmarks);
  };

  const toggleFollow = (userId) => {
    const newFollowing = new Set(followingUsers);
    if (newFollowing.has(userId)) {
      newFollowing.delete(userId);
    } else {
      newFollowing.add(userId);
    }
    setFollowingUsers(newFollowing);
  };

  const handlePostComment = (postId) => {
    if (newComment.trim()) {
      const postComments = comments[postId] || [];
      setComments({
        ...comments,
        [postId]: [...postComments, {
          id: Date.now(),
          author: 'John Doe',
          username: '@johndoe',
          avatar: 'https://i.pravatar.cc/150?img=68',
          content: newComment,
          timestamp: 'Just now'
        }]
      });
      setNewComment('');
    }
  };

  const PostCard = ({ post }) => (
    <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:bg-white/8 transition-all">
      <div className="flex items-start space-x-3">
        <img src={post.avatar} alt={post.author} className="w-12 h-12 rounded-full border-2 border-cyan-500" />
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-2">
            <div>
              <h3 className="text-white font-semibold">{post.author}</h3>
              <p className="text-gray-400 text-sm">{post.username} • {post.timestamp}</p>
            </div>
            <button className="text-gray-400 hover:text-white transition-colors">
              <MoreHorizontal className="w-5 h-5" />
            </button>
          </div>

          <p className="text-gray-200 mb-3 leading-relaxed">{post.content}</p>

          {post.codeSnippet && (
            <div className="bg-slate-950/50 border border-white/10 rounded-xl p-4 mb-3 overflow-x-auto">
              <pre className="text-cyan-400 text-sm font-mono">{post.codeSnippet}</pre>
            </div>
          )}

          {post.image && (
            <img src={post.image} alt="Post" className="w-full rounded-xl mb-3 cursor-pointer hover:opacity-90 transition-opacity" />
          )}

          {post.tags && (
            <div className="flex flex-wrap gap-2 mb-3">
              {post.tags.map((tag, idx) => (
                <span key={idx} className="text-cyan-400 text-sm hover:text-cyan-300 cursor-pointer">
                  {tag}
                </span>
              ))}
            </div>
          )}

          <div className="flex items-center justify-between pt-3 border-t border-white/10">
            <button 
              onClick={() => toggleLike(post.id)}
              className={`flex items-center space-x-2 transition-colors ${
                likedPosts.has(post.id) ? 'text-red-500' : 'text-gray-400 hover:text-red-500'
              }`}
            >
              <Heart className={`w-5 h-5 ${likedPosts.has(post.id) ? 'fill-current' : ''}`} />
              <span className="text-sm font-semibold">{post.likes + (likedPosts.has(post.id) ? 1 : 0)}</span>
            </button>

            <button 
              onClick={() => setSelectedPost(selectedPost === post.id ? null : post.id)}
              className="flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              <span className="text-sm font-semibold">{post.comments + (comments[post.id]?.length || 0)}</span>
            </button>

            <button 
              onClick={() => toggleRepost(post.id)}
              className={`flex items-center space-x-2 transition-colors ${
                repostedPosts.has(post.id) ? 'text-green-500' : 'text-gray-400 hover:text-green-500'
              }`}
            >
              <Repeat2 className="w-5 h-5" />
              <span className="text-sm font-semibold">{post.reposts + (repostedPosts.has(post.id) ? 1 : 0)}</span>
            </button>

            <button className="flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors">
              <Share2 className="w-5 h-5" />
            </button>

            <button 
              onClick={() => toggleBookmark(post.id)}
              className={`transition-colors ${
                bookmarkedPosts.has(post.id) ? 'text-cyan-400' : 'text-gray-400 hover:text-cyan-400'
              }`}
            >
              <Bookmark className={`w-5 h-5 ${bookmarkedPosts.has(post.id) ? 'fill-current' : ''}`} />
            </button>
          </div>

          {selectedPost === post.id && (
            <div className="mt-4 pt-4 border-t border-white/10 space-y-4">
              {comments[post.id]?.map((comment) => (
                <div key={comment.id} className="flex space-x-3">
                  <img src={comment.avatar} alt={comment.author} className="w-8 h-8 rounded-full" />
                  <div className="flex-1 bg-white/5 rounded-xl p-3">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="text-white font-semibold text-sm">{comment.author}</span>
                      <span className="text-gray-500 text-xs">{comment.timestamp}</span>
                    </div>
                    <p className="text-gray-300 text-sm">{comment.content}</p>
                  </div>
                </div>
              ))}
              <div className="flex space-x-3">
                <img src="https://i.pravatar.cc/150?img=68" alt="You" className="w-8 h-8 rounded-full" />
                <div className="flex-1 flex space-x-2">
                  <input
                    type="text"
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Write a comment..."
                    className="flex-1 px-4 py-2 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                  <button 
                    onClick={() => handlePostComment(post.id)}
                    className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white p-2 rounded-xl hover:shadow-lg hover:shadow-purple-500/50 transition-all"
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Top Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-lg border-b border-white/10 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 gap-4">
            {/* Left: Logo */}
            <div className="flex items-center space-x-4 flex-shrink-0">
              <button 
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="lg:hidden text-white hover:text-cyan-400 transition-colors"
              >
                <Menu className="w-6 h-6" />
              </button>
              <div className="flex items-center space-x-2">
                <div className="bg-gradient-to-r from-cyan-500 to-purple-500 p-2 rounded-lg">
                  <Cpu className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold text-white hidden sm:block">
                  Engineer<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">X</span>
                </span>
              </div>
            </div>

            {/* Center: Search Bar */}
            <div className="flex-1 max-w-2xl">
              <div className="relative w-full">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 z-10 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                  onFocus={() => searchQuery && setShowSearchResults(true)}
                  placeholder="Search posts, people, topics..."
                  className="w-full pl-12 pr-4 py-2.5 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
                />
                
                {/* Search Results Dropdown */}
                {showSearchResults && searchQuery && (
                  <>
                    {/* Backdrop to close search */}
                    <div 
                      className="fixed inset-0 z-40" 
                      onClick={() => setShowSearchResults(false)}
                    ></div>
                    
                    <div className="absolute top-full mt-2 w-full bg-slate-900/98 backdrop-blur-lg border border-white/10 rounded-2xl shadow-2xl max-h-96 overflow-y-auto z-50">
                      <div className="sticky top-0 bg-slate-900/95 border-b border-white/10 p-3 flex space-x-2 overflow-x-auto">
                        <button 
                          onClick={() => setSearchFilter('all')}
                          className={`px-4 py-2 rounded-full text-sm font-semibold transition-all whitespace-nowrap ${
                            searchFilter === 'all' 
                              ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white' 
                              : 'bg-white/5 text-gray-300 hover:bg-white/10'
                          }`}
                        >
                          All
                        </button>
                        <button 
                          onClick={() => setSearchFilter('users')}
                          className={`px-4 py-2 rounded-full text-sm font-semibold transition-all whitespace-nowrap ${
                            searchFilter === 'users' 
                              ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white' 
                              : 'bg-white/5 text-gray-300 hover:bg-white/10'
                          }`}
                        >
                          Users ({searchResults.users.length})
                        </button>
                        <button 
                          onClick={() => setSearchFilter('posts')}
                          className={`px-4 py-2 rounded-full text-sm font-semibold transition-all whitespace-nowrap ${
                            searchFilter === 'posts' 
                              ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white' 
                              : 'bg-white/5 text-gray-300 hover:bg-white/10'
                          }`}
                        >
                          Posts ({searchResults.posts.length})
                        </button>
                        <button 
                          onClick={() => setSearchFilter('comments')}
                          className={`px-4 py-2 rounded-full text-sm font-semibold transition-all whitespace-nowrap ${
                            searchFilter === 'comments' 
                              ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white' 
                              : 'bg-white/5 text-gray-300 hover:bg-white/10'
                          }`}
                        >
                          Comments ({searchResults.comments.length})
                        </button>
                      </div>

                      <div className="p-4">
                        {/* Users Results */}
                        {(searchFilter === 'all' || searchFilter === 'users') && searchResults.users.length > 0 && (
                          <div className="mb-4">
                            <h3 className="text-gray-400 text-xs font-semibold uppercase mb-3">Users</h3>
                            {searchResults.users.map(user => (
                              <div key={user.id} className="flex items-center space-x-3 p-3 hover:bg-white/5 rounded-xl cursor-pointer transition-all">
                                <img src={user.avatar} alt={user.name} className="w-10 h-10 rounded-full" />
                                <div className="flex-1 min-w-0">
                                  <p className="text-white font-semibold text-sm">{user.name}</p>
                                  <p className="text-gray-400 text-xs">{user.username}</p>
                                </div>
                                <button 
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    toggleFollow(user.id);
                                  }}
                                  className={`px-4 py-1 rounded-full text-xs font-semibold transition-all ${
                                    followingUsers.has(user.id)
                                      ? 'bg-white/10 text-white border border-white/20'
                                      : 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white'
                                  }`}
                                >
                                  {followingUsers.has(user.id) ? 'Following' : 'Follow'}
                                </button>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Posts Results */}
                        {(searchFilter === 'all' || searchFilter === 'posts') && searchResults.posts.length > 0 && (
                          <div className="mb-4">
                            <h3 className="text-gray-400 text-xs font-semibold uppercase mb-3">Posts</h3>
                            {searchResults.posts.map(post => (
                              <div key={post.id} className="p-3 hover:bg-white/5 rounded-xl cursor-pointer transition-all">
                                <div className="flex items-start space-x-3">
                                  <img src={post.avatar} alt={post.author} className="w-8 h-8 rounded-full" />
                                  <div className="flex-1 min-w-0">
                                    <div className="flex items-center space-x-2 mb-1">
                                      <span className="text-white font-semibold text-sm">{post.author}</span>
                                      <span className="text-gray-500 text-xs">{post.timestamp}</span>
                                    </div>
                                    <p className="text-gray-300 text-sm line-clamp-2">{post.content}</p>
                                    <div className="flex items-center space-x-4 mt-2 text-xs text-gray-400">
                                      <span className="flex items-center">
                                        <Heart className="w-3 h-3 mr-1" />
                                        {post.likes}
                                      </span>
                                      <span className="flex items-center">
                                        <MessageCircle className="w-3 h-3 mr-1" />
                                        {post.comments}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Comments Results */}
                        {(searchFilter === 'all' || searchFilter === 'comments') && searchResults.comments.length > 0 && (
                          <div>
                            <h3 className="text-gray-400 text-xs font-semibold uppercase mb-3">Comments</h3>
                            {searchResults.comments.map(comment => (
                              <div key={comment.id} className="p-3 hover:bg-white/5 rounded-xl cursor-pointer transition-all">
                                <div className="flex items-start space-x-3">
                                  <img src={comment.avatar} alt={comment.author} className="w-8 h-8 rounded-full" />
                                  <div className="flex-1 min-w-0">
                                    <div className="flex items-center space-x-2 mb-1">
                                      <span className="text-white font-semibold text-sm">{comment.author}</span>
                                      <span className="text-gray-500 text-xs">{comment.username}</span>
                                    </div>
                                    <p className="text-gray-300 text-sm">{comment.content}</p>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* No Results */}
                        {searchResults.users.length === 0 && searchResults.posts.length === 0 && searchResults.comments.length === 0 && (
                          <div className="text-center py-8">
                            <Search className="w-12 h-12 text-gray-600 mx-auto mb-3" />
                            <p className="text-gray-400">No results found for "{searchQuery}"</p>
                            <p className="text-gray-500 text-sm mt-1">Try different keywords</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Right: Action Icons */}
            <div className="flex items-center space-x-4 flex-shrink-0">
              <button className="relative text-white hover:text-cyan-400 transition-colors">
                <Bell className="w-6 h-6" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">5</span>
              </button>

              <button className="relative text-white hover:text-cyan-400 transition-colors">
                <Mail className="w-6 h-6" />
                <span className="absolute -top-1 -right-1 bg-cyan-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">2</span>
              </button>

              <div className="relative">
                <button 
                  onClick={() => setShowProfileMenu(!showProfileMenu)}
                  className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
                >
                  <img 
                    src="https://i.pravatar.cc/150?img=68" 
                    alt="Profile"
                    className="w-9 h-9 rounded-full border-2 border-cyan-500"
                  />
                </button>

                {showProfileMenu && (
                  <div className="absolute right-0 mt-2 w-56 bg-slate-800 border border-white/10 rounded-xl shadow-2xl overflow-hidden">
                    <div className="p-4 border-b border-white/10">
                      <p className="text-white font-semibold">John Doe</p>
                      <p className="text-gray-400 text-sm">@johndoe</p>
                    </div>
                    <div className="py-2">
                      <button className="w-full px-4 py-2 text-left text-white hover:bg-white/10 flex items-center space-x-3">
                        <User className="w-4 h-4 text-cyan-400" />
                        <span>My Profile</span>
                      </button>
                      <button className="w-full px-4 py-2 text-left text-white hover:bg-white/10 flex items-center space-x-3">
                        <Settings className="w-4 h-4 text-cyan-400" />
                        <span>Settings</span>
                      </button>
                    </div>
                    <div className="border-t border-white/10 py-2">
                      <button className="w-full px-4 py-2 text-left text-red-400 hover:bg-white/10 flex items-center space-x-3">
                        <LogOut className="w-4 h-4" />
                        <span>Sign Out</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex pt-16">
        {/* Left Sidebar */}
        <aside className={`fixed lg:static inset-y-0 left-0 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 transition-transform duration-300 w-64 bg-slate-900/50 backdrop-blur-lg border-r border-white/10 pt-16 lg:pt-0 z-40 overflow-y-auto`}>
          <div className="p-6">
            <div className="flex justify-between items-center mb-6 lg:hidden">
              <h2 className="text-white font-bold text-lg">Menu</h2>
              <button onClick={() => setIsSidebarOpen(false)} className="text-white">
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="space-y-2">
              <button 
                onClick={() => setActiveTab('home')}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all ${
                  activeTab === 'home' 
                    ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-white border border-cyan-500/50' 
                    : 'text-gray-300 hover:bg-white/5'
                }`}
              >
                <Home className="w-5 h-5" />
                <span className="font-medium">Home</span>
              </button>

              <button 
                onClick={() => setActiveTab('trending')}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all ${
                  activeTab === 'trending' 
                    ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-white border border-cyan-500/50' 
                    : 'text-gray-300 hover:bg-white/5'
                }`}
              >
                <TrendingUp className="w-5 h-5" />
                <span className="font-medium">Trending</span>
              </button>

              <button 
                onClick={() => setActiveTab('notifications')}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all ${
                  activeTab === 'notifications' 
                    ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-white border border-cyan-500/50' 
                    : 'text-gray-300 hover:bg-white/5'
                }`}
              >
                <Bell className="w-5 h-5" />
                <span className="font-medium">Notifications</span>
              </button>

              <button 
                onClick={() => setActiveTab('messages')}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all ${
                  activeTab === 'messages' 
                    ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-white border border-cyan-500/50' 
                    : 'text-gray-300 hover:bg-white/5'
                }`}
              >
                <Mail className="w-5 h-5" />
                <span className="font-medium">Messages</span>
              </button>

              <button 
                onClick={() => setActiveTab('bookmarks')}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all ${
                  activeTab === 'bookmarks' 
                    ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-white border border-cyan-500/50' 
                    : 'text-gray-300 hover:bg-white/5'
                }`}
              >
                <Bookmark className="w-5 h-5" />
                <span className="font-medium">Bookmarks</span>
              </button>

              <button 
                onClick={() => setActiveTab('profile')}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all ${
                  activeTab === 'profile' 
                    ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-white border border-cyan-500/50' 
                    : 'text-gray-300 hover:bg-white/5'
                }`}
              >
                <User className="w-5 h-5" />
                <span className="font-medium">Profile</span>
              </button>
            </nav>
          </div>
        </aside>

        {/* Overlay for mobile */}
        {isSidebarOpen && (
          <div 
            className="fixed inset-0 bg-black/50 z-30 lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          ></div>
        )}

        {/* Center Feed */}
        <main className="flex-1 border-r border-white/10 overflow-y-auto">
          <div className="max-w-2xl mx-auto p-4">
            {/* Create Post */}
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 mb-6">
              <div className="flex space-x-3">
                <img src="https://i.pravatar.cc/150?img=68" alt="You" className="w-12 h-12 rounded-full border-2 border-cyan-500" />
                <div className="flex-1">
                  <textarea
                    value={newPost}
                    onChange={(e) => setNewPost(e.target.value)}
                    placeholder="What's on your mind?"
                    className="w-full bg-transparent text-white placeholder-gray-400 focus:outline-none resize-none text-lg mb-3"
                    rows="3"
                  />
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-2">
                      <button className="p-2 text-cyan-400 hover:bg-white/10 rounded-lg transition-all">
                        <Image className="w-5 h-5" />
                      </button>
                      <button className="p-2 text-cyan-400 hover:bg-white/10 rounded-lg transition-all">
                        <Code className="w-5 h-5" />
                      </button>
                      <button className="p-2 text-cyan-400 hover:bg-white/10 rounded-lg transition-all">
                        <Smile className="w-5 h-5" />
                      </button>
                    </div>
                      <button 
                        onClick={handlePostCreation}
                        className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-2 rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition-all font-semibold">
                        Post
                      </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Feed Posts */}
            <div className="space-y-4">
              {posts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        </main>

        {/* Right Sidebar */}
        <aside className="hidden xl:block w-80 p-6 overflow-y-auto">
          {/* Trending Topics */}
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 mb-6">
            <h2 className="text-xl font-bold text-white mb-4">Trending Topics</h2>
            <div className="space-y-3">
              {trendingTopics.map((topic, idx) => (
                <div key={idx} className="hover:bg-white/5 p-3 rounded-xl transition-all cursor-pointer">
                  <p className="text-cyan-400 font-semibold">{topic.tag}</p>
                  <p className="text-gray-400 text-sm">{topic.posts}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Suggested Users */}
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-white mb-4">Who to Follow</h2>
            <div className="space-y-4">
              {suggestedUsers.map((user) => (
                <div key={user.id} className="flex items-start space-x-3">
                  <img src={user.avatar} alt={user.name} className="w-12 h-12 rounded-full" />
                  <div className="flex-1 min-w-0">
                    <h3 className="text-white font-semibold text-sm">{user.name}</h3>
                    <p className="text-gray-400 text-xs mb-1">{user.username}</p>
                    <p className="text-gray-500 text-xs truncate">{user.bio}</p>
                  </div>
                  <button 
                    onClick={() => toggleFollow(user.id)}
                    className={`px-4 py-1 rounded-full text-sm font-semibold transition-all ${
                      followingUsers.has(user.id)
                        ? 'bg-white/10 text-white border border-white/20 hover:bg-red-500/20 hover:border-red-500/50 hover:text-red-400'
                        : 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:shadow-lg hover:shadow-purple-500/50'
                    }`}
                  >
                    {followingUsers.has(user.id) ? 'Following' : 'Follow'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default SocialFeed;