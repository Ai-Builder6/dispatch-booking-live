import type { VercelRequest, VercelResponse } from "@vercel/node";

export default function handler(req: VercelRequest, res: VercelResponse) {
  const token = (process.env.JOBBER_ACCESS_TOKEN || process.env.JOBBER_BEARER_TOKEN || "").trim().replace(/^Bearer\s+/i, "");
  const clientId = process.env.JOBBER_CLIENT_ID || "27966135-e33e-4c2e-8dc3-ad7ba06dabb8";
  const hasSecret = Boolean(process.env.JOBBER_CLIENT_SECRET);
  const isConnected = Boolean(token && token.length > 20);

  const mapsApiKey = 
    process.env.VITE_GOOGLE_MAPS_API_KEY || 
    process.env.VITEGOOGLE_MAPS_API_KEY || 
    process.env.GOOGLE_MAPS_API_KEY || 
    process.env.MAPS_API_KEY || 
    "";

  const mapId = 
    process.env.VITE_GOOGLE_MAPS_MAP_ID || 
    process.env.GOOGLE_MAPS_MAP_ID || 
    "2bd06c0db10a0a3ccd4c8603";

  if (req.method === "POST") {
    const { accessToken, accountName } = (req.body || {}) as any;
    const effectiveToken = accessToken ? String(accessToken).trim().replace(/^Bearer\s+/i, "") : token;
    return res.status(200).json({
      success: true,
      message: "Jobber configuration updated",
      config: {
        isConnected: Boolean(effectiveToken && effectiveToken.length > 20),
        accountName: accountName || "Tidyups Cleaning Service Inc (Jobber)",
        clientId,
        hasSecret,
        accessToken: effectiveToken ? `${effectiveToken.slice(0, 8)}...` : "",
        lastSyncedAt: new Date().toISOString(),
        redirectUri: "https://app.tidyupscleaning.com/api/jobber/oauth/callback",
      },
      mapsApiKey,
      mapId,
    });
  }

  return res.status(200).json({
    isConnected,
    accountName: "Tidyups Cleaning Service Inc (Jobber)",
    clientId,
    hasSecret,
    accessToken: token ? `${token.slice(0, 8)}...${token.slice(-4)}` : "",
    lastSyncedAt: new Date().toISOString(),
    environment: "Jobber GraphQL API (v2025-04-16)",
    redirectUri: "https://app.tidyupscleaning.com/api/jobber/oauth/callback",
    mapsApiKey,
    mapId,
  });
}
