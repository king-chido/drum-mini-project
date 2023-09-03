import React from 'react'
import "./controller.css"

const Controller = ({handleChange, name, volume, handleVolume,  power, handlePower}) => {
  return (
    <div className='divcontrol'>
      <button type='button' onClick={handlePower} className='powerBtn'>{`Power ${power ? "Off" : "On"}`}</button>
      <h2>volume: {Math.round(volume * 100 )}%</h2>
      <input type='range' max={1} min={0} step={0.01} value={volume} onChange={handleVolume} className='input'/>
      <h3>{name}</h3>
      <button type='button' className='changeBtn' onClick={handleChange}> Change Group</button>
    </div>
  )
}

export default Controller