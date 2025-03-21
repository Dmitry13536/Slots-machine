import React, { useEffect, useState } from "react";
import { useGame } from "../Context";

const Tablet = ({newNum, random, isAnimating}) => {
    // const {bet, NewCount} = useGame();

    return(
        <div className='tablet'>
            <div className="window"></div>
            <div className={`values ${isAnimating ? 'animate' : ''}`}>
                <p className="value">{newNum}</p>
                <p className="value">{random}</p>               
            </div>
        </div>
    )
}

export default Tablet;