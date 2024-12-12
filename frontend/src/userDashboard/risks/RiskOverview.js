import React, { PureComponent } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import '../../style/riskoveriew.css';

const data = [
  { name: 'Submitted Risk', value: 400 },
  { name: 'Approved Risk', value: 300 },
  { name: 'Rejected Risk', value: 100 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default class RiskOverview extends PureComponent {
  render() {
    const total = data.reduce((acc, entry) => acc + entry.value, 0);

    return (
      <div className="riskoverview_container">
        <h2 className="riskoverview_title">Risk Overview</h2>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="riskoverview_summary">
          {data.map((entry) => {
            const percentage = ((entry.value / total) * 100).toFixed(0);
            return (
              <div className="riskoverview_item" key={entry.name}>
                <span className="riskoverview_label">{entry.name}:</span>
                <span className="riskoverview_value">{percentage}%</span>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}