import { motion } from "framer-motion";
import { Shield, Award, Clock, Users } from "lucide-react";
import aboutTeam from "@/assets/about-team.jpg";

const AboutSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-semibold text-sm tracking-wider uppercase">About Us</span>
            <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mt-3 mb-6">
              Professional HVAC Engineering for the Modern Delhi Home
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Cool & Cool AC Repair Service is a Udyam-registered HVAC company serving residential and commercial clients across South Delhi. With 5 service centers from Mehrauli to Chhatarpur, we deliver precision climate solutions backed by certified expertise.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our team of certified technicians provides 24/7 emergency restoration, preventive maintenance, and complete HVAC system installations with guaranteed satisfaction.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Shield, label: "Udyam Certified" },
                { icon: Award, label: "5-Star Rated" },
                { icon: Clock, label: "24/7 Available" },
                { icon: Users, label: "Expert Technicians" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3 p-3 rounded-xl bg-secondary">
                  <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <img
              src={aboutTeam}
              alt="Cool & Cool Expert Technicians"
              className="rounded-3xl shadow-2xl w-full object-cover h-[400px] md:h-[500px]"
            />
            <div className="absolute -bottom-6 -left-6 glass-card p-6 rounded-2xl shadow-xl">
              <p className="font-display font-bold text-3xl text-primary">500+</p>
              <p className="text-sm text-muted-foreground">Happy Customers</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
