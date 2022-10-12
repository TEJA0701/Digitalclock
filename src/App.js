import React, { useState, useEffect } from "react";

function DigiClock() {
  const [mytime, getMytime] = useState(" ");

  const tick = () => {
    let time =
      new Date().getHours() +
      ":" +
      new Date().getMinutes() +
      ":" +
      new Date().getSeconds();
    getMytime(time);
  };
  useEffect(() => {
    const t = setInterval(tick, 1000);
    return () => {
      clearTimeout(t);
    };
  }, [mytime]);
  return (
    <div>
      <h2> DIGITAL CLOCK</h2>
      <h3> {mytime}</h3>
    </div>
  );
}
export default DigiClock;
