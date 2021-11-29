import React, {useState} from "react";
import "./panelResultadoNuevo.css"
import {Dropdown} from "primereact/dropdown";
import {Calendar} from "primereact/calendar";
import {Button} from "primereact/button";
import {PrimeIcons} from "primereact/api";
import {InputText} from "primereact/inputtext";

export default function PanelResultadoNuevo(){

    const [campeonato, setCampeonato] = useState()
    const [campeonatos, setCampeonatos] = useState([])
    const [local, setLocal] = useState()
    const [visitante, setVisitante] = useState()
    const [clubes, setClubes] = useState([])
    const [partido, setPartido] = useState()
    const [partidos, setPartidos] = useState([])

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
                        <label htmlFor="partido">Partido</label>
                        <Dropdown id={"campeonato"} value={partido} options={partidos} onChange={setPartido} optionLabel="name" disabled={!campeonato} placeholder="Selecciona un partido" />
                    </div>
                </div>
                <div className="panel-partido-nuevo-row">
                    <div className="panel-partido-nuevo-row-field">
                        <label htmlFor="local">Local</label>
                        <InputText id={"local"} value={local} onChange={setLocal} disabled={!partido} optionLabel="name"  />
                    </div>
                    <div className="panel-partido-nuevo-row-field">
                        <label htmlFor="visitante">Visitante</label>
                        <InputText id={"visitante"} value={visitante} onChange={setVisitante} disabled={!partido} optionLabel="name"  />
                    </div>
                </div>
                <div>

                </div>
            </div>
            <div className={"alta-campeonato-boton-submit-container"}>
                <Button label={"Cargar"} icon={PrimeIcons.CHECK_CIRCLE} onClick={() => submit()} />
            </div>
        </div>
    )
}