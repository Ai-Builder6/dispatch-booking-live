import { INITIAL_TICKETS } from "../src/data/cleaningData";
import { 
  generateHistoricAndFutureVisits, 
  INITIAL_UNSCHEDULED_JOBS, 
  generateJobberQuotes, 
  generateJobberInvoices 
} from "../src/data/jobberCalendarData";
import { CANONICAL_JOBBER_STAFF } from "../src/services/staffRosterService";

const REAL_QUO_LINES = [
  { id: "PNahmHFAAr", name: "Primary Dispatch", number: "+1 (587) 570-8005", status: "active", totalCallsToday: 18 },
  { id: "PNEhbG5QcA", name: "Toll Free (833) TIDYUPS", number: "+1 (833) 843-9877", status: "active", totalCallsToday: 29 },
  { id: "PNvCM3tmPQ", name: "Cleaning Services Ads Line", number: "+1 (587) 742-2500", status: "active", totalCallsToday: 14 },
  { id: "PNJINSGBnZ", name: "Door Hangers & Local Signs", number: "+1 (587) 602-7792", status: "active", totalCallsToday: 11 },
  { id: "PNf7FWXnky", name: "Google My Business (GMB) Direct", number: "+1 (587) 900-7223", status: "active", totalCallsToday: 22 },
];

export default function handler(req: any, res: any) {
  if (req.method === "POST") {
    return res.status(503).json({ success: false, error: "Durable storage is not configured. Changes were not saved." });
  }

  const token = (process.env.JOBBER_ACCESS_TOKEN || process.env.JOBBER_BEARER_TOKEN || "").trim().replace(/^Bearer\s+/i, "");

  return res.status(200).json({
    version: 1,
    lastSavedAt: new Date().toISOString(),
    tickets: INITIAL_TICKETS,
    cleanerOverrides: {},
    scheduledVisits: generateHistoricAndFutureVisits(),
    unscheduledJobs: INITIAL_UNSCHEDULED_JOBS,
    staffRoster: CANONICAL_JOBBER_STAFF,
    quotes: generateJobberQuotes(),
    invoices: generateJobberInvoices(),
    jobberConfig: {
      isConnected: Boolean(token && token.length > 20),
      accountName: "Tidyups Cleaning Service Inc (Jobber)",
      clientId: process.env.JOBBER_CLIENT_ID || "27966135-e33e-4c2e-8dc3-ad7ba06dabb8",
      lastSyncedAt: new Date().toISOString(),
    },
    quoConfig: {
      isConnected: Boolean(process.env.QUO_API_KEY),
      hasApiKey: Boolean(process.env.QUO_API_KEY),
      phoneNumbers: REAL_QUO_LINES,
    },
  });
}
