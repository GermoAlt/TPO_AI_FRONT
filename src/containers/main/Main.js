import React from "react";
import './main.css'
import {Route, Routes} from "react-router-dom";
import Login from "./login/Login";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import PerfilRepresentante from "./representante/perfil/PerfilRepresentante";
import Club from "./representante/club/Club";
import Jugadores from "./representante/jugadores/Jugadores";
import ListaCampeonato from "./representante/listaCampeonato/ListaCampeonato";
import ListaPartido from "./representante/listaPartido/ListaPartido";
import ResultadosPartido from "./representante/resultadosPartido/ResultadosPartido";
import PanelCampeonatoNuevo from "./administrador/crearCampeonato/PanelCampeonatoNuevo";
import PanelPartidoNuevo from "./administrador/crearPartido/PanelPartidoNuevo";
import PanelResultadoNuevo from "./administrador/cargarResultados/PanelResultadoNuevo";
import PanelTablaPosiciones from "./administrador/crearTablaPosiciones/PanelTablaPosiciones";
import PanelEstadisticasJugadores from "./administrador/crearEstadisticasJugadores/PanelEstadisticasJugadores";
import PerfilJugador from "./jugador/perfil/PerfilJugador";
import TablaPosiciones from "./jugador/tablaPosiciones/TablaPosiciones";
import Representante from "./representante/Representante";
import MenuPanel from "../../components/MenuPanel/MenuPanel";
import Jugador from "./jugador/Jugador";
import Administrador from "./administrador/Administrador";


export default function Main(){
    return (
        <div className={"app-main-container"}>
            <Header/>
            <div className={"main-container-body"}>
                <Routes>
                    <Route exact path={"/"} element={<Login/>}/>

                    <Route exact path={"/administrador"} element={<MenuPanel menuItems={menuItemsAdministrador}/>}/>
                    <Route exact path={"/administrador/crearCampeonato"} element={<Administrador componente={<PanelCampeonatoNuevo/>} menuItems={menuItemsAdministrador}/>}/>
                    <Route exact path={"/administrador/crearPartido"} element={<Administrador componente={<PanelPartidoNuevo/>} menuItems={menuItemsAdministrador}/>}/>
                    <Route exact path={"/administrador/cargarResultado"} element={<Administrador componente={<PanelResultadoNuevo/>} menuItems={menuItemsAdministrador}/>}/>
                    <Route exact path={"/administrador/tablasPosiciones"} element={<Administrador componente={<PanelTablaPosiciones/>} menuItems={menuItemsAdministrador}/>}/>
                    <Route exact path={"/administrador/estadisticasJugadores"} element={<Administrador componente={<PanelEstadisticasJugadores/>} menuItems={menuItemsAdministrador}/>}/>

                    <Route exact path={"/jugador"} element={<MenuPanel menuItems={menuItemsJugador}/>}/>
                    <Route exact path={"/jugador/perfil"} element={<Jugador componente={<PerfilJugador/>} menuItems={menuItemsJugador}/>}/>
                    <Route exact path={"/jugador/tablas"} element={<Jugador componente={<TablaPosiciones/>} menuItems={menuItemsJugador}/>}/>

                    <Route exact path={"/representante"} element={<MenuPanel menuItems={menuItemsRepresentante}/>}/>
                    <Route exact path={"/representante/perfil"} element={<Representante componente={<PerfilRepresentante/>}/>}/>
                    <Route exact path={"/representante/club"} element={<Representante componente={<Club/>}/>}/>
                    <Route exact path={"/representante/equipo"} element={<Representante componente={<Jugadores/>}/>}/>
                    <Route exact path={"/representante/gestionarJugadores"} element={<Representante componente={<ListaCampeonato/>}/>}/>
                    <Route exact path={"/representante/listaPartido"} element={<Representante componente={<ListaPartido/>}/>}/>
                    <Route exact path={"/representante/controlarResultados"} element={<Representante componente={<ResultadosPartido/>}/>}/>
                </Routes>
            </div>
            <Footer/>
        </div>
    )
}
const menuItemsJugador = [
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

const menuItemsRepresentante =[
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

const menuItemsAdministrador = [
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
