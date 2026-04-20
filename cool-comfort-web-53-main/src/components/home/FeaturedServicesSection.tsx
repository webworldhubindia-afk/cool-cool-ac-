import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import serviceRepair from "@/assets/service-repair.jpg";
import serviceInstall from "@/assets/service-install.jpg";
import serviceMaintenance from "@/assets/service-maintenance.jpg";
import commercialHvac from "@/assets/commercial-hvac.jpg";

const featured = [
  {
    image: serviceRepair,
    title: "AC Repair & Restoration",
    desc: "Expert diagnosis and rapid restoration of all AC brands including Samsung, LG, Daikin, Voltas, Blue Star, Hitachi, and more. Our technicians arrive within 60 minutes for emergency calls across Mehrauli, Chhatarpur, and all South Delhi.",
    features: ["All Major Brands", "60-Min Response", "90-Day Warranty"],
  },
  {
    image: serviceInstall,
    title: "AC Installation & Setup",
    desc: "Precision installation of split AC, window AC, cassette AC, and central air conditioning systems. We handle everything from site survey to final commissioning with proper gas charging and electrical work.",
    features: ["Free Site Survey", "Same-Day Install", "Expert Fitting"],
  },
  {
    image: serviceMaintenance,
    title: "Preventive Maintenance Plans",
    desc: "Keep your HVAC systems running at peak efficiency with our comprehensive annual maintenance contracts (AMC). Regular servicing prevents costly breakdowns and extends equipment life by up to 40%.",
    features: ["Annual AMC Plans", "Filter Cleaning", "Gas Top-Up"],
  },
  {
    image: commercialHvac,
    title: "Commercial HVAC Solutions",
    desc: "Large-scale climate engineering for offices, showrooms, restaurants, and industrial spaces. From VRV/VRF systems to centralized air conditioning, we design, install, and maintain commercial HVAC infrastructure.",
    features: ["VRV/VRF Systems", "Central AC", "24/7 Support"],
  },
];

const FeaturedServicesSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm tracking-wider uppercase">Featured Services</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mt-3 mb-4">
            What We Do Best
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive HVAC solutions tailored for Delhi's unique climate demands — from scorching summers to chilly winters.
          </p>
        </div>

        <div className="space-y-16">
          {featured.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`grid lg:grid-cols-2 gap-8 md:gap-12 items-center ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
            >
              <div className={`${i % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="relative group overflow-hidden rounded-3xl">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-72 md:h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
                </div>
              </div>
              <div className={`${i % 2 === 1 ? "lg:order-1" : ""}`}>
                <h3 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-4">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{item.desc}</p>
                <div className="flex flex-wrap gap-3 mb-6">
                  {item.features.map((f) => (
                    <span key={f} className="px-4 py-2 rounded-full bg-secondary text-primary text-sm font-medium border border-primary/20">
                      {f}
                    </span>
                  ))}
                </div>
                <Link to="/book-service" className="inline-flex items-center gap-2 gradient-primary text-primary-foreground px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-shadow">
                  Book This Service <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedServicesSection;
