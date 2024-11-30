import React from 'react';
import { Link } from 'react-router-dom';
import './chart.css';
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const data = [
  { name: 'Category A', submitted: 400 },
  { name: 'Category B', submitted: 300 },
  { name: 'Category C', submitted: 200 },
  { name: 'Category D', submitted: 278 },
];

function SubmittedRiskChart() {
  return (
    <div className='chartBox submittedRiskChart'>
      
      <div className='chartInfo'>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="submitted" fill="#ff6347" /> {/* Color for the bars */}
          </BarChart>
        </ResponsiveContainer>
      </div>
      <p className='chartTitle'>Total Submitted Risks: 2000</p>
      <Link to='/' className='viewAllLink'>View All Risks</Link>
    </div>
  );
}

export default SubmittedRiskChart;