import React from "react";
import DisplayPanel from "../../../components/DisplayPanel/DisplayPanel";

export default function Jugador(props){
    return (
        <DisplayPanel componente={props.componente} opciones={props.menuItems}/>
    )
}