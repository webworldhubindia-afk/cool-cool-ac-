import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, ArrowLeft, CheckCircle } from "lucide-react";

const serviceOptions = [
  "AC Repair", "AC Installation", "HVAC Maintenance", "Duct Cleaning",
  "Emergency Service", "Heating Services", "Thermostat Services",
  "Commercial HVAC", "Water Heater", "Other",
];

const BookService = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    service: "",
    name: "",
    phone: "",
    email: "",
    address: "",
    preferredDate: "",
    preferredTime: "",
    message: "",
  });

  const handleSubmit = () => {
    const text = encodeURIComponent(
      `Service: ${formData.service}\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nAddress: ${formData.address}\nDate: ${formData.preferredDate}\nTime: ${formData.preferredTime}\nMessage: ${formData.message}`
    );
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
            Book a Service
          </motion.h1>
          <p className="text-primary-foreground/70 text-lg">3 simple steps to schedule your HVAC service.</p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 md:px-8 max-w-2xl">
          {/* Progress */}
          <div className="flex items-center justify-center gap-4 mb-12">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center gap-2">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${
                  step >= s ? "gradient-primary text-primary-foreground" : "bg-secondary text-muted-foreground"
                }`}>
                  {step > s ? <CheckCircle className="w-5 h-5" /> : s}
                </div>
                {s < 3 && <div className={`w-12 h-0.5 ${step > s ? "bg-primary" : "bg-border"}`} />}
              </div>
            ))}
          </div>

          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-card rounded-3xl p-8 border border-border shadow-lg"
          >
            {step === 1 && (
              <div>
                <h2 className="font-display font-bold text-2xl text-foreground mb-6">Select Service</h2>
                <div className="grid grid-cols-2 gap-3">
                  {serviceOptions.map((s) => (
                    <button
                      key={s}
                      onClick={() => setFormData({...formData, service: s})}
                      className={`p-3 rounded-xl text-sm font-medium border transition-all ${
                        formData.service === s
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-border bg-secondary text-foreground/70 hover:border-primary/50"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 2 && (
              <div>
                <h2 className="font-display font-bold text-2xl text-foreground mb-6">Pick Date & Time</h2>
                <div className="space-y-4">
                  <input
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({...formData, preferredDate: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-secondary text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <select
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({...formData, preferredTime: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-secondary text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select Preferred Time</option>
                    <option value="Morning (8AM-12PM)">Morning (8AM-12PM)</option>
                    <option value="Afternoon (12PM-4PM)">Afternoon (12PM-4PM)</option>
                    <option value="Evening (4PM-8PM)">Evening (4PM-8PM)</option>
                    <option value="Emergency (ASAP)">Emergency (ASAP)</option>
                  </select>
                </div>
              </div>
            )}

            {step === 3 && (
              <div>
                <h2 className="font-display font-bold text-2xl text-foreground mb-6">Your Details</h2>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Full Name"
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
                  <input
                    type="email"
                    placeholder="Email (Optional)"
                    maxLength={255}
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-secondary text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <textarea
                    placeholder="Address / Additional Notes"
                    rows={3}
                    maxLength={500}
                    value={formData.address}
                    onChange={(e) => setFormData({...formData, address: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-secondary text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  />
                </div>
              </div>
            )}

            <div className="flex justify-between mt-8">
              {step > 1 ? (
                <button onClick={() => setStep(step - 1)} className="flex items-center gap-2 text-sm font-medium text-foreground/70 hover:text-foreground">
                  <ArrowLeft className="w-4 h-4" /> Back
                </button>
              ) : <div />}

              {step < 3 ? (
                <button
                  onClick={() => setStep(step + 1)}
                  disabled={step === 1 && !formData.service}
                  className="gradient-primary text-primary-foreground px-6 py-3 rounded-full font-semibold flex items-center gap-2 disabled:opacity-50"
                >
                  Next <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  disabled={!formData.name || !formData.phone}
                  className="gradient-accent shimmer text-accent-foreground px-8 py-3 rounded-full font-semibold flex items-center gap-2 disabled:opacity-50"
                >
                  Book via WhatsApp <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default BookService;
