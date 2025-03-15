import * as functions from "firebase-functions";
import mailchimp from "@mailchimp/mailchimp_marketing";


const mailchimpConfig = functions.config()?.mailchimp || {};
const audienceId = mailchimpConfig.audience_id || process.env.MAILCHIMP_AUDIENCE_ID || "";


mailchimp.setConfig({
  apiKey: mailchimpConfig.key || process.env.MAILCHIMP_API_KEY || "",
  server: mailchimpConfig.server || process.env.MAILCHIMP_SERVER || "",
});

// ✅ Function to subscribe a user to Mailchimp
export const subscribeUser = functions.https.onRequest(async (req, res) => {
    console.log("➡️ Request received:", req.body);
  
    const mailchimpConfig = functions.config()?.mailchimp || {};
    const audienceId = mailchimpConfig.audience_id || "";
  
    console.log("🔍 Mailchimp config:", mailchimpConfig);
    console.log("🔍 Audience ID:", audienceId);
  
    const { email, firstName, lastName, agreeToEmails } = req.body;
  
    if (!email || !agreeToEmails) {
      res.status(400).json({ message: "Missing required fields" });
      return;
    }
  
    if (!audienceId) {
      res.status(500).json({ message: "Mailchimp Audience ID is not set" });
      return;
    }
  
    try {
      await mailchimp.lists.addListMember(audienceId, {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: firstName || "",
          LNAME: lastName || "",
        },
      });
      res.status(200).json({ message: "User subscribed successfully" });
    } catch (error: any) {
      console.error("❌ Mailchimp error:", error.response ? error.response.body : error.message);
      res.status(500).json({ message: "Failed to subscribe user", error: error.message });
    }
  });

export const sendMassEmail = functions.https.onRequest(async (req, res) => {
    if (req.method !== "POST") {
        res.status(405).json({ message: "Method Not Allowed" });
        return;
    }

    const { subject, body } = req.body;

    if (!subject || !body) {
        res.status(400).json({ message: "Missing required fields" });
        return;
    }

    try {
        const campaign = await mailchimp.campaigns.create({
            type: "regular",
            recipients: {
                list_id: audienceId,
            },
            settings: {
                subject_line: subject,
                title: "Mass Email Campaign",
                from_name: "Your Name",
                reply_to: "your-email@example.com",
            },
        });

        if ('id' in campaign) {
            await mailchimp.campaigns.setContent(campaign.id, {
        });

        const response = await mailchimp.campaigns.send(campaign.id);
        } else {
            throw new Error("Failed to create campaign: Missing campaign ID");
        }
        const response = await mailchimp.campaigns.send(campaign.id);
        console.log("✅ Mailchimp response:", response);
        res.status(200).json({ message: "Mass email sent successfully" });
    } catch (error: any) {
        console.error("❌ Mailchimp error:", error);
        res.status(500).json({ message: "Failed to send mass email", error: error.message });
    }
});