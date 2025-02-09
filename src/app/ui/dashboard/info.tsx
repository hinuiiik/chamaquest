import moment from "moment";


export default function InfoBox(){
    const endOfMonth   = moment().endOf('month').format('MM-DD');

    return(<>
    <div>
        <h1>Total Pot</h1>
    </div>
        <div>
        <h1>My Deposit</h1>
        </div>
        <div>
        <h1>Deposit Deadline: {endOfMonth}</h1>
        </div>
    </>);
}