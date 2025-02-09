import moment from "moment";


export default function InfoBox(){
    const endOfMonth   = moment().endOf('month').format('MM-DD');

    return(<>
        <div className={"flex-col "}>
            <div className={"bg-orange-400"}>
                <h1>Total Pot</h1>
            </div>
            <div className={"bg-green-400"}>
                <h1>My Deposit</h1>
            </div>
            <div className={"bg-orange-400"}>
                <h1>Deposit Deadline: {endOfMonth}</h1>
            </div>
        </div>

    </>);
}