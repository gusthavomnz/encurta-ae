import ImageNotFound from '../assets/pageNotFound.svg'
import { searchOriginalLink } from '../services/linkService';

function PaginaNotFound() {


    return (
        <div className = "w-full md:w-1/5 md:h-1/5 md:mx-auto min-h-screen items-center flex flex-col justify-center">
            <img src={ImageNotFound} alt="Imagem de página não encontrada" className="" /> 
            <p className="text-center text-2xl font-bold text-gray-700">Ops! Página não encontrada.</p>
        </div>
    )
}   


export default PaginaNotFound;