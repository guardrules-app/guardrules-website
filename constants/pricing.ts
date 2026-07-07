export const FREE_GUARDS_LIMIT = 1;
export const STARTER_GUARDS_LIMIT = 5;
export const ADVANCED_GUARDS_LIMIT = 20;

export type Plan = {
  name: "Free" | "Starter" | "Advanced";
  price: number;
  trialDuration: number;
  description: string;
  features: string[];
  badge?: string;
};

export const plans: Plan[] = [
  {
    name: "Free",
    price: 0,
    trialDuration: 0,
    description: "Basic free plan",
    features: ["Up to 1 guard allowed", "Unlimited products protection", "Chat support"]
  },
  {
    name: "Starter",
    price: 4.99,
    trialDuration: 0,
    description: "Perfect for small stores",
    features: ["Up to 5 guards allowed", "Unlimited products protection", "Chat support"],
    badge: "Most Popular"
  },
  {
    name: "Advanced",
    price: 12.99,
    trialDuration: 0,
    description: "For growing stores with more automation needs",
    features: ["Up to 20 guards allowed", "Unlimited products protection", "Chat support"]
  }
];

export const pricingCtas: Record<Plan["name"], string> = {
  Free: "Start free",
  Starter: "Choose Starter",
  Advanced: "Choose Advanced"
};

export const comparisonRows = [
  { label: "Guard rules", values: ["1", "5", "20"] },
  { label: "Unlimited products protection", values: ["Yes", "Yes", "Yes"] },
  { label: "Chat support", values: ["Yes", "Yes", "Yes"] },
  { label: "Meta ad automation", values: ["Yes", "Yes", "Yes"] },
  { label: "Shopify inventory monitoring", values: ["Yes", "Yes", "Yes"] }
] as const;
