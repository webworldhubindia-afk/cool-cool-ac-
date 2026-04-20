import { motion } from "framer-motion";
import beforeAfter from "@/assets/before-after.jpg";
import happyFamily from "@/assets/happy-family.jpg";

const BeforeAfterSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm tracking-wider uppercase">Results That Speak</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mt-3 mb-4">
            The Cool & Cool Difference
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            See the dramatic transformation our expert technicians deliver — cleaner units, colder air, and happier homes.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden shadow-xl relative group"
          >
            <img src={beforeAfter} alt="Before and After AC Service" className="w-full h-80 md:h-96 object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-navy/80 to-transparent">
              <h3 className="font-display font-bold text-xl text-primary-foreground">Before & After Restoration</h3>
              <p className="text-primary-foreground/70 text-sm mt-1">Complete outdoor unit cleaning and restoration service</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden shadow-xl relative group"
          >
            <img src={happyFamily} alt="Happy Family with Cool AC" className="w-full h-80 md:h-96 object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-navy/80 to-transparent">
              <h3 className="font-display font-bold text-xl text-primary-foreground">Comfort Restored</h3>
              <p className="text-primary-foreground/70 text-sm mt-1">Families enjoying perfectly cooled homes across Delhi</p>
            </div>
          </motion.div>
        </div>

        {/* Trust badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {[
            { number: "60 min", label: "Average Response Time" },
            { number: "98%", label: "First-Visit Fix Rate" },
            { number: "90 days", label: "Service Warranty" },
            { number: "₹0", label: "Diagnostic Fee" },
          ].map((badge, i) => (
            <motion.div
              key={badge.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center p-6 rounded-2xl bg-secondary border border-border"
            >
              <p className="font-display font-bold text-2xl md:text-3xl text-primary">{badge.number}</p>
              <p className="text-xs md:text-sm text-muted-foreground mt-1">{badge.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
