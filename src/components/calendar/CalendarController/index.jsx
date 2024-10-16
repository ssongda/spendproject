import { CustomButton } from '../../common/button';

export const CalendarController = ({ setCurrentDate }) => {
  const handlePreviousYear = () => {
    setCurrentDate(prevDate => {
      const newDate = new Date(prevDate);
      newDate.setFullYear(newDate.getFullYear() - 1);
      return newDate;
    });
  };

  const handlePreviousMonth = () => {
    setCurrentDate(prevDate => {
      const newDate = new Date(prevDate);
      newDate.setMonth(newDate.getMonth() - 1);
      return newDate;
    });
  };

  const handlePresent = () => {
    setCurrentDate(new Date());
  };

  const handleNextMonth = () => {
    setCurrentDate(nextDate => {
      const newDate = new Date(nextDate);
      newDate.setMonth(newDate.getMonth() + 1);
      return newDate;
    });
  };

  const handleNextYear = () => {
    setCurrentDate(nextDate => {
      const newDate = new Date(nextDate);
      newDate.setFullYear(newDate.getFullYear() + 1);
      return newDate;
    });
  };

  const list = [
    { label: '«', action: handlePreviousYear },
    { label: '‹', action: handlePreviousMonth },
    { label: 'now', action: handlePresent },
    { label: '›', action: handleNextMonth },
    { label: '»', action: handleNextYear },
  ];

  return (
    <div style={{ display: 'flex' }}>
      {list.map((item, key) => (
        <CustomButton key={key} onClick={() => item.action()}>
          {item.label}
        </CustomButton>
      ))}
    </div>
  );
};
