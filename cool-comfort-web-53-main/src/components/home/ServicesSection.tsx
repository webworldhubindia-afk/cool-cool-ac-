import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Wrench, Fan, Thermometer, Wind, Snowflake, Flame,
  ShieldCheck, Zap, Building2, Droplets, Settings, ArrowRight,
} from "lucide-react";

const services = [
  { icon: Wrench, title: "AC Repair", desc: "Expert diagnosis and restoration of all AC brands and models." },
  { icon: Fan, title: "AC Installation", desc: "Precision installation for split, window, and central AC systems." },
  { icon: Settings, title: "HVAC Maintenance", desc: "Comprehensive maintenance plans to optimize system performance." },
  { icon: Wind, title: "Duct & Vent Cleaning", desc: "Professional cleaning for improved air quality and efficiency." },
  { icon: Snowflake, title: "AC Filter Replacement", desc: "Premium filter replacements for all unit types." },
  { icon: Flame, title: "Heating Services", desc: "Complete heating system installation, repair, and maintenance." },
  { icon: Building2, title: "Commercial HVAC", desc: "Large-scale climate solutions for offices and commercial spaces." },
  { icon: Zap, title: "Emergency Service", desc: "24/7 rapid response for urgent AC and heating breakdowns." },
  { icon: Thermometer, title: "Thermostat Services", desc: "Smart thermostat installation and calibration for optimal control." },
  { icon: Droplets, title: "Water Heater Services", desc: "Installation and repair of water heating systems." },
  { icon: ShieldCheck, title: "Preventive Maintenance", desc: "Scheduled maintenance programs to prevent costly breakdowns." },
  { icon: Fan, title: "Portable AC Services", desc: "Setup, maintenance, and repair of portable cooling units." },
];

const ServicesSection = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm tracking-wider uppercase">Our Services</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mt-3 mb-4">
            35+ Professional HVAC Solutions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From emergency AC restoration to complete HVAC system installations — we deliver precision climate engineering for every need.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="card-3d group"
            >
              <div className="bg-card rounded-3xl p-6 h-full border border-border card-pressure cursor-pointer relative overflow-hidden">
                <div className="w-12 h-12 rounded-2xl gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-display font-semibold text-lg text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
                
                <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 p-4">
                  <Link to="/book-service" className="gradient-accent text-accent-foreground text-sm font-semibold py-2 px-4 rounded-full inline-flex items-center gap-1">
                    Quick Book <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 border-2 border-primary text-primary px-8 py-3 rounded-full font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            View All Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
