import React, {useState} from "react";
import './tablaPosiciones.css'
import {Fieldset} from "primereact/fieldset";
import {Panel} from "primereact/panel";

export default function TablaPosiciones(){
    const [panelClubVisible, setPanelClubVisible] = useState(false)
    const [panelJugadorVisible, setPanelJugadorVisible] = useState(false)
    return(
        <div className={"panel-tabla-posiciones-jugador-container"}>
            <div className={"panel-tabla-posiciones-jugador-panel"}>
                <Panel header={"Club"}>

                </Panel>
            </div>
            <div className={"panel-tabla-posiciones-jugador-panel"}>
                <Panel header={"Personal"}>

                </Panel>
            </div>
        </div>
    )
}