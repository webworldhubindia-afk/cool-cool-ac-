import { motion } from "framer-motion";
import { Phone, AlertTriangle } from "lucide-react";

const EmergencyBanner = () => {
  return (
    <section className="gradient-accent py-16 md:py-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary-foreground rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-foreground rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 bg-primary-foreground/20 text-primary-foreground px-4 py-2 rounded-full text-sm font-medium mb-6">
            <AlertTriangle className="w-4 h-4" />
            Emergency AC Breakdown?
          </div>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-primary-foreground mb-4">
            Don't Sweat It. Call Us Now.
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
            Our emergency response team is available 24/7 across all South Delhi locations. Most issues resolved within the hour.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919999443914"
              className="inline-flex items-center justify-center gap-2 bg-primary-foreground text-emergency px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-shadow"
            >
              <Phone className="w-5 h-5" />
              +91 9999443914
            </a>
            <a
              href="https://wa.me/919999443914"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border-2 border-primary-foreground text-primary-foreground px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-foreground/10 transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EmergencyBanner;
