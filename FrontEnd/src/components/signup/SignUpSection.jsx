import { Link } from "react-router-dom";
import { useState } from "react";
function SignUpSection() {
  const [step, setStep] = useState(1);

  function handleStep1() {
    setStep(step + 1);
  }
  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 py-8">
      <div className="glass p-8 rounded-2xl w-full max-w-2xl z-10">
        <div className="text-center mb-8">
          <Link to="/" className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
            <svg
              className="w-10 h-10 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </Link>
          <h1 className="text-4xl font-bold text-white mb-2">Syncros</h1>
          <p className="text-gray-400">
            Crie sua conta e comece a gerenciar seus projetos
          </p>
        </div>

        <div className="flex items-center justify-center mb-8">
          <div className={`step-indicator ${step === 1 ? "active" : ""}`}>
            1
          </div>
          <div className="step-line"></div>
          <div className={`step-indicator ${step === 2 ? "active" : ""}`}>
            2
          </div>
          <div className="step-line"></div>
          <div className={`step-indicator ${step === 3 ? "active" : ""}`}>
            3
          </div>
        </div>
        {step === 1 ? (
          <div>
            <form className="space-y-6">
              <div id="step1" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="input-group">
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Nome
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none transition-colors"
                      placeholder="Seu nome"
                    />
                    <div className="input-border"></div>
                  </div>
                  <div className="input-group">
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Sobrenome
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none transition-colors"
                      placeholder="Seu sobrenome"
                    />
                    <div className="input-border"></div>
                  </div>
                </div>

                <div className="input-group">
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none transition-colors"
                    placeholder="seu@email.com"
                  />
                  <div className="input-border"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="input-group">
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Senha
                    </label>
                    <input
                      type="password"
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none transition-colors"
                      placeholder="••••••••"
                    />
                    <div className="input-border"></div>
                  </div>
                  <div className="input-group">
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Confirmar Senha
                    </label>
                    <input
                      type="password"
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none transition-colors"
                      placeholder="••••••••"
                    />
                    <div className="input-border"></div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <label className="flex items-center text-gray-400 cursor-pointer group">
                  <div className="relative">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-10 h-4 bg-gray-700 rounded-full"></div>
                    <div className="absolute left-1 top-1 w-2 h-2 bg-gray-400 rounded-full transition peer-checked:bg-blue-500 peer-checked:translate-x-6"></div>
                  </div>
                  <span className="ml-3">
                    Eu aceito os
                    <a href="#" className="text-blue-500 hover:text-blue-400">
                      Termos de Uso
                    </a>
                    e
                    <a href="#" className="text-blue-500 hover:text-blue-400">
                      Política de Privacidade
                    </a>
                  </span>
                </label>

                <label className="flex items-center text-gray-400 cursor-pointer group">
                  <div className="relative">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-10 h-4 bg-gray-700 rounded-full"></div>
                    <div className="absolute left-1 top-1 w-2 h-2 bg-gray-400 rounded-full transition peer-checked:bg-blue-500 peer-checked:translate-x-6"></div>
                  </div>
                  <span className="ml-3">
                    Desejo receber atualizações por email
                  </span>
                </label>
              </div>

              <div className="flex gap-4">
                <Link
                  to="/login"
                  type="button"
                  className="flex-1 py-3 px-4 bg-gray-700 hover:bg-gray-600 text-white font-medium rounded-lg transition-all duration-300"
                >
                  Voltar para Login
                </Link>
                <button
                  onClick={handleStep1}
                  type="button"
                  className="flex-1 py-3 px-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-[1.02] focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                >
                  Próximo
                </button>
              </div>
            </form>
            <div className="mt-6 bg-blue-900/20 p-4 rounded-lg">
              <h3 className="text-blue-400 font-medium mb-2">
                Dicas para uma senha forte:
              </h3>
              <ul className="text-gray-400 text-sm space-y-1">
                <li>• Use pelo menos 8 caracteres</li>
                <li>• Combine letras maiúsculas e minúsculas</li>
                <li>• Inclua números e símbolos</li>
                <li>• Evite informações pessoais óbvias</li>
              </ul>
            </div>
          </div>
        ) : (
          <div>teste</div>
        )}
      </div>
    </div>
  );
}

export default SignUpSection;
