import React from 'react';
import { Link } from 'react-router-dom';

import { useGenerarQR } from '../hooks/useGenerarQR';

import imagen from '../assets/logo-qr-generator.svg';



export const QRGenerado = () => {
    const { canvasRef, handleDownload } = useGenerarQR();

    return (
        <div className='crearQR__contenedor'>
            <img src={imagen} className='QR__imagen' />

            <div className='QR__fondo'></div>

            <canvas ref={canvasRef} className='QR' />

            <div className='QR__botones'>
                <div className='QR__botones__principales'>
                    <button onClick={handleDownload}>
                        Descargar
                        <img src={iconoDescargar} className='descargar' />
                    </button>

                    <button onClick={compartir}>
                        Compartir
                        <img src={iconoLink} className='link' />
                    </button>
                </div>

                <Link to='/' className='back'>Volver Atrás</Link>
            </div>

            {renderNotificacion()}
        </div>
    );
};