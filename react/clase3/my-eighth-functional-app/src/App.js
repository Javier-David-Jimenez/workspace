import React, { useState, useEffect } from "react";

const Clock = () => {
    const [date, setDate] = useState(new Date());

    const tick = () => {
        setDate(new Date());
    };

    useEffect(() => {
      const timerID = setInterval(() => tick(), 1000);
      return function cleanup() {
          clearInterval(timerID);
      };
  });

    return (
        <div>
            <h1>Hola, mundo!</h1>
            <h2>Son las {date.toLocaleTimeString()}.</h2>
        </div>
    );
}


const App = () => {
    return <Clock />;
    };
export default App;