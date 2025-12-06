import React, { useState } from 'react';
import  { useNavigate } from 'react-router-dom';
import { CheckCircle, Edit, ArrowRight, User, Briefcase, Mail, MapPin, Github, Linkedin, Twitter, Sparkles, Target } from 'lucide-react';

const ProfileCreatedCard = () => {
  const [profileData] = useState({
    fullName: 'John Developer',
    username: 'johndeveloper',
    email: 'john.dev@example.com',
    bio: 'Passionate software engineer specializing in cloud architecture and distributed systems. Love building scalable solutions.',
    role: 'Full Stack Developer',
    experience: 'Intermediate',
    location: 'San Francisco, CA',
    company: 'Tech Innovations Inc.',
    interests: ['AI/ML', 'Cloud Computing', 'DevOps', 'Web Development'],
    goals: ['Learn new technologies', 'Build portfolio projects', 'Advance my career'],
    github: 'github.com/johndeveloper',
    linkedin: 'linkedin.com/in/johndeveloper',
    twitter: 'twitter.com/johndev'
  });

  const navigate = useNavigate();

  const handleProceed = () => {
    navigate('/dashboard');
  };

  const handleEdit = () => {
    console.log('Going back to edit profile...');
  };

  

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-cyan-500/50 rounded-3xl max-w-3xl w-full shadow-2xl overflow-hidden">
        {/* Animated Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-cyan-500/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-purple-500/20 rounded-full blur-3xl"></div>
        </div>

        {/* Decorative Top Border */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500"></div>

        {/* Content */}
        <div className="relative z-10 p-8">
          {/* Success Header */}
          <div className="text-center mb-8">
            <div className="relative inline-flex items-center justify-center mb-4">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full blur-xl opacity-60"></div>
              <div className="relative bg-gradient-to-r from-cyan-500 to-purple-500 p-3 rounded-full shadow-lg shadow-purple-500/50">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <Sparkles className="absolute -top-1 -right-1 w-5 h-5 text-yellow-400" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-2">
              Profile Created Successfully! 🎉
            </h2>
            <p className="text-gray-300">
              Review your information before continuing
            </p>
          </div>

          {/* Profile Preview */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 mb-6 max-h-96 overflow-y-auto custom-scrollbar">
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
            {/* Profile Header */}
            <div className="flex items-start space-x-4 mb-6 pb-6 border-b border-white/10">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                {profileData.fullName.split(' ').map(n => n[0]).join('')}
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-1">{profileData.fullName}</h3>
                <p className="text-cyan-400 mb-2">@{profileData.username}</p>
                <p className="text-gray-300 text-sm">{profileData.bio}</p>
              </div>
            </div>

            {/* Basic Info */}
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="flex items-start space-x-3">
                <div className="bg-cyan-500/20 p-2 rounded-lg">
                  <Mail className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <div className="text-gray-400 text-xs font-semibold">Email</div>
                  <div className="text-white text-sm">{profileData.email}</div>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="bg-purple-500/20 p-2 rounded-lg">
                  <Briefcase className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <div className="text-gray-400 text-xs font-semibold">Role</div>
                  <div className="text-white text-sm">{profileData.role}</div>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="bg-pink-500/20 p-2 rounded-lg">
                  <MapPin className="w-5 h-5 text-pink-400" />
                </div>
                <div>
                  <div className="text-gray-400 text-xs font-semibold">Location</div>
                  <div className="text-white text-sm">{profileData.location}</div>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="bg-cyan-500/20 p-2 rounded-lg">
                  <User className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <div className="text-gray-400 text-xs font-semibold">Experience</div>
                  <div className="text-white text-sm">{profileData.experience}</div>
                </div>
              </div>
            </div>

            {/* Interests */}
            <div className="mb-6">
              <div className="flex items-center space-x-2 mb-3">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <h4 className="text-white font-semibold">Interests</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {profileData.interests.map((interest, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/50 text-cyan-400 rounded-full text-xs font-semibold"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            {/* Goals */}
            <div className="mb-6">
              <div className="flex items-center space-x-2 mb-3">
                <Target className="w-4 h-4 text-purple-400" />
                <h4 className="text-white font-semibold">Goals</h4>
              </div>
              <div className="space-y-2">
                {profileData.goals.map((goal, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"></div>
                    <span className="text-gray-300 text-sm">{goal}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-white font-semibold mb-3">Social Profiles</h4>
              <div className="space-y-2">
                {profileData.github && (
                  <div className="flex items-center space-x-3 p-2 bg-white/5 rounded-lg">
                    <Github className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-300 text-sm">{profileData.github}</span>
                  </div>
                )}
                {profileData.linkedin && (
                  <div className="flex items-center space-x-3 p-2 bg-white/5 rounded-lg">
                    <Linkedin className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-300 text-sm">{profileData.linkedin}</span>
                  </div>
                )}
                {profileData.twitter && (
                  <div className="flex items-center space-x-3 p-2 bg-white/5 rounded-lg">
                    <Twitter className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-300 text-sm">{profileData.twitter}</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={handleEdit}
              className="flex-1 flex items-center justify-center space-x-2 bg-white/10 border border-white/20 text-white py-4 rounded-xl font-semibold hover:bg-white/20 transition-all"
            >
              <Edit className="w-5 h-5" />
              <span>Edit Profile</span>
            </button>
            <button 
              onClick={handleProceed}
              className="flex-1 flex items-center justify-center space-x-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white py-4 rounded-xl font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all hover:scale-105 transform"
            >
              <span>Continue to Dashboard</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Info Text */}
          <p className="text-center text-gray-500 text-xs mt-4">
            You can always edit your profile later in settings
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCreatedCard;