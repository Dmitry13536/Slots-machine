import React, { useEffect } from "react";
import { useAlert, useGame } from "../Context";

const Count = () => {
    const {gold} = useGame();

    return(
        <div className="count">
            <p>{gold.toFixed(2)}g</p>
        </div>
    )
}

export default Count;