
import './index.css';
import CalendarController from './CalendarController';
import CalendarHeader from './CalendarHeader';
import CalendarContent from './CalendarContent';
import { useEffect, useState } from 'react';

function Calendar({ handleSpendList }) {
  const [currentDate, setCurrentDate] = useState(new Date());

  let currentCalendarYear = currentDate.getFullYear();
  let currentCalendarMonth = currentDate.getMonth() + 1;

  useEffect(() => {
    console.log("hello!")
    return () => {
      console.log("bye")
    } // clean up function 
  }, [])

  return (
    <div className="calendar">
      <div className="calendarWrapper">
        <CalendarHeader
          currentCalendarYear={currentCalendarYear}
          currentCalendarMonth={currentCalendarMonth}
        />
        <CalendarController setCurrentDate={setCurrentDate} />
        <CalendarContent
          handleSpendList={handleSpendList}
          currentCalendarYear={currentCalendarYear}
          currentCalendarMonth={currentCalendarMonth}
        />
      </div>
    </div>
  );
}

export default Calendar;
