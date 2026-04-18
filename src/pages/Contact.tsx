import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/20">
      <Navbar />
      <main className="pt-20">
        <section className="py-20">
          <div className="container">
            <motion.div
              className="mx-auto mb-12 max-w-2xl text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="mb-4 font-display text-4xl font-extrabold sm:text-5xl">Get in Touch</h1>
              <p className="text-lg text-muted-foreground">
                Have questions? Want to know which course is right for you? Fill out the form and our team will get back to you within 24 hours.
              </p>
            </motion.div>

            <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-5">
              {/* Form */}
              <div className="lg:col-span-3">
                <div className="rounded-xl border bg-card p-6 sm:p-8">
                  <h2 className="mb-6 font-display text-xl font-bold">Book a Free Counseling Session</h2>
                  <LeadCaptureForm />
                </div>
              </div>

              {/* Contact info */}
              <div className="space-y-6 lg:col-span-2">
                <h2 className="font-display text-xl font-bold">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold">Email</div>
                      <div className="text-sm text-muted-foreground">contact@levelupengineers.com</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold">Phone</div>
                      <div className="text-sm text-muted-foreground">+91 72069 12018</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold">Location</div>
                      <div className="text-sm text-muted-foreground">Gurugram, India</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
