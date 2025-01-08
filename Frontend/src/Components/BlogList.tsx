import React from "react";

const BlogList = () => {
    // Datos simulados de los posts
    const posts = [
        {
            id: 1,
            image: "/path/to/image1.jpg", // Reemplazar con las rutas reales
            title: "Ubuntu está en decadencia",
            description:
                "Desde hace muchos años, lo que se consideraba la opción de Linux más fácil de usar ha ido en decadencia... Leer más",
            category: "Ciencia y tecnología",
            comments: 2,
            time: "Hace 6 horas",
        },
        {
            id: 2,
            image: "/path/to/image2.jpg",
            title: "Reseña Blue Period",
            description:
                "Blue Period trata sobre la vida de un estudiante de preparatoria que un día descubre su pasión por el arte... Leer más",
            category: "Películas y series",
            comments: 4,
            time: "Hace 12 horas",
        },
        // Repetir más posts para alcanzar 10
        ...Array.from({ length: 8 }, (_, i) => ({
            id: i + 3,
            image: `/path/to/image${i + 3}.jpg`,
            title: `Título genérico ${i + 3}`,
            description: `Descripción genérica del post número ${i + 3}. Leer más`,
            category: "Categoría genérica",
            comments: Math.floor(Math.random() * 10),
            time: `Hace ${i + 1} horas`,
        })),
    ];

    return (
        <div className="container mx-auto py-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Lo último:</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {posts.map((post) => (
                    <div
                        key={post.id}
                        className="flex space-x-4 border-b pb-4 last:border-b-0"
                    >
                        {/* Imagen del post */}
                        <div className="w-1/3">
                            <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </div>

                        {/* Información del post */}
                        <div className="w-2/3">
                            <h3 className="text-lg font-bold text-gray-900">{post.title}</h3>
                            <p className="text-sm text-gray-600 mb-2">{post.description}</p>
                            <div className="text-xs text-gray-500 flex space-x-2">
                                <span>{post.category}</span>
                                <span>·</span>
                                <span>{post.comments} comentarios</span>
                                <span>·</span>
                                <span>{post.time}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BlogList;
