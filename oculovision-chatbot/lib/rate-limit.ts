const rateLimit = new Map<string, { count: number; resetAt: number }>();

export function checkRateLimit(ip: string): {
  allowed: boolean;
  remaining: number;
} {
  const windowMs = parseInt(process.env.RATE_LIMIT_WINDOW_MS || "60000");
  const maxRequests = parseInt(process.env.RATE_LIMIT_MAX_REQUESTS || "20");
  const now = Date.now();
  const entry = rateLimit.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimit.set(ip, { count: 1, resetAt: now + windowMs });
    return { allowed: true, remaining: maxRequests - 1 };
  }

  if (entry.count >= maxRequests) {
    return { allowed: false, remaining: 0 };
  }

  entry.count++;
  return { allowed: true, remaining: maxRequests - entry.count };
}
