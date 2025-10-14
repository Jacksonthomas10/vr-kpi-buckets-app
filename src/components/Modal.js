import React from "react";

export default function Modal({ open, onClose, item }) {
  if (!open || !item) return null;
  return (
    <div className="modalBackdrop" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modalHeader">
          <div>
            <div className="kpiLabel">KPI</div>
            <h3 className="kpiHeading">{item.kpi}</h3>
          </div>
          <button className="closeBtn" onClick={onClose}>
            ✕
          </button>
        </div>

        <div className="modalBody">
          <section className="whyBlock">
            <h4 className="whyTitle">Business Lens (for Marissa Dacay)</h4>
            <p className="whyText">{item.lens?.business || "—"}</p>
          </section>
          <section className="whyBlock">
            <h4 className="whyTitle">Technical Lens (Product & Architecture)</h4>
            <p className="whyText">{item.lens?.technical || "—"}</p>
          </section>
          {item.source_use_case ? (
            <div className="source">Source use case: {item.source_use_case}</div>
          ) : null}
        </div>

        <div className="modalFooter">
          <button className="ghostBtn" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
