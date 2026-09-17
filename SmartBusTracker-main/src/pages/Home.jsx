import React from "react";
import Card from "../components/Card";
import VitalCard from "../components/VitalCard";

const Home = () => {
  return (
    <div>
      <h2>Welcome to Smart Bus Tracker</h2>
      <p>Track buses in real-time and never miss your ride again!</p>

      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        <VitalCard label="Active Buses" value="12" />
        <VitalCard label="Routes Covered" value="5" />
        <VitalCard label="Live Users" value="102" />
      </div>

      <Card title="Feature 1" description="Real-time GPS tracking for buses." />
      <Card title="Feature 2" description="Arrival time prediction at stops." />
      <Card title="Feature 3" description="User-friendly maps and routes." />
    </div>
  );
};

export default Home;
