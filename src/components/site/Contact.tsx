import { MessageCircle, Mail, Phone, MapPin, Clock, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export function Contact() {
  return (
    <section id="contact" className="py-32 bg-sand">
      <div className="container-luxury grid lg:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-eyebrow">Get in Touch</span>
          <h2 className="mt-4 font-display text-5xl md:text-6xl text-navy leading-tight">
            Let's begin a quiet conversation
          </h2>
          <p className="mt-6 text-muted-foreground text-lg leading-relaxed max-w-md">
            Visit our Hyderabad headquarters or reach out directly. A senior advisor will respond personally within one business day.
          </p>

          <div className="mt-10 space-y-5">
            {[
              { icon: Phone, label: "+91 96762 11233", href: "tel:+919676211233" },
              { icon: Mail, label: "anil@adrealtyproperties.com", href: "mailto:anil@adrealtyproperties.com" },
              { icon: MapPin, label: "5th Floor, RMZ Spire, Silpa Gram Craft Village, HITEC City, Hyderabad, Telangana 500081 — India" },
              { icon: Clock, label: "Mon – Sat: 9:00 AM – 7:00 PM IST" },
            ].map((c) => (
              <div key={c.label} className="flex items-start gap-4">
                <div className="h-11 w-11 rounded-full bg-navy/5 flex items-center justify-center shrink-0">
                  <c.icon className="h-4 w-4 text-gold" />
                </div>
                {c.href ? (
                  <a
                    href={c.href}
                    className="text-navy hover:text-gold transition-colors pt-2.5"
                  >
                    {c.label}
                  </a>
                ) : (
                  <span className="text-navy pt-2.5 leading-relaxed">{c.label}</span>
                )}
              </div>
            ))}
          </div>

          <a
            href="https://wa.me/919676211233"
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-flex items-center gap-2 bg-gold text-gold-foreground px-7 py-3.5 rounded-full font-medium hover:shadow-luxury transition-all"
          >
            <MessageCircle className="h-4 w-4" />
            Chat on WhatsApp
            <ArrowUpRight className="h-3.5 w-3.5 opacity-60" />
          </a>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="glass-panel rounded-2xl p-8 md:p-10 shadow-luxury"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <Field label="Full Name" placeholder="Your name" />
            <Field label="Phone" placeholder="+91 ..." />
          </div>
          <div className="mt-5">
            <Field label="Email" placeholder="you@example.com" type="email" />
          </div>
          <div className="mt-5">
            <label className="block text-xs tracking-[0.2em] uppercase text-navy mb-2">
              Interest
            </label>
            <select className="w-full bg-white/70 border border-border rounded-lg px-4 py-3 text-navy focus:outline-none focus:border-gold transition-colors appearance-none cursor-pointer">
              <option>Buying a residence</option>
              <option>Selling a property</option>
              <option>Investment advisory</option>
              <option>Other</option>
            </select>
          </div>
          <div className="mt-5">
            <label className="block text-xs tracking-[0.2em] uppercase text-navy mb-2">
              Message
            </label>
            <textarea
              rows={4}
              placeholder="Tell us what you're looking for..."
              className="w-full bg-white/70 border border-border rounded-lg px-4 py-3 text-navy placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors resize-none"
            />
          </div>
          <button
            type="submit"
            className="mt-7 w-full bg-navy text-primary-foreground py-4 rounded-full font-medium hover:bg-navy/90 transition-all hover:shadow-luxury"
          >
            Send Enquiry
          </button>
        </motion.form>
      </div>
    </section>
  );
}

function Field({ label, ...rest }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="block text-xs tracking-[0.2em] uppercase text-navy mb-2">{label}</label>
      <input
        {...rest}
        className="w-full bg-white/70 border border-border rounded-lg px-4 py-3 text-navy placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors"
      />
    </div>
  );
}
