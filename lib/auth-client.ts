// lib/auth-client.ts (client)
"use client";

import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  baseURL: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  endpoints: {
    // these endpoints will be routed to /api/auth/* by the server route above
    signIn: "/api/auth/email/signin",     // typical path; library may use /email/signin
    signUp: "/api/auth/email/register",   // typical path; adapt if your library expects different
    signOut: "/api/auth/signout",
    session: "/api/auth/session",
    // If better-auth uses different names for email provider endpoints, adjust them to match library docs.
  },
});
export const { signIn, signOut, signUp, useSession } = authClient;
