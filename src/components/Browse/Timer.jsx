import up from '../../images/up.png'
import down from '../../images/down.png'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

import { useState } from 'react'
const Timer = ()=>{
    const [seconds, setSeconds] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [hours, setHours] = useState(0)
    const [playing, setPlaying] = useState(false)
    const increaseSecond = ()=>{
        if(seconds==59){
            return
        }
        setSeconds((sec)=>sec+1)
    }
        const increaseMinute = ()=>{
        if(minutes==59){
            return
        }
        setMinutes((min)=>min+1)
    }
        const increaseHour = ()=>{
        setHours((hours)=>hours+1)
    }
    const decreaseSecond = ()=>{
        if(seconds==0){
            return
        }
        setSeconds((sec)=>sec-1)
    }
        const decreaseMinute = ()=>{
        if(minutes==0){
            return
        }
        setMinutes((min)=>min-1)
    }
        const decreaseHour = ()=>{
        if(hours==0){
            return
        }
        setHours((hours)=>hours-1)
    }

    function toHoursAndMinutes(totalSeconds) {
  const totalMinutes = Math.floor(totalSeconds / 60);

  const seconds = totalSeconds % 60;
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  return `${hours}:${minutes}:${seconds}`;
}

    return (
        <div className='countdown'>
            <div>
                <CountdownCircleTimer
                isPlaying={playing}
                duration={seconds+minutes*60+hours*60*60}
                colors={["#FF6A6A"]}
            >
                {({ remainingTime }) =><span style={{color:"white",fontSize:"1.5rem"}}>{toHoursAndMinutes(remainingTime)}</span>}
            </CountdownCircleTimer>
            </div>
            <div style={{width:"35vw", textAlign:"center"}}>
                <div className='Container-main'>
                    <div className='Container-styling'>
                        <p>Hours</p>
                        <img className='Change-time' onClick={increaseHour}   src={up}/>
                        <p>{hours}</p>
                        <img className='Change-time'onClick={decreaseHour}  src={down}/>
                    </div>
                    <div className='Container-styling'>
                        <p>Minutes</p>
                        <img className='Change-time' onClick={increaseMinute}  src={up}/>
                        <p>{minutes}</p>
                        <img className='Change-time' onClick={decreaseMinute}  src={down}/>
                    </div>
                   <div className='Container-styling'>
                        <p>Seconds</p>
                        <img className='Change-time' onClick={increaseSecond}  src={up}/>
                        <p>{seconds}</p>
                        <img className='Change-time' onClick={decreaseSecond}  src={down}/>
                    </div>
                </div>
                <div onClick={()=>setPlaying((prev)=>!prev)}  className='Alter-time'>
                    {playing?<p>Pause</p>:<p>Start</p>}
                </div>
            </div>
        </div>
    )
}
export default Timer