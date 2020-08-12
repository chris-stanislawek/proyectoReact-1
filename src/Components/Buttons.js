import React from 'react'
import '../assets/styles/Components/Buttons.scss';


export const Buttons = ({ handleButton }) => {
    return (

           <div className="box">

            <div className="box_1"> 
            
            <button className="box--button" onClick={handleButton}> Node Js </button>
            <button className="box--button"> Python </button>
            <button className="box--button"> Angular </button>
            <button className="box--button"> React Js </button>
            <button className="box--button"> PHP </button>
            </div>

            <div className="box_2"> 
            <button className="box--button"> C# </button>
            <button className="box--button"> Java </button>
            <button className="box--button"> .Net </button>
            <button className="box--button"> Vue </button>
            </div>

            

        </div>
        
    )
}

export default Buttons;
