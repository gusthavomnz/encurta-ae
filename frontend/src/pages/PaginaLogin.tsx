import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CardLogin from "../components/CardLogin"


function PaginaLogin() {
    const navigate = useNavigate()

    useEffect(() => {
        const userId = localStorage.getItem("userId")
        if (userId) {
            navigate("/home", { replace: true })
        }
    }, [navigate])

    return (
        <div className="min-h-screen flex items-start md:items-center justify-center bg-white-100 sm:bg-amber-100 bg-[radial-gradient(rgba(156,163,175,0.3)_1px,transparent_1px)] bg-[size:20px_20px] ">
            <CardLogin />
        </div>
    )
}
export default PaginaLogin