import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import pr1 from "@/assets/project-1.jpg";
import pr2 from "@/assets/project-2.jpg";
import pr3 from "@/assets/project-3.jpg";

const projects = [
  { img: pr1, name: "Financial District Residences", location: "Nanakramguda, Hyderabad", units: "Premium Apartments" },
  { img: pr2, name: "Kokapet Skyline Towers", location: "Kokapet, Hyderabad", units: "High-Rise Living" },
  { img: pr3, name: "Jubilee Hills Villa Collection", location: "Jubilee Hills, Hyderabad", units: "Signature Villas" },
];

export function Projects() {
  return (
    <section id="projects" className="py-32 bg-navy text-white overflow-hidden">
      <div className="container-luxury">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <span className="text-eyebrow">Featured Projects</span>
            <h2 className="mt-4 font-display text-5xl md:text-6xl max-w-2xl">
              Shaping Hyderabad's premium skyline
            </h2>
          </div>
          <p className="max-w-sm text-white/70 leading-relaxed">
            Curated partnerships with Hyderabad's most respected developers — bringing
            verified, well-located projects directly to our clients.
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
                  <a href="#contact" className="inline-flex items-center gap-1.5 text-gold text-sm">
                    Enquire <ArrowUpRight className="h-4 w-4" />
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
