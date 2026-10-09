/** Strip server credentials from any store response, including nested objects. */
export function publicStore(value: unknown): unknown {
  if (Array.isArray(value)) return value.map(publicStore);
  if (value === null || typeof value !== "object") return value;
  return Object.fromEntries(
    Object.entries(value).filter(([key]) => ![
      "clientSecret", "accessToken", "refreshToken", "apiKey", "geminiApiKey",
    ].includes(key)).map(([key, item]) => [key, publicStore(item)]),
  );
}
