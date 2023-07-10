
import axios from "axios"
import jwt_decode from "jwt-decode";

const UR = "http://localhost:3000/"

const URLfinal = "https://teamapi.bladimirchipana.repl.co/"

export const userRegister = async (_id, correo, password, pais, navigate) => {
    const token = localStorage.getItem("tokenTeam");
    const decodedToken = jwt_decode(token);
    const uid = decodedToken?.uid;
    try {
        const response = await axios.post(`${URLfinal}register`, {
            _id: uid,
            correo,
            password,
            pais
        });
        // Guardar el token en localStorage
        localStorage.setItem("token", response.data.token);
        //console.log(response.data)
        //si todo es correcto redirigimos al usuario
        navigate("/paginaexplorer");
    } catch (error) {
        console.log(error)
    }
}

export const userLogin = async (_id, correo, password, navigate) => {
    try {
        const response = await axios.post(`${URLfinal}login`, {
            _id,
            correo,
            password,
        });
        // Guardar el token en localStorage
        localStorage.setItem("token", response.data.token);
        //si todo es correcto redirigimos al usuario
        navigate("/paginaexplorer");
    } catch (error) {
        console.log(error)
    }
}


export const obtenerInfo =  () => {
    try {
        const token = localStorage.getItem("token");

        const decodedToken = jwt_decode(token);
        // Obtener el ID del token decodificado
        const useremail = decodedToken?.em;

        return useremail
    } catch (error) {
        console.log(error)
    }
}


export const logout = () => {
    localStorage.removeItem("token");
    
}
