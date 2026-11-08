import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Eyebrow, PageHero, Reveal } from "@/components/site/Reveal";
import { services } from "@/data/site";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Codeless Studio" },
      { name: "description", content: "Web design & development, technical setup, hosting, maintenance and consultation from Codeless Studio." },
      { property: "og:title", content: "Services — Codeless Studio" },
      { property: "og:description", content: "Premium digital solutions designed with precision, delivered with care." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={<>Crafted services, <span className="italic text-teal">end to end.</span></>}
        intro="Premium digital solutions designed with precision and delivered with care — from your first domain to a full custom platform."
      />
      <section className="bg-paper py-24">
        <div className="container-site space-y-24">
          {services.map((s) => (
            <Reveal key={s.title}>
              <div className="grid gap-12 md:grid-cols-[1fr_1.5fr]">
                <div className="md:sticky md:top-32 md:self-start">
                  <span className="font-display text-6xl text-teal-deep">{s.number}</span>
                  <h2 className="mt-4 font-display text-4xl text-ink md:text-5xl">{s.title}</h2>
                  <p className="mt-5 text-muted-foreground">{s.blurb}</p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {s.items.map((it) => (
                    <div
                      key={it.title}
                      className="rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-teal-deep hover:shadow-card"
                    >
                      <h3 className="font-display text-xl text-ink">{it.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{it.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="bg-secondary py-20">
        <div className="container-site flex flex-col items-center gap-6 text-center">
          <Eyebrow>Every project is unique</Eyebrow>
          <h2 className="font-display text-4xl text-ink md:text-5xl">Let's tailor yours together.</h2>
          <Button asChild variant="ink" size="xl">
            <Link to="/project-intake">Start your project <ArrowRight /></Link>
          </Button>
        </div>
      </section>
    </>
  );
}
