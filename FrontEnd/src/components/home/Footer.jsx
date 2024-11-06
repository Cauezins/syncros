import { useState } from 'react';
import { Github, ExternalLink, Mail, ArrowRight } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const technologies = [
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
    { name: 'Tailwind', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
    { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' }
  ];

  const developers = [
    { name: 'Cauê Neves', role: 'Frontend', github: 'https://github.com/Cauezins' },
    { name: 'Kauan Pinto', role: 'Backend', github: 'https://github.com/KauanAg-devs' }
  ];

  return (
    <footer className="relative overflow-hidden mt-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gray-900" />

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 pt-20 pb-12">
        {/* Tech Stack */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-white">
              Tecnologias Utilizadas
            </h3>
          </div>
          <div className="flex justify-center items-center gap-8 flex-wrap">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-2"
              >
                <div className="w-16 h-16 flex items-center justify-center bg-gray-800/50 rounded-xl hover:bg-gray-800/80 transition-all duration-300">
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="w-8 h-8"
                  />
                </div>
                <span className="text-sm text-gray-400">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          {/* Team Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white">Nossa Equipe</h3>
            <div className="space-y-4">
              {developers.map((dev, index) => (
                <a
                  key={index}
                  href={dev.github}
                  className="group flex items-center p-4 bg-gray-800/30 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className="flex-1">
                    <h4 className="text-white font-medium">{dev.name}</h4>
                    <p className="text-sm text-gray-400">{dev.role}</p>
                  </div>
                  <Github className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white">Links Rápidos</h3>
            <div className="space-y-4">
              <a
                href="https://github.com/Cauezins/syncros"
                className="group flex items-center p-4 bg-gray-800/30 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="flex-1">
                  <h4 className="text-white font-medium">Repositório</h4>
                  <p className="text-sm text-gray-400">Acesse nosso código fonte</p>
                </div>
                <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors" />
              </a>
              <a
                href="/license"
                className="group flex items-center p-4 bg-gray-800/30 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="flex-1">
                  <h4 className="text-white font-medium">Licença MIT</h4>
                  <p className="text-sm text-gray-400">Termos de uso</p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors" />
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white">Newsletter</h3>
            <div className="p-6 bg-gray-800/30 rounded-xl border border-gray-700/50">
              <form className="space-y-4">
                <p className="text-sm text-gray-400">
                  Receba atualizações sobre o desenvolvimento do Syncros
                </p>
                <div className="relative">
                  <input
                    type="email"
                    placeholder="seu@email.com"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors pr-12"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-lg transition-colors duration-300"
                  >
                    <Mail className="w-4 h-4 text-white" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

         {/* Copyright */}
         <div className="text-center">
          <div className="inline-flex items-center justify-center space-x-2 bg-gray-800/30 px-4 py-2 rounded-full">
            <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full" />
            <p className="text-sm text-gray-400">
              &copy; 2024 Syncros. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;