import { Mail, Phone, MapPin, Clock, ArrowUpRight } from "lucide-react";
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
            className="mt-10 inline-flex items-center gap-2 bg-[#25D366] text-white px-7 py-3.5 rounded-full font-medium hover:bg-[#1ebe57] hover:shadow-luxury hover:-translate-y-0.5 transition-all duration-300 group"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
              <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.945C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 0 1 8.413 3.488 11.82 11.82 0 0 1 3.48 8.414c-.003 6.554-5.338 11.89-11.893 11.89a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.51 5.26l-.999 3.648 3.978-.607zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" />
            </svg>
            Chat on WhatsApp
            <ArrowUpRight className="h-3.5 w-3.5 opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
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
