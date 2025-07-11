# OTP Verification App

A simple Next.js API project to send OTP codes using SendGrid.

## Endpoints

- `GET /` - Home page
- `POST /api/send-otp` - Send an OTP to email

## Environment Variables

Set in `.env.local`:

```
SENDGRID_API_KEY=your_sendgrid_key
FROM_EMAIL=your_verified_sendgrid_email
```

## Deploy on Vercel

Set these variables in your Vercel project settings:

- `SENDGRID_API_KEY`
- `FROM_EMAIL`
- `NODE_OPTIONS=--openssl-legacy-provider`
