import { motion } from "framer-motion";
import { Camera, Star, Award } from "lucide-react";
import whatsappImage from "@/assets/WhatsApp Image 2026-04-20 at 3.53.46 PM (1).jpeg";

const ShowcaseSection = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-secondary via-background to-secondary relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Camera className="w-6 h-6 text-primary" />
            <span className="text-primary font-semibold text-sm tracking-wider uppercase">
              Recent Work
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Quality Service in Action
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            See our expert technicians delivering professional HVAC solutions with precision and care
          </p>
        </motion.div>

        {/* Image Showcase */}
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            {/* Main Image Container */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-card">
              <img
                src={whatsappImage}
                alt="Cool & Cool AC Repair Service - Recent Work"
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Floating Badge - Top Left */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -top-4 -left-4 glass-card p-4 rounded-2xl shadow-xl backdrop-blur-md"
            >
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center">
                  <Star className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-bold text-foreground text-sm">5-Star Service</p>
                  <p className="text-xs text-muted-foreground">Certified Quality</p>
                </div>
              </div>
            </motion.div>

            {/* Floating Badge - Bottom Right */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-4 -right-4 glass-card p-4 rounded-2xl shadow-xl backdrop-blur-md"
            >
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full gradient-accent flex items-center justify-center">
                  <Award className="w-5 h-5 text-accent-foreground" />
                </div>
                <div>
                  <p className="font-bold text-foreground text-sm">Udyam Registered</p>
                  <p className="text-xs text-muted-foreground">Government Certified</p>
                </div>
              </div>
            </motion.div>

            {/* Decorative Elements */}
            <div className="absolute -z-10 -top-8 -right-8 w-32 h-32 gradient-primary rounded-3xl opacity-20 blur-xl" />
            <div className="absolute -z-10 -bottom-8 -left-8 w-40 h-40 gradient-accent rounded-3xl opacity-20 blur-xl" />
          </motion.div>

          {/* Features Below Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
          >
            {[
              {
                title: "Professional Excellence",
                description: "Every project executed with certified expertise and attention to detail",
                icon: "🔧",
              },
              {
                title: "Customer Satisfaction",
                description: "Delivering results that exceed expectations every single time",
                icon: "⭐",
              },
              {
                title: "Trusted Service",
                description: "Udyam-registered company with transparent and reliable operations",
                icon: "✓",
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="bg-card rounded-2xl p-6 border border-border card-pressure hover:shadow-lg transition-all duration-300"
              >
                <div className="text-3xl mb-3">{feature.icon}</div>
                <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
