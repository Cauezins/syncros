import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function PricingSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5 }}
      id="pricing"
      className="relative py-20 px-4"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-4">
          Planos e Preços
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Escolha o plano ideal para sua equipe. Todos os planos incluem suporte
          prioritário e atualizações gratuitas.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="glass p-8 rounded-2xl hover:scale-105 transition-transform duration-300">
            <div className="text-center mb-8">
              <h3 className="text-xl font-semibold text-white mb-2">Starter</h3>
              <div className="text-4xl font-bold text-white mb-4">
                R$ 29
                <span className="text-lg font-normal text-gray-400">/mês</span>
              </div>
              <p className="text-gray-400">Perfeito para pequenas equipes</p>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center text-gray-300">
                <svg
                  className="w-5 h-5 text-blue-500 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                Até 5 membros
              </li>
              <li className="flex items-center text-gray-300">
                <svg
                  className="w-5 h-5 text-blue-500 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                5GB de armazenamento
              </li>
              <li className="flex items-center text-gray-300">
                <svg
                  className="w-5 h-5 text-blue-500 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                3 projetos simultâneos
              </li>
            </ul>
            <Link to="/signup">
            <button
              className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium rounded-lg transition-colors"
            >
              Começar Grátis
            </button>
            </Link>
          </div>

          <div className="glass p-8 rounded-2xl hover:scale-105 transition-transform duration-300 border-2 border-blue-500">
            <div className="absolute top-0 right-0 bg-blue-500 px-4 py-1 rounded-bl-lg rounded-tr-xl text-sm font-semibold">
              Popular
            </div>
            <div className="text-center mb-8">
              <h3 className="text-xl font-semibold text-white mb-2">Pro</h3>
              <div className="text-4xl font-bold text-white mb-4">
                R$ 79
                <span className="text-lg font-normal text-gray-400">/mês</span>
              </div>
              <p className="text-gray-400">Para equipes em crescimento</p>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center text-gray-300">
                <svg
                  className="w-5 h-5 text-blue-500 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                Até 20 membros
              </li>
              <li className="flex items-center text-gray-300">
                <svg
                  className="w-5 h-5 text-blue-500 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                50GB de armazenamento
              </li>
              <li className="flex items-center text-gray-300">
                <svg
                  className="w-5 h-5 text-blue-500 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                Projetos ilimitados
              </li>
              <li className="flex items-center text-gray-300">
                <svg
                  className="w-5 h-5 text-blue-500 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                Relatórios avançados
              </li>
            </ul>
            <Link to="/signup">
            <button
              className="w-full py-3 px-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium rounded-lg transition-colors"
            >
              Começar Agora
            </button>
            </Link>
          </div>

          <div className="glass p-8 rounded-2xl hover:scale-105 transition-transform duration-300">
            <div className="text-center mb-8">
              <h3 className="text-xl font-semibold text-white mb-2">
                Enterprise
              </h3>
              <div className="text-4xl font-bold text-white mb-4">
                Personalizado
              </div>
              <p className="text-gray-400">Para grandes organizações</p>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center text-gray-300">
                <svg
                  className="w-5 h-5 text-blue-500 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                Membros ilimitados
              </li>
              <li className="flex items-center text-gray-300">
                <svg
                  className="w-5 h-5 text-blue-500 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                Armazenamento personalizado
              </li>
              <li className="flex items-center text-gray-300">
                <svg
                  className="w-5 h-5 text-blue-500 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                API dedicada
              </li>
              <li className="flex items-center text-gray-300">
                <svg
                  className="w-5 h-5 text-blue-500 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                Suporte 24/7 prioritário
              </li>
            </ul>
            <Link to="/suport">
              <button
                className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium rounded-lg transition-colors"
              >
                Falar com Vendas
              </button>
            </Link>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default PricingSection;
