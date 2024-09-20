import './index.css';

export const CalendarHeader = ({
  currentCalendarYear,
  currentCalendarMonth,
}) => (
  <div>
    <span className="month">{currentCalendarMonth}</span>
    <span className="year">{currentCalendarYear}</span>
  </div>
);
