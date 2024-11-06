import { Link } from "react-router-dom";
import { Home as HomeIcon, Scroll } from "lucide-react";

const LicensePage = () => {
  return (
    <div className="bg-gray-900 min-h-screen overflow-x-hidden ">
      <div className="relative min-h-screen flex items-center justify-center px-4 my-20">
        <div className="glass p-8 rounded-2xl w-full max-w-2xl z-10 transform hover:scale-[1.01] transition-transform duration-300 bg-gray-800/30 backdrop-blur-md border border-gray-700/50">
          <div className="text-center mb-8">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
              <Scroll className="w-8 h-8 text-white" />
            </div>

            <h1 className="text-2xl font-bold text-white mb-2">
              Creative Commons
            </h1>
            <h2 className="text-xl text-gray-300 mb-6">
              Attribution-NoDerivatives 4.0 International
            </h2>

            <div className="text-left text-gray-300 space-y-4 mb-8">
              <p className="font-medium text-white">
                Ao exercer os Direitos Licenciados (definidos abaixo), Você
                aceita e concorda estar sujeito aos termos e condições desta
                Licença Pública Creative Commons Attribution-NoDerivatives 4.0
                International ({"Licença Pública"}).
              </p>

              <div className="space-y-4">
                <section>
                  <h3 className="text-lg font-medium text-white mb-2">
                    Você tem o direito de:
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-300">
                    <li>
                      <strong>Compartilhar</strong> — copiar e redistribuir o
                      material em qualquer meio ou formato para qualquer
                      finalidade, mesmo comercialmente.
                    </li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-lg font-medium text-white mb-2">
                    De acordo com os seguintes termos:
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-300">
                    <li>
                      <strong>Atribuição</strong> — Você deve dar o crédito
                      apropriado, fornecer um link para a licença e indicar se
                      foram feitas alterações. Você pode fazê-lo de qualquer
                      forma razoável, mas não de maneira que sugira que o
                      licenciante endossa você ou seu uso.
                    </li>
                    <li>
                      <strong>Sem Derivações</strong> — Se você remixar,
                      transformar ou criar a partir do material, você não pode
                      distribuir o material modificado.
                    </li>
                    <li>
                      <strong>Sem restrições adicionais</strong> — Você não pode
                      aplicar termos jurídicos ou medidas de caráter tecnológico
                      que restrinjam legalmente outros de fazerem algo que a
                      licença permita.
                    </li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-lg font-medium text-white mb-2">
                    Avisos:
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-300">
                    <li>
                      Você não precisa cumprir com os termos da licença para
                      elementos do material em domínio público ou quando seu uso
                      é permitido por uma exceção ou limitação aplicável.
                    </li>
                    <li>
                      Nenhuma garantia é dada. A licença pode não lhe dar todas
                      as permissões necessárias para seu uso pretendido. Por
                      exemplo, outros direitos, como direitos de imagem,
                      privacidade ou direitos morais, podem limitar como você
                      pode usar o material.
                    </li>
                  </ul>
                </section>
              </div>

              <p className="text-sm text-gray-400 mt-6">
                Este é um resumo legível por humanos (e não um substituto) da{" "}
                <a
                  href="https://creativecommons.org/licenses/by-nd/4.0/legalcode"
                  className="text-blue-400 hover:text-blue-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  licença completa
                </a>
                .
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
