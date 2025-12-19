import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import sushiRollsImage from "@/assets/sushi-rolls.jpg";
import sashimiImage from "@/assets/sashimi.jpg";
import temakiImage from "@/assets/temaki.jpg";
import buffetImage from "@/assets/buffet.jpg";

const categories = [
  { id: "all", name: "Todos" },
  { id: "sushi", name: "Sushi & Rolls" },
  { id: "sashimi", name: "Sashimi" },
  { id: "temaki", name: "Temaki" },
  { id: "buffet", name: "Buffet" },
];

const menuItems = [
  {
    id: 1,
    name: "Combinado Premium",
    description: "20 peças variadas de sushi e sashimi premium com peixes selecionados",
    price: "R$ 189",
    category: "sushi",
    image: sushiRollsImage,
    featured: true,
  },
  {
    id: 2,
    name: "Sashimi Misto",
    description: "Fatias generosas de salmão, atum e peixe branco sobre gelo",
    price: "R$ 98",
    category: "sashimi",
    image: sashimiImage,
    featured: false,
  },
  {
    id: 3,
    name: "Temaki Especial",
    description: "Cone de nori recheado com salmão, cream cheese e cebolinha",
    price: "R$ 42",
    category: "temaki",
    image: temakiImage,
    featured: false,
  },
  {
    id: 4,
    name: "Buffet Tradicional",
    description: "Experiência completa com mais de 40 opções de pratos quentes e frios",
    price: "R$ 149",
    category: "buffet",
    image: buffetImage,
    featured: true,
  },
  {
    id: 5,
    name: "Dragon Roll",
    description: "Uramaki coberto com lâminas de abacate e molho teriyaki",
    price: "R$ 68",
    category: "sushi",
    image: sushiRollsImage,
    featured: false,
  },
  {
    id: 6,
    name: "Sashimi de Salmão",
    description: "10 fatias de salmão fresco premium",
    price: "R$ 72",
    category: "sashimi",
    image: sashimiImage,
    featured: false,
  },
];

const Menu = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredItems =
    activeCategory === "all"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 bg-secondary/30 relative">
      {/* Japanese pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 10px,
            hsl(var(--primary)) 10px,
            hsl(var(--primary)) 11px
          )`
        }} />
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4 block">
            Nosso Cardápio
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-4">
            Sabores <span className="text-primary">Autênticos</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Descubra nossa seleção de pratos preparados com ingredientes frescos e técnicas tradicionais japonesas
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                  : "bg-card text-muted-foreground hover:bg-card/80 hover:text-foreground border border-border"
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Menu Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className={`group relative bg-card rounded-xl overflow-hidden hover-glow ${
                item.featured ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                {item.featured && (
                  <span className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full font-medium">
                    Destaque
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                    {item.name}
                  </h3>
                  <span className="text-primary font-bold text-lg">{item.price}</span>
                </div>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Buffet Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20"
        >
          <div className="relative rounded-2xl overflow-hidden">
            <img
              src={buffetImage}
              alt="Buffet japonês completo"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
            <div className="absolute inset-0 flex items-center">
              <div className="p-8 md:p-12 max-w-xl">
                <span className="text-primary text-sm tracking-[0.3em] uppercase mb-4 block">
                  Experiência Completa
                </span>
                <h3 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                  Buffet Premium
                </h3>
                <p className="text-muted-foreground mb-6">
                  Saboreie mais de 40 opções de pratos quentes e frios, incluindo sushis, sashimis, 
                  temakis, tempurás e pratos especiais da casa. Uma experiência gastronômica sem limites.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="bg-card/80 backdrop-blur px-4 py-2 rounded-lg">
                    <span className="text-primary font-bold">Almoço</span>
                    <span className="text-foreground ml-2">R$ 89,90</span>
                  </div>
                  <div className="bg-card/80 backdrop-blur px-4 py-2 rounded-lg">
                    <span className="text-primary font-bold">Jantar</span>
                    <span className="text-foreground ml-2">R$ 149,90</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Menu;
