import { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-black text-white relative">
            <div className="container mx-auto py-3 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center">
                    <img src="/PC.png" alt="PC ICON" className="h-8 w-8" />
                </div>

                {/* Menú hamburguesa (visible solo en móviles) */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-2xl focus:outline-none"
                    >
                        ☰
                    </button>
                </div>

                {/* Links de navegación */}
                <div
                    className={`${isOpen ? "block" : "hidden"
                        } md:flex md:space-x-6 absolute md:relative top-0 left-0 w-full md:w-auto bg-black md:bg-transparent z-50`}
                >
                    {/* Botón para cerrar el menú en móviles */}
                    <div className="flex justify-between items-center md:hidden p-4">
                        <span className="font-bold text-lg">Menú</span>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-2xl"
                        >
                            ✕
                        </button>
                    </div>

                    <a
                        href="/"
                        className="block md:inline px-4 py-2 md:p-0 hover:bg-gray-800 md:hover:bg-transparent"
                        onClick={() => setIsOpen(false)} // Cerrar menú al hacer clic
                    >
                        Inicio
                    </a>
                    <a
                        href="/blogs"
                        className="block md:inline px-4 py-2 md:p-0 hover:bg-gray-800 md:hover:bg-transparent"
                        onClick={() => setIsOpen(false)}
                    >
                        Categorías
                    </a>
                    <a
                        href="/blogs-personales"
                        className="block md:inline px-4 py-2 md:p-0 hover:bg-gray-800 md:hover:bg-transparent"
                        onClick={() => setIsOpen(false)}
                    >
                        Blogs personales
                    </a>
                    <a
                        href="/sobre-mi"
                        className="block md:inline px-4 py-2 md:p-0 hover:bg-gray-800 md:hover:bg-transparent"
                        onClick={() => setIsOpen(false)}
                    >
                        Sobre mí
                    </a>
                    <a
                        href="/login"
                        className="text-sky-600 block md:inline px-4 py-2 md:p-0 hover:bg-gray-800 md:hover:bg-transparent font-bold"
                        onClick={() => setIsOpen(false)}
                    >
                        Iniciar sesión
                    </a>
                </div>

                {/* Barra de búsqueda (visible solo en pantallas grandes) */}
                <div className="hidden md:block">
                    <input
                        type="text"
                        placeholder="Buscar..."
                        className="px-4 py-2 rounded-lg text-black"
                    />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
