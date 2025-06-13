import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

let data = [
  { name: "Jan", Revenue: 4000, Expenses: 2400 },
  { name: "Feb", Revenue: 3000, Expenses: 1398 },
  { name: "Mar", Revenue: 2000, Expenses: 9800 },
  { name: "Apr", Revenue: 2780, Expenses: 3908 },
];

export default function RevenueVsExpenseChart() {
  return (
    <main>
      <div className="bg-white p-4 rounded-xl shadow">
        <h2 className="text-lg font-semibold mb-2">📊 Revenue vs Expenses</h2>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="Revenue" fill="#4ade80" />
            <Bar dataKey="Expenses" fill="#f87171" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </main>
  );
}
