[
  {
    "title": "Employee Experience & Satisfaction",
    "description": "Measures employee efficiency and satisfaction impact from Adobe tools.",
    "businessKPIs": [
      "BDR utilization improvements",
      "Hours saved in campaign operations",
      "Employee satisfaction survey scores"
    ],
    "technicalKPIs": [
      "Automation reliability",
      "Error reduction in workflows"
    ],
    "sourceUseCases": ["Workfront Automations", "BDR Enablement"],
    "formulas": [
      "Employee Score = (Hours Saved ÷ Total Hours) × 100",
      "Satisfaction Index = Avg(Survey Score)"
    ],
    "intakeRequirements": [
      "Estimated hours saved per workflow",
      "BDR utilization baseline",
      "Employee survey baseline"
    ],
    "whyBusiness": "Proves Adobe reduces manual effort and improves employee morale, driving adoption.",
    "whyTechnical": "Shows automation reliability and time savings achieved by Adobe solutions.",
    "kpiHistory": [50, 70]
  },
  {
    "title": "Audience Growth & Quality",
    "description": "How well Adobe Experience Platform drives richer, higher-quality audiences.",
    "businessKPIs": [
      "Total addressable audience growth",
      "Profile enrichment (attributes per profile)",
      "Audience match rate improvements",
      "Lift in segmentation accuracy"
    ],
    "technicalKPIs": [
      "Profile ingestion completeness",
      "Identity graph resolution rate",
      "Data freshness (latency from source to profile)",
      "Schema coverage across sources"
    ],
    "sourceUseCases": ["MS1 – Profile Enrichment", "MS2 – Identity Resolution", "P1 – Unified Audiences"],
    "formulas": [
      "Growth % = (New Profiles ÷ Total Profiles) × 100",
      "Match Rate = Matched Profiles ÷ Targeted Profiles"
    ],
    "intakeRequirements": [
      "Baseline profile count",
      "Target enrichment attributes",
      "Audience match rate baseline"
    ],
    "whyBusiness": "Shows top-of-funnel growth fueling pipeline.",
    "whyTechnical": "Ensures ingestion and identity processes are scalable.",
    "kpiHistory": [100, 125]
  },
  {
    "title": "Campaign Activations & Velocity",
    "description": "Measures of campaign speed, volume, and activation efficiency.",
    "businessKPIs": [
      "Campaign launch velocity",
      "Increase in campaigns executed across channels",
      "Campaign activation success rate",
      "Reduction in time-to-market"
    ],
    "technicalKPIs": [
      "Journey orchestration latency",
      "Activation pipeline throughput",
      "Error rates during activation",
      "Automation and workflow coverage"
    ],
    "sourceUseCases": ["AJO Campaign Builds", "Cross-channel Orchestration", "Automated Campaign Activation"],
    "formulas": [
      "Velocity = Campaigns Executed ÷ Time",
      "Activation Success % = Successful Activations ÷ Total Attempts × 100"
    ],
    "intakeRequirements": [
      "Baseline average campaign launch time",
      "Planned number of campaigns",
      "Cross-channel integration readiness"
    ],
    "whyBusiness": "Velocity and scale of campaigns directly drive revenue potential.",
    "whyTechnical": "Confirms orchestration pipelines and integrations are scalable and error-free.",
    "kpiHistory": [50, 75]
  },
  {
    "title": "Pipeline & Revenue Impact",
    "description": "Contribution of AEP-driven marketing to sales and revenue outcomes.",
    "businessKPIs": [
      "Pipeline influenced by AEP-driven marketing",
      "Marketing-attributed revenue contribution",
      "Conversion rate from leads to opportunities",
      "Deal velocity improvements"
    ],
    "technicalKPIs": [
      "Attribution model accuracy",
      "CRM-to-AEP sync reliability",
      "Cross-system data integrity",
      "Integration uptime"
    ],
    "sourceUseCases": ["CRM Integration", "Pipeline Attribution", "Sales Alignment Dashboards"],
    "formulas": [
      "Pipeline Influence = AEP-influenced Pipeline ÷ Total Pipeline",
      "Revenue Contribution = Marketing-Attributed Revenue ÷ Total Revenue"
    ],
    "intakeRequirements": [
      "Baseline pipeline influenced",
      "Attribution rules",
      "CRM integration readiness"
    ],
    "whyBusiness": "Proves direct revenue contribution from marketing activities.",
    "whyTechnical": "Ensures data synchronization and attribution accuracy across CRM and AEP.",
    "kpiHistory": [200, 320]
  },
  {
    "title": "Customer and DX Stakeholder Experience Impact",
    "description": "Impact on customer engagement, retention, and satisfaction.",
    "businessKPIs": [
      "Engagement lift across digital channels",
      "Improved customer retention rates",
      "Increase in customer satisfaction (CSAT/NPS)",
      "Lift in lifetime value (LTV)"
    ],
    "technicalKPIs": [
      "Personalization accuracy",
      "Profile completeness",
      "Real-time decisioning performance",
      "Data freshness powering personalization"
    ],
    "sourceUseCases": ["CJA Dashboards", "Personalization Testing", "Real-time Customer Journeys"],
    "formulas": [
      "Engagement Lift % = (Post-Activation Engagement ÷ Baseline Engagement) × 100",
      "Retention Rate = Retained Customers ÷ Total Customers × 100"
    ],
    "intakeRequirements": [
      "Baseline engagement rate",
      "CSAT/NPS baseline",
      "Retention benchmarks"
    ],
    "whyBusiness": "Measures improved personalization and engagement strategies.",
    "whyTechnical": "Confirms profile completeness and real-time personalization at scale.",
    "kpiHistory": [80, 160]
  },
  {
    "title": "Operational Efficiencies",
    "description": "Cost and time savings from Adobe platform adoption.",
    "businessKPIs": [
      "Reduction in campaign production costs",
      "Decrease in agency or vendor spend",
      "Time-to-market acceleration",
      "Efficiency gains in marketing operations"
    ],
    "technicalKPIs": [
      "Automation coverage across workflows",
      "Error reduction in campaign execution",
      "Infrastructure cost savings",
      "Content production efficiency"
    ],
    "sourceUseCases": ["Workfront Automation", "Content Supply Chain at Scale", "AEM + AJO Integrated Workflows"],
    "formulas": [
      "Efficiency Gain % = (Hours Saved ÷ Total Hours Worked) × 100",
      "Cost Savings = Baseline Vendor Spend − Current Vendor Spend"
    ],
    "intakeRequirements": [
      "Baseline campaign production costs",
      "Agency/vendor spend data",
      "Content production workflows"
    ],
    "whyBusiness": "Highlights reduced costs and faster go-to-market capabilities.",
    "whyTechnical": "Proves automation reduces repetitive tasks and increases scalability.",
    "kpiHistory": [40, 50]
  }
]









Bucket card. Js

import React, { useState } from "react";
import "./BucketCard.css";

function BucketCard({
  title,
  description,
  businessKPIs,
  technicalKPIs,
  sourceUseCases,
  formulas,
  intakeNeeded,
  whyBusiness,
  whyTechnical,
  kpiHistory
}) {
  // Expanded by default
  const [isExpanded, setIsExpanded] = useState(true);
  const [showModal, setShowModal] = useState(false);

  // Interactive slider state (for Employee Experience & Satisfaction only)
  const [employeeScore, setEmployeeScore] = useState(50);

  // Month-over-Month calculation
  let momChange = null;
  let momIcon = null;
  if (kpiHistory && kpiHistory.length >= 2) {
    const prev = kpiHistory[kpiHistory.length - 2];
    const current = kpiHistory[kpiHistory.length - 1];
    if (prev > 0) {
      momChange = (((current - prev) / prev) * 100).toFixed(1);
      momIcon =
        current >= prev ? (
          <span className="mom-up">⬆ {momChange}%</span>
        ) : (
          <span className="mom-down">⬇ {momChange}%</span>
        );
    }
  }

  return (
    <div className="bucket-card">
      {/* Header */}
      <div
        className="bucket-header"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h2>{title}</h2>
        {momIcon && <div className="mom-icon">{momIcon}</div>}
        <span className="toggle-icon">{isExpanded ? "▲" : "▼"}</span>
      </div>

      {/* Body */}
      {isExpanded && (
        <div className="bucket-body">
          <p className="bucket-description">{description}</p>

          {/* Special interactive slider for Employee Experience */}
          {title === "Employee Experience & Satisfaction" && (
            <div className="employee-slider">
              <h3>😊 Employee Experience & Satisfaction Score</h3>
              <input
                type="range"
                min="0"
                max="100"
                value={employeeScore}
                onChange={(e) => setEmployeeScore(Number(e.target.value))}
                className={`slider ${
                  employeeScore < 40
                    ? "red"
                    : employeeScore < 70
                    ? "yellow"
                    : "green"
                }`}
              />
              <p>
                Current Score:{" "}
                <span
                  className={`score-display ${
                    employeeScore < 40
                      ? "red-text"
                      : employeeScore < 70
                      ? "yellow-text"
                      : "green-text"
                  }`}
                >
                  {employeeScore}%
                </span>
              </p>
            </div>
          )}

          {/* Business KPIs */}
          <div className="kpi-section business-box">
            <h3>📊 Business KPIs</h3>
            <ul>
              {businessKPIs.map((kpi, i) => (
                <li key={i}>{kpi}</li>
              ))}
            </ul>
          </div>

          {/* Technical KPIs */}
          <div className="kpi-section technical-box">
            <h3>⚙ Technical KPIs</h3>
            <ul>
              {technicalKPIs.map((kpi, i) => (
                <li key={i}>{kpi}</li>
              ))}
            </ul>
          </div>

          {/* Source Use Cases */}
          <div className="kpi-section usecase-box">
            <h3>📌 Source Use Cases</h3>
            <ul>
              {sourceUseCases.map((useCase, i) => (
                <li key={i}>{useCase}</li>
              ))}
            </ul>
          </div>

          {/* Formulas */}
          {formulas && (
            <div className="kpi-section formulas-box">
              <h3>🧮 Value Formulas</h3>
              <ul>
                {formulas.map((formula, i) => (
                  <li key={i}>{formula}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Intake Requirements */}
          {intakeNeeded && (
            <div className="kpi-section intake-box">
              <h3>📝 Intake Requirements</h3>
              <ul>
                {intakeNeeded.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Why This Matters button */}
          <button className="why-button" onClick={() => setShowModal(true)}>
            💡 Value Realization
          </button>
        </div>
      )}

      {/* Modal */}
      {showModal && (
        <div className="modal" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowModal(false)}>
              ✖
            </button>
            <h2>💡 Value Realization</h2>

            <div className="modal-section business">
              <h3>📈 Business (Marissa)</h3>
              <p>{whyBusiness}</p>
            </div>

            <div className="modal-section technical">
              <h3>⚙ Technical Stakeholders</h3>
              <p>{whyTechnical}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default BucketCard;


[
  {
    "title": "Employee Experience & Satisfaction",
    "description": "Measures the impact on marketer productivity, collaboration, and hours saved.",
    "businessKPIs": [
      "BDR utilization improvements",
      "Hours saved per campaign",
      "Employee satisfaction survey scores",
      "Reduction in manual work"
    ],
    "technicalKPIs": [
      "Automation coverage of tasks",
      "Workflow error reduction",
      "Task completion SLA adherence",
      "Content review cycle time"
    ],
    "sourceUseCases": [
      "Workfront Simplification",
      "BDR List Automation",
      "AI-Assisted Campaign Setup"
    ],
    "formulas": [
      "Employee Score = (Hours Saved % × 0.4) + (BDR Utilization % × 0.3) + (Survey Satisfaction % × 0.3)"
    ],
    "intakeNeeded": [
      "Estimated hours saved per campaign",
      "BDR utilization baseline",
      "Employee survey results or feedback"
    ],
    "whyBusiness": "Improves productivity, reduces burnout, and saves measurable hours.",
    "whyTechnical": "Ensures automation and workflows reduce manual effort.",
    "kpiHistory": [80, 100]
  },
  {
    "title": "Audience Growth & Quality",
    "description": "How well Adobe Experience Platform drives richer, higher-quality audiences.",
    "businessKPIs": [
      "Total addressable audience growth",
      "Profile enrichment (attributes per profile)",
      "Audience match rate improvements",
      "Lift in segmentation accuracy"
    ],
    "technicalKPIs": [
      "Profile ingestion completeness",
      "Identity graph resolution rate",
      "Data freshness (latency from source to profile)",
      "Schema coverage across sources"
    ],
    "sourceUseCases": [
      "MS1 – Profile Enrichment",
      "MS2 – Identity Resolution",
      "P1 – Unified Audiences"
    ],
    "formulas": [
      "Growth % = (New Profiles – Churned Profiles) / Starting Profiles × 100",
      "Enrichment % = (Total Attributes per Profile ÷ Baseline) × 100"
    ],
    "intakeNeeded": [
      "Starting audience size",
      "Number of new vs churned profiles",
      "Attributes per profile baseline"
    ],
    "whyBusiness": "Proves AEP is fueling pipeline with richer, more accurate profiles.",
    "whyTechnical": "Validates ingestion pipelines, identity resolution, and schema design.",
    "kpiHistory": [100, 125]
  },
  {
    "title": "Campaign Activations & Velocity",
    "description": "Measures of campaign speed, volume, and activation efficiency.",
    "businessKPIs": [
      "Campaign launch velocity",
      "Increase in campaigns executed across channels",
      "Campaign activation success rate",
      "Reduction in time-to-market"
    ],
    "technicalKPIs": [
      "Journey orchestration latency",
      "Activation pipeline throughput",
      "Error rates during activation",
      "Automation and workflow coverage"
    ],
    "sourceUseCases": [
      "AJO Campaign Builds",
      "Cross-channel Orchestration",
      "Automated Campaign Activation"
    ],
    "formulas": [
      "Velocity Index = (# Campaigns / Average Launch Time)",
      "Error Rate % = (Failed Activations ÷ Total Activations) × 100"
    ],
    "intakeNeeded": [
      "Average time to launch",
      "Total number of campaigns per quarter",
      "Error rate logs from activation pipeline"
    ],
    "whyBusiness": "Faster campaign cycles fuel competitive advantage.",
    "whyTechnical": "Validates stable orchestration pipelines and error-free integrations.",
    "kpiHistory": [50, 75]
  },
  {
    "title": "Pipeline & Revenue Impact",
    "description": "Contribution of AEP-driven marketing to sales and revenue outcomes.",
    "businessKPIs": [
      "Pipeline influenced by AEP-driven marketing",
      "Marketing-attributed revenue contribution",
      "Conversion rate from leads to opportunities",
      "Deal velocity improvements"
    ],
    "technicalKPIs": [
      "Attribution model accuracy",
      "CRM-to-AEP sync reliability",
      "Cross-system data integrity",
      "Integration uptime"
    ],
    "sourceUseCases": [
      "CRM Integration",
      "Pipeline Attribution",
      "Sales Alignment Dashboards"
    ],
    "formulas": [
      "Pipeline Contribution = Influenced Pipeline ÷ Total Pipeline × 100",
      "Revenue Attribution % = (Attributed Revenue ÷ Total Revenue) × 100"
    ],
    "intakeNeeded": [
      "Influenced vs total pipeline numbers",
      "Attributed revenue amounts",
      "CRM sync reports"
    ],
    "whyBusiness": "Demonstrates direct revenue contribution from marketing.",
    "whyTechnical": "Confirms CRM-to-AEP sync reliability for attribution.",
    "kpiHistory": [200, 320]
  },
  {
    "title": "Customer & DX Stakeholder Experience Impact",
    "description": "Impact on customer engagement, retention, and satisfaction.",
    "businessKPIs": [
      "Engagement lift across digital channels",
      "Improved customer retention rates",
      "Increase in customer satisfaction (CSAT/NPS)",
      "Lift in lifetime value (LTV)"
    ],
    "technicalKPIs": [
      "Personalization accuracy",
      "Profile completeness",
      "Real-time decisioning performance",
      "Data freshness powering personalization"
    ],
    "sourceUseCases": [
      "CJA Dashboards",
      "Personalization Testing",
      "Real-time Customer Journeys"
    ],
    "formulas": [
      "Engagement Lift % = (Test Engagement – Control Engagement) ÷ Control Engagement × 100",
      "Retention Rate = (Customers Retained ÷ Total Customers) × 100"
    ],
    "intakeNeeded": [
      "Baseline engagement data",
      "Retention baseline",
      "NPS/CSAT scores"
    ],
    "whyBusiness": "Improves retention, loyalty, and personalization impact.",
    "whyTechnical": "Validates freshness and accuracy of profile-driven personalization.",
    "kpiHistory": [80, 160]
  },
  {
    "title": "Operational Efficiencies",
    "description": "Cost and time savings from Adobe platform adoption.",
    "businessKPIs": [
      "Reduction in campaign production costs",
      "Decrease in agency or vendor spend",
      "Time-to-market acceleration",
      "Efficiency gains in marketing operations"
    ],
    "technicalKPIs": [
      "Automation coverage across workflows",
      "Error reduction in campaign execution",
      "Infrastructure cost savings",
      "Content production efficiency"
    ],
    "sourceUseCases": [
      "Workfront Automation",
      "Content Supply Chain at Scale",
      "AEM + AJO Integrated Workflows"
    ],
    "formulas": [
      "Cost Savings % = (Baseline Costs – Current Costs) ÷ Baseline Costs × 100",
      "Efficiency Gain % = (Baseline Hours – Current Hours) ÷ Baseline Hours × 100"
    ],
    "intakeNeeded": [
      "Baseline cost data",
      "Current cost after automation",
      "Baseline vs current cycle time"
    ],
    "whyBusiness": "Highlights reduced costs and faster go-to-market.",
    "whyTechnical": "Confirms automation reduces tasks and increases scalability.",
    "kpiHistory": [40, 50]
  }
]
