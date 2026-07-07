import Image from "next/image";

type BrandLogoProps = {
  variant?: "header" | "footer";
};

export function BrandLogo({ variant = "header" }: BrandLogoProps) {
  return (
    <Image
      className={`brand-logo brand-logo-${variant}`}
      src="/guardrules-logo.png"
      alt="GuardRules"
      width={317}
      height={94}
      priority={variant === "header"}
    />
  );
}
