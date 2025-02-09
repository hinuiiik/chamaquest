<<<<<<< HEAD
import Cal from ".././ui/dashboard/calendar"
=======
import InfoBox from "@/app/ui/dashboard/info";
import Chatbox from "@/app/ui/dashboard/chatbox";
import Calendar from "@/app/ui/dashboard/calendar";
>>>>>>> 7ca36e0d18f292019fe39abf8132dbd829e0a57e

export default function Home() {
    return (
        <>
<<<<<<< HEAD
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
                                <Cal/>
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


=======
            {/*<div className="bg-purple-800 flex w-[50vw] h-[86vh] m-5">*/}
            {/*    /!* Pass `id` to Chatbox *!/*/}
            {/*    <Chatbox*/}
            {/*        sectionId={"1"}*/}
            {/*    />*/}
            {/*</div>*/}
>>>>>>> 7ca36e0d18f292019fe39abf8132dbd829e0a57e
        </>
    );
}
