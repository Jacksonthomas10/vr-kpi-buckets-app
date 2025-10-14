import React, { useState } from "react";

const useCaseData = [
  {
    title: "CSC Campaign — Category Awareness Pilot",
    owner: "Campaign Ops (DXM)",
    bucketsHit: 5,
    description:
      "Top-of-funnel awareness using enriched segments; always-on activation across paid + email; AI-supported audience expansion & intent filters.",
    sliders: { aiImpact: "High", techEase: "High", employeeImpact: "High" },
    kpiBuckets: [
      "Audience growth & quality",
      "Campaign activations & velocity",
      "Pipeline & revenue impact",
      "Customer experience impact",
      "Operational efficiencies",
    ],
    pillars: [
      "Integrated Marketing Planning",
      "Content at Scale",
      "Omnichannel Orchestration",
      "Continuous Optimization",
    ],
  },
  {
    title: "AES-Driven Lists for BDRs",
    owner: "BDR Ops",
    bucketsHit: 3,
    description:
      "Auto-generate prioritized BDR lists from AES + intent; integrate into Dynamics/Outreach with buying-group context.",
    sliders: { aiImpact: "High", techEase: "Medium", employeeImpact: "High" },
    kpiBuckets: [
      "Audience growth & quality",
      "Campaign activations & velocity",
      "Pipeline & revenue impact",
    ],
    pillars: ["Sales & Marketing Collaboration", "Omnichannel Orchestration"],
  },
  {
    title: "Contact Coverage Enrichment (ZoomInfo)",
    owner: "Platform Ops",
    bucketsHit: 2,
    description:
      "Fill persona gaps; ensure required buying-group roles exist; feed CJA benchmarking & funnel diagnostics.",
    sliders: { aiImpact: "Medium", techEase: "Medium", employeeImpact: "Medium" },
    kpiBuckets: [
      "Audience growth & quality",
      "Campaign activations & velocity",
    ],
    pillars: ["Integrated Marketing Planning"],
  },
];

const sliderValue = { High: 1, Medium: 0.5, Low: 0 };

function UseCaseIntake() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleCard = (index) =>
    setExpandedIndex(expandedIndex === index ? null : index);

  const getScore = (sliders) =>
    Number(
      (
        sliderValue[sliders.aiImpact] +
        sliderValue[sliders.techEase] +
        sliderValue[sliders.employeeImpact]
      ).toFixed(1)
    );

  const averageScore =
    useCaseData.reduce((acc, useCase) => acc + getScore(useCase.sliders), 0) /
    useCaseData.length;

  const greenLightCount = useCaseData.filter(
    (useCase) => getScore(useCase.sliders) >= 2.3
  ).length;

  return (
    <div className="usecase-intake">
      <h2>DX Value Framework — Pilot Console</h2>
      <p>
        Score use cases at intake against business impact, technical ease, and
        employee satisfaction. Auto-flag “Green Light” candidates that map to
        Value Framework KPIs.
      </p>

      <div className="summary">
        <strong>Intake Summary: </strong>
        Avg Score:{" "}
        <span className="score">{averageScore.toFixed(1)}</span>{" "}
        <span className="green-light-count">
          💡 {greenLightCount} Green Light
        </span>
      </div>

      {useCaseData.map((useCase, index) => {
        const score = getScore(useCase.sliders);
        const isGreenLight = score >= 2.3;
        const isExpanded = index === expandedIndex;

        return (
          <div
            key={index}
            className={`usecase-card ${isGreenLight ? "green" : "yellow"}`}
          >
            <div className="usecase-header" onClick={() => toggleCard(index)}>
              <h3>{useCase.title}</h3>
              <div className="badge">
                Score: {score} —{" "}
                <span className={isGreenLight ? "gl" : "nw"}>
                  {isGreenLight ? "Green Light" : "Needs Work"}
                </span>
              </div>
            </div>

            {isExpanded && (
              <div className="usecase-body">
                <p>
                  <strong>Owner:</strong> {useCase.owner} |{" "}
                  <strong>Buckets hit:</strong> {useCase.bucketsHit} / 5
                </p>
                <p>{useCase.description}</p>

                <p>
                  <strong>Maps to Value Framework KPI buckets:</strong>
                </p>
                <div className="tags">
                  {useCase.kpiBuckets.map((bucket, i) => (
                    <span className="tag" key={i}>
                      {bucket}
                    </span>
                  ))}
                </div>

                <p>
                  <strong>Pillars (FY):</strong>
                </p>
                <div className="tags">
                  {useCase.pillars.map((pillar, i) => (
                    <span className="tag" key={i}>
                      {pillar}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default UseCaseIntake;






