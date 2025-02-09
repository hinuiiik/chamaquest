"use client";

import { useParams } from 'next/navigation'; // Import useParams from next/navigation for SSR
import InfoBox from '@/app/ui/dashboard/info';
import Chatbox from '@/app/ui/dashboard/chatbox';
import Calendar from '@/app/ui/dashboard/calendar';

export default function DashboardPage() {
    const { id } = useParams(); // Using useParams for SSR and client-side transitions

    // Handle loading state in case `id` isn't available yet
    if (!id) {
        return <div>Loading...</div>;
    }

    const userId= 1;
    const sectionId = +id[0];
    return (
        <div>
            {/* Dynamic Content Rendering */}
            <div className="flex bg-gray-800 w-[80vw] h-screen">
                {/* Info Container */}
                <div className="flex flex-col justify-center m-4">
                    <div className="bg-red-500 w-80 h-64 mb-2">
                        {/* Pass `id` to Calendar */}
                        <Calendar id={sectionId}
                                  userId = {userId}/>
                    </div>
                    <div className="bg-blue-400 w-auto h-auto mt-2">
                        {/* Pass `id` to InfoBox */}
                        <InfoBox id={sectionId}
                        userId = {userId}/>
                    </div>
                </div>

                {/* Chatbox Component */}
                <div className="bg-purple-800 flex w-[50vw] h-[86vh] m-5">
                    {/* Pass `id` to Chatbox */}
                    <Chatbox
                        sectionId={sectionId}
                        userId = {userId} />
                </div>
            </div>
        </div>
    );
}
