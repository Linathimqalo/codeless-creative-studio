import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const nav = [
  { to: "/services", label: "Services" },
  { to: "/work", label: "Work" },
  { to: "/value-packs", label: "Pricing" },
  { to: "/about", label: "Studio" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open ? "bg-ink/90 py-3 backdrop-blur-md" : "py-6",
      )}
    >
      <div className="container-site flex items-center justify-between text-on-ink">
        <Link to="/" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid h-10 w-10 place-items-center rounded-full border border-teal/50 font-display text-lg text-teal transition-colors group-hover:bg-teal group-hover:text-ink">
            cs
          </span>
          <span className="font-display text-xl tracking-tight">
            Codeless <span className="text-teal">Studio</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm text-on-ink-muted transition-colors hover:text-on-ink"
              activeProps={{ className: "!text-teal" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild variant="hero" size="sm" className="h-10 px-5">
            <Link to="/project-intake">Start a project</Link>
          </Button>
        </div>

        <button
          className="md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav className="container-site flex flex-col gap-1 pb-6 pt-4 md:hidden">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              onClick={() => setOpen(false)}
              className="border-b border-on-ink/10 py-3 font-display text-2xl text-on-ink"
            >
              {n.label}
            </Link>
          ))}
          <Button asChild variant="hero" size="xl" className="mt-6">
            <Link to="/project-intake" onClick={() => setOpen(false)}>
              Start a project
            </Link>
          </Button>
        </nav>
      )}
    </header>
  );
}
