import style from "./About.module.css";
import image from "../../assets/about_image.jpeg";
import arbol from "../../assets/arbol_problemas.jpeg";
export const About = () => {
    return(
        <div className={style.container}>
            <div>
                <h1>CALI RESILIENTE</h1>
                <p>
                    La resiliencia urbana se puede definir como la capacidad de las personas,  
                    las instituciones y los sistemas que componen una ciudad para sobrevivir, 
                    adaptarse y desarrollarse sin importar a los eventos que se enfrenten.
                </p>
            </div>
            <div className={style.image_events}>
                <img src={image} alt="Eventos-urbanos"/>
            </div>
            <div>
                <h1>PROBLEMÁTICA</h1>
                <p>
                    La ciudad de Santiago de Cali se encuentra ubicada en una zona de alto riesgo sísmico, 
                    por lo tanto en un sismo de gran magnitud la ciudad se puede ver afectada por:
                </p>
                <ul>
                    <li>Daños en la red eléctrica.</li>
                    <li>Daños en la infraestructura de telecomunicaciones ( Antenas, Fibra óptica y fuentes de respaldo)</li>
                    <li>Inestabilidad de los sistemas de telecomunicaciones.</li>
                    <li>Saturación de servicios de telecomunicaciones.</li>
                </ul>
            </div>
            <div className={style.image_events}>
                <img src={arbol} alt="Arbol de problema"/>
            </div>
            <div>
                <h1>OBJETIVOS ESPECÍFICOS</h1>
                <p>
                    Determinar la información más importante que requieren los organismos de rescate para la
                    atención oportuna y pertinente de emergencias catastróficas.
                </p>
            </div>
            <div className={style.image_events}>
                <img src={image} alt="Eventos-urbanos"/>
            </div>
        </div>
    )
}