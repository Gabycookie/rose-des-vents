import { NextResponse } from "next/server";
import Stripe from "stripe";
import { Resend } from "resend";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2026-02-25.clover",
});

export async function POST(req: Request) {
  // Lazy-init Resend so missing key doesn't crash the build
  const resend = new Resend(process.env.RESEND_API_KEY ?? "placeholder");
  const body = await req.text();
  const sig = req.headers.get("stripe-signature");
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!sig || !webhookSecret) {
    return NextResponse.json({ error: "Missing signature or secret" }, { status: 400 });
  }

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(body, sig, webhookSecret);
  } catch {
    return NextResponse.json({ error: "Webhook signature invalid" }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    const customerEmail = session.customer_details?.email;
    const customerName = session.customer_details?.name ?? "Cliente";

    if (customerEmail) {
      const lineItems = await stripe.checkout.sessions.listLineItems(session.id, {
        limit: 100,
      });

      await resend.emails.send({
        from: "Rose des Vents <onboarding@resend.dev>",
        to: [customerEmail],
        subject: "Confirmation de commande — Rose des Vents",
        html: buildEmail(session, lineItems.data, customerName),
      });
    }
  }

  return NextResponse.json({ received: true });
}

function buildEmail(
  session: Stripe.Checkout.Session,
  items: Stripe.LineItem[],
  name: string
): string {
  const ref = session.id.slice(-12).toUpperCase();
  const total = ((session.amount_total ?? 0) / 100).toFixed(2);

  const rows = items
    .map(
      (item) => `
    <tr>
      <td style="padding:10px 0;border-bottom:1px solid #E8DDD0;font-size:14px;">${item.description}</td>
      <td style="padding:10px 0;border-bottom:1px solid #E8DDD0;font-size:14px;text-align:center;">×${item.quantity}</td>
      <td style="padding:10px 0;border-bottom:1px solid #E8DDD0;font-size:14px;text-align:right;">${(((item.amount_total ?? 0) / 100)).toFixed(2)} $</td>
    </tr>`
    )
    .join("");

  return `<!DOCTYPE html>
<html lang="fr">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#FDFCFA;font-family:Georgia,serif;color:#2C2C2C;">
  <table width="100%" cellpadding="0" cellspacing="0">
    <tr><td align="center" style="padding:40px 20px;">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

        <!-- Header -->
        <tr><td align="center" style="padding-bottom:24px;">
          <h1 style="margin:0;font-size:22px;letter-spacing:0.2em;color:#2D4A3E;">ROSE DES VENTS</h1>
          <p style="margin:4px 0 0;font-size:11px;letter-spacing:0.15em;color:#9E9E9E;text-transform:uppercase;">Tricoté avec amour au Québec</p>
        </td></tr>

        <tr><td style="border-top:1px solid #E8DDD0;padding-top:24px;"></td></tr>

        <!-- Body -->
        <tr><td style="padding:24px 0;">
          <p style="margin:0 0 8px;font-size:20px;">Merci, ${name}&nbsp;!</p>
          <p style="margin:0;font-size:14px;color:#666;line-height:1.6;">
            Votre commande a bien été reçue. Nous la préparons avec soin et vous ferons signe dès qu'elle est expédiée.
          </p>
        </td></tr>

        <!-- Order ref -->
        <tr><td style="background:#F5F0E8;padding:14px 20px;margin-bottom:24px;">
          <p style="margin:0;font-size:11px;letter-spacing:0.15em;text-transform:uppercase;color:#9E9E9E;">Référence de commande</p>
          <p style="margin:4px 0 0;font-size:16px;font-family:monospace;color:#2D4A3E;">${ref}</p>
        </td></tr>

        <!-- Items -->
        <tr><td style="padding-top:24px;">
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <th style="text-align:left;font-size:10px;letter-spacing:0.15em;text-transform:uppercase;padding-bottom:8px;border-bottom:1px solid #2C2C2C;">Article</th>
              <th style="text-align:center;font-size:10px;letter-spacing:0.15em;text-transform:uppercase;padding-bottom:8px;border-bottom:1px solid #2C2C2C;">Qté</th>
              <th style="text-align:right;font-size:10px;letter-spacing:0.15em;text-transform:uppercase;padding-bottom:8px;border-bottom:1px solid #2C2C2C;">Prix</th>
            </tr>
            ${rows}
            <tr>
              <td colspan="2" style="padding:12px 0;text-align:right;font-size:13px;letter-spacing:0.1em;text-transform:uppercase;">Total</td>
              <td style="padding:12px 0;text-align:right;font-size:16px;font-weight:bold;">${total} $</td>
            </tr>
          </table>
        </td></tr>

        <!-- Footer -->
        <tr><td style="border-top:1px solid #E8DDD0;padding-top:24px;text-align:center;">
          <p style="font-size:12px;color:#9E9E9E;margin:0;">
            Des questions ? Écrivez-nous à <a href="mailto:contact@rosedesvents.ca" style="color:#2D4A3E;">contact@rosedesvents.ca</a>
          </p>
          <p style="font-size:11px;color:#C4B5A0;margin:8px 0 0;">
            © 2026 Rose des Vents — <a href="https://rosedesvents.vercel.app" style="color:#C4B5A0;">rosedesvents.vercel.app</a>
          </p>
        </td></tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}
