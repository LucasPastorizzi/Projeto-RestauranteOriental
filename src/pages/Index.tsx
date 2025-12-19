import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Menu from "@/components/Menu";
import Gallery from "@/components/Gallery";
import Features from "@/components/Features";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Tsuru | Restaurante Japonês Premium em São Paulo</title>
        <meta
          name="description"
          content="Experimente a autêntica culinária japonesa no Tsuru. Sushi, sashimi, temaki e buffet premium preparados por chefs especialistas. Reservas: (11) 3456-7890"
        />
        <meta
          name="keywords"
          content="restaurante japonês, sushi, sashimi, temaki, buffet japonês, São Paulo, culinária japonesa, comida japonesa"
        />
        <meta property="og:title" content="Tsuru | Restaurante Japonês Premium" />
        <meta
          property="og:description"
          content="Autêntica culinária japonesa em um ambiente sofisticado. Tradição e qualidade em cada prato."
        />
        <meta property="og:type" content="restaurant.restaurant" />
        <link rel="canonical" href="https://tsuru.com.br" />
      </Helmet>

      <main className="min-h-screen bg-background">
        <Navbar />
        <Hero />
        <About />
        <Menu />
        <Gallery />
        <Features />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default Index;
