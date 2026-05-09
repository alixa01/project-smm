import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  // baseURL diambil dari BETTER_AUTH_URL pada build server.
  // Untuk client-side (browser), Better Auth akan otomatis memakai origin saat ini.
});

export const { signIn, signUp, signOut, useSession, getSession } = authClient;
