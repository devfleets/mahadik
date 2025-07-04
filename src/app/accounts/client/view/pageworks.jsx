"use client";

import React, { useEffect, useState } from "react";
import { db } from "../../../firebase/firebase";
import { getDocs, collection } from "firebase/firestore";

// Firestore fetch function
const fetchDataFromFirestore = async () => {
    try {
        const querySnapshot = await getDocs(collection(db, "users"));
        return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
        console.error("Error fetching users:", error);
        return [];
    }
};
const newhlo = "1";
// Label + Value component
const Field = ({ label, value }) => (
    <div className="mb-2">
        <label className="text-sm font-medium text-gray-700">{label}</label>
        <p className="text-gray-600">{value || "N/A"}</p>
    </div>
);
////hfh


// Main ClientBills component
const ClientBills = () => {
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchDataFromFirestore();
            setUserData(data);
        };
        fetchData();
    }, []);

    return (
        <>
            <h1 className="text-2xl font-bold p-6">Loan Sheet</h1>
            <div className="min-h-screen bg-gray-100 p-6">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {userData.map((user) => (
                        <div key={user.id} className="bg-white shadow-md rounded-xl p-4">
                            <Field label="EMI Date" value={user.emiDate} />
                            <Field label="E.M.I Details" value={user.emiDetails} />
                            <Field label="Company Name" value={user.companyName} />
                            <Field label="Company Vehicle Type" value={user.companyVehicleType} />
                            <Field label="E.M.I Start Date" value={user.emiStartDate} />
                            <Field label="Make Model" value={user.makeModel} />
                            <Field label="Total EMI Amount" value={user.totalEMIAmount} />
                            <Field label="Bank Name" value={user.bankName} />
                            <Field label="Loan Account Number" value={user.loanAccountNumber} />
                            <Field label="Loan Tenure in EMI" value={user.loanTenure} />
                            <Field label="Registration Number" value={user.registrationNumber} />
                            <Field label="Paid E.M.I" value={user.paidEMI} />
                            <Field label="Balance E.M.I" value={user.balEMI} />
                            <Field label="E.M.I Account" value={user.emiAccount} />
                            <Field label="Loan Close Date" value={user.loanCloseDate} />
                            <Field label="Tenure Five Years" value={user.tenureFiveYears} />
                            <Field label="Tenure Three Years" value={user.tenureThreeYears} />
                            <Field label="Foreclose In Year" value={user.forecloseInYear} />
                            <Field label="Asset Value" value={user.assetValue} />
                            <Field label="Gross Asset Value" value={user.grossAssetValue} />
                            <Field label="Loan Interest" value={user.loanInt} />
                            <Field label="Downpayment" value={user.downpayment} />
                            <Field label="Chassis Number" value={user.chassisNumber} />
                            <Field label="Engine Number" value={user.engineNumber} />
                            <Field label="Owner Name" value={user.ownerName} />
                            <Field label="Purchased From" value={user.purchasedFrom} />
                            <Field label="G.P.S Number" value={user.gpsNumber} />
                            <Field label="Interest Rate" value={user.interestRate} />
                            <Field label="Insurance" value={user.insurance} />
                            <Field label="Tax" value={user.tax} />
                            <Field label="P.U.C" value={user.puc} />
                            <Field label="Passing" value={user.passing} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default ClientBills;
