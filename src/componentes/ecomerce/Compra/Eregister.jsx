

import Campo from "../../CampoFormulario/Campo";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Ecomregister from "./Ecomregister";
import './eregister.css'

import * as Ecom from "../Ecom"
import * as Datareact from "../../../Datareact"
import Ecomlogin from "./Ecomlogin";

const Eregister = () => {

    /*const idLocal = import.meta.env.VITE_idLocal;

    const userRegister = Ecom.userRegister

    const navigate = useNavigate();



    const [correo, setCorreo] = useState("")
    const [password, setPassword] = useState("")
    const [pais, setPais] = useState("")


    const [lcorreo, setLcorreo] = useState("")
    const [lpassword, setLpassword] = useState("")

    const [dueñopage , setDueñopage] = useState("")

    useEffect(() => {
        const obtenerdata = async () => {
            try {
                const datmaster = Datareact.obtenerInfoTeamfy()
                setDueñopage(datmaster.uid)
                
                
            } catch (error) {
                console.log(error)
            }

        }
        obtenerdata()
    }, [])

    const registrar = async (event) => {
        event.preventDefault()
        //await userRegister(idLocal, correo, password, pais, navigate)
        await userRegister(dueñopage, correo, password, pais, navigate)
    }


    const logear = async (event) => {
        event.preventDefault()
        await Ecom.userLogin(idLocal, lcorreo, lpassword, navigate)
    }*/

    const [componentes, setComponetes] = useState(
        <Ecomlogin />
    );


    return (


        <div className="general-lr">
            <div className="bt">
                <div className="bt-botones">
                    <button onClick={() => setComponetes(<Ecomlogin/>)} >Login</button>
                    <button onClick={() => setComponetes(<Ecomregister/>)} >Register</button>
                </div>
            </div>

            {componentes}
        </div>




    )
}

export default Eregister