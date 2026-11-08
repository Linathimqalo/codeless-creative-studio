import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Eyebrow, PageHero, Reveal } from "@/components/site/Reveal";
import { comparison, valuePacks } from "@/data/site";

export const Route = createFileRoute("/value-packs")({
  head: () => ({
    meta: [
      { title: "Pricing & Value Packs — Codeless Studio" },
      { name: "description", content: "Website bundles from R4,200 including domain, DNS, SSL, business email and support." },
      { property: "og:title", content: "Pricing & Value Packs — Codeless Studio" },
      { property: "og:description", content: "Bundled website, domain and email packages for South African businesses." },
    ],
  }),
  component: ValuePacksPage,
});

function ValuePacksPage() {
  return (
    <>
      <PageHero
        eyebrow="Value packs"
        title={<>Everything you need, <span className="italic text-teal">bundled.</span></>}
        intro="Website, domain, SSL, email and support in one transparent price. Choose the bundle that fits — and get the best value for your investment."
      />
      <section className="bg-paper py-24">
        <div className="container-site grid gap-6 md:grid-cols-3">
          {valuePacks.map((v, i) => (
            <Reveal key={v.name} delay={i * 100}>
              <div className={`flex h-full flex-col rounded-3xl p-8 ${i === 1 ? "bg-ink text-on-ink shadow-glow" : "border border-border bg-card text-ink"}`}>
                <h2 className="font-display text-2xl">{v.name}</h2>
                <p className="mt-6 font-display text-5xl">{v.price}</p>
                <p className={`text-xs uppercase tracking-[0.2em] ${i === 1 ? "text-teal" : "text-teal-deep"}`}>{v.once}</p>
                <ul className="mt-8 flex-1 space-y-3 text-sm">
                  {v.features.map((f) => (
                    <li key={f} className="flex gap-3">
                      <Check className={`mt-0.5 h-4 w-4 shrink-0 ${i === 1 ? "text-teal" : "text-teal-deep"}`} /> {f}
                    </li>
                  ))}
                </ul>
                <Button asChild variant={i === 1 ? "hero" : "ink"} size="lg" className="mt-10 h-12">
                  <Link to="/project-intake">Get started</Link>
                </Button>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="bg-secondary py-24">
        <div className="container-site">
          <Reveal>
            <Eyebrow>Compare packages</Eyebrow>
            <h2 className="font-display text-4xl text-ink md:text-5xl">Feature comparison</h2>
            <div className="mt-10 overflow-x-auto rounded-3xl border border-border bg-card">
              <table className="w-full min-w-[560px] text-left text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="p-5 font-medium text-muted-foreground">Feature</th>
                    {comparison.columns.map((c) => (
                      <th key={c} className="p-5 font-display text-xl font-normal text-ink">{c}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparison.rows.map((r) => (
                    <tr key={r.feature} className="border-b border-border last:border-0">
                      <td className="p-5 text-ink">{r.feature}</td>
                      {r.values.map((v, i) => (
                        <td key={i} className={`p-5 ${v === "✓" ? "text-teal-deep" : "text-muted-foreground"}`}>{v}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
