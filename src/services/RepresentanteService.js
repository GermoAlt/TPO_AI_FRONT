import axios from "axios";

export default class RepresentanteService {

    getInstance() {
        return axios.create({
            baseURL: 'http://localhost:8081/api',
            headers: {"Access-Control-Allow-Origin": "*"}
        })
    }
}