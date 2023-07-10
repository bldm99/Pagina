
import jwt_decode from "jwt-decode";
import axios from "axios";


//var idLogeado = "64936e483562954d54515f92"  Local
var idLogeado = "64979d173f4f94805507eb4e"    //nube

//const URL = 'https://teamapi.bladimirchipana.repl.co/'


//URL = 'https://teamapi-1.bladimirchipana.repl.co/'

// api en la nube = 'https://teamapi-1.bladimirchipana.repl.co/'
// api Loccal    = 'http://localhost:3000/'


const URLtest = 'https://teamapi-1.bladimirchipana.repl.co/'
const URLfinal = "https://teamapi.bladimirchipana.repl.co/"


//const URLTml = 'http://localhost:3000/'


//Bucar todos los productos del usario que esta logueado
//const URLBuscar = 'http://localhost:3000/userpr'



//Ver todos los datos de usuario
export const viewUsers = async (xpermiso, xset) => {
    if (xpermiso === 'abc123') {
        try {
            const respuesta = await axios.get(`${URLtest}pruebas`)
            xset(respuesta.data)
            return respuesta.data
        } catch (error) {
            console.log(error)
        }
    } else {
        console.log("No tienes acceso")
    }
}

export const unico = async (id, xset) => {
    try {
        const t = await axios.get(`${URLtest}pruebas/${id}`);
        xset(t.data)
        //console.log(t.data)
        return t.data
    } catch (error) {
        console.log(error)
    }
}


//Registar  usuarios e inicializar su sus prosductos
export const postUsers = async (dueño, d_email, telefono, tarjeta, suscripcion, total_productos) => {
    try {
        await axios.post(`${URLtest}pruebas`, {
            dueño,
            d_email,
            telefono,
            tarjeta,
            suscripcion,
            total_productos
        })
    } catch (error) {
        console.log(error)
    }
}

export const buscarUsuario = async (id) => {
    try {
        const t = await axios.get(`${URLtest}pruebas/${id}`);
        return t.data
    } catch (error) {
        console.log(error)
    }
}



export const actualizarUsuario = async (id, dueño, d_email, telefono, tarjeta, suscripcion, total_productos) => {
    try {
        await axios.put(`${URLtest}pruebas/${id}`, {
            dueño,
            d_email,
            telefono,
            tarjeta,
            suscripcion,
            total_productos
        });
    } catch (error) {
        console.log(error);
    }
}





//Registrar paginaHTml del usuarioo
export const postPagina = async (_id, paginahtml) => {
    try {
        await axios.post(`${URLtest}paginaHtml`, {
            _id,
            paginahtml
        });
    } catch (error) {
        console.log(error)
    }

}


/*---------------------------------------Seccion Productos------------------------------------------- */
//Registrar productos del usuario
export const postProductos = async (_id, nombre, precio, imagen, stock, f_Inicio, f_Final, descripcion, html, sku) => {
    try {
        await axios.post(`${URLfinal}data`, {
            _id,
            nombre,
            precio,
            imagen,
            stock,
            f_Inicio,
            f_Final,
            descripcion,
            html,
            sku
        });
    } catch (error) {
        console.log(error)
    }

}

////Bucar todos los productos del usario que esta logueado
export const buscarProductos = async (_id, xset) => {

    const token = localStorage.getItem("tokenTeam");
    const decodedToken = jwt_decode(token);
    const uid = decodedToken?.uid;

    if (_id === uid) {
        try {
            const response = await axios.get(`${URLfinal}userpr`, {
                params: {
                    _id
                }
            });
            //console.log(response.data)
            xset(response.data)
            return response.data
        } catch (error) {
            console.log(error)
        }
    } else {
        console.log("No tienes acceso")
    }
}

/*---------------------------------------Seccion Clientes------------------------------------------- */
//Registrar clientes del usuario
export const postClientes = async (_id, correo, password, pais) => {
    try {
        await axios.post(`${URLtest}cliente`, {
            _id,
            correo,
            password,
            pais
        });
    } catch (error) {
        console.log(error)
    }

}

//Buscar todos los Clientes del usario que esta logueado
export const buscarClientes = async (_id, xset) => {
    const token = localStorage.getItem("tokenTeam");
    const decodedToken = jwt_decode(token);
    const uid = decodedToken?.uid;
    if (_id === uid) {
        try {
            const response = await axios.get(`${URLfinal}cliente`, {
                params: {
                    _id
                }
            });
            console.log(response.data)
            xset(response.data)
            return response.data
        } catch (error) {
            console.log(error)
        }
    } else {
        console.log("No tienes acceso")
    }
}


/*---------------------------------------Seccion Pedidos------------------------------------------- */

export const postPedidos = async (_id, correo_cliente, nombre_producto, imagen_producto, precio_producto, direccion, cantidad, estado,
    sku_p , postal , total , metodo_pago , navigate) => {


    if (!localStorage.getItem("token")) {
        console.log("No se ha iniciado sesión");
        navigate("/test");
        return;
    }

    try {
        await axios.post(`${URLfinal}pedido`, {
            _id,
            correo_cliente,
            nombre_producto,
            imagen_producto,
            precio_producto,
            direccion,
            cantidad,
            estado,

            sku_p ,
            postal,
            total,
            metodo_pago,
        });
    } catch (error) {
        console.log(error)
    }

}

//Buscar todos los Pedidos hechos del usario que esta logueado
export const buscarPedidos = async (_id, xset) => {
    const token = localStorage.getItem("tokenTeam");
    const decodedToken = jwt_decode(token);
    const uid = decodedToken?.uid;
    if (_id === uid) {
        try {
            const response = await axios.get(`${URLfinal}pedidos`, {
                params: {
                    _id
                }
            });
            console.log(response.data)
            xset(response.data)
            return response.data
        } catch (error) {
            console.log(error)
        }
    } else {
        console.log("No tienes acceso")
    }
}

//Buscar un unico pedido segun su id
export const buscarPedido = async (_id, pedidoId, xset) => {
    const token = localStorage.getItem("tokenTeam");
    const decodedToken = jwt_decode(token);
    const uid = decodedToken?.uid;
    if (_id === uid) {
        try {
            const response = await axios.get(`${URLfinal}pedido`, {
                params: {
                    _id,
                    pedidoId
                }
            });
            const data = response.data;
            //console.log(data);
            xset(data);
            return data;
        } catch (error) {
            console.log(error);
        }
    } else {
        console.log("No tienes acceso");
    }
};

//Actualizar Pedido unico   Ene ste caso solo sera necesario actulizar el campo de estado
export const actualizarPedido = async (_id, pedidoId, estado) => {
    try {
        const response = await axios.put(`${URLfinal}pedido`, {
            _id,
            pedidoId,
            estado

        });
        console.log(response.data);
    } catch (error) {
        console.log(error);
    }
};



