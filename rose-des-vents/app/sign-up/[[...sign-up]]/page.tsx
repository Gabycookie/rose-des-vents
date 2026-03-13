import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="pt-28 sm:pt-32 pb-20 flex justify-center">
      <SignUp />
    </div>
  );
}
