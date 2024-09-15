import { useState } from "react";
import iconoCheck from '../assets/check-svgrepo-com.svg';
import iconoError from '../assets/error-svgrepo-com.svg';

export const useCompartir = () => {
    const [copiado, setCopiado] = useState(false);
    const [errorCopia, setErrorCopia] = useState(false);
    const [timeoutId, setTimeoutId] = useState(null);

    const urlActual = location.href;

    const compartir = async () => {
        try {
            await navigator.clipboard.writeText(urlActual);
            setCopiado(true);

            const id = setTimeout(() => {
                setCopiado(false);
            }, 3000);
            setTimeoutId(id);

        } catch (error) {
            console.error('Error al copiar al portapapeles:', error);
            setErrorCopia(true);

            const id = setTimeout(() => {
                setErrorCopia(false);
            }, 3000);
            setTimeoutId(id);
        }
    };

    const renderNotificacion = () => {
        if (copiado) {
            return (
                <div className='notificacion' onClick={() => {
                    setCopiado(false);
                    clearTimeout(timeoutId);
                }}>
                    Enlace copiado al portapapeles <img src={iconoCheck} alt="Check icon" />
                </div>
            );
        }
        if (errorCopia) {
            return (
                <div className='notificacion error' onClick={() => {
                    setErrorCopia(false);
                    clearTimeout(timeoutId);
                }}>
                    No se pudo copiar el enlace <img src={iconoError} alt="Error icon" />
                </div>
            );
        }
    };

    return {
        compartir,
        renderNotificacion
    };
};