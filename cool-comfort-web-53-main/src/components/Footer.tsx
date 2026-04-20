import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Youtube, Instagram, Linkedin, Twitter, Facebook } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="gradient-navy text-primary-foreground">
      <div className="container mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="Cool & Cool" className="h-10 w-auto brightness-200" />
              <div>
                <p className="font-display font-bold text-lg">Cool & Cool</p>
                <p className="text-xs opacity-60">AC Repair Service</p>
              </div>
            </div>
            <p className="text-sm opacity-70 leading-relaxed mb-4">
              Professional HVAC Engineering for the Modern Delhi Home. From Mehrauli to Chhatarpur, we provide 24/7 emergency restoration with certified expertise.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Youtube, href: "https://youtube.com" },
                { icon: Instagram, href: "https://instagram.com" },
                { icon: Linkedin, href: "https://linkedin.com" },
                { icon: Twitter, href: "https://twitter.com" },
                { icon: Facebook, href: "https://facebook.com" },
              ].map(({ icon: Icon, href }) => (
                <a key={href} href={href} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-primary-foreground/20 flex items-center justify-center opacity-60 hover:opacity-100 hover:border-primary transition-all">
                  <Icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Quick Links</h4>
            <div className="space-y-2">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Gallery", path: "/gallery" },
                { name: "Certificates", path: "/certificates" },
                { name: "Contact", path: "/contact" },
                { name: "Book Service", path: "/book-service" },
              ].map((link) => (
                <Link key={link.path} to={link.path} className="block text-sm opacity-60 hover:opacity-100 transition-opacity">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Our Services</h4>
            <div className="space-y-2">
              {["AC Repair", "AC Installation", "HVAC Maintenance", "Duct Cleaning", "Emergency Service", "Commercial HVAC"].map((s) => (
                <p key={s} className="text-sm opacity-60">{s}</p>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Contact Us</h4>
            <div className="space-y-3">
              <a href="tel:+919999443914" className="flex items-center gap-2 text-sm opacity-70 hover:opacity-100">
                <Phone className="w-4 h-4 shrink-0" /> +91 9999443914
              </a>
              <a href="tel:+919999438303" className="flex items-center gap-2 text-sm opacity-70 hover:opacity-100">
                <Phone className="w-4 h-4 shrink-0" /> +91 9999438303
              </a>
              <a href="mailto:Info@coolandcoolacrepairservice.co.in" className="flex items-start gap-2 text-sm opacity-70 hover:opacity-100">
                <Mail className="w-4 h-4 shrink-0 mt-0.5" /> Info@coolandcoolacrepairservice.co.in
              </a>
              <div className="flex items-start gap-2 text-sm opacity-70">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                <span>Mehrauli Village, New Delhi 110030</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs opacity-50">© 2024 Cool & Cool AC Repair Service. All rights reserved.</p>
          <div className="flex gap-4 text-xs opacity-50">
            <span>Udyam: UDYAM-DL-03-0076741</span>
            <span>NCS ID: E21C60-1748301641406</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
