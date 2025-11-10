import React from 'react';

const Performance: React.FC = () => {
  return (
    <div className="page">
      <section className="center-hero">
        <div className="container">
          <h1>Performance & Integration</h1>
          <p>Flow, verification, silicon readiness, and efficiency levers for NeauraEdge™.</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          

          <div className="features">
            <div className="feature">
              <h3>Integration Flow</h3>
              <p>Host-driven simulation, protocol & numeric suites, mesh tuning, DVFS partitioning, formal checks, and synthesis prep.</p>
            </div>
            <div className="feature">
              <h3>Verification Support</h3>
              <p>Deterministic A/B runs with byte-identical CSVs, numeric corners, boundary dims, and tiling edge cases.</p>
            </div>
            <div className="feature">
              <h3>Silicon Readiness</h3>
              <p>Clock gating wrappers, DVFS compatible modules, sparse execution primitives, and lint-hardened RTL.</p>
            </div>
            <div className="feature">
              <h3>Efficiency Levers</h3>
              <p>Int8 accumulation, sparsity skipping, DVFS partitioning, clock gating and mesh scaling to tune PPA.</p>
            </div>
          </div>

          <div style={{ marginTop: '2rem' }}>
            <h3>Confidence Artifacts</h3>
            <p>CSV summaries, per-workload logs, and VCD on demand (disabled for fast-path tests).</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Performance;
