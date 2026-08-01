# Email Configuration Setup Instructions

## EmailJS Setup for Parts Request Form

The Parts Request form is configured to send emails to **info@guleraero.com** using EmailJS.

### Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up with **info@guleraero.com**
3. Verify your email address

### Step 2: Create Email Service

1. In the EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider:
   - **Gmail** (recommended for Google Workspace)
   - Or any other provider you prefer
4. Follow the connection steps for your chosen provider
5. **Copy the Service ID** (e.g., `service_guleraero`)

### Step 3: Create Email Template

1. In the EmailJS dashboard, go to **Email Templates**
2. Click **Create New Template**
3. Set Template Name: `Parts Request - Guler Aero Solutions`
4. Use this template content:

```
Subject: New Parts Request - {{company_name}}

From: {{from_name}}
Company: {{company_name}}
Country: {{country}}
Website: {{website}}

Contact Person: {{contact_person}}
Job Title: {{job_title}}
Corporate Email: {{corporate_email}}
Phone: {{phone}}

─────────────────────────────
PART DETAILS:
─────────────────────────────

Part Number (P/N): {{part_number}}
Quantity Required: {{quantity}}

Part Description:
{{part_description}}

─────────────────────────────
Submission Date: {{submission_date}}
─────────────────────────────

This request was submitted via the Guler Aero Solutions website.
Please respond to: {{corporate_email}}
```

5. Set **To Email**: `info@guleraero.com`
6. **Copy the Template ID** (e.g., `template_parts_request`)

### Step 4: Get Public Key

1. In the EmailJS dashboard, go to **Account** → **General**
2. Find and **copy your Public Key**

### Step 5: Update the Code

Open `/src/app/pages/PartsRequestPage.tsx` and update these values around line 30:

```typescript
const serviceId = 'YOUR_SERVICE_ID_HERE';        // Replace with your Service ID
const templateId = 'YOUR_TEMPLATE_ID_HERE';      // Replace with your Template ID
const publicKey = 'YOUR_PUBLIC_KEY_HERE';        // Replace with your Public Key
```

### Step 6: Test the Form

1. Go to your website's Parts Request page
2. Fill out the form with test data
3. Click "Submit Parts Request"
4. Check **info@guleraero.com** inbox for the email

---

## Alternative: Using Google Workspace SMTP

If you prefer to use Google Workspace SMTP directly instead of EmailJS, you'll need to:

1. Enable 2-factor authentication on the Google Workspace account
2. Generate an App Password
3. Set up a backend service (Node.js, PHP, etc.) to handle SMTP
4. Update the form to send requests to your backend API

**Note**: The EmailJS solution is simpler and doesn't require backend infrastructure.

---

## Troubleshooting

**Form shows "Error" message:**
- Verify your Service ID, Template ID, and Public Key are correct
- Check EmailJS dashboard for error logs
- Ensure your email service is properly connected

**Emails not arriving:**
- Check spam folder in info@guleraero.com
- Verify the template's "To Email" is set correctly
- Check EmailJS usage limits (free plan: 200 emails/month)

**Need help?**
EmailJS documentation: https://www.emailjs.com/docs/

---

## Current Configuration

- **Recipient Email**: info@guleraero.com
- **Email Service**: EmailJS
- **Package**: @emailjs/browser (v4.4.1)
- **Form Location**: /src/app/pages/PartsRequestPage.tsx

All form submissions will include:
- Company information (name, country, website)
- Contact details (person, job title, email, phone)
- Part details (number, description, quantity)
- Submission timestamp (Istanbul timezone)