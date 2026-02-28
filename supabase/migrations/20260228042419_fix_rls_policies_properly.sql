/*
  # Fix RLS Policies - Remove Broken Duplicate Check

  This migration fixes the RLS policies by removing the broken duplicate email check.
  
  ## Problem
  RLS policies cannot reference the "new" row being inserted in a way that allows
  comparison with existing rows. The previous attempt resulted in self-comparison
  (dr.business_email = dr.business_email) which always evaluates to true, blocking all inserts.
  
  ## Solution
  Keep the rate limiting but remove the duplicate email check from RLS.
  The edge function already has validation logic, so we'll rely on that for duplicate prevention.
  
  ## Tables Updated
  - public.demo_requests
  - public.contact_submissions  
  - public.ai_readiness_requests
*/

-- Fix demo_requests policy - simplified without duplicate check
DROP POLICY IF EXISTS "Rate limited demo request inserts" ON demo_requests;

CREATE POLICY "Allow anonymous demo request inserts"
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
  );

-- Fix contact_submissions policy - simplified without duplicate check
DROP POLICY IF EXISTS "Rate limited contact submission inserts" ON contact_submissions;

CREATE POLICY "Allow anonymous contact submission inserts"
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
  );

-- Fix ai_readiness_requests policy - simplified without duplicate check
DROP POLICY IF EXISTS "Rate limited ai readiness inserts" ON ai_readiness_requests;

CREATE POLICY "Allow anonymous ai readiness inserts"
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
  );
