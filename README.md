# Day-1-Dispatch-Board-Tidyups

**TidyUps Cleaning Service Inc. — Live Production Dispatch Console**  
Target Domain: [https://tidyupsbooking.com](https://tidyupsbooking.com)  
Primary Service Territory: Edmonton, Alberta (YEG) and Surrounding Regional Corridors

---

## 🚀 Live Product Overview
`Day-1-Dispatch-Board-Tidyups` is the live operations console and direct booking system for TidyUps Cleaning Service Inc. Designed from real operational requirements, it powers:
- **15 Dedicated Cleaners & Solo/Team Units**: Tracking real home hubs in Edmonton (Chappelle, Charlesworth, Keheewin, Oliver, Clareview, Ambleside, Mill Woods, Queen Mary, Secord, Callingwood, Dechene, Westwood, Lorelei, The Hamptons, Jasper Park).
- **Core Cleaning Services**: Standard Cleaning, Deep Cleaning, and Move-Out Cleaning.
- **Two-Way Jobber Sync Hub**: GraphQL connection for visits, clients, quotes, invoices, and job creation.
- **AI Voice-to-Text & Lead Intake**: Direct microphone voice dictation and copy-paste intake for Facebook Ads & SMS leads.
- **Google Maps Platform Integration**: Edmonton territory visualization, address reverse-geocoding, and multi-stop drive calculation.

---

## 🛠️ Tech Stack & Architecture
- **Frontend**: React 19, TypeScript, Tailwind CSS, Lucide Icons, `@vis.gl/react-google-maps`.
- **Backend**: Express on Node.js / `tsx` with server-side proxy routes for Jobber and Google APIs.
- **Database**: Persistent JSON store (`data/dispatch_store.json`).
- **AI & Grounding**: Google GenAI SDK (`@google/genai`).

---

## ⚡ Instant Setup & Launch (Antigravity & Development Sandboxes)

This product is engineered to run seamlessly just by opening the folder or cloning the repo.

### 1. Install Dependencies
```bash
npm install
```

### 2. Launch Development Server
```bash
npm run dev
# OR
npm start
```

- The server boots immediately on port `3000` (or your environment's `$PORT`).
- **No external database required to start**: Persistent operational data is self-contained in `data/dispatch_store.json`, pre-loaded with:
  - 15 Edmonton Cleaning Staff & Solo/Team units
  - Real September & October 2026 scheduled visits with assigned cleaners
  - Jobber Quotes & Invoices ledger for Tidyups Cleaning Service Inc.
  - Interactive map coordinates across Edmonton territories
- **Full Hot-Reloading**: Frontend Vite SPA runs with middleware proxy directly on the backend Express server.

---

## 🔗 Connecting Your Real Jobber Business Account

This application includes official **Jobber OAuth 2.0 connection support** with **read-only imports** for visits, clients, quotes, and invoices, plus status and unassigned-cleaner filters. 

> **Safety Guarantee**: Imports are **read-only**. Successful syncs refresh your live dispatch board; failed syncs preserve existing data and show a clear error message. **No automatic changes are sent to your real Jobber jobs.**

### 3-Step Connection Guide:

1. **Configure Environment Variables**:
   Copy `.env.example` to `.env` in the app root:
   ```bash
   cp .env.example .env
   ```
   Fill in your credentials:
   ```env
   JOBBER_CLIENT_ID=your-jobber-app-client-id
   JOBBER_CLIENT_SECRET=your-jobber-app-client-secret
   JOBBER_REDIRECT_URI=https://app.tidyupscleaning.com/api/jobber/oauth/callback
   DISPATCH_ADMIN_PASSWORD=your-dispatch-admin-password
   ```

2. **Register the Exact HTTPS Callback URL in Jobber**:
   - Go to the [Jobber Developer Center](https://developer.getjobber.com).
   - In your Developer App settings, set the **OAuth Redirect URI** to your exact HTTPS URL:
     `https://app.tidyupscleaning.com/api/jobber/oauth/callback`
   - Open your dispatch app through that HTTPS address.

3. **Authorize Your Real Business Account**:
   - In the dispatch app, click **Jobber Sync & CSV Import** (or **Authorize in Jobber**).
   - Sign in to your real business account as an administrator and approve access.
   - Click **Sync Calendar & Visits** to import real visits into your dispatch board.

The developer app supplies the API credentials; your business account grants access. Keep secrets out of chat.

---

## 📦 How to Push to GitHub

1. Create a new repository on your GitHub account named:
   **`Day-1-Dispatch-Board-Tidyups`**

2. Run the following command in your terminal:
   ```bash
   git remote add origin https://github.com/<YOUR-GITHUB-USERNAME>/Day-1-Dispatch-Board-Tidyups.git
   git push -u origin main --tags
   ```

---

## 📄 License & Confidentiality
Property of TidyUps Cleaning Service Inc. (cleaningserviceyeg@gmail.com). All rights reserved.
