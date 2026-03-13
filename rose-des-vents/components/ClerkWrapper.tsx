"use client";

import { ClerkProvider } from "@clerk/nextjs";
import { ReactNode } from "react";

// Renders ClerkProvider only when keys are configured
export function ClerkWrapper({ children, enabled }: { children: ReactNode; enabled: boolean }) {
  if (!enabled) return <>{children}</>;
  return <ClerkProvider>{children}</ClerkProvider>;
}
