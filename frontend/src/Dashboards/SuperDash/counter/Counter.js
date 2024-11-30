import React from "react";
import CountUp from "react-countup";
import './counter.css';

export default function Counter({ number, title, className }) {
  return (
    <div className={`number ${className}`}>
      <CountUp duration={10} className="counter" end={number} />
      <span>{title}</span>
    </div>
  );
}