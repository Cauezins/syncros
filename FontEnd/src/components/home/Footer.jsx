function Footer(){
    return (
        <footer className="relative py-12 px-4 mt-10">
        <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div>
                    <h3 className="text-white font-semibold mb-4">Produto</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Recursos</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Preços</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Integrações</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-white font-semibold mb-4">Empresa</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Sobre</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Carreiras</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-white font-semibold mb-4">Suporte</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Documentação</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Tutoriais</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-white font-semibold mb-4">Legal</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacidade</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Termos</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Segurança</a></li>
                    </ul>
                </div>
            </div>
            <div className="mt-12 text-center text-gray-400">
                <p>&copy; 2024 S.... Todos os direitos reservados.</p>
            </div>
        </div>
    </footer>
    );
}

export default Footer;