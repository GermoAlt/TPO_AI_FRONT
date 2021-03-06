import React from "react";
import DisplayPanel from "../../../components/DisplayPanel/DisplayPanel";

export default function Representante(props){
    const menuItems = [
        {
            "title": "Mi perfil",
            "image": "TorneosFutbol/iconos/perfil",
            "url": "/representante/perfil"
        },
        {
            "title": "Mi club",
            "image": "TorneosFutbol/iconos/football-club",
            "url": "/representante/club"
        },
        {
            "title": "Gestionar jugadores",
            "image": "TorneosFutbol/iconos/team",
            "url": "/representante/equipo"
        },
        {
            "title": "Habilitar jugadores en campeonato",
            "image": "TorneosFutbol/iconos/manage-players",
            "url": "/representante/gestionarJugadores"
        },
        {
            "title": "Gestionar lista de partido",
            "image": "TorneosFutbol/iconos/player-info",
            "url": "/representante/listaPartido"
        },
        {
            "title": "Controlar resultados de partidos",
            "image": "TorneosFutbol/iconos/verified",
            "url": "/representante/controlarResultados"
        }
    ]

    return (
        <DisplayPanel componente={props.componente} opciones={menuItems}/>
    )
}