import { MessageCircle, Mail, Phone, MapPin } from "lucide-react";
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
            Tell us what you're looking for. A senior advisor will respond personally within
            one business day.
          </p>

          <div className="mt-10 space-y-5">
            {[
              { icon: Phone, label: "+971 50 000 0000" },
              { icon: Mail, label: "hello@adrealty.properties" },
              { icon: MapPin, label: "DIFC, Dubai · Mumbai · London" },
            ].map((c) => (
              <div key={c.label} className="flex items-center gap-4">
                <div className="h-11 w-11 rounded-full bg-navy/5 flex items-center justify-center">
                  <c.icon className="h-4 w-4 text-gold" />
                </div>
                <span className="text-navy">{c.label}</span>
              </div>
            ))}
          </div>

          <a
            href="https://wa.me/971500000000"
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-flex items-center gap-2 bg-gold text-gold-foreground px-7 py-3.5 rounded-full font-medium hover:shadow-luxury transition-all"
          >
            <MessageCircle className="h-4 w-4" />
            Chat on WhatsApp
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
            <Field label="Phone" placeholder="+971 ..." />
          </div>
          <div className="mt-5">
            <Field label="Email" placeholder="you@example.com" type="email" />
          </div>
          <div className="mt-5">
            <label className="block text-xs tracking-[0.2em] uppercase text-navy mb-2">
              Interest
            </label>
            <select className="w-full bg-white/70 border border-border rounded-lg px-4 py-3 text-navy focus:outline-none focus:border-gold transition-colors">
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
              className="w-full bg-white/70 border border-border rounded-lg px-4 py-3 text-navy focus:outline-none focus:border-gold transition-colors resize-none"
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

      <div className="container-luxury mt-20">
        <div className="rounded-2xl overflow-hidden shadow-soft h-[360px]">
          <iframe
            title="Map"
            src="https://www.openstreetmap.org/export/embed.html?bbox=55.270%2C25.190%2C55.295%2C25.215&layer=mapnik"
            className="w-full h-full border-0 grayscale-[0.4]"
            loading="lazy"
          />
        </div>
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
