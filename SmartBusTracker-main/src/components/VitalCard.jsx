import React from "react";

const VitalCard = ({ label, value }) => {
  return (
    <div className="card">
      <h4>{label}</h4>
      <p><strong>{value}</strong></p>
    </div>
  );
};

export default VitalCard;
