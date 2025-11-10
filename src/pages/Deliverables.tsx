import React from 'react';

const Deliverables: React.FC = () => {
  return (
    <div className="page">
      <section className="center-hero">
        <div className="container">
          <h1>What Buyers Get</h1>
          <p>A complete, integration‑ready package engineered for fast bring‑up and long‑term control.</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          

          <div className="features">
            <div className="feature">
              <h3>Full RTL Source</h3>
              <p>Verilog/SystemVerilog top, tile, PE, router, sparsity, and memory injectors.</p>
            </div>
            <div className="feature">
              <h3>Testbenches & Harnesses</h3>
              <p>Host-driven adapters, deterministic protocol & numeric suites, and workload generators.</p>
            </div>
            <div className="feature">
              <h3>Workload Generators</h3>
              <p>GEMM, MLP, and convolution tiling matrices to validate boundary and numeric cases.</p>
            </div>
            <div className="feature">
              <h3>Formal & Synthesis Collateral</h3>
              <p>Properties, SBY configs where applicable, DVFS wrappers, and gating stubs for vendor flows.</p>
            </div>
            <div className="feature">
              <h3>Artifact Logs</h3>
              <p>CSV summaries with cycles, stalls, inflight, seeds and git SHA for reproducible A/B results.</p>
            </div>
            <div className="feature">
              <h3>Documentation</h3>
              <p>Workload specs, verification goals, CI usage notes, and integration checklist.</p>
            </div>
          </div>

          <div style={{ marginTop: '2rem' }}>
            <h3>Integration Support</h3>
            <p>Advisory sessions on mesh sizing, DVFS partitioning, buffer depth optimization, and optional evaluation packages.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Deliverables;
