import type { Handler } from '@netlify/functions';
import fetch from 'node-fetch';

const MAILCHIMP_API_KEY = process.env.MC_API_KEY!;
const MAILCHIMP_LIST_ID = process.env.MC_LIST_ID!;
const MAILCHIMP_SERVER_PREFIX = 'us10';

const handler: Handler = async (event, _context) => {
  const { subject, html } = JSON.parse(event.body || '{}');

  try {
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
          from_name: 'Mark Allman',
          reply_to: 'logankarate@gmail.com',
        },
      }),
    });

    const campaign = await campaignRes.json();

    if (!campaign.id) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Campaign creation failed' }),
      };
    }

    await fetch(`https://${MAILCHIMP_SERVER_PREFIX}.api.mailchimp.com/3.0/campaigns/${campaign.id}/content`, {
      method: 'PUT',
      headers: {
        Authorization: `apikey ${MAILCHIMP_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ html }),
    });

    await fetch(`https://${MAILCHIMP_SERVER_PREFIX}.api.mailchimp.com/3.0/campaigns/${campaign.id}/actions/send`, {
      method: 'POST',
      headers: { Authorization: `apikey ${MAILCHIMP_API_KEY}` },
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  } catch (error: any) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message || 'Unknown error' }),
    };
  }
};

export { handler };
