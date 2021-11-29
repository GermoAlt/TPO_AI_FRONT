import React from "react";
import {Image, Transformation} from "cloudinary-react";

export default function JugadorItem(props){
    return (
        <div className={"jugador-item-component-container"}>
            <Image publicId={props.imagen}>
                <Transformation aspectRatio="1:1" gravity="face" radius="max" width="20" crop="fill" />
            </Image>
            <span>{props.nombre}</span>
        </div>
    )
}