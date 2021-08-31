// Code EyesOnMe Component Here
import React from "react"

function HandleBlur(){
    console.log("Hey! Eyes on me!")
}
function HandleFocus(){
    console.log("Good!")

}

function EyesOnMe(){
    
    
    return(
        <button onFocus={HandleFocus} onBlur={HandleBlur}>Eyes on Me</button>
    );
}
export default EyesOnMe