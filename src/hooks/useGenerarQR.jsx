import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useRef, useEffect } from 'react';
import qrcode from 'qrcode';

export const useGenerarQR = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const urlParam = searchParams.get('url');
    const navigate = useNavigate();


    const canvasRef = useRef(null);

    useEffect(() => {
        if (canvasRef.current && urlParam) {
            qrcode.toCanvas(canvasRef.current, urlParam, {
                errorCorrectionLevel: 'H',
                margin: 0,
                scale: 100,
                color: {
                    light: '#EFEFF0',
                }
            }, (error) => {
                if (error) console.error(error);
            });

            canvasRef.current.removeAttribute('style');
        } else {
            navigate(`/`);
        }
    }, [urlParam]);

    const handleDownload = async () => {
        if (canvasRef.current) {
            const image = await qrcode.toDataURL(urlParam, {
                errorCorrectionLevel: 'H',
                margin: 1,
                scale: 12,
                color: {
                    light: '#EFEFF0',
                }
            });

            const link = document.createElement('a');
            link.href = image;
            link.download = 'qr-code.png';

            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    };


    return {
        urlParam, canvasRef, handleDownload, location
    };
};
