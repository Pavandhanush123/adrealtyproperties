import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function MapSection() {
  return (
    <section className="pb-24 md:pb-32 bg-sand">
      <div className="container-luxury">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-2xl overflow-hidden shadow-luxury border border-border"
        >
          <div className="h-[420px] md:h-[480px]">
            <iframe
              title="AD Realty Office Location"
              src="https://maps.google.com/maps?q=RMZ+Spire%2C+Silpa+Gram+Craft+Village%2C+HITEC+City%2C+Hyderabad%2C+Telangana+500081&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              allowFullScreen
            />
          </div>
          <div className="bg-navy px-8 py-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <p className="text-white font-display text-lg">AD Realty Properties Headquarters</p>
              <p className="text-white/60 text-sm mt-1">5th Floor, RMZ Spire, HITEC City, Hyderabad</p>
            </div>
            <a
              href="https://maps.google.com/?q=RMZ+Spire,+Silpa+Gram+Craft+Village,+HITEC+City,+Hyderabad,+Telangana+500081"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-gold text-sm font-medium hover:text-white transition-colors"
            >
              Open in Google Maps
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
