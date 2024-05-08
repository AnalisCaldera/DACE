import { useRef } from 'react';
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import logoUdo from '../assets/logoUdo.jpg';


function EffectsGsap(){
    const container = useRef();
    const tl = useRef();
    
    useGSAP(
    () => {
        tl.current = gsap
        .timeline()
        .from(".titulo-udo", { duration: 4, y: 30 })
        .fromTo(".logo", { duration: 4, y: 30 }, { duration: 6, rotateY: 360 }, '<')
        .from(".lema", { duration: 4, y: 30 }, '<')
    },
    [],
    container
);

return(
    <>
        <div className="inicio-pagina" ref={container}>
            <h1 className="titulo-udo">Universidad de Oriente</h1>
            <img className="logo" src={logoUdo} />
            <h3 className="lema">Del pueblo venimos, hacia el pueblo vamos</h3>
        </div>
    </>
);
}

export { EffectsGsap };