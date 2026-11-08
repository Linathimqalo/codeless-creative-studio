import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { contact } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="grain relative overflow-hidden bg-ink text-on-ink">
      <div className="glow-orb -bottom-40 left-1/3 h-96 w-96 bg-teal/20" />
      <div className="container-site relative py-24">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="font-display text-5xl leading-[1.05] md:text-7xl">
              Have an idea? <br />
              <span className="italic text-teal">Let's give it soul.</span>
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild variant="hero" size="xl">
                <Link to="/project-intake">Start your project</Link>
              </Button>
              <Button asChild variant="outline-ink" size="xl">
                <a href={contact.whatsappUrl} target="_blank" rel="noreferrer">
                  WhatsApp us <ArrowUpRight />
                </a>
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 text-sm">
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.2em] text-teal">Studio</p>
              <ul className="space-y-3 text-on-ink-muted">
                <li><Link to="/services" className="hover:text-on-ink">Services</Link></li>
                <li><Link to="/work" className="hover:text-on-ink">Work</Link></li>
                <li><Link to="/value-packs" className="hover:text-on-ink">Pricing</Link></li>
                <li><Link to="/about" className="hover:text-on-ink">About</Link></li>
                <li><Link to="/contact" className="hover:text-on-ink">Contact</Link></li>
              </ul>
            </div>
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.2em] text-teal">Say hello</p>
              <ul className="space-y-3 text-on-ink-muted">
                <li><a href={`mailto:${contact.email}`} className="hover:text-on-ink">{contact.email}</a></li>
                <li>{contact.location}</li>
                {contact.hours.map((h) => (
                  <li key={h.days} className="text-xs">{h.days}: {h.time}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-20 flex flex-col justify-between gap-4 border-t border-on-ink/10 pt-8 text-xs text-on-ink-muted md:flex-row">
          <p>© {new Date().getFullYear()} Codeless Studio. Digital craft, human design.</p>
          <p>Crafted in South Africa.</p>
        </div>
      </div>
    </footer>
  );
}
