import imagemEncurtadorLink from '../assets/homePageIcon.svg'
import ConfirmButton from './ui/ConfirmBotton'


function CardEncurtadorLink() {
    return (
        <div className="w-full h-full flex flex-col md:flex-row md:bg-white bg-[radial-gradient(#9ca3af_1px,transparent_1px)] bg-[size:20px_20px]">
            {/* Imagem a esquerda */}
            <div className="w-full h-[50vh] md:w-1/3 md:h-full flex justify-center items-center shrink-0 bg-white">
                <img src={imagemEncurtadorLink} alt="Icon" className="h-full w-full object-contain" />
            </div>

           {/* Conteudo + enviar link a ser encurtado: */}
            <div className="w-full h-[50vh] md:w-2/3 md:h-full shrink-0 md:px-32 md:py-32 px-2 py-2 md:bg-white ">
                <div className="md:w-full md:h-full border-4 border-amber-200 bg-amber-100 rounded-4xl justify-center items-center py-16 p-4 ">
                    <p className= "text-gray-800 font-bold text-4xl  px-2"> Encurte seu link e utilize como quiser!</p>
                    <form className="w-full h-full flex flex-col justify-center bg-green items-center gap-4 p-4"> 
                        <input type = "text" placeholder = "Cole seu link aqui..." className= "w-100 h-10  h-8 bg-white rounded-2xl border-2 border-amber-200" />
                        <ConfirmButton textoBotao= "Encurtar"
                         />
                    </form>

                </div>
            </div>
        </div>
    )
}

export default CardEncurtadorLink;