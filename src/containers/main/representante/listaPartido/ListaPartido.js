import React, {useState} from "react";
import "./listaPartido.css"
import {PickList} from "primereact/picklist";
import {Dropdown} from "primereact/dropdown";
import JugadorItem from "../../../../components/JugadorItem";

export default function ListaPartido(){
    const [source, setSource] = useState([]);
    const [target, setTarget] = useState([]);
    const [campeonato, setCampeonato] = useState()
    const [campeonatos, setCampeonatos] = useState([])

    const itemTemplate = (item) => {
        return (
            <div className="picklist-item-jugador-container">
                <JugadorItem imagen={item.imagen} nombre={item.nombre}/>
            </div>
        );
    }

    const onChange = (event) => {
        setSource(event.source);
        setTarget(event.target);
    }

    return(
        <div className={"jugadores-partido-container"}>
            <div className={"jugadores-partido-dropdown-container"}>
                <Dropdown value={campeonato} options={campeonatos} onChange={(e) => setCampeonato(e.value)} placeholder="Seleccioná un partido"/>
            </div>
            <PickList source={source} target={target} itemTemplate={itemTemplate}
                      sourceHeader="Disponible" targetHeader="Seleccionado"
                      sourceStyle={{ height: '30vh' }} targetStyle={{ height: '30vh' }}
                      onChange={onChange} />
        </div>
    )
}