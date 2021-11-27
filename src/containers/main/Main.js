import React from "react";
import './main.css'
import {Route, Routes} from "react-router-dom";
import Login from "./login/Login";
import Administrador from "./administrador/Administrador";
import Jugador from "./jugador/Jugador";
import Representante from "./representante/Representante";
import Header from "../header/Header";
import Footer from "../footer/Footer";


export default function Main(){
    return (
        <div className={"app-main-container"}>
            <Header/>
            <div className={"main-container-body"}>
                <Routes>
                    <Route exact path={"/"} element={<Login/>}/>
                    <Route exact path={"/administrador"} element={<Administrador/>}/>
                    <Route exact path={"/jugador"} element={<Jugador/>}/>
                    <Route exact path={"/representante"} element={<Representante/>}/>
                </Routes>
            </div>
            <Footer/>
        </div>
    )
}