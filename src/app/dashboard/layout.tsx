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
        <body className={"fixed"}>
        <div className={"flex"}>
            <div className={"bg-gray-800 h-screen w-64 text-black align p-3 border-r-4 border-gray-700"}>
                <NavBar/>
            </div>
            {children}
        </div>
        </body>
        </html>
    );
}
