
import './index.css';

function CalendarHeader({ currentCalendarYear, currentCalendarMonth }) {

    return (

        <div className="calendarHeader">
            <span id="month">{currentCalendarMonth}</span>
            <span id="year">{currentCalendarYear}</span>
        </div>

    );
}

export default CalendarHeader;
