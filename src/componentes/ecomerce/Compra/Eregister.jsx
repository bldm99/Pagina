

import Campo from "../../CampoFormulario/Campo";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Ecomregister from "./Ecomregister";
import './eregister.css'

import * as Ecom from "../Ecom"
import * as Datareact from "../../../Datareact"
import Ecomlogin from "./Ecomlogin";

const Eregister = () => {

    

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