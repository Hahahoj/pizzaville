import "./InputField.css"

export default function InputField({name,description}) {
    return (
        <>
            <input className="InputField" placeholder={name} />
            <p className="Description">{description}</p>
        </>
    );
}