import logo from "@/assets/logo.jpeg";
import { Instagram, Linkedin, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-navy text-white/70">
      <div className="container-luxury py-20">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <img src={logo} alt="AD Realty" className="h-12 w-12 rounded-sm bg-white/95 p-1 object-contain" />
              <div>
                <div className="font-display text-xl text-white">AD Realty</div>
                <div className="text-[10px] tracking-[0.3em] uppercase text-gold">Properties</div>
              </div>
            </div>
            <p className="mt-6 max-w-md leading-relaxed">
              Curating signature residences, projects and investment opportunities for a
              global community of discerning clients.
            </p>
            <div className="mt-6 flex gap-3">
              {[Instagram, Linkedin, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="h-10 w-10 rounded-full border border-white/15 flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-display text-lg mb-5">Explore</h4>
            <ul className="space-y-3 text-sm">
              {["Properties", "Projects", "About", "Investment", "Contact"].map((l) => (
                <li key={l}><a href="#" className="hover:text-gold transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-display text-lg mb-5">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li>+971 50 000 0000</li>
              <li>hello@adrealty.properties</li>
              <li>DIFC, Dubai</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-4 text-xs">
          <span>© {new Date().getFullYear()} AD Realty Properties. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gold transition-colors">Privacy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
