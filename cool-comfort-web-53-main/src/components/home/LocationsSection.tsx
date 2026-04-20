import { motion } from "framer-motion";
import { MapPin, Phone } from "lucide-react";

const locations = [
  { area: "Mehrauli", address: "Plot No. 1061B/3, Ward No 7, Nearby Manorama School of Fine Arts, Mehrauli Village" },
  { area: "Chhatarpur Metro", address: "Shop No.4, Ground Floor, Behind Chhatarpur Metro Station Main Road" },
  { area: "Chatarpur Enclave", address: "Phase 2, Dr Ambedkar Colony, Chattarpur Enclave, New Delhi 110074" },
  { area: "Andheria Mor", address: "Shop No.2, Metro Station Main Road, Nearby Alam Enterprise, Opposite Chattarpur" },
  { area: "South Delhi", address: "Shop No. A21, Metro Station Main Road, Nearby Delhi Glass Studio, Chhatarpur" },
];

const LocationsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm tracking-wider uppercase">Our Locations</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mt-3 mb-4">
            5 Service Centers Across South Delhi
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Strategically located to ensure the fastest response times anywhere in South Delhi. One call, and we're there.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map((loc, i) => (
            <motion.div
              key={loc.area}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-2xl p-6 border border-border card-pressure group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <MapPin className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg text-foreground mb-1">{loc.area}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">{loc.address}</p>
                  <a href="tel:+919999443914" className="inline-flex items-center gap-1 text-primary text-sm font-medium hover:underline">
                    <Phone className="w-3.5 h-3.5" /> Call this center
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;
