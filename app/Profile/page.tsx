"use client";

import React, { useState, useEffect } from 'react';
import { 
  Github, Linkedin, Twitter, Mail, Award, Briefcase, BookOpen, MapPin,
  Code, Globe, Timer, Coffee, Star, Heart, Download, ExternalLink
} from 'lucide-react';
import { profile } from '@/public/images/images';
import Image from 'next/image';

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState('about');
  const [isScrolled, setIsScrolled] = useState(false);
  const [showTooltip, setShowTooltip] = useState('');

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const stats = [
    { label: 'Projects', value: '50+', icon: <Code size={20} /> },
    { label: 'Clients', value: '30+', icon: <Globe size={20} /> },
    { label: 'Experience', value: '5 Years', icon: <Timer size={20} /> },
    { label: 'Coffee/day', value: '4 cups', icon: <Coffee size={20} /> }
  ];

  const skills = [
    { name: 'Cloud Computing', level: 90, color: 'from-purple-500 to-blue-500' },
    { name: 'Software Development', level: 85, color: 'from-green-500 to-teal-500' },
    { name: 'Machine Learning', level: 75, color: 'from-red-500 to-orange-500' },
    { name: 'React & Next.js', level: 95, color: 'from-blue-500 to-cyan-500' }
  ];

  const projects = [
    {
      title: 'Cloud Management System',
      description: 'Enterprise-level cloud resource management platform',
      tags: ['AWS', 'React', 'Node.js'],
      stars: 128
    },
    {
      title: 'AI Content Generator',
      description: 'ML-powered content generation tool',
      tags: ['Python', 'TensorFlow', 'Flask'],
      stars: 256
    },
    {
      title: 'E-commerce Platform',
      description: 'Full-stack e-commerce solution',
      tags: ['Next.js', 'MongoDB', 'Stripe'],
      stars: 184
    }
  ];

  const experiences = [
    {
      role: 'Senior Software Engineer',
      company: 'Tech Corp',
      period: '2022 - Present',
      description: 'Leading cloud infrastructure development'
    },
    {
      role: 'Cloud Engineer',
      company: 'Cloud Solutions Inc',
      period: '2020 - 2022',
      description: 'Implemented serverless architectures'
    },
    {
      role: 'Software Developer',
      company: 'StartUp Hub',
      period: '2018 - 2020',
      description: 'Full-stack development of web applications'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Floating Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-900/80 backdrop-blur-lg shadow-lg' : ''
      }`}>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
            CM
          </span>
          <div className="flex gap-4">
            <button 
              className="px-4 py-2 bg-purple-500 hover:bg-purple-600 rounded-lg flex items-center gap-2 transition-colors"
              onMouseEnter={() => setShowTooltip('download')}
              onMouseLeave={() => setShowTooltip('')}
            >
              <Download size={16} /> Resume
              {showTooltip === 'download' && (
                <div className="absolute mt-8 px-2 py-1 bg-black text-xs rounded">
                  Download CV
                </div>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-24 pb-16">
        <div className="relative">
          {/* Profile Header */}
          <div className="flex flex-col items-center">
            <div className="relative group">
              <div className="w-48 h-48 rounded-full border-4 border-purple-500 overflow-hidden relative 
                           transform transition-transform group-hover:scale-105">
                <Image
                  alt="Profile"
                  src={profile}
                  className="w-full h-full object-cover transition-transform group-hover:scale-110"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-purple-500 p-2 rounded-full animate-bounce">
                <Award size={24} />
              </div>
            </div>
            
            <h1 className="text-5xl font-bold mt-6 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 
                         text-transparent bg-clip-text animate-gradient">
              Collins Munene
            </h1>
            <p className="text-xl text-gray-300 mt-2 flex items-center gap-2">
              <MapPin size={18} className="text-purple-400" /> Meru County, Kenya
            </p>

            {/* Social Links with Hover Effects */}
            <div className="flex gap-4 mt-4">
              {[
                { Icon: Github, href: '#', label: 'GitHub' },
                { Icon: Linkedin, href: '#', label: 'LinkedIn' },
                { Icon: Twitter, href: '#', label: 'Twitter' },
                { Icon: Mail, href: '#', label: 'Email' }
              ].map(({ Icon, href, label }, index) => (
                <a
                  key={index}
                  href={href}
                  className="group relative bg-gray-800 p-2 rounded-full hover:bg-purple-500 transition-all
                           hover:scale-110 transform"
                  onMouseEnter={() => setShowTooltip(label)}
                  onMouseLeave={() => setShowTooltip('')}
                >
                  <Icon size={20} />
                  {showTooltip === label && (
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 
                                 bg-black px-2 py-1 text-xs rounded whitespace-nowrap">
                      {label}
                    </div>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Animated Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl text-center 
                         transform hover:scale-105 transition-all hover:bg-purple-900/50
                         cursor-pointer group"
              >
                <div className="flex justify-center mb-2 text-purple-400 group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r 
                            from-purple-400 to-pink-500">{stat.value}</h3>
                <p className="text-gray-400 mt-2 group-hover:text-purple-300 transition-colors">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Navigation Tabs */}
          <div className="flex justify-center mt-12 border-b border-gray-800 overflow-x-auto">
            {['about', 'experience', 'skills', 'projects', 'contact'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 text-lg capitalize transition-all ${
                  activeTab === tab
                    ? 'text-purple-400 border-b-2 border-purple-400 font-bold'
                    : 'text-gray-400 hover:text-white hover:bg-purple-900/20'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Content Sections */}
          <div className="mt-8">
            {activeTab === 'about' && (
              <div className="space-y-6 text-gray-300 animate-fadeIn">
                <p className="text-lg leading-relaxed">
                  A passionate software and cloud engineer with expertise in building scalable solutions.
                  Dedicated to creating innovative applications that solve real-world problems.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-800/30 p-6 rounded-xl hover:bg-purple-900/30 transition-colors">
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-purple-400">
                      <Briefcase size={20} /> Current Focus
                    </h3>
                    <p>Cloud-native applications and AI integration in web solutions.</p>
                  </div>
                  <div className="bg-gray-800/30 p-6 rounded-xl hover:bg-purple-900/30 transition-colors">
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-purple-400">
                      <BookOpen size={20} /> Learning
                    </h3>
                    <p>Advanced machine learning techniques and cloud architecture patterns.</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'skills' && (
              <div className="space-y-6 animate-fadeIn">
                {skills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-purple-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full 
                                transform origin-left animate-expand`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'projects' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fadeIn">
                {projects.map((project, index) => (
                  <div key={index} 
                       className="bg-gray-800/30 p-6 rounded-xl hover:bg-purple-900/30 transition-all
                                transform hover:scale-105 group">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-semibold text-purple-400">{project.title}</h3>
                      <div className="flex items-center gap-1 text-yellow-500">
                        <Star size={16} />
                        <span>{project.stars}</span>
                      </div>
                    </div>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="px-2 py-1 bg-purple-900/50 rounded-full text-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <button className="mt-4 text-purple-400 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      View Project <ExternalLink size={16} />
                    </button>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'experience' && (
              <div className="space-y-8 animate-fadeIn">
                {experiences.map((exp, index) => (
                  <div key={index} className="relative pl-8 before:content-[''] before:absolute before:left-0 
                                          before:top-0 before:bottom-0 before:w-px before:bg-purple-500">
                    <div className="absolute left-0 top-0 w-2 h-2 bg-purple-500 rounded-full 
                                transform -translate-x-1/2"></div>
                    <div className="bg-gray-800/30 p-6 rounded-xl hover:bg-purple-900/30 transition-colors">
                      <h3 className="text-xl font-semibold text-purple-400">{exp.role}</h3>
                      <p className="text-gray-400 mb-2">{exp.company} | {exp.period}</p>
                      <p className="text-gray-300">{exp.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

{activeTab === 'contact' && (
              <div className="max-w-2xl mx-auto space-y-6 animate-fadeIn">
                <div className="bg-gray-800/30 p-8 rounded-xl">
                  <h3 className="text-2xl font-semibold mb-6 text-purple-400">Get in Touch</h3>
                  <form className="space-y-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full p-3 bg-gray-900/50 rounded-lg focus:ring-2 focus:ring-purple-500 
                               outline-none transition-shadow"
                    />
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full p-3 bg-gray-900/50 rounded-lg focus:ring-2 focus:ring-purple-500 
                               outline-none transition-shadow"
                    />
                    <textarea
                      placeholder="Your Message"
                      rows={4}
                      className="w-full p-3 bg-gray-900/50 rounded-lg focus:ring-2 focus:ring-purple-500 
                               outline-none transition-shadow"
                    />
                    <button className="w-full py-3 bg-purple-500 hover:bg-purple-600 rounded-lg 
                                   transition-colors flex items-center justify-center gap-2">
                      <Mail size={16} />
                      Send Message
                    </button>
                  </form>
                </div>

                {/* Quick Contact Options */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                  <div className="bg-gray-800/30 p-6 rounded-xl hover:bg-purple-900/30 transition-colors">
                    <h4 className="text-lg font-semibold text-purple-400 mb-2">Email Direct</h4>
                    <a href="mailto:contact@example.com" className="text-gray-300 hover:text-purple-400 transition-colors">
                      contact@example.com
                    </a>
                  </div>
                  <div className="bg-gray-800/30 p-6 rounded-xl hover:bg-purple-900/30 transition-colors">
                    <h4 className="text-lg font-semibold text-purple-400 mb-2">Location</h4>
                    <p className="text-gray-300">Meru County, Kenya</p>
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* Footer */}
      <footer className="bg-gray-900/50 backdrop-blur-sm mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Heart size={20} className="text-purple-500" />
              <span className="text-gray-400">Built with passion</span>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              {['Home', 'About', 'Projects', 'Contact'].map((item, index) => (
                <a
                  key={index}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>

            <p className="text-gray-400 mt-4 md:mt-0">
              © {new Date().getFullYear()} Collins Munene
            </p>
          </div>
        </div>
      </footer>

        </div>
      </div>
          </div>

  );
}

export default ProfilePage;

