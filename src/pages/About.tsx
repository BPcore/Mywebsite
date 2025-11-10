import React from 'react';

const About: React.FC = () => {
  return (
    <div className="page">
      {/* centered typographic hero for the About page */}
      <section className="center-hero">
        <div className="container">
          <h1>About BPcore Silicon</h1>
          <p>Enable next‑generation AI silicon freedom through royalty‑free IP that customers fully own and control.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>About BPcore Silicon</h2>
          <p style={{ textAlign: 'center', fontSize: '1.2rem', marginBottom: '2rem' }}>
            Enable next‑generation AI silicon freedom through royalty‑free IP that
            customers fully own and control.
          </p>

          <div className="features">
            <div className="feature">
              <h3>Mission</h3>
              <p>
                To deliver transparent, reproducible, and extensible NPU IP that
                removes vendor lock‑in and enables long-term product independence.
                Build India’s leading fabless IP company for neural compute—defined
                by transparent licensing and rigorous, reproducible engineering.
              </p>
            </div>
            <div className="feature">
              <h3>Values</h3>
              <p>
                Engineering transparency, evidence‑driven claims, customization
                enablement, and sustainable economics.
              </p>
            </div>
          </div>

          <div style={{ marginTop: '3rem', textAlign: 'center' }}>
            <h3>Partnership Approach</h3>
            <p style={{ maxWidth: '900px', margin: '0 auto', lineHeight: '1.8' }}>
              Early technical alignment, lightweight onboarding, and long‑horizon
              enablement focused on extensibility—not forced upgrades. Internal
              attribution is optional: your silicon, your brand.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;