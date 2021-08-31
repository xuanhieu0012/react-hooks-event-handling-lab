// Code Keypad Component Here
import React from "react"

function handleChange(){
    console.log("Entering password...")
}

function Keypad(){
    return (
    <input type="password" 
    placeholder ="Enter Password"
    onChange={handleChange}
    />
    )
}

export default Keypad