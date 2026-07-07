import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { siteTheme } from "@/constants/siteTheme";
import "./globals.css";

type SiteThemeVariables = CSSProperties & Record<`--${string}`, string>;

const siteThemeVariables: SiteThemeVariables = {
  "--gr-primary": siteTheme.colors.primary,
  "--gr-primary-dark": siteTheme.colors.primaryDark,
  "--gr-primary-light": siteTheme.colors.primaryLight,
  "--gr-primary-soft": siteTheme.colors.primarySoft,
  "--gr-text": siteTheme.colors.text,
  "--gr-muted": siteTheme.colors.mutedText,
  "--gr-border": siteTheme.colors.border,
  "--gr-bg": siteTheme.colors.background,
  "--gr-bg-soft": siteTheme.colors.backgroundSoft,
  "--gr-card": siteTheme.colors.card,
  "--gr-shadow": siteTheme.colors.shadow
};

export const metadata: Metadata = {
  metadataBase: new URL("https://guardrules.com"),
  title: {
    default: "GuardRules",
    template: "%s"
  },
  description: "GuardRules helps Shopify merchants protect ad spend with inventory-based Meta ad automation."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" style={siteThemeVariables as CSSProperties}>
      <body>{children}</body>
    </html>
  );
}
