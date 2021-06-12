import React, { useState } from "react";

const Login = ({ user, setUser, setIsAuth }) => {
  const addUserNameHandler = (event) => {
    setUser((userViejo) => ({ ...userViejo, userName: event.target.value }));
  };
  const addUserIdHandler = (event) => {
    setUser((userViejo) => ({ ...userViejo, userId: event.target.value }));
  };
  const onClickLoginHandler = (event) => {
    setIsAuth(true);
  };

  return (
    <>
      <div className="row">
        <div className="col-4 offset-4 d-flex justify-center p-2">
          <input
            className="w-100 form-control"
            type="text"
            placeholder="Escriba su Nombre de Usuario"
            onChange={addUserNameHandler}
          />
        </div>
        <div className="col-4 offset-4 p-2">
          <input
            className="w-100 form-control"
            type="text"
            placeholder="Escriba su ID"
            onChange={addUserIdHandler}
          />
        </div>
        <div className="col-4 offset-4 p-2">
          <input
            className="w-100 btn btn-primary"
            type="button"
            value="LogIn"
            disabled={user.userName === "" && user.userId === "" ? true : false}
            onClick={onClickLoginHandler}
          />
        </div>
      </div>
    </>
  );
};

export default Login;
