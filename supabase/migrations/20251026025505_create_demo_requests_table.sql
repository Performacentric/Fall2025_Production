/*
  # Create demo_requests table

  1. New Tables
    - `demo_requests`
      - `id` (uuid, primary key) - Unique identifier for each demo request
      - `first_name` (text) - Requestor's first name
      - `last_name` (text) - Requestor's last name
      - `business_email` (text) - Work email address
      - `company_name` (text) - Name of the company
      - `company_size` (text) - Size category of the company
      - `primary_interest` (text array) - Array of selected interest areas
      - `message` (text) - Optional message about business needs
      - `campaign_source` (text) - Marketing campaign source (UTM or 'direct')
      - `heard_about_us` (text) - How they discovered Performacentric
      - `created_at` (timestamptz) - Timestamp of request submission
  
  2. Security
    - Enable RLS on `demo_requests` table
    - Add policy for service role to insert demo requests
    - Public users can submit but cannot read other requests
*/

CREATE TABLE IF NOT EXISTS demo_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name text NOT NULL,
  last_name text NOT NULL,
  business_email text NOT NULL,
  company_name text NOT NULL,
  company_size text NOT NULL,
  primary_interest text[] NOT NULL,
  message text DEFAULT '',
  campaign_source text DEFAULT 'direct',
  heard_about_us text DEFAULT '',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE demo_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anonymous inserts"
  ON demo_requests
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Service role can read all demo requests"
  ON demo_requests
  FOR SELECT
  TO service_role
  USING (true);
