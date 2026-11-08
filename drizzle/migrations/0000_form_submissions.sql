CREATE TABLE public.contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT ALL ON public.contact_submissions TO service_role;
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE TABLE public.project_intake_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  phone text,
  company text,
  project_type text NOT NULL,
  features text[] NOT NULL DEFAULT '{}',
  budget text NOT NULL,
  timeline text NOT NULL,
  details text,
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT ALL ON public.project_intake_submissions TO service_role;
ALTER TABLE public.project_intake_submissions ENABLE ROW LEVEL SECURITY;