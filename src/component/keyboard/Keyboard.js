import React from 'react'
import "./keyboard.css"
import Keybutton from "../keybutton/Keybutton"

const Keyboard = ({sounds, play}) => {
  return (
    <div className='keyboard'>
      { sounds.map((sound)=> {
        return <Keybutton key={sound.key} sound={sound} play={play}/>
      } ) 
      }
    </div>
  )
}
export default Keyboard