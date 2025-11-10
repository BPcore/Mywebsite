import React from 'react';

type Props = {
  title: string;
  children: React.ReactNode;
};

const FeatureCard: React.FC<Props> = ({ title, children }) => {
  return (
    <div className="glass-card">
      <h3>{title}</h3>
      <p>{children}</p>
    </div>
  );
};

export default FeatureCard;
