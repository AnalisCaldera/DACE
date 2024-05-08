import React from "react";
// import { Context } from "../Context/Context";

function InicioSesion(
    // {
    // text}
    ){
    // const {
    //     CIestudiante,
    // } = React.useContext(Context);

    // const sesionActiva = document.querySelector(".sesion-activa");
    // console.log(sesionActiva);
    // sesionActiva.classList.remove('inactive');

    // console.log("Hola " + text.nombre);
    return(
        <>
        <div className="sesion-activa inactive">
            <p>Hola usuario</p> 
            {/* <p>Bienvenido usuario: {text.nombre}</p> */}
        </div>
        </>
    );
}

export { InicioSesion }