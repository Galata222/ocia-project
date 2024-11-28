import React from 'react';
import { Link } from 'react-router-dom';
import './chart.css';
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

// Sample data for user growth over the months
const data = [
  { month: 'Jan', users: 100 },
  { month: 'Feb', users: 200 },
  { month: 'Mar', users: 300 },
  { month: 'Apr', users: 400 },
  { month: 'May', users: 500 },
  { month: 'Jun', users: 600 },
  { month: 'Jul', users: 700 },
  { month: 'Aug', users: 800 },
  { month: 'Sep', users: 900 },
  { month: 'Oct', users: 1000 },
  { month: 'Nov', users: 1005 },
  { month: 'Dec', users: 1100 },
];

function UserChart() {
  return (
    <div className='chartBox userChart'>
      <div className='chartInfo'>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={data}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <CartesianGrid strokeDasharray="3 3" />
            <Line type="monotone" dataKey="users" stroke="#8884d8" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <p className='chartTitle'>Total Users: 1005</p>
      <Link to='/' className='viewAllLink'>View All Users</Link>
    </div>
  );
}

export default UserChart;