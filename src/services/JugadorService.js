import axios from "axios";
import API from "./API";

export default class JugadorService {

    getAPI(){
        return API.getInstance()
    }

    getJugadorById(id){
        this.getAPI().get("/jugador/get/"+id)
    }
}