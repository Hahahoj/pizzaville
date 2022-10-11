import "./CheckboxField.css"

export default function CheckboxField({description,checked}) {
    return (
        <div className="Checkbox-markup">
            <input type="checkbox" className="CheckboxField"></input>
            <span className="CheckboxDescription">{description}</span>
        </div>
    );
}