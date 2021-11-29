import React, {useState} from "react";
import "./club.css"
import {Image, Transformation} from "cloudinary-react";
import {InputText} from "primereact/inputtext";

export default function Club(){

    const [ direccion, setDireccion ] = useState()

    return(
        <div className={"perfil-club-container"}>
            <div className={"perfil-club-panel-superior"}>
                <Image publicId={"TorneosFutbol/clubes/avispa_fukuoka"}>
                    <Transformation width="150" crop="fill" />
                </Image>
                <div className={"perfil-club-nombre"}>
                    <h1 className={"title"}>Avispa Fukuoka</h1>
                </div>
            </div>
            <div className={"perfil-club-panel-inferior"}>
                <InputText value={direccion} onChange={(e) => {setDireccion(e.target.value)}} />
            </div>
        </div>
    )
}