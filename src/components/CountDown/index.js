import { useEffect, useState } from "react";

function CountDown() {
  const [date, setDate] = useState(new Date("Dec 03 2021 00:00:00").getTime());
  const [countdown, setCountdown] = useState("");
  function tick() {
    const now = new Date().getTime();
    const t = date - now;
    let res = "";
    if (t > 0) {
      let days = Math.floor(t / (1000 * 60 * 60 * 24));
      if (days < 10) {
        days = "0" + days;
      }
      let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      if (hours < 10) {
        hours = "0" + hours;
      }
      let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
      if (mins < 10) {
        mins = "0" + mins;
      }
      let secs = Math.floor((t % (1000 * 60)) / 1000);
      if (secs < 10) {
        secs = "0" + secs;
      }
      res = `${days} dias ${hours} horas ${mins} minutos ${secs} segundos`;
    }
    return res;
  }

  useEffect(() => {
    setCountdown(setInterval(tick, 1000));
    // console.log(countdown);
    return () => setInterval(tick, 1000);
  }, [countdown]);

  return (
    <div>
      <p> {countdown}</p>
    </div>
  );
}

export default CountDown;
