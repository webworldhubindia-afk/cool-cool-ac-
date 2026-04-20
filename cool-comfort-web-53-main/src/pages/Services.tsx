import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Wrench, Fan, Thermometer, Wind, Snowflake, Flame, ShieldCheck, Zap,
  Building2, Droplets, Settings, ArrowRight, Filter, Gauge,
  AirVent, Heater, PenTool, Plug, Waves, MonitorSmartphone
} from "lucide-react";

const allServices = [
  { icon: Wrench, title: "Air Conditioning Repair", category: "Repair & Fix" },
  { icon: Settings, title: "A/C System Maintenance", category: "Maintenance" },
  { icon: Wrench, title: "A/C System Repair", category: "Repair & Fix" },
  { icon: Fan, title: "AC Installation", category: "Installation" },
  { icon: Filter, title: "A/C Filter Replacement", category: "Maintenance" },
  { icon: ShieldCheck, title: "A/C Preventive Maintenance", category: "Maintenance" },
  { icon: Settings, title: "A/C Services", category: "Repair & Fix" },
  { icon: PenTool, title: "A/C System Dismantlement", category: "Installation" },
  { icon: Wind, title: "A/C System Vent Cleaning", category: "Cleaning" },
  { icon: Snowflake, title: "Cleaning", category: "Cleaning" },
  { icon: Building2, title: "Commercial AC Services", category: "Commercial" },
  { icon: Fan, title: "Ductless Heating & AC", category: "Installation" },
  { icon: AirVent, title: "Ducts and Vents", category: "Cleaning" },
  { icon: Zap, title: "Emergency Service", category: "Repair & Fix" },
  { icon: Flame, title: "Heating", category: "Installation" },
  { icon: Flame, title: "Heating System Installation", category: "Installation" },
  { icon: Settings, title: "Heating System Maintenance", category: "Maintenance" },
  { icon: Wrench, title: "Heating System Repair", category: "Repair & Fix" },
  { icon: Wind, title: "HVAC Duct & Vent Cleaning", category: "Cleaning" },
  { icon: Plug, title: "HVAC Duct & Vent Installation", category: "Installation" },
  { icon: Wrench, title: "HVAC Duct & Vent Repair", category: "Repair & Fix" },
  { icon: Wrench, title: "HVAC Repair", category: "Repair & Fix" },
  { icon: Settings, title: "HVAC System Maintenance", category: "Maintenance" },
  { icon: Wrench, title: "HVAC System Repair", category: "Repair & Fix" },
  { icon: Fan, title: "Installation", category: "Installation" },
  { icon: MonitorSmartphone, title: "Online AC Booking", category: "Repair & Fix" },
  { icon: Fan, title: "Portable AC Services", category: "Repair & Fix" },
  { icon: Settings, title: "Repairs & Maintenance", category: "Maintenance" },
  { icon: Snowflake, title: "Residential AC Services", category: "Repair & Fix" },
  { icon: Thermometer, title: "Thermostat Installation", category: "Installation" },
  { icon: Thermometer, title: "Thermostat Repair", category: "Repair & Fix" },
  { icon: Waves, title: "Ventilated Ceiling Installation", category: "Installation" },
  { icon: Wrench, title: "Ventilated Ceiling Repairs", category: "Repair & Fix" },
  { icon: Waves, title: "Ventilated Ceilings", category: "Installation" },
  { icon: Droplets, title: "Water Heater Services", category: "Repair & Fix" },
];

const categories = ["All", "Repair & Fix", "Installation", "Maintenance", "Cleaning", "Commercial"];

import { useState } from "react";

const Services = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const filtered = activeCategory === "All" ? allServices : allServices.filter(s => s.category === activeCategory);

  return (
    <Layout>
      <section className="gradient-navy py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-4"
          >
            Our Services
          </motion.h1>
          <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
            35+ professional HVAC solutions for residential and commercial clients across Delhi.
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          {/* Filter */}
          <div className="flex flex-wrap gap-2 mb-12 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "gradient-primary text-primary-foreground"
                    : "bg-secondary text-foreground/70 hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.03 }}
                className="card-3d group"
              >
                <div className="bg-card rounded-2xl p-5 h-full border border-border card-pressure">
                  <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <service.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground mb-1">{service.title}</h3>
                  <span className="text-xs text-primary font-medium">{service.category}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/book-service" className="gradient-accent shimmer text-accent-foreground px-8 py-4 rounded-full font-semibold text-lg inline-flex items-center gap-2 hover:shadow-xl transition-shadow">
              Book a Service <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
