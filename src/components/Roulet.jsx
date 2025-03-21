import React, {useState} from "react";
import Tablet from "./Tablet";
import { useAlert, useGame } from "../Context";
import Bet from "./bet";

function Roulet(){
    const {NewCount, bet, gold} = useGame();
    const {setMessage} = useAlert();
    const valuePool = [0, 7, 0, 0, 0, 0, 0, 0, 0.01, 0.1, 0.5, 2, 3, 5, 10, 25, 100, 250, 0.25, -4, -10, -100, 23, 24];

    const [random, setRandom] = useState(0);
    const [random1, setRandom1] = useState(0);
    const [random2, setRandom2] = useState(0);

    const [newNum, setNew] = useState(0);
    const [newNum1, setNew1] = useState(0);
    const [newNum2, setNew2] = useState(0);

    const [isAnimating, setIsAnimating] = useState(false);



    function play(min,max){
        if (!newNum){
            setRandom(Math.floor(Math.random()*max + 1 - min) + min );
            setNew(Math.floor(Math.random()*max + 1 - min) + min );
        }else{
            setNew(Math.floor(Math.random()*max + 1 - min) + min );
            setRandom(newNum);
        }

        if (!newNum1){
            setRandom1(Math.floor(Math.random()*max + 1 - min) + min );
            setNew1(Math.floor(Math.random()*max + 1 - min) + min );
        }else{
            setNew1(Math.floor(Math.random()*max + 1 - min) + min )
            setRandom1(newNum1);
        }

        if (!newNum2){
            setRandom2(Math.floor(Math.random()*max + 1 - min) + min );
            setNew2(Math.floor(Math.random()*max + 1 - min) + min );
        }else{
            setNew2(Math.floor(Math.random()*max + 1 - min) + min );
            setRandom2(newNum2);
        }
    }
    

    const startAnim = () => {
        if (gold <= 0){
            setMessage(['You lose everething', 'Game over', 3])
            return;
        }else if (bet > gold){
            setMessage(['Not enough gold', 'Alert', 2])
            return;
        }else if(bet <= 0){
            setMessage(['The bid must be greater than zero', 'Alert', 2])
            return;
        }
        setMessage(['All correct', 'All correct', 1])
        setIsAnimating(true);
        setTimeout(() =>{setIsAnimating(false)}, 500);
        setTimeout(() =>{play(1,23)}, 500);
        giveWin();
    }

    const giveWin = () => {
        let win = valuePool[newNum] * valuePool[newNum1] * valuePool[newNum2] * bet;
        console.log(valuePool[newNum], valuePool[newNum1], valuePool[newNum2], bet, win);
        NewCount(win);
    };
    

    return(
        <div className="roulet">
            <div className="roulet__this">
            <Tablet isAnimating={isAnimating} newNum={valuePool[newNum]} random={valuePool[random]} />
            <Tablet isAnimating={isAnimating} newNum={valuePool[newNum1]} random={valuePool[random1]} />
            <Tablet isAnimating={isAnimating} newNum={valuePool[newNum2]} random={valuePool[random2]} />
            </div>
            <Bet />
            <button className="tablet__button" onClick={startAnim}>play</button>
        </div>
        
    )
}

export default Roulet;