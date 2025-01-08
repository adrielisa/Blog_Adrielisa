import React, { useEffect, useState } from "react";

const Hero = () => {
    // Estado para almacenar los posts destacados
    const [featuredPosts, setFeaturedPosts] = useState([]);

    // Simulación de llamada a una API
    useEffect(() => {
        // Aquí más adelante iría la lógica para obtener datos del backend con FastAPI
        // Usaremos datos simulados por ahora
        const fetchFeaturedPosts = async () => {
            const posts = [
                {
                    id: 1,
                    image: "/path/to/image1.jpg", // Reemplazar con URL de imagen
                    title: "Post destacado 1",
                    url: "/post/1",
                },
                {
                    id: 2,
                    image: "/path/to/image2.jpg",
                    title: "Post destacado 2",
                    url: "/post/2",
                },
                {
                    id: 3,
                    image: "/path/to/image3.jpg",
                    title: "Post destacado 3",
                    url: "/post/3",
                },
            ];
            setFeaturedPosts(posts);
        };

        fetchFeaturedPosts();
    }, []); // Solo se ejecuta una vez al montar el componente

    return (
        <div className="bg-gray-900 py-6">
            {/* Contenedor principal */}
            <div className="container mx-auto">
                {/* Galería dinámica */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {featuredPosts.map((post) => (
                        <a
                            key={post.id}
                            href={post.url}
                            className="relative group h-48 bg-cover bg-center rounded-lg"
                            style={{ backgroundImage: `url(${post.image})` }}
                        >
                            {/* Título (visible al pasar el cursor) */}
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <h3 className="text-white text-lg font-bold text-center px-2">
                                    {post.title}
                                </h3>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Hero;
