import { SignUp } from "@clerk/nextjs";
import { clerkAppearance } from "@/lib/clerkAppearance";

export default function SignUpPage() {
  return (
    <div className="pt-28 sm:pt-32 pb-20 flex flex-col items-center">
      <p className="text-xs uppercase tracking-[0.3em] text-bark mb-8">Rose des Vents</p>
      <SignUp appearance={clerkAppearance} />
    </div>
  );
}
