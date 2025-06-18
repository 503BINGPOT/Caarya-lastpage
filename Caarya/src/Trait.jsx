// src/components/TraitItem.jsx

import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import './trait.css';

const TraitItem = ({ title, value, description, note }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="trait-group" onClick={() => setOpen(!open)}>
      <div className="trait-header">
        <div className="trait-title-wrapper">
          <img src="/icons/trait-icon.svg" alt="" className="trait-icon-img" />
          <span className="trait-title">{title}</span>
          <span className="tooltip-icon">?</span>
        </div>
        <div className="trait-toggle-icon">
          {open ? <FaChevronUp size={14} /> : <FaChevronDown size={14} />}
        </div>
      </div>
      <p className="trait-value">{value}</p>
      {open && (
        <>
          {description && <p className="trait-desc">{description}</p>}
          {note && <div className="trait-note">✨ {note}</div>}
        </>
      )}
    </div>
  );
};

export default TraitItem;
