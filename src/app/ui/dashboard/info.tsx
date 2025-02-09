import moment from "moment";


export default function InfoBox({ id, userId }: { id: number, userId: number}){
    const endOfMonth   = moment().endOf('month').format('MM-DD');

    return(<>
        <div className={"flex-col text-center self-center p-2"}>
            <div className={"bg-gray-800  pb-[9%] mb-2"}>
                <h1>Total Pot</h1>
                <h2>$100</h2>
            </div>
            <div className={"bg-gray-800 pb-[9%] mb-2"}>
                <h1>My Deposit</h1>
                <h2>$5</h2>
            </div>
            <div className={"bg-gray-800 pb-[9%]"}>
                <h1>Deposit Deadline: {endOfMonth}</h1>
            </div>
        </div>

    </>);
}