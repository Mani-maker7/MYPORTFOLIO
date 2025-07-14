import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = "Hi, I'm Manikanta — Software Developer";

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
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="relative z-10 w-full max-w-6xl bg-white/60 backdrop-blur-lg rounded-xl shadow-lg p-8">
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Profile Picture */}
          <div className="flex-shrink-0">
            <Avatar className="w-40 h-48 ring-4 ring-primary/20">
              <AvatarImage src="/pic.jpeg" alt="Vemuri Bala Venkata Manikanta" className="object-cover" />
            </Avatar>
          </div>

          {/* Text Content */}
          <div className="flex flex-col gap-6 text-left w-full">
            <h1 className="text-3xl md:text-4xl font-bold font-poppins h-16 flex items-center">
              <span className="typing-animation min-h-[1.2em]">
                {displayText}
                <span className="animate-blink">|</span>
              </span>
            </h1>

            <div className="flex flex-wrap gap-4 text-gray-600">
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

            <p className="text-lg text-gray-700">
              Computer Science student at KL University skilled in Java, Python, and software development.
              Passionate about designing and building innovative software solutions.
            </p>

            <div className="flex gap-4">
              <a
                href="https://github.com/Mani-maker7"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gray-900 text-white px-5 py-2 rounded-lg hover:bg-gray-800 transition"
              >
                <Github size={20} />
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/v-b-v-manikanta"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
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
