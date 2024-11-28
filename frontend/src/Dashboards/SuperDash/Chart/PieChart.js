import React from 'react';
import { Link } from 'react-router-dom';
import './chart.css';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

// Sample data representing income sources
const data = [
  { name: 'Source A', value: 4000 },
  { name: 'Source B', value: 3000 },
  { name: 'Source C', value: 2000 },
  { name: 'Source D', value: 2780 },
  { name: 'Source E', value: 1890 },
];

// Define a custom color palette
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF6384'];

// Function to render customized labels
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
  const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

function IncomeChart() {
  return (
    <div className='chartBox incomeChartBox'>
      <div className='chartInfo'>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              outerRadius={80}
              dataKey="value"
              label={renderCustomizedLabel}
              labelLine={false}
              fill="#8884d8"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <p className='chartTitle'>Total Income: $2000</p>
      <Link to='/' className='viewAllLink'>View All Income Sources</Link>
    </div>
  );
}

export default IncomeChart;