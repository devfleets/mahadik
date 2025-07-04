"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { auth } from "../../../firebase/firebase";

const RegisterPage = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [gender, setGender] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [error, setError] = useState(null);
    const [message, setMessage] = useState(null);
    const router = useRouter();

    const handleRegister = async (event) => {
        event.preventDefault();
        setError(null);
        setMessage(null);

        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }
        try {
            const userCredential = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );
            const user = userCredential.user;

            await sendEmailVerification(user);

            //Temporarily store user data in local storage
            localStorage.setItem(
                "registrationData",
                JSON.stringify({
                    firstName,
                    lastName,
                    gender,
                    email,
                })
            );
            setMessage(
                "Registration successful. Please check your email for verification."
            );

            //clear form fields
            setFirstName("");
            setLastName("");
            setGender("");
            setEmail("");
            setPassword("");
            setConfirmPassword("");
        }
        catch (error) {
            if (error instanceof Error) {
                setError(error.message);
            }
            else {
                setError("An unknown error occurred.");
            }
        }
    };
    return (
        <div>
            <h2>Register</h2>
            <div>
                <form onSubmit={handleRegister}>
                    <div>
                        <div>
                            <label htmlFor="firstName">First Name</label>
                            <input type="text" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)}
                                required></input>
                        </div>
                        <div>
                            <label htmlFor="lastName">Last Name</label>
                            <input type="text" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)}
                                required></input>
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}
                                required></input>
                        </div>
                        <div>
                            <label htmlFor="gender">Gender</label>
                            <select
                                id="gender"
                                value={gender}
                                onChange={(e) => setGender(e.target.value)}
                                required>
                                <option value="">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}
                                required></input>

                        </div>
                        <div>
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input type="password" id="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}
                                required></input>

                        </div>

                    </div>
                    {error && <p>{error}
                    </p>}
                    {message && <p>{message}</p>}
                    <button type="submit">
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    );
}

export default RegisterPage;