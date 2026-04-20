import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Phone, ArrowRight } from "lucide-react";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const slides = [
  {
    image: hero1,
    title: "Delhi's Heat is Relentless.",
    highlight: "Your AC Shouldn't Be.",
    subtitle: "Professional HVAC restoration with Udyam-certified expertise across South Delhi.",
  },
  {
    image: hero2,
    title: "Precision-Engineered",
    highlight: "Climate Control.",
    subtitle: "From Mehrauli to Chhatarpur — 24/7 emergency AC repair and installation services.",
  },
  {
    image: hero3,
    title: "Emergency Repairs.",
    highlight: "Anytime. Anywhere.",
    subtitle: "Certified technicians ready to restore your comfort within the hour.",
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
      setProgress(0);
    }, 6000);

    const progressInterval = setInterval(() => {
      setProgress((prev) => Math.min(prev + 1.67, 100));
    }, 100);

    return () => {
      clearInterval(interval);
      clearInterval(progressInterval);
    };
  }, [current]);

  return (
    <section className="relative h-[600px] md:h-[700px] lg:h-[85vh] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <img
            src={slides[current].image}
            alt="HVAC Service"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/60 to-transparent" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 container mx-auto px-4 md:px-8 h-full flex items-center">
        <div className="max-w-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-7xl text-primary-foreground leading-[1.1] mb-6">
                {slides[current].title}
                <br />
                <span className="text-gradient-primary">{slides[current].highlight}</span>
              </h1>
              <p className="text-primary-foreground/70 text-lg md:text-xl mb-8 max-w-lg">
                {slides[current].subtitle}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/book-service"
              className="gradient-accent shimmer inline-flex items-center justify-center gap-2 text-accent-foreground px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-shadow"
            >
              Book Service Now
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:+919999443914"
              className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary/10 transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
          </div>
        </div>
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary-foreground/10 z-10">
        <motion.div
          className="h-full gradient-primary"
          style={{ width: `${progress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-6 right-8 flex gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => { setCurrent(i); setProgress(0); }}
            className={`w-2 h-2 rounded-full transition-all ${
              i === current ? "bg-primary w-8" : "bg-primary-foreground/30"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
