import NavBar from "@/app/ui/dashboard/navBar";

export default function Home() {
    return (
        <>
            {/*Webpage Container*/}
            <div className={"flex overflow-hidden"}>
        {/*        Navbar component*/}
        <div className={"bg-white h-screen w-1/6 text-black align p-3"}>
            <NavBar/>
        </div>
                <div>
                    <div className={"text-center h-10"}>
                        <h1>Title</h1>
                    </div>
            {/*  Webpage Container  */}
                    <div>
                        <div className={"flex bg-yellow-50 w-screen"}>
                        {/*Info Container*/}
                        <div className={"flex flex-col justify-center m-4"}>
                            {/*Calendar component*/}
                            <div className={"bg-red-500  w-80 h-64 mb-2"}>
                                <p>calendar</p>
                            </div>
                            {/*Info Component*/}
                            <div className={"bg-blue-400 w-80 h-48 mt-2"}>
                                <p>info</p>
                            </div>
                        </div>
                        {/*Chatbox Component*/}
                        <div className={"bg-purple-800 flex w-[50vw] h-[86vh]  m-5"}>
                            <p> chatbox</p>
                        </div>
                    </div>
                    </div>

                </div>

            </div>
        </>
    );
}
