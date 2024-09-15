import logo from '../assets/logo-qr-generator.svg';
import { useValidarURL } from '../hooks/useValidarURL';

export const Home = () => {

    const { textoInput, setTextoInput, validarURL, classNameInput, error } = useValidarURL()

    return (

        <div className="crearQR__contenido">
            <img src={logo} />

            <div className={classNameInput}>
                <input type="text" placeholder='Introduce una URL....'
                    value={textoInput}
                    onChange={(e) => setTextoInput(e.target.value)} />
                <button onClick={validarURL}>Crear QR</button>
            </div>

            <small hidden={!error}>Introduce una URL válida</small>
        </div>
    )
}
