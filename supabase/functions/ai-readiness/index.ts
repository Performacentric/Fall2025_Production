import { createClient } from 'npm:@supabase/supabase-js@2.39.0';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Client-Info, Apikey',
};

interface AIReadinessRequest {
  first_name: string;
  last_name: string;
  business_email: string;
  company_name: string;
  primary_interest: string[];
  message?: string;
  campaign_source: string;
  heard_about_us?: string;
  website_url?: string;
}

Deno.serve(async (req: Request) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    if (req.method !== 'POST') {
      return new Response(
        JSON.stringify({ success: false, error: 'Method not allowed' }),
        {
          status: 405,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    const body: AIReadinessRequest = await req.json();

    if (body.website_url && body.website_url.trim() !== '') {
      console.log('Honeypot triggered - rejecting spam submission');
      return new Response(
        JSON.stringify({ success: false, error: 'Invalid submission' }),
        {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    if (
      !body.first_name ||
      !body.last_name ||
      !body.business_email ||
      !body.company_name ||
      !body.primary_interest ||
      body.primary_interest.length === 0
    ) {
      return new Response(
        JSON.stringify({ success: false, error: 'Missing required fields' }),
        {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.business_email)) {
      return new Response(
        JSON.stringify({ success: false, error: 'Invalid email format' }),
        {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? ''
    );

    const { error } = await supabase.from('ai_readiness_requests').insert({
      first_name: body.first_name,
      last_name: body.last_name,
      business_email: body.business_email,
      company_name: body.company_name,
      primary_interest: body.primary_interest,
      message: body.message || '',
      campaign_source: body.campaign_source || 'direct',
      heard_about_us: body.heard_about_us || '',
    });

    if (error) {
      console.error('Database error:', error);
      return new Response(
        JSON.stringify({ success: false, error: 'Failed to save AI readiness request' }),
        {
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    try {
      const leadsApiKey = Deno.env.get('PERFORMACENTRIC_LEADS_KEY');
      
      if (leadsApiKey) {
        const leadsPayload = {
          first_name: body.first_name,
          last_name: body.last_name,
          business_email: body.business_email,
          company_name: body.company_name,
          primary_interest: body.primary_interest,
          message: body.message || '',
          campaign_source: body.campaign_source || 'direct',
          heard_about_us: body.heard_about_us || '',
        };

        await fetch('https://performacentric.com/leads', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-api-key': leadsApiKey,
          },
          body: JSON.stringify(leadsPayload),
        });
      }
    } catch (apiError) {
      console.error('External API error (non-blocking):', apiError);
    }

    return new Response(
      JSON.stringify({ success: true }),
      {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Unexpected error:', error);
    return new Response(
      JSON.stringify({ success: false, error: 'Internal server error' }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});
