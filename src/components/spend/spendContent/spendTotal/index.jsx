import '../index.css';

function DailyTotal({ spendContent, selectedDate }) {

    let sum = 0;

    const formattedDate = selectedDate
        .toLocaleDateString()
        .split('/')
        .map((item) => item.padStart(2, '0'))
        .join('');

    const todaySpending = spendContent[formattedDate] || [];

    for (let i = 0; i < todaySpending.length; i++) {
        sum += parseInt(todaySpending[i].amount, 10) || 0;
    }


    return (
        <div className="dailyTotal">
            <div className="spendSumTag">합계</div>
            <div className="spendSum">{sum}</div>
        </div>
    );
}

export default DailyTotal;