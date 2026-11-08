import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Eyebrow, Reveal } from "@/components/site/Reveal";
import { images, packages, projects, services, stats, testimonials, tools } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Codeless Studio — Digital Craft. Human Design." },
      {
        name: "description",
        content:
          "A South African studio building websites and digital infrastructure that feel alive, premium and emotionally coherent.",
      },
      { property: "og:title", content: "Codeless Studio — Digital Craft. Human Design." },
      {
        property: "og:description",
        content: "Premium websites, technical setup and ongoing support for growing South African brands.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const featured = projects.slice(0, 3);
  return (
    <>
      {/* Split hero */}
      <section className="grain relative overflow-hidden bg-ink text-on-ink">
        <div className="glow-orb -left-40 top-1/3 h-[28rem] w-[28rem] bg-teal/15" />
        <div className="container-site relative grid min-h-[100svh] items-center gap-12 pb-16 pt-32 md:grid-cols-[1.15fr_1fr] md:pt-28">
          <Reveal>
            <Eyebrow onInk>Web design & technical studio · South Africa</Eyebrow>
            <h1 className="font-display text-6xl leading-[0.98] md:text-8xl">
              Digital craft.
              <br />
              <span className="italic text-teal">Human design.</span>
            </h1>
            <p className="mt-8 max-w-lg text-lg leading-relaxed text-on-ink-muted">
              We build websites and the infrastructure behind them — experiences that feel alive,
              premium, and emotionally coherent. Every pixel has purpose. Every build has soul.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild variant="hero" size="xl">
                <Link to="/project-intake">
                  Start your project <ArrowRight />
                </Link>
              </Button>
              <Button asChild variant="outline-ink" size="xl">
                <Link to="/work">See our work</Link>
              </Button>
            </div>
            <dl className="mt-14 grid max-w-md grid-cols-3 gap-6 border-t border-on-ink/10 pt-8">
              {stats.map((s) => (
                <div key={s.label}>
                  <dt className="font-display text-3xl text-on-ink">{s.value}</dt>
                  <dd className="mt-1 text-xs text-on-ink-muted">{s.label}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
          <Reveal delay={150} className="relative hidden md:block">
            <div className="relative overflow-hidden rounded-[2rem] border border-on-ink/10 shadow-glow">
              <img
                src={images.hero}
                alt="Flowing teal glass sculpture"
                width={1024}
                height={1440}
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
            <div className="animate-float absolute -bottom-6 -left-10 rounded-2xl border border-on-ink/10 bg-ink-2/90 p-5 backdrop-blur">
              <p className="text-xs uppercase tracking-[0.2em] text-teal">From</p>
              <p className="font-display text-3xl">R3,500</p>
              <p className="text-xs text-on-ink-muted">Live in 5–7 days</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Tools marquee */}
      <section className="overflow-hidden border-y border-border bg-paper py-6">
        <div className="animate-marquee flex w-max gap-16 whitespace-nowrap">
          {[...tools, ...tools].map((t, i) => (
            <span key={i} className="flex items-center gap-16 font-display text-2xl text-ink/60">
              {t} <span className="text-teal-deep">✦</span>
            </span>
          ))}
        </div>
      </section>

      {/* Services split */}
      <section className="bg-paper py-28">
        <div className="container-site grid gap-16 md:grid-cols-[1fr_1.3fr]">
          <Reveal className="md:sticky md:top-32 md:self-start">
            <Eyebrow>What we create</Eyebrow>
            <h2 className="font-display text-5xl leading-tight text-ink md:text-6xl">
              Design that merges with <span className="italic text-teal-deep">engineering.</span>
            </h2>
            <p className="mt-6 max-w-md text-muted-foreground">
              One studio for the beautiful front and the dependable back — so nothing gets lost
              between a designer and a developer.
            </p>
            <Button asChild variant="outline-paper" size="lg" className="mt-8 h-12">
              <Link to="/services">
                All services <ArrowRight />
              </Link>
            </Button>
          </Reveal>
          <div className="divide-y divide-border border-y border-border">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 80}>
                <Link
                  to="/services"
                  className="group grid grid-cols-[3rem_1fr_auto] items-start gap-6 py-8"
                >
                  <span className="font-display text-xl text-teal-deep">{s.number}</span>
                  <div>
                    <h3 className="font-display text-3xl text-ink transition-colors group-hover:text-teal-deep">
                      {s.title}
                    </h3>
                    <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground">
                      {s.blurb}
                    </p>
                  </div>
                  <ArrowUpRight className="mt-2 h-6 w-6 text-ink/40 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-teal-deep" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured work */}
      <section className="bg-ink py-28 text-on-ink">
        <div className="container-site">
          <Reveal className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <Eyebrow onInk>Featured work</Eyebrow>
              <h2 className="font-display text-5xl md:text-6xl">
                Built for <span className="italic text-teal">real businesses.</span>
              </h2>
            </div>
            <Button asChild variant="outline-ink" size="lg" className="h-12">
              <Link to="/work">
                View all projects <ArrowRight />
              </Link>
            </Button>
          </Reveal>
          <div className="grid gap-8 md:grid-cols-2">
            {featured.map((p, i) => (
              <Reveal key={p.slug} delay={i * 100} className={i === 0 ? "md:col-span-2" : ""}>
                <Link to="/work/$slug" params={{ slug: p.slug }} className="group block">
                  <div className="overflow-hidden rounded-3xl">
                    <img
                      src={p.image}
                      alt={p.title}
                      loading="lazy"
                      width={1200}
                      height={912}
                      className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${i === 0 ? "aspect-[21/9]" : "aspect-[4/3]"}`}
                    />
                  </div>
                  <div className="mt-6 flex items-start justify-between gap-6">
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-teal">{p.category}</p>
                      <h3 className="mt-2 font-display text-3xl">{p.title}</h3>
                      <p className="mt-2 max-w-xl text-sm text-on-ink-muted">{p.summary}</p>
                    </div>
                    <ArrowUpRight className="h-7 w-7 shrink-0 text-on-ink-muted transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-teal" />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="bg-paper py-28">
        <div className="container-site">
          <Reveal className="mx-auto mb-16 max-w-2xl text-center">
            <Eyebrow>Packages</Eyebrow>
            <h2 className="font-display text-5xl text-ink md:text-6xl">
              Clear pricing, <span className="italic text-teal-deep">no surprises.</span>
            </h2>
            <p className="mt-5 text-muted-foreground">
              Choose the package that fits your stage of growth. Every plan carries the same
              attention to detail.
            </p>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {packages.map((p, i) => (
              <Reveal key={p.name} delay={i * 100}>
                <div
                  className={`relative flex h-full flex-col rounded-3xl p-8 ${
                    p.popular
                      ? "bg-ink text-on-ink shadow-glow"
                      : "border border-border bg-card text-ink"
                  }`}
                >
                  {p.popular && (
                    <span className="absolute -top-3 left-8 rounded-full bg-teal px-3 py-1 text-xs font-semibold text-ink">
                      Most popular
                    </span>
                  )}
                  <h3 className="font-display text-3xl">{p.name}</h3>
                  <p className={`mt-1 text-sm ${p.popular ? "text-on-ink-muted" : "text-muted-foreground"}`}>
                    {p.tagline}
                  </p>
                  <p className="mt-8 font-display text-5xl">
                    {p.price}
                    <span className={p.popular ? "text-teal" : "text-teal-deep"}>{p.suffix}</span>
                  </p>
                  <ul className="mt-8 flex-1 space-y-3 text-sm">
                    {p.features.map((f) => (
                      <li key={f} className="flex gap-3">
                        <Check className={`mt-0.5 h-4 w-4 shrink-0 ${p.popular ? "text-teal" : "text-teal-deep"}`} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Button asChild variant={p.popular ? "hero" : "ink"} size="lg" className="mt-10 h-12">
                    <Link to="/project-intake">Get started</Link>
                  </Button>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-10 text-center text-sm text-muted-foreground">
            Need something custom?{" "}
            <Link to="/contact" className="text-teal-deep underline underline-offset-4">
              Request a quote
            </Link>{" "}
            or{" "}
            <Link to="/value-packs" className="text-teal-deep underline underline-offset-4">
              view value packs
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-t border-border bg-secondary py-28">
        <div className="container-site grid gap-12 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 120}>
              <figure>
                <span className="font-display text-7xl leading-none text-teal-deep">"</span>
                <blockquote className="font-display text-3xl leading-snug text-ink">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6 text-sm">
                  <span className="font-medium text-ink">{t.name}</span>
                  <span className="text-muted-foreground"> — {t.role}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
