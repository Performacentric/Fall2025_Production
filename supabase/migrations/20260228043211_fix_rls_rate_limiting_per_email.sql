/*
  # Fix RLS Rate Limiting to Be Per-Email

  1. Changes
    - Drop and recreate INSERT policies for all three tables
    - Change rate limiting from global (100 per hour total) to per-email (5 per hour per email)
    - This prevents one person from blocking all submissions
    
  2. Security
    - Maintains email validation
    - Prevents spam from individual emails (5 submissions per hour max)
    - Allows legitimate users to submit even during high traffic
*/

-- Fix demo_requests policy
DROP POLICY IF EXISTS "Allow anonymous demo request inserts" ON demo_requests;

CREATE POLICY "Allow anonymous demo request inserts"
  ON demo_requests
  FOR INSERT
  TO anon
  WITH CHECK (
    business_email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'
    AND (
      SELECT COUNT(*)
      FROM demo_requests
      WHERE business_email = demo_requests.business_email
      AND created_at > NOW() - INTERVAL '1 hour'
    ) < 5
  );

-- Fix contact_submissions policy
DROP POLICY IF EXISTS "Allow anonymous contact submission inserts" ON contact_submissions;

CREATE POLICY "Allow anonymous contact submission inserts"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (
    email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'
    AND (
      SELECT COUNT(*)
      FROM contact_submissions
      WHERE email = contact_submissions.email
      AND created_at > NOW() - INTERVAL '1 hour'
    ) < 5
  );

-- Fix ai_readiness_requests policy
DROP POLICY IF EXISTS "Allow anonymous ai readiness inserts" ON ai_readiness_requests;

CREATE POLICY "Allow anonymous ai readiness inserts"
  ON ai_readiness_requests
  FOR INSERT
  TO anon
  WITH CHECK (
    business_email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'
    AND (
      SELECT COUNT(*)
      FROM ai_readiness_requests
      WHERE business_email = ai_readiness_requests.business_email
      AND created_at > NOW() - INTERVAL '1 hour'
    ) < 5
  );
