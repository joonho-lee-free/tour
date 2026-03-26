"use client";

import { useMemo } from "react";
import FitForSection from "./FitForSection";
import WhySection from "./WhySection";
import ProductSection from "./ProductSection";
import ProcessSection from "./ProcessSection";
import OrderGoSection from "./OrderGoSection";
import MarketingSection from "./MarketingSection";

export default function BodyCardsSection() {
  const items = useMemo(
    () => [
      { key: "fit", node: <FitForSection /> },
      { key: "why", node: <WhySection /> },
      { key: "product", node: <ProductSection /> },
      { key: "marketing", node: <MarketingSection /> },
      { key: "ordergo", node: <OrderGoSection /> },
      { key: "process", node: <ProcessSection /> },
    ],
    []
  );

  return (
    <section className="mx-auto w-full max-w-6xl px-4 pb-12 md:px-8">
      <div className="grid gap-10 md:gap-12">
        {items.map((it) => (
          <div key={it.key}>{it.node}</div>
        ))}
      </div>
    </section>
  );
}