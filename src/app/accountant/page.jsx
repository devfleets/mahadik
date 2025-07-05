'use client';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer
} from 'recharts';

const data = [
  { year: '2022', value: 5 },
  { year: '2023', value: 20 },
  { year: '2024', value: 75 },
  { year: '2025', value: 90 }
];

export default function AccountantDashboard() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
     
      {/* Summary Cards */}
      <div className="grid grid-cols-4 gap-4 p-6">
        {[
          { label: 'Total Income', value: '₹1,250,000', color: 'text-green-600', icon: '📈' },
          { label: 'Total Expenses', value: '₹1,250,000', color: 'text-red-600', icon: '📉' },
          { label: 'Net Profit', value: '₹1,250,000', color: 'text-blue-600', icon: '💵' },
          { label: 'Pending Amount', value: '₹1,250,000', color: 'text-orange-600', icon: '📂' },
        ].map((card, idx) => (
          <div key={idx} className="bg-white rounded-lg p-4 shadow flex items-center gap-3">
            <div className="text-2xl">{card.icon}</div>
            <div>
              <div className="text-sm text-gray-600">{card.label}</div>
              <div className={`font-bold text-lg ${card.color}`}>{card.value}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-2 gap-6 px-6 pb-10">
        {/* Bar Chart */}
        <div className="bg-white p-4 rounded-xl shadow border">
          <h2 className="font-semibold text-sm mb-4">Profit by year</h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={data}>
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#3B82F6" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Tables */}
        <div className="space-y-4">
          {/* Profit & Loss */}
          <div className="bg-white rounded-lg shadow border p-4">
            <h2 className="font-semibold text-sm mb-2">Profit & Loss</h2>
            <table className="w-full text-sm">
              <thead className="text-gray-500 border-b">
                <tr>
                  <th>Period</th><th>Income</th><th>Expenses</th><th>Total</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { period: 'Nov 2022', income: '₹1,250,000', expense: '₹1,250', total: '₹1,250,000' },
                  { period: 'Current Year', income: '₹1,250,000', expense: '₹1,250', total: '₹1,250,000' },
                ].map((row, i) => (
                  <tr key={i} className="font-medium border-b">
                    <td>{row.period}</td>
                    <td>{row.income}</td>
                    <td>{row.expense}</td>
                    <td className="text-green-600">{row.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Cash Flow */}
          <div className="bg-white rounded-lg shadow border p-4">
            <h2 className="font-semibold text-sm mb-2">Cash Flow</h2>
            <table className="w-full text-sm">
              <thead className="text-gray-500 border-b">
                <tr>
                  <th>Period</th><th>Money In</th><th>Money Out</th><th>Total</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { period: 'Nov 2022', in: '₹1,250,000', out: '₹1,250', total: '₹1,250,000' },
                  { period: 'Current Year', in: '₹1,250,000', out: '₹1,250', total: '₹1,250,000' },
                ].map((row, i) => (
                  <tr key={i} className="font-medium border-b">
                    <td>{row.period}</td>
                    <td>{row.in}</td>
                    <td>{row.out}</td>
                    <td className="text-green-600">{row.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Bank Accounts */}
          <div className="bg-white rounded-lg shadow border p-4">
            <h2 className="font-semibold text-sm mb-2">Bank Accounts</h2>
            <div className="text-sm space-y-2">
              <div className="flex justify-between">
                <span className="text-blue-600 underline">Canara Bank</span>
                <span>₹1,250,000</span>
              </div>
              <div className="flex justify-between">
                <span className="text-blue-600 underline">Bank of Baroda</span>
                <span>₹1,450,000</span>
              </div>
              <div className="flex justify-between font-semibold border-t pt-2">
                <span>Bank Account Total</span>
                <span className="text-green-600">₹2,700,000</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
