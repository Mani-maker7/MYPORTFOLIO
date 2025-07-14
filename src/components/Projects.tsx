import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Project & Portfolio Management System",
      description:
        "A web-based system to streamline the management of student projects and portfolios. Students can upload, edit, and showcase their academic work, while admins (teachers/institutions) monitor progress and provide structured feedback.",
      tech: ["Spring Boot MVC", "JSP", "CSS", "MySQL"],
      github: "https://github.com/Mani-maker7/SDPSPPSPRINGBOOTPROJECT.git",
      demo: null,
      features: [
        "Student login and personalized dashboard",

"Project uploads with media (images, documents)",

"Portfolio creation and updates",

"Admin role to review submissions and give feedback",

"MySQL for persistent data storage",

"MVC pattern using Spring Boot for clean separation of logic"
     ],
    },
    {
      title: "Student Course Management System",
      description:
        "A MERN stack application to manage academic courses, including syllabus details, enrollment, and student access. Backend includes REST APIs and GraphQL support for efficient and scalable data access.",
      tech: ["HTML", "CSS", "MongoDB", "Express.js", "React.js", "Node.js"],
      github: "https://github.com/Mani-maker7/orgreactapp.git",
      demo: "https://coureguru04.netlify.app/",
      features: [
      "  CRUD operations for course creation and management",

"RESTful APIs for flexible data retrieval",

"Material UI-based frontend for a modern interface",

"Authentication and session management",

"Axios for secure HTTP requests",

"MongoDB as the NoSQL backend database"
      ],
    },
    {
      title: "Real-Time Multiplayer Game",
      description:
        "A multiplayer browser-based game that enables real-time interaction between players using WebSocket communication. Players can join game rooms via unique codes and play synchronously, with backend logic powered by serverless AWS services.",
      tech: [
        "AWS Lambda",
        "API Gateway (WebSocket)",
        "DynamoDB",
        "Cognito",
        "React.js",
        "AWS Amplify",
        "IAM",
      ],
      github: "https://github.com/Mani-maker7/AWSPROJECT-31837.git",
      demo: "https://master.d3r7cyps3f6gp6.amplifyapp.com/",
      features: [
        "Real-time gameplay using WebSockets",
        "Room-based matchmaking via unique session codes",
        "Authentication with AWS Cognito",
        "Serverless backend (auto-scaling, no server maintenance",
        "Frontend CI/CD deployment via AWS Amplify",
      ],
    },
    {
      title: "Tourism Management System",
      description:
        "An interactive tourism platform enabling homestay providers to list accommodations and users to explore and book stays securely. Focused on user privacy and seamless booking experience.",
      tech: ["HTML", "CSS","EJB", "JSP", "MySQL", "CodeReady Studio"],
      github: "https://github.com/Mani-maker7/Help-the-Tourists.git",
      demo: null,
      features: [
       "Secure user and provider login",

"Listing and booking of homestays",

"Admin features to manage listings and users",

"EJB for business logic and JSP for dynamic content rendering",

"MySQL for structured booking and user data",

"Role-based access control for providers and users"
      ],
    },
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-blue-50/30"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-poppins mb-4 animate-fade-in">
            Projects
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        {/* Horizontal scroll container */}
        <div className="flex gap-6 overflow-x-auto pb-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="min-w-[320px] max-w-[360px] flex-shrink-0 bg-white/80 rounded-xl shadow-md p-6 glass-card hover:scale-105 transition-transform duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <h3 className="text-xl font-semibold mb-4 font-poppins text-primary">
                {project.title}
              </h3>

              <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                {project.description}
              </p>

              <div className="mb-4">
                <h4 className="font-semibold text-sm mb-2">Key Features:</h4>
                <ul className="text-xs text-gray-600 space-y-1">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 text-xs mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-2">
                <a
                  href={project.github}
                  className="flex items-center gap-1 bg-gray-900 text-white px-3 py-1.5 rounded hover:bg-gray-800 text-xs"
                >
                  <Github size={14} />
                  Code
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    className="flex items-center gap-1 bg-blue-600 text-white px-3 py-1.5 rounded hover:bg-blue-700 text-xs"
                  >
                    <ExternalLink size={14} />
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
