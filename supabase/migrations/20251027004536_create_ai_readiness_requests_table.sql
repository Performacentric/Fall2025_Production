/*
  # Create ai_readiness_requests table

  1. New Tables
    - `ai_readiness_requests`
      - `id` (uuid, primary key) - Unique identifier for each request
      - `first_name` (text) - First name
      - `last_name` (text) - Last name
      - `business_email` (text) - Work email address
      - `company_name` (text) - Company name
      - `primary_interest` (text array) - Array of selected interests
      - `message` (text) - Optional message about business situation
      - `campaign_source` (text) - Campaign source (from utm_source or "direct")
      - `heard_about_us` (text) - How they heard about Performacentric
      - `created_at` (timestamptz) - Timestamp of submission
  
  2. Security
    - Enable RLS on `ai_readiness_requests` table
    - Add policy for anonymous users to insert requests
    - Service role can read all submissions
*/

CREATE TABLE IF NOT EXISTS ai_readiness_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name text NOT NULL,
  last_name text NOT NULL,
  business_email text NOT NULL,
  company_name text NOT NULL,
  primary_interest text[] NOT NULL DEFAULT '{}',
  message text DEFAULT '',
  campaign_source text DEFAULT 'direct',
  heard_about_us text DEFAULT '',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE ai_readiness_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anonymous inserts"
  ON ai_readiness_requests
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Service role can read all ai readiness requests"
  ON ai_readiness_requests
  FOR SELECT
  TO service_role
  USING (true);
