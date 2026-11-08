import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PageHero, Reveal } from "@/components/site/Reveal";
import { projects } from "@/data/site";

export const Route = createFileRoute("/work/")({
  head: () => ({
    meta: [
      { title: "Our Work — Codeless Studio" },
      { name: "description", content: "Selected projects by Codeless Studio: restaurant, tourism, finance, e-commerce and infrastructure work." },
      { property: "og:title", content: "Our Work — Codeless Studio" },
      { property: "og:description", content: "A curated selection of projects built with design excellence and technical precision." },
    ],
  }),
  component: WorkPage,
});

function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Selected work"
        title={<>Projects with <span className="italic text-teal">purpose.</span></>}
        intro="A curated selection of work that shows our commitment to design excellence and technical precision."
      />
      <section className="bg-paper py-24">
        <div className="container-site grid gap-x-10 gap-y-20 md:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 2) * 120} className={i % 2 === 1 ? "md:mt-24" : ""}>
              <Link to="/work/$slug" params={{ slug: p.slug }} className="group block">
                <div className="overflow-hidden rounded-3xl">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    width={1200}
                    height={912}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="mt-6 flex items-start justify-between gap-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-teal-deep">{p.category}</p>
                    <h2 className="mt-2 font-display text-3xl text-ink">{p.title}</h2>
                    <p className="mt-2 text-sm text-muted-foreground">{p.summary}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <span key={t} className="rounded-full border border-border px-3 py-1 text-xs text-ink/70">{t}</span>
                      ))}
                    </div>
                  </div>
                  <ArrowUpRight className="h-7 w-7 shrink-0 text-ink/40 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-teal-deep" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
