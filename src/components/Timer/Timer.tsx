import React, { useState } from 'react'
import './Timer.css'
import  {TimerButton} from '../TimerButton/TimerButton'
export const Timer = () => {
    const [state, setstate] = useState({
     
    })
    function startTimer() {
       setstate({ 
        isOn: true });
        console.log("Starting Time")
    }
    function stopTimer() {
        setstate({ isOn: false });
        console.log('Stopping timer.');
    }

    function resetTimer() {
        stopTimer();
        setstate({
            minutes: 25,
            seconds: 0,
          });
        console.log('Resetting timer.');
    }
    return (
        <div className="timer-container">
        <div className="time-display"></div>
        <div className="timer-button-container">
          <TimerButton buttonAction={startTimer} buttonValue={'Start'} />
          <TimerButton buttonAction={stopTimer} buttonValue={'Stop'} />
          <TimerButton buttonAction={resetTimer} buttonValue={'Reset'} />
        </div>
      </div>
    )
}
