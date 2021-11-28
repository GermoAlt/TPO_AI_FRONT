import React, {useState} from "react";
import "./perfilJugador.css"
import {Image, Transformation} from "cloudinary-react";
import {InputText} from "primereact/inputtext";

export default function PerfilJugador(){

    const [ nombre, setNombre ] = useState()
    
    return(
        <div className={"perfil-jugador-container p-card"}>
            <div className={"perfil-jugador-panel-superior"}>
                <Image publicId={"TorneosFutbol/jugador/representante.png"}>
                    <Transformation aspectRatio="1:1" gravity="face" radius="max" width="200" crop="fill" />
                </Image>
                <div className={"perfil-jugador-nombre"}>
                    <h1 className={"title"}>Roberto Batista</h1>
                </div>
            </div>
            <div className={"perfil-jugador-panel-inferior"}>
                <InputText value={nombre} onChange={(e) => {setNombre(e.target.value)}} />
            </div>

        </div>
    )
}