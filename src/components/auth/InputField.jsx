import "./InputField.css"

export default function InputField({name,type,description}) {
    return (
        <>
            <input className="InputField" type={type} placeholder={name} />
            <p className="Description">{description}</p>
        </>
    );
}