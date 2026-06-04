import { BrowserRouter, Route, Routes } from "react-router-dom";
import PaginaLogin from "./pages/PaginaLogin";
import PaginaRegister from "./pages/PaginaRegister";

function AppRoutes() {

return (
    <BrowserRouter> 
    <Routes>
        <Route path="/login" element={<PaginaLogin/>} />
        <Route path="/register" element={<PaginaRegister/>} /> 
        <Route path="*" element={<h1> Endereço inexistente</h1>} />
    </Routes> 
</BrowserRouter>
)
}

export default AppRoutes;