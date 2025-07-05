"use client"
import { db } from "../../../../../firebase/firebase";
import { collection, addDoc, setDoc, doc } from "firebase/firestore"
import React, { useState, useEffect } from "react"

//create a asynchronous function named addDataToFireStore
//companyName, companyEmail and companyPhone are the params - parameters

async function addDataToFireStore(
    companyId,
    month, billDate, billNumber, department,
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
        const docRef = await setDoc(collection(db, "clients", companyId), {

            month: month,
            billDate: billDate,
            billNumber: billNumber,
            department: department,
            grossAmount: grossAmount,
            basicRate: basicRate,
            perDayAmount: perDayAmount,
            days: days,
            // Add the new fields here
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
const AddEntry = () => {

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
    // Define all the state variables for the form inputs
    const [company, setCompany] = useState("");
    const [companyId, setCompanyId] = useState("");
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
        const added = await addDataToFireStore(companyId,
            month, billDate, billNumber, department,
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
            setMonth("");
            setCompanyId("");
            setBillDate("");
            // Reset all the state variables to empty strings after successful submission
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

    return (
        <>
            <h1>Add Entries</h1>
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

                <div>
                    <label htmlFor="month">Month</label>
                    <input type="date"
                        id="month"
                        onChange={(e) => setMonth(e.target.value)}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm"
                    ></input>
                </div>
                <div>
                    <label htmlFor="billDate">Bill Date</label>
                    <input type="date"
                        id="billDate"
                        onChange={(e) => setBillDate(e.target.value)}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm"
                    ></input>
                </div>
                <div>
                    <label htmlFor="billNumber">Bill Number</label>
                    <input type="text"
                        id="billNumber"
                        onChange={(e) => setBillNumber(e.target.value)}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm"
                    ></input>
                </div>
                <div>
                    <label htmlFor="department">Department</label>
                    <select
                        value={department}
                        onChange={(e) => setDepartment(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm"
                        id="department"
                    >
                        <option value="">Select an option</option>
                        {departments.map((department, index) => (
                            <option key={`${department}-${index}`} value={department}>
                                {department}
                            </option>
                        ))}
                    </select>

                </div>
                <div>
                    <label htmlFor="grossAmount">Gross Amount</label>
                    <input type="text"
                        id="grossAmount"
                        onChange={(e) => setGrossAmount(e.target.value)}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm"
                    ></input>
                </div>
                <div>
                    <label htmlFor="basicRate">Basic Rate</label>
                    <input type="text"
                        id="basicRate"
                        onChange={(e) => setBasicRate(e.target.value)}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm"
                    ></input>
                </div>
                <div>
                    <label htmlFor="perDayAmount">Per Day Amount</label>
                    <input type="text"
                        id="perDayAmount"
                        onChange={(e) => setPerDayAmount(e.target.value)}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm"
                    ></input>
                </div>
                <div>
                    <label htmlFor="days">Days</label>
                    <input type="text"
                        id="days"
                        onChange={(e) => setDays(e.target.value)}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm"
                    ></input>
                </div>
                <div>
                    <label htmlFor="twoptwoAbhav">2% Aabhav</label>
                    <input type="text"
                        id="twoptwoAbhav"
                        onChange={(e) => setTwoptwoAbhav(e.target.value)}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm"
                    ></input>
                </div>
                <div>
                    <label htmlFor="billAmount">Bill Amount</label>
                    <input type="text"
                        id="billAmount"
                        onChange={(e) => setBillAmount(e.target.value)}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm"
                    ></input>
                </div>
                <div>
                    <label htmlFor="oneIT">1% IT</label>
                    <input type="phone"
                        id="oneIT"
                        onChange={(e) => setOneIT(e.target.value)}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm"
                    ></input>
                </div>
                <div>
                    <label htmlFor="oneGST">1% GST</label>
                    <input type="phone"
                        id="oneGST"
                        onChange={(e) => setOneGST(e.target.value)}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm"
                    ></input>
                </div>
                <div>
                    <label htmlFor="depositless">Depositless</label>
                    <input type="phone"
                        id="depositless"
                        onChange={(e) => setDepositless(e.target.value)}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm"
                    ></input>
                </div>
                <div>
                    <label htmlFor="deposit">Deposit</label>
                    <input type="phone"
                        id="deposit"
                        onChange={(e) => setDeposit(e.target.value)}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm"
                    ></input>
                </div>
                <div>
                    <label htmlFor="officerPaid">Officer Paid</label>
                    <input type="phone"
                        id="officerPaid"
                        onChange={(e) => setOfficerPaid(e.target.value)}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm"
                    ></input>
                </div>
                <div>
                    <label htmlFor="fourDeposit">Four Deposit</label>
                    <input type="phone"
                        id="fourDeposit"
                        onChange={(e) => setFourDeposit(e.target.value)}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm"
                    ></input>
                </div>
                <div>
                    <label htmlFor="fiveGST">Five GST</label>
                    <input type="phone"
                        id="fiveGST"
                        onChange={(e) => setFiveGST(e.target.value)}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm"
                    ></input>
                </div>
                <div>
                    <label htmlFor="billAmountAfterGST">Bill Amount After GST</label>
                    <input type="phone"
                        id="billAmountAfterGST"
                        onChange={(e) => setBillAmountAfterGST(e.target.value)}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm"
                    ></input>
                </div>
                <div>
                    <label htmlFor="toll">Toll</label>
                    <input type="phone"
                        id="toll"
                        onChange={(e) => setToll(e.target.value)}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm"
                    ></input>
                </div>

                <div>
                    <label htmlFor="finalAmount">Final Amount</label>
                    <input type="phone"
                        id="finalAmount"
                        onChange={(e) => setFinalAmount(e.target.value)}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm"
                    ></input>
                </div>
                <div>
                    <label htmlFor="twoIT">Two IT</label>
                    <input type="number"
                        id="twoIT"

                        onChange={(e) => setTwoIT(e.target.value)}
                        required

                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm"
                    ></input>
                </div>

                <div>
                    <label htmlFor="twoGST">Two GST</label>
                    <input type="number"
                        id="twoGST"
                        onChange={(e) => setTwoGST(e.target.value)}
                        required


                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm"
                    ></input>
                </div>
                <div>
                    <label htmlFor="twoDeposit">2% Deposit</label>
                    <input type="number"
                        id="twoDeposit"
                        onChange={(e) => setTwoDeposit(e.target.value)}

                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm"
                    ></input>
                </div>
                <div>
                    <label htmlFor="threeDeposit">3% Deposit</label>
                    <input type="number"
                        id="threeDeposit"
                        onChange={(e) => setThreeDeposit(e.target.value)}

                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm"
                    ></input>
                </div>

                <div>
                    <label htmlFor="tenderValue">Tender Value</label>
                    <input type="phone"
                        id="tenderValue"
                        onChange={(e) => setTenderValue(e.target.value)}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm"
                    ></input>
                </div>
                <div>
                    <label htmlFor="blankEntry">Blank Entry</label>
                    <input type="phone"
                        id="blankEntry"
                        onChange={(e) => setBlankEntry(e.target.value)}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm"
                    ></input>
                </div>
                <div>
                    <label htmlFor="recievedDate">Recieved Date</label>
                    <input type="date"
                        id="recievedDate"
                        onChange={(e) => setRecievedDate(e.target.value)}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm"
                    ></input>
                </div>
                <div>
                    <label htmlFor="recievedAmount">Recieved Amount</label>
                    <input type="phone"
                        id="recievedAmount"
                        onChange={(e) => setRecievedAmount(e.target.value)}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm"
                    ></input>
                </div>
                <div>
                    <label htmlFor="vehiclePaid">Recieved Amount</label>
                    <input type="phone"
                        id="vehiclePaid"
                        onChange={(e) => setVehiclePaid(e.target.value)}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm"
                    ></input>
                </div>
                <div>
                    <label htmlFor="unPaid">Un Paid</label>
                    <input type="phone"
                        id="unPaid"
                        onChange={(e) => setUnPaid(e.target.value)}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm"
                    ></input>
                </div>
                <div>
                    <label htmlFor="tenAmount">Ten Amount</label>
                    <input type="phone"
                        id="tenAmount"
                        onChange={(e) => setTenAmount(e.target.value)}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm"
                    ></input>
                </div>
                <div>
                    <label htmlFor="profit">Profit</label>
                    <input type="phone"
                        id="profit"
                        onChange={(e) => setProfit(e.target.value)}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm"
                    ></input>
                </div>
                <div>
                    <label htmlFor="standing">Standing</label>
                    <input type="phone"
                        id="standing"
                        onChange={(e) => setStanding(e.target.value)}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm"
                    ></input>
                </div>
                <div>
                    <label htmlFor="blankEntryLastCol">Blank Entry Last Col</label>
                    <input type="phone"
                        id="blankEntryLastCol"
                        onChange={(e) => setBlankEntryLastCol(e.target.value)}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm"
                    ></input>
                </div>

                <div>
                    <button type="submit" className="bg-blue-500 hover:bg-blue-600">Submit</button>
                </div>
            </form>
        </>
    )
}
export default AddEntry;