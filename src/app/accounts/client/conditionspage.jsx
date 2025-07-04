"use client"
import { db } from "../../../../firebase/firebase";
import { collection, addDoc } from "firebase/firestore"
import React, { useState, useEffect } from "react"

async function addDataToFireStore(
    company, month, billDate, billNumber, department,
    grossAmount, basicRate, perDayAmount, days,
    twoptwoAbhav, billAmount, fiveGST,
    billAmountAfterGST, toll, finalAmount,
    oneIT, oneGST,
    twoIT, twoGST, depositless, deposit, officerPaid, twoDeposit, threeDeposit, fourDeposit,
    tenderValue, blankEntry, recievedDate,
    recievedAmount, vehiclePaid, unPaid,
    tenAmount, profit, standing,
    blankEntryLastCol
) {
    try {
        const docRef = await addDoc(collection(db, "clients"), {
            company: company,
            month: month,
            billDate: billDate,
            billNumber: billNumber,
            department: department,
            grossAmount: grossAmount,
            basicRate: basicRate,
            perDayAmount: perDayAmount,
            days: days,
            oneIT: oneIT,
            oneGST: oneGST,
            depositless: depositless,
            deposit: deposit,
            officerPaid: officerPaid,
            fourDeposit: fourDeposit,
            twoptwoAbhav: twoptwoAbhav,
            billAmount: billAmount,
            fiveGST: fiveGST,
            billAmountAfterGST: billAmountAfterGST,
            toll: toll,
            finalAmount: finalAmount,
            twoIT: twoIT,
            twoGST: twoGST,
            twoDeposit: twoDeposit,
            threeDeposit: threeDeposit,
            tenderValue: tenderValue,
            blankEntry: blankEntry,
            recievedDate: recievedDate,
            recievedAmount: recievedAmount,
            vehiclePaid: vehiclePaid,
            unPaid: unPaid,
            tenAmount: tenAmount,
            profit: profit,
            standing: standing,
            blankEntryLastCol: blankEntryLastCol,
        });
        console.log("Document written with ID: ", docRef.id);
        return true;
    }
    catch (error) {
        console.error("Error adding document", error)
        return false;
    }
}

const Client = () => {
    const companies = [
        "Pune Municipal Corporation: Office", "Pimpri Chinchwad Municipal Corporation", "Panvel Municipal Corporation", "GST Bhavan, Mumbai",
        "Maharashtra State Warehousing Corporation", "Maha Mumbai Metro Operation Corporation Ltd", "Ichalkaranji Municipal Corporation: Vehicle", "Ichalkaranji Municipal Corporation: Driver",
        "Kolhapur Municipal Corporation: Driver", "Bharatratna Atalbihari Vajpayee Medical College", "Maharashtra Industrial Development Corporation", "EXL Service"
    ];
    const departments = [
        'Tax',
        'Polio',
        'On Call',
        'Regular',
        'River Marshal',
        'Snehal Vehicle',
        'Divyang Vibhag',
        'Disaster Management',       
        'Greenmarshal Scorpio'
      ];

    const [company, setCompany] = useState("");
    const [month, setMonth] = useState("");
    const [billDate, setBillDate] = useState("");
    const [billNumber, setBillNumber] = useState("");
    const [grossAmount, setGrossAmount] = useState("");
    const [department, setDepartment] = useState("");
    const [basicRate, setBasicRate] = useState("");
    const [perDayAmount, setPerDayAmount] = useState("");
    const [days, setDays] = useState("");
    const [twoptwoAbhav, setTwoptwoAbhav] = useState("");
    const [oneIT, setOneIT] = useState("");
    const [oneGST, setOneGST] = useState("");
    const [depositless, setDepositless] = useState("");
    const [deposit, setDeposit] = useState("");
    const [officerPaid, setOfficerPaid] = useState("");
    const [fourDeposit, setFourDeposit] = useState("");
    const [billAmount, setBillAmount] = useState("");
    const [fiveGST, setFiveGST] = useState("");
    const [billAmountAfterGST, setBillAmountAfterGST] = useState("");
    const [toll, setToll] = useState("");
    const [finalAmount, setFinalAmount] = useState("");
    const [twoIT, setTwoIT] = useState("");
    const [twoGST, setTwoGST] = useState("");
    const [twoDeposit, setTwoDeposit] = useState("");
    const [threeDeposit, setThreeDeposit] = useState("");
    const [tenderValue, setTenderValue] = useState(0);
    const [blankEntry, setBlankEntry] = useState("");
    const [recievedDate, setRecievedDate] = useState("");
    const [recievedAmount, setRecievedAmount] = useState("");
    const [vehiclePaid, setVehiclePaid] = useState("");
    const [unPaid, setUnPaid] = useState("");
    const [tenAmount, setTenAmount] = useState("");
    const [profit, setProfit] = useState("");
    const [standing, setStanding] = useState("");
    const [blankEntryLastCol, setBlankEntryLastCol] = useState("");

    const handleSubmittedData = async (e) => {
        e.preventDefault();
        const added = await addDataToFireStore(
            company, month, billDate, billNumber, department,
            grossAmount, basicRate, perDayAmount, days,
            twoptwoAbhav, billAmount, fiveGST,
            billAmountAfterGST, toll, finalAmount,
            oneIT, oneGST,
            twoIT, twoGST, depositless, deposit, officerPaid, twoDeposit, threeDeposit, fourDeposit,
            tenderValue, blankEntry, recievedDate,
            recievedAmount, vehiclePaid, unPaid,
            tenAmount, profit, standing,
            blankEntryLastCol
        );
        if (added) {
            setCompany("");
            setMonth("");
            setBillDate("");
            setBillNumber("");
            setDepartment("");
            setGrossAmount("");
            setBasicRate("");
            setPerDayAmount("");
            setDays("");
            setOneIT("");
            setOneGST("");
            setDepositless("");
            setDeposit("");
            setOfficerPaid("");
            setFourDeposit("");
            setTwoptwoAbhav("");
            setBillAmount("");
            setFiveGST("");
            setBillAmountAfterGST("");
            setToll("");
            setFinalAmount("");
            setTwoIT("");
            setTwoGST("");
            setTwoDeposit("");
            setThreeDeposit("");
            setTenderValue("");
            setBlankEntry("");
            setRecievedDate("");
            setRecievedAmount("");
            setVehiclePaid("");
            setUnPaid("");
            setTenAmount("");
            setProfit("");
            setStanding("");
            setBlankEntryLastCol("");
            alert("Data added to firestore DB!!");
        }
    };

    // Function to determine if field should be visible for Company 1
    const shouldShowField = (fieldName) => {
        if (company === "Company 1") {
            const company1Fields = [
                'month', 'department', 'billNumber', 'grossAmount',
                'billAmount', 'finalAmount', 'oneIT', 'oneGST',
                'tenderValue', 'recievedDate', 'recievedAmount',
                'vehiclePaid', 'unPaid', 'deposit', 'officerPaid',
                'profit', 'standing'
            ];
            return company1Fields.includes(fieldName);
        }
        // Add conditions for other companies here
        return true; // Show all fields by default for other companies
    };

    return (
        <>
            <h1 className="text-2xl font-bold mb-6">Add Data to Firestore Database</h1>
            <form onSubmit={handleSubmittedData} className="space-y-4">
                {/* Company Selector */}
                <div>
                    <label htmlFor="company" className="block mb-2 font-medium">Select Company</label>
                    <select
                        id="company"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm"
                    >
                        <option value="">Select a company</option>
                        {companies.map((comp, index) => (
                            <option key={index} value={comp}>{comp}</option>
                        ))}
                    </select>
                </div>

                {/* Common Fields */}
                {shouldShowField('month') && (
                    <div>
                        <label htmlFor="month">Month</label>
                        <input type="date"
                            id="month"
                            value={month}
                            onChange={(e) => setMonth(e.target.value)}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm"
                        />
                    </div>
                )}

                {shouldShowField('billDate') && (
                    <div>
                        <label htmlFor="billDate">Bill Date</label>
                        <input type="date"
                            id="billDate"
                            value={billDate}
                            onChange={(e) => setBillDate(e.target.value)}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm"
                        />
                    </div>
                )}

                {shouldShowField('billNumber') && (
                    <div>
                        <label htmlFor="billNumber">Bill Number</label>
                        <input type="text"
                            id="billNumber"
                            value={billNumber}
                            onChange={(e) => setBillNumber(e.target.value)}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm"
                        />
                    </div>
                )}

                {shouldShowField('department') && (
                    <div>
                        <label htmlFor="department">Department</label>
                        <input type="text"
                            id="department"
                            value={department}
                            onChange={(e) => setDepartment(e.target.value)}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm"
                        />
                    </div>
                )}

                {shouldShowField('grossAmount') && (
                    <div>
                        <label htmlFor="grossAmount">Gross Amount</label>
                        <input type="text"
                            id="grossAmount"
                            value={grossAmount}
                            onChange={(e) => setGrossAmount(e.target.value)}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm"
                        />
                    </div>
                )}

                {/* Conditional Fields for Company 1 */}
                {company === "Company 1" && (
                    <>
                        {shouldShowField('billAmount') && (
                            <div>
                                <label htmlFor="billAmount">Bill Amount</label>
                                <input type="text"
                                    id="billAmount"
                                    value={billAmount}
                                    onChange={(e) => setBillAmount(e.target.value)}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm"
                                />
                            </div>
                        )}

                        {shouldShowField('finalAmount') && (
                            <div>
                                <label htmlFor="finalAmount">Final Amount</label>
                                <input type="text"
                                    id="finalAmount"
                                    value={finalAmount}
                                    onChange={(e) => setFinalAmount(e.target.value)}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm"
                                />
                            </div>
                        )}

                        {shouldShowField('oneIT') && (
                            <div>
                                <label htmlFor="oneIT">1% IT</label>
                                <input type="text"
                                    id="oneIT"
                                    value={oneIT}
                                    onChange={(e) => setOneIT(e.target.value)}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm"
                                />
                            </div>
                        )}

                        {shouldShowField('oneGST') && (
                            <div>
                                <label htmlFor="oneGST">1% GST</label>
                                <input type="text"
                                    id="oneGST"
                                    value={oneGST}
                                    onChange={(e) => setOneGST(e.target.value)}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm"
                                />
                            </div>
                        )}

                        {shouldShowField('tenderValue') && (
                            <div>
                                <label htmlFor="tenderValue">Tender Value</label>
                                <input type="text"
                                    id="tenderValue"
                                    value={tenderValue}
                                    onChange={(e) => setTenderValue(e.target.value)}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm"
                                />
                            </div>
                        )}

                        {shouldShowField('recievedDate') && (
                            <div>
                                <label htmlFor="recievedDate">Received Date</label>
                                <input type="date"
                                    id="recievedDate"
                                    value={recievedDate}
                                    onChange={(e) => setRecievedDate(e.target.value)}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm"
                                />
                            </div>
                        )}

                        {shouldShowField('recievedAmount') && (
                            <div>
                                <label htmlFor="recievedAmount">Received Amount</label>
                                <input type="text"
                                    id="recievedAmount"
                                    value={recievedAmount}
                                    onChange={(e) => setRecievedAmount(e.target.value)}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm"
                                />
                            </div>
                        )}

                        {shouldShowField('vehiclePaid') && (
                            <div>
                                <label htmlFor="vehiclePaid">Vehicle Paid Amount</label>
                                <input type="text"
                                    id="vehiclePaid"
                                    value={vehiclePaid}
                                    onChange={(e) => setVehiclePaid(e.target.value)}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm"
                                />
                            </div>
                        )}

                        {shouldShowField('unPaid') && (
                            <div>
                                <label htmlFor="unPaid">Unpaid Amount</label>
                                <input type="text"
                                    id="unPaid"
                                    value={unPaid}
                                    onChange={(e) => setUnPaid(e.target.value)}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm"
                                />
                            </div>
                        )}

                        {shouldShowField('deposit') && (
                            <div>
                                <label htmlFor="deposit">Deposit</label>
                                <input type="text"
                                    id="deposit"
                                    value={deposit}
                                    onChange={(e) => setDeposit(e.target.value)}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm"
                                />
                            </div>
                        )}

                        {shouldShowField('officerPaid') && (
                            <div>
                                <label htmlFor="officerPaid">Officer Paid</label>
                                <input type="text"
                                    id="officerPaid"
                                    value={officerPaid}
                                    onChange={(e) => setOfficerPaid(e.target.value)}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm"
                                />
                            </div>
                        )}

                        {shouldShowField('profit') && (
                            <div>
                                <label htmlFor="profit">Profit</label>
                                <input type="text"
                                    id="profit"
                                    value={profit}
                                    onChange={(e) => setProfit(e.target.value)}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm"
                                />
                            </div>
                        )}

                        {shouldShowField('standing') && (
                            <div>
                                <label htmlFor="standing">Standing</label>
                                <input type="text"
                                    id="standing"
                                    value={standing}
                                    onChange={(e) => setStanding(e.target.value)}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm"
                                />
                            </div>
                        )}
                    </>
                )}

                {/* Add similar conditional blocks for other companies here */}

                <div>
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-xl transition-all duration-200"
                    >
                        Add Client Data
                    </button>
                </div>
            </form>
        </>
    )
}

export default Client;