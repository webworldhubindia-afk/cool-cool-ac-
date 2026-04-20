import { motion } from "framer-motion";
import { Clock, BadgeCheck, Banknote, Zap } from "lucide-react";

const reasons = [
  {
    icon: Clock,
    title: "24/7 Emergency Service",
    desc: "Round-the-clock availability for urgent AC breakdowns. We respond within the hour, day or night.",
  },
  {
    icon: BadgeCheck,
    title: "Certified Technicians",
    desc: "Udyam-registered, NCS-verified team of HVAC professionals with years of field expertise.",
  },
  {
    icon: Banknote,
    title: "Affordable Pricing",
    desc: "Transparent, competitive pricing with no hidden charges. Quality service that fits your budget.",
  },
  {
    icon: Zap,
    title: "Fast Restoration",
    desc: "Swift diagnosis and repair using advanced tools. Most issues resolved in a single visit.",
  },
];

const WhyChooseUsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm tracking-wider uppercase">Why Choose Us</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mt-3 mb-4">
            Trusted by Hundreds Across Delhi
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center group"
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-secondary flex items-center justify-center group-hover:gradient-primary transition-all duration-300">
                <reason.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-display font-semibold text-xl text-foreground mb-3">{reason.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{reason.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
