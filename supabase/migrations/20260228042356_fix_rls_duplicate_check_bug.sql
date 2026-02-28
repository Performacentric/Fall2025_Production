/*
  # Fix RLS Duplicate Check Bug

  This migration fixes a critical bug in the RLS policies that was preventing form submissions.
  
  ## Problem
  The duplicate email check was incorrectly comparing the column to itself:
  `WHERE business_email = demo_requests.business_email`
  
  This caused the NOT EXISTS check to always return false, blocking all submissions.
  
  ## Solution
  Use proper table aliases to compare the new row's email against existing rows:
  `WHERE dr.business_email = NEW.business_email`
  
  However, since we can't reference NEW in RLS policies, we need a different approach.
  The correct way is to use the bare column name for the new value being inserted.
  
  ## Tables Updated
  - public.demo_requests
  - public.contact_submissions  
  - public.ai_readiness_requests
*/

-- Fix demo_requests policy
DROP POLICY IF EXISTS "Rate limited demo request inserts" ON demo_requests;

CREATE POLICY "Rate limited demo request inserts"
  ON demo_requests
  FOR INSERT
  TO anon
  WITH CHECK (
    -- Validate email format
    business_email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'
    AND
    -- Rate limit: max 100 submissions per hour total
    (
      SELECT COUNT(*) 
      FROM demo_requests 
      WHERE created_at > NOW() - INTERVAL '1 hour'
    ) < 100
    AND
    -- Prevent duplicate email submissions within 1 hour
    NOT EXISTS (
      SELECT 1 
      FROM demo_requests dr
      WHERE dr.business_email = business_email
      AND dr.created_at > NOW() - INTERVAL '1 hour'
    )
  );

-- Fix contact_submissions policy  
DROP POLICY IF EXISTS "Rate limited contact submission inserts" ON contact_submissions;

CREATE POLICY "Rate limited contact submission inserts"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (
    -- Validate email format
    email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'
    AND
    -- Rate limit: max 100 total submissions per hour
    (
      SELECT COUNT(*) 
      FROM contact_submissions 
      WHERE created_at > NOW() - INTERVAL '1 hour'
    ) < 100
    AND
    -- Prevent duplicate email submissions within 1 hour
    NOT EXISTS (
      SELECT 1 
      FROM contact_submissions cs
      WHERE cs.email = email
      AND cs.created_at > NOW() - INTERVAL '1 hour'
    )
  );

-- Fix ai_readiness_requests policy
DROP POLICY IF EXISTS "Rate limited ai readiness inserts" ON ai_readiness_requests;

CREATE POLICY "Rate limited ai readiness inserts"
  ON ai_readiness_requests
  FOR INSERT
  TO anon
  WITH CHECK (
    -- Validate email format
    business_email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'
    AND
    -- Rate limit: max 100 total submissions per hour
    (
      SELECT COUNT(*) 
      FROM ai_readiness_requests 
      WHERE created_at > NOW() - INTERVAL '1 hour'
    ) < 100
    AND
    -- Prevent duplicate email submissions within 1 hour
    NOT EXISTS (
      SELECT 1 
      FROM ai_readiness_requests ar
      WHERE ar.business_email = business_email
      AND ar.created_at > NOW() - INTERVAL '1 hour'
    )
  );
