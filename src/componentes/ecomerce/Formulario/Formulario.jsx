
import "./formulario.css"
import { useState } from "react";
import Campo from "../../CampoFormulario/Campo";
import imgyape from "../../../assets/Yape.png"
import imgbcp from "../../../assets/bcp.png"
const Formulario = (props) => {

    const { datos  , xprecio} = props



    const [direccion, setDireccion] = useState("")
    const [postal , setPostal] = useState("")

    const [cantidad, setCantidad] = useState(1)
    const [tipopago , setTipopago] = useState("yape")



    const registrar = (event) => {
        event.preventDefault()
        let valoresFormulario = {
            direccion,
            postal,
            cantidad,
            tipopago

        }
        console.log(valoresFormulario)
        datos(valoresFormulario)
    }
    console.log(tipopago)

    return (
        <div className="ECformulario">

            <div className="box-for">

                <form onSubmit={registrar}>
                    <h3>Rellena el formulario </h3>
                    <div className="for-cantidad">
                        <img src="https://http2.mlstatic.com/D_NQ_NP_2X_921370-MPE50630265584_072022-F.webp" alt="" style={{ width: "10%" }} />
                        <div className="tn">
                            <span onClick={() => { setCantidad(cantidad + 1) }}>+</span>
                            <p>{cantidad}</p>
                            <span onClick={() => { setCantidad(cantidad - 1) }}>-</span>
                        </div>
                    </div>

                    <div className="text-pago">
                        <label htmlFor="">Tipo de pago</label>
                    </div>
                    
                    <div className="metodo-pago">
                        <div className="elpago">
                            <img src={imgyape} alt="" onClick={()=> setTipopago("Yape")} />
                        </div>
                        <div className="elpago">
                            <img src={imgbcp} alt="" onClick={()=> setTipopago("Pago efectivo bcp")} />
                        </div>

                    </div>


                    <Campo
                        titulo={"Direccion"}
                        place="Ingresar la direccion de envio"
                        obligatorio
                        valor={direccion}
                        actualizarvalor={setDireccion}
                        tipo={'text'}
                        inputColor={"#E2DDDD"}
                    />
                    <Campo
                        titulo={"Codigo postal"}
                        place="Ingrese su codigo postal"
                        obligatorio
                        valor={postal}
                        actualizarvalor={setPostal}
                        tipo={'text'}
                        inputColor={"#E2DDDD"}
                    />

                    <div className="cuentas">
                        <label htmlFor="" >Precio</label>
                        <label htmlFor="" >Total</label>
                        <label htmlFor="" className="calc">{xprecio}</label>
                        <label htmlFor="" className="calc">{cantidad * xprecio}</label>
                    </div>

                    <button>Realizar Pedido</button>


                </form>

            </div>


        </div>
    );
}

export default Formulario