 import { Navigate, redirect, useNavigate, useParams } from "react-router-dom"
 import { searchOriginalLink } from "../services/linkService";
 import { useEffect } from "react";
 
 function PaginaRedirecionamento() {
    const {code} = useParams();



    const navigate = useNavigate();
    const url_atual = window.location.origin;
    
   useEffect(() => {
        const fetchAndRedirect = async () => {
            try {
                const data = await searchOriginalLink(code);
                if (data == null) {
                    navigate('/404')
                } else {
                    window.location.href = data.link;
                }
            } catch {
                navigate('/404')
            }
        };
        fetchAndRedirect();
    }, [navigate, url_atual]);
    
    return (
                     <h1> Carregando </h1>
    )};




    export default PaginaRedirecionamento;