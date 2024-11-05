import { motion } from 'framer-motion';
function HeroSection(){
    return (
        <motion.section  initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }} className="relative min-h-screen flex items-center justify-center px-4 pt-16">
        <div className="glass p-8 rounded-2xl max-w-4xl z-10 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Sincronize suas ideias.<br/>
                <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
                    Realize seus projetos.
                </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                {/*Syncros*/}Syncros é a plataforma que unifica seu time, seus projetos e suas metas em um só lugar. 
                Gerencie tudo com simplicidade e eficiência.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a className="w-full sm:w-auto px-8 py-4 cursor-pointer bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium rounded-lg transition-colors transition-all duration-300 transform hover:scale-[1.02]">
                    Comece Agora
                </a>
                <a className="w-full sm:w-auto px-8 py-4 border border-blue-500 text-blue-500 cursor-pointer hover:bg-blue-500 hover:text-white rounded-lg transition-all duration-300">
                    Ver Demo
                </a>
            </div>
        </div>
    </motion.section>
    );
}
export default HeroSection;