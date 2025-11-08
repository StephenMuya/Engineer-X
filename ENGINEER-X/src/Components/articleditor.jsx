import React, { useState } from 'react';
import { ArrowLeft, Save, Eye, Upload, Image, Code, Bold, Italic, Underline, List, ListOrdered, Link, Quote, Heading1, Heading2, AlignLeft, AlignCenter, AlignRight, Cpu, X, Check } from 'lucide-react';

const ArticleEditor = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [coverImage, setCoverImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [tags, setTags] = useState([]);
  const [currentTag, setCurrentTag] = useState('');
  const [showPreview, setShowPreview] = useState(false);
  const [showPublishModal, setShowPublishModal] = useState(false);

  const categories = [
    'AI/ML',
    'Web Development',
    'DevOps',
    'Cloud',
    'Security',
    'Emerging Tech',
    'Tutorials',
    'Career'
  ];

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCoverImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const addTag = () => {
    if (currentTag.trim() && !tags.includes(currentTag.trim())) {
      setTags([...tags, currentTag.trim()]);
      setCurrentTag('');
    }
  };

  const removeTag = (tagToRemove) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addTag();
    }
  };

  const insertFormatting = (format) => {
    const textarea = document.getElementById('content-textarea');
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = content.substring(start, end);
    let formattedText = '';

    switch(format) {
      case 'bold':
        formattedText = `**${selectedText}**`;
        break;
      case 'italic':
        formattedText = `*${selectedText}*`;
        break;
      case 'heading1':
        formattedText = `# ${selectedText}`;
        break;
      case 'heading2':
        formattedText = `## ${selectedText}`;
        break;
      case 'code':
        formattedText = `\`${selectedText}\``;
        break;
      case 'quote':
        formattedText = `> ${selectedText}`;
        break;
      case 'link':
        formattedText = `[${selectedText}](url)`;
        break;
      case 'unordered':
        formattedText = `- ${selectedText}`;
        break;
      case 'ordered':
        formattedText = `1. ${selectedText}`;
        break;
      default:
        formattedText = selectedText;
    }

    const newContent = content.substring(0, start) + formattedText + content.substring(end);
    setContent(newContent);
  };

  const handlePublish = () => {
    setShowPublishModal(true);
  };

  const confirmPublish = () => {
    console.log('Publishing article:', { title, content, selectedCategory, tags, coverImage });
    setShowPublishModal(false);
    // Here you would handle the actual publishing logic
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-lg border-b border-white/10 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo and Back Button */}
            <div className="flex items-center space-x-4">
              <button className="text-white hover:text-cyan-400 transition-colors flex items-center space-x-2">
                <ArrowLeft className="w-5 h-5" />
                <span className="hidden sm:inline">Back to Dashboard</span>
              </button>
              <div className="hidden md:flex items-center space-x-2">
                <div className="bg-gradient-to-r from-cyan-500 to-purple-500 p-2 rounded-lg">
                  <Cpu className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg font-bold text-white">
                  Engineer<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">X</span>
                </span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-3">
              <button 
                onClick={() => setShowPreview(!showPreview)}
                className="flex items-center space-x-2 text-white hover:text-cyan-400 px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
              >
                <Eye className="w-4 h-4" />
                <span className="hidden sm:inline">{showPreview ? 'Edit' : 'Preview'}</span>
              </button>
              <button className="flex items-center space-x-2 text-white px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                <Save className="w-4 h-4" />
                <span className="hidden sm:inline">Save Draft</span>
              </button>
              <button 
                onClick={handlePublish}
                className="flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-2 rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all hover:scale-105 font-semibold"
              >
                <Upload className="w-4 h-4" />
                <span>Publish</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Editor */}
      <main className="pt-20 pb-10 px-4">
        <div className="max-w-5xl mx-auto">
          {!showPreview ? (
            <div className="space-y-6">
              {/* Cover Image Upload */}
              <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6">
                <label className="block text-white font-semibold mb-3">Cover Image</label>
                {coverImage ? (
                  <div className="relative">
                    <img src={coverImage} alt="Cover" className="w-full h-64 object-cover rounded-xl" />
                    <button 
                      onClick={() => setCoverImage(null)}
                      className="absolute top-3 right-3 bg-red-500 text-white p-2 rounded-lg hover:bg-red-600 transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed border-white/20 rounded-xl cursor-pointer hover:border-cyan-500/50 transition-colors bg-white/5">
                    <Image className="w-12 h-12 text-gray-400 mb-3" />
                    <span className="text-gray-300 mb-2">Click to upload cover image</span>
                    <span className="text-gray-500 text-sm">PNG, JPG up to 10MB</span>
                    <input type="file" className="hidden" onChange={handleImageUpload} accept="image/*" />
                  </label>
                )}
              </div>

              {/* Title Input */}
              <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6">
                <input
                  type="text"
                  placeholder="Article Title..."
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full text-3xl md:text-4xl font-bold bg-transparent text-white placeholder-gray-500 focus:outline-none"
                />
              </div>

              {/* Category and Tags */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Category Selection */}
                <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6">
                  <label className="block text-white font-semibold mb-3">Category</label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  >
                    <option value="" className="bg-slate-800">Select a category</option>
                    {categories.map((category) => (
                      <option key={category} value={category} className="bg-slate-800">{category}</option>
                    ))}
                  </select>
                </div>

                {/* Tags */}
                <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6">
                  <label className="block text-white font-semibold mb-3">Tags</label>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {tags.map((tag) => (
                      <span key={tag} className="flex items-center space-x-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/50 text-white px-3 py-1 rounded-full text-sm">
                        <span>{tag}</span>
                        <button onClick={() => removeTag(tag)} className="hover:text-red-400">
                          <X className="w-3 h-3" />
                        </button>
                      </span>
                    ))}
                  </div>
                  <input
                    type="text"
                    placeholder="Add tags (press Enter)"
                    value={currentTag}
                    onChange={(e) => setCurrentTag(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="w-full px-4 py-2 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                </div>
              </div>

              {/* Formatting Toolbar */}
              <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-4">
                <div className="flex flex-wrap gap-2">
                  <button 
                    onClick={() => insertFormatting('bold')}
                    className="p-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                    title="Bold"
                  >
                    <Bold className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={() => insertFormatting('italic')}
                    className="p-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                    title="Italic"
                  >
                    <Italic className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={() => insertFormatting('heading1')}
                    className="p-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                    title="Heading 1"
                  >
                    <Heading1 className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={() => insertFormatting('heading2')}
                    className="p-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                    title="Heading 2"
                  >
                    <Heading2 className="w-5 h-5" />
                  </button>
                  <div className="w-px bg-white/20 mx-1"></div>
                  <button 
                    onClick={() => insertFormatting('unordered')}
                    className="p-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                    title="Bullet List"
                  >
                    <List className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={() => insertFormatting('ordered')}
                    className="p-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                    title="Numbered List"
                  >
                    <ListOrdered className="w-5 h-5" />
                  </button>
                  <div className="w-px bg-white/20 mx-1"></div>
                  <button 
                    onClick={() => insertFormatting('link')}
                    className="p-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                    title="Insert Link"
                  >
                    <Link className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={() => insertFormatting('code')}
                    className="p-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                    title="Code"
                  >
                    <Code className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={() => insertFormatting('quote')}
                    className="p-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                    title="Quote"
                  >
                    <Quote className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Content Editor */}
              <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6">
                <label className="block text-white font-semibold mb-3">Content</label>
                <textarea
                  id="content-textarea"
                  placeholder="Write your article content here... (Markdown supported)"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="w-full h-96 bg-white/10 border border-white/20 rounded-xl p-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 resize-none font-mono"
                />
                <p className="text-gray-400 text-sm mt-2">
                  {content.split(' ').filter(word => word.length > 0).length} words • {content.length} characters
                </p>
              </div>
            </div>
          ) : (
            /* Preview Mode */
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8">
              <div className="max-w-3xl mx-auto">
                {coverImage && (
                  <img src={coverImage} alt="Cover" className="w-full h-96 object-cover rounded-xl mb-6" />
                )}
                <div className="flex items-center space-x-2 mb-4">
                  {selectedCategory && (
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      {selectedCategory}
                    </span>
                  )}
                  {tags.map((tag) => (
                    <span key={tag} className="bg-white/10 text-gray-300 px-3 py-1 rounded-full text-sm">
                      #{tag}
                    </span>
                  ))}
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{title || 'Untitled Article'}</h1>
                <div className="prose prose-invert max-w-none">
                  <pre className="whitespace-pre-wrap text-gray-300 leading-relaxed">{content || 'No content yet...'}</pre>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Publish Modal */}
      {showPublishModal && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-800 border border-white/20 rounded-2xl p-8 max-w-md w-full">
            <div className="flex justify-center mb-4">
              <div className="bg-gradient-to-r from-cyan-500 to-purple-500 p-4 rounded-full">
                <Check className="w-8 h-8 text-white" />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-white text-center mb-2">Ready to Publish?</h2>
            <p className="text-gray-300 text-center mb-6">
              Your article will be visible to all Engineer X readers once published.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Title:</span>
                <span className="text-white font-semibold">{title || 'Untitled'}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Category:</span>
                <span className="text-white font-semibold">{selectedCategory || 'None'}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Tags:</span>
                <span className="text-white font-semibold">{tags.length} tags</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Word count:</span>
                <span className="text-white font-semibold">{content.split(' ').filter(w => w.length > 0).length} words</span>
              </div>
            </div>
            <div className="flex space-x-3">
              <button 
                onClick={() => setShowPublishModal(false)}
                className="flex-1 px-6 py-3 bg-white/10 border border-white/20 text-white rounded-lg hover:bg-white/20 transition-all font-semibold"
              >
                Cancel
              </button>
              <button 
                onClick={confirmPublish}
                className="flex-1 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all font-semibold"
              >
                Publish Now
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ArticleEditor;