
import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = "Hi, I'm Manikanta — Software Developer | Backend Engineer | Cloud Enthusiast";
  
  useEffect(() => {
    let currentIndex = 0;
    const timer = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="glass-card p-12 animate-fade-in">
          <div className="mb-8">
            {/* Profile Photo */}
            <div className="flex justify-center mb-8">
              <Avatar className="w-32 h-32 ring-4 ring-primary/20">
                <AvatarImage 
                  src="/placeholder.svg" 
                  alt="Vemuri Bala Venkata Manikanta"
                  className="object-cover"
                />
                <AvatarFallback className="text-2xl font-bold bg-primary/10 text-primary">
                  VM
                </AvatarFallback>
              </Avatar>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold font-poppins mb-6 h-20 flex items-center justify-center">
              <span className="typing-animation min-h-[1.2em]">
                {displayText}
                <span className="animate-blink">|</span>
              </span>
            </h1>
            
            <div className="flex flex-wrap justify-center gap-4 text-gray-600 mb-8">
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Vijayawada, Andhra Pradesh</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>+91-9908513859</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>2200031837cseh@gmail.com</span>
              </div>
            </div>

            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
              Computer Science student at KL University skilled in Java, Python, and software development. 
              Passionate about designing and building innovative software solutions.
            </p>

            <div className="flex justify-center gap-6 mb-8">
              <a
                href="https://github.com/Mani-maker7"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
              >
                <Github size={20} />
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/v-b-v-manikanta"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Linkedin size={20} />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
