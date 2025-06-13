// app/components/RevenueVsRestockChart.jsx
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

let dummyData = [
  { month: "Jan", revenue: 1200, restock: 400 },
  { month: "Feb", revenue: 2100, restock: 1000 },
  { month: "Mar", revenue: 800, restock: 600 },
  { month: "Apr", revenue: 1600, restock: 900 },
  { month: "May", revenue: 1800, restock: 500 },
  { month: "Jun", revenue: 2400, restock: 700 },
];

export default function RevenueVsRestockChart() {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <LineChart data={dummyData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="revenue"
          stroke="#10b981"
          strokeWidth={2}
        />
        <Line
          type="monotone"
          dataKey="restock"
          stroke="#ef4444"
          strokeWidth={2}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
