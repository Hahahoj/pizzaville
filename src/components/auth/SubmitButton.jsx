import "./SubmitButton.css"

export default function SubmitButton({name}) {
    return (
        <div className="SubmitButton-markup">
            <button className="SubmitButton">{name}</button>
        </div>
    );
}