"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { reauthenticateWithCredential, EmailAuthProvider, updatePassword } from "firebase/auth";
import { auth } from "../../../firebase/firebase";


const ChangePass = () => {
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmNewPassword, setNewConfirmPassword] = useState("");
    const [error, setError] = useState(null);
    const [message, setMessage] = useState(null);
    const router = useRouter();

    const handleChangePassword = async (event) => {
        event.preventDefault();
        setError(null);
        setMessage(null);

        if (newPassword !== confirmNewPassword) {
            setError("New password do not match");
            return;
        }
        try {
            const user = auth.currentUser;
            if (user && user.email) {
                const credential = EmailAuthProvider.credential(
                    user.email,
                    currentPassword
                );
                await reauthenticateWithCredential(user, credential);
                await updatePassword(user, newPassword);
                setMessage("Password changed successfully!");
                setCurrentPassword("");
                setNewPassword("");
                setNewConfirmPassword("");
            }
            else {
                setError("No user is currently signed in.")
            }
        } catch (error) {
            if (error instanceof Error) {
                setError(error.message);
            } else {
                setError("An unknown error occurred.");
            }
        }
    };
    return (
        <div>
            <div>
                <h2>Change Password</h2>
            <div className="p-5 border border-gray-300 rounded">
                <form onSubmit={handleChangePassword}>
                    <div>
                        <div className="mb-15">
                            <label htmlFor="currentPassword">Current Password</label>
                            <input type="password" id="currentPassword" value={currentPassword}
                                onChange={(e) => setCurrentPassword(e.target.value)}
                                required></input>
                        </div>

                        <div className="mb-15">
                            <label htmlFor="newPassword">New Password</label>
                            <input type="password" id="newPassword" value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                required></input>

                        </div>

                        <div className="mb-15">
                            <label htmlFor="newConfirmPassword">Confirm New Password</label>
                            <input type="password" id="newConfirmPassword" value={confirmNewPassword}
                                onChange={(e) => setNewConfirmPassword(e.target.value)}
                                required></input>

                        </div>
                    </div>
                    {error && <p className="text-red-500 text-sm">{error}
                        {message && <p>{message}</p>}
                    </p>}

                    <button type="submit">
                        Change Password
                    </button>
                </form>
            </div>
            </div>
        </div>
    )
}
export default ChangePass;