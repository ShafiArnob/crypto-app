import React from "react";
import { Cell, Label, LabelList, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const PortfolioStatsPieChart = ({ data }) => {
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
  return (
    <div style={{ width: '100%', height: 280 }}>
    <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            dataKey="value"
            cx="50%"
            cy="50%"
            labelLine={true}
            label="name"
            outerRadius={80}
            fill="#8884d8"
          >
          <LabelList dataKey="name" position="inside" fontSize={20-data.length}/>
          <Tooltip />
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PortfolioStatsPieChart;
