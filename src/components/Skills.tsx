
import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Java", "Python", "JavaScript", "C", "HTML/CSS"]
    },
    {
      title: "Frameworks & Tools",
      skills: ["Spring Boot", "React.js", "Node.js", "Hibernate", "Git/GitHub"]
    },
    {
      title: "Databases",
      skills: ["PostgreSQL", "MySQL", "MongoDB"]
    },
    {
      title: "Cloud and DevOps",
      skills: ["Amazon Web Services (AWS)", "Docker (basic)"]
    }
  ];

  const softSkills = [
    "Leadership", "Teamwork", "Problem Solving", 
    "Communication", "Mentorship", "Analytical Thinking"
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/30 to-white"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-poppins mb-4 animate-fade-in">Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className="glass-card p-8 animate-scale-in"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <h3 className="text-xl font-semibold mb-6 font-poppins text-primary">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-primary/10 text-primary px-4 py-2 rounded-full font-medium hover:bg-primary hover:text-white transition-colors duration-300"
                    style={{ animationDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="glass-card p-8 animate-fade-in">
          <h3 className="text-xl font-semibold mb-6 font-poppins text-primary text-center">
            Soft Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {softSkills.map((skill, index) => (
              <span
                key={index}
                className="bg-primary/10 text-primary px-4 py-2 rounded-full font-medium hover:bg-primary hover:text-white transition-colors duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
