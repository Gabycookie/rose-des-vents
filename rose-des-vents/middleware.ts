import { authMiddleware } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Skip Clerk middleware if keys are not configured
const handler = process.env.CLERK_SECRET_KEY
  ? authMiddleware({ publicRoutes: ["/((?!profile).*)"] })
  : (_req: NextRequest) => NextResponse.next();

export default handler;

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
