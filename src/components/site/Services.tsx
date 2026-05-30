import { motion } from "framer-motion";
import { Home, Building2, LineChart, Compass, ShieldCheck, MapPin } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Residential Properties",
    desc: "Apartments, villas and luxury homes curated to match your lifestyle and long-term plans.",
    items: ["Apartments", "Villas", "Luxury Homes"],
  },
  {
    icon: Building2,
    title: "Commercial Properties",
    desc: "Office spaces, retail outlets and commercial buildings for businesses, investors and brands.",
    items: ["Office Spaces", "Retail Spaces", "Commercial Buildings"],
  },
  {
    icon: LineChart,
    title: "Investment Advisory",
    desc: "Data-led guidance on yield, appreciation and asset allocation across Hyderabad's growth corridors.",
    items: ["Yield Analysis", "Portfolio Strategy", "Market Reports"],
  },
  {
    icon: Compass,
    title: "Property Consultation",
    desc: "Personalised consultation for homebuyers and investors at every stage of the journey.",
    items: ["Buyer Advisory", "Seller Strategy", "Legal Coordination"],
  },
  {
    icon: MapPin,
    title: "Site Visits",
    desc: "Organised, accompanied site visits across Hyderabad's premium residential and commercial belts.",
    items: ["Guided Tours", "Shortlist Curation", "On-site Evaluation"],
  },
  {
    icon: ShieldCheck,
    title: "Verified Listings",
    desc: "Every property is title-checked and verified — no surprises, no shortcuts, complete transparency.",
    items: ["Title Verification", "RERA Compliance", "Documentation Support"],
  },
];

const propertyTypes = [
  "Apartments",
  "Villas",
  "Premium Apartments",
  "Luxury Homes",
  "Commercial Spaces",
  "Retail Spaces",
  "Farm Houses",
  "Warehouses",
];

export function Services() {
  return (
    <section id="services" className="py-32 bg-background">
      <div className="container-luxury">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-eyebrow">What We Do</span>
          <h2 className="mt-4 font-display text-5xl md:text-6xl text-navy">
            End-to-end real estate advisory
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            From discovery to documentation — a single, trusted partner for every kind of
            property decision in Hyderabad.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-gold/40 hover:shadow-luxury transition-all duration-500"
            >
              <div className="h-14 w-14 rounded-xl bg-navy/5 flex items-center justify-center group-hover:bg-gold/15 transition-colors">
                <s.icon className="h-6 w-6 text-gold" strokeWidth={1.5} />
              </div>
              <h3 className="mt-6 font-display text-2xl text-navy">{s.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed text-sm">{s.desc}</p>
              <ul className="mt-5 pt-5 border-t border-border space-y-1.5">
                {s.items.map((item) => (
                  <li key={item} className="text-sm text-navy/80 flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-gold" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Property types strip */}
        <div className="mt-24 rounded-2xl bg-sand p-10 md:p-14">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <div>
              <span className="text-eyebrow">Property Types</span>
              <h3 className="mt-3 font-display text-3xl md:text-4xl text-navy max-w-xl">
                Every category, professionally represented
              </h3>
            </div>
            <p className="text-muted-foreground max-w-sm leading-relaxed">
              A breadth of asset classes — from urban apartments to large-format warehouses
              and farm houses on Hyderabad's outskirts.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {propertyTypes.map((t) => (
              <span
                key={t}
                className="px-5 py-2.5 rounded-full bg-background border border-border text-navy text-sm hover:border-gold hover:text-gold transition-colors cursor-default"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
