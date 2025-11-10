import React from 'react';

const Technology: React.FC = () => {
  return (
    <div className="page">
      <section className="center-hero">
        <div className="container">
          <h1>Architecture Overview</h1>
          <p>The NeauraEdge™ NPU is a composable compute fabric organized into tiles with processing elements (PEs), local memory structures, and a lightweight NoC router mesh.</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="tech-card">
            <h3 className="section-title">Architecture Overview</h3>
            <p style={{ textAlign: 'left', marginBottom: '1rem' }}>
              The NeauraEdge™ NPU is a composable compute fabric organized into tiles
              with processing elements (PEs), local memory structures, and a
              lightweight NoC router mesh.
            </p>

            <h4 style={{ textAlign: 'left', marginTop: '0.5rem' }}>Key design elements</h4>
            <ul style={{ marginLeft: '1.25rem', marginBottom: '1.25rem' }}>
              <li>Composable tiles — scale from minimal to larger meshes (e.g., 2×2 → 3×3) without architectural rework.</li>
              <li>Packetized on‑chip network — flit‑based, ready/valid handshakes, backpressure‑tolerant.</li>
              <li>Sparsity-aware execution — bitmap RLE decoder and adaptive sparsity FSM to skip inactive work.</li>
              <li>Memory realism — latency/contention injectors to model system‑level behavior.</li>
              <li>Host adapter for bring‑up — micro‑header parsing (e.g., GEMM, 2‑layer MLP) with digest‑based validation in simulation.</li>
            </ul>

            <div className="tech-divider" />

            <h4 style={{ textAlign: 'left', marginTop: '0.25rem' }}>Representative RTL blocks</h4>
            <ul style={{ marginLeft: '1.25rem', marginBottom: '1.5rem' }}>
              <li>Router fabric: <code>router_mesh</code>, <code>router_cell</code>, FIFO buffering</li>
              <li>Compute: <code>neuraedge_pe</code> (int8→int32 accumulation), enhanced PE variants</li>
              <li>Sparsity: <code>bitmap_rle_decoder</code>, <code>sparsity_adaptive_fsm</code></li>
              <li>Memory: <code>memory_latency_injector</code> (contention/latency models)</li>
              <li>Top/wrappers: <code>neuraedge_top</code>, FPGA/top harness, clock gating wrapper</li>
            </ul>
          </div>

          {/* Supported Workloads (two-column) in its own tech card with icon */}
          <div className="tech-card">
            <div className="section-header">
              <span className="section-icon" aria-hidden="true">
                {/* stack icon */}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="3" y="4" width="18" height="4" rx="1" />
                  <rect x="6" y="10" width="12" height="3" rx="1" />
                  <rect x="8" y="15" width="8" height="3" rx="1" />
                </svg>
              </span>
              <h3 className="section-title">Supported Workloads and Frameworks</h3>
            </div>

            <div className="two-col" style={{ marginTop: '0.5rem', marginBottom: '0.5rem' }}>
              <div className="col">
                <h4 style={{ marginTop: 0 }}>Validated patterns</h4>
                <ul className="validated-list">
                  <li>GEMM (int8 accumulation to int32): boundary/odd dimensions, numeric edge cases</li>
                  <li>MLP (2‑layer): digest‑based end‑to‑end smoke</li>
                  <li>Convolution tiling patterns: partial tiles, padding/stride matrices</li>
                  <li>Flow control: sink stalls (random/periodic), source pacing, burst/idle mixes, mid‑stream reset</li>
                </ul>
              </div>

              <div className="col">
                <h4 style={{ marginTop: 0 }}>Extensible to</h4>
                <ul className="extensible-list">
                  <li>Depthwise and pointwise convolution</li>
                  <li>Common activations (ReLU/Leaky/ReLU6, LUT‑based sigmoid/tanh)</li>
                  <li>Reductions and pooling</li>
                  <li>Attention micro‑kernels</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="tech-card" style={{ marginTop: '1rem', marginBottom: '1.5rem' }}>
            <div className="section-header">
              <span className="section-icon" aria-hidden="true">
                {/* speedometer icon */}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M3 12a9 9 0 1 0 18 0" />
                  <path d="M6.4 10.6l6.6 3.4 2-3.2" />
                </svg>
              </span>
              <h3 className="section-title">Performance Concepts</h3>
            </div>
            <ul style={{ marginLeft: '1.25rem' }}>
              <li>Int8 compute density targeting high TOPS/W</li>
              <li>Sparsity skipping to reduce wasted MAC activity</li>
              <li>DVFS‑ready clock/reset wrappers; gating stubs to trim idle power</li>
              <li>Minimal control overhead via simple CSR blocks.</li>
            </ul>
          </div>

          <div className="tech-card" style={{ marginTop: '1rem', marginBottom: '1.5rem' }}>
            <div className="section-header">
              <span className="section-icon" aria-hidden="true">
                {/* gear / integration icon */}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 15.5A3.5 3.5 0 1 0 12 8.5a3.5 3.5 0 0 0 0 7z" />
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06A2 2 0 1 1 2.7 16.88l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09c.7 0 1.28-.42 1.51-1a1.65 1.65 0 0 0-.33-1.82L4.27 4.7A2 2 0 1 1 7.1 1.87l.06.06A1.65 1.65 0 0 0 9 2.3c.7 0 1.28.42 1.51 1H11a2 2 0 1 1 4 0h-.09c-.7 0-1.28.42-1.51 1a1.65 1.65 0 0 0 .33 1.82l.06.06A2 2 0 1 1 19.4 8.12l-.06-.06a1.65 1.65 0 0 0-.33 1.82c.22.58.81 1 1.51 1H21a2 2 0 1 1 0 4h-.09c-.7 0-1.28.42-1.51 1z" />
                </svg>
              </span>
              <h3 className="section-title">Design Integration Benefits</h3>
            </div>
            <ul style={{ marginLeft: '1.25rem' }}>
              <li>Deterministic protocol suite with A/B runs and byte‑identical CSV diffs</li>
              <li>Digest‑based verification (64‑bit XOR) for fast, CI‑friendly goldens</li>
              <li>Granular stress controls (source rate, sink stalls, watchdog, resets)</li>
              <li>Scalable parameters (mesh size, flit width, FIFO depths) for PPA tuning</li>
              <li>Lint‑hardened, timescale‑normalized RTL for smoother EDA flows</li>
            </ul>
          </div>

          {/* Feature cards removed per request */}

          {/* Single Representative RTL Blocks section retained above; duplicate removed */}
        </div>
      </section>
    </div>
  );
};

export default Technology;
