import { motion } from "framer-motion";

const brands = [
  "Samsung", "LG", "Daikin", "Voltas", "Blue Star", "Hitachi",
  "Carrier", "Whirlpool", "Godrej", "Panasonic", "Haier", "Lloyd",
  "Mitsubishi", "Toshiba", "O General", "Midea",
];

const BrandsSection = () => {
  return (
    <section className="py-16 md:py-20 bg-background border-y border-border">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-10">
          <span className="text-primary font-semibold text-sm tracking-wider uppercase">Trusted Expertise</span>
          <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground mt-2">
            We Service All Major AC Brands
          </h2>
        </div>
        <div className="grid grid-cols-4 md:grid-cols-8 gap-4 md:gap-6">
          {brands.map((brand, i) => (
            <motion.div
              key={brand}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
              className="flex items-center justify-center p-3 md:p-4 rounded-xl bg-secondary/50 hover:bg-ice hover:shadow-md transition-all cursor-default group"
            >
              <span className="font-display font-semibold text-xs md:text-sm text-muted-foreground group-hover:text-primary transition-colors text-center">
                {brand}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
