# Vercel Deployment Setup

## Environment Variables

Add these environment variables in your Vercel project settings:

### Required Variables

1. **SENDGRID_API_KEY**
   - Your SendGrid API key
   - Get it from: SendGrid Dashboard → Settings → API Keys
   - Must have "Mail Send" permissions

2. **SENDGRID_FROM_EMAIL**
   - The email address that will appear as the sender
   - Must be from a domain verified in SendGrid
   - Example: `noreply@yourdomain.com`

3. **CONTACT_EMAIL**
   - The email address where contact form submissions will be sent
   - Example: `contact@yourdomain.com`

### Optional Variables

4. **NEXT_PUBLIC_SITE_URL**
   - Your production site URL
   - Used for Open Graph metadata
   - Example: `https://talonsoftware.com`
   - If not set, defaults to `https://talonsoftware.com`

## How to Add Environment Variables in Vercel

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add each variable:
   - **Key**: Variable name (e.g., `SENDGRID_API_KEY`)
   - **Value**: Your actual value
   - **Environment**: Select all (Production, Preview, Development)
4. Click **Save**
5. Redeploy your application for changes to take effect

## Security Checklist

✅ All sensitive data uses environment variables
✅ No API keys or secrets in code
✅ Error messages don't leak sensitive information
✅ Console logging is sanitized in production
✅ `.env` files are in `.gitignore`

## Testing After Deployment

1. Test the contact form on your live site
2. Check Vercel function logs for any errors
3. Verify emails are being sent successfully
4. Check SendGrid dashboard for email delivery status
