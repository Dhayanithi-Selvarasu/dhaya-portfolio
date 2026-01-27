import { Code, Lightbulb, Rocket, Users } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code is my passion.',
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Creative Solutions',
      description: 'I love tackling complex problems with innovative approaches.',
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'Fast Learner',
      description: 'Always staying updated with the latest technologies and trends.',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Team Player',
      description: 'Collaborating effectively to achieve common goals.',
    },
  ];

  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-gray-600">Get to know me better</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">Hello! I'm Dhaya Portfolio</h3>
            <p className="text-gray-600 leading-relaxed">
            I'm a Full Stack Developer with practical experience in frontend and backend web development.
            I specialize in HTML5, CSS3, JavaScript, React, responsive UI design, and performance optimization.
            </p>
            <p className="text-gray-600 leading-relaxed">
            I have experience using Java, Spring Boot, REST APIs, and MVC architecture.
           I work with MySQL and SQL databases for CRUD operations, data management, and query optimization
            </p>
            <p className="text-gray-600 leading-relaxed">
              I focus on writing clean, maintainable code and following modern development standards.
              motivated to contribute to production-level applications and grow as a full stack developer
            </p>
                      
          </div>

          <div className="grid grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="text-blue-600 mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h4>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
