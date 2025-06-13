import "../app.css";
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

import RevenueChart from "../components/RevenueChart";
import RevenueVsRestockChart from "../components/RevenueVsRestockChart";
import RevenueVsExpenseChart from "../components/RevenueVsExpenseChart";

export function meta() {
  return [
    { title: "IVENTORY B/S ASSISTANCE" },
    { name: "description", content: "Number one Spcice store" },
  ];
}

let data = [
  { category: "Transport", value: 70 },
  { category: "Rent", value: 45 },
  { category: "Packaging", value: 15 },
];

export default function Home() {
  return (
    <main className="text-black bg-white">
      <div className="p-4">
        <h1 className="text-5xl font-semibold mb-4 text-[#121212]">
          Sales Performance
        </h1>
      </div>
      <div className="p-7 bg-gray-50 min-h-screen">
        {/* Top Stats */}
        <div className="grid grid-cols-4  gap-6 mb-6 ">
          {[
            { label: "Monthly Revenue", value: "$4,500" },
            { label: "Net Cash Flow", value: "$2,200" },
            { label: "Stock Value", value: "$3,800" },
            { label: "Days of Stock Left", value: "35" },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-2xl shadow flex flex-col justify-center items-center"
            >
              <h3 className="text-sm font-medium text-gray-500">
                {item.label}
              </h3>
              <p className="text-xl font-bold text-gray-800">{item.value}</p>
            </div>
          ))}
        </div>

        {/* Charts & Tables */}
        <div className="grid grid-cols-2  gap-18 mb-20 row-span-9 ">
          <div className=" p-15  rounded-2xl  gap-7 shadow  ">
            <h3 className="text-lg font-semibold mb-2 px-7">Monthly Revenue</h3>
            <div className="h-35 bg-gray-100 rounded" />
            <RevenueChart />
          </div>

          <div className="bg-white p-4 rounded-2xl shadow">
            <h3 className="text-lg font-semibold mb-10 px-7">
              Revenue vs. Restock Cost
            </h3>
            <div className="h-35 bg-gray-100 rounded" />
            <RevenueVsRestockChart />
          </div>

          <div className="bg-white p-4 rounded-2xl shadow">
            <h3 className="text-lg font-semibold mb-10 px-7">
              Revenue vs. expense
            </h3>
            <div className="h-35 bg-gray-100 rounded" />
            <RevenueVsExpenseChart />
          </div>

          {/* Expenses Pie Chart */}
          <div className="bg-white p-4 rounded-2xl shadow">
            <h3 className="text-lg font-semibold mb-2">Expenses</h3>

            {/* Bar Chart  */}

            <div className="h-40 mb-2">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <XAxis dataKey="category" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#f87171" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Text Summary */}

            <ul className="text-sm text-gray-600">
              <li>🟢 Transport - 50%</li>
              <li>🟡 Rent - 45%</li>
              <li>🔴 Packaging - 15%</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
