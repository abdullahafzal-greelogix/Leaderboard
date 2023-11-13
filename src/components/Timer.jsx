import React from 'react'
import { useStopwatch } from 'react-timer-hook';
import Timerimg from "../assets/timer.png"

function Timer() {
  const {
    totalSeconds,
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    reset,
  } = useStopwatch({ autoStart: true });


  return (
    <div className='timer-box-main'>
        <img src={Timerimg}/>
        <h6>ends in</h6>
      <div className='timer-digits'>
        <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
      </div>
      <h6>updated 10 mins ago</h6>
    </div>
  );
}

export default Timer;