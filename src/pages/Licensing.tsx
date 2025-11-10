import React from 'react';

const Licensing: React.FC = () => {
  return (
    <div className="page">
      <section className="center-hero">
        <div className="container">
          <h1>Licensing Model</h1>
          <p>One‑Time Acquisition. Zero Royalty. No Attribution.</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          

          <div className="features">
            <div className="feature">
              <h3>Sales Style</h3>
              <p>Single upfront fee; perpetual internal rights; royalty-free unlimited deployments.</p>
            </div>
            <div className="feature">
              <h3>Source Access</h3>
              <p>Full RTL & collateral for audit, modification, and extension—no opaque black boxes.</p>
            </div>
            <div className="feature">
              <h3>Ownership Freedom</h3>
              <p>Fork, scale, and tailor NeauraEdge without renegotiation or per-product fees.</p>
            </div>
          </div>

          <div style={{ marginTop: '2rem' }}>
            <h3>Comparison (Indicative)</h3>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th style={{ textAlign: 'left', padding: '8px' }}>Aspect</th>
                  <th style={{ textAlign: 'left', padding: '8px' }}>BPcore Silicon</th>
                  <th style={{ textAlign: 'left', padding: '8px' }}>Traditional IP Vendor</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ padding: '8px' }}>Cost model</td>
                  <td style={{ padding: '8px' }}>Single upfront fee</td>
                  <td style={{ padding: '8px' }}>Upfront + ongoing royalties</td>
                </tr>
                <tr>
                  <td style={{ padding: '8px' }}>Per-unit fees</td>
                  <td style={{ padding: '8px' }}>None</td>
                  <td style={{ padding: '8px' }}>Common</td>
                </tr>
                <tr>
                  <td style={{ padding: '8px' }}>Source access</td>
                  <td style={{ padding: '8px' }}>Full RTL</td>
                  <td style={{ padding: '8px' }}>Sometimes limited</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Licensing;
