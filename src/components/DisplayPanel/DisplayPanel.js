import React, {useState} from "react";
import "./displayPanel.css"
import {ListBox} from "primereact/listbox";
import {useNavigate} from "react-router-dom";

export default function DisplayPanel(props){
    let navigate = useNavigate()
    var opciones = props.opciones
    const [ opcion, setOpcion ] = useState()

    return (
        <div className={"display-panel-container p-card"}>
            <div className={"panel-list-container"}>
                <ListBox optionLabel="title" optionValue="url"
                         value={opcion} options={opciones}
                         onChange={(e) => navigate(e.target.value)} />
            </div>
            <div className={"content-panel-container"}>
                {props.componente}
            </div>
        </div>
    )
}