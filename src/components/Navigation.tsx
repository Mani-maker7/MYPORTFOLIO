
import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const handleResumeDownload = () => {
    // Replace with actual resume URL
    const resumeUrl = 'https://drive.google.com/file/d/1VfNtuTG00whT0J9g03HxDXC3DzSEYXYj/view?usp=sharing'; // Add actual resume link here
    console.log('Downloading resume...');
    window.open(resumeUrl, '_blank');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card m-4 mx-auto max-w-7xl">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="font-poppins font-bold text-xl text-primary">
          Manikanta
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`font-medium transition-colors hover:text-primary ${
                activeSection === item.id ? 'text-primary' : 'text-gray-700'
              }`}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={handleResumeDownload}
            className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
          >
            <Download size={16} />
            Resume
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 border-t border-white/20">
          <div className="flex flex-col space-y-3 pt-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-left font-medium transition-colors hover:text-primary ${
                  activeSection === item.id ? 'text-primary' : 'text-gray-700'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={handleResumeDownload}
              className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors w-fit"
            >
              <Download size={16} />
              Resume
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
