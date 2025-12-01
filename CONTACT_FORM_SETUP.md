# Contact Form Setup Instructions

The contact form on your website is configured to send emails to `info@sapientialpublishing.com` using Formspree, a reliable form handling service.

## Quick Setup (5 minutes)

### Step 1: Create a Formspree Account

1. Go to [https://formspree.io](https://formspree.io)
2. Click "Get Started" or "Sign Up"
3. Create a free account using your email (info@sapientialpublishing.com recommended)
4. Verify your email address

### Step 2: Create a New Form

1. Once logged in, click "+ New Form"
2. Name it: "SPH Website Contact Form"
3. Set the email to: `info@sapientialpublishing.com`
4. Click "Create Form"

### Step 3: Get Your Form ID

1. After creating the form, you'll see a form endpoint that looks like:
   ```
   https://formspree.io/f/YOUR_FORM_ID
   ```
2. Copy the form ID (the part after `/f/`)

### Step 4: Update the Website Code

1. Open the file: `app/contact/page.tsx`
2. Find line 23 where it says:
   ```javascript
   const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
   ```
3. Replace `YOUR_FORM_ID` with the actual form ID you copied from Formspree
4. Save the file

### Step 5: Deploy the Changes

```bash
git add app/contact/page.tsx
git commit -m "Configure Formspree contact form"
git push
```

## How It Works

- When someone fills out the contact form on your website, Formspree receives the submission
- Formspree immediately forwards the message to `info@sapientialpublishing.com`
- You'll receive an email with all the form details:
  - Sender's name
  - Sender's email
  - Phone number (if provided)
  - Subject
  - Message

## Formspree Features

### Free Plan Includes:
- 50 submissions per month
- Email notifications
- Spam filtering
- File uploads (up to 10MB)
- Export data

### Paid Plans (if you need more):
- **Gold Plan ($10/month)**: 1,000 submissions/month
- **Platinum Plan ($40/month)**: Unlimited submissions

## Testing the Form

After setup:
1. Visit your website's contact page
2. Fill out the form with test data
3. Submit the form
4. You should receive an email at info@sapientialpublishing.com within 1-2 minutes

## Troubleshooting

### Not receiving emails?

1. **Check spam folder** - First submission might go to spam
2. **Verify email** - Make sure you verified your Formspree account email
3. **Check form ID** - Ensure you copied the correct form ID
4. **Check Formspree dashboard** - Log in to see if submissions are being received

### Form not submitting?

1. Check browser console for errors (F12 → Console tab)
2. Verify the form ID is correct in the code
3. Ensure you've deployed the latest changes

## Alternative: Use Web3Forms (No Account Needed)

If you prefer not to create a Formspree account, you can use Web3Forms:

1. Go to [https://web3forms.com](https://web3forms.com)
2. Enter your email: info@sapientialpublishing.com
3. Get your access key
4. In `app/contact/page.tsx`, replace the fetch URL with:
   ```javascript
   const response = await fetch("https://api.web3forms.com/submit", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify({
       access_key: "YOUR_WEB3FORMS_ACCESS_KEY",
       name: formData.name,
       email: formData.email,
       phone: formData.phone,
       subject: formData.subject,
       message: formData.message,
     }),
   });
   ```

## Support

- **Formspree Documentation**: https://help.formspree.io
- **Web3Forms Documentation**: https://docs.web3forms.com

Need help? Contact the developer or refer to the service documentation above.
