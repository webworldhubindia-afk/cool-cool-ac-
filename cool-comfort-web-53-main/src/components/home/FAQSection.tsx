import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How quickly can you respond to an emergency AC breakdown?",
    a: "We guarantee response within 60 minutes for all emergency calls across South Delhi. Our technicians are stationed at 5 locations to ensure the fastest possible response time, 24/7 including holidays.",
  },
  {
    q: "What AC brands do you service?",
    a: "We service all major brands including Samsung, LG, Daikin, Voltas, Blue Star, Hitachi, Carrier, Whirlpool, Godrej, Panasonic, Haier, Lloyd, Mitsubishi, Toshiba, O General, and Midea.",
  },
  {
    q: "Do you offer annual maintenance contracts (AMC)?",
    a: "Yes! Our AMC plans include regular servicing, filter cleaning, gas top-ups, and priority emergency support. Plans start from just ₹2,499/year for residential units and ₹9,999/year for commercial setups.",
  },
  {
    q: "What warranty do you provide on repairs?",
    a: "All our repair services come with a 90-day warranty. If the same issue recurs within the warranty period, we'll fix it completely free of charge. Spare parts carry the manufacturer's original warranty.",
  },
  {
    q: "Do you charge for diagnosis or site visits?",
    a: "No! We offer free diagnostic visits across all our service areas in South Delhi. You only pay if you choose to proceed with the repair, and we always provide a transparent quote before starting any work.",
  },
  {
    q: "What areas do you serve?",
    a: "We serve all of South Delhi including Mehrauli, Chhatarpur, Andheria Mor, Chattarpur Enclave, Saket, Vasant Kunj, Hauz Khas, and surrounding areas. With 5 service centers, no location is too far.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-8 max-w-3xl">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm tracking-wider uppercase">FAQ</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mt-3 mb-4">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="border border-border rounded-2xl overflow-hidden bg-card"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 md:p-6 text-left"
              >
                <span className="font-display font-semibold text-foreground pr-4">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-primary shrink-0 transition-transform ${openIndex === i ? "rotate-180" : ""}`} />
              </button>
              {openIndex === i && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="px-5 md:px-6 pb-5 md:pb-6"
                >
                  <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
