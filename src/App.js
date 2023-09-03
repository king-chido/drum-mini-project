import React, {useState, useEffect} from 'react';
import {firstGroupSound, secondGroupSound} from "./sounds";
import Keyboard from "./component/keyboard/Keyboard";
import Controller from "./component/controller/Controller"

const soundObj = {
    heaterkit: firstGroupSound,
    smoothpiano: secondGroupSound,
} 

const App = () => {
    const [soundType, setSoundType] = useState("heaterkit")
    const [soundGroup, setSoundGroup] = useState(soundObj[soundType])

    const [soundName, setSoundName] = useState("")

    const [volume, setVolume] =useState(1)

    const [power, setPower] = useState(true)
    
    const handleVolume = (e)=> {
        setVolume(e.target.value)
    }

    const activateStyle = (audio)=>{
        audio.parentElement.style.backgroundColor = "#000000"
        audio.parentElement.style.color = "#ffffff"
    }

    const deactivateStyle = (audio)=> {
        setTimeout(()=> {
            audio.parentElement.style.backgroundColor = "#ffffff"
             audio.parentElement.style.color = "#000000"
        }, 300)
    }

    const play = (id, sound)=> {
        if(power){
            setSoundName(sound)
            const audio = document.getElementById(id)
            activateStyle(audio)
            audio.currentTime = 0
            audio.play()
            deactivateStyle(audio)
        }else{
            setSoundName(sound)
            const audio = document.getElementById(id)
            activateStyle(audio)
            audio.currentTime = 0
            deactivateStyle(audio)
        }
    }

    const handleChange = ()=> {
        setSoundName("")
        if(soundType === "heaterkit"){
            setSoundType("smoothpiano")
            setSoundGroup(soundObj.smoothpiano)
        }else {
            setSoundType("heaterkit")
            setSoundGroup(soundObj.heaterkit)
        }
    }

    const setKeyVolume = ()=> {
        const audios = soundGroup.map((sounds)=> document.getElementById(sounds.key))
        audios.forEach((audio)=> {
            if(audio){
                audio.volume = volume
            }
        })
    }

    const handlePower = ()=> {
        setPower(!power)
    }

    
    useEffect(()=> {
        setKeyVolume()
    })

  return (
    <div className='firstDiv'>
       <div className='container'>
            <Keyboard sounds={soundGroup} play={play} power={power}/>
            <Controller name={soundName ||soundType} handleChange={handleChange} handleVolume={handleVolume} volume={volume} handlePower={handlePower} power={power}/>
       </div>
    </div>
  )
}

export default App