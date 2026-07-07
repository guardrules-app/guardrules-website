import type { ReactNode } from "react";

export type FeatureItem = {
  title: string;
  copy: string;
  icon?: string;
};

export type FAQItem = {
  question: string;
  answer: ReactNode;
};

export const installHref = "https://app.guardrules.com";

export const navLinks = [
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" }
] as const;

export const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/features" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" }
] as const;

export const heroBullets = [
  "Pause Meta ads when inventory is low or out of stock",
  "Resume ads when products are available again",
  "Create simple rules for products, campaigns, ad sets, or ads",
  "Built for Shopify merchants"
];

export const problemCards: FeatureItem[] = [
  {
    title: "Out-of-stock traffic",
    copy: "Customers click your ads, land on unavailable products, and leave without buying."
  },
  {
    title: "Manual ad checks",
    copy: "Checking inventory and ad campaigns manually takes time and is easy to forget."
  },
  {
    title: "Delayed reactions",
    copy: "By the time you notice inventory changed, your budget may already be spent."
  }
];

export const howItWorksSteps: FeatureItem[] = [
  {
    title: "Install GuardRules",
    copy: "Start the Shopify installation flow for your store."
  },
  {
    title: "Connect Meta account",
    copy: "Connect the Meta ad account you want GuardRules to protect with inventory-based actions."
  },
  {
    title: "Choose products",
    copy: "Apply guards to all products, selected products, or exclude specific products."
  },
  {
    title: "Set conditions",
    copy: "Create inventory conditions like less than or equal to a threshold, or greater than or equal to a threshold."
  },
  {
    title: "Choose actions",
    copy: "Pause, resume, or receive notifications based on your rules."
  },
  {
    title: "Monitor activity",
    copy: "Review what GuardRules changed and why."
  }
];

export const coreFeatures: FeatureItem[] = [
  { title: "Inventory threshold rules", copy: "Trigger guards when product inventory crosses the thresholds you define." },
  { title: "Product selection controls", copy: "Protect your entire catalog, selected products, or exclude products from a guard." },
  { title: "Meta ad pause/resume automation", copy: "Pause or resume Meta ad delivery when inventory changes." },
  { title: "Campaign, ad set, and ad-level targeting", copy: "Apply actions at the level that matches how your ads are structured." },
  { title: "Any/All rule matching", copy: "Choose whether one condition or every condition must match before a guard runs." },
  { title: "Notifications", copy: "Keep your team informed when inventory-based rules trigger." },
  { title: "Activity logs", copy: "See what GuardRules changed, when it happened, and why." },
  { title: "Shopify-first setup", copy: "Designed around Shopify products, inventory, and merchant workflows." }
];

export const useCases: FeatureItem[] = [
  {
    title: "Protect best sellers",
    copy: "Stop promoting fast-moving products once inventory gets too low to support demand."
  },
  {
    title: "Handle restocks faster",
    copy: "Resume ads when products are available again, without waiting for a manual check."
  },
  {
    title: "Control limited runs",
    copy: "Create focused guards for seasonal, preorder, or limited-stock products."
  }
];

export const landingFaqs: FAQItem[] = [
  {
    question: "Which ad platform does GuardRules support?",
    answer: "GuardRules currently supports Meta ads."
  },
  {
    question: "Can I choose which products a guard watches?",
    answer: "Yes. You can apply guards to all products, selected products, or exclude specific products."
  },
  {
    question: "What actions can a guard take?",
    answer: "A guard can pause, resume, or notify teams based on the inventory rules you create."
  },
  {
    question: "Is GuardRules built for Shopify?",
    answer: "Yes. GuardRules is designed for Shopify merchants and Shopify product inventory."
  }
];

export const featureSections = [
  {
    eyebrow: "Inventory guard rules",
    heading: "Create rules around product inventory",
    copy: "Set inventory thresholds that decide when a guard should run. For example, pause ads when inventory is less than or equal to 0, or resume ads when inventory becomes greater than 0.",
    bullets: [
      "Less than or equal inventory checks",
      "Greater than or equal inventory checks",
      "Flexible thresholds",
      "Any/All logic for grouped conditions"
    ]
  },
  {
    eyebrow: "Product targeting",
    heading: "Control which products each guard protects",
    copy: "Apply rules across your catalog or focus only on specific products.",
    bullets: [
      "All products",
      "Only selected products",
      "Exclude selected products",
      "Useful for best sellers, seasonal products, or limited stock items"
    ]
  },
  {
    eyebrow: "Meta ad actions",
    heading: "Take action on Meta campaigns automatically",
    copy: "GuardRules helps you pause or resume Meta campaigns, ad sets, or ads based on inventory changes.",
    bullets: ["Pause campaigns", "Resume campaigns", "Pause ad sets", "Resume ad sets", "Pause ads", "Resume ads"]
  },
  {
    eyebrow: "Notifications",
    heading: "Stay informed when something changes",
    copy: "Use notification actions to keep your team aware when guards trigger, without checking inventory manually all day.",
    bullets: ["Inventory-based alerts", "Rule trigger updates", "Action status visibility"]
  },
  {
    eyebrow: "Guard activity",
    heading: "Understand what happened and why",
    copy: "GuardRules should make automation transparent. Show merchants a clear history of triggered rules and actions.",
    bullets: ["Guard trigger history", "Action results", "Rule status", "Easier debugging"]
  },
  {
    eyebrow: "Shopify-focused setup",
    heading: "Designed for Shopify merchants",
    copy: "GuardRules is built around Shopify product inventory and the way merchants actually manage ad traffic.",
    bullets: ["Shopify app installation", "Product inventory monitoring", "Simple merchant-friendly UI", "No complex setup required"]
  }
] as const;

export const pricingFaqs: FAQItem[] = [
  {
    question: "What is a guard?",
    answer: "A guard is an automation rule that watches inventory conditions and performs an action such as pausing, resuming, or notifying."
  },
  {
    question: "Can I protect unlimited products?",
    answer: "Yes. All plans include unlimited product protection. The plan limit applies to the number of guards you can create."
  },
  {
    question: "Which ad platform is supported?",
    answer: "GuardRules currently supports Meta ads."
  },
  {
    question: "Can I upgrade later?",
    answer: "Yes. You can start free and upgrade when your store needs more guard rules."
  },
  {
    question: "What happens if I reach my guard limit?",
    answer: "You can keep your existing guards, but you will need to upgrade to create more guards."
  }
];
