'use client';

import { useEffect, useState } from "react";
import NavElement from "@/app/ui/dashboard/navElement";

export default function NavBar() {
    const [chamaNames, setChamaNames] = useState<[number, string][]>([]); // 2D array

    useEffect(() => {
        async function fetchUserChamas() {
            try {
                const response = await fetch('/api/users/me/chamas');
                if (!response.ok) {
                    throw new Error("Failed to fetch chamas");
                }
                const data = await response.json();

                if (Array.isArray(data) && data.length > 0) {
                    setChamaNames(data); // Data is already in correct format
                } else {
                    setChamaNames([]); // Set empty array if no data
                }
            } catch (error) {
                console.error("Error fetching chama names:", error);
                setChamaNames([]); // Handle errors properly
            }
        }
        fetchUserChamas();
    }, []);

    const navItems = chamaNames.map(([id, name]) => (
        <NavElement key={id} id={id} name={name} />
    ));

    return (
        <div className="flex flex-col">
            {navItems.length > 0 ? navItems : <p>Loading...</p>}
        </div>
    );
}
