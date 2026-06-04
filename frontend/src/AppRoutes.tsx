import { BrowserRouter, Route, Routes } from "react-router-dom";
import PaginaLogin from "./pages/PaginaLogin";
import PaginaRegister from "./pages/PaginaRegister";
import PaginaNotFound from "./pages/PaginaNotFound";
import PaginaPrincipal from "./pages/PaginaPrincipal";

function AppRoutes() {

return (
    <BrowserRouter> 
    <Routes>
        <Route path="/" element={<PaginaLogin/>} />
        <Route path="/login" element={<PaginaLogin/>} />
        <Route path="/register" element={<PaginaRegister/>} /> 
        <Route path="*" element={<PaginaNotFound/>}/>
        <Route path ="/home" element={<PaginaPrincipal/>} />
    </Routes> 
</BrowserRouter>
)
}

export default AppRoutes;