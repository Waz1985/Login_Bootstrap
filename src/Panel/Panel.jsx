import React, { useState } from "react";

const Panel = ({userName})=> {

    return(
        <>
        <h1 className="d-flex justify-content-center display-1 fw-bold">Bienvenido</h1>
        <h1 className="d-flex justify-content-center display-1 fw-bold">{userName}</h1>
        </>
    );
}

export default Panel;
