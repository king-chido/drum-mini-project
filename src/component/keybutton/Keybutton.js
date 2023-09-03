import React, {useEffect} from 'react';
import "./keybutton.css";

const Keybutton = ({sound, play}) => {

const handleKeyDown = (e)=> {
    if(e.keyCode === sound.keyCode){
        play(sound.key, sound.id)
    }
}

    useEffect(()=> {
        document.addEventListener("keydown", handleKeyDown)
    })
   
  return (
    <div className='buttonDiv'>
        <button type="button" onClick={()=>play(sound.key, sound.id)}>
            <audio src={sound.url} id={sound.key} />
            {sound.key}
        </button>
    </div>
  )
}

export default Keybutton