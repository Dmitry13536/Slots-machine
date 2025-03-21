import React from "react";


const Tablet = ({newNum, random, isAnimating}) => {


    return(
        <div className='tablet'>
            <div className="window"></div>
            <div className={`values ${isAnimating ? 'animate' : ''}`}>
                <p className="value">x{newNum}</p>
                <p className="value">x{random}</p>               
            </div>
        </div>
    )
}

export default Tablet;