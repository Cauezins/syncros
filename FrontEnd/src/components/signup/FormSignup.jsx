import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function FormSignup({ formData, errors, handleInputChange, handleStep1 }) {
  FormSignup.propTypes = {
    formData: PropTypes.shape({
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      email: PropTypes.string,
      password: PropTypes.string,
      confirmPassword: PropTypes.string,
      acceptTerms: PropTypes.bool,
      newsletter: PropTypes.bool,
    }).isRequired,
    errors: PropTypes.object.isRequired,
    handleInputChange: PropTypes.func.isRequired,
    handleStep1: PropTypes.func.isRequired,
  };
  return (
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
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 bg-gray-800/50 border ${
                  errors.firstName ? "border-red-500" : "border-gray-700"
                } rounded-lg text-white focus:outline-none transition-colors`}
                placeholder="Seu nome"
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
              )}
            </div>
            <div className="input-group">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Sobrenome
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 bg-gray-800/50 border ${
                  errors.lastName ? "border-red-500" : "border-gray-700"
                } rounded-lg text-white focus:outline-none transition-colors`}
                placeholder="Seu sobrenome"
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
              )}
            </div>
          </div>

          <div className="input-group">
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 bg-gray-800/50 border ${
                errors.email ? "border-red-500" : "border-gray-700"
              } rounded-lg text-white focus:outline-none transition-colors`}
              placeholder="seu@email.com"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="input-group">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Senha
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 bg-gray-800/50 border ${
                  errors.password ? "border-red-500" : "border-gray-700"
                } rounded-lg text-white focus:outline-none transition-colors`}
                placeholder="••••••••"
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
              )}
            </div>
            <div className="input-group">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Confirmar Senha
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 bg-gray-800/50 border ${
                  errors.confirmPassword ? "border-red-500" : "border-gray-700"
                } rounded-lg text-white focus:outline-none transition-colors`}
                placeholder="••••••••"
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.confirmPassword}
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <label className="flex items-center text-gray-400 cursor-pointer group">
            <div className="relative">
              <input
                type="checkbox"
                name="acceptTerms"
                checked={formData.acceptTerms}
                onChange={handleInputChange}
                className="sr-only peer"
              />
              <div className="w-10 h-4 bg-gray-700 rounded-full"></div>
              <div className="absolute left-1 top-1 w-2 h-2 bg-gray-400 rounded-full transition peer-checked:bg-blue-500 peer-checked:translate-x-6"></div>
            </div>
            <span className="ml-3">
              Eu aceito os{" "}
              <a href="#" className="text-blue-500 hover:text-blue-400">
                Termos de Uso
              </a>{" "}
              e{" "}
              <a href="#" className="text-blue-500 hover:text-blue-400">
                Política de Privacidade
              </a>
            </span>
          </label>
          {errors.acceptTerms && (
            <p className="text-red-500 text-sm">{errors.acceptTerms}</p>
          )}

          <label className="flex items-center text-gray-400 cursor-pointer group">
            <div className="relative">
              <input
                type="checkbox"
                name="newsletter"
                checked={formData.newsletter}
                onChange={handleInputChange}
                className="sr-only peer"
              />
              <div className="w-10 h-4 bg-gray-700 rounded-full"></div>
              <div className="absolute left-1 top-1 w-2 h-2 bg-gray-400 rounded-full transition peer-checked:bg-blue-500 peer-checked:translate-x-6"></div>
            </div>
            <span className="ml-3">Desejo receber atualizações por email</span>
          </label>
        </div>

        <div className="flex gap-4">
          <Link
            to="/login"
            className="flex-1 py-3 px-4 bg-gray-700 hover:bg-gray-600 text-white font-medium rounded-lg transition-all duration-300 text-center"
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
  );
}

export default FormSignup;
