import { motion } from 'framer-motion';
function AboutSection(){
    return (
        <motion.section  initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }} id="about" className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="glass p-8 rounded-2xl">
                    <h2 className="text-4xl font-bold text-white mb-6">
                        Sobre o <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">S..</span>
                    </h2>
                    <p className="text-gray-300 mb-6">
                        O S... nasceu da necessidade de simplificar a gestão de projetos mantendo equipes conectadas e produtivas. Nossa missão é transformar a maneira como as equipes colaboram e alcançam seus objetivos.
                    </p>
                    <div className="space-y-4">
                        <div className="flex items-start space-x-4">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0 mt-1">
                                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-white mb-2">Nossa Visão</h3>
                                <p className="text-gray-400">Ser a plataforma líder em gestão de projetos, reconhecida pela inovação e eficiência.</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0 mt-1">
                                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-white mb-2">Nossos Valores</h3>
                                <p className="text-gray-400">Transparência, colaboração e inovação contínua são os pilares que guiam nosso desenvolvimento.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                    <div className="glass p-6 rounded-xl text-center">
                        <div className="text-4xl font-bold text-blue-500 mb-2">2K+</div>
                        <p className="text-gray-400">Equipes Ativas</p>
                    </div>
                    <div className="glass p-6 rounded-xl text-center">
                        <div className="text-4xl font-bold text-purple-500 mb-2">50K+</div>
                        <p className="text-gray-400">Usuários</p>
                    </div>
                    <div className="glass p-6 rounded-xl text-center">
                        <div className="text-4xl font-bold text-blue-500 mb-2">98%</div>
                        <p className="text-gray-400">Satisfação</p>
                    </div>
                    <div className="glass p-6 rounded-xl text-center">
                        <div className="text-4xl font-bold text-purple-500 mb-2">24/7</div>
                        <p className="text-gray-400">Suporte</p>
                    </div>
                </div>
            </div>
        </div>
    </motion.section>
    );
};

export default AboutSection;