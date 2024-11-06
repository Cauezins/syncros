import { Link } from 'react-router-dom';
import { Home as HomeIcon, Scroll } from 'lucide-react';

const LicensePage = () => {
  return (
    <div className="bg-gray-900 min-h-screen overflow-x-hidden">
      <div className="relative min-h-screen flex items-center justify-center px-4">
        <div className="glass p-8 rounded-2xl w-full max-w-2xl z-10 transform hover:scale-[1.01] transition-transform duration-300 bg-gray-800/30 backdrop-blur-md border border-gray-700/50">
          <div className="text-center mb-8">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
              <Scroll className="w-8 h-8 text-white" />
            </div>

            <h1 className="text-2xl font-bold text-white mb-6">Licença MIT</h1>
            
            <div className="text-left text-gray-300 space-y-4 mb-8">
              <p>Copyright (c) 2024 Syncros</p>
              
              <p>
                É concedida permissão, gratuitamente, a qualquer pessoa que obtenha uma cópia
                deste software e arquivos de documentação associados (o {"Software"}), para
                lidar com o Software sem restrições, incluindo, sem limitação, os direitos de
                usar, copiar, modificar, mesclar, publicar, distribuir, sublicenciar e/ou
                vender cópias do Software, e permitir que as pessoas a quem o Software é
                fornecido o façam, sujeito às seguintes condições:
              </p>
              
              <p>
                O aviso de direitos autorais acima e este aviso de permissão devem ser
                incluídos em todas as cópias ou partes substanciais do Software.
              </p>
              
              <p className="text-gray-400">
                O SOFTWARE É FORNECIDO {"COMO ESTÁ"}, SEM GARANTIA DE QUALQUER TIPO, EXPRESSA
                OU IMPLÍCITA, INCLUINDO, MAS NÃO SE LIMITANDO ÀS GARANTIAS DE
                COMERCIALIZAÇÃO, ADEQUAÇÃO A UM DETERMINADO FIM E NÃO VIOLAÇÃO. EM NENHUMA
                CIRCUNSTÂNCIA, OS AUTORES OU DETENTORES DE DIREITOS AUTORAIS SERÃO
                RESPONSÁVEIS POR QUALQUER RECLAMAÇÃO, DANOS OU OUTRA RESPONSABILIDADE, SEJA
                EM UMA AÇÃO DE CONTRATO, DELITO OU DE OUTRA FORMA, DECORRENTE DE, OU EM
                CONEXÃO COM O SOFTWARE OU O USO OU OUTRAS NEGOCIAÇÕES NO SOFTWARE.
              </p>
            </div>

            <Link
              to="/"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-[1.02] focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              <HomeIcon className="w-4 h-4 mr-2 " />
              Voltar para Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LicensePage;