import React from 'react';

export const Footer = () => {
  const css = {
    position: 'sticky',
    bottom: '0',
  };
  return (
      <div>
          <section style={css} className="flex-row-container">
              <div className="flex-row-item">Left</div>
              <div className="flex-row-item">Middle</div>
              <div className="flex-row-item">Right</div>

            </section>
        </div>
  );
};
