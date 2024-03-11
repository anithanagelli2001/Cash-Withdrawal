import React from 'react';

const DenominationItem = ({ value, onClick }) => {
  return (
    <button className="denomination-item" onClick={onClick}>
      {value} rupees
    </button>
  );
};

export default DenominationItem;
