import { useState, useEffect } from "react";
import { getDate, getHours } from "../services/getTime";
import useInterval from "../services/UseInterval";


function DateNow () {
    const [count, setCount] = useState(0);

    const date = getDate();
    const year = new Date();

    const [clock, setClock] = useState(0);

    useEffect(() => {  
        const time = getHours();
        setClock(time);
    }, [count])

    useInterval(() => {
        setCount(count + 1);
    }, 1000);

    return (
        <div>
            <h1 className="text-form title">{ year.getFullYear() === 2022 
            ? "Aline, Thomas, Célian et Nathan vous souhaitent un joyeux Noël" 
            : "Happy New Year !"}</h1>
            <p className="text-form time-board">Nous sommes le {date}</p>
            <p className="text-form time-board">Il est {clock}</p>
        </div>
    )
}

export default DateNow;