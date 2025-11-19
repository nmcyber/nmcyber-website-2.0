# Download Resource Service

Express + TypeScript service for gated resource delivery with email-based download links.

## Features

- Secure download tokens (24h expiry, single-use)
- Automatic email sending via Resend
- Rate limiting (5 requests/hour per email)
- PostgreSQL database with Prisma ORM
- Email tracking and request management
- UTC timezone for all timestamps (stored as TIMESTAMPTZ in PostgreSQL)

---

## Project Structure

```
backend/
├── src/
│   ├── controllers/    # Request handlers
│   ├── services/       # Business logic
│   ├── routes/         # API routes
│   ├── utils/          # Helpers
│   └── config.ts       # Environment config
├── prisma/
│   ├── schema.prisma   # Database schema
│   └── seed.ts         # Sample data
├── storage/            # Local file storage
└── .env                # Environment variables
```

## Quick Start

### 1. Install Dependencies
```bash
bun install
```

### 2. Setup Environment
```bash
cp env.simple.template .env
# Edit .env with your credentials
```

### 3. Generate Security Keys
```bash
bun run generate-keys
# Copy the generated keys to .env
```

### 4. Setup Database
```bash
# Install PostgreSQL locally (https://www.postgresql.org/download/)
# Create database: CREATE DATABASE nmcyber;

# Generate Prisma client
bun run prisma:generate

# Create tables
bun run prisma:push

# Set PostgreSQL timezone to UTC (recommended)
# Run in PostgreSQL: ALTER DATABASE nmcyber SET timezone = 'UTC';

# Seed sample data
bun run prisma:seed
```

### 5. Start Server
```bash
bun run dev
```

Server runs on `http://localhost:4000`

---

## Required Environment Variables

```env
# Database
DATABASE_URL=postgresql://dbuser:password@localhost:5432/dbname

# Security (generate with: bun run generate-keys)
DOWNLOAD_TOKEN_SECRET=your-64-character-hex-key-here

# Email Service - Resend
RESEND_API_KEY=re_your_api_key_here
EMAIL_FROM_ADDRESS=valid_domain_email_address
EMAIL_FROM_NAME=NMCyber

# Email Validation - ZeroBounce (Optional but recommended)
ZEROBOUNCE_API_KEY=your_zerobounce_api_key_here

# Application URLs
APP_BASE_URL=http://localhost:3000
API_BASE_URL=http://localhost:4000
```

**Get Resend API Key:** https://resend.com/api-keys

---

## Setup Details

### Database (PostgreSQL)

1. **Install PostgreSQL:** https://www.postgresql.org/download/windows/
   - Select: PostgreSQL Server, pgAdmin 4, Command Line Tools
   - Port: `5432` (default)
   - Set password for `postgres` user

2. **Create Database:**
   - Open pgAdmin 4
   - Right-click Databases → Create → Database
   - Name: `nmcyber`

3. **Update `.env`:**
   ```env
   DATABASE_URL=postgresql://postgres:yourpassword@localhost:5432/nmcyber
   ```

### Email Service (Resend)

1. Sign up at https://resend.com (free)
2. Go to API Keys → Create API Key
3. Copy API key to `.env`
4. For testing, use `EMAIL_FROM_ADDRESS=valid dev domain email address`
5. For production, add valid production domain email address in Resend dashboard

### Email Validation (ZeroBounce) - Optional but Recommended

**Validation Flow:**
1. **Format check** (instant, free) - basic email syntax validation
2. **Disposable domain check** (instant, free) - blocks common temp email services
3. **ZeroBounce API** (if configured) - comprehensive domain/MX/DNS/SMTP validation
4. **Fallback** - allows emails passing basic checks if API unavailable

**ZeroBounce Features:**
- Domain existence, MX records, DNS, SMTP verification
- Disposable email and spam trap detection
- Accepts `valid` and `catch-all` statuses (QQ, corporate domains use catch-all)
- Free: 100 credits on signup - https://www.zerobounce.net
- API Docs: https://www.zerobounce.net/docs/email-validation-api-quickstart/

**Status Handling:**
- **Accepts:** `valid`, `catch-all` (legitimate providers)
- **Rejects:** `invalid`, `unknown`, `spamtrap`, `abuse`, `do_not_mail`
- **Note:** Free email providers (Gmail, Yahoo) are NOT marked as disposable

**Setup:**
1. Sign up at https://www.zerobounce.net
2. Get API key from dashboard
3. Add `ZEROBOUNCE_API_KEY=your_key` to `.env`

**Without ZeroBounce:** System uses format + disposable domain checks only

---

## Testing

### 1. Start Server
```bash
bun run dev
```

### 2. Test Request (PowerShell)
```powershell
Invoke-RestMethod -Uri "http://localhost:4000/api/resources/sample-resource/request" `
  -Method POST `
  -ContentType "application/json" `
  -Body '{"email":"test@example.com","consentVersion":"2024-10-terms"}'
```

### 3. Check Email
- Check inbox for the email address you used
- Click the download link in the email

### 4. Test Download
The email contains a download link. Click it or use the `devToken` from the response:
```powershell
Invoke-WebRequest -Uri "http://localhost:4000/api/resources/token/DEV_TOKEN_HERE/consume" `
  -Method GET `
  -OutFile "downloaded-file.txt"
```

**Expected Result:**
- Request returns 202 status
- Email received with download link
- File downloads successfully
- Token can only be used once

---

## API Endpoints

### `POST /api/resources/:assetId/request`

Create a resource request.

**Request:**
```json
{
  "email": "user@example.com",
  "consentVersion": "2024-10-terms",
  "metadata": { "utmCampaign": "spring" }
}
```

**Response (202):**
```json
{
  "message": "Request accepted",
  "requestId": "uuid",
  "status": "READY_TO_SEND",
  "devToken": "jwt-token"  // Only in development
}
```

### `GET /api/resources/token/:tokenId/consume`

Download the resource file.

**Response:** File stream with `Content-Disposition: attachment`

---

## Troubleshooting

**"Database connection failed"**
- Verify PostgreSQL is running (Windows Services)
- Check `DATABASE_URL` in `.env`
- Ensure database exists

**"Email not received"**
- Check spam folder
- Verify `RESEND_API_KEY` is correct
- Check Resend dashboard for delivery logs

**"Request limit reached"**
- Rate limit: 5 requests per email per hour
- Wait 60 minutes or use a different email

**"Token already used"**
- Tokens are single-use only
- Make a new request to get a new token

**"Invalid email address" or "Disposable email addresses are not allowed"**
- Email validation rejected the address
- Check if email format is correct
- Disposable/temporary emails are blocked
- If using ZeroBounce, check API key is configured correctly

---




---
## Optional Features
- **Bot Protection:** Add `TURNSTILE_SECRET_KEY` to `.env` or widget

