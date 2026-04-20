import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import aboutTeam from "@/assets/about-team.jpg";

const images = [
  { src: hero1, alt: "AC Installation Service", category: "Installation" },
  { src: gallery1, alt: "AC Filter Replacement", category: "Maintenance" },
  { src: gallery2, alt: "Commercial HVAC Systems", category: "Commercial" },
  { src: gallery3, alt: "Duct Cleaning Service", category: "Cleaning" },
  { src: hero2, alt: "HVAC Equipment", category: "Commercial" },
  { src: gallery4, alt: "Split AC Unit", category: "Installation" },
  { src: gallery5, alt: "Smart Thermostat", category: "Installation" },
  { src: hero3, alt: "Emergency Night Repair", category: "Repair" },
  { src: gallery6, alt: "Water Heater System", category: "Installation" },
  { src: aboutTeam, alt: "Our Expert Team", category: "Team" },
];

const Gallery = () => {
  return (
    <Layout>
      <section className="gradient-navy py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-4"
          >
            Our Gallery
          </motion.h1>
          <p className="text-primary-foreground/70 text-lg">
            See our work across Delhi — from residential repairs to commercial installations.
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {images.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="break-inside-avoid group relative overflow-hidden rounded-2xl"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/50 transition-colors duration-300 flex items-end p-4">
                  <div className="opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <span className="text-primary-foreground font-medium text-sm">{img.alt}</span>
                    <span className="block text-primary text-xs mt-1">{img.category}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;
