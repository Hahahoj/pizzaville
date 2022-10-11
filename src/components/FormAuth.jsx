import "./FormAuth.css"
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import SwitchMode from "./auth/SwitchMode";
import WindowsTitle from "./auth/WindowsTitle";
import InputField from "./auth/InputField";
import CheckboxField from "./auth/CheckboxField";
import ErrorField from "./auth/ErrorField";
import SubmitButton from "./auth/SubmitButton"


let login;
let password;
let checkbox;
let error=false;

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

export default function FormAuth() {

    const [value, setValue] = useState(0);
    const navigate = useNavigate();

    const ForceUpdate = () => { 
        setValue( value => !value); 
    };    

    const switchWindowMode = () => {
        global.State=!global.State;
        setMode(global.State);
        ForceUpdate();
    };

    const SubmitUser = () => {
        error=false;
        login = document.getElementById("loginfield").value;
        password = document.getElementById("passwordfield").value;
        setMode(global.State);
        if (global.State ) {
            // Регистрация
            loginsData = loginsData || [];
            loginsData.forEach(element => {
                if (element.login === login) {
                    d.InputFieldLogin="Пользователь с таким login уже существует";
                    error=true;
                }
            });
            if (login.length < 4) {
                d.InputFieldLogin="Логин должен содержать не менее 4-х символов";
                error=true;
            }
            if (password.length < 4) {
                d.InputFieldPsw="Пароль должен содержать не менее 4-х символов";
                error=true;
            }
            if (login === "") {
                d.InputFieldLogin="Поле не должно быть пустым";
                error=true;
            }
            if (password === "") {
                d.InputFieldPsw="Поле не должно быть пустым";
                error=true;
            }
            if (error) {
                ForceUpdate();
                return;
            }
            loginsData = loginsData || [];
            loginsData.push({ login: login, password: password });
            let serialEntry = JSON.stringify(loginsData);
            localStorage.setItem("loginsArray", serialEntry);
            global.State=!global.State;
            setMode(global.State);
            ForceUpdate();
            return;
        } else {
            // Вход
            if (login === "") {
                d.InputFieldLogin="Поле не должно быть пустым";
                error=true;
            }
            if (password === "") {
                d.InputFieldPsw="Поле не должно быть пустым";
                error=true;
            }
            if (error) {
                ForceUpdate();
                return;
            }
            error=!error;
            loginsData = loginsData || [];
            loginsData.forEach(element => {
                if (element.login === login) {
                    if (element.password === password) {
                        // залогинились
                        global.logined = login;
                        console.log(login);
                        navigate("/");
                        window.location.href = "/";
                        error=false;
                    }
                }
            });
            if (error) {
                // Остается только ошибка несоответствия пароля или login
                d.ErrorField="Логин или пароль неверен";
                ForceUpdate();
            };
        };
                
    };
        
    return (
        <div className="FormAuth">
            <SwitchMode name={d.SwitchMode} onswitch={switchWindowMode} />
            <WindowsTitle name={d.WindowsTitle} />
            <InputField name="Логин" type="text" id="loginfield" description={d.InputFieldLogin} />
            {/* <InputField name="Пароль" description="" /> */}
            <InputField name="Пароль" type="password" id="passwordfield" description={d.InputFieldPsw} />
            <CheckboxField description="Я согласен получать обновления на почту" /> 
            <ErrorField description={d.ErrorField} />
            {/* <SubmitButton name={d.SubmitButton} onpress={SubmitUser} /> */}
            <SubmitButton name={d.SubmitButton} onpress={SubmitUser} />
        </div>
    );
}