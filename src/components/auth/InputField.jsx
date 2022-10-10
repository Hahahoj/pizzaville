import "./InputField.css"

export default function InputField({name,type,id,description}) {
    return (
        <>
            <input className="InputField" id={id} type={type} placeholder={name} />
            <p className="Description">{description}</p>
        </>
    );
}