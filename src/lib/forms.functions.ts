import { createServerFn } from "@tanstack/react-start";
import { contactSchema, intakeSchema } from "./forms.schema";

export const submitContact = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => contactSchema.parse(data))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin.from("contact_submissions").insert(data);
    if (error) throw new Error("Could not send your message. Please try again.");
    return { ok: true };
  });

export const submitIntake = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => intakeSchema.parse(data))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin.from("project_intake_submissions").insert({
      full_name: data.fullName,
      email: data.email,
      phone: data.phone || null,
      company: data.company || null,
      project_type: data.projectType,
      features: data.features,
      budget: data.budget,
      timeline: data.timeline,
      details: data.details || null,
    });
    if (error) throw new Error("Could not submit your brief. Please try again.");
    return { ok: true };
  });
