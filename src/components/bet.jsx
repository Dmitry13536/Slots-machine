import React from "react";
import { useGame } from "../Context";

const Bet = () => {    
    const {changeBet, bet, gold, addBet} = useGame();

    return(
        <div className="bet">
            <input type="number" onChange={changeBet} value={bet} min={1} max={gold} />
            <button onClick={addBet}>Add</button>
        </div>
    )
}

export default Bet;