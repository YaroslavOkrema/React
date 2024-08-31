import React from "react";

const App = () => {
    const array = [
        {hello: 'hello'},
        {world: 'world'}
    ];

    const arrayReactElements = [];

    for (let i = 0; i < array.length; i++) {
        const obj = array[i];

        arrayReactElements.push(
            <div>{obj.hello}</div>
        )
    }

    console.log(array);
    console.log(arrayReactElements);

    return (
        <div>
            {array.map((obj) => {
                return (
                  <p>{obj.world}</p>
                );
            })}
        </div>
    );














   /* const name = 'Alex';
    const age = 15;

    let attr = 'hello';

    if (age === 18) {
        attr = 'good';
    } else {
        attr = 'bad';
    }

    function test() {
        if (age === 18) {
            return (
              <div>1</div>
            );
        } else {
            return (
                <div>2</div>
            );
        }*/
}

export default App;
