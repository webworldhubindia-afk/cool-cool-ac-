import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import precisionRepair from "@/assets/precision-repair.jpg";
import serviceRepair from "@/assets/service-repair.jpg";

const images = [
  { src: gallery1, alt: "AC Filter Replacement", span: "" },
  { src: precisionRepair, alt: "Precision Circuit Repair", span: "md:col-span-2" },
  { src: gallery3, alt: "Duct Cleaning Service", span: "" },
  { src: gallery4, alt: "Split AC Unit Installation", span: "" },
  { src: serviceRepair, alt: "Digital AC Diagnostics", span: "" },
  { src: gallery5, alt: "Smart Thermostat Setup", span: "md:col-span-2" },
  { src: gallery2, alt: "Commercial HVAC System", span: "" },
  { src: gallery6, alt: "Water Heater Service", span: "" },
];

const GallerySection = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm tracking-wider uppercase">Our Work</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mt-3 mb-4">
            Precision in Every Project
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Browse through our portfolio of completed AC repairs, installations, and HVAC projects across Delhi.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className={`relative group overflow-hidden rounded-2xl cursor-pointer ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-48 md:h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/60 transition-colors duration-300 flex items-end p-4">
                <span className="text-primary-foreground font-medium text-sm opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  {img.alt}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 gradient-primary text-primary-foreground px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-shadow"
          >
            View Full Gallery
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
