import React, { useState } from "react";
import "./index.css"

const App = () => {
    let [score, setScore] = useState(0)
    
    return (
        <div>
            <h1> Hey this is Pradeep Ravanang</h1>
            <p> The score is {score}</p>
            <button onClick ={()=>(score < 25)? setScore(score+1):""}> Increase</button>
            <button onClick = {()=>(score > 0)? setScore(score-1):""}> Decrease</button>
            <button onClick = {()=>{setScore(0)}}> Reset</button>
        </div>
    )
}

export default App;