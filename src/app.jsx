import React, { useCallback, useEffect, useState } from 'react';
import Calendar from './components/calendar';
import { Spend } from './components/spend';
import './app.css';

function App() {
  const [selectedDate, setSelectedDate] = useState(null);
  //const [toggle, setToggle] = useState(false)

  const handleSpendList = useCallback(
    date => {
      setSelectedDate(date);
    },
    [setSelectedDate],
  );

  // useMemo((a, b) => {
  //     return a + b
  // }, [])

  useEffect(() => {
    console.log('component did mount!');
  }, [selectedDate]);

  return (
    <div className="app">
      {/* {console.log("rendered.")} */}
      {/* <button onClick={() => setToggle(!toggle)}>Hide</button> */}
      {/* {toggle ? <Calendar handleSpendList={handleSpendList} /> : null} */}
      <Calendar handleSpendList={handleSpendList} />
      <Spend selectedDate={selectedDate} />
    </div>
  );
}

export default App;
