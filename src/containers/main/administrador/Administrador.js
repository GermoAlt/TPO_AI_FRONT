import React from "react";
import {Route, Routes} from "react-router-dom";
import MenuAdministrador from "./menu/MenuAdministrador";
import PanelPartidoNuevo from "./crearPartido/PanelPartidoNuevo";
import PanelResultadoNuevo from "./cargarResultados/PanelResultadoNuevo";
import PanelTablaPosiciones from "./crearTablaPosiciones/PanelTablaPosiciones";
import PanelEstadisticasJugadores from "./crearEstadisticasJugadores/PanelEstadisticasJugadores";
import PanelCampeonatoNuevo from "./crearCampeonato/PanelCampeonatoNuevo";

export default function Administrador(){
    const BASE_PATH = "/administrador"
    return(
        <Routes>
            <Route exact path={BASE_PATH + "/crearCampeonato"} element={<PanelCampeonatoNuevo/>}/>
            <Route exact path={BASE_PATH + "/crearPartido"} element={<PanelPartidoNuevo/>}/>
            <Route exact path={BASE_PATH + "/cargarResultado"} element={<PanelResultadoNuevo/>}/>
            <Route exact path={BASE_PATH + "/tablasPosiciones"} element={<PanelTablaPosiciones/>}/>
            <Route exact path={BASE_PATH + "/estadisticasJugadores"} element={<PanelEstadisticasJugadores/>}/>
            <Route path={"*"} element={<MenuAdministrador/>}/>
        </Routes>
    )
}