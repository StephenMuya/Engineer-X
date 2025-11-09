import React, { useState } from 'react';
import { Cpu, User, Briefcase, Target, Sparkles, CheckCircle, Upload, Github, Linkedin, Twitter, Mail, ArrowRight, ArrowLeft } from 'lucide-react';

const UserProfile = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [profileData, setProfileData] = useState({
    fullName: '',
    username: '',
    bio: '',
    role: '',
    experience: '',
    interests: [],
    goals: [],
    profileImage: null,
    github: '',
    linkedin: '',
    twitter: '',
    website: ''
  });

  const totalSteps = 4;

  const roles = [
    'Frontend Developer',
    'Backend Developer',
    'Full Stack Developer',
    'DevOps Engineer',
    'Data Scientist',
    'ML Engineer',
    'Mobile Developer',
    'Cloud Architect',
    'Security Engineer',
    'Student',
    'Other'
  ];

  const experienceLevels = [
    { value: 'beginner', label: 'Beginner', desc: '0-2 years' },
    { value: 'intermediate', label: 'Intermediate', desc: '2-5 years' },
    { value: 'advanced', label: 'Advanced', desc: '5-10 years' },
    { value: 'expert', label: 'Expert', desc: '10+ years' }
  ];

  const interestOptions = [
    'AI/ML',
    'Web Development',
    'Mobile Development',
    'DevOps',
    'Cloud Computing',
    'Cybersecurity',
    'Blockchain',
    'Data Science',
    'IoT',
    'Game Development',
    'UI/UX Design',
    'System Design'
  ];

  const goalOptions = [
    'Learn new technologies',
    'Build portfolio projects',
    'Advance my career',
    'Stay updated with trends',
    'Network with peers',
    'Contribute to open source',
    'Start a side project',
    'Prepare for interviews'
  ];

  const toggleInterest = (interest) => {
    setProfileData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const toggleGoal = (goal) => {
    setProfileData(prev => ({
      ...prev,
      goals: prev.goals.includes(goal)
        ? prev.goals.filter(g => g !== goal)
        : [...prev.goals, goal]
    }));
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleComplete = () => {
    console.log('Profile Setup Complete:', profileData);
    // Navigate to dashboard
  };

  const StepIndicator = () => (
    <div className="flex items-center justify-center space-x-4 mb-12">
      {[1, 2, 3, 4].map((step) => (
        <div key={step} className="flex items-center">
          <div className={`flex items-center justify-center w-12 h-12 rounded-full font-bold transition-all ${
            step < currentStep 
              ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white' 
              : step === currentStep 
              ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg shadow-purple-500/50' 
              : 'bg-white/5 border border-white/20 text-gray-400'
          }`}>
            {step < currentStep ? <CheckCircle className="w-6 h-6" /> : step}
          </div>
          {step < 4 && (
            <div className={`w-16 h-1 mx-2 rounded ${
              step < currentStep ? 'bg-gradient-to-r from-cyan-500 to-purple-500' : 'bg-white/10'
            }`} />
          )}
        </div>
      ))}
    </div>
  );

  const Step1BasicInfo = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mb-4">
          <User className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-3xl font-bold text-white mb-2">Basic Information</h2>
        <p className="text-gray-400">Let's start with the basics about you</p>
      </div>

      <div className="space-y-6">
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="w-32 h-32 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 p-1">
              <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center">
                {profileData.profileImage ? (
                  <img src={profileData.profileImage} alt="Profile" className="w-full h-full rounded-full object-cover" />
                ) : (
                  <User className="w-16 h-16 text-gray-400" />
                )}
              </div>
            </div>
            <button className="absolute bottom-0 right-0 bg-gradient-to-r from-cyan-500 to-purple-500 p-3 rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition-all">
              <Upload className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

        <div>
          <label className="block text-white text-sm font-semibold mb-2">Full Name *</label>
          <input
            type="text"
            placeholder="John Doe"
            value={profileData.fullName}
            onChange={(e) => setProfileData({...profileData, fullName: e.target.value})}
            className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
        </div>

        <div>
          <label className="block text-white text-sm font-semibold mb-2">Username *</label>
          <input
            type="text"
            placeholder="johndoe"
            value={profileData.username}
            onChange={(e) => setProfileData({...profileData, username: e.target.value})}
            className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
          <p className="text-gray-400 text-xs mt-1">This will be your unique identifier on Engineer X</p>
        </div>

        <div>
          <label className="block text-white text-sm font-semibold mb-2">Bio</label>
          <textarea
            rows="4"
            placeholder="Tell us about yourself, your passion for technology..."
            value={profileData.bio}
            onChange={(e) => setProfileData({...profileData, bio: e.target.value})}
            className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
          <p className="text-gray-400 text-xs mt-1">{profileData.bio.length}/500 characters</p>
        </div>
      </div>
    </div>
  );

  const Step2Professional = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mb-4">
          <Briefcase className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-3xl font-bold text-white mb-2">Professional Background</h2>
        <p className="text-gray-400">Help us understand your professional journey</p>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-white text-sm font-semibold mb-3">Current Role *</label>
          <div className="grid grid-cols-2 gap-3">
            {roles.map((role) => (
              <button
                key={role}
                onClick={() => setProfileData({...profileData, role})}
                className={`px-4 py-3 rounded-xl font-semibold transition-all ${
                  profileData.role === role
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg'
                    : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10'
                }`}
              >
                {role}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-white text-sm font-semibold mb-3">Experience Level *</label>
          <div className="grid grid-cols-2 gap-4">
            {experienceLevels.map((level) => (
              <button
                key={level.value}
                onClick={() => setProfileData({...profileData, experience: level.value})}
                className={`p-4 rounded-xl transition-all text-left ${
                  profileData.experience === level.value
                    ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border-2 border-cyan-500'
                    : 'bg-white/5 border border-white/10 hover:bg-white/10'
                }`}
              >
                <div className={`font-bold mb-1 ${
                  profileData.experience === level.value ? 'text-cyan-400' : 'text-white'
                }`}>
                  {level.label}
                </div>
                <div className="text-gray-400 text-sm">{level.desc}</div>
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-white text-sm font-semibold mb-2">Company/Organization</label>
          <input
            type="text"
            placeholder="e.g., Google, Freelance, Self-employed"
            className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
        </div>

        <div>
          <label className="block text-white text-sm font-semibold mb-2">Location</label>
          <input
            type="text"
            placeholder="e.g., San Francisco, CA or Remote"
            className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
        </div>
      </div>
    </div>
  );

  const Step3Interests = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mb-4">
          <Sparkles className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-3xl font-bold text-white mb-2">Your Interests</h2>
        <p className="text-gray-400">Select topics you're interested in (choose at least 3)</p>
      </div>

      <div>
        <label className="block text-white text-sm font-semibold mb-4">
          Topics ({profileData.interests.length} selected)
        </label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {interestOptions.map((interest) => (
            <button
              key={interest}
              onClick={() => toggleInterest(interest)}
              className={`px-4 py-3 rounded-xl font-semibold transition-all ${
                profileData.interests.includes(interest)
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10'
              }`}
            >
              {interest}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-xl p-4">
        <p className="text-cyan-400 text-sm">
          💡 <strong>Tip:</strong> Your interests help us recommend relevant articles and connect you with like-minded engineers.
        </p>
      </div>
    </div>
  );

  const Step4Goals = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mb-4">
          <Target className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-3xl font-bold text-white mb-2">Learning Goals & Social</h2>
        <p className="text-gray-400">What do you want to achieve with Engineer X?</p>
      </div>

      <div>
        <label className="block text-white text-sm font-semibold mb-4">
          Your Goals (select all that apply)
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {goalOptions.map((goal) => (
            <button
              key={goal}
              onClick={() => toggleGoal(goal)}
              className={`px-4 py-3 rounded-xl font-semibold transition-all text-left ${
                profileData.goals.includes(goal)
                  ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border-2 border-cyan-500 text-cyan-400'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10'
              }`}
            >
              {goal}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-white text-sm font-semibold mb-4">
          Connect Your Social Profiles (Optional)
        </label>
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <div className="bg-white/5 p-3 rounded-xl">
              <Github className="w-5 h-5 text-gray-300" />
            </div>
            <input
              type="text"
              placeholder="github.com/username"
              value={profileData.github}
              onChange={(e) => setProfileData({...profileData, github: e.target.value})}
              className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>
          <div className="flex items-center space-x-3">
            <div className="bg-white/5 p-3 rounded-xl">
              <Linkedin className="w-5 h-5 text-gray-300" />
            </div>
            <input
              type="text"
              placeholder="linkedin.com/in/username"
              value={profileData.linkedin}
              onChange={(e) => setProfileData({...profileData, linkedin: e.target.value})}
              className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>
          <div className="flex items-center space-x-3">
            <div className="bg-white/5 p-3 rounded-xl">
              <Twitter className="w-5 h-5 text-gray-300" />
            </div>
            <input
              type="text"
              placeholder="twitter.com/username"
              value={profileData.twitter}
              onChange={(e) => setProfileData({...profileData, twitter: e.target.value})}
              className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>
          <div className="flex items-center space-x-3">
            <div className="bg-white/5 p-3 rounded-xl">
              <Mail className="w-5 h-5 text-gray-300" />
            </div>
            <input
              type="text"
              placeholder="yourwebsite.com"
              value={profileData.website}
              onChange={(e) => setProfileData({...profileData, website: e.target.value})}
              className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat opacity-10"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80')" }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-12">
        <div className="max-w-3xl w-full">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <div className="bg-gradient-to-r from-cyan-500 to-purple-500 p-3 rounded-lg shadow-lg shadow-purple-500/50">
                <Cpu className="w-8 h-8 text-white" />
              </div>
              <span className="text-3xl font-bold text-white">
                Engineer<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">X</span>
              </span>
            </div>
            <h1 className="text-4xl font-bold text-white mb-2">Complete Your Profile</h1>
            <p className="text-gray-300">Step {currentStep} of {totalSteps}</p>
          </div>

          {/* Step Indicator */}
          <StepIndicator />

          {/* Form Card */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">
            {currentStep === 1 && <Step1BasicInfo />}
            {currentStep === 2 && <Step2Professional />}
            {currentStep === 3 && <Step3Interests />}
            {currentStep === 4 && <Step4Goals />}

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/10">
              {currentStep > 1 ? (
                <button
                  onClick={handleBack}
                  className="flex items-center space-x-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all"
                >
                  <ArrowLeft className="w-5 h-5" />
                  <span>Back</span>
                </button>
              ) : (
                <div></div>
              )}

              {currentStep < totalSteps ? (
                <button
                  onClick={handleNext}
                  className="flex items-center space-x-2 px-8 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all hover:scale-105"
                >
                  <span>Continue</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              ) : (
                <button
                  onClick={handleComplete}
                  className="flex items-center space-x-2 px-8 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all hover:scale-105"
                >
                  <span>Complete Setup</span>
                  <CheckCircle className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* Skip Option */}
            {currentStep < totalSteps && (
              <div className="text-center mt-4">
                <button className="text-gray-400 hover:text-white text-sm transition-colors">
                  Skip for now
                </button>
              </div>
            )}
          </div>

          {/* Progress Text */}
          <div className="text-center mt-6">
            <p className="text-gray-400 text-sm">
              Your information is secure and will only be used to personalize your experience
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;