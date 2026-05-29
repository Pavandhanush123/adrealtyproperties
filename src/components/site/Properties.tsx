import { motion } from "framer-motion";
import { MapPin, ArrowUpRight } from "lucide-react";
import p1 from "@/assets/property-1.jpg";
import p2 from "@/assets/property-2.jpg";
import p3 from "@/assets/property-3.jpg";

const properties = [
  {
    img: p1,
    type: "Apartment",
    title: "The Vantage Residences",
    location: "Downtown District",
    price: "$2.4M",
  },
  {
    img: p2,
    type: "Villa",
    title: "Azure Bay Estate",
    location: "Palm Coast",
    price: "$8.9M",
  },
  {
    img: p3,
    type: "Penthouse",
    title: "The Skyline Penthouse",
    location: "Marina Heights",
    price: "$5.2M",
  },
];

export function Properties() {
  return (
    <section id="properties" className="py-32 bg-background">
      <div className="container-luxury">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <div>
            <span className="text-eyebrow">Featured Listings</span>
            <h2 className="mt-4 font-display text-5xl md:text-6xl text-navy max-w-xl">
              Signature properties, individually curated
            </h2>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-navy border-b border-gold pb-1 hover:text-gold transition-colors"
          >
            View entire portfolio
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-luxury transition-all duration-500"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <span className="absolute top-5 left-5 glass-panel text-navy text-xs tracking-[0.2em] uppercase px-3 py-1.5 rounded-full">
                  {p.type}
                </span>
              </div>
              <div className="p-7">
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <MapPin className="h-3.5 w-3.5 text-gold" />
                  {p.location}
                </div>
                <h3 className="mt-3 font-display text-2xl text-navy">{p.title}</h3>
                <div className="mt-5 flex items-center justify-between pt-5 border-t border-border">
                  <span className="font-display text-2xl text-gold">{p.price}</span>
                  <a
                    href="#"
                    className="inline-flex items-center gap-1.5 text-sm text-navy hover:text-gold transition-colors"
                  >
                    View Details <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
