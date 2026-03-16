import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";
import { createServiceClient } from "@/lib/supabase";
import Container from "@/components/ui/Container";
import { formatPrice } from "@/lib/utils";

// Only allow your own Clerk user ID — paste yours from clerk.com dashboard
const ADMIN_USER_IDS = (process.env.ADMIN_CLERK_USER_IDS ?? "").split(",").map((s) => s.trim()).filter(Boolean);

type Order = {
  id: string;
  stripe_session_id: string;
  customer_email: string;
  customer_name: string | null;
  amount_total: number;
  currency: string;
  items: { description: string; quantity: number; amount_total: number }[];
  status: string;
  created_at: string;
};

export default async function AdminOrdersPage() {
  const { userId } = await auth();

  if (!userId || (ADMIN_USER_IDS.length > 0 && !ADMIN_USER_IDS.includes(userId))) {
    redirect("/sign-in");
  }

  const db = createServiceClient();

  const [ordersRes, subsRes] = await Promise.all([
    db.from("orders").select("*").order("created_at", { ascending: false }).limit(100),
    db.from("newsletter_subscribers").select("id, email, created_at").order("created_at", { ascending: false }),
  ]);

  const orders: Order[] = ordersRes.data ?? [];
  const subscribers = subsRes.data ?? [];

  const totalRevenue = orders.reduce((sum, o) => sum + o.amount_total, 0);

  return (
    <main className="min-h-screen bg-snow py-16">
      <Container>
        {/* Header */}
        <div className="mb-12">
          <p className="text-xs uppercase tracking-[0.2em] text-charcoal/40 mb-2">Administration</p>
          <h1 className="font-serif text-3xl tracking-wide text-charcoal">Tableau de bord</h1>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          <div className="bg-white border border-wool rounded-lg p-6">
            <p className="text-xs uppercase tracking-[0.15em] text-charcoal/40 mb-1">Commandes</p>
            <p className="font-serif text-3xl text-forest">{orders.length}</p>
          </div>
          <div className="bg-white border border-wool rounded-lg p-6">
            <p className="text-xs uppercase tracking-[0.15em] text-charcoal/40 mb-1">Revenu total</p>
            <p className="font-serif text-3xl text-forest">{formatPrice(totalRevenue / 100)}</p>
          </div>
          <div className="bg-white border border-wool rounded-lg p-6">
            <p className="text-xs uppercase tracking-[0.15em] text-charcoal/40 mb-1">Abonnés infolettre</p>
            <p className="font-serif text-3xl text-forest">{subscribers.length}</p>
          </div>
        </div>

        {/* Orders table */}
        <div className="mb-16">
          <h2 className="text-xs uppercase tracking-[0.2em] text-charcoal/40 mb-4">Commandes récentes</h2>
          {orders.length === 0 ? (
            <p className="text-sm text-charcoal/40 py-8 text-center border border-wool rounded-lg">Aucune commande pour l&apos;instant.</p>
          ) : (
            <div className="border border-wool rounded-lg overflow-hidden">
              <table className="w-full text-sm">
                <thead className="bg-wool/40">
                  <tr>
                    <th className="text-left text-xs uppercase tracking-[0.1em] text-charcoal/50 px-4 py-3">Réf.</th>
                    <th className="text-left text-xs uppercase tracking-[0.1em] text-charcoal/50 px-4 py-3">Client</th>
                    <th className="text-left text-xs uppercase tracking-[0.1em] text-charcoal/50 px-4 py-3 hidden sm:table-cell">Articles</th>
                    <th className="text-right text-xs uppercase tracking-[0.1em] text-charcoal/50 px-4 py-3">Total</th>
                    <th className="text-left text-xs uppercase tracking-[0.1em] text-charcoal/50 px-4 py-3 hidden md:table-cell">Date</th>
                    <th className="text-left text-xs uppercase tracking-[0.1em] text-charcoal/50 px-4 py-3">Statut</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-wool">
                  {orders.map((order) => (
                    <tr key={order.id} className="bg-white hover:bg-snow transition-colors">
                      <td className="px-4 py-3 font-mono text-xs text-charcoal/60">
                        {order.stripe_session_id.slice(-8).toUpperCase()}
                      </td>
                      <td className="px-4 py-3">
                        <div className="font-sans text-sm text-charcoal">{order.customer_name ?? "—"}</div>
                        <div className="text-xs text-charcoal/50">{order.customer_email}</div>
                      </td>
                      <td className="px-4 py-3 hidden sm:table-cell">
                        <div className="text-xs text-charcoal/60 max-w-[200px]">
                          {order.items.map((item, i) => (
                            <div key={i}>{item.description} ×{item.quantity}</div>
                          ))}
                        </div>
                      </td>
                      <td className="px-4 py-3 text-right font-serif text-sm text-charcoal">
                        {formatPrice(order.amount_total / 100)}
                      </td>
                      <td className="px-4 py-3 text-xs text-charcoal/50 hidden md:table-cell">
                        {new Date(order.created_at).toLocaleDateString("fr-CA")}
                      </td>
                      <td className="px-4 py-3">
                        <span className="text-xs uppercase tracking-wider text-forest border border-forest/30 px-2 py-0.5 rounded-md">
                          {order.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Newsletter subscribers */}
        <div>
          <h2 className="text-xs uppercase tracking-[0.2em] text-charcoal/40 mb-4">Abonnés infolettre</h2>
          {subscribers.length === 0 ? (
            <p className="text-sm text-charcoal/40 py-8 text-center border border-wool rounded-lg">Aucun abonné pour l&apos;instant.</p>
          ) : (
            <div className="border border-wool rounded-lg overflow-hidden">
              <table className="w-full text-sm">
                <thead className="bg-wool/40">
                  <tr>
                    <th className="text-left text-xs uppercase tracking-[0.1em] text-charcoal/50 px-4 py-3">Courriel</th>
                    <th className="text-left text-xs uppercase tracking-[0.1em] text-charcoal/50 px-4 py-3">Date d&apos;inscription</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-wool">
                  {subscribers.map((sub) => (
                    <tr key={sub.id} className="bg-white hover:bg-snow transition-colors">
                      <td className="px-4 py-3 text-sm text-charcoal">{sub.email}</td>
                      <td className="px-4 py-3 text-xs text-charcoal/50">
                        {new Date(sub.created_at).toLocaleDateString("fr-CA")}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </Container>
    </main>
  );
}
