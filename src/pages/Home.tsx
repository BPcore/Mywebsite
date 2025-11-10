import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="page">
      {/* Cover Hero Section */}
      <section className="cover-hero">
        <div className="tech-card hero-panel full-bleed">
          <div className="container">
            <div className="cover-left">
              <h1 className="cover-title">NeauraEdge™ NPU — Scalable AI Performance</h1>
              <p className="cover-sub">
                BPcore Silicon delivers a production‑ready neural processing unit (NPU) IP that accelerates modern AI
                inference with a clean, modular RTL architecture designed for integration speed, power efficiency, and
                long‑term independence. Acquire once, deploy forever—no royalties, no attribution.
              </p>

              <div className="cover-cta">
                <Link to="/contact" className="btn">Request Evaluation</Link>
                <Link to="/deliverables" className="btn">What Buyers Get</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards mapped from markdown */}
      <section className="section">
        <div className="container">
          <h2>What NeauraEdge™ Delivers</h2>
          <div className="features">
            <div className="feature">
              <h3>Modular Tile Mesh</h3>
              <p>Scalable tile topology with a lightweight NoC router mesh for throughput scaling without architectural churn.</p>
            </div>
            <div className="feature">
              <h3>Int8→Int32 Compute</h3>
              <p>Optimized accumulation paths for GEMM/MLP and tiling-friendly convolution patterns delivering high TOPS/W.</p>
            </div>
            <div className="feature">
              <h3>Sparsity-Aware Paths</h3>
              <p>RLE bitmap decoders and adaptive FSMs reduce unnecessary MACs and memory traffic.</p>
            </div>
            <div className="feature">
              <h3>Deterministic Validation</h3>
              <p>CSV artifact logs (cycles, stalls, inflight, seeds, git SHA) enable reproducible validation and CI-friendly flows.</p>
            </div>
            <div className="feature">
              <h3>DVFS & Power Hooks</h3>
              <p>Clock/reset wrappers and gating stubs to enable power domain scaling and idle power trim.</p>
            </div>
            <div className="feature">
              <h3>Integration Collateral</h3>
              <p>Deliverables include testbenches, workload harnesses, formal configs, and synthesis-ready wrappers for rapid bring-up.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;