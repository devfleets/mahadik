"use client";
//  components/AddBillForm.js
import { useState } from 'react';
import { addDoc, collection, doc, setDoc } from 'firebase/firestore';
import { db } from '../../../../../firebase/firebase';

const companies = [
    {
        id: "pmco",
        name: "Pune Municipal Corporation",
    },
    {
        id: "pcmc",
        name: "Pimpri Chinchwad Municipal Corporation",
    },
    {
        id: "pamc",
        name: "Panvel Municipal Corporation",
    },
    {
        id: "gstm",
        name: "GST Bhavan, Mumbai",
    },
    {
        id: "mswc",
        name: "Maharashtra State Warehousing Corporation",
    },
    {
        id: "mmoc",
        name: "Maha Mumbai Metro Operation Corporation Ltd",
    },
    {
        id: "imcv",
        name: "Ichalkaranji Municipal Corporation: Vehicle",
    },
    {
        id: "imcd",
        name: "Ichalkaranji Municipal Corporation: Driver",
    },
    {
        id: "kmcd",
        name: "Kolhapur Municipal Corporation: Driver",
    },
    {
        id: "bamc",
        name: "Bharatratna Atalbihari Vajpayee Medical College",
    },
    {
        id: "midc",
        name: "Maharashtra Industrial Development Corporation",
    },
    {
        id: "exls",
        name: "EXL Service",
    }

];

const currentYear = new Date().getFullYear();
const years = Array.from({ length: 27 }, (_, i) => 2000 + i);

const AddBillForm = () => {
    const [formData, setFormData] = useState({
        company: '',
        year: currentYear,
        month: '',
        billNumber: '',
        billAmount: '',
        gst: '',
        profit: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSuccess(false);

        try {
            // Reference to the client document
            const clientDocRef = doc(db, 'clients', formData.company);

            // Reference to the years collection inside the client document
            const yearsCollectionRef = collection(clientDocRef, formData.year.toString());

            let companyUpperCase = formData.company.toUpperCase();
            let currentfinancialYear = formData.year.toString().slice(-2);
            let financialYear = (currentfinancialYear - 1) + currentfinancialYear;
            // Reference to the bills collection inside the year document
            const billsCollectionRef = doc(yearsCollectionRef, companyUpperCase + formData.billNumber + financialYear);

            await setDoc(billsCollectionRef, {
                billAmount: parseFloat(formData.billAmount),
                gst: parseFloat(formData.gst),
                year: formData.year,
                month: formData.month,
                createdAt: new Date(),
                profit: formData.profit,
            });

            setSuccess(true);
            setFormData({
                company: '',
                year: currentYear,
                month: month,
                billNumber: '',
                billAmount: '',
                gst: '',
                profit: '',

            });
        } catch (error) {
            console.error("Error adding document: ", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-center">Add New Bill</h2>
            {success && (
                <div className="mb-4 p-3 bg-green-100 text-green-700 rounded">
                    Bill added successfully!
                </div>
            )}
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* First Column */}
                    <div className="space-y-4">
                        <div>
                            <label className="block text-gray-700 mb-2" htmlFor="company">
                                Company
                            </label>
                            <select
                                id="company"
                                name="company"
                                value={formData.company.id}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded"
                                required
                            >
                                <option value="">Select a company</option>
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
                                value={formData.year}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded"
                                required
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
                                value={formData.month}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded"
                                required
                            >
                                <option value="">Select month</option>
                                {Array.from({ length: 12 }, (_, i) => {
                                    const date = new Date(0, i);
                                    const label = date.toLocaleString('default', { month: 'long' });
                                    const value = label.substring(0, 3).toLowerCase();
                                    return (
                                        <option key={value} value={value}>
                                            {label}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2" htmlFor="gstRate">
                                GST Rate
                            </label>
                            <select
                                id="gstRate"
                                name="gstRate"
                                value={formData.gstRate}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded"
                                required
                            >
                                <option value="">Select GST Rate</option>
                                {[1, 2, 2.5, 3, 4, 5, 12, 18, 28].map((rate) => (
                                    <option key={rate} value={rate}>
                                        {rate}%
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2" htmlFor="itRate">
                                Income Tax Rate
                            </label>
                            <select
                                id="itRate"
                                name="itRate"
                                value={formData.itRate}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded"
                                required
                            >
                                <option value="">Select IT Rate</option>
                                {[1, 2, 2.5, 3, 4, 5, 12, 18, 28].map((rate) => (
                                    <option key={rate} value={rate}>
                                        {rate}%
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2" htmlFor="billClearedOn">
                                Bill Cleared On
                            </label>
                            <input
                                type="date"
                                id="billClearedOn"
                                name="billClearedOn"
                                value={formData.billClearedOn || new Date().toISOString().split('T')[0]} // Defaults to today
                                onChange={handleChange}
                                max={new Date().toISOString().split('T')[0]}
                                className="w-full p-2 border border-gray-300 rounded"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2" htmlFor="receivedDate">
                                Received On
                            </label>
                            <input
                                type="date"
                                id="receivedDate"
                                name="receivedDate"
                                value={formData.receivedDate || new Date().toISOString().split('T')[0]} // Defaults to today
                                onChange={handleChange}
                                max={new Date().toISOString().split('T')[0]}
                                className="w-full p-2 border border-gray-300 rounded"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2" htmlFor="depositless">
                                Depositless
                            </label>
                            <input
                                type="number"
                                id="depositless"
                                name="depositless"
                                value={formData.depositless}
                                onChange={handleChange}
                                min="0"
                                step="1"
                                className="w-full p-2 border border-gray-300 rounded"
                                required
                            />
                        </div>
                    </div>

                    {/* Second Column */}
                    <div className="space-y-4">

                        <div>
                            <label className="block text-gray-700 mb-2" htmlFor="billNumber">
                                Bill Number
                            </label>
                            <input
                                type="text"
                                id="billNumber"
                                name="billNumber"
                                value={formData.billNumber}
                                onChange={(e) => {
                                    const value = e.target.value.replace(/\D/g, '');
                                    const truncatedValue = value.slice(0, 2);
                                    handleChange({
                                        target: {
                                            name: 'billNumber',
                                            value: truncatedValue
                                        }
                                    });
                                }}
                                onBlur={(e) => {
                                    if (e.target.value.length === 1) {
                                        handleChange({
                                            target: {
                                                name: 'billNumber',
                                                value: `0${e.target.value}`
                                            }
                                        });
                                    }
                                }}
                                pattern="\d{2}"
                                title="Please enter a 2-digit number (01-99)"
                                className="w-full p-2 border border-gray-300 rounded"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2" htmlFor="grossAmount">
                                Gross Amount
                            </label>
                            <input
                                type="number"
                                id="grossAmount"
                                name="grossAmount"
                                value={formData.grossAmount}
                                onChange={handleChange}
                                min="0"
                                step="0.01"
                                className="w-full p-2 border border-gray-300 rounded"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2" htmlFor="billAmount">
                                Bill Amount
                            </label>
                            <input
                                type="number"
                                id="billAmount"
                                name="billAmount"
                                value={formData.billAmount}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded"
                                step="0.01"
                                disabled={true} // Disable this field as it will be calculated
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700 mb-2" htmlFor="vehicleUnPaid">
                                Vehicle UnPaid
                            </label>
                            <input
                                type="number"
                                id="vehicleUnPaid"
                                name="vehicleUnPaid"
                                value={formData.vehicleUnPaid}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2" htmlFor="receivedAmount">
                                Received Amount
                            </label>
                            <input
                                type="number"
                                id="receivedAmount"
                                name="receivedAmount"
                                value={formData.receivedAmount}
                                onChange={handleChange}
                                min="0"
                                step="1"
                                className="w-full p-2 border border-gray-300 rounded"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-2" htmlFor="pto">
                                Paid To Officer
                            </label>
                            <input
                                type="number"
                                id="pto"
                                name="pto"
                                value={formData.pto}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-2" htmlFor="vehiclePaid">
                                Vehicle Paid
                            </label>
                            <input
                                type="number"
                                id="vehiclePaid"
                                name="vehiclePaid"
                                value={formData.vehiclePaid}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2" htmlFor="tenderValue">
                                Tender Value
                            </label>
                            <input
                                type="number"
                                id="tenderValue"
                                name="tenderValue"
                                value={formData.tenderValue}
                                onChange={handleChange}
                                min="0"
                                step="1"
                                className="w-full p-2 border border-gray-300 rounded"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700 mb-2" htmlFor="profit">
                                Profit
                            </label>
                            <input
                                type="number"
                                id="profit"
                                name="profit"
                                value={formData.profit}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded"
                                required
                            />
                        </div>


                    </div>
                </div>




                <section>




                </section>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-2 px-4 rounded text-white ${isSubmitting ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'}`}
                >
                    {isSubmitting ? 'Submitting...' : 'Add Bill'}
                </button>
            </form>
        </div>
    );
};

export default AddBillForm;