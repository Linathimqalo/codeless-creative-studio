import { createFileRoute, Link } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { ArrowRight, Mail, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { PageHero } from "@/components/site/Reveal";
import { contact } from "@/data/site";
import { submitContact } from "@/lib/forms.functions";
import { contactSchema } from "@/lib/forms.schema";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Codeless Studio" },
      { name: "description", content: "Get in touch with Codeless Studio by email, WhatsApp or a quick message." },
      { property: "og:title", content: "Contact — Codeless Studio" },
      { property: "og:description", content: "Ready to bring your vision to life? We're here to help." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const send = useServerFn(submitContact);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState(false);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    const parsed = contactSchema.safeParse(form);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    setBusy(true);
    try {
      await send({ data: parsed.data });
      setDone(true);
    } catch {
      toast.error("Could not send your message. Please try again.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>Let's build something <span className="italic text-teal">exceptional.</span></>}
        intro="Questions, ideas or a quick quote — send a message and we'll get back to you."
      />
      <section className="bg-paper py-24">
        <div className="container-site grid gap-16 md:grid-cols-[1.3fr_1fr]">
          <div className="rounded-3xl border border-border bg-card p-8 md:p-10">
            {done ? (
              <div className="py-12 text-center">
                <h2 className="font-display text-4xl text-ink">Message received.</h2>
                <p className="mt-4 text-muted-foreground">Thank you — we'll be in touch soon.</p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5">
                <h2 className="font-display text-3xl text-ink">Quick message</h2>
                <Input placeholder="Full name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="h-12" />
                <Input type="email" placeholder="Email address" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="h-12" />
                <Textarea placeholder="Your message" rows={6} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
                <Button type="submit" variant="ink" size="xl" disabled={busy}>
                  {busy ? "Sending…" : "Send message"}
                </Button>
              </form>
            )}
          </div>
          <div className="space-y-8">
            <div className="rounded-3xl bg-ink p-8 text-on-ink">
              <h2 className="font-display text-2xl">Starting a new project?</h2>
              <p className="mt-2 text-sm text-on-ink-muted">Our project brief helps us quote accurately.</p>
              <Button asChild variant="hero" size="lg" className="mt-6 h-12">
                <Link to="/project-intake">Start the brief <ArrowRight /></Link>
              </Button>
            </div>
            <ul className="space-y-5 text-ink">
              <li className="flex gap-4"><Mail className="h-5 w-5 text-teal-deep" /><a href={`mailto:${contact.email}`}>{contact.email}</a></li>
              <li className="flex gap-4"><MessageCircle className="h-5 w-5 text-teal-deep" /><a href={contact.whatsappUrl} target="_blank" rel="noreferrer">Chat on WhatsApp</a></li>
              <li className="flex gap-4"><MapPin className="h-5 w-5 text-teal-deep" />{contact.location}</li>
            </ul>
            <div className="border-t border-border pt-6 text-sm">
              {contact.hours.map((h) => (
                <div key={h.days} className="flex justify-between py-1.5">
                  <span className="text-ink">{h.days}</span>
                  <span className="text-muted-foreground">{h.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
