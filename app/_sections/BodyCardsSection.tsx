"use client";

import { useMemo } from "react";
import SubsidyDemolitionSection from "./SubsidyDemolitionSection";
import SubsidyCalculator from "../_components/SubsidyCalculator";
import BeforeAfterSection from "../_components/BeforeAfterSection";
import HaccpSection from "./HaccpSection";
import RepairSection from "./RepairSection";
import ProcessSection from "./ProcessSection";
import WhySection from "./WhySection";

export default function BodyCardsSection() {
  const items = useMemo(
    () => [
      { key: "demolition", node: <SubsidyDemolitionSection /> },
      { key: "calculator", node: <SubsidyCalculator /> },
      { key: "beforeafter", node: <BeforeAfterSection /> },
      { key: "haccp", node: <HaccpSection /> },
      { key: "repair", node: <RepairSection /> },
      { key: "process", node: <ProcessSection /> },
      { key: "why", node: <WhySection /> },
    ],
    []
  );

  return (
    <section className="mx-auto w-full max-w-6xl px-4 pb-8 md:px-8">
      <div className="grid gap-8 md:gap-10">
        {items.map((it) => (
          <div key={it.key}>{it.node}</div>
        ))}
      </div>
    </section>
  );
}