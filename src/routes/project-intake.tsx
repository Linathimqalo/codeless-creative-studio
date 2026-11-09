import { createFileRoute, Link } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";
import { toast } from "sonner";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { PageHero } from "@/components/site/Reveal";
import { budgetOptions, featureOptions, projectTypes, timelineOptions } from "@/data/site";
import { submitIntake } from "@/lib/forms.functions";
import { intakeSchema } from "@/lib/forms.schema";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/project-intake")({
  head: () => ({
    meta: [
      { title: "Start Your Project — Codeless Studio" },
      { name: "description", content: "Tell us about your project in a short four-step brief and get a tailored proposal." },
      { property: "og:title", content: "Start Your Project — Codeless Studio" },
      { property: "og:description", content: "Help us understand your vision so we can create the perfect solution." },
    ],
  }),
  component: IntakePage,
});

const steps = ["About you", "Project", "Budget & timing", "Details"];

function Chip({ active, onClick, children }: { active: boolean; onClick: () => void; children: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "flex items-center justify-between gap-3 rounded-2xl border px-5 py-4 text-left text-sm transition-all",
        active ? "border-teal-deep bg-teal-soft text-ink" : "border-border bg-card text-ink hover:border-teal-deep",
      )}
    >
      {children}
      {active && <Check className="h-4 w-4 text-teal-deep" />}
    </button>
  );
}

function IntakePage() {
  const send = useServerFn(submitIntake);
  const [step, setStep] = useState(0);
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState(false);
  const [f, setF] = useState({
    fullName: "", email: "", phone: "", company: "",
    projectType: "", features: [] as string[], budget: "", timeline: "", details: "",
  });
  const set = (k: keyof typeof f, v: string | string[]) => setF((p) => ({ ...p, [k]: v }));

  function validStep() {
    if (step === 0) {
      const r = intakeSchema.pick({ fullName: true, email: true }).safeParse(f);
      if (!r.success) { toast.error(r.error.issues[0]?.message ?? "Please check the form"); return false; }
    }
    if (step === 1 && !f.projectType) { toast.error("Choose a project type"); return false; }
    if (step === 2 && (!f.budget || !f.timeline)) { toast.error("Choose a budget and timeline"); return false; }
    return true;
  }

  async function submit() {
    const parsed = intakeSchema.safeParse(f);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    setBusy(true);
    try {
      await send({ data: parsed.data });
      setDone(true);
    } catch {
      toast.error("Could not submit your brief. Please try again.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <>
      <PageHero
        eyebrow="Project brief"
        title={<>Tell us what you're <span className="italic text-teal">imagining.</span></>}
        intro="Four short steps. It helps us understand your vision and come back with a tailored proposal."
      />
      <section className="bg-paper py-20">
        <div className="container-site max-w-3xl">
          {done ? (
            <div className="rounded-3xl border border-border bg-card p-12 text-center">
              <h2 className="font-display text-4xl text-ink">Brief received — thank you.</h2>
              <p className="mt-4 text-muted-foreground">We'll review your project and get back to you soon.</p>
              <Button asChild variant="ink" size="lg" className="mt-8 h-12"><Link to="/work">Explore our work</Link></Button>
            </div>
          ) : (
            <div className="rounded-3xl border border-border bg-card p-8 md:p-12">
              <ol className="mb-10 grid grid-cols-4 gap-3">
                {steps.map((s, i) => (
                  <li key={s}>
                    <div className={cn("h-1 rounded-full", i <= step ? "bg-teal-deep" : "bg-border")} />
                    <p className={cn("mt-3 hidden text-xs sm:block", i === step ? "text-ink" : "text-muted-foreground")}>{String(i + 1).padStart(2, "0")} · {s}</p>
                  </li>
                ))}
              </ol>

              {step === 0 && (
                <div className="space-y-4">
                  <h2 className="font-display text-3xl text-ink">Let's get started</h2>
                  <Input className="h-12" placeholder="Full name *" value={f.fullName} onChange={(e) => set("fullName", e.target.value)} />
                  <Input className="h-12" type="email" placeholder="Email address *" value={f.email} onChange={(e) => set("email", e.target.value)} />
                  <Input className="h-12" placeholder="Phone number" value={f.phone} onChange={(e) => set("phone", e.target.value)} />
                  <Input className="h-12" placeholder="Company name (optional)" value={f.company} onChange={(e) => set("company", e.target.value)} />
                </div>
              )}
              {step === 1 && (
                <div className="space-y-8">
                  <div>
                    <h2 className="mb-4 font-display text-3xl text-ink">What are we building?</h2>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {projectTypes.map((t) => <Chip key={t} active={f.projectType === t} onClick={() => set("projectType", t)}>{t}</Chip>)}
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-4 font-display text-2xl text-ink">Features you need</h3>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {featureOptions.map((t) => (
                        <Chip key={t} active={f.features.includes(t)} onClick={() => set("features", f.features.includes(t) ? f.features.filter((x) => x !== t) : [...f.features, t])}>{t}</Chip>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              {step === 2 && (
                <div className="space-y-8">
                  <div>
                    <h2 className="mb-4 font-display text-3xl text-ink">Budget</h2>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {budgetOptions.map((t) => <Chip key={t} active={f.budget === t} onClick={() => set("budget", t)}>{t}</Chip>)}
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-4 font-display text-2xl text-ink">Timeline</h3>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {timelineOptions.map((t) => <Chip key={t} active={f.timeline === t} onClick={() => set("timeline", t)}>{t}</Chip>)}
                    </div>
                  </div>
                </div>
              )}
              {step === 3 && (
                <div className="space-y-4">
                  <h2 className="font-display text-3xl text-ink">Anything else?</h2>
                  <Textarea rows={7} placeholder="Goals, inspiration sites, existing website, anything that helps…" value={f.details} onChange={(e) => set("details", e.target.value)} />
                </div>
              )}

              <div className="mt-10 flex items-center justify-between">
                <Button variant="ghost" onClick={() => setStep((s) => s - 1)} disabled={step === 0}><ArrowLeft /> Back</Button>
                {step < 3 ? (
                  <Button variant="ink" size="lg" className="h-12" onClick={() => validStep() && setStep((s) => s + 1)}>Next <ArrowRight /></Button>
                ) : (
                  <Button variant="hero" size="lg" className="h-12" onClick={submit} disabled={busy}>{busy ? "Sending…" : "Submit brief"}</Button>
                )}
              </div>
            </div>
          )}
          <p className="mt-8 text-center text-sm text-muted-foreground">
            Prefer to talk?{" "}
            <a href="https://calendly.com/mqalolinathi/30min" target="_blank" rel="noreferrer" className="text-teal-deep underline underline-offset-4">Book a 30-minute meeting</a>
          </p>
        </div>
      </section>
    </>
  );
}
