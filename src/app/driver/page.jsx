"use client"

import { addDoc, doc, setDoc, collection } from "firebase/firestore"
import { db } from "../../../firebase/firebase"
import React, { useState, useEffect } from "react"

// let licenseNumber = "12345678910121";
// let state = "MH";
// let customDriverId = state + licenseNumber;

async function addDataToFireStore(
    licenseNumber,
    fName, mName, lName,
    phoneNumber, email, address,
    dateofBirth, licenseExpiry, aadharNumber,
    vehicleAssigned, vehicleType, vehicleNumber,
    joiningDate, drivingExperience, bloodGroup,
    emergencyContactName, emergencyContactNumber,
    profilePhotoURL, isActive, createdAt,
    remarks,
) {
    try {
        const docRef = await setDoc(doc(collection(db, "drivers"), licenseNumber), {
            licenseNumber: licenseNumber,
            fName: fName,
            mName: mName,
            lName: lName,
            phoneNumber: phoneNumber,
            email: email,
            address: address,
            dateofBirth: dateofBirth,
            licenseExpiry: licenseExpiry,
            aadharNumber: aadharNumber,
            vehicleAssigned: vehicleAssigned,
            vehicleType: vehicleType,
            vehicleNumber: vehicleNumber,
            joiningDate: joiningDate,
            drivingExperience: drivingExperience,
            bloodGroup: bloodGroup,
            emergencyContactName: emergencyContactName,
            emergencyContactNumber: emergencyContactNumber,
            profilePhotoURL: profilePhotoURL,
            isActive: isActive,
            createdAt: createdAt,
            remarks: remarks,

        });
        console.log("Document written with ID: ", licenseNumber);
        return true;
    }
    catch (error) {
        console.error("Error adding document", error)
        return false;
    }
}
const Driver = () => {
    const [licenseNumber, setLicenseNumber] = useState("");
    //for document it
    const [fName, setFName] = useState("");
    const [mName, setMName] = useState("");
    const [lName, setLName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [dateofBirth, setDateofBirth] = useState("");
    const [licenseExpiry, setLicenseExpiry] = useState("");
    const [aadharNumber, setAadharNumber] = useState("");
    const [vehicleAssigned, setVehicleAssigned] = useState("");
    const [vehicleType, setVehicleType] = useState("");
    const [vehicleNumber, setVehicleNumber] = useState("");
    const [joiningDate, setJoiningDate] = useState(0);
    const [drivingExperience, setDrivingExperience] = useState("");
    const [bloodGroup, setBloodGroup] = useState("");
    const [emergencyContactName, setEmergencyContactName] = useState("");
    const [emergencyContactNumber, setEmergencyContactNumber] = useState("");
    const [profilePhotoURL, setProfilePhotoURL] = useState("");
    const [isActive, setIsActive] = useState("");
    const [createdAt, setCreatedAt] = useState("");
    const [remarks, setRemarks] = useState("");

    const handleSubmittedData = async (e) => {
        e.preventDefault();
        const added = await addDataToFireStore(
            licenseNumber,
            fName, mName, lName,
            phoneNumber, email, address,
            dateofBirth, licenseExpiry, aadharNumber,
            vehicleAssigned, vehicleType, vehicleNumber,
            joiningDate, drivingExperience, bloodGroup,
            emergencyContactName, emergencyContactNumber,
            profilePhotoURL, isActive, createdAt,
            remarks,);
        if (added) {
            setLicenseNumber("")
            setFName("");
            setMName("");
            setLName("");
            setPhoneNumber("");
            setEmail("");
            setAddress("");
            setDateofBirth("");
            setLicenseExpiry("");
            setAadharNumber("");
            setVehicleAssigned("");
            setVehicleType("");
            setVehicleNumber("");
            setJoiningDate("");
            setDrivingExperience("");
            setBloodGroup("");
            setEmergencyContactName("");
            setEmergencyContactNumber("");
            setProfilePhotoURL("");
            setIsActive("");
            setCreatedAt("");
            setRemarks("");
            alert("New Driver added.");
        }
    };

    return (
        <>
                    <label htmlFor="licenseNumber">Enter your driving license number</label>
                    <input
                        type="text"
                        id="licenseNumber"
                        placeholder="MH129876543211234"
                        onChange={(e) => setLicenseNumber(e.target.value)}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm"
                    />
                
            <h1>Add Driver</h1>
            <form onSubmit={handleSubmittedData}>
                
                <div>
                    <label htmlFor="fName">First Name</label>
                    <input type="date"
                        id="fName"
                        onChange={(e) => setFName(e.target.value)}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm"
                    ></input>
                </div>
                <div>
                    <label htmlFor="mName">Middle Name</label>
                    <input type="text"
                        id="mName"
                        onChange={(e) => setMName(e.target.value)}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm"
                    ></input>
                </div>
                <div>
                    <label htmlFor="lName">Last Name</label>
                    <input type="text"
                        id="lName"
                        onChange={(e) => setLName(e.target.value)}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm"
                    ></input>
                </div>
                <div>
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <input type="text"
                        id="phoneNumber"
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm"
                    ></input>
                </div>
                <div>
                    <label htmlFor="email">Email Id</label>
                    <input type="text"
                        id="email"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm"
                    ></input>
                </div>
                <div>
                    <label htmlFor="address">Address</label>
                    <input type="phone"
                        id="address"
                        onChange={(e) => setAddress(e.target.value)}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm"
                    ></input>
                </div>
                <div>
                    <label htmlFor="dateofBirth">Date of Birth</label>
                    <input type="phone"
                        id="dateofBirth"
                        onChange={(e) => setDateofBirth(e.target.value)}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm"
                    ></input>
                </div>
                <div>
                    <label htmlFor="licenseExpiry">License Expiry</label>
                    <input type="phone"
                        id="licenseExpiry"
                        onChange={(e) => setLicenseExpiry(e.target.value)}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm"
                    ></input>
                </div>

                <div>
                    <label htmlFor="aadharNumber">Aadhar Number</label>
                    <input type="phone"
                        id="aadharNumber"
                        onChange={(e) => setAadharNumber(e.target.value)}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm"
                    ></input>
                </div>
                <div>
                    <label htmlFor="vehicleAssigned">Vehicle Assigned</label>
                    <input type="number"
                        id="vehicleAssigned"

                        onChange={(e) => setVehicleAssigned(e.target.value)}
                        required

                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm"
                    ></input>
                </div>

                <div>
                    <label htmlFor="vehicleType">Vehicle Type</label>
                    <input type="number"
                        id="vehicleType"
                        onChange={(e) => setVehicleType(e.target.value)}
                        required


                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm"
                    ></input>
                </div>
                <div>
                    <label htmlFor="vehicleNumber">Vehicle Number</label>
                    <input type="number"
                        id="vehicleNumber"
                        onChange={(e) => setVehicleNumber(e.target.value)}

                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm"
                    ></input>
                </div>

                <div>
                    <label htmlFor="joiningDate">Joining Date</label>
                    <input type="phone"
                        id="joiningDate"
                        onChange={(e) => setJoiningDate(e.target.value)}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm"
                    ></input>
                </div>
                <div>
                    <label htmlFor="drivingExperience">Driving Experience</label>
                    <input type="phone"
                        id="drivingExperience"
                        onChange={(e) => setDrivingExperience(e.target.value)}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm"
                    ></input>
                </div>
                <div>
                    <label htmlFor="bloodGroup">Blood Group</label>
                    <input type="date"
                        id="bloodGroup"
                        onChange={(e) => setBloodGroup(e.target.value)}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm"
                    ></input>
                </div>
                <div>
                    <label htmlFor="emergencyContactName">Emergency Contact Name</label>
                    <input type="phone"
                        id="emergencyContactName"
                        onChange={(e) => setEmergencyContactName(e.target.value)}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm"
                    ></input>
                </div>
                <div>
                    <label htmlFor="emergencyContactNumber">Emergency Contact Number</label>
                    <input type="phone"
                        id="emergencyContactNumber"
                        onChange={(e) => setEmergencyContactNumber(e.target.value)}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm"
                    ></input>
                </div>
                <div>
                    <label htmlFor="profilePhotoURL">Profile Photo URL</label>
                    <input type="phone"
                        id="profilePhotoURL"
                        onChange={(e) => setProfilePhotoURL(e.target.value)}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm"
                    ></input>
                </div>
                <div>
                    <label htmlFor="isActive">isActive</label>
                    <input type="phone"
                        id="isActive"
                        onChange={(e) => setIsActive(e.target.value)}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm"
                    ></input>
                </div>
                <div>
                    <label htmlFor="createdAt">setCreatedAt</label>
                    <input type="phone"
                        id="createdAt"
                        onChange={(e) => setCreatedAt(e.target.value)}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm"
                    ></input>
                </div>
                <div>
                    <label htmlFor="remarks">Remarks</label>
                    <input type="phone"
                        id="remarks"
                        onChange={(e) => setRemarks(e.target.value)}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm"
                    ></input>
                </div>

                <div>
                    <button type="submit" className="bg-blue-500 hover:bg-blue-600">Add a New Driver</button>
                </div>
            </form>
        </>
    )
}
export default Driver;