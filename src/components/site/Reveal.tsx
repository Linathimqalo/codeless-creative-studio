import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.classList.add("is-visible");
            io.disconnect();
          }
        });
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={cn("reveal", className)} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

export function Eyebrow({ children, onInk = false }: { children: ReactNode; onInk?: boolean }) {
  return (
    <p
      className={cn(
        "mb-5 inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.25em]",
        onInk ? "text-teal" : "text-teal-deep",
      )}
    >
      <span className={cn("h-px w-8", onInk ? "bg-teal" : "bg-teal-deep")} />
      {children}
    </p>
  );
}

export function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: string;
}) {
  return (
    <section className="grain relative overflow-hidden bg-ink pb-20 pt-40 text-on-ink md:pb-28 md:pt-48">
      <div className="glow-orb -right-24 top-10 h-80 w-80 bg-teal/25" />
      <div className="container-site relative">
        <Reveal>
          <Eyebrow onInk>{eyebrow}</Eyebrow>
          <h1 className="text-balance-tight max-w-4xl font-display text-5xl leading-[1.05] md:text-7xl">
            {title}
          </h1>
          {intro && (
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-on-ink-muted">{intro}</p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
