import React from "react";

const USERS = [
    { name: 'Alex'},
    { name: 'Ivan' },
    { name: 'Roma' },
];

const App = () => {
    return (
        <div>
            {USERS.map((user, index) => (
                <p key={user.name}>{user.name}</p>
            ))}
        </div>
    );
}

export default App;
