import React from "react";
import MenuPanel from "../../../../components/MenuPanel/MenuPanel";

export default function MenuAdministrador(){

    const menuItems = [
        {
            "title": "Crear campeonato",
            "image": "TorneosFutbol/iconos/tournament",
            "url": "/administrador/crearCampeonato"
        },
        {
            "title": "Crear partido",
            "image": "TorneosFutbol/iconos/football-match",
            "url": "/administrador/crearPartido"
        },
        {
            "title": "Cargar resultados",
            "image": "TorneosFutbol/iconos/player-info",
            "url": "/administrador/cargarResultado"
        },
        {
            "title": "Tablas de posiciones",
            "image": "TorneosFutbol/iconos/ranking",
            "url": "/administrador/tablasPosiciones"
        },
        {
            "title": "Estadística de jugadores",
            "image": "TorneosFutbol/iconos/player-stats",
            "url": "/administrador/estadisticasJugadores"
        }
    ]

    return(
        <div>
            <MenuPanel data={menuItems} />
        </div>
    )
}