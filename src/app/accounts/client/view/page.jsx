"use client";
import { useState, useEffect } from 'react';
import { collection, doc, getDocs, getDoc } from "firebase/firestore";
import { db } from '../../../../../firebase/firebase';

export default function FetchNestedData() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const clientsName = "pmco"; // Replace with the actual client name or ID
    const billingyear = "2025"
    useEffect(() => {
        const fetchData = async () => {
            try {
                // 1. Get the parent document reference
                const parentDocRef = doc(db, 'clients', clientsName);

                // 2. Get the nested collection reference
                const nestedCollectionRef = collection(parentDocRef, billingyear);

                // 3. Get all documents from the nested collection
                const querySnapshot = await getDocs(nestedCollectionRef);

                // 4. Process the data
                const nestedData = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));

                setData(nestedData);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching nested data: ", error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <div>Loading...</div>;

    return (
        <div>
            {data.map(item => (
                <>
                    {/* <div key={item.id}>
                        {/* Render your data here */}
                    {/* <pre>{JSON.stringify(item, null, 2)}</pre>
                    </div> */}
                    <h1 className="text-2xl font-bold p-6">Loan Sheet</h1>
                    <div className="min-h-screen bg-gray-100 p-6">
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {item.map((item) => (
                                <div key={item.id} className="bg-white shadow-md rounded-xl p-4">
                                    <Field label="Month" value={item.month} />
                                    <Field label="Bill Date" value={item.billDate} />
                                    <Field label="Bill Number" value={item.billNumber} />
                                    <Field label="Department" value={item.department} />
                                    <Field label="Gross Amount" value={item.grossAmount} />
                                    <Field label="Basic Rate" value={item.basicRate} />
                                    <Field label="Per Day Amount" value={item.perDayAmount} />
                                    <Field label="Days" value={item.days} />
                                    <Field label="2.2% Aabhav" value={item.twoptwoAbhav} />
                                    <Field label="Bill Amount" value={item.billAmount} />
                                    <Field label="1% IT" value={item.oneIT} />
                                    <Field label="1% GST" value={item.oneGST} />
                                    <Field label="Depositless" value={item.depositless} />
                                    <Field label="Deposit" value={item.deposit} />
                                    <Field label="Officer Paid" value={item.officerPaid} />
                                    <Field label="Four Deposit" value={item.fourDeposit} />
                                    <Field label="Five GST" value={item.fiveGST} />
                                    <Field label="Bill Amount After GST" value={item.billAmountAfterGST} />
                                    <Field label="Toll" value={item.toll} />
                                    <Field label="Final Amount" value={item.finalAmount} />
                                    <Field label="Two IT" value={item.twoIT} />
                                    <Field label="Two GST" value={item.twoGST} />
                                    <Field label="2% Deposit" value={item.twoDeposit} />
                                    <Field label="3% Deposit" value={item.threeDeposit} />
                                    <Field label="Tender Value" value={item.tenderValue} />
                                    <Field label="Blank Entry" value={item.blankEntry} />
                                    <Field label="Recieved Date" value={item.recievedDate} />
                                    <Field label="Recieved Amount" value={item.recievedAmount} />
                                    <Field label="Vehicle Paid" value={item.vehiclePaid} />
                                    <Field label="Un Paid" value={item.unPaid} />
                                    <Field label="Ten Amount" value={item.tenAmount} />
                                    <Field label="Profit" value={item.profit} />
                                    <Field label="Standing" value={item.standing} />
                                    <Field label="Blank Entry Last Col" value={item.blankEntryLastCol} />
                                </div>
                            ))}
                        </div>
                    </div>
                </>
            ))}
        </div>
    );
}