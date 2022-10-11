import "./InputField.css"

export default function InputField({name,type,fieldid,description}) {
    return (
        <>
            <input className="InputField" id={fieldid} type={type} placeholder={name} />
            <p className="Description">{description}</p>
        </>
    );
}