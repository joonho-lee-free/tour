"use client";

import { useMemo } from "react";
import SubsidyDemolitionSection from "./SubsidyDemolitionSection";
import SubsidyCalculator from "../_components/SubsidyCalculator";
import InstagramSection from "./InstagramSection";
import RecentLeadsSection from "./RecentLeadsSection";
import LeadInquiryForm from "../_components/LeadInquiryForm";
import BeforeAfterSection from "../_components/BeforeAfterSection";
import HaccpSection from "./HaccpSection";
import RepairSection from "./RepairSection";
import ProcessSection from "./ProcessSection";
import WhySection from "./WhySection";

type Props = {
  sent?: boolean;
  error?: string;
};

export default function BodyCardsSection({ sent, error }: Props) {
  const items = useMemo(
    () => [
      { key: "demolition", node: <SubsidyDemolitionSection /> },
      { key: "calculator", node: <SubsidyCalculator /> },
      { key: "instagram", node: <InstagramSection /> },
      { key: "recentLeads", node: <RecentLeadsSection /> },
      { key: "leadForm", node: <LeadInquiryForm sent={sent} error={error} /> },
      { key: "beforeafter", node: <BeforeAfterSection /> },
      { key: "haccp", node: <HaccpSection /> },
      { key: "repair", node: <RepairSection /> },
      { key: "process", node: <ProcessSection /> },
      { key: "why", node: <WhySection /> },
    ],
    [sent, error]
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