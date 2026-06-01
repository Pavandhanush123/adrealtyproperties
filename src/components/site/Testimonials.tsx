import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const items = [
  {
    quote: "We recently bought an ideal new place we're excited to call home. Team of AD Realty Properties helped us to buy a luxurious Flat as per our preferred choice. They were helpful and responsive to every one of my questions, no matter how small and helped us navigate the entire process. Would surely recommend them for their professionalism and integrity.",
    name: "Runa Tripathy",
    role: "IT Professional",
  },
  {
    quote: "Thank you so much AD Realty Properties, I had an excellent experience as the team did a fantastic job. Their knowledge about the Hyderabad location is incredible. During the entire process, the team was always available and super responsive that made our home buying seamless for us. There were no unexpected issues with closing the deal.",
    name: "Ashutosh",
    role: "Industrialist",
  },
  {
    quote: "AD Realty Properties worked like professionals and guided us right from the beginning till the final possession of the property. Being transparent about their business processes, the team offered simple solutions to what we were looking for as a new homebuyer. Our journey with them was very comfortable without any hassle.",
    name: "K. Raghu",
    role: "Entrepreneur",
  },
  {
    quote: "Anil Datla is very professional. He goes the extra mile in securing a good property and helping with everything involved. He sensed the need and discussed in detail with us. He suggested a different property and location that suited us. He was always available to answer our questions and to show us the apartment any time we asked for. Would warmly recommend!",
    name: "Abhijit",
    role: "IT Professional",
  },
  {
    quote: "Responding quickly to our queries from the beginning until closing the deal, the team managed everything with utmost professionalism. With their helpful suggestion, we could choose the house that we always wanted for our family. We highly recommend AD Realty Properties and they should be your first choice when looking to buy a residential or commercial property.",
    name: "Manoj",
    role: "IT Professional",
  },
];

export function Testimonials() {
  const autoplay = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true })
  );
  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: "start", containScroll: "trimSnaps" },
    [autoplay.current]
  );

  return (
    <section className="py-32 bg-sand relative overflow-hidden">
      <div className="container-luxury">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-eyebrow">Client Voices</span>
          <h2 className="mt-4 font-display text-5xl md:text-6xl text-navy">
            Represented with care
          </h2>
        </div>

        <div className="overflow-hidden -mx-3" ref={emblaRef}>
          <div className="flex">
            {items.map((t, i) => (
              <div
                key={t.name}
                className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.3333%] min-w-0 px-3"
              >
                <motion.figure
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.08 }}
                  className="glass-panel rounded-2xl p-6 shadow-soft h-full"
                >
                  <Quote className="h-6 w-6 text-gold" strokeWidth={1.5} />
                  <blockquote className="mt-4 font-display text-base leading-snug text-navy">
                    "{t.quote}"
                  </blockquote>
                  <figcaption className="mt-5 pt-5 border-t border-navy/10">
                    <div className="font-medium text-navy text-sm">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </figcaption>
                </motion.figure>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
