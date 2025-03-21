import React, { useEffect, useRef } from "react";
import { useAlert } from "../Context";

const Alert = () => {
    const AlertRef = useRef(null);
    const {message} = useAlert();

    useEffect(()=>{

        AlertRef.current.classList.remove('green', 'red', 'over', 'dis');

        if(message[2] === 1){
            AlertRef.current.classList.add('green');
            AlertRef.current.classList.add('dis');
            // setTimeout(()=>{AlertRef.current.classList.add('dis')}, 1000)
        }else if(message[2] === 2){
            AlertRef.current.classList.add('red');
            setTimeout(()=>{AlertRef.current.classList.add('dis')}, 1000)
        }else if(message[2] === 3){
            AlertRef.current.classList.add('over');
            setTimeout(()=>{AlertRef.current.classList.add('dis')}, 1000)
        }

        
    }, [message])

    return(
        <div className="alert" ref={AlertRef}>
            <p className="alert__title">{message[1]}</p>
            <p className="alert__message">{message[0]}</p>
        </div>
    )
}

export default Alert;