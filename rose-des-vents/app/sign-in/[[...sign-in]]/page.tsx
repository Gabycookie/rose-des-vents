import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="pt-28 sm:pt-32 pb-20 flex justify-center">
      <SignIn />
    </div>
  );
}
