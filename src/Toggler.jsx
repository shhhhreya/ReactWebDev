import { useState } from "react"
export default function Toggler(){
    const [isHappy, setisHappy] = useState(true);
    const toggle = ()=>{
        setisHappy(!isHappy)
    }
    return(
        <button onClick={toggle}>
            {isHappy ? ":)" : ":("}
        </button>
    )
}