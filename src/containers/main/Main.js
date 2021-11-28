import React from "react";
import './main.css'
import {Route, Routes} from "react-router-dom";
import Login from "./login/Login";
import MenuJugador from "./jugador/menu/MenuJugador";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import PerfilRepresentante from "./representante/perfil/PerfilRepresentante";
import Club from "./representante/club/Club";
import Jugadores from "./representante/jugadores/Jugadores";
import ListaCampeonato from "./representante/listaCampeonato/ListaCampeonato";
import ListaPartido from "./representante/listaPartido/ListaPartido";
import ResultadosPartido from "./representante/resultadosPartido/ResultadosPartido";
import MenuRepresentante from "./representante/menu/MenuRepresentante";
import PanelCampeonatoNuevo from "./administrador/crearCampeonato/PanelCampeonatoNuevo";
import PanelPartidoNuevo from "./administrador/crearPartido/PanelPartidoNuevo";
import PanelResultadoNuevo from "./administrador/cargarResultados/PanelResultadoNuevo";
import PanelTablaPosiciones from "./administrador/crearTablaPosiciones/PanelTablaPosiciones";
import PanelEstadisticasJugadores from "./administrador/crearEstadisticasJugadores/PanelEstadisticasJugadores";
import PerfilJugador from "./jugador/perfil/PerfilJugador";
import TablaPosiciones from "./jugador/tablaPosiciones/TablaPosiciones";
import MenuAdministrador from "./administrador/menu/MenuAdministrador";


export default function Main(){
    return (
        <div className={"app-main-container"}>
            <Header/>
            <div className={"main-container-body"}>
                <Routes>
                    <Route exact path={"/"} element={<Login/>}/>

                    <Route exact path={"/administrador"} element={<MenuAdministrador/>}/>
                    <Route exact path={"/administrador/crearCampeonato"} element={<PanelCampeonatoNuevo/>}/>
                    <Route exact path={"/administrador/crearPartido"} element={<PanelPartidoNuevo/>}/>
                    <Route exact path={"/administrador/cargarResultado"} element={<PanelResultadoNuevo/>}/>
                    <Route exact path={"/administrador/tablasPosiciones"} element={<PanelTablaPosiciones/>}/>
                    <Route exact path={"/administrador/estadisticasJugadores"} element={<PanelEstadisticasJugadores/>}/>

                    <Route exact path={"/jugador"} element={<MenuJugador/>}/>
                    <Route exact path={"/jugador/perfil"} element={<PerfilJugador/>}/>
                    <Route exact path={"/jugador/tablas"} element={<TablaPosiciones/>}/>

                    <Route exact path={"/representante"} element={<MenuRepresentante/>}/>
                    <Route exact path={"/representante/perfil"} element={<PerfilRepresentante/>}/>
                    <Route exact path={"/representante/club"} element={<Club/>}/>
                    <Route exact path={"/representante/equipo"} element={<Jugadores/>}/>
                    <Route exact path={"/representante/gestionarJugadores"} element={<ListaCampeonato/>}/>
                    <Route exact path={"/representante/listaPartido"} element={<ListaPartido/>}/>
                    <Route exact path={"/representante/controlarResultados"} element={<ResultadosPartido/>}/>
                </Routes>
            </div>
            <Footer/>
        </div>
    )
}