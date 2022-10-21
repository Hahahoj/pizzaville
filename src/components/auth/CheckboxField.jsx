import "./CheckboxField.css"

export default function CheckboxField({description}) {
    return (
        <div className="Checkbox-markup">
            <input type="checkbox" className="CheckboxField"></input>
            <span className="CheckboxDescription">{description}</span>
        </div>
    );
}