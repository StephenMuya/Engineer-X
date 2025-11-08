import React, { useState } from 'react';
import { User, Bell, Eye, Palette, Shield, Download, Smartphone, Trash2, Check, AlertCircle, Cpu, Save, ArrowLeft } from 'lucide-react';

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState('account');
  const [showSaveNotification, setShowSaveNotification] = useState(false);
  
  const [settings, setSettings] = useState({
    email: 'john.dev@example.com',
    username: 'johndeveloper',
    displayName: 'John Developer',
    emailNotifications: true,
    pushNotifications: true,
    articleUpdates: true,
    commentsReplies: true,
    weeklyDigest: true,
    profileVisibility: 'public',
    showEmail: false,
    showActivity: true,
    allowMessages: true,
    theme: 'dark',
    language: 'en',
    fontSize: 'medium',
    twoFactorAuth: false,
    loginAlerts: true
  });

  const tabs = [
    { id: 'account', label: 'Account', icon: <User className="w-5 h-5" /> },
    { id: 'notifications', label: 'Notifications', icon: <Bell className="w-5 h-5" /> },
    { id: 'privacy', label: 'Privacy', icon: <Eye className="w-5 h-5" /> },
    { id: 'appearance', label: 'Appearance', icon: <Palette className="w-5 h-5" /> },
    { id: 'security', label: 'Security', icon: <Shield className="w-5 h-5" /> },
    { id: 'data', label: 'Data', icon: <Download className="w-5 h-5" /> }
  ];

  const handleSave = () => {
    setShowSaveNotification(true);
    setTimeout(() => setShowSaveNotification(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Top Bar */}
      <div className="bg-slate-900/95 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <button className="text-gray-400 hover:text-white">
                <ArrowLeft className="w-6 h-6" />
              </button>
              <div className="flex items-center space-x-2">
                <div className="bg-gradient-to-r from-cyan-500 to-purple-500 p-2 rounded-lg">
                  <Cpu className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold text-white">
                  Engineer<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">X</span>
                </span>
              </div>
            </div>
            <button onClick={handleSave} className="flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all">
              <Save className="w-4 h-4" />
              <span>Save Changes</span>
            </button>
          </div>
        </div>
      </div>

      {/* Save Notification */}
      {showSaveNotification && (
        <div className="fixed top-20 right-4 bg-green-500/20 border border-green-500/50 rounded-xl p-4 z-50 backdrop-blur-lg">
          <div className="flex items-center space-x-2 text-green-400">
            <Check className="w-5 h-5" />
            <span className="font-semibold">Settings saved successfully!</span>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-4">
              <h2 className="text-white font-bold text-lg mb-4 px-2">Settings</h2>
              <nav className="space-y-1">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all ${
                      activeTab === tab.id
                        ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 border border-cyan-500/50'
                        : 'text-gray-400 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    {tab.icon}
                    <span className="font-medium">{tab.label}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Content Area */}
          <div className="lg:col-span-3">
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8">
              {activeTab === 'account' && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-2">Account Settings</h2>
                    <p className="text-gray-400">Manage your account information</p>
                  </div>
                  <div>
                    <label className="block text-white text-sm font-semibold mb-2">Email Address</label>
                    <input
                      type="email"
                      value={settings.email}
                      onChange={(e) => setSettings({...settings, email: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    />
                  </div>
                  <div>
                    <label className="block text-white text-sm font-semibold mb-2">Username</label>
                    <input
                      type="text"
                      value={settings.username}
                      onChange={(e) => setSettings({...settings, username: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    />
                  </div>
                  <div>
                    <label className="block text-white text-sm font-semibold mb-2">Display Name</label>
                    <input
                      type="text"
                      value={settings.displayName}
                      onChange={(e) => setSettings({...settings, displayName: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    />
                  </div>
                </div>
              )}

              {activeTab === 'notifications' && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-2">Notification Settings</h2>
                    <p className="text-gray-400">Choose what updates you want to receive</p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                      <div>
                        <div className="text-white font-medium">Email Notifications</div>
                        <div className="text-gray-400 text-sm">Receive notifications via email</div>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={settings.emailNotifications}
                          onChange={(e) => setSettings({...settings, emailNotifications: e.target.checked})}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-700 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-cyan-500 peer-checked:to-purple-500"></div>
                      </label>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                      <div>
                        <div className="text-white font-medium">Article Updates</div>
                        <div className="text-gray-400 text-sm">New articles from followed topics</div>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={settings.articleUpdates}
                          onChange={(e) => setSettings({...settings, articleUpdates: e.target.checked})}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-700 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-cyan-500 peer-checked:to-purple-500"></div>
                      </label>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                      <div>
                        <div className="text-white font-medium">Weekly Digest</div>
                        <div className="text-gray-400 text-sm">Summary of top articles every week</div>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={settings.weeklyDigest}
                          onChange={(e) => setSettings({...settings, weeklyDigest: e.target.checked})}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-700 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-cyan-500 peer-checked:to-purple-500"></div>
                      </label>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'privacy' && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-2">Privacy Settings</h2>
                    <p className="text-gray-400">Control your privacy preferences</p>
                  </div>
                  <div>
                    <label className="block text-white text-sm font-semibold mb-3">Profile Visibility</label>
                    <div className="grid grid-cols-3 gap-3">
                      {['public', 'followers', 'private'].map((visibility) => (
                        <button
                          key={visibility}
                          onClick={() => setSettings({...settings, profileVisibility: visibility})}
                          className={`px-4 py-3 rounded-xl font-semibold capitalize transition-all ${
                            settings.profileVisibility === visibility
                              ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white'
                              : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10'
                          }`}
                        >
                          {visibility}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                      <div>
                        <div className="text-white font-medium">Show Email Address</div>
                        <div className="text-gray-400 text-sm">Display email on profile</div>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={settings.showEmail}
                          onChange={(e) => setSettings({...settings, showEmail: e.target.checked})}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-700 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-cyan-500 peer-checked:to-purple-500"></div>
                      </label>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'appearance' && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-2">Appearance Settings</h2>
                    <p className="text-gray-400">Customize how Engineer X looks</p>
                  </div>
                  <div>
                    <label className="block text-white text-sm font-semibold mb-3">Theme</label>
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { value: 'dark', label: 'Dark' },
                        { value: 'light', label: 'Light' },
                        { value: 'auto', label: 'Auto' }
                      ].map((theme) => (
                        <button
                          key={theme.value}
                          onClick={() => setSettings({...settings, theme: theme.value})}
                          className={`px-4 py-3 rounded-xl font-semibold transition-all ${
                            settings.theme === theme.value
                              ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white'
                              : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10'
                          }`}
                        >
                          {theme.label}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block text-white text-sm font-semibold mb-3">Font Size</label>
                    <div className="grid grid-cols-3 gap-3">
                      {['small', 'medium', 'large'].map((size) => (
                        <button
                          key={size}
                          onClick={() => setSettings({...settings, fontSize: size})}
                          className={`px-4 py-3 rounded-xl font-semibold capitalize transition-all ${
                            settings.fontSize === size
                              ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white'
                              : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10'
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'security' && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-2">Security Settings</h2>
                    <p className="text-gray-400">Keep your account safe</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="text-white font-semibold mb-1">Two-Factor Authentication</div>
                        <p className="text-gray-400 text-sm">Extra layer of security</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={settings.twoFactorAuth}
                          onChange={(e) => setSettings({...settings, twoFactorAuth: e.target.checked})}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-700 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-cyan-500 peer-checked:to-purple-500"></div>
                      </label>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-6">
                    <h3 className="text-white font-semibold mb-4">Active Sessions</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <Smartphone className="w-5 h-5 text-cyan-400" />
                          <div>
                            <div className="text-white text-sm font-medium">Current Device</div>
                            <div className="text-gray-400 text-xs">Active now</div>
                          </div>
                        </div>
                        <span className="text-green-400 text-xs font-semibold">Current</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'data' && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-2">Data & Storage</h2>
                    <p className="text-gray-400">Manage your data</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-white font-semibold mb-1">Download Your Data</h3>
                        <p className="text-gray-400 text-sm">Get a copy of all your data</p>
                      </div>
                      <Download className="w-6 h-6 text-cyan-400" />
                    </div>
                    <button className="w-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/50 text-cyan-400 py-3 rounded-xl font-semibold hover:from-cyan-500/30 hover:to-purple-500/30 transition-all">
                      Request Data Export
                    </button>
                  </div>
                  <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6">
                    <div className="flex items-start space-x-3 mb-4">
                      <Trash2 className="w-6 h-6 text-red-400 mt-1" />
                      <div>
                        <h3 className="text-red-400 font-semibold mb-1">Danger Zone</h3>
                        <p className="text-gray-300 text-sm">Delete your account permanently</p>
                      </div>
                    </div>
                    <button className="w-full bg-red-500/20 border border-red-500/50 text-red-400 py-3 rounded-xl font-semibold hover:bg-red-500/30 transition-all">
                      Delete Account
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;