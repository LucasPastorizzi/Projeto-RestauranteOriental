import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import chefImage from "@/assets/chef.jpg";
import interiorImage from "@/assets/restaurant-interior.jpg";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent via-primary to-transparent" />
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4 block">
            Nossa História
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground">
            Sobre o <span className="text-primary">Tsuru</span>
          </h2>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Images */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              <img
                src={interiorImage}
                alt="Interior do restaurante Tsuru"
                className="w-full h-[400px] object-cover rounded-lg"
              />
              <div className="absolute -bottom-8 -right-8 w-48 h-48 md:w-64 md:h-64 hidden md:block">
                <img
                  src={chefImage}
                  alt="Chef preparando sushi"
                  className="w-full h-full object-cover rounded-lg border-4 border-background shadow-2xl"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:pl-8"
          >
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Fundado em 2010, o <span className="text-primary font-medium">Tsuru</span> nasceu 
                da paixão por compartilhar a autêntica culinária japonesa. Nosso nome, que significa 
                "grou" em japonês, simboliza longevidade, boa sorte e fidelidade – valores que 
                guiam cada prato que servimos.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Com um ambiente que harmoniza elementos tradicionais japoneses com design 
                contemporâneo, oferecemos uma experiência sensorial completa. Cada detalhe foi 
                pensado para transportar nossos convidados ao Japão, desde a decoração até a 
                música ambiente.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Nossos chefs, treinados nas melhores escolas de Tóquio e Osaka, dedicam-se 
                diariamente à perfeição. Utilizamos apenas ingredientes frescos e de primeira 
                qualidade, muitos importados diretamente do Japão.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
                <div className="text-center">
                  <span className="text-3xl md:text-4xl font-display font-bold text-primary">15+</span>
                  <p className="text-sm text-muted-foreground mt-1">Anos de Tradição</p>
                </div>
                <div className="text-center">
                  <span className="text-3xl md:text-4xl font-display font-bold text-primary">50+</span>
                  <p className="text-sm text-muted-foreground mt-1">Pratos no Cardápio</p>
                </div>
                <div className="text-center">
                  <span className="text-3xl md:text-4xl font-display font-bold text-primary">10k+</span>
                  <p className="text-sm text-muted-foreground mt-1">Clientes Felizes</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
