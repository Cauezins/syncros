import { motion } from 'framer-motion';
function CTaSection() {
    return (
        <motion.section initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }} className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto glass p-8 rounded-2xl text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Pronto para transformar sua gestão de projetos?</h2>
            <p className="text-gray-300 mb-8">Junte-se a milhares de equipes que já estão usando o S... para alcançar seus objetivos.</p>
            <a href="/register.html" className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium rounded-lg transition-colors transition-all duration-300 transform hover:scale-[1.02]">
                Comece seu período gratuito
            </a>
        </div>
    </motion.section>
    );
}

export default CTaSection;