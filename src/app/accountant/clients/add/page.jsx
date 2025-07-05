'use client';

import { useRouter } from 'next/navigation';

export default function AddClientDetailsPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-white">

      {/* Page Title */}
      <div className="p-6">
        <h1 className="text-2xl font-semibold">Add New Details</h1>
        <p className="text-sm text-gray-500">Add new account details with complete details</p>
      </div>

      {/* Company Information */}
      <div className="bg-blue-50 mx-6 p-4 rounded-lg shadow-sm border border-blue-100 mb-6">
        <div className="flex items-center gap-2 mb-4">
          <div className="bg-blue-600 w-6 h-6 rounded text-white flex items-center justify-center text-sm">🏢</div>
          <h2 className="text-lg font-semibold text-blue-900">Company Information</h2>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm mb-1">Company Name *</label>
            <select className="w-full border px-3 py-2 rounded-md text-sm">
              <option>Select company name</option>
            </select>
          </div>
          <div>
            <label className="block text-sm mb-1">Company ID *</label>
            <input type="text" className="w-full border px-3 py-2 rounded-md text-sm" placeholder="Company ID" />
          </div>
        </div>
      </div>

      {/* Financial Information */}
      <div className="bg-purple-50 mx-6 p-4 rounded-lg shadow-sm border border-purple-100 mb-6">
        <div className="flex items-center gap-2 mb-4">
          <div className="bg-purple-600 w-6 h-6 rounded text-white flex items-center justify-center text-sm">💰</div>
          <h2 className="text-lg font-semibold text-purple-900">Financial Information</h2>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="block text-sm mb-1">Monthly Billing Amount</label>
            <input type="text" placeholder="Enter amount" className="w-full border px-3 py-2 rounded-md text-sm" />
          </div>
          <div>
            <label className="block text-sm mb-1">Freight</label>
            <input type="text" placeholder="Enter freight amount" className="w-full border px-3 py-2 rounded-md text-sm" />
          </div>
          <div>
            <label className="block text-sm mb-1">Welfare Payment</label>
            <input type="text" placeholder="Enter welfare payment" className="w-full border px-3 py-2 rounded-md text-sm" />
          </div>
          <div>
            <label className="block text-sm mb-1">Fuel Expenses</label>
            <input type="text" placeholder="Enter fuel expenses" className="w-full border px-3 py-2 rounded-md text-sm" />
          </div>
          <div>
            <label className="block text-sm mb-1">Vehicle EMI</label>
            <input type="text" placeholder="Enter EMI amount" className="w-full border px-3 py-2 rounded-md text-sm" />
          </div>
          <div>
            <label className="block text-sm mb-1">Other Expenses</label>
            <input type="text" placeholder="Enter other expenses" className="w-full border px-3 py-2 rounded-md text-sm" />
          </div>
          <div>
            <label className="block text-sm mb-1">Salary</label>
            <input type="text" placeholder="Enter salary amount" className="w-full border px-3 py-2 rounded-md text-sm" />
          </div>
          <div>
            <label className="block text-sm mb-1">Unpaid Amount</label>
            <input type="text" placeholder="Enter unpaid amount" className="w-full border px-3 py-2 rounded-md text-sm" />
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-end px-6 pb-8 gap-4">
        <button
          className="px-4 py-2 rounded-md border border-gray-300 text-sm hover:bg-gray-100"
          onClick={() => router.back()}
        >
          × Close
        </button>
        <button className="px-4 py-2 rounded-md bg-blue-600 text-white text-sm hover:bg-blue-700">
          📄 Add Details
        </button>
      </div>
    </div>
  );
}
