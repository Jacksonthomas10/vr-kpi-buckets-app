import React, { useState } from "react";
import "./BucketCard.css";

function BucketCard({
  title,
  description,
  businessKPIs,
  technicalKPIs,
  sourceUseCases,
  formulas,
  intakeNeeds,
  whyBusiness,
  whyTechnical,
  kpiHistory
}) {
  const [isExpanded, setIsExpanded] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [employeeScore, setEmployeeScore] = useState(50);

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
      <div className="bucket-header" onClick={() => setIsExpanded(!isExpanded)}>
        <h2>{title}</h2>
        {momIcon && <div className="mom-icon">{momIcon}</div>}
        <span className="toggle-icon">{isExpanded ? "▲" : "▼"}</span>
      </div>

      {isExpanded && (
        <div className="bucket-body">
          <p className="bucket-description">{description}</p>

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

          <div className="kpi-section business-box">
            <h3>📊 Business KPIs</h3>
            <ul>
              {businessKPIs.map((kpi, i) => (
                <li key={i}>{kpi}</li>
              ))}
            </ul>
          </div>

          <div className="kpi-section technical-box">
            <h3>⚙ Technical KPIs</h3>
            <ul>
              {technicalKPIs.map((kpi, i) => (
                <li key={i}>{kpi}</li>
              ))}
            </ul>
          </div>

          <div className="kpi-section usecase-box">
            <h3>📌 Source Use Cases</h3>
            <ul>
              {sourceUseCases.map((useCase, i) => (
                <li key={i}>{useCase}</li>
              ))}
            </ul>
          </div>

          {formulas && formulas.length > 0 && (
            <div className="kpi-section formulas-box">
              <h3>🧮 Reporting Formulas</h3>
              <ul>
                {formulas.map((formula, i) => (
                  <li key={i}>{formula}</li>
                ))}
              </ul>
            </div>
          )}

          {intakeNeeds && intakeNeeds.length > 0 && (
            <div className="kpi-section intake-box">
              <h3>📝 Intake Needs</h3>
              <ul>
                {intakeNeeds.map((need, i) => (
                  <li key={i}>{need}</li>
                ))}
              </ul>
            </div>
          )}

          <button className="why-button" onClick={() => setShowModal(true)}>
            💡 Value Realization
          </button>
        </div>
      )}

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
















































