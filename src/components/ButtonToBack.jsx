import "./ButtonToBack.css"
import { useNavigate } from "react-router-dom";

export default function ButtonToBack() { 

    const navigate = useNavigate();

    return (
        <button className="button_to_back" onClick = { () => navigate(-1)} ></button>
    )
}