import { Home } from "./components/Home";
import { Routes, Route } from "react-router-dom";

const App = () => {
    return (
        <section className="crearQR">

            <Routes>
                <Route path="/" element={<Home />} />

            </Routes>

        </section>
    )
}

export default App;