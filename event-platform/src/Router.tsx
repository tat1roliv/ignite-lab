import { Routes, Route } from "react-router-dom";
import { Evento } from "./pages/Evento"

export function Router() {
    return(
        <Routes>
            <Route path="/" element={<h1>home</h1>}/>
            <Route path="/evento" element={ <Evento /> }/>
        </Routes>
    )
}