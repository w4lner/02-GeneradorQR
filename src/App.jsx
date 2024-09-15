import { Home } from "./components/Home";
import { Routes, Route } from "react-router-dom";
import { QRGenerado } from "./components/QRGenerado";

const App = () => {
    return (
        <section className="crearQR">

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/qr" element={<QRGenerado />} />
            </Routes>

        </section>
    )
}

export default App;