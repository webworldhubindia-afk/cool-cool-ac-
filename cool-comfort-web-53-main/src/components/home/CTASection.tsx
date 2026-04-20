import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import serviceVan from "@/assets/service-van.jpg";

const CTASection = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="relative rounded-3xl overflow-hidden">
          <img src={serviceVan} alt="Cool & Cool Service" className="w-full h-[400px] md:h-[450px] object-cover" />
          <div className="absolute inset-0 gradient-navy opacity-85" />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-8 md:px-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-xl"
              >
                <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-primary-foreground mb-4 leading-tight">
                  Ready to Experience
                  <br />
                  <span className="text-gradient-primary">Premium Comfort?</span>
                </h2>
                <p className="text-primary-foreground/70 text-lg mb-8">
                  Schedule your AC service today and join 2,500+ satisfied customers across Delhi who trust Cool & Cool for their HVAC needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/book-service"
                    className="gradient-accent shimmer inline-flex items-center justify-center gap-2 text-accent-foreground px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-shadow"
                  >
                    Book Now <ArrowRight className="w-5 h-5" />
                  </Link>
                  <a
                    href="tel:+919999443914"
                    className="inline-flex items-center justify-center gap-2 border-2 border-primary-foreground/30 text-primary-foreground px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary-foreground/10 transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    +91 9999443914
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
