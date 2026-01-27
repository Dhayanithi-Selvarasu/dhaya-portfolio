import { Menu, X, Github, FileDown } from 'lucide-react';
import { useState } from 'react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('home')}
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent hover:scale-105 transition-transform"
            >
              Portfolio
            </button>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-blue-600 transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-600 transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('skills')} className="text-gray-700 hover:text-blue-600 transition-colors">
              Skills
            </button>
            <button onClick={() => scrollToSection('projects')} className="text-gray-700 hover:text-blue-600 transition-colors">
              Projects
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-600 transition-colors">
              Contact
            </button>
            <a
              href="https://github.com/Dhayanithi-Selvarasu"

              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="/Dhayanithi_Resume.pdf"
              download
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <FileDown className="w-4 h-4" />
              Resume
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button
              onClick={() => scrollToSection('home')}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-blue-50 rounded-md"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-blue-50 rounded-md"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-blue-50 rounded-md"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-blue-50 rounded-md"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-blue-50 rounded-md"
            >
              Contact
            </button>
            <div className="flex items-center gap-2 px-3 py-2">
              <a
                href="https://github.com/Dhayanithi-Selvarasu"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors"
              >
                <Github className="w-5 h-5" />
                GitHub
              </a>
              <a
                href="/Dhayanithi_Resume.pdf"
                download
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <FileDown className="w-4 h-4" />
                Resume
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
