import Navbar from "../Components/Navbar"; // Importa el componente Navbar
import Hero from "../Components/Hero"; // Importa el componente Hero
import Footer from "../Components/Footer";
import BlogList from "../Components/BlogList";

const Inicio = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <BlogList />
            <Footer />
        </div>
    );
};

export default Inicio;