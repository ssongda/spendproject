
import { dayOfWeek } from '../common/variable';
import './index.css';

function CalendarContent({ currentCalendarYear, currentCalendarMonth, handleSpendList }) {

    //오늘의 모든 정보
    const today = new Date();
    const thisDate = today.getDate();
    const thisYear = today.getFullYear();
    const thisMonth = today.getMonth() + 1;

    //이번달 첫날의 요일
    const calendarFirstDate = new Date(currentCalendarYear, currentCalendarMonth - 1, 1);
    const calendarFirstDateDOW = calendarFirstDate.getDay();

    //이번달 마지막날의 일자
    const calendarLastDate = new Date(currentCalendarYear, currentCalendarMonth, 0);
    const calendarLastDateDay = calendarLastDate.getDate();

    //전달 마지막날의 일자
    const calendarPreviousLastDate = new Date(currentCalendarYear, currentCalendarMonth - 1, 0);
    const calendarPreviousLastDateDay = calendarPreviousLastDate.getDate();

    let previousDate = calendarPreviousLastDateDay - calendarFirstDateDOW + 1;
    let date = 1;
    let afterDate = 1;

    const weekdaysTr = [];
    for (let i = 0; i < 6; i++) {
        const weekdaysTd = [];
        for (let c = 0; c < 7; c++) {
            let value = '';
            let className = 'weekdaysTd';
            if (c === 6) className = 'calendarSaturday';
            else if (c === 0) className = 'calendarSunday';

            if (i === 0 && c < calendarFirstDateDOW) {
                //weekdaysTd.push(previousDate);
                value = previousDate;
                className = 'calendarEmpty'
                previousDate++;
                if (c === 6) className = 'calendarPreviousSaturday';
                else if (c === 0) className = 'calendarPreviousSunday';
            } else if (date > calendarLastDateDay) {
                //weekdaysTd.push(afterDate);
                value = afterDate;
                className = 'calendarEmpty'
                afterDate++;
                if (c === 6) className = 'calendarAfterSaturday';
                else if (c === 0) className = 'calendarAfterSunday';
            } else {
                value = date;

                if (currentCalendarYear === thisYear
                    && currentCalendarMonth === thisMonth
                    && date === thisDate) {
                    className = 'calendarToday';
                }

                date++;
            }

            weekdaysTd.push({ value: value, className: className });
        }
        weekdaysTr.push(weekdaysTd);
    }

    const handleClick = (day) => {
        const selectedFullDate = new Date(currentCalendarYear, currentCalendarMonth - 1, day);
        handleSpendList(selectedFullDate);
    };

    return (
        <div id="calendarContent">
            <table >
                <thead>
                    <tr>
                        {dayOfWeek.map((item, key) =>
                            <th className="weekdayTh" key={key}>{item}</th>
                        )}
                    </tr>
                </thead>
                <tbody>
                    {weekdaysTr.map((weekdaysTd, index) => (
                        <tr key={index}>
                            {weekdaysTd.map((day, dayIndex) => (
                                <td
                                    key={dayIndex}
                                    className={day.className}
                                    onClick={() => handleClick(day.value)}
                                >
                                    {day.value}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default CalendarContent;
