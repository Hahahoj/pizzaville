import "./FormAuth.css"
import SwitchMode from "./auth/SwitchMode";
import WindowsTitle from "./auth/WindowsTitle";
import InputField from "./auth/InputField";
import CheckboxField from "./auth/CheckboxField";
import ErrorField from "./auth/ErrorField";
import SubmitButton from "./auth/SubmitButton"


export default function FormAuth() {

    return (
        <div className="FormAuth">
            <SwitchMode name="Зарегистрироваться" />
            <WindowsTitle name="Вход" />
            <InputField name="Логин" description="Логин должен содержать не менее 4-х символов" />
            <InputField name="Пароль" description="" />
            {/* <InputField name="Пароль" description="Поле не должно быть пустым" /> */}
            <CheckboxField description="Я согласен получать обновления на почту" /> 
            {/* <ErrorField description="" /> */}
            <ErrorField description="Логин или пароль неверен" />
            <SubmitButton name="Войти" />
        </div>
    );
}