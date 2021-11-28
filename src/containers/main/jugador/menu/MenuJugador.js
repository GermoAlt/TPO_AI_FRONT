import React from "react";
import "./menuJugador.css"
import MenuPanel from "../../../../components/MenuPanel/MenuPanel";

export default function MenuJugador(){

    const menuItems = [
        {
            "title": "Mi perfil",
            "image": "TorneosFutbol/iconos/player-info",
            "url": "/jugador/perfil"
        },
        {
            "title": "tablas de posiciones",
            "image": "TorneosFutbol/iconos/ranking",
            "url": "/jugador/tablas"
        }
    ]

    return(
        <div>
            <MenuPanel data={menuItems} />
        </div>
    )
}