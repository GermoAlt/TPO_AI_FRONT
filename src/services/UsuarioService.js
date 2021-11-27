import axios from "axios";

export default class UsuarioService{

    getInstance(){
        return axios.create({
            baseURL: 'http://localhost:8081/api',
            headers: {"Access-Control-Allow-Origin": "*"}
        })
    }

    login(username, pass){
        return this.getInstance().post('/login', {
            username: username,
            password: pass
        }).then(res => {
            return res.data
        }).catch (e => console.error(e))
    }
}