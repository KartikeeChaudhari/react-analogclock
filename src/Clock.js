import React, { useEffect, useState } from 'react'
import classes from './Clock.module.css';

const Clock = () => {
    const [timer,setTimer]=useState(new Date())
    useEffect(()=>{
        
        const timerId=setInterval(setTimer(new Date()),1000)
        console.log(timerId);
        return ()=>{
            clearInterval(timerId);
            console.log("cleanup has been run");
        }

    }
    
    ,[])
   
 
  return (
    <>
    <div className={classes.clock}>
        <div className={classes.hourhand} style={{transform:`rotateZ(${timer.getHours() * 30})deg`}}></div>
        <div className={classes.minutehand} style={{transform:`rotateZ(${timer.getMinutes() * 6})deg`}}></div>
        <div className={classes.secondhand}style={{transform:`rotateZ(${timer.getSeconds() * 6})deg`}}></div>
        <span className={classes.twele}>12</span>
        <span className={classes.one}>1</span>
        <span className={classes.two}>2</span>
        <span className={classes.three}>3</span>
        <span className={classes.four}>4</span>
        <span className={classes.five}>5</span>
        <span className={classes.six}>6</span>
        <span className={classes.seven}>7</span>
        <span className={classes.eight}>8</span>
        <span className={classes.nine}>9</span>
        <span className={classes.ten}>10</span>
        <span className={classes.eleven}>11</span>
    </div>
      
    </>
  )
}

export default Clock
