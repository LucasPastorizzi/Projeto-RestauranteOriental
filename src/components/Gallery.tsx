import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import heroImage from "@/assets/hero-sushi.jpg";
import interiorImage from "@/assets/restaurant-interior.jpg";
import chefImage from "@/assets/chef.jpg";
import sushiRollsImage from "@/assets/sushi-rolls.jpg";
import sashimiImage from "@/assets/sashimi.jpg";
import temakiImage from "@/assets/temaki.jpg";
import buffetImage from "@/assets/buffet.jpg";

const galleryImages = [
  { src: heroImage, alt: "Sushi premium em ardósia", caption: "Nigiri Selection" },
  { src: interiorImage, alt: "Ambiente sofisticado", caption: "Nosso Ambiente" },
  { src: chefImage, alt: "Chef em ação", caption: "Arte Culinária" },
  { src: sushiRollsImage, alt: "Variedade de rolls", caption: "Special Rolls" },
  { src: sashimiImage, alt: "Sashimi fresco", caption: "Sashimi Premium" },
  { src: temakiImage, alt: "Temaki artesanal", caption: "Temaki Especial" },
  { src: buffetImage, alt: "Buffet variado", caption: "Buffet Completo" },
];

const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const plugin = useRef(Autoplay({ delay: 4000, stopOnInteraction: true }));

  return (
    <section id="gallery" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4 block">
            Momentos Especiais
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-4">
            Nossa <span className="text-primary">Galeria</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Conheça nosso ambiente acolhedor e os pratos que fazem do Tsuru uma experiência única
          </p>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Carousel
            plugins={[plugin.current]}
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="-ml-4">
              {galleryImages.map((image, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="group relative overflow-hidden rounded-xl aspect-[4/3]">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-foreground font-display text-lg font-semibold">
                        {image.caption}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-4 bg-card border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground" />
            <CarouselNext className="hidden md:flex -right-4 bg-card border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground" />
          </Carousel>
        </motion.div>

        {/* Grid Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {galleryImages.slice(0, 4).map((image, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-lg ${
                index === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                  index === 0 ? "h-full min-h-[300px]" : "h-48"
                }`}
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
