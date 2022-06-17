import Clock from './static/Clock';
import Up from './static/Up';
import React, {useState} from 'react';
import Down from './static/Down';
import { Button, Slider, Typography } from '@mui/material'
import './App.css';
import IOS from './components/IOS';

function App() {
  const [timer, setTimer] = useState(0);
  const [timerType, setTimerType] = useState('HRS')
  const [power, setPower] = useState({
    powerBtn : "#b0ffff",
    clock: "#b0ffff",
  })
  const sliderFunction = (event, newValue) => {
    setTimer(newValue);
  }
  const handlePower = () => {
    setPower({
      powerBtn: power.powerBtn == "#b0ffff" ? "gray" : "#b0ffff",
      clock: power.clock == "#b0ffff" ? "gray" : "#b0ffff",
    })
  }
  const switchHandler = () => {
    setTimerType(timerType == "MIN" ? "HRS" : "MIN")
  }
  return (
    <div className="App">
     <div className='outerContainer'>
     <div className='row1'>
      <div className="timeContainer">
        <Clock stroke={power.clock}/>
        <Typography variant='h3' sx={{display: "flex", alignItems: "flex-end"}} color={power.clock}>
          {timer}
          <Typography variant='subtitle1' sx={{m:0.5}} color={power.clock}>
            {timerType}
          </Typography>
        </Typography>
      </div>
      <div className="functionBtns">
        <div className='arrowContainer'>
          <Button variant="contained" sx={{backgroundColor: "#282c34", border: "2px solid black",p: 1, mr:1}} onClick={() => {timer >= 10 && setTimer(timer - 10)}}>
            <Down width="20px" height="20px"/>
          </Button>
          <Button variant="contained" sx={{backgroundColor: "#282c34", border: "2px solid black",p: 1, ml:1}} onClick={() => {setTimer(timer + 10)}}>
            <Up width="20px" height="20px"/>
          </Button>
        </div>
        <div className='powerContainer'>
          <Button variant='contained' sx={{backgroundColor: "#282c34", border: "2px solid black", width:"100%"}} onClick={handlePower}>
            <div className="powerDot" style={{backgroundColor: power.powerBtn}}>

            </div>
            PWR
          </Button>
        </div>
      </div>
     </div>
     <div className='row2'>
        <div className='switchContainer' onClick={switchHandler}>
          <IOS/>
        </div>
        <div className='sliderContainer'>
          <Slider aria-label="timer" sx={{color: "#3a8589", height: "6px"}} value={timer} onChange={sliderFunction} />
        </div>
     </div>
     </div>
    </div>
  );
}

export default App;
