import React from "react";
import UserName from "./UserName";

const App = () => {
    const onClickHandler = (event) => {
        console.log(event);
    }
    return (
        <div onClick={onClickHandler}>
            <input type="text" onChange={(event) => {
                console.log('on change', event.target.value);
            }}/>
            <button>Click</button>
        </div>
    );
}


export default App;
