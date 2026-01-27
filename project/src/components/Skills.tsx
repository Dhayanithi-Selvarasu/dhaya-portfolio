import { Database, Layers, Code2, Smartphone, GitBranch, Palette } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: 'Frontend',
      skills: ['React', 'JavaScript' , 'Tailwind CSS', 'HTML5', 'CSS3'],
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: 'Backend',
      skills: [ 'Java', 'Spring Boot', 'REST APIs', ],
      color: 'from-green-500 to-green-600',
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Database',
      skills: ['PostgreSQL', 'Oracle', 'MySQL'],
      color: 'from-orange-500 to-orange-600',
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Mobile',
      skills: [, 'Flutter', 'iOS', 'Android', 'Responsive Design'],
      color: 'from-pink-500 to-pink-600',
    },
    {
      icon: <GitBranch className="w-8 h-8" />,
      title: 'DevOps',
      skills: ['Git', 'Docker', 'Kubernetes', 'Nginx',],
      color: 'from-cyan-500 to-cyan-600',
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'Design',
      skills: ['Figma', 'Adobe XD', 'UI/UX', 'Prototyping', 'Wireframing'],
      color: 'from-red-500 to-red-600',
    },
  ];

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            My <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-xl text-gray-600">Technologies I work with</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${category.color} text-white mb-6 group-hover:scale-110 transition-transform`}>
                {category.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-blue-100 hover:text-blue-600 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Proficiency Levels</h3>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-medium text-gray-700">Frontend Development</span>
                <span className="text-blue-600 font-bold">95%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full animate-progress" style={{ width: '95%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-medium text-gray-700">Backend Development</span>
                <span className="text-green-600 font-bold">80%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                <div className="bg-gradient-to-r from-green-500 to-green-600 h-3 rounded-full animate-progress" style={{ width: '90%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-medium text-gray-700">Database Management</span>
                <span className="text-orange-600 font-bold">85%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 h-3 rounded-full animate-progress" style={{ width: '85%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-medium text-gray-700">UI/UX Design</span>
                <span className="text-pink-600 font-bold">80%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                <div className="bg-gradient-to-r from-pink-500 to-pink-600 h-3 rounded-full animate-progress" style={{ width: '80%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
