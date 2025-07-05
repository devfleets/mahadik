"use client";
import { useState, useEffect } from 'react';
import { collection, query, where, getDocs, doc, getDoc } from 'firebase/firestore';
import { db } from '../../../../../firebase/firebase';

const ViewEntries = () => {
    const [entries, setEntries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filters, setFilters] = useState({
        company: '',
        year: new Date().getFullYear(),
        month: ''
    });
    const [selectedEntry, setSelectedEntry] = useState(null);
    const [showModal, setShowModal] = useState(false);

    // Same companies array as in AddBillForm
    const companies = [
        { id: "pmco", name: "Pune Municipal Corporation" },
        { id: "pcmc", name: "Pimpri Chinchwad Municipal Corporation" },
        // ... other companies
    ];

    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: 27 }, (_, i) => 2000 + i);

    const months = Array.from({ length: 12 }, (_, i) => {
        const date = new Date(0, i);
        return {
            value: date.toLocaleString('default', { month: 'short' }).toLowerCase(),
            label: date.toLocaleString('default', { month: 'long' })
        };
    });

    const fetchEntries = async () => {
        setLoading(true);
        try {
            if (!filters.company) {
                setEntries([]);
                return;
            }

            // Reference to the client document
            const clientDocRef = doc(db, 'clients', filters.company);

            // Reference to the years collection inside the client document
            const yearsCollectionRef = collection(clientDocRef, filters.year.toString());

            // Get all documents in the year collection
            const querySnapshot = await getDocs(yearsCollectionRef);

            const entriesData = [];
            querySnapshot.forEach((doc) => {
                const data = doc.data();
                entriesData.push({
                    id: doc.id,
                    ...data,
                    // Calculate financial year from document ID
                    financialYear: doc.id.slice(-4) // Last 4 characters of the doc ID
                });
            });

            // Filter by month if selected
            const filteredEntries = filters.month
                ? entriesData.filter(entry => entry.month === filters.month)
                : entriesData;

            setEntries(filteredEntries);
        } catch (error) {
            console.error("Error fetching entries: ", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchEntries();
    }, [filters]);

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const viewEntryDetails = (entry) => {
        setSelectedEntry(entry);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setSelectedEntry(null);
    };

    return (
        <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-center">View Bill Entries</h2>

            {/* Filters */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div>
                    <label className="block text-gray-700 mb-2" htmlFor="company">
                        Company
                    </label>
                    <select
                        id="company"
                        name="company"
                        value={filters.company}
                        onChange={handleFilterChange}
                        className="w-full p-2 border border-gray-300 rounded"
                    >
                        <option value="">All Companies</option>
                        {companies.map(company => (
                            <option key={company.id} value={company.id}>{company.name}</option>
                        ))}
                    </select>
                </div>

                <div>
                    <label className="block text-gray-700 mb-2" htmlFor="year">
                        Year
                    </label>
                    <select
                        id="year"
                        name="year"
                        value={filters.year}
                        onChange={handleFilterChange}
                        className="w-full p-2 border border-gray-300 rounded"
                    >
                        {years.map(year => (
                            <option key={year} value={year}>{year}</option>
                        ))}
                    </select>
                </div>

                <div>
                    <label className="block text-gray-700 mb-2" htmlFor="month">
                        Month
                    </label>
                    <select
                        id="month"
                        name="month"
                        value={filters.month}
                        onChange={handleFilterChange}
                        className="w-full p-2 border border-gray-300 rounded"
                    >
                        <option value="">All Months</option>
                        {months.map(month => (
                            <option key={month.value} value={month.value}>{month.label}</option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Entries Table */}
            {loading ? (
                <div className="text-center py-8">
                    <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
                    <p className="mt-2">Loading entries...</p>
                </div>
            ) : entries.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                    No entries found for the selected filters
                </div>
            ) : (
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="py-2 px-4 border-b border-gray-200 text-left">Bill Number</th>
                                <th className="py-2 px-4 border-b border-gray-200 text-left">Month</th>
                                <th className="py-2 px-4 border-b border-gray-200 text-left">Amount</th>
                                <th className="py-2 px-4 border-b border-gray-200 text-left">GST</th>
                                <th className="py-2 px-4 border-b border-gray-200 text-left">Profit</th>
                                <th className="py-2 px-4 border-b border-gray-200 text-left">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {entries.map((entry) => (
                                <tr key={entry.id} className="hover:bg-gray-50">
                                    <td className="py-2 px-4 border-b border-gray-200">{entry.id}</td>
                                    <td className="py-2 px-4 border-b border-gray-200 capitalize">{entry.month}</td>
                                    <td className="py-2 px-4 border-b border-gray-200">₹{entry.billAmount?.toLocaleString() || 'N/A'}</td>
                                    <td className="py-2 px-4 border-b border-gray-200">₹{entry.gst?.toLocaleString() || 'N/A'}</td>
                                    <td className="py-2 px-4 border-b border-gray-200">₹{entry.profit?.toLocaleString() || 'N/A'}</td>
                                    <td className="py-2 px-4 border-b border-gray-200">
                                        <button
                                            onClick={() => viewEntryDetails(entry)}
                                            className="text-blue-600 hover:text-blue-800"
                                        >
                                            View Details
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {/* Entry Details Modal */}
            {showModal && selectedEntry && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                    <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                        <div className="p-6">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-xl font-bold">Bill Details</h3>
                                <button
                                    onClick={closeModal}
                                    className="text-gray-500 hover:text-gray-700"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                    </svg>
                                </button>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <p className="text-gray-600">Bill Number:</p>
                                    <p className="font-medium">{selectedEntry.id}</p>
                                </div>
                                <div>
                                    <p className="text-gray-600">Company:</p>
                                    <p className="font-medium">
                                        {companies.find(c => c.id === filters.company)?.name || 'N/A'}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-gray-600">Year:</p>
                                    <p className="font-medium">{filters.year}</p>
                                </div>
                                <div>
                                    <p className="text-gray-600">Month:</p>
                                    <p className="font-medium capitalize">{selectedEntry.month}</p>
                                </div>
                                <div>
                                    <p className="text-gray-600">Bill Amount:</p>
                                    <p className="font-medium">₹{selectedEntry.billAmount?.toLocaleString() || 'N/A'}</p>
                                </div>
                                <div>
                                    <p className="text-gray-600">GST:</p>
                                    <p className="font-medium">₹{selectedEntry.gst?.toLocaleString() || 'N/A'}</p>
                                </div>
                                <div>
                                    <p className="text-gray-600">Profit:</p>
                                    <p className="font-medium">₹{selectedEntry.profit?.toLocaleString() || 'N/A'}</p>
                                </div>
                                <div>
                                    <p className="text-gray-600">Created At:</p>
                                    <p className="font-medium">
                                        {selectedEntry.createdAt?.toDate ? selectedEntry.createdAt.toDate().toLocaleString() : 'N/A'}
                                    </p>
                                </div>
                                {/* Add more fields as needed */}
                            </div>

                            <div className="mt-6 flex justify-end">
                                <button
                                    onClick={closeModal}
                                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ViewEntries;