import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Eyebrow, PageHero, Reveal } from "@/components/site/Reveal";
import { images, process, stats, values } from "@/data/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About the Studio — Codeless Studio" },
      { name: "description", content: "Craftsmanship, not shortcuts. Learn how Codeless Studio blends creative design with technical expertise." },
      { property: "og:title", content: "About the Studio — Codeless Studio" },
      { property: "og:description", content: "Digital precision, delivered — our mission, values and five-step process." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="The studio"
        title={<>Craftsmanship, <span className="italic text-teal">not shortcuts.</span></>}
        intro="We merge creative design with strong technical foundations — delivering websites, infrastructure and systems that simply work."
      />
      <section className="bg-paper py-24">
        <div className="container-site grid items-center gap-16 md:grid-cols-2">
          <Reveal>
            <img src={images.aboutWorkspace} alt="The Codeless Studio workspace" loading="lazy" width={1200} height={912} className="aspect-[4/5] w-full rounded-3xl object-cover" />
          </Reveal>
          <Reveal delay={120}>
            <Eyebrow>Built for reliability</Eyebrow>
            <h2 className="font-display text-4xl text-ink md:text-5xl">Your website is a business asset — we treat it like one.</h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Every project is built with meticulous attention to detail, robust security practices
              and long-term scalability in mind. Our commitment to confidentiality, business
              legitimacy and transparent communication means you're always in control of your
              digital infrastructure.
            </p>
            <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
              {stats.map((s) => (
                <div key={s.label}>
                  <dt className="font-display text-4xl text-teal-deep">{s.value}</dt>
                  <dd className="mt-1 text-xs text-muted-foreground">{s.label}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>
      <section className="bg-secondary py-24">
        <div className="container-site">
          <Eyebrow>Why choose us</Eyebrow>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 80}>
                <div className="h-full rounded-3xl border border-border bg-card p-8">
                  <p className="font-display text-5xl text-teal-deep">{String(i + 1).padStart(2, "0")}</p>
                  <h3 className="mt-6 font-display text-2xl text-ink">{v.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-ink py-28 text-on-ink">
        <div className="container-site">
          <Reveal className="max-w-2xl">
            <Eyebrow onInk>Our process</Eyebrow>
            <h2 className="font-display text-5xl md:text-6xl">Five steps from <span className="italic text-teal">idea to impact.</span></h2>
          </Reveal>
          <ol className="mt-16 grid gap-px overflow-hidden rounded-3xl bg-on-ink/10 md:grid-cols-5">
            {process.map((p, i) => (
              <Reveal key={p.step} delay={i * 80} className="h-full">
                <li className="h-full bg-ink p-8 transition-colors hover:bg-ink-2">
                  <span className="font-display text-4xl text-teal">{p.step}</span>
                  <h3 className="mt-6 font-display text-2xl">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-on-ink-muted">{p.desc}</p>
                </li>
              </Reveal>
            ))}
          </ol>
          <div className="mt-14 flex justify-center">
            <Button asChild variant="hero" size="xl">
              <Link to="/project-intake">Start with step one <ArrowRight /></Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
