import "./SubmitButton.css"

export default function SubmitButton({name,onpress}) {
    return (
        <div className="SubmitButton-markup">
            <button className="SubmitButton" onClick={onpress}>{name}</button>
        </div>
    );
}