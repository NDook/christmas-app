import { useEffect, useState } from "react";
import useInterval from "../services/UseInterval";
import VideoPlay from "./VideoPlay";


function Counter () {
    const [count, setCount] = useState(0);
    const [delayTimeFormat, setDelayTimeFormat] = useState(0);
    const delay = 1000;

// useEffect(() => {
//     const countDelay = dateYear * 86400;
//     return setCount(countDelay)
// }, [dateYear])

    useEffect(() => {  
        const  update = new Date();
        const  annee = update.getFullYear() +1;
        const  newYear = new Date("01 January, " + annee);
        const interval = newYear.getTime() - update.getTime();
        const time  =Math.floor(interval/ (1000))
        setCount(time);
    }, [])

    useInterval(() => {
        setCount(count - 1);
    }, delay);

    useEffect(() => {
        const d = Number(count);
        const j = Math.floor(d / 86400);
        const h = Math.floor(d / 3600  % 24);
        const m = Math.floor(d % 3600 / 60);
        const s = Math.floor(d % 3600 % 60);
    
        const jDisplay = j > 0 ? j + (j <= 1 ? " jour, " : " jours, ") : "";
        const hDisplay = h > 0 ? h + (h <= 1 ? " heure, " : " heures, ") : "";
        const mDisplay = m > 0 ? m + (m <= 1 ? " minute, " : " minutes, ") : "";
        const sDisplay = s > 0 ? s + (s <= 1 ? " seconde" : " secondes") : "";
        setDelayTimeFormat(jDisplay + hDisplay + mDisplay + sDisplay); 
    }, [count])


    return (
        <div className="destriction-container">
            <div className="destruction-time">
                <h1 className="text-form text-auto-dest">{delayTimeFormat < 1 ? "" : "Auto destruction dans:"}</h1>
                <p className="text-form text-time">{delayTimeFormat}</p>
            </div>            
            <VideoPlay delayTimeFormat={delayTimeFormat}/>
        </div>
    )
}

export default Counter;