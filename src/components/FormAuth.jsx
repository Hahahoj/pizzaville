import "./FormAuth.css"
import React, { useState } from 'react';
import SwitchMode from "./auth/SwitchMode";
import WindowsTitle from "./auth/WindowsTitle";
import InputField from "./auth/InputField";
import CheckboxField from "./auth/CheckboxField";
import ErrorField from "./auth/ErrorField";
import SubmitButton from "./auth/SubmitButton"

//подготавливаем локальное хранилище к работе
let loginsData = [];
loginsData = JSON.parse(localStorage.getItem("loginsArray"));

// false - режим ввода 
// true - режим регистрации
global.State = false;

let d = {};

const setMode = (mode=false) => {
    if (mode) {
        d = {
            "SwitchMode": "Авторизоваться",
            "WindowsTitle": "Регистрация",
            "InputFieldLogin": "",
            "InputFieldPsw": "",
            "ErrorField": "",
            "SubmitButton": "Зарегистрироваться"
        }
    } else {
        d = {
            "SwitchMode": "Зарегистрироваться",
            "WindowsTitle": "Вход",
            "InputFieldLogin": "",
            "InputFieldPsw": "",
            "ErrorField": "",
            "SubmitButton": "Войти"
        } 
    }
};

setMode(global.State);

// const UseState0 = () => {
//     d.ErrorField = "";
// }

// const UseState1 = () => {
//     d.ErrorField="Логин или пароль неверен";
//     console.log("ErrorField=",d.ErrorField);
//     console.log("d=", d);
// }


export default function FormAuth() {

    const [value, setValue] = useState(0);

    const ForceUpdate = () => { 
        setValue( value => !value); 
    };    

    const switchWindowMode = () => {
        global.State=!global.State;
        setMode(global.State);
        ForceUpdate();
    };

    const SubmitUser = () => {
        global.State=!global.State;
        setMode(global.State);
        console.log("GS=",global.State);
        console.log("value=",value);
        ForceUpdate();
    };
        
    return (
        <div className="FormAuth">
            <SwitchMode name={d.SwitchMode} onswitch={switchWindowMode} />
            <WindowsTitle name={d.WindowsTitle} />
            <InputField name="Логин" type="text" description={d.InputFieldLogin} />
            {/* <InputField name="Пароль" description="" /> */}
            <InputField name="Пароль" type="password" description={d.InputFieldPsw} />
            <CheckboxField description="Я согласен получать обновления на почту" /> 
            <ErrorField description={d.ErrorField} />
            {/* <SubmitButton name={d.SubmitButton} onpress={SubmitUser} /> */}
            <SubmitButton name={d.SubmitButton} onpress={SubmitUser} />
        </div>
    );
}