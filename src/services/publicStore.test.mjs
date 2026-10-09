import { test } from "node:test";
import assert from "node:assert/strict";
import { publicStore } from "./publicStore.ts";

test("removes credentials recursively without changing dispatch records", () => {
  const input = {
    tickets: [{ id: "test", status: "scheduled" }],
    jobberConfig: { clientId: "public-id", clientSecret: "secret", accessToken: "token", refreshToken: "refresh" },
    quoConfig: { apiKey: "secret", isConnected: true },
    nested: [{ geminiApiKey: "secret", count: 1 }],
  };
  assert.deepEqual(publicStore(input), {
    tickets: [{ id: "test", status: "scheduled" }],
    jobberConfig: { clientId: "public-id" },
    quoConfig: { isConnected: true },
    nested: [{ count: 1 }],
  });
  assert.equal(input.jobberConfig.accessToken, "token");
});
