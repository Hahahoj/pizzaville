import "./SubmitButton.css"

export default function SubmitButton({name,onpress}) {
    window.addEventListener('keyup', function(event) {
        if (event.keyCode === 13) {
            onpress();
        }
    });

    return (
        <div className="SubmitButton-markup">
            <button className="SubmitButton" onClick={onpress}>{name}</button>
        </div>
    );
}