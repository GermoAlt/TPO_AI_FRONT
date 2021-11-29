import axios from "axios";
import API from "./API";

export default class JugadorService {

    getAPI(){
        return API.getInstance()
    }
}