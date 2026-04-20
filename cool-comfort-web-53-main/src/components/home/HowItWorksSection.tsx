import { motion } from "framer-motion";
import { Phone, Search, Wrench, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Phone,
    step: "01",
    title: "Book a Service",
    desc: "Call us, WhatsApp, or book online. Tell us your AC problem and preferred time slot.",
  },
  {
    icon: Search,
    step: "02",
    title: "Expert Diagnosis",
    desc: "Our certified technician arrives at your doorstep, inspects the unit, and provides a transparent quote.",
  },
  {
    icon: Wrench,
    step: "03",
    title: "Precision Repair",
    desc: "Using advanced tools and genuine spare parts, we restore your AC to optimal performance.",
  },
  {
    icon: CheckCircle,
    step: "04",
    title: "Quality Assured",
    desc: "Final testing, cleanup, and a 90-day service warranty. Your comfort is fully restored.",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm tracking-wider uppercase">Our Process</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mt-3 mb-4">
            How It Works
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            From booking to restoration — a seamless 4-step process designed for your convenience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20" />
          
          {steps.map((item, i) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="text-center relative"
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-full gradient-primary flex items-center justify-center relative z-10 shadow-lg">
                <item.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <span className="text-primary/30 font-display font-bold text-6xl absolute -top-2 left-1/2 -translate-x-1/2 z-0 select-none">
                {item.step}
              </span>
              <h3 className="font-display font-semibold text-xl text-foreground mb-3 relative z-10">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed relative z-10">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
