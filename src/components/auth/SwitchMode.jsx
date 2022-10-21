import "./SwitchMode.css"

export default function SwitchMode({name,onswitch}) {

    return (
        <div className="">
            <button className="SwitchMode" onClick={ onswitch }>{ name }</button>
        </div>
    );
}
