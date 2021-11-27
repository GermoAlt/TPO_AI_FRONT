import React, {useState} from "react";
import "./login.css"
import {InputText} from "primereact/inputtext";
import {Button} from "primereact/button";
import UsuarioService from "../../../services/UsuarioService";
import useUser from "../../../contexts/hooks/useUser";
import {useNavigate} from "react-router-dom";

export default function Login(){
    const {user, changeUser} = useUser()
    const navigate = useNavigate()

    const [username, setUsername] = useState()
    const [password, setPassword] = useState()



    const usuarioService = new UsuarioService()

    const login = () => {
        usuarioService.login(username, password)
            .then(res => {
                changeUser(res)
                console.log(res)
            })
    }

    if(user.tipoUsuario) navigate("/"+user.tipoUsuario.toLowerCase())
    return(
        <div className={"login-panel-container p-card"}>
            <div>
                <p className={"title"}>Ingresar</p>
            </div>
            <div>
                <span className="p-float-label">
                    <label htmlFor="username">Usuario</label>
                    <InputText id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                </span>
            </div>
            <div>
                <span className="p-float-label">
                    <label htmlFor="password">Contraseña</label>
                    <InputText id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </span>
            </div>
            <div>
                <Button label={"Login"} onClick={() => login()}/>
            </div>
        </div>
    )
}