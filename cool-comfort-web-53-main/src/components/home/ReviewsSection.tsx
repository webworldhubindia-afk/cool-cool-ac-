import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  { name: "Rajesh Kumar", rating: 5, text: "Exceptional service! The technicians arrived within 30 minutes and had our AC running perfectly. Highly recommend Cool & Cool for any AC issues.", location: "Mehrauli", service: "AC Repair" },
  { name: "Priya Sharma", rating: 5, text: "Professional team, transparent pricing, and excellent workmanship. They installed our new Daikin split AC system flawlessly. Very happy!", location: "Chhatarpur", service: "AC Installation" },
  { name: "Amit Verma", rating: 5, text: "24/7 emergency service that actually works. Called at midnight during summer and had a technician at my door in under an hour. Lifesavers!", location: "Andheria Mor", service: "Emergency Repair" },
  { name: "Sunita Gupta", rating: 5, text: "Their AMC plan is fantastic. Regular servicing keeps my office ACs running smoothly. No breakdowns in 2 years since I signed up.", location: "South Delhi", service: "Annual Maintenance" },
  { name: "Mohammed Arif", rating: 5, text: "Best AC service in Delhi! They cleaned and restored my 5-year-old Samsung AC to like-new condition. Cooling is much better now.", location: "Chatarpur Enclave", service: "AC Deep Cleaning" },
  { name: "Neha Agarwal", rating: 4, text: "Very professional and courteous technicians. They explained everything before starting the repair. Fair pricing with no hidden charges.", location: "Saket", service: "HVAC Repair" },
  { name: "Vikram Singh", rating: 5, text: "Installed 3 Blue Star ACs in our new office. Excellent coordination, neat wiring work, and perfect cooling. Will definitely use again.", location: "Vasant Kunj", service: "Commercial Installation" },
  { name: "Pooja Rani", rating: 5, text: "Gas refilling was done quickly and the AC is now cooling like day one. The technician was very knowledgeable and helpful. Great experience!", location: "Mehrauli", service: "Gas Charging" },
];

const ReviewsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm tracking-wider uppercase">Customer Reviews</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mt-3 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Join 2,500+ satisfied customers who trust Cool & Cool for their HVAC needs across Delhi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-card p-6 rounded-2xl card-pressure border border-border"
            >
              <div className="flex gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star
                    key={j}
                    className={`w-4 h-4 ${j < review.rating ? "fill-emergency text-emergency" : "text-border"}`}
                  />
                ))}
              </div>
              <p className="text-sm text-foreground/80 leading-relaxed mb-4">"{review.text}"</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-sm text-foreground">{review.name}</p>
                  <p className="text-xs text-muted-foreground">{review.location}</p>
                </div>
                <span className="text-[10px] px-2 py-1 rounded-full bg-primary/10 text-primary font-medium">{review.service}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
