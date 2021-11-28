import React, {useState} from "react";
import "./login.css"
import {InputText} from "primereact/inputtext";
import {Button} from "primereact/button";
import UsuarioService from "../../../services/UsuarioService";
import useUser from "../../../contexts/hooks/useUser";
import {useNavigate} from "react-router-dom";
import {Password} from "primereact/password";

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
            })
    }

    if(user.tipoUsuario) navigate("/"+user.tipoUsuario.toLowerCase())
    return(
        <div className={"login-panel-container p-card card"}>
            <div>
                <p className={"title login_title"}>Ingresar</p>
            </div>
            <div className={"login-panel-input-container"}>
                <label htmlFor="username">Usuario</label>
                <InputText id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                <label htmlFor="password">Contraseña</label>
                <Password  id="password" value={password} onChange={(e) => setPassword(e.target.value)} toggleMask />
            </div>
            <div>
                <Button label={"Login"} onClick={() => login()}/>
            </div>
        </div>
    )
}