import { useContext, createContext, useState } from "react";

const GameContext = createContext();
const AlertContext = createContext();

export const useAlert = () => {
    const context1 = useContext(AlertContext);
    return  context1;
}

export const useGame = () => {
    const context = useContext(GameContext);
    return context;
}

export const GameProvider = ({children}) => {
    const [gold, setGold] = useState(1234340);
    const [bet, setBet] = useState(10);

    const NewCount = (value) => {
        setGold(prev => prev+value-bet)
    };

    const changeBet = (event) => {
        setBet(event.target.value)
    }

    const addBet =  () => {
        setBet(prev => Number(prev) + Number(10))
    }

    const [message, setMessage] = useState(['none', 'All correct', 1]);
    
    return (
        <AlertContext.Provider value={{message, setMessage}}>
        <GameContext.Provider value={{gold, NewCount, bet, addBet, changeBet}}>
            {children}
        </GameContext.Provider>
        </AlertContext.Provider>
    );
};