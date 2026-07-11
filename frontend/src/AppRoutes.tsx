import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthGuard from "./components/AuthGuard";
import PaginaLogin from "./pages/PaginaLogin";
import PaginaRegister from "./pages/PaginaRegister";
import PaginaNotFound from "./pages/PaginaNotFound";
import PaginaPrincipal from "./pages/PaginaPrincipal";
import PaginaRedirecionamento from "./pages/PaginaRedirecionamento";
import PaginaMeusLinks from "./pages/PaginaMeusLinks";
import PaginaLinksBio from "./pages/PaginaLinksBio";
import PaginaEstatisticas from "./pages/PaginaEstatisticas";
import PaginaProfile from "./pages/PaginaProfile";

function AppRoutes() {

return (
    <BrowserRouter> 
    <Routes>
        <Route path="/:code" element ={<PaginaRedirecionamento/>} />
        <Route path="/" element={<PaginaLogin/>} />
        <Route path="/login" element={<PaginaLogin/>} />
        <Route path="/register" element={<PaginaRegister/>} /> 
        <Route path="/404" element={<PaginaNotFound/>}/>
        <Route path="/meus-links" element={<PaginaMeusLinks/>}/>
        <Route path="/links-bio" element={<PaginaLinksBio/>}/>
        <Route path="/estatisticas" element={<PaginaEstatisticas/>}/>
        <Route element={<AuthGuard />}>
            <Route path="/home" element={<PaginaPrincipal/>} />
            <Route path="/profile" element={<PaginaProfile/>} />
        </Route>
    </Routes> 
</BrowserRouter>
)
}

export default AppRoutes;