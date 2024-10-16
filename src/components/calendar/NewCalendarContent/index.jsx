import { dayOfWeek } from '../../common/variable';
import './index.css';

export const NewCalendarContent = ({
  currentCalendarYear,
  currentCalendarMonth,
  handleSpendList,
}) => {
  const today = new Date();
  const thisDate = today.getDate();
  const thisYear = today.getFullYear();
  const thisMonth = today.getMonth() + 1;

  const calendarFirstDate = new Date(
    currentCalendarYear,
    currentCalendarMonth - 1,
    1,
  );
  const calendarFirstDateDOW = calendarFirstDate.getDay();

  const calendarLastDate = new Date(
    currentCalendarYear,
    currentCalendarMonth,
    0,
  );
  const calendarLastDateDay = calendarLastDate.getDate();

  const calendarPreviousLastDate = new Date(
    currentCalendarYear,
    currentCalendarMonth - 1,
    0,
  );
  const calendarPreviousLastDateDay = calendarPreviousLastDate.getDate();

  const generateCalendarDays = () => {
    const totalDays = 6 * 7;
    let currentDate = 1 - calendarFirstDateDOW;

    return Array.from({ length: totalDays }, (_, index) => {
      const dayOfWeek = index % 7;
      const weekNumber = Math.floor(index / 7);

      let value, empty;

      if (currentDate <= 0) {
        value = calendarPreviousLastDateDay + currentDate;
        empty = true;
      } else if (currentDate > calendarLastDateDay) {
        value = currentDate - calendarLastDateDay;
        empty = true;
      } else {
        value = currentDate;
        empty = false;
      }

      const isToday =
        currentCalendarYear === thisYear &&
        currentCalendarMonth === thisMonth &&
        value === thisDate &&
        !empty;

      currentDate++;

      return {
        value,
        dayInfo: { empty, isToday },
      };
    });
  };

  const weekdaysTr = Array.from({ length: 6 }, (_, weekIndex) =>
    generateCalendarDays().slice(weekIndex * 7, (weekIndex + 1) * 7),
  );

  const getClassName = (dayInfo, index) => {
    const baseClass = 'day';
    const classMap = {
      empty: dayInfo.empty && 'empty previousOrAfter',
      today: dayInfo.isToday && 'today',
      saturday: index === 6 && 'saturday',
      sunday: index === 0 && 'sunday',
    };

    return [baseClass, ...Object.values(classMap).filter(Boolean)].join(' ');
  };

  const handleClick = day => {
    const selectedFullDate = new Date(
      currentCalendarYear,
      currentCalendarMonth - 1,
      day,
    );
    handleSpendList(selectedFullDate);
  };

  return (
    <div id="calendarContent">
      <table>
        <thead>
          <tr>
            {dayOfWeek.map((item, key) => (
              <th className="weekdayTh" key={key}>
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {weekdaysTr.map((weekdaysTd, index) => (
            <tr key={index}>
              {weekdaysTd.map((day, dayIndex) => (
                <td
                  key={dayIndex}
                  className={getClassName(day.dayInfo, dayIndex)}
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
};
