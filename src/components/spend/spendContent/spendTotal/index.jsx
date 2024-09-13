import '../index.css';

function DailyTotal({ spendContent }) {

    let sum = 0;
    for (let i = 0; i < spendContent.length; i++) {
        sum += parseInt(spendContent[i].amount);
    }

    return (
        <div className="dailyTotal">
            <div className="spendSumTag">합계</div>
            <div className="spendSum">{sum}</div>
        </div>
    );
}

export default DailyTotal;