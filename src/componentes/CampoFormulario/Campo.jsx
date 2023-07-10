
import './campo.css'

const Campo = (props) => {

    const {valor , place , actualizarvalor , obligatorio , tipo , span , titulo , inputColor} = props

    const manejarCambio = (event) => {
        actualizarvalor(event.target.value)
    }

    const t = span
    

    const mystyle = {
        backgroundColor: inputColor,
    }
   

    return (
        <div className={`campo campo-${tipo}  form-item`  } >
            
            <div className='f' dangerouslySetInnerHTML={{ __html: t }} />

            <div className='lab'>
                <label htmlFor="">{titulo}</label>
            </div>
            

            <input style={mystyle}

                placeholder={place}
                required={obligatorio}
                value={valor}
                onChange={manejarCambio}
                type={tipo}
                
            />
        </div>
    );
}

export default Campo