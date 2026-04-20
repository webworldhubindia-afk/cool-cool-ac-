import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { MapPin, Users, Wrench, ThumbsUp } from "lucide-react";

const stats = [
  { icon: ThumbsUp, value: 2500, suffix: "+", label: "Satisfied Customers" },
  { icon: Wrench, value: 5000, suffix: "+", label: "Services Completed" },
  { icon: Users, value: 35, suffix: "+", label: "Expert Technicians" },
  { icon: MapPin, value: 5, suffix: "", label: "Service Centers" },
];

const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!started) return;
    const step = Math.ceil(target / 60);
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev + step >= target) {
          clearInterval(interval);
          return target;
        }
        return prev + step;
      });
    }, 30);
    return () => clearInterval(interval);
  }, [started, target]);

  return (
    <motion.span
      onViewportEnter={() => setStarted(true)}
      className="font-display font-bold text-4xl md:text-5xl text-primary-foreground"
    >
      {count.toLocaleString()}{suffix}
    </motion.span>
  );
};

const StatsSection = () => {
  return (
    <section className="gradient-primary py-16 md:py-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-primary-foreground rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-primary-foreground rounded-full blur-3xl" />
      </div>
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-primary-foreground/10 flex items-center justify-center">
                <stat.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <Counter target={stat.value} suffix={stat.suffix} />
              <p className="text-primary-foreground/70 text-sm mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
