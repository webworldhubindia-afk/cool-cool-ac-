import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useState } from "react";

const addresses = [
  "Plot No. 1061B/3 Ground Floor Ward No 7, Nearby Manorama School of Fine Arts, Mehrauli Village Dargha Road, New Delhi 110030",
  "Shop No.4 Ground Floor, Behind Chhatarpur Metro Station Main Road",
  "Phase 2 Chatarpur Enclave, Dr Ambedkar Colony, Chattarpur Enclave, Chhatarpur, New Delhi 110074",
  "Shop No.2 Ground Floor, Metro Station Main Road, Nearby Alam Enterprise, Opposite Chattarpur Andheria Mor Village, Chhatarpur, New Delhi 110074",
  "Shop No. A21 Ground Floor, Metro Station Main Road, Nearby Delhi Glass Studio, Opposite Chattarpur Andheria Mor Village, Dr Ambedkar Colony, Chhatarpur, South Delhi 110074",
];

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", phone: "", service: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Name: ${formData.name}%0APhone: ${formData.phone}%0AService: ${formData.service}%0AMessage: ${formData.message}`;
    window.open(`https://wa.me/919999443914?text=${text}`, "_blank");
  };

  return (
    <Layout>
      <section className="gradient-navy py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-4"
          >
            Contact Us
          </motion.h1>
          <p className="text-primary-foreground/70 text-lg">Get in touch for any HVAC needs. We're here 24/7.</p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="font-display font-bold text-2xl text-foreground mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  maxLength={100}
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-secondary text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  required
                  maxLength={15}
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-secondary text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <select
                  required
                  value={formData.service}
                  onChange={(e) => setFormData({...formData, service: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-secondary text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Select Service Required</option>
                  <option value="AC Repair">AC Repair</option>
                  <option value="AC Installation">AC Installation</option>
                  <option value="HVAC Maintenance">HVAC Maintenance</option>
                  <option value="Duct Cleaning">Duct Cleaning</option>
                  <option value="Emergency Service">Emergency Service</option>
                  <option value="Heating Services">Heating Services</option>
                  <option value="Commercial HVAC">Commercial HVAC</option>
                  <option value="Other">Other</option>
                </select>
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  maxLength={1000}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-secondary text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                />
                <button type="submit" className="gradient-accent shimmer text-accent-foreground px-8 py-3 rounded-full font-semibold hover:shadow-xl transition-shadow w-full md:w-auto">
                  Send via WhatsApp
                </button>
              </form>
            </motion.div>

            {/* Info */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
              <h2 className="font-display font-bold text-2xl text-foreground mb-6">Contact Information</h2>
              
              <div className="space-y-4">
                <a href="tel:+919999443914" className="flex items-center gap-3 p-4 rounded-xl bg-secondary hover:bg-ice transition-colors">
                  <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">+91 9999443914</p>
                    <p className="text-xs text-muted-foreground">+91 9999438303</p>
                  </div>
                </a>

                <a href="mailto:Info@coolandcoolacrepairservice.co.in" className="flex items-center gap-3 p-4 rounded-xl bg-secondary hover:bg-ice transition-colors">
                  <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Info@coolandcoolacrepairservice.co.in</p>
                    <p className="text-xs text-muted-foreground">Coolandcoolacrepairservice@gmail.com</p>
                  </div>
                </a>

                <div className="flex items-center gap-3 p-4 rounded-xl bg-secondary">
                  <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">24/7 Available</p>
                    <p className="text-xs text-muted-foreground">Emergency service anytime</p>
                  </div>
                </div>
              </div>

              <h3 className="font-display font-semibold text-lg text-foreground mt-8">Our Locations</h3>
              <div className="space-y-3">
                {addresses.map((addr, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>{addr}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Maps */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="font-display font-bold text-2xl text-foreground text-center mb-10">Find Us on the Map</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl overflow-hidden shadow-lg h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.5!2d77.18!3d28.52!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDMxJzEyLjAiTiA3N8KwMTAnNDguMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Cool & Cool Location 1"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.5!2d77.17!3d28.51!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDMwJzM2LjAiTiA3N8KwMTAnMTIuMCJF!5e0!3m2!1sen!2sin!4v1234567891"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Cool & Cool Location 2"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
