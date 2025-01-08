const Footer = () => {
    return (
        <footer className="bg-black text-white py-10">
            <div className="container mx-auto text-center">
                <div className="flex justify-center space-x-6 mb-2">
                    <a href="/about" className="hover:underline">
                        Acerca de nosotros
                    </a>
                    <a href="/terms" className="hover:underline">
                        Términos y condiciones
                    </a>
                    <a href="/privacy" className="hover:underline">
                        Política de privacidad
                    </a>
                </div>
                <div className="text-sm text-gray-400">
                    © 2025 Adrielisa. Todos los derechos reservados.
                </div>
            </div>
        </footer>
    )
}

export default Footer