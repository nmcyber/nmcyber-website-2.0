# Download Resource Service (Backend)

Express + TypeScript service that sends gated resources (PDFs, etc.) via email with secure, time‑limited links.

---

## What this service does

- **Gated downloads**: user submits an email → receives a one‑time download link.
- **Security**:
  - Download tokens: **single‑use**, **24h expiry** (configurable).
  - Emails are **encrypted + hashed** before storage.
  - **Rate limiting**: default 5 requests/hour per email.
- **Integrations**:
  - **PostgreSQL + Prisma** for persistence.
  - **Resend** for transactional email.
  - **ZeroBounce** email validation checks.

---

## Project Structure

- Tech stack: **Node (Bun)**, **Express**, **TypeScript**, **Prisma**, **PostgreSQL**.
- Local URL: **`http://localhost:4000`**.
- Frontend calls this service via **`/api/resources/*`** and **`/api/contact/*`**.

---

## Project structure (high level)

```text
backend/
├── src/
│   ├── app.ts          # Express app + middleware
│   ├── server.ts       # HTTP server bootstrap
│   ├── controllers/    # HTTP handlers (thin)
│   ├── services/       # Business logic (tokens, email, validation)
│   ├── routes/         # Route definitions
│   ├── utils/          # Shared helpers (crypto, dates, errors)
│   └── config.ts       # Env parsing + typed config
├── prisma/
│   ├── schema.prisma   # DB schema (Resource*, ContactRequest)
│   └── seed.ts         # Sample data
├── storage/            # Resource files for local dev
└── .env                # Environment variables (not committed)
```

---

## Quick start (local development)

From `website/backend`:

```bash
# 1. Install dependencies
bun install

# 2. Create .env from template
cp env.simple.template .env

# 3. Generate secrets (once) and paste into .env
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"  # DOWNLOAD_TOKEN_SECRET
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"  # EMAIL_ENCRYPTION_KEY

# 4. Prepare PostgreSQL (once)
# - Install PostgreSQL
# - Create DB:  CREATE DATABASE nmcyber;

# 5. Prisma setup (once, or when schema changes)
bun run prisma:generate
bun run prisma:push
bun run prisma:seed   # optional sample data

# 6. Run the dev server
bun run dev
```

Server runs on `http://localhost:4000`.

---

## Environment variables (minimum)

Put these in `backend/.env`:

```env
# Database
DATABASE_URL=postgresql://dbuser:password@localhost:5432/dbname

# Security (64‑character hex strings)
DOWNLOAD_TOKEN_SECRET=...
EMAIL_ENCRYPTION_KEY=...

# Email (Resend)
RESEND_API_KEY=re_...
EMAIL_FROM_ADDRESS=hello@yourdomain.com
EMAIL_FROM_NAME=NMCyber

# Optional: ZeroBounce email validation
ZEROBOUNCE_API_KEY=your_zerobounce_api_key_here

# URLs
APP_BASE_URL=http://localhost:3000   # Frontend
API_BASE_URL=http://localhost:4000   # This service
```

Notes:
- Without `ZEROBOUNCE_API_KEY`, the service still works using built‑in format + disposable checks only.
- `APP_BASE_URL` / `API_BASE_URL` must be set correctly in production.

---

## Core flows (high level)

### 1. Resource download flow

1. Frontend calls **`POST /api/resources/:assetId/request`** with:
   - `email`
   - `consentVersion`
   - optional `metadata` (e.g. UTM tags).
2. Service:
   - Validates + de‑duplicates email (hash).
   - Applies **rate limiting**.
   - Encrypts email and stores `ResourceRequest`.
   - Generates a **signed, single‑use token** and stores `ResourceToken`.
   - Sends an email via **Resend** with a link:
     - `GET /api/resources/token/:tokenId/consume`.
3. When the user clicks the link:
   - Token is validated (expiry, single‑use).
   - Resource file is streamed from `storage/`.

### 2. Contact form flow

1. Frontend calls **`POST /api/contact`** with:
   - `name`
   - `email`
   - optional `company`
   - optional `employeeCount`
   - optional `message`
   - optional `metadata` (e.g. page, UTM tags).
2. Service:
   - Validates payload with **Zod**.
   - Applies **rate limiting** by email hash.
   - Encrypts + hashes email and stores a `ContactRequest` row.
   - Sends:
     - Notification email to NMCyber.
     - Confirmation email to the user.

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
4. 

### Email Validation (ZeroBounce) - It refreshes 100 free email validations each month; more validations can be bought at $45 dollars/5000 validations

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

## Key API endpoints (for quick reference)

- **`POST /api/resources/:assetId/request`**
  - Body:
    ```json
    {
      "email": "user@example.com",
      "consentVersion": "2024-10-terms",
      "metadata": { "utmCampaign": "spring" }
    }
    ```
  - Response `202`:
    ```json
    {
      "message": "Request accepted",
      "requestId": "uuid",
      "status": "READY_TO_SEND",
      "devToken": "jwt-token" // only in development
    }
    ```

- **`GET /api/resources/token/:tokenId/consume`**
  - Validates token, streams the file.

- **`POST /api/contact`**
  - Body:
    ```json
    {
      "name": "Jane Doe",
      "email": "jane@example.com",
      "company": "Acme Co",
      "employeeCount": 42,
      "message": "We'd like to learn more about your services.",
      "metadata": {
        "source": "landing-contact-form",
        "utmCampaign": "spring"
      }
    }
    ```
  - Response `201`:
    ```json
    {
      "message": "Contact request submitted successfully",
      "contactId": "uuid",
      "status": "success"
    }
    ```

Other routes are defined in `src/routes/*` and implemented in `src/controllers/*`.

---

## Minimal testing recipes

With server running on `http://localhost:4000`:

```powershell
# Create a resource request (PowerShell)
Invoke-RestMethod -Uri "http://localhost:4000/api/resources/sample-resource/request" `
  -Method POST `
  -ContentType "application/json" `
  -Body '{"email":"test@example.com","consentVersion":"2024-10-terms"}'
```

Then:
- Check inbox for the email.
- Click the download link (or use `devToken` from the JSON response in dev).

Expected:
- HTTP `202` on request.
- Email arrives with download link.
- File downloads once; subsequent uses of the same token are rejected.

---

## Common issues (quick checklist)

- **DB connection errors**
  - Is PostgreSQL running?
  - Is `DATABASE_URL` correct?
  - Has `prisma:push` been run?

- **No emails**
  - Is `RESEND_API_KEY` valid?
  - Is `EMAIL_FROM_ADDRESS` a verified sender/domain in Resend?
  - Check Resend dashboard/logs.

- **Too many requests**
  - Rate limit: default **5 requests per email per hour**.
  - Either wait, or adjust `MAX_REQUESTS_PER_WINDOW` / `REQUEST_WINDOW_MINUTES` in config.

- **Email rejected as invalid / disposable**
  - Check format and domain.
  - If using ZeroBounce, confirm `ZEROBOUNCE_API_KEY` is set and valid.

For deeper changes (new models, endpoints, or providers), start from:
- `prisma/schema.prisma`
- `src/services/*`
- `src/routes/*` and `src/controllers/*`