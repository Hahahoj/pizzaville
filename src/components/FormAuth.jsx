import "./FormAuth.css"
import React, { useState } from 'react';
import SwitchMode from "./auth/SwitchMode";
import WindowsTitle from "./auth/WindowsTitle";
import InputField from "./auth/InputField";
import CheckboxField from "./auth/CheckboxField";
import ErrorField from "./auth/ErrorField";
import SubmitButton from "./auth/SubmitButton"

let ErrorFieldDesc;

const UseState0 = () => {
    ErrorFieldDesc = "";
}

const UseState1 = () => {
    ErrorFieldDesc = "Логин или пароль неверен";
}




export default function FormAuth() {

    const [value, setValue] = useState(0);

    const useForceUpdate = () => { // integer state
            setValue( value => value + 1 ); 
            global.State=!global.State;
            console.log("GS=",global.State);
            if (global.State) { UseState0(); }
                else { UseState1() };
            console.log("ErrorFieldDesc=",ErrorFieldDesc);
            console.log("value=",value);
    }
    

    const SubmitUser = () => {
        global.State=!global.State;
        const forceUpdate = useForceUpdate();
    }
        
    return (
        <div className="FormAuth">
            <SwitchMode name="Зарегистрироваться" />
            <WindowsTitle name="Вход" />
            <InputField name="Логин" type="text" description="Логин должен содержать не менее 4-х символов" />
            {/* <InputField name="Пароль" description="" /> */}
            <InputField name="Пароль" type="password" description="Поле не должно быть пустым" />
            <CheckboxField description="Я согласен получать обновления на почту" /> 
            {/* <ErrorField description="" /> */}
            <ErrorField description={ErrorFieldDesc} />
            <SubmitButton name="Войти" onpress={useForceUpdate} />
        </div>
    );
}