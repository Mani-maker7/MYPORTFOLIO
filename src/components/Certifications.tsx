
import React from 'react';
import { Award, ExternalLink } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: "Red Hat Certified Enterprise Application Developer",
      issuer: "Red Hat",
      description: "Advanced certification in enterprise application development using Red Hat technologies.",
      link: "https://www.credly.com/badges/e23ad85e-9ba7-449b-8194-85ed7ede495d/public_url"
    },
    {
      title: "Salesforce Certified AI Associate",
      issuer: "Salesforce",
      description: "Certification demonstrating expertise in AI technologies within the Salesforce ecosystem.",
      link: "https://drive.google.com/file/d/1IsSTQFzk7Xht0JwlNRZYjGgaOYyxZtS6/view"
    },
    {
      title: "Oracle Cloud Infrastructure Generative AI",
      issuer: "Oracle",
      description: "Specialized certification in AI and machine learning technologies on Oracle Cloud Infrastructure.",
      link: "https://drive.google.com/file/d/1qk-tMTeB5WTudu08gG8_I269nue90wZ4/view"
    },
    {
      title: "AICTE Android Internship",
      issuer: "AICTE",
      description: "Comprehensive internship program focused on Android development using Java and Kotlin.",
      link: "https://www.credly.com/badges/e23ad85e-9ba7-449b-8194-85ed7ede495d/public_url"
    }
  ];

  const codingProfiles = [
    { name: "CodeChef", url: "#" },
    { name: "LeetCode", url: "#" },
    { name: "Codeforces", url: "#" },
    { name: "GeeksforGeeks", url: "#" }
  ];

  return (
    <section id="certifications" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/30 to-white"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-poppins mb-4 animate-fade-in">Certifications</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="glass-card p-8 hover:scale-105 transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2 font-poppins">
                    {cert.title}
                  </h3>
                  <p className="text-primary font-medium mb-3">{cert.issuer}</p>
                  <p className="text-gray-600 text-sm mb-4">{cert.description}</p>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-blue-600 transition-colors text-sm font-medium"
                  >
                    View Certificate
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="glass-card p-8 text-center animate-fade-in">
          <h3 className="text-2xl font-semibold mb-6 font-poppins text-primary">
            Coding Profiles
          </h3>
          <p className="text-gray-600 mb-8">
            Find me on various competitive programming platforms
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {codingProfiles.map((profile, index) => (
              <a
                key={index}
                href={profile.url}
                className="bg-white/50 hover:bg-primary hover:text-white border border-primary text-primary px-6 py-3 rounded-lg transition-all duration-300 font-medium"
              >
                {profile.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
