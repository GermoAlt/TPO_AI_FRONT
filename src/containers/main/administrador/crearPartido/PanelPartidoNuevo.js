import React, {useState} from "react";
import "./panelPartidoNuevo.css"
import {Dropdown} from "primereact/dropdown";
import {Calendar} from "primereact/calendar";
import {Button} from "primereact/button";
import {PrimeIcons} from "primereact/api";

export default function PanelPartidoNuevo(){

    const [campeonato, setCampeonato] = useState()
    const [campeonatos, setCampeonatos] = useState([])
    const [local, setLocal] = useState()
    const [visitante, setVisitante] = useState()
    const [clubes, setClubes] = useState()
    const [fecha, setFecha] = useState()

    const submit = () => {

    }

    return(
        <div className={"panel-partido-nuevo-container"}>
            <div className={"p-fluid p-grid p-formgrid"}>
                <div className={"panel-partido-nuevo-row"}>
                    <div className={"panel-partido-nuevo-row-field"}>
                        <label htmlFor="campeonato">Campeonato</label>
                        <Dropdown id={"campeonato"} value={campeonato} options={campeonatos} onChange={setCampeonato} optionLabel="name" placeholder="Selecciona un campeonato" />
                    </div>
                    <div className={"panel-partido-nuevo-row-field"}>
                        <label htmlFor="icon">Fecha</label>
                        <Calendar id="icon" value={fecha} onChange={(e) => setFecha(e.value)} showIcon />
                    </div>
                </div>
                <div className="panel-partido-nuevo-row">
                    <div className="panel-partido-nuevo-row-field">
                        <label htmlFor="local">Local</label>
                        <Dropdown disabled={!campeonato} id={"local"} value={local} options={clubes} onChange={setLocal} optionLabel="name" placeholder="Selecciona un club" />
                    </div>
                    <div className="panel-partido-nuevo-row-field">
                        <label htmlFor="icon">Visitante</label>
                        <Dropdown disabled={!campeonato} value={visitante} options={clubes} onChange={setVisitante} optionLabel="name" placeholder="Selecciona un club" />
                    </div>
                </div>
                <div>

                </div>
            </div>
            <div className={"alta-campeonato-boton-submit-container"}>
                <Button label={"Crear"} icon={PrimeIcons.CHECK_CIRCLE} onClick={() => submit()} />
            </div>
        </div>
    )
}