'use client';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaEye, FaEdit } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

export default function AccountantClientsPage() {
  const router = useRouter();
  const clients = Array(6).fill({
    name: 'Pune Municipal Corporation',
    person: 'Aviraj Patil',
    email: 'aviraj@pmc.org.in',
    phone: '+91-9876543210',
    address: '123 Business Park, Pune, Maharashtra 400001',
    vehicles: 45,
    status: 'Active',
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="px-10 py-6">
        <h1 className="text-2xl font-semibold">Client Management</h1>
        <p className="text-sm text-gray-500 mb-6">Manage your fleet clients and their vehicle assignments</p>

        <div className="flex justify-between items-center mb-6">
          <input
            type="text"
            placeholder="search client........"
            className="border rounded-md px-4 py-2 w-full max-w-md"
          />
          <button
            onClick={() => router.push('/accountant/clients/add')}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm"
          >
            + Details
          </button>

        </div>

        {/* Client Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {clients.map((client, idx) => (
            <div
              key={idx}
              className="border bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-blue-100 p-2 rounded-full text-blue-600">🏠</div>
                <div>
                  <div className="font-semibold">{client.name}</div>
                  <div className="text-sm text-gray-500">{client.person}</div>
                </div>
              </div>
              <div className="flex items-center text-sm text-gray-600 gap-2 my-1">
                <FaEnvelope className="text-gray-400" /> {client.email}
              </div>
              <div className="flex items-center text-sm text-gray-600 gap-2 my-1">
                <FaPhone className="text-gray-400" /> {client.phone}
              </div>
              <div className="flex items-center text-sm text-gray-600 gap-2 my-1">
                <FaMapMarkerAlt className="text-gray-400" /> {client.address}
              </div>

              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center gap-2 text-sm">
                  🚘 <span className="font-medium">{client.vehicles}</span>
                </div>
                <div className="text-xs px-2 py-1 bg-green-100 text-green-600 rounded">{client.status}</div>
              </div>

              <div className="flex justify-between mt-4">
                <button
                  onClick={() => router.push('/accountant/view/abc')}
                  className="text-sm px-4 py-2 bg-blue-100 rounded"
                >
                  View
                </button>
                <button className="flex items-center gap-1 px-4 py-1 bg-gray-100 rounded-full text-black text-sm" onClick={() => router.push('/accountant/clients/edit')}>
                  <FaEdit /> Edit
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
