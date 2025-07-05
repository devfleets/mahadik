'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function EditClientDetailsPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    companyName: 'ABC company',
    companyId: 'ABC1234',
    monthlyBilling: '835383',
    freight: '53732r327',
    welfare: '64846',
    fuel: '5367353',
    vehicleEmi: '4363436',
    other: '536362',
    salary: '53735',
    unpaid: '536353',
  });

  const handleChange = (field) => (e) =>
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));

  return (
    <div className="min-h-screen bg-white">

      {/* Page Title */}
      <div className="p-6">
        <h1 className="text-2xl font-semibold">Edit Details</h1>
        <p className="text-sm text-gray-500">Edit details with complete details</p>
      </div>

      {/* Company Info */}
      <div className="bg-blue-50 mx-6 p-4 rounded-lg shadow-sm border border-blue-100 mb-6">
        <div className="flex items-center gap-2 mb-4">
          <div className="bg-blue-600 w-6 h-6 rounded text-white flex items-center justify-center text-sm">🏢</div>
          <h2 className="text-lg font-semibold text-blue-900">Company Information</h2>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm mb-1">Company Name *</label>
            <select
              className="w-full border px-3 py-2 rounded-md text-sm"
              value={formData.companyName}
              onChange={handleChange('companyName')}
            >
              <option>ABC company</option>
              <option>XYZ company</option>
              <option>Other company</option>
            </select>
          </div>
          <div>
            <label className="block text-sm mb-1">Company ID *</label>
            <input
              type="text"
              className="w-full border px-3 py-2 rounded-md text-sm"
              value={formData.companyId}
              readOnly
            />
          </div>
        </div>
      </div>

      {/* Financial Info */}
      <div className="bg-purple-50 mx-6 p-4 rounded-lg shadow-sm border border-purple-100 mb-6">
        <div className="flex items-center gap-2 mb-4">
          <div className="bg-purple-600 w-6 h-6 rounded text-white flex items-center justify-center text-sm">💰</div>
          <h2 className="text-lg font-semibold text-purple-900">Financial Information</h2>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {[
            ['Monthly Billing Amount', 'monthlyBilling'],
            ['Freight', 'freight'],
            ['Welfare Payment', 'welfare'],
            ['Fuel Expenses', 'fuel'],
            ['Vehicle EMI', 'vehicleEmi'],
            ['Other Expenses', 'other'],
            ['Salary', 'salary'],
            ['Unpaid Amount', 'unpaid'],
          ].map(([label, field]) => (
            <div key={field}>
              <label className="block text-sm mb-1">{label}</label>
              <input
                type="text"
                value={formData[field]}
                onChange={handleChange(field)}
                className="w-full border px-3 py-2 rounded-md text-sm"
              />
            </div>
          ))}
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
