CREATE TABLE waitlist (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL,
  product text NOT NULL CHECK (product IN ('DESEO 90', 'Travesía DESEO')),
  created_at timestamptz DEFAULT now()
);

ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

CREATE POLICY "insert_waitlist" ON waitlist FOR INSERT
  TO anon WITH CHECK (true);

CREATE POLICY "select_waitlist" ON waitlist FOR SELECT
  TO authenticated USING (true);
