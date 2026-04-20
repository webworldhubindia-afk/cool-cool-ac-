import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Shield, Award, Clock, Users, Target, Heart } from "lucide-react";
import aboutTeam from "@/assets/about-team.jpg";
import gallery2 from "@/assets/gallery-2.jpg";

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="gradient-navy py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-4"
          >
            About Cool & Cool
          </motion.h1>
          <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
            Udyam-registered HVAC specialists delivering precision climate solutions across South Delhi since day one.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-6">Our Story</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Cool & Cool AC Repair Service was founded with a simple mission: to provide Delhi's residents and businesses with reliable, professional HVAC services they can trust. We are a Udyam-registered company (UDYAM-DL-03-0076741) committed to excellence.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                With 5 service centers strategically located across South Delhi — from Mehrauli to Chhatarpur — we ensure rapid response times and comprehensive coverage for all your climate control needs.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our NCS-verified team (NCS ID: E21C60-1748301641406) brings certified expertise to every job, whether it's an emergency midnight repair or a complete commercial HVAC installation.
              </p>
            </motion.div>
            <motion.img
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              src={aboutTeam}
              alt="Our Team"
              className="rounded-3xl shadow-2xl w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground text-center mb-16">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Target, title: "Precision", desc: "Every repair is performed with meticulous attention to detail and calibrated accuracy." },
              { icon: Shield, title: "Reliability", desc: "Udyam-certified operations backed by transparent processes and guaranteed results." },
              { icon: Heart, title: "Customer First", desc: "Your comfort drives every decision we make, from response time to pricing." },
              { icon: Clock, title: "24/7 Availability", desc: "Climate emergencies don't follow a schedule, and neither do we." },
              { icon: Award, title: "Excellence", desc: "Continuous training ensures our team stays ahead of the latest HVAC technologies." },
              { icon: Users, title: "Community", desc: "Proudly serving 5 locations across South Delhi with deep local expertise." },
            ].map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-3xl p-8 border border-border card-pressure"
              >
                <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center mb-4">
                  <v.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-display font-semibold text-xl text-foreground mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="relative rounded-3xl overflow-hidden">
            <img src={gallery2} alt="Commercial HVAC" className="w-full h-64 md:h-80 object-cover" />
            <div className="absolute inset-0 gradient-navy opacity-80" />
            <div className="absolute inset-0 flex items-center justify-center text-center p-8">
              <div>
                <h2 className="font-display font-bold text-3xl md:text-4xl text-primary-foreground mb-4">Ready to Experience the Difference?</h2>
                <a href="tel:+919999443914" className="gradient-accent text-accent-foreground px-8 py-4 rounded-full font-semibold text-lg inline-block hover:shadow-xl transition-shadow">
                  Call Us Today
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
