import React from 'react';
import './ButtonLogin.css';
// import { Context } from '../Context/Context';

function ButtonLogin(){
    // const {iniciarSesion} = React.useContext(Context);

    // const [iniciarSesion, setIniciarSesion] = React.useState('false');
    
    const cambioPantalla = () => {
        const InicioDace = document.querySelector(".inicio-pagina");
        InicioDace.classList.add('inactive');

        const formularioDace = document.querySelector(".fondo");
        formularioDace.classList.remove('inactive');
    }


    return(
        <>
            <button className='button-ingresar' onClick={cambioPantalla}>Iniciar sesión</button>
        </>

    );
}

export { ButtonLogin };