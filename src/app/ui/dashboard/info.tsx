import moment from "moment";


export default function InfoBox(){
    const endOfMonth   = moment().endOf('month').format('MM-DD');

    return(<>
        <div className={"flex-col text-center self-center p-2"}>
            <div className={"bg-orange-400 pb-[9%] mb-2"}>
                <h1>Total Pot</h1>
            </div>
            <div className={"bg-green-400 pb-[9%] mb-2"}>
                <h1>My Deposit</h1>
            </div>
            <div className={"bg-orange-400 pb-[9%]"}>
                <h1>Deposit Deadline: {endOfMonth}</h1>
            </div>
        </div>

    </>);
}