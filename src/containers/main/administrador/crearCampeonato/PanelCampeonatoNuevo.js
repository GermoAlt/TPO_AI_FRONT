import React, {useState} from "react";
import "./panelCampeonatoNuevo.css"
import JugadorItem from "../../../../components/JugadorItem";
import {Dropdown} from "primereact/dropdown";
import {PickList} from "primereact/picklist";
import {Checkbox} from "primereact/checkbox";
import {Button} from "primereact/button";
import {PrimeIcons} from "primereact/api";

export default function PanelCampeonatoNuevo(){
    const [source, setSource] = useState([]);
    const [target, setTarget] = useState([]);
    const [modalidadPuntos, setModalidadPuntos] = useState(true)
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

    const submit = () => {

    }

    return(
        <div className={"jugadores-partido-container"}>
            <div className={"alta-campeonato-modalidad-container"}>
                <div className="p-field-checkbox">
                    <Checkbox inputId="binary" checked={modalidadPuntos} onChange={e => setModalidadPuntos(e.checked)} />
                    <label htmlFor="binary">Por puntos</label>
                </div>
                <div className="p-field-checkbox">
                    <Checkbox inputId="binary" checked={!modalidadPuntos} onChange={e => setModalidadPuntos(!modalidadPuntos)} />
                    <label htmlFor="binary">Por enfrentamientos</label>
                </div>
            </div>
            <PickList source={source} target={target} itemTemplate={itemTemplate}
                      sourceHeader="Clubes disponibles" targetHeader="Clubes seleccionados"
                      sourceStyle={{ height: '30vh' }} targetStyle={{ height: '30vh' }}
                      onChange={onChange} />
            <div className={"alta-campeonato-boton-submit-container"}>
                <Button label={"Crear"} icon={PrimeIcons.CHECK_CIRCLE} onClick={() => submit()} />
            </div>
        </div>
    )
}