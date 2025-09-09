"server only";

import { clerkClient } from "@clerk/nextjs/server";
import { cookies } from "next/headers";
import { createServerClient } from "@supabase/ssr";
import config from "@/tailwind.config";

export const isAuthorized = async (
  userId: string
): Promise<{ authorized: boolean; message: string }> => {
  // All payment/subscription logic removed
  return {
    authorized: true,
    message: "Authorization always true (payments removed)",
  };
};
