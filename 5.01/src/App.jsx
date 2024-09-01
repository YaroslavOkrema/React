import React from "react";
import UserName from "./UserName";

let USERS = [
    { id: 1, name: 'Alex', surname: 'Fox', age: 20},
    { id: 2, name: 'Ivan', surname: 'Crab', age: 21},
    { id: 3, name: 'Roma', surname: 'Chopa', age: 23},
    { id: 4, name: 'Vlad', surname: 'Acrabat', age: 24},
];

const App = () => {
    const [_, forceUpdate] = React.useReducer(x => x + 1, 0);
    const changeName = (id, newName) => {
        return () => {
            console.log(id, newName);
            USERS.map((user) => {
                if (user.id === id) {
                    return {
                        id: user.id,
                        name: newName,
                        surname: user.surname,
                        age: user.age,
                    };
                }

                return user;
            });
            console.log(USERS);
            forceUpdate();
        }
    };

    const data = [];
        {USERS.map((user, index) => (
            data.push(
                <div>
                    <UserName
                        userId={user.id}
                        userName={user.name}
                        userSurname={user.surname}
                        userAge={user.age}
                        changeName={changeName}
                    />
                </div>
            )
        ));
        }
    return (
        <div>
            {data}
        </div>
    );
}

export default App;
