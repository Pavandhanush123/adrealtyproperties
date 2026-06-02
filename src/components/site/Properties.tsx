import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import p1 from "@/assets/property-1.jpg";
import p2 from "@/assets/property-2.jpg";
import p3 from "@/assets/property-3.jpg";
import pVilla from "@/assets/property-villa.jpg";
import pFarm from "@/assets/property-farmhouse.jpg";

const properties = [
  {
    img: p1,
    type: "Premium Apartment",
    title: "Skyline Residences",
    location: "Gachibowli, Hyderabad",
    price: "On Request",
  },
  {
    img: pVilla,
    type: "Villa",
    title: "The Banjara Estate",
    location: "Jubilee Hills, Hyderabad",
    price: "On Request",
  },
  {
    img: p3,
    type: "Commercial",
    title: "HITEC Corporate Tower",
    location: "HITEC City, Hyderabad",
    price: "On Request",
  },
  {
    img: p2,
    type: "Luxury Villa",
    title: "Riviera Crest Villas",
    location: "Kokapet, Hyderabad",
    price: "On Request",
  },
  {
    img: pFarm,
    type: "Farmhouse",
    title: "Greenstone Farmhouse",
    location: "Shamirpet, Hyderabad",
    price: "On Request",
  },
];

export function Properties() {
  const autoplay = useRef(
    Autoplay({ delay: 4500, stopOnInteraction: false, stopOnMouseEnter: true })
  );
  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: "start", containScroll: "trimSnaps" },
    [autoplay.current]
  );

  return (
    <section id="properties" className="py-32 bg-background">
      <div className="container-luxury">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <div>
            <span className="text-eyebrow">Featured Listings</span>
            <h2 className="mt-4 font-display text-5xl md:text-6xl text-navy max-w-2xl leading-[1.05]">
              Trusted Property Investments Across Global Markets
            </h2>
            <p className="mt-6 text-muted-foreground text-lg leading-relaxed max-w-xl">
              Building Trust. Creating Wealth. Delivering Exceptional Real Estate Opportunities.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-navy border-b border-gold pb-1 hover:text-gold transition-colors"
          >
            Request full portfolio
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="overflow-hidden -mx-4" ref={emblaRef}>
          <div className="flex">
            {properties.map((p, i) => (
              <div
                key={p.title}
                className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.3333%] min-w-0 px-4"
              >
                <motion.article
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.8, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-luxury transition-all duration-500 h-full"
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
                    <h3 className="font-display text-2xl text-navy">{p.title}</h3>
                    <div className="mt-5 flex items-center justify-between pt-5 border-t border-border">
                      <span className="font-display text-xl text-gold">{p.price}</span>
                      <a
                        href="#contact"
                        className="inline-flex items-center gap-1.5 text-sm text-navy hover:text-gold transition-colors"
                      >
                        Enquire <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </div>
                </motion.article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
