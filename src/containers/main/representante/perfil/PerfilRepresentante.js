import React, {useState} from "react";
import './perfilRepresentante.css'
import {Image, Transformation} from "cloudinary-react";
import {InputText} from "primereact/inputtext";

export default function PerfilRepresentante(){

    const [ nombre, setNombre ] = useState()

    return(
        <div className={"perfil-representante-container p-card"}>
            <div className={"perfil-representante-panel-superior"}>
                <Image publicId={"TorneosFutbol/representantes/representante.png"}>
                    <Transformation aspectRatio="1:1" gravity="face" radius="max" width="200" crop="fill" />
                </Image>
                <div className={"perfil-representante-nombre"}>
                    <h1 className={"title"}>Roberto Batista</h1>
                </div>
            </div>
            <div className={"perfil-representante-panel-inferior"}>
                <InputText value={nombre} onChange={(e) => {setNombre(e.target.value)}} />
            </div>

        </div>
    )
}