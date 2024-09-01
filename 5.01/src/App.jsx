import React from "react";
import UserName from "./UserName";

let USERS = [
    { id: 1, name: 'Alex', surname: 'Fox', age: 20},
    { id: 2, name: 'Ivan', surname: 'Crab', age: 21},
    { id: 3, name: 'Roma', surname: 'Chopa', age: 23},
    { id: 4, name: 'Vlad', surname: 'Acrabat', age: 24},
];

const App = () => {
    const changeName = (id, newName) => {
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
    };

    const data = [];
        {USERS.map((user, index) => (
            data.push(
                <div>
                    <UserName
                        userName={user.name}
                        userSurname={user.surname}
                        userAge={user.age}
                        changeName={changeName}
                        /*test="hello"
                        test2={1321}
                        test3={true}
                        test4={{hello: 'world'}}
                        test5={{test: '123'}}
                        test6={() => {}}
                        test7={'qwe'}
                        test8*/
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
