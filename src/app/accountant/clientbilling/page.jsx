import Link from "next/link";

export default function ClientBillingDashboard() {
    const companies = [
        { id: "pmco", name: "Pune Municipal Corporation" },
        { id: "pcmc", name: "Pimpri Chinchwad Municipal Corporation" },
        { id: "pamc", name: "Panvel Municipal Corporation" },
        { id: "gstm", name: "GST Bhavan, Mumbai" },
        { id: "mswc", name: "Maharashtra State Warehousing Corporation" },
        { id: "mmoc", name: "Maha Mumbai Metro Operation Corporation Ltd" },
        { id: "imcv", name: "Ichalkaranji Municipal Corporation: Vehicle" },
        { id: "imcd", name: "Ichalkaranji Municipal Corporation: Driver" },
        { id: "kmcd", name: "Kolhapur Municipal Corporation: Driver" },
        { id: "bamc", name: "Bharatratna Atalbihari Vajpayee Medical College" },
        { id: "midc", name: "Maharashtra Industrial Development Corporation" },
        { id: "exls", name: "EXL Service" },
    ];

    // Sample data for stats
    const stats = {
        totalEntries: 1245,
        activeToday: 18
    };

    return (
        <div className="min-h-screen bg-gray-50 p-4 md:p-6">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <header className="mb-8">
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Client Billing Dashboard</h1>
                    <p className="text-gray-600 mt-2">Manage all client billing entries and reports</p>

                    {/* Stats Cards */}
                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-blue-500">
                            <h2 className="text-lg font-semibold text-gray-700">Total Companies</h2>
                            <p className="text-3xl font-bold text-gray-900 mt-2">{companies.length}</p>
                            <p className="text-sm text-gray-500 mt-1">Registered clients</p>
                        </div>

                        <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-green-500">
                            <h2 className="text-lg font-semibold text-gray-700">Total Entries</h2>
                            <p className="text-3xl font-bold text-gray-900 mt-2">{stats.totalEntries}</p>
                            <p className="text-sm text-gray-500 mt-1">All-time records</p>
                        </div>

                        <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-purple-500">
                            <h2 className="text-lg font-semibold text-gray-700">Active Today</h2>
                            <p className="text-3xl font-bold text-gray-900 mt-2">{stats.activeToday}</p>
                            <p className="text-sm text-gray-500 mt-1">Recent activities</p>
                        </div>
                    </div>
                </header>

                {/* Divider */}
                <div className="border-t border-gray-200 my-6"></div>

                {/* Companies List */}
                <section>
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-semibold text-gray-800">Client Companies</h2>
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search companies..."
                                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <svg
                                className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {companies.map((company) => (
                            <div
                                key={company.id}
                                className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
                            >
                                <div className="flex items-center mb-4">
                                    <div className="bg-blue-100 text-blue-800 rounded-full w-10 h-10 flex items-center justify-center font-bold">
                                        {company.name.charAt(0)}
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-800 ml-3">{company.name}</h3>
                                </div>

                                <div className="flex justify-between text-sm text-gray-600 mb-4">
                                    <span>21 fields</span>
                                    <span>124 entries</span>
                                </div>

                                <div className="flex space-x-2">
                                    <Link
                                        href={`/clientbilling/viewentries/${company.id}`}
                                        className="flex-1 text-center px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition text-sm"
                                    >
                                        View
                                    </Link>
                                    <Link
                                        href={`/clientbilling/addentry/${company.id}`}
                                        className="flex-1 text-center px-3 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition text-sm"
                                    >
                                        Add Entry
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Recent Activity Section (Optional) */}
                <section className="mt-12">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Activity</h2>
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Company</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {companies.slice(0, 5).map((company) => (
                                    <tr key={company.id}>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="flex-shrink-0 h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                                                    <span className="text-blue-800 font-medium">{company.name.charAt(0)}</span>
                                                </div>
                                                <div className="ml-4">
                                                    <div className="text-sm font-medium text-gray-900">{company.name}</div>
                                                    <div className="text-sm text-gray-500">{company.id.toUpperCase()}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                Entry Added
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            ₹12,450
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            2 hours ago
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
        </div>
    );
}