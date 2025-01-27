import React from "react";
import './PopUp.css';
import ket from './sleepy_ket.png'

const PopUp = (props) => {
    return(props.trigger) ? (
        <div className="popup">
            <div className="popup-inner border border-white rounded-xl">
                <div className=" md:flex justify-center">
                    <img className="md:shrink-0 px-1 object-none" src={ket} />
                    <p className="px-1 flex text-center">This page is being developed by person with sleep schedule of a cat, please have patience. I give no guarantee over how this thing works on mobile, currently deving is focused on desktop.</p>
                </div>
                <div className="flex justify-center paddingUpwards">
                    <button className="close-btn px-1 text-xl button" onClick={() => props.setTrigger(false)}> Close </button>
                </div>
            </div>
            
        </div>
    ) : "";
}

export default PopUp;