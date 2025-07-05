'use client';
import { useState } from 'react';

export default function BillingDetailsPage() {
    return (
        <div className="min-h-screen bg-gray-50 text-gray-800 overflow-auto">



            {/* Page Header */}
            <div className="px-8 py-6">
                <h1 className="text-2xl font-semibold mb-1">Billing Details</h1>
                <p className="text-gray-500">Manage billing information for clients</p>
            </div>

            {/* Main Scrollable Form */}
            <form className="space-y-6 px-8 pb-10">
                {/* Section 1: Company Info */}
                <SectionCard title="Company Information" icon="🏠" bgColor="bg-blue-100">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <SelectField label="Company Name *" placeholder="Select company name" />
                        <InputField label="Company ID *" placeholder="ABC1234" />
                    </div>
                </SectionCard>

                {/* Section 2: Invoice Info */}
                <SectionCard title="Invoice Information" icon="📄" bgColor="bg-purple-100">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <SelectField label="Bill Month" placeholder="Select the month" />
                        <SelectField label="Bill Year" placeholder="Select the Year" />
                        <InputField label="Invoice No." placeholder="Enter the Invoice No." />
                        <InputField label="Invoice Date" placeholder="dd-mm-yyyy" type="date" />
                    </div>
                </SectionCard>

                {/* Section 3: Financial Calculations */}
                <SectionCard title="Financial Calculations" icon="💰" bgColor="bg-red-100">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <InputField label="Invoice Amount" />
                        <InputField label="CGST (2.5%)" />
                        <InputField label="SGST (2.5%)" />
                        <InputField label="GST Total" />
                        <InputField label="Total Amount" />
                        <InputField label="CST & TDS (0.5%)" />
                        <InputField label="Final Amount" />
                        <InputField label="Security Deposit" placeholder="Enter the security deposit amount" />
                    </div>
                </SectionCard>

                {/* Section 4: Payment Info */}
                <SectionCard title="Payment Information" icon="💵" bgColor="bg-green-100">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <InputField label="Received Amount" />
                        <InputField label="Received Amount Date" type="date" />
                        <InputField label="Vehicle Paid" />
                        <InputField label="TDS" />
                        <InputField label="Office Paid" />
                        <InputField label="Tender Balance Amount" />
                    </div>
                </SectionCard>

                {/* Action Buttons */}
                <div className="flex justify-end gap-4 pt-4">
                    <button type="button" className="px-4 py-2 border rounded-md">✖ Close</button>
                    <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md">➕ Add Bill</button>
                </div>
            </form>
        </div>
    );
}

// === Components ===

function SectionCard({ title, icon, bgColor, children }) {
    return (
        <div className={`rounded-lg shadow-sm p-6 ${bgColor}`}>
            <h2 className="flex items-center gap-2 font-semibold text-lg mb-4">
                <span className="text-2xl">{icon}</span>
                {title}
            </h2>
            <div className="bg-white p-6 rounded-md shadow-sm">{children}</div>
        </div>
    );
}

function InputField({ label, placeholder = '', type = 'text' }) {
    return (
        <div>
            <label className="block text-sm mb-1 font-medium">{label}</label>
            <input
                type={type}
                placeholder={placeholder}
                className="w-full border rounded-md px-4 py-2 text-sm focus:outline-none"
            />
        </div>
    );
}

function SelectField({ label, placeholder = '' }) {
    return (
        <div>
            <label className="block text-sm mb-1 font-medium">{label}</label>
            <select className="w-full border rounded-md px-4 py-2 text-sm bg-white text-gray-700">
                <option>{placeholder}</option>
            </select>
        </div>
    );
}
