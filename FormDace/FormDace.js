import React from 'react';
import { useRef } from 'react';
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import logoUdo from '../assets/logoUdo.png';
import './FormDace.css';
import { ButtonIngreso } from './ButtonIngreso';
// import { Context } from '../Context/Context';

function FormDace(){
    // const {Sesion} = React.useContext(Context);
    const [values, setValues] = React.useState({
        usuario: "",
        password: "",
    });
    
    // const [usuario, setUsuario] = React.useState();
    // const [clave, setClave] = React.useState('');

    const containerSesion = useRef();
    const tl = useRef();
    
    useGSAP(
    () => {
        tl.current = gsap
        .timeline()
        .from(".encabezado", { duration: 3, y: 30 })
        .from(".contenedor", { duration: 3, y: 30 }, '<')
    },
    [],
    containerSesion, 
    );
    
    const onSubmit = (event) =>{
        event.preventDefault();
    }
    
    const onChange = (event) => {
        const {target} = event;
        const {name, value} = target;

        const newValues = {
            ...values,
            [name]: value,
        }

        setValues(newValues);
        // setUsuario(event.target.value);
    }

    const prueba = values.usuario;

    console.log("Hola, mucho gusto " + prueba);
    // const cambioPantalla = () => {
    //     const formularioDace = document.querySelector(".fondo");
    //     console.log(formularioDace);
    //     formularioDace.classList.add('inactive');

    //     const sesionActiva = document.querySelector(".sesion-activa");
    //     console.log(sesionActiva);
    //     sesionActiva.classList.remove('inactive');

    // }
    return(
        <>
            <div className='fondo inactive'   ref={containerSesion}>
                <div className='encabezado'>
                    <img className="logo-encabezado" src={logoUdo} />
                    <h1 className="titulo-encabezado">Universidad de Oriente</h1>
                    <h2 className="titulo-encabezado">Núcleo Monagas</h2>
                </div>

                <div className="contenedor">
                    <form onSubmit={onSubmit} className='formulario' >
                        <h3 className='subtitulo'>IntraDACE - Estudiantes</h3>

                        <div className='preguntas'>
                            <label htmlFor="usuario" className='descripcion' >Ingrese su Usuario: </label>
                            <input 
                                id='usuario' required 
                                name='usuario'  
                                type='text' 
                                value={values.usuario} 
                                onChange={onChange} 
                                className='respuesta' 
                                placeholder='m99999999' />

                            <label htmlFor="password" className='descripcion' >Ingrese su Contraseña: </label>
                            <input 
                                id='password' required 
                                name='password' 
                                type='password' 
                                value={values.password} 
                                onChange={onChange} 
                                className='respuesta' />

                            <ButtonIngreso text={{ nombre: values.usuario}} />
                            {/* <button onClick={() =>{
                                cambioPantalla();
                                <InicioSesion text={usuario} />
                            }} className='button-ingresar-sesion'>Ingresar</button> */}
                        </div>

                        <p className='nota'>Nota: Su usuario será la letra "m" seguido de su número de cédula</p>

                        <div className='botones'>
                            <button className='button-crear-clave'>Si no ha creado su clave</button>
                            <button className='button-restaurar-clave'>¿Olvidó su Contraseña?</button>
                        </div>
                    </form>

                    <div className='informacion'>
                        <h3 className='subtitulo'>Aviso e información</h3>

                        <p className="info-semestre">ACTIVADO ENLACE DE REGISTRO DE RECIBO DE INSCRIPCIÓN CORRESPONDIENTE AL PERÍODO ACADÉMICO I-2023.</p>

                        <p className='nota'>El arancel de Inscripción para <span>ALUMNOS REGULARES I-2023 (Octubre 2023 - Marzo 2024)</span> es de <span>Bs Digital 120,00</span> y el pago debe realizarse a la Cuenta Corriente del <span>Banco Mercantil</span> número <span>0105-0054-1810-5425-0324</span> a nombre de <span>UDO - Ingresos</span>. Para realizar transferencias pueden afiliar este número de cuenta y colocar el siguiente <span>R.I.F.: G-20000052-0</span> y colocar el correo electrónico <span>dacemonagas@gmail.com</span>.</p>

                        <div className="buttons-info">
                            <button className="button-dace"><a href="http://170.254.174.19/">Ir a DACE - Monagas</a></button>
                            <button className="button-egresado"><a href="http://201.249.180.234/egresados/">Ir a UDO - Egresados</a></button>
                            <button className="button-arancel"><a href="http://170.254.174.19/ArancelesRegulares.php">Ver Aranceles Estudiantiles</a></button>
                            <button className="button-censo"><a href="https://docs.google.com/forms/d/e/1FAIpQLScFe1EOdYnvU9ih1b8fooW7awt4bE9xiVRPPHQJs8VmOf3nYw/viewform?pli=1">Censo de Bienestar Estudiantil</a></button>
                            <button className="button-resolucion"><a href="http://170.254.174.19/Formas/CU_070_2021.jpg">Resolución CU 070/2021</a></button>
                           
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export { FormDace };