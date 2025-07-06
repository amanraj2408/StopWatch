import { useState, useRef } from 'react';

function App() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null); // useRef to store interval ID

  const stop = () => {
    if (isRunning) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
      setIsRunning(false);
    }
  };

  const start = () => {
    if (!isRunning) {
      setIsRunning(true);
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
  };

  const reset = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setIsRunning(false);
    setTime(0);
  };

  return (
    <div className="App">
      <h1>Stop Watch</h1>
      <p>time: {new Date(time * 1000).toISOString().substr(11, 8)}</p>
      <div>
        <button onClick={isRunning ? stop : start}>{isRunning ? 'Stop' : 'Start'}</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default App;
