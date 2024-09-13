import { dayOfWeek } from '../../common/variable';
import '../index.css';

function SpendHeader({ selectYear, selectMonth, selectDate, selectDOW }) {



    return (
        <div className="spendHeader">{selectYear}.{selectMonth}.{selectDate}.{dayOfWeek[selectDOW]}</div>

    );
}

export default SpendHeader;