import { Link } from "react-router-dom";

function LoginSection() {
    return (
        <div className="relative min-h-screen flex items-center justify-center px-4">
        <div className="glass p-8 rounded-2xl w-full max-w-md z-10 transform hover:scale-[1.01] transition-transform duration-300 bg-gray-800/30 backdrop-blur-md border border-gray-700/50">
          <div className="text-center mb-8">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
            </div>
            <h1 className="text-4xl font-bold text-white mb-2">Syncros</h1>
            <p className="text-gray-400">Gerencie seus projetos com sincronismo</p>
          </div>
  
          <form className="space-y-6">
            <div className="input-group">
              <input
                type="email"
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
                placeholder="seu@email.com"
              />
            </div>
  
            <div className="input-group">
              <input
                type="password"
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
                placeholder="••••••••"
              />
            </div>
  
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center text-gray-400 cursor-pointer group">
                <div className="relative">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-10 h-4 bg-gray-700 rounded-full"></div>
                  <div className="absolute left-1 top-1 w-2 h-2 bg-gray-400 rounded-full transition peer-checked:bg-blue-500 peer-checked:translate-x-6"></div>
                </div>
                <span className="ml-3">Lembrar-me</span>
              </label>
              <a href="#" className="text-blue-500 hover:text-blue-400 transition-colors">Esqueceu a senha?</a>
            </div>
  
            <button
              type="button"
              className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-[1.02] focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              Entrar
            </button>
          </form>
  
          <div className="mt-6 text-center text-gray-400 text-sm">
            <span>Não tem uma conta? </span>
            <Link to="/signup" className="cursor-pointer text-blue-500 hover:text-blue-400 transition-colors">Registre-se</Link>
          </div>
        </div>
      </div>
    );
}

export default LoginSection;