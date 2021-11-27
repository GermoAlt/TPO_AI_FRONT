import React from "react";
import MenuPanel from "../../../components/MenuPanel/MenuPanel";

export default function Administrador(){

    const menuItems = [
        {
            "title": "Crear campeonato",
            "image": "TorneosFutbol/iconos/tournament",
            "url": "/administrador/perfil"
        },
        {
            "title": "Crear partido",
            "image": "TorneosFutbol/iconos/football-match",
            "url": "/administrador/perfil"
        },
        {
            "title": "Cargar resultados",
            "image": "TorneosFutbol/iconos/player-info",
            "url": "/administrador/perfil"
        },
        {
            "title": "Tablas de posiciones",
            "image": "TorneosFutbol/iconos/ranking",
            "url": "/administrador/perfil"
        },
        {
            "title": "Estadística de jugadores",
            "image": "TorneosFutbol/iconos/player-stats",
            "url": "/administrador/perfil"
        }
    ]

    return(
        <div>
            <MenuPanel data={menuItems} />
        </div>
    )
}