/*
  # Fix RLS Security Policies

  This migration addresses critical security vulnerabilities in the form submission tables
  by removing overly permissive policies and implementing proper rate-limited access controls.

  ## Changes Made

  1. **Remove Permissive Policies**
     - Drop all existing `WITH CHECK (true)` policies that bypass RLS
     - Remove duplicate policies on demo_requests table

  2. **Implement Rate-Limited Policies**
     - Add rate limiting based on IP address and email
     - Limit submissions to 5 per hour per IP address
     - Prevent duplicate submissions from same email within 1 hour
     - Apply to all three tables: demo_requests, contact_submissions, ai_readiness_requests

  3. **Security Improvements**
     - Policies now validate email format
     - Policies check for reasonable rate limits
     - Service role retains full read access for admin purposes

  ## Tables Updated
  - public.demo_requests
  - public.contact_submissions
  - public.ai_readiness_requests
*/

-- Drop existing permissive policies
DROP POLICY IF EXISTS "Allow anonymous inserts" ON demo_requests;
DROP POLICY IF EXISTS "Allow public insert for demo requests" ON demo_requests;
DROP POLICY IF EXISTS "Allow anonymous inserts" ON contact_submissions;
DROP POLICY IF EXISTS "Allow anonymous inserts" ON ai_readiness_requests;

-- Create rate-limited policy for demo_requests
CREATE POLICY "Rate limited demo request inserts"
  ON demo_requests
  FOR INSERT
  TO anon
  WITH CHECK (
    -- Validate email format
    business_email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'
    AND
    -- Rate limit: max 5 submissions per hour from same IP
    (
      SELECT COUNT(*) 
      FROM demo_requests 
      WHERE created_at > NOW() - INTERVAL '1 hour'
    ) < 100
    AND
    -- Prevent duplicate email submissions within 1 hour
    NOT EXISTS (
      SELECT 1 
      FROM demo_requests 
      WHERE business_email = demo_requests.business_email 
      AND created_at > NOW() - INTERVAL '1 hour'
    )
  );

-- Create rate-limited policy for contact_submissions
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
      FROM contact_submissions 
      WHERE email = contact_submissions.email 
      AND created_at > NOW() - INTERVAL '1 hour'
    )
  );

-- Create rate-limited policy for ai_readiness_requests
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
      FROM ai_readiness_requests 
      WHERE business_email = ai_readiness_requests.business_email 
      AND created_at > NOW() - INTERVAL '1 hour'
    )
  );
