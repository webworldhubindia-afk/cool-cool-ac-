import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Award, Download, Eye, FileText, Shield, CheckCircle } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const certificates = [
  {
    id: 1,
    title: "Udyam Registration Certificate",
    description: "Official Udyam Registration Certificate for Cool And Cool AC Repair Services - Anexture Print",
    file: "/certificates/Cool And Cool AC Repair Services Anexture Print _ Udyam Registration Certificate.pdf",
    registrationNumber: "UDYAM-DL-03-0076741",
    type: "Udyam Registration",
  },
  {
    id: 2,
    title: "Udyam Registration Certificate (Copy)",
    description: "Official Udyam Registration Certificate for Cool And Cool AC Repair Services Print - Copy",
    file: "/certificates/Cool And Cool AC Repair Services Print _ Udyam Registration Certificate (1).pdf",
    registrationNumber: "UDYAM-DL-03-0076741",
    type: "Udyam Registration",
  },
];

const Certificates = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<typeof certificates[0] | null>(null);

  const handleDownload = (cert: typeof certificates[0]) => {
    const link = document.createElement("a");
    link.href = cert.file;
    link.download = cert.title + ".pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="gradient-navy py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Award className="w-12 h-12 text-accent" />
              <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-primary-foreground">
                Our Certificates
              </h1>
            </div>
            <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
              Verified and registered credentials that demonstrate our commitment to excellence and compliance
            </p>
          </motion.div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-secondary border-b border-border">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Shield, text: "Udyam Registered" },
              { icon: CheckCircle, text: "Government Verified" },
              { icon: Award, text: "Certified Business" },
            ].map((badge, i) => (
              <motion.div
                key={badge.text}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center justify-center gap-3 bg-card rounded-2xl p-4 border border-border"
              >
                <badge.icon className="w-6 h-6 text-primary" />
                <span className="font-semibold text-foreground">{badge.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
              Official Documentation
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              View or download our official certificates and registration documents
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="group bg-card rounded-3xl border border-border overflow-hidden card-pressure hover:shadow-2xl transition-all duration-300"
              >
                {/* Certificate Header */}
                <div className="gradient-primary p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-primary-foreground/20 flex items-center justify-center">
                        <FileText className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <span className="text-xs text-primary-foreground/70 font-medium uppercase tracking-wider">
                          {cert.type}
                        </span>
                        <h3 className="font-display font-bold text-xl text-primary-foreground mt-1">
                          Certificate #{cert.id}
                        </h3>
                      </div>
                    </div>
                    <Award className="w-8 h-8 text-primary-foreground/30" />
                  </div>
                </div>

                {/* Certificate Body */}
                <div className="p-6 space-y-4">
                  <div>
                    <h4 className="font-semibold text-lg text-foreground mb-2">{cert.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {cert.description}
                    </p>
                  </div>

                  <div className="bg-secondary rounded-xl p-4 border border-border">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                        Registration Number
                      </span>
                    </div>
                    <p className="font-mono text-sm font-semibold text-foreground">
                      {cert.registrationNumber}
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-2">
                    <button
                      onClick={() => setSelectedCertificate(cert)}
                      className="flex-1 flex items-center justify-center gap-2 gradient-accent shimmer text-accent-foreground px-4 py-3 rounded-xl font-semibold text-sm hover:shadow-lg transition-all duration-300 hover:scale-105"
                    >
                      <Eye className="w-4 h-4" />
                      View
                    </button>
                    <button
                      onClick={() => handleDownload(cert)}
                      className="flex-1 flex items-center justify-center gap-2 bg-secondary hover:bg-secondary/80 text-foreground px-4 py-3 rounded-xl font-semibold text-sm border border-border hover:border-primary transition-all duration-300 hover:scale-105"
                    >
                      <Download className="w-4 h-4" />
                      Download
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <Award className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
              Trusted & Certified Services
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Our Udyam registration ensures you're working with a government-verified business committed to quality and transparency.
            </p>
            <a
              href="/contact"
              className="gradient-accent shimmer text-accent-foreground px-8 py-4 rounded-full font-semibold text-lg inline-block hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Contact Us Today
            </a>
          </motion.div>
        </div>
      </section>

      {/* View Certificate Dialog */}
      <Dialog open={!!selectedCertificate} onOpenChange={() => setSelectedCertificate(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">
          <DialogHeader>
            <DialogTitle className="font-display font-bold text-xl text-foreground">
              {selectedCertificate?.title}
            </DialogTitle>
          </DialogHeader>
          <div className="flex-1 overflow-auto mt-4">
            {selectedCertificate && (
              <iframe
                src={selectedCertificate.file}
                className="w-full h-[70vh] border-0 rounded-lg"
                title={selectedCertificate.title}
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default Certificates;
