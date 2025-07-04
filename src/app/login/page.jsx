"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, firestore } from "../../../firebase/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import Link from "next/link";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const router = useRouter();

    const handleLogin = async (event) => {
        event.preventDefault();
        setError(null);

        try {
            const userCredential = await signInWithEmailAndPassword(
                auth,
                email,
                password
            );
            const user = userCredential.user;

            if (user.emailVerified) {
                //Retrieve user data from local storage
                const registrationData = localStorage.getItem("registrationData");
                const {
                    firstName = "",
                    lastName = "",
                    gender = "",
                } = registrationData ? JSON.parse(registrationData) : {};

                //Check if user data exists in Firestore
                const userDoc = await getDoc(doc(firestore, "users", user.uid));
                if (!userDoc.exists()) {
                    //Save user data to Firestore after email verification
                    await setDoc(doc(firestore, "users", user.uid), {
                        firstName,
                        lastName,
                        gender,
                        email: user.email,
                    });
                }
                router.push("/dashboard")
            } else {
                setError("Please verify your email before logging in.");
            }
        }
        catch (error) {
            if (error instanceof Error) {
                setError(error.message);
            } else {
                setError("An unknown error occurred");
            }
        }
    };
    return (
        <div>
            <h2>DevFleets</h2>
            <div className="p-5 border border-gray-300 rounded">
                <form onSubmit={handleLogin}>
                    <div>
                        <div className="mb-15">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}
                                required></input>
                        </div>

                        <div className="mb-15">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}
                                required></input>

                        </div>
                    </div>
                    {error && <p className="text-red-500 text-sm">{error}
                    </p>}
                  
                    <button type="submit">
                        Sign In
                    </button>
                </form>
                <p>Don&apos;t, have an account?{""}
                    <Link href="/register">
                        Register here
                    </Link>
                </p>
            </div>
        </div>
    )
}
export default Login;