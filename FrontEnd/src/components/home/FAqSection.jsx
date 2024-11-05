import { motion } from 'framer-motion';
function FAqSection() {
  return (
    <motion.section  initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 1.5 }} id="faq" className="relative py-20 px-4 ">
    <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-4">Perguntas Frequentes</h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Confira as respostas para as perguntas mais comuns sobre o Syncros .
        </p>
        
        <div className="space-y-6">
            <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-white">Como posso cancelar minha assinatura?</h3>
                <p className="text-gray-400 mt-2">
                    Você pode cancelar sua assinatura a qualquer momento acessando sua conta e clicando em {'"Configurações" > "Assinatura"'}. Um e-mail de confirmação será enviado após o cancelamento.
                </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-white">Há uma versão gratuita do Syncros?</h3>
                <p className="text-gray-400 mt-2">
                    Sim! Oferecemos um período de teste gratuito de 14 dias, onde você pode explorar todas as funcionalidades do Syncros sem compromisso.
                </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-white">O Syncros é seguro para armazenar dados?</h3>
                <p className="text-gray-400 mt-2">
                    Absolutamente! Implementamos protocolos de segurança de ponta e criptografia de dados para garantir que suas informações permaneçam seguras e protegidas.
                </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-white">Posso integrar o Syncros com outras ferramentas?</h3>
                <p className="text-gray-400 mt-2">
                    Sim, o Syncros oferece integrações com várias ferramentas populares, incluindo Slack, Google Drive e Trello. Você pode encontrar uma lista completa de integrações na seção {'"Configurações"'} de sua conta.
                </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-white">Como posso entrar em contato com o suporte?</h3>
                <p className="text-gray-400 mt-2">
                    Você pode entrar em contato com nossa equipe de suporte 24/7 através da seção {'"Ajuda"'} em sua conta ou enviando um e-mail para suporte@Syncros.com.
                </p>
            </div>
        </div>
    </div>
</motion.section>
  );
}

export default FAqSection;