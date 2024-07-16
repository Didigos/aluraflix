import Cabecalho from "components/Cabecalho";
import Footer from "components/Footer";
import Inicio from "pages/Inicio";
import NaoEncontrada from "pages/NaoEncontrada";
import Player from "pages/player";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Cabecalho />
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/:id" element={<Player />}></Route>
                <Route path="*" element={<NaoEncontrada />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default AppRoutes;