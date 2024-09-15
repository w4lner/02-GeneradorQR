import { useState } from "react"
import { useNavigate  } from "react-router-dom";

export const useValidarURL = () => {
    const [textoInput, setTextoInput] = useState('');
    const [error, setError] = useState(false);

    const [classNameInput, setClassNameInput] = useState('crearQR__contenedorInput');

    const navigate = useNavigate();

    const validarURL = () => {
        const regexValidarURL = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;

        if (!textoInput.match(regexValidarURL)) {
            setError(true)
            setClassNameInput(`crearQR__contenedorInput invalido`);
        }else{
            setError(false)
            setClassNameInput(`crearQR__contenedorInput`);
            navigate(`/qr?url=${encodeURIComponent(textoInput)}`);
        }
    };

    return {
        textoInput,
        setTextoInput,
        validarURL,
        classNameInput,
        error
    }
}
