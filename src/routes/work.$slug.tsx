import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Eyebrow, Reveal } from "@/components/site/Reveal";
import { projects } from "@/data/site";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.project;
    if (!p) return { meta: [{ title: "Project not found — Codeless Studio" }, { name: "robots", content: "noindex" }] };
    return {
      meta: [
        { title: `${p.title} — Codeless Studio` },
        { name: "description", content: p.summary },
        { property: "og:title", content: `${p.title} — Codeless Studio` },
        { property: "og:description", content: p.summary },
        { property: "og:type", content: "article" },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="container-site py-48 text-center">
      <h1 className="font-display text-5xl text-ink">Project not found</h1>
      <Link to="/work" className="mt-6 inline-block text-teal-deep underline">Back to all work</Link>
    </div>
  ),
  component: ProjectPage,
});

function ProjectPage() {
  const { project: p } = Route.useLoaderData();
  const idx = projects.findIndex((x) => x.slug === p.slug);
  const next = projects[(idx + 1) % projects.length];
  const sections = [
    { label: "The challenge", body: p.challenge },
    { label: "Our approach", body: p.approach },
    { label: "The result", body: p.result },
  ];
  return (
    <>
      <section className="bg-ink pb-16 pt-36 text-on-ink">
        <div className="container-site">
          <Link to="/work" className="inline-flex items-center gap-2 text-sm text-on-ink-muted hover:text-teal">
            <ArrowLeft className="h-4 w-4" /> All work
          </Link>
          <div className="mt-10 grid gap-10 md:grid-cols-[1.5fr_1fr] md:items-end">
            <div>
              <Eyebrow onInk>{p.category}</Eyebrow>
              <h1 className="font-display text-6xl leading-none md:text-8xl">{p.title}</h1>
            </div>
            <div>
              <p className="text-on-ink-muted">{p.overview}</p>
              {p.liveUrl && (
                <Button asChild variant="hero" size="lg" className="mt-6 h-12">
                  <a href={p.liveUrl} target="_blank" rel="noreferrer">Visit live site <ArrowUpRight /></a>
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>
      <section className="bg-ink pb-24">
        <div className="container-site">
          <img src={p.image} alt={p.title} width={1200} height={912} className="aspect-[16/8] w-full rounded-3xl object-cover" />
        </div>
      </section>
      <section className="bg-paper py-24">
        <div className="container-site grid gap-16 md:grid-cols-[1fr_2fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-teal-deep">Built with</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span key={t} className="rounded-full border border-border px-3 py-1 text-sm text-ink">{t}</span>
              ))}
            </div>
          </div>
          <div className="space-y-14">
            {sections.map((s) => (
              <Reveal key={s.label}>
                <h2 className="font-display text-3xl text-ink">{s.label}</h2>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{s.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="border-t border-border bg-secondary">
        <Link to="/work/$slug" params={{ slug: next.slug }} className="group container-site flex items-center justify-between py-16">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-teal-deep">Next project</p>
            <p className="mt-2 font-display text-4xl text-ink md:text-6xl">{next.title}</p>
          </div>
          <ArrowRight className="h-10 w-10 text-ink transition-transform group-hover:translate-x-2" />
        </Link>
      </section>
    </>
  );
}
