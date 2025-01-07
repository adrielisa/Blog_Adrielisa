import { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-black text-white">
            <div className="container mx-auto py-3 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center">
                    <img src="/PC.png" alt="PC ICON" className="h-8 w-8" />
                </div>

                {/* Menú hamburguesa (para móviles, sin funcionalidad por ahora) */}
                <div className="md:hidden mx-2">
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
                        } md:flex md:space-x-6 absolute md:relative top-0 left-0 w-full md:w-auto bg-black md:bg-transparent`}
                >
                    <a
                        href="/"
                        className="block md:inline px-4 py-2 md:p-0 hover:bg-gray-800 md:hover:bg-transparent"
                    >
                        Inicio
                    </a>
                    <a
                        href="/blogs"
                        className="block md:inline px-4 py-2 md:p-0 hover:bg-gray-800 md:hover:bg-transparent"
                    >
                        Blogs
                    </a>
                    <a
                        href="/blogs-personales"
                        className="block md:inline px-4 py-2 md:p-0 hover:bg-gray-800 md:hover:bg-transparent"
                    >
                        Blogs personales
                    </a>
                    <a
                        href="/sobre-mi"
                        className="block md:inline px-4 py-2 md:p-0 hover:bg-gray-800 md:hover:bg-transparent"
                    >
                        Sobre mí
                    </a>
                </div>

                {/* Barra de búsqueda (solo visible en pantallas grandes) */}
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
