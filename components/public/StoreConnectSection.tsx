"use client";

import { FormEvent, useState } from "react";

function normalizeShopDomain(value: string) {
  const trimmed = value.trim().toLowerCase().replace(/^https?:\/\//, "").replace(/\/.*$/, "");

  if (!trimmed) {
    return null;
  }

  const domain = trimmed.endsWith(".myshopify.com") ? trimmed : `${trimmed}.myshopify.com`;
  const isValid = /^[a-z0-9][a-z0-9-]*\.myshopify\.com$/.test(domain);

  return isValid ? domain : null;
}

function getShopifyAppUrl() {
  const appUrl = process.env.NEXT_PUBLIC_SHOPIFY_APP_URL || "https://app.guardrules.com";

  return appUrl.replace(/\/$/, "");
}

export function StoreConnectSection() {
  const [shop, setShop] = useState("");
  const [error, setError] = useState("");
  const shopifyAppUrl = getShopifyAppUrl();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const domain = normalizeShopDomain(shop);

    if (!domain) {
      setError("Enter a valid Shopify store URL, such as your-store.myshopify.com.");
      return;
    }

    setError("");
    setShop(domain);
    window.location.href = `${shopifyAppUrl}/?shop=${encodeURIComponent(domain)}`;
  }

  return (
    <section id="install-store" className="section">
      <div className="container">
        <div className="connect-card">
          <div>
            <span className="eyebrow">Secure Shopify installation</span>
            <h2>Install GuardRules in seconds</h2>
            <p>
              Enter your Shopify store URL to start installation. GuardRules will send you to the secure Shopify app
              installation flow.
            </p>
          </div>
          <form className="connect-form" onSubmit={handleSubmit} noValidate>
            <div className="connect-fields">
              <label className="sr-only" htmlFor="shop-domain">
                Shopify store URL
              </label>
              <input
                id="shop-domain"
                name="shop"
                placeholder="your-store.myshopify.com"
                value={shop}
                onChange={(event) => setShop(event.target.value)}
                aria-invalid={Boolean(error)}
                aria-describedby="shop-domain-error"
              />
              <button className="button button-primary" type="submit">
                Continue
              </button>
            </div>
            <div className="form-error" id="shop-domain-error" role="status">
              {error}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
