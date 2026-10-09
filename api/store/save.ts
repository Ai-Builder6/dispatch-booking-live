import type { VercelRequest, VercelResponse } from "@vercel/node";

export default function handler(_req: VercelRequest, res: VercelResponse) {
  res.status(503).json({
    success: false,
    error: "Durable storage is not configured. Changes were not saved.",
  });
}
