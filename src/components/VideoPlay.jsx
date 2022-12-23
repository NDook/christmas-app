import happyNewYear from "../assets/img/happyNewYear.mp4"
import wait from "../assets/img/wait.mp4"


function VideoPlay ({ delayTimeFormat }) {
    return (
        <div className="video-happy-new-year">
            {delayTimeFormat < 1 ? <video src={happyNewYear} autoPlay muted loop/> : <video src={wait} autoPlay muted loop/> } 
        </div>
    )
}

export default VideoPlay;