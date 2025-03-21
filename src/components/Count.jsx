import React from "react";
import { useGame } from "../Context";

const Count = () => {
    const {gold} = useGame();

    return(
        <div className="count">
            <p>{gold.toFixed(2)}g</p>
        </div>
    )
}

export default Count;