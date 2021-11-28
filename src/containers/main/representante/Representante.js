import React from "react";
import {Route, Routes} from "react-router-dom";
import MenuAdministrador from "../administrador/menu/MenuAdministrador";
import Club from "./club/Club";
import Perfil from "../login/Perfil";
import Jugadores from "./jugadores/Jugadores";
import ListaCampeonato from "./listaCampeonato/ListaCampeonato";
import ListaPartido from "./listaPartido/ListaPartido";
import ResultadosPartido from "./resultadosPartido/ResultadosPartido";
import MenuRepresentante from "./MenuRepresentante";

export default function Representante(){
    const BASE_PATH = "/representante"
    return(
        <Routes>
            <Route exact path={BASE_PATH + "/perfil"} element={<Perfil/>}/>
            <Route exact path={BASE_PATH + "/club"} element={<Club/>}/>
            <Route exact path={BASE_PATH + "/equipo"} element={<Jugadores/>}/>
            <Route exact path={BASE_PATH + "/gestionarJugadores"} element={<ListaCampeonato/>}/>
            <Route exact path={BASE_PATH + "/listaPartido"} element={<ListaPartido/>}/>
            <Route exact path={BASE_PATH + "/controlarResultados"} element={<ResultadosPartido/>}/>
            <Route path={"*"} element={<MenuRepresentante/>}/>
        </Routes>
    )
}