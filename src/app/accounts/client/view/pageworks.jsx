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
                           
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default ClientBills;
