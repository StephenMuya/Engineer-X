import React, { useState } from 'react';
import { Bell, Heart, MessageCircle, UserPlus, BookOpen, TrendingUp, X, Check, Settings, Trash2 } from 'lucide-react';

const NotificationDropdown = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'like',
      icon: <Heart className="w-5 h-5" />,
      title: 'Sarah Chen liked your comment',
      description: 'on "Building Scalable Microservices with Kubernetes"',
      time: '5 minutes ago',
      isRead: false,
      color: 'red'
    },
    {
      id: 2,
      type: 'comment',
      icon: <MessageCircle className="w-5 h-5" />,
      title: 'Michael Park replied to your comment',
      description: '"Great insights! Have you tried implementing this with..."',
      time: '1 hour ago',
      isRead: false,
      color: 'cyan'
    },
    {
      id: 3,
      type: 'follow',
      icon: <UserPlus className="w-5 h-5" />,
      title: 'Emily Rodriguez started following you',
      description: 'Check out their profile',
      time: '3 hours ago',
      isRead: false,
      color: 'purple'
    },
    {
      id: 4,
      type: 'article',
      icon: <BookOpen className="w-5 h-5" />,
      title: 'New article in AI/ML',
      description: '"Advanced Neural Network Architectures Explained"',
      time: '5 hours ago',
      isRead: true,
      color: 'cyan'
    },
    {
      id: 5,
      type: 'trending',
      icon: <TrendingUp className="w-5 h-5" />,
      title: 'Your article is trending',
      description: '"React Server Components" has 500+ views today',
      time: '1 day ago',
      isRead: true,
      color: 'green'
    }
  ]);



  const [isOpen, setIsOpen] = useState(true);

  const unreadCount = notifications.filter(n => !n.isRead).length;

  const markAsRead = (id) => {
    setNotifications(notifications.map(n => 
      n.id === id ? { ...n, isRead: true } : n
    ));
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, isRead: true })));
  };

  const deleteNotification = (id) => {
    setNotifications(notifications.filter(n => n.id !== id));
  };

  const clearAll = () => {
    setNotifications([]);
  };

  const getColorClasses = (color, isRead) => {
    if (isRead) return 'bg-gray-700/20 text-gray-400';
    
    const colors = {
      red: 'bg-red-500/20 text-red-400',
      cyan: 'bg-cyan-500/20 text-cyan-400',
      purple: 'bg-purple-500/20 text-purple-400',
      green: 'bg-green-500/20 text-green-400'
    };
    return colors[color] || 'bg-cyan-500/20 text-cyan-400';
  };

  if (!isOpen) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-3 rounded-full font-semibold"
        >
          Open Notifications
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      <div className="relative max-w-md w-full">
        {/* Notification Bell Button */}
        <div className="flex justify-center mb-4">
          <button className="relative bg-white/10 backdrop-blur-lg border border-white/20 p-3 rounded-full hover:bg-white/20 transition-all">
            <Bell className="w-6 h-6 text-white" />
            {unreadCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center font-bold shadow-lg">
                {unreadCount}
              </span>
            )}
          </button>
        </div>

        {/* Dropdown */}
        <div className="bg-gradient-to-br from-purple-900/40 via-slate-900/60 to-purple-900/40 backdrop-blur-xl border-2 border-purple-500/30 rounded-2xl shadow-2xl overflow-hidden">
          {/* Decorative Top Border */}
          <div className="h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500"></div>

          {/* Header */}
          <div className="p-4 border-b border-white/10">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xl font-bold text-white flex items-center space-x-2">
                <Bell className="w-5 h-5" />
                <span>Notifications</span>
                {unreadCount > 0 && (
                  <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-xs px-2 py-1 rounded-full">
                    {unreadCount} new
                  </span>
                )}
              </h3>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            {/* Action Buttons */}
            <div className="flex items-center space-x-2">
              {unreadCount > 0 && (
                <button 
                  onClick={markAllAsRead}
                  className="flex items-center space-x-1 text-cyan-400 hover:text-cyan-300 text-xs font-semibold transition-colors"
                >
                  <Check className="w-3 h-3" />
                  <span>Mark all read</span>
                </button>
              )}
              {notifications.length > 0 && (
                <button 
                  onClick={clearAll}
                  className="flex items-center space-x-1 text-red-400 hover:text-red-300 text-xs font-semibold transition-colors"
                >
                  <Trash2 className="w-3 h-3" />
                  <span>Clear all</span>
                </button>
              )}
              <button className="flex items-center space-x-1 text-gray-400 hover:text-white text-xs font-semibold transition-colors ml-auto">
                <Settings className="w-3 h-3" />
                <span>Settings</span>
              </button>
            </div>
          </div>

          {/* Notifications List */}
          <div className="max-h-96 overflow-y-auto custom-scrollbar">
            <style jsx>{`
              .custom-scrollbar::-webkit-scrollbar {
                width: 8px;
              }
              .custom-scrollbar::-webkit-scrollbar-track {
                background: rgba(100, 116, 139, 0.1);
                border-radius: 10px;
              }
              .custom-scrollbar::-webkit-scrollbar-thumb {
                background: linear-gradient(to bottom, #06b6d4, #a855f7);
                border-radius: 10px;
              }
              .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                background: linear-gradient(to bottom, #0891b2, #9333ea);
              }
            `}</style>

            {notifications.length === 0 ? (
              <div className="p-8 text-center">
                <Bell className="w-12 h-12 text-gray-600 mx-auto mb-3" />
                <p className="text-gray-400">No notifications yet</p>
                <p className="text-gray-500 text-sm mt-1">We'll notify you when something happens</p>
              </div>
            ) : (
              notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`p-4 border-b border-white/5 hover:bg-white/5 transition-all group ${
                    !notification.isRead ? 'bg-white/5' : ''
                  }`}
                >
                  <div className="flex space-x-3">
                    {/* Icon */}
                    <div className={`${getColorClasses(notification.color, notification.isRead)} p-2 rounded-lg h-fit`}>
                      {notification.icon}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h4 className={`font-semibold mb-1 ${notification.isRead ? 'text-gray-400' : 'text-white'}`}>
                        {notification.title}
                      </h4>
                      <p className="text-gray-500 text-sm mb-2 line-clamp-2">
                        {notification.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600 text-xs">{notification.time}</span>
                        <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          {!notification.isRead && (
                            <button
                              onClick={() => markAsRead(notification.id)}
                              className="text-cyan-400 hover:text-cyan-300 text-xs font-semibold"
                            >
                              Mark read
                            </button>
                          )}
                          <button
                            onClick={() => deleteNotification(notification.id)}
                            className="text-red-400 hover:text-red-300"
                          >
                            <Trash2 className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Unread Indicator */}
                    {!notification.isRead && (
                      <div className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mt-2"></div>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          {notifications.length > 0 && (
            <div className="p-3 border-t border-white/10 text-center">
              <button className="text-cyan-400 hover:text-cyan-300 text-sm font-semibold transition-colors">
                View All Notifications
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NotificationDropdown;