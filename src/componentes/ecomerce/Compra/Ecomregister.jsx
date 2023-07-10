
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Campo from "../../CampoFormulario/Campo";

import * as Ecom from "../Ecom"
import * as Datareact from "../../../Datareact"


const Ecomregister = () => {

    const navigate = useNavigate();

    const [correo, setCorreo] = useState("")
    const [password, setPassword] = useState("")
    const [pais, setPais] = useState("")

    const [dueñopage, setDueñopage] = useState("")

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
        await Ecom.userRegister(dueñopage, correo, password, pais, navigate)
    }



    return (
        <div className="login-card-container">
            <div className="login-card">
                <div className="login-card-logo">
                    <img src="https://i.ibb.co/8gRHDr6/calcomania.png" alt="logo" />
                </div>
                <div className="login-card-header">
                    <h1>Iniciar sesión</h1>
                    <div>Por favor, registrate para usar mas opciones de la plataforma</div>
                </div>
                <form className="login-card-form" onSubmit={registrar}>
                    <div className="form-item">


                        <Campo
                            valor={correo}
                            place={'Ingresa tu correo electrónico'}
                            actualizarvalor={setCorreo}
                            obligatorio
                            tipo={'text'}
                            span={"<span class='form-item-icon material-symbols-rounded'>mail</span>"}
                        />

                    </div>
                    <div className="form-item">


                        <Campo
                            valor={password}
                            place={'Ingresa tu contraseña'}
                            actualizarvalor={setPassword}
                            obligatorio
                            tipo={'password'}
                            span={"<span class='form-item-icon material-symbols-rounded'>lock</span>"}
                        />

                    </div>
                    <div className="form-item">


                        <Campo
                            valor={pais}
                            place={'Pais'}
                            actualizarvalor={setPais}
                            obligatorio
                            tipo={'text'}
                        />

                    </div>
                    <div className="form-item-other">
                        <div className="checkbox">
                            <input type="checkbox" id="rememberMeCheckbox" defaultChecked />
                            <label htmlFor="rememberMeCheckbox">Recuérdame</label>
                        </div>
                       
                    </div>
                    <button type="submit">Registrarse</button>
                </form>
                
            </div>
            <div className="login-card-social">
                <div>Otras opciones de registro</div>
                <div className="login-card-social-btns">
                    <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-facebook"
                            width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none"
                            strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"></path>
                        </svg>
                    </a>
                    <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-google" width="24"
                            height="24" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" fill="none"
                            strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M17.788 5.108a9 9 0 1 0 3.212 6.892h-8"></path>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );

}
export default Ecomregister