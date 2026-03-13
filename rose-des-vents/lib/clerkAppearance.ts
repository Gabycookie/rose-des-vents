// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Appearance = any;

export const clerkAppearance: Appearance = {
  variables: {
    colorPrimary: "#2D4A3E",
    colorBackground: "#FAFAF8",
    colorText: "#2C2C2C",
    colorTextSecondary: "#6B6B6B",
    colorInputBackground: "#FFFFFF",
    colorInputText: "#2C2C2C",
    borderRadius: "0px",
    fontFamily: "inherit",
    fontSize: "14px",
  },
  elements: {
    card: "shadow-none border border-[#E8E4DC] bg-[#FAFAF8]",
    headerTitle: "font-serif tracking-wide text-[#2C2C2C]",
    headerSubtitle: "text-[#6B6B6B] text-sm",
    socialButtonsBlockButton:
      "border border-[#E8E4DC] bg-white text-[#2C2C2C] hover:bg-[#F5F0E8] transition-colors rounded-none text-xs uppercase tracking-widest",
    socialButtonsBlockButtonText: "font-normal text-xs",
    dividerLine: "bg-[#E8E4DC]",
    dividerText: "text-[#6B6B6B] text-xs",
    formFieldLabel: "text-xs uppercase tracking-[0.15em] text-[#2C2C2C]",
    formFieldInput:
      "border border-[#E8E4DC] bg-white text-[#2C2C2C] rounded-none focus:border-[#2D4A3E] focus:ring-0 text-sm",
    formButtonPrimary:
      "bg-[#2D4A3E] hover:bg-[#1e3329] text-[#FAFAF8] rounded-none text-xs uppercase tracking-[0.2em] font-normal shadow-none",
    footerActionLink:
      "text-[#2D4A3E] hover:text-[#1e3329] underline-offset-2 font-normal",
    identityPreviewText: "text-sm text-[#2C2C2C]",
    identityPreviewEditButton: "text-[#2D4A3E] text-xs",
    formResendCodeLink: "text-[#2D4A3E]",
    otpCodeFieldInput: "border border-[#E8E4DC] rounded-none",
    alertText: "text-sm",
    badge: "rounded-none",
  },
};
