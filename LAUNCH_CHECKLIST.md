# Launch status: preview only — do not promote yet

This branch removes the embedded Quo key and stops returning full integration
credentials from the Vercel store responses. Revoke the old Quo key and issue a
replacement; deleting it here does not remove it from Git history.
The bundled store also contained Jobber access/refresh token values; these have
been cleared and must be revoked/replaced if they were real.

Serverless store/config writes now explicitly return 503 rather than claiming
success. A durable database and authenticated server-side writes remain required.
The existing /tmp store is not suitable for production persistence.

Before production:
- Implement server-side staff authorization for every private API, including the
  individual API handlers. Frontend staff-login UI is not sufficient.
- Configure and verify durable storage (and Firebase rules if using Firestore).
- Replace seeded business records with verified data and check booking flows.
- Enter secrets through Vercel Settings > Environment Variables, never chat.
- Verify Jobber OAuth callback routing, refresh-token storage, and real sync.
- Restrict the browser Maps key to allowed domains and enabled Maps APIs.
- Test the protected preview in a browser, including save/reload and booking.
- Only then deploy production and verify the intended domain.

Existing production belongs to the previous repository and is not changed here.
