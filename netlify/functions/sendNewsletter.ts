import type { Handler } from '@netlify/functions';
import fetch from 'node-fetch';

const MAILCHIMP_API_KEY = process.env.MC_API_KEY!;
const MAILCHIMP_LIST_ID = process.env.MC_LIST_ID!;
const MAILCHIMP_SERVER_PREFIX = 'us10';

const allowedOrigins = [
  'https://www.qmalogan.com',
  'http://localhost:3000',
];

const handler: Handler = async (event) => {
  const origin = event.headers.origin || '';
  const allowOrigin = allowedOrigins.includes(origin) ? origin : 'null';

  const corsHeaders = {
    'Access-Control-Allow-Origin': allowOrigin,
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
  };

  // ✅ Handle preflight (OPTIONS)
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: corsHeaders,
      body: 'OK',
    };
  }

  // ✅ Handle POST request
  if (event.httpMethod === 'POST') {
    try {
      console.log("📬 Parsing request body...");
      const { subject, html } = JSON.parse(event.body || '{}');
      console.log("✅ Parsed:", { subject, html });

      console.log("📤 Creating campaign...");
      const campaignRes = await fetch(`https://${MAILCHIMP_SERVER_PREFIX}.api.mailchimp.com/3.0/campaigns`, {
        method: 'POST',
        headers: {
          Authorization: `apikey ${MAILCHIMP_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'regular',
          recipients: { list_id: MAILCHIMP_LIST_ID },
          settings: {
            subject_line: subject,
            title: subject,
            from_name: 'Quantum Martial Arts',
            reply_to: 'logankarate@gmail.com',
            auto_footer: true,
            inline_css: true,
          },
        }),
      });

      const campaign = await campaignRes.json();
      console.log("📨 Campaign response:", campaign);

      if (!campaign.id) {
        console.error("❌ Campaign creation failed:", campaign);
        return {
          statusCode: 500,
          headers: corsHeaders,
          body: JSON.stringify({
            error: 'Campaign creation failed',
            mailchimpMessage: campaign.detail || 'No detail provided',
            fullResponse: campaign,
          }),
        };
      }

      // ✅ Set content
      console.log("📝 Setting campaign content...");
      await fetch(`https://${MAILCHIMP_SERVER_PREFIX}.api.mailchimp.com/3.0/campaigns/${campaign.id}/content`, {
        method: 'PUT',
        headers: {
          Authorization: `apikey ${MAILCHIMP_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ html }),
      });

      // ✅ Send campaign
      console.log("🚀 Sending campaign...");
      await fetch(`https://${MAILCHIMP_SERVER_PREFIX}.api.mailchimp.com/3.0/campaigns/${campaign.id}/actions/send`, {
        method: 'POST',
        headers: {
          Authorization: `apikey ${MAILCHIMP_API_KEY}`,
        },
      });

      return {
        statusCode: 200,
        headers: corsHeaders,
        body: JSON.stringify({ success: true }),
      };
    } catch (error: any) {
      console.error("🔥 Unexpected error:", error);
      return {
        statusCode: 500,
        headers: corsHeaders,
        body: JSON.stringify({ error: error.message || 'Unexpected error' }),
      };
    }
  }

  // ❌ Unsupported method
  return {
    statusCode: 405,
    headers: corsHeaders,
    body: 'Method Not Allowed',
  };
};

export { handler };
