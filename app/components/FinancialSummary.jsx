export default function FinancialSummary() {
  return (
    <main>
      <div className="bg-white p-4 rounded-xl shadow">
        <p className="text-sm text-gray-500">💰 You'll need</p>
        <p className="text-3xl font-bold">$6,300</p>
        <p className="text-sm text-gray-500">to last 6 months.</p>
        <p className="text-green-600 font-medium mt-2">
          ✅ You're <span className="font-bold">60%</span> toward your 6-month
          goal
        </p>
      </div>
    </main>
  );
}
