export default function Admissions() {
  return (
    <section className="page">
      <h1>Admissions</h1>
      <p>Explain eligibility, process, timelines, and required documents.</p>
      
    <section className="jrp section section--full" aria-label="Job Readiness Program">
  <div className="section-inner">
    <h2 className="section-title">What We Follow — Job Readiness Program</h2>
    <p className="jrp-tagline">
      Your dream job is just <strong>7 steps</strong> away with Vinsup Skill Academy. One Program. Endless Opportunities.
    </p>

    <div className="jrp-grid">
      {/* Left: steps */}
      <div className="jrp-steps" role="tablist" aria-label="JRP steps">
        {jrpSteps.map((s, i) => {
          const isActive = s.key === activeStep;
          return (
            <button
              key={s.key}
              role="tab"
              aria-selected={isActive}
              className={`jrp-step ${isActive ? "is-active" : ""}`}
              onClick={() => setActiveStep(s.key)}
            >
              <span className="jrp-step-index">{i + 1}</span>
              <span className="jrp-step-title">{s.title}</span>
            </button>
          );
        })}
      </div>

      {/* Right: detail */}
      <div className="jrp-detail" role="tabpanel" aria-live="polite">
  
  <div className="jrp-detail-header">
    <div className="jrp-step-badge">{activeStep === "training" ? "" :
                                     activeStep === "worksheets" ? "" :
                                     activeStep === "resume" ? "" :
                                     activeStep === "softskill" ? "" :
                                     activeStep === "internship" ? "" :
                                     activeStep === "mock" ? "" :
                                     ""}</div>
    <h3 className="jrp-detail-title">{activeItem.title}</h3>
  </div>

  <ul className="jrp-points">
    {activeItem.points.map((p, idx) => (
      <li key={idx}>
        <span className="jrp-bullet">✔</span> {p}
      </li>
    ))}
  </ul>

</div>

    </div>
  </div>
</section>
    </section>
  );
}
