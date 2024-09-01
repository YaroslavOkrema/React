import React, {useState} from "react";
import UserName from "./UserName";

// useState, useEffect, useCallback, useRef, useMemo, useContext

const App = () => {

    /*const [isDark, setIsDark] = useState(true);

    // let isDark = true;

    const onClickHandler = () => {
        // setIsDark(!isDark);
        setIsDark((value) => {
            console.log(value, isDark);
            return !value;
        });
        // console.log(isDark);
        // isDark = false;
    };

    return (
        <div className={isDark ? 'dark' : 'light'}>
            <button onClick={onClickHandler}>Change theme</button>
        </div>
    );*/

    /*const [name, setName] = useState('');
    const [password, setPassword] = useState('')*/

    const [data, setData] = useState({ name: '', password: ''});

    const onChangeName = (event) => {
        setData((currentData) => {
            return {
                ...currentData,
                name: event.target.value
            };
        });
        // setName(event.target.value);
    }

    const onChangePassword = (event) => {
        setData((currentData) => {
           return {
               ...currentData,
               password: event.target.value}
        });
        // setPassword(event.target.value);
    }

    return (
        <div>
            <input type="text" onChange={onChangeName}/>
            <input type="password" onChange={onChangePassword}/>

            <p>Ваше имя: {data.name}</p>
            <p>Ваш пароль: {data.password}</p>
        </div>
    );
}

export default App;
