import React from "react";
import Chart from "./Chart/Chart";
import BarChart from "./Chart/Barchart";
import PieChart from "./Chart/PieChart";
import Table from "./Table/Table";
import "./superadmin.css";
import Counter from "./counter/Counter";
import "./counter/counter.css";
import CalendarComponent from './calander/Calendar';

function SuperAdmin() {
  return (
    <div className="superadmin-container">
      <div className="numbers">
        <Counter className="counter counter-users" number={1005} title="Users" />
        <Counter className="counter counter-admins" number={100} title="Admins" />
        <Counter className="counter counter-submitted" number={5175} title="Submitted Risks" />
        <Counter className="counter counter-approved" number={468} title="Approved Risks" />
      </div>
      <div className="charts">
        <div className="chart-container">
          <Chart />
        </div>
        <div className="chart-container">
          <BarChart />
        </div>
        <div className="chart-container">
          <PieChart />
        </div>
      </div>
      <div className="table-container">
        <Table />
      </div>
      <div className="calendar-container">
        <CalendarComponent />
      </div>
     
    </div>
  );
}

export default SuperAdmin;