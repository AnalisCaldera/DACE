import { InicioSesion } from "../InicioSesion/InicioSesion";

function ButtonIngreso({text}){
    const cambioPantalla = () => {
        const formularioDace = document.querySelector(".fondo");
        console.log(formularioDace);
        formularioDace.classList.add('inactive');

        console.log(text.nombre);

        // <InicioSesion text={usuario} />

        const sesionActiva = document.querySelector(".sesion-activa");
        console.log(sesionActiva);
        sesionActiva.classList.remove('inactive');      
    }
    
    
    return(
        <>
            <button onClick={() =>{
                cambioPantalla();
            }} className='button-ingresar-sesion'>
                Ingresar
            </button>
                {/* <InicioSesion text={{ nombre: text.nombre }} /> */}
        </>

    );
}

export { ButtonIngreso };