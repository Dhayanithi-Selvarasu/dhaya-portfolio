import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-cyan-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center animate-fade-in">
          <div className="mb-8 animate-float">
            <div className="w-52 h-52 mx-auto rounded-full bg-gradient-to-br from-blue-700 to-cyan-700 p-1 shadow-xl">
  <img
    src="/spider.jpg"
    alt="My Profile"
    className="w-full h-full rounded-full object-cover bg-white"
  />
</div>

          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4 animate-slide-up">
            Hi, I'm <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Dhayanithi Portfolio</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-8 animate-slide-up delay-100">
            Full Stack Developer & Creative Problem Solver
          </p>

          <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-12 animate-slide-up delay-200">
            I build exceptional digital experiences that make people's lives easier.
            Passionate about clean code, elegant solutions, and continuous learning.
          </p>

          <div className="flex justify-center gap-4 mb-12 animate-slide-up delay-300">
            <a
              href="https://github.com/Dhayanithi-Selvarasu"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all hover:scale-110 shadow-lg"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/dhayanithi-s-7a292b292/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all hover:scale-110 shadow-lg"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <button
              onClick={() => scrollToSection('contact')}
              className="p-3 bg-cyan-600 text-white rounded-full hover:bg-cyan-700 transition-all hover:scale-110 shadow-lg"
            >
              <Mail className="w-6 h-6" />
            </button>
          </div>

          <div className="flex justify-center gap-4 animate-slide-up delay-400">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all hover:scale-105 shadow-lg font-medium"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-all hover:scale-105 font-medium"
            >
              Get In Touch
            </button>
          </div>

          <div className="mt-20 animate-bounce">
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-400 hover:text-blue-600 transition-colors"
            >
              <ArrowDown className="w-8 h-8 mx-auto" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
