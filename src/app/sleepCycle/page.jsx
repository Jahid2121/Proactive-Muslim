"use client"
import React from "react";


const sleepCounterPage = () => {

    const handleSleepCycleCount = e => {
        e.preventDefault()
        const sleepingTime = e.target.gotoBed.value 
        const wokeUpTime = e.target.wokeUp.value 
        console.log(sleepingTime, wokeUpTime);
    }

  return (
    <div>
      Sleep Counter 2.0
      <form onSubmit={handleSleepCycleCount}>
        <input name="gotoBed" type="time" />
        <input name="wokeUp" type="time" />
        <button  type="submit">Calculate</button>
      </form>
    </div>
  );
};

export default sleepCounterPage;
