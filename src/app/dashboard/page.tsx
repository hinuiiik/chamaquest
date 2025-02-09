import InfoBox from "@/app/ui/dashboard/info";
import Chatbox from "@/app/ui/dashboard/chatbox";


export default function Home() {
    return (
        <>
            {/*Webpage Container*/}

            <div>
                <div className={"text-center h-10"}>
                    <h1>Title</h1>
                </div>
                {/*  Webpage Container  */}
                <div>
                    <div className={"flex bg-yellow-50 w-[80vw] "}>
                        {/*Info Container*/}
                        <div className={"flex flex-col justify-center m-4"}>
                            {/*Calendar component*/}
                            <div className={"bg-red-500  w-80 h-64 mb-2"}>
                                <p>calendar</p>
                            </div>
                            {/*Info Component*/}
                            <div className={"bg-blue-400 w-auto h-auto mt-2"}>
                                <InfoBox/>
                            </div>
                        </div>
                        {/*Chatbox Component*/}
                        <div className={"bg-purple-800 flex w-[50vw] h-[86vh]  m-5"}>
                            {/*<p> chatbox</p>*/}
                            <Chatbox
                                sectionId={"1"}
                            />
                        </div>
                    </div>
                </div>

            </div>


        </>
    );
}
