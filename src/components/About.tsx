
import React from 'react';
import { Code2, Database, Cloud, Lightbulb } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code2 className="w-8 h-8 text-primary" />,
      title: "Software Development",
      description: "Experienced in building full-stack applications with modern technologies"
    },
    {
      icon: <Database className="w-8 h-8 text-primary" />,
      title: "Backend Engineering",
      description: "Specialized in creating robust APIs and database management systems"
    },
    {
      icon: <Cloud className="w-8 h-8 text-primary" />,
      title: "Cloud Computing",
      description: "Passionate about cloud technologies and scalable infrastructure"
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-primary" />,
      title: "Problem Solver",
      description: "Strong analytical skills with a passion for innovative solutions"
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-blue-50/30"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-poppins mb-4 animate-fade-in">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="glass-card p-8 animate-slide-in-left">
            <h3 className="text-2xl font-semibold mb-6 font-poppins">My Journey</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              I'm a Computer Science student at KL University with a passion for software development 
              and backend engineering. My journey in technology started with curiosity about how 
              software systems work, and has evolved into a deep love for creating innovative solutions.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              I have hands-on experience with multiple programming languages including Java, Python, 
              JavaScript, and C. My expertise spans across full-stack development, database management, 
              and cloud technologies. I enjoy working on challenging projects that push the boundaries 
              of what's possible.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Beyond technical skills, I believe in the power of teamwork and effective communication. 
              I'm eager to apply my technical and analytical skills to impactful projects that make 
              a difference in people's lives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="glass-card p-6 text-center hover:scale-105 transition-transform duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-center mb-4">
                  {item.icon}
                </div>
                <h4 className="font-semibold mb-2 font-poppins">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
