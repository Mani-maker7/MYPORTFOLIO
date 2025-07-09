
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Project & Portfolio Management System",
      description: "Role-based access for students/admins to upload projects, track progress, and give feedback. Built with modern backend technologies for scalability.",
      tech: ["Spring Boot", "JSP", "CSS", "MySQL"],
      github: "#",
      demo: null,
      features: [
        "Role-based authentication",
        "Project upload and tracking",
        "Real-time feedback system",
        "Progress monitoring dashboard"
      ]
    },
    {
      title: "Student Course Management System",
      description: "Comprehensive academic course organization system with REST API and GraphQL integration. Features modern UI and efficient data management.",
      tech: ["MERN Stack", "GraphQL", "Material UI", "Axios"],
      github: "#",
      demo: "#",
      features: [
        "Course organization",
        "REST API + GraphQL",
        "Material UI design",
        "Real-time updates"
      ]
    },
    {
      title: "Tourism Management System",
      description: "Secure homestay booking system with comprehensive authentication and booking history management. Built for reliability and user experience.",
      tech: ["JSP", "EJB", "MySQL"],
      github: "#",
      demo: null,
      features: [
        "Secure authentication",
        "Booking management",
        "History tracking",
        "User-friendly interface"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-blue-50/30"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-poppins mb-4 animate-fade-in">Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass-card p-8 hover:scale-105 transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <h3 className="text-xl font-semibold mb-4 font-poppins text-primary">
                {project.title}
              </h3>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="mb-6">
                <h4 className="font-semibold mb-3">Key Features:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <a
                  href={project.github}
                  className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors text-sm"
                >
                  <Github size={16} />
                  Code
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors text-sm"
                  >
                    <ExternalLink size={16} />
                    Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
