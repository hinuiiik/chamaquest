import type { Metadata } from "next";
import NavBar from "@/app/ui/dashboard/navBar";


export const metadata: Metadata = {
    title: "ChamaQuest",
    description: "",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
<<<<<<< HEAD
        <body>
        <div className={"overflow-hidden flex"}>
        <div className={"bg-white h-screen w-64 text-black align p-3 border-r-4 border-pink-500"}>
            <NavBar/>
        </div>
=======
        <body className={"fixed"}>
        <div className={"flex"}>
            <div className={"bg-gray-800 h-screen w-64 text-black align p-3 border-r-4 border-gray-700"}>
                <NavBar/>
            </div>
>>>>>>> 7ca36e0d18f292019fe39abf8132dbd829e0a57e
            {children}
        </div>
        </body>
        </html>
    );
}
