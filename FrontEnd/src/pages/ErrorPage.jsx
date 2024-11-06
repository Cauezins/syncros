import { Link } from "react-router-dom";
import { HomeIcon, AlertCircle, ServerCrash, FileQuestion } from "lucide-react";

const ErrorPage = () => {
  const getErrorDetails = (code) => {
    switch (code) {
      case "404":
        return {
          icon: FileQuestion,
          title: "Página não encontrada",
          description:
            "A página que você está procurando não existe ou foi movida.",
        };
      case "500":
        return {
          icon: ServerCrash,
          title: "Erro do servidor",
          description:
            "Ocorreu um erro em nossos servidores. Tente novamente mais tarde.",
        };
      default:
        return {
          icon: AlertCircle,
          title: "Erro inesperado",
          description: "Algo deu errado. Por favor, tente novamente.",
        };
    }
  };

  const errorDetails = getErrorDetails("404");
  const ErrorIcon = errorDetails.icon;

  return (
    <div className="bg-gray-900 min-h-screen overflow-x-hidden">
      <div className="relative min-h-screen flex items-center justify-center px-4">
        <div className="glass p-8 rounded-2xl w-full max-w-md z-10 transform hover:scale-[1.01] transition-transform duration-300 bg-gray-800/30 backdrop-blur-md border border-gray-700/50">
          <div className="text-center mb-8">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
              <ErrorIcon className="w-8 h-8 text-white" />
            </div>

            <h1 className="text-6xl font-bold text-white mb-2">404</h1>
            <h2 className="text-xl font-semibold text-white mb-2">
              {errorDetails.title}
            </h2>
            <p className="text-gray-400 mb-8">{errorDetails.description}</p>

            <Link
              to="/"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-[1.02] focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              <HomeIcon className="w-4 h-4 mr-2" />
              Voltar para Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
