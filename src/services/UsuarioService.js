import axios from "axios";
import API from "./API";
import CookieUtils from "../utils/CookieUtils";

export default class UsuarioService{

    getAPI(){
        return API.getInstance()
    }

    login(username, pass){
        return this.getAPI().post('/login', {
            username: username,
            password: pass
        }).then(res => {
            CookieUtils.setCookie("username", username, 1)
            CookieUtils.setCookie("tipoUsuario", res.data.tipoUsuario, 1)
            return res.data
        }).catch (e => console.error(e))
    }
}