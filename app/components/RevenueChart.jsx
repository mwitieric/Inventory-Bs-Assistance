// app/components/RevenueChart.jsx
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

let dummyData = [
  { month: "Jan", revenue: 1200 },
  { month: "Feb", revenue: 2100 },
  { month: "Mar", revenue: 800 },
  { month: "Apr", revenue: 1600 },
  { month: "May", revenue: 1800 },
  { month: "Jun", revenue: 2400 },
];

export default function RevenueChart() {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <BarChart data={dummyData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="revenue" fill="#f59e0b" radius={[6, 6, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
