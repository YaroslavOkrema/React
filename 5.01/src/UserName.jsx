import React from "react";

const UserName = (props) => {
  console.log(props);
  return (
      <>
        {props.userAge > 20 ? (
            <p>
              {props.userName}
              <button onClick={props.changeName(props.userId, 'Vamp')}>
                  Изменить имя
              </button>
            </p>
        ) : null}
        <p>{props.userName} {props.userSurname}</p>
      </>
  );
};

export default UserName;
