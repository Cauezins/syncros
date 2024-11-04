import { motion } from 'framer-motion';
function CTaTwoSection() {
    return (
        <motion.section  initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }} id="cta" className="relative py-20 px-4 glass p-8 rounded-2xl max-w-7xl mx-auto">
        <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Pronto para transformar sua equipe com o <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">S...</span>?</h2>
            <p className="text-gray-200 mb-8">Experimente o S... hoje e veja como podemos ajudar sua equipe a ser mais eficiente.</p>
            <button className="py-3 px-6 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium rounded-lg transition-colors transition-all duration-300 transform hover:scale-[1.02]">
                Começar Agora
            </button>
        </div>
    </motion.section>
    );
}

export default CTaTwoSection;