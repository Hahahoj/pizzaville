import "./ButtonToLog.css"
import { useNavigate } from "react-router-dom";

export default function ButtonToLog() { 

    const navigate = useNavigate();

    return (
        <button className="button_to_log" onClick = { () => { 
            global.logined="";
            navigate("/auth")}} >Выход</button>
    )
}