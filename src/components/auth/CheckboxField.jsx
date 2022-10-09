import "./CheckboxField.css"

export default function CheckboxField({description,checked}) {
    return (
        <div className="Checkbox-markup">
            <span className="CheckboxField"></span>
            <span className="CheckboxDescription">{description}</span>
        </div>
    );
}