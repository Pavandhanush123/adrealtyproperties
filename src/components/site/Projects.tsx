import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import pr1 from "@/assets/project-1.jpg";
import pr2 from "@/assets/project-2.jpg";
import pr3 from "@/assets/project-3.jpg";

const projects = [
  { img: pr1, name: "Marina Waterfront Collection", location: "Coastal District", units: "48 Residences" },
  { img: pr2, name: "The Meridian Tower", location: "Central Business District", units: "120 Apartments" },
  { img: pr3, name: "Palm Courtyards", location: "Resort Quarter", units: "24 Villas" },
];

export function Projects() {
  return (
    <section id="projects" className="py-32 bg-navy text-white overflow-hidden">
      <div className="container-luxury">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <span className="text-eyebrow">Luxury Projects</span>
            <h2 className="mt-4 font-display text-5xl md:text-6xl max-w-2xl">
              Developments shaping tomorrow's skyline
            </h2>
          </div>
          <p className="max-w-sm text-white/70 leading-relaxed">
            Strategic partnerships with the region's most acclaimed developers, brought
            directly to our clients.
          </p>
        </div>
      </div>

      <div className="overflow-x-auto scrollbar-none pb-8">
        <div className="flex gap-6 px-6 lg:px-12 min-w-max">
          {projects.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.12 }}
              className="group relative w-[85vw] sm:w-[520px] lg:w-[620px] aspect-[4/5] rounded-2xl overflow-hidden shadow-luxury"
            >
              <img
                src={p.img}
                alt={p.name}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-8">
                <div className="text-xs tracking-[0.3em] uppercase text-gold">{p.location}</div>
                <h3 className="mt-3 font-display text-3xl md:text-4xl text-white">{p.name}</h3>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-white/70 text-sm">{p.units}</span>
                  <a href="#" className="inline-flex items-center gap-1.5 text-gold text-sm">
                    Discover <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
