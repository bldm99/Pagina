import { useState, useEffect } from 'react';
import './emenu.css'
import { Link } from 'react-router-dom';
import * as Datareact from "../../Datareact"
import * as Ecom from "./Ecom"

import { ImWhatsapp } from "react-icons/im";

const Emenu = () => {
    var xlogo = "https://c4.wallpaperflare.com/wallpaper/834/299/692/city-lights-girl-moon-wallpaper-preview.jpg"
    //var idLogeado = "64936e483562954d54515f92" //Local

    var idLogeado = "64ab919927009eb117951833"



    const buscarPaginaReact = Datareact.buscarPaginaReact
    const transparente = Datareact.convertHexToRGB

    const [pagina, setPagina] = useState([])
    const [color, setColor] = useState("")

    const [gmail, setGmail] = useState("")


    useEffect(() => {
        const obtener = async () => {
            try {
                const datmaster = Datareact.obtenerInfoTeamfy()
                //const page = await buscarPaginaReact(idLogeado, idpagina, setPagina)
                const page = await buscarPaginaReact(idLogeado, setPagina)
                setColor(page.color)
                const x = setGmail(Ecom.obtenerInfo())
                //console.log(x)

            } catch (error) {
                console.log(error)
            }

        }
        obtener()
    }, [])

    var modificado = `rgba(${transparente(color)} , 0.7)`
    const xstylos = {
        backgroundColor: pagina.color,
    }


    const [animacionActiva, setAnimacionActiva] = useState(false);
    const [mostrarmenu, setMostarmenu] = useState(false)
    const animacion = () => {
        setAnimacionActiva(!animacionActiva);
        setMostarmenu(!mostrarmenu)
    };


    const cerrarSesion = () => {
        Ecom.logout()
        window.location.reload();
    }

    return (
        <section className='Ecl-cabezera' >
            <div className='Ecl-header' style={xstylos}>
                <div className='Ecl-titulo'>
                    <Link to="/paginaexplorer" style={{ color: "green", listStyle: "none", textDecoration: "none", fontSize: "15px" }}   >
                    <img src={xlogo} alt="Logo de empresa" />
                    </Link>
                    
                    <h3 style={{ color: "white" }}>{pagina.titulo}</h3>
                </div>
                <div className='Ecl-lista'  >

                    <ul className='Eli-s' >

                        <li><button onClick={() => { cerrarSesion() }}  >logout</button></li>
                        <li >
                            <Link to="/test" style={{color:"green" , listStyle: "none" , textDecoration:"none" , fontSize:"15px"}}   >
                                Login
                            </Link>
                        </li>
                        <li><ImWhatsapp style={{ color: '#55E511' }} /> {pagina.wasap} </li>
                        <li>{gmail}</li>
                        <li>{pagina.sub1}</li>
                        <li>{pagina.sub2}</li>
                        <li>{pagina.sub3}</li>
                        <li>{pagina.sub4}</li>
                    </ul>

                    <ul className="Eicon-responive">
                        <li>
                            <div className={`icon_menu ${animacionActiva ? "animado" : ""}`} onClick={animacion}>
                                
                                <span className={`linea1 ${animacionActiva ? "Ea" : ""}`}></span>
                                <span className={`linea2 ${animacionActiva ? "Eb" : ""}`}></span>
                                <span className={`linea3 ${animacionActiva ? "Ec" : ""}`}></span>
                              
                            </div>
                        </li>
                    </ul>

                </div>
            </div>

            <div className='Eapmenu'>
                {mostrarmenu &&
                    <div className='x'>
                        <div className='ep-wasap'>
                            <h3 >WhatsApp <ImWhatsapp style={{ color: '#55E511' }} /> {pagina.wasap}  </h3>
                        </div>
                        <div className='ep-lista'>
                            <ul>
                                <li>{pagina.sub1}</li>
                                <li>{pagina.sub2}</li>
                                <li>{pagina.sub3}</li>
                                <li>{pagina.sub4}</li>
                            </ul>
                        </div>
                    </div>
                }
            </div>

        </section>
    );
}
export default Emenu