import './index.css';
import SpendHeader from './spendHeader';
import SpendContent from './spendContent';

export const Spend = ({selectedDate}) => {
  if (!selectedDate) {
    return <div className="spend">아직 날짜가 선택안됨.</div>;
  }

  //선택된 날짜의 모든 정보
  const selectYear = selectedDate.getFullYear();
  const selectMonth = selectedDate.getMonth() + 1;
  const selectDate = selectedDate.getDate();
  const selectDOW = selectedDate.getDay();

  return (
    <div className="spend">
      <div className="spendWrapper">
        <SpendHeader
          selectYear={selectYear}
          selectMonth={selectMonth}
          selectDate={selectDate}
          selectDOW={selectDOW}
        />
        <SpendContent selectedDate={selectedDate} />
      </div>
    </div>
  );
};
