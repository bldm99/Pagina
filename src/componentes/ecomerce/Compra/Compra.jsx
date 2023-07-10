import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import "./compra.css"
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//import Campo from "../../CampoFormulario/Campo"
import Formulario from "../Formulario/Formulario";

import * as Datareact from "../../../Datareact"
import * as Data from "../../../Data"
import * as Ecom from "../Ecom"

const Compra = () => {
    const navigate = useNavigate();
    var idLogeado = "64979d173f4f94805507eb4e"

    const buscarProducto = Datareact.buscarProducto

    const [dueñopagina, setDueñopagina] = useState("")
    const { id } = useParams()

    const [producto, setProducto] = useState([])
    const [correologeado, setCorreologeado] = useState("")

    const [modalVisible, setModalVisible] = useState(false);

    const handleComprar = () => {
        setModalVisible(true);
    };

    const handleOutsideClick = (event) => {
        if (event.target.classList.contains("modal")) {
            setModalVisible(false);
        }
    };






    useEffect(() => {
        document.addEventListener("click", handleOutsideClick);
        const optener = async () => {
            const datmaster = Datareact.obtenerInfoTeamfy()
            setDueñopagina(datmaster.uid)
            const res = await buscarProducto(datmaster.uid, id, setProducto)
            const xcorreo = Ecom.obtenerInfo()
            setCorreologeado(xcorreo)


        }

        optener()
        return () => {
            document.removeEventListener("click", handleOutsideClick);

        };
    }, [])




    const registrarPedido = async (valores) => {

        var totales = producto.precio * valores.cantidad
        try {
            await Data.postPedidos(
                dueñopagina,
                correologeado,
                producto.nombre,
                producto.imagen,
                producto.precio,
                valores.direccion,
                valores.cantidad,
                "En espera",
                producto.sku,
                valores.postal,
                totales,
                valores.tipopago,
                navigate,
            )
            toast.success('¡Compra exitosa!');
            setModalVisible(false);

            console.log("El pedido fue realizado con exito")
        } catch (error) {
            console.log(error)
        }

    }



    return (
        <div className="ECcompra">
            <ToastContainer />

            <section className="EC-cont-pro">

                <div className="EC-producto">
                    <h2>{producto.nombre}</h2>
                    <hr />
                    <div className="EC-caja">
                        <div className="mini">
                            <img src={producto.imagen} alt="" />
                            <img src={producto.imagen} alt="" />
                            <img src={producto.imagen} alt="" />
                        </div>
                        <div className="max">
                            <img src={producto.imagen} alt="" />
                        </div>

                        <div className="details">
                            <div className="x-det">
                                <h3>{producto.descripcion}</h3>
                                <h4>Nombre:{producto.nombre}</h4>
                            </div>
                            <div className="details-datos">
                                <p>Precio: {producto.precio}</p>
                                <p>Stock: {producto.stock}</p>
                                <p>SKU: {producto.sku}</p>

                                <div className="el-btn">
                                    <button onClick={handleComprar} >Comprar</button>
                                </div>


                            </div>

                        </div>

                    </div>

                </div>

            </section>

            <section className="ECoformulario">
                {modalVisible && (
                    <div className="modal">
                        <Formulario
                            datos={registrarPedido}
                            xprecio={producto.precio}
                        />
                    </div>
                )}
            </section>

        </div>
    )
}
export default Compra