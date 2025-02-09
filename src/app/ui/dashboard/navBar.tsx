<<<<<<< HEAD
/*import NavElement from "@/app/ui/dashboard/navElement";
import { sql } from '@vercel/postgres';
=======
'use client';

import { useEffect, useState } from "react";
import NavElement from "@/app/ui/dashboard/navElement";
>>>>>>> 7ca36e0d18f292019fe39abf8132dbd829e0a57e

export default function NavBar() {
    const [chamaNames, setChamaNames] = useState<string[]>([]);

    useEffect(() => {
        async function fetchUserChamas() {
            try {
                const response = await fetch('/api/users/me/chamas');
                if (!response.ok) {
                    throw new Error("Failed to fetch chamas");
                }
                const data = await response.json();

                if (data.length > 0 && data[0].chamas) {
                    setChamaNames(data[0].chamas);
                } else {
                    setChamaNames([]);
                }
            } catch (error) {
                console.error("Error fetching chama names:", error);
            }
        }
        fetchUserChamas();
    }, []);

    const navItems = chamaNames.map((name, index) => (
        <NavElement key={index} id={index} name={name} />
    ));

    return (
        <div className="flex flex-col">
            {navItems.length > 0 ? navItems : <p>Loading...</p>}
        </div>
    );
<<<<<<< HEAD
}*/
=======
}
>>>>>>> 7ca36e0d18f292019fe39abf8132dbd829e0a57e
