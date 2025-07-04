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
                <div key={item.id}>
                    {/* Render your data here */}
                    <pre>{JSON.stringify(item, null, 2)}</pre>
                </div>
            ))}
        </div>
    );
}