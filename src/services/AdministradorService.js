import axios from "axios";

export default class AdministradorService {

    getInstance() {
        return axios.create({
            baseURL: 'http://localhost:8081/api',
            headers: {"Access-Control-Allow-Origin": "*"}
        })
    }
}