import { Routes, Route } from "react-router-dom";
import { Evento } from "./pages/Evento";
import { Subscribe } from "./pages/Subscribe";

export function Router() {
    return(
        <Routes>
            <Route path="/" element={<Subscribe />}/>
            <Route path="/evento" element={ <Evento /> }/>
            <Route path="/evento/lesson/:slug" element={ <Evento /> }/>
        </Routes>
    )
}