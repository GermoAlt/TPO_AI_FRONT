import React, {useState} from "react";
import "./listaCampeonato.css"
import {PickList} from "primereact/picklist";
import {Dropdown} from "primereact/dropdown";

export default function ListaCampeonato(){
    const [source, setSource] = useState([]);
    const [target, setTarget] = useState([]);
    const [campeonato, setCampeonato] = useState()
    const [campeonatos, setCampeonatos] = useState([])

    const itemTemplate = (item) => {
        return (
            <div className="picklist-item-jugador-container">
            </div>
        );
    }

    const onChange = (event) => {
        setSource(event.source);
        setTarget(event.target);
    }

    return(
        <div className={"jugadores-campeonato-container"}>
            <div className={"jugadores-campeonato-dropdown-container"}>
                <Dropdown value={campeonato} options={campeonatos} onChange={(e) => setCampeonato(e.value)} placeholder="Seleccioná un campeonato"/>
            </div>
            <PickList source={source} target={target} itemTemplate={itemTemplate}
                      sourceHeader="Disponible" targetHeader="Seleccionado"
                      sourceStyle={{ height: '30vh' }} targetStyle={{ height: '30vh' }}
                      onChange={onChange} />
        </div>
    )
}