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

export const installHref = "https://apps.shopify.com/guard-rules";

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
    question: "What does Guard Rules help me control?",
    answer:
      "Guard Rules helps you block unwanted discount codes, show custom checkout messages, and apply flexible protection rules across your store."
  },
  {
    question: "Can I show custom messages at checkout?",
    answer:
      "Yes. You can display a clear validation message when a checkout rule is triggered, so shoppers understand why a code or condition was rejected."
  },
  {
    question: "What kinds of rules can I create?",
    answer:
      "You can create rules based on products, collections, countries, IP addresses, customers, discount codes, and other checkout conditions."
  },
  {
    question: "Can I block or allow specific locations and IPs?",
    answer:
      "Yes. Fraud-prevention rules can block or whitelist IP addresses and countries with flexible conditions."
  },
  {
    question: "Is Guard Rules built for Shopify checkout?",
    answer:
      "Yes. The app is designed for Shopify stores and uses checkout-focused rules to protect margins and improve control."
  }
];

export const featureSections = [
  {
    badge: "Discount code control",
    heading: "Block unwanted discount codes",
    copy: "Create rules that stop discount codes from being used when they should not apply at checkout.",
    bullets: [
      "Reject unwanted discount codes",
      "Protect store margins",
      "Simple rule-based checkout control",
      "Predictable behavior for shoppers"
    ]
  },
  {
    badge: "Checkout validation",
    heading: "Show custom messages at checkout",
    copy: "Display a clear validation message when a checkout rule is triggered so customers understand why the code or condition was rejected.",
    bullets: [
      "Custom checkout messaging",
      "Less confusion for shoppers",
      "Better support for your team",
      "Clear rule-trigger feedback"
    ]
  },
  {
    badge: "Fraud prevention",
    heading: "Block or allow IPs and countries",
    copy: "Use flexible rules to block or whitelist IP addresses and countries based on where the traffic is coming from.",
    bullets: ["IP address rules", "Country-based rules", "Block or allow specific locations", "Flexible rule logic"]
  },
  {
    badge: "Rule targeting",
    heading: "Target products, collections, and customers",
    copy: "Build checkout rules around products, collections, customers, discount codes, and other store conditions.",
    bullets: ["Product-based rules", "Collection-based rules", "Customer conditions", "Discount-code conditions"]
  },
  {
    badge: "Checkout control",
    heading: "Keep checkout behavior predictable",
    copy: "Make sure the store follows your policies with rules that are easy to understand and manage.",
    bullets: ["Clear checkout outcomes", "Policy control", "Consistent validation", "Storewide rule management"]
  },
  {
    badge: "Shopify setup",
    heading: "Built for Shopify checkout",
    copy: "Guard Rules is designed for Shopify merchants who want simple control over checkout behavior and store protection.",
    bullets: ["Shopify app installation", "Shopify-focused workflow", "Simple merchant-friendly UI", "No complex setup required"]
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
