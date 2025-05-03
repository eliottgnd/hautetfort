import React from 'react';
import '../styles/SectionDivider.css';

const SectionDivider = () => {
  return (
    <div className="section-divider">
      <div className="divider-track">
        <div className="divider-shape">
          <div className="shape-square"></div>
        </div>
        <div className="divider-shape">
          <div className="shape-circle"></div>
        </div>
        <div className="divider-shape">
          <div className="shape-triangle"></div>
        </div>
        <div className="divider-shape">
          <div className="shape-rectangle"></div>
        </div>
        <div className="divider-shape">
          <div className="shape-diamond"></div>
        </div>
        <div className="divider-shape">
          <div className="shape-square alt"></div>
        </div>
        <div className="divider-shape">
          <div className="shape-circle alt"></div>
        </div>
        <div className="divider-shape">
          <div className="shape-triangle alt"></div>
        </div>
        <div className="divider-shape">
          <div className="shape-rectangle alt"></div>
        </div>
        <div className="divider-shape">
          <div className="shape-diamond alt"></div>
        </div>
      </div>
    </div>
  );
};

export default SectionDivider; 