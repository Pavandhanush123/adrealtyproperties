import logo from "@/assets/logo.jpeg";
import { Instagram, Linkedin, Facebook, Twitter, Youtube, MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

const exploreLinks = [
  { label: "Properties", href: "#properties" },
  { label: "Projects", href: "#projects" },
  { label: "About Us", href: "#about" },
  { label: "Investment", href: "#investment" },
  { label: "Contact", href: "#contact" },
];

const serviceLinks = [
  { label: "Property Sales", href: "#" },
  { label: "Property Management", href: "#" },
  { label: "Investment Advisory", href: "#" },
  { label: "Interior Design", href: "#" },
  { label: "Legal Assistance", href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-navy text-white/60">
      {/* Top accent line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-gold to-transparent" />

      <div className="container-luxury">
        {/* Main footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pt-20 pb-16">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4"
          >
            <div className="flex items-center gap-3">
              <img src={logo} alt="AD Realty" className="h-14 w-14 rounded-sm bg-white/95 p-1 object-contain" />
              <div>
                <div className="font-display text-2xl text-white tracking-wide">AD Realty</div>
                <div className="text-[10px] tracking-[0.35em] uppercase text-gold font-medium">Properties</div>
              </div>
            </div>
            <p className="mt-6 max-w-sm leading-relaxed text-white/50 text-sm">
              Curating signature residences, premium projects and investment opportunities for a
              global community of discerning clients across India and beyond.
            </p>
            <div className="mt-8 flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="h-11 w-11 rounded-full border border-white/10 flex items-center justify-center hover:border-gold hover:text-gold hover:bg-gold/5 transition-all duration-300"
                >
                  <social.icon className="h-[18px] w-[18px]" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <h4 className="text-white font-display text-base mb-6 tracking-wide">Explore</h4>
            <ul className="space-y-3.5">
              {exploreLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-gold transition-colors duration-200 inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="h-3 w-3 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-200" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-2"
          >
            <h4 className="text-white font-display text-base mb-6 tracking-wide">Services</h4>
            <ul className="space-y-3.5">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-gold transition-colors duration-200 inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="h-3 w-3 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-200" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Office Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-4"
          >
            <h4 className="text-white font-display text-base mb-6 tracking-wide">Office Location</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="h-9 w-9 rounded-full bg-white/5 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="h-3.5 w-3.5 text-gold" />
                </div>
                <p className="text-sm leading-relaxed text-white/70">
                  5th Floor, RMZ Spire,<br />
                  Silpa Gram Craft Village,<br />
                  HITEC City, Hyderabad,<br />
                  Telangana 500081 — India
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                  <Phone className="h-3.5 w-3.5 text-gold" />
                </div>
                <a href="tel:+919676211233" className="text-sm hover:text-gold transition-colors">
                  +91 96762 11233
                </a>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                  <Mail className="h-3.5 w-3.5 text-gold" />
                </div>
                <a href="mailto:anil@adrealtyproperties.com" className="text-sm hover:text-gold transition-colors">
                  anil@adrealtyproperties.com
                </a>
              </div>
            </div>

            {/* Mini Map */}
            <div className="mt-6 rounded-xl overflow-hidden border border-white/10 h-[140px] shadow-soft">
              <iframe
                title="AD Realty Office"
                src="https://maps.google.com/maps?q=RMZ+Spire%2C+Silpa+Gram+Craft+Village%2C+HITEC+City%2C+Hyderabad%2C+Telangana+500081&z=14&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0 grayscale-[0.3]"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-white/8" />

        {/* Bottom bar */}
        <div className="py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
          <span>© {new Date().getFullYear()} AD Realty Properties. All rights reserved.</span>
          <div className="flex gap-8">
            <a href="#" className="hover:text-gold transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="hover:text-gold transition-colors duration-200">Terms of Service</a>
            <a href="#" className="hover:text-gold transition-colors duration-200">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
