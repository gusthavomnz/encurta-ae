import imagemEncurtadorLink from '../assets/homePageIcon.svg'

function CardEncurtadorLink() {
    return (
        <div className="w-full h-full flex flex-col md:flex-row bg-white">
            {/* Imagem a esquerda */}
            <div className="w-full h-[50vh] md:w-1/3 md:h-full flex justify-center items-center shrink-0 bg-white">
                <img src={imagemEncurtadorLink} alt="Icon" className="h-full w-full object-contain" />
            </div>

           {/* Conteudo + enviar link a ser encurtado: */}
            <div className="w-full h-[50vh] md:w-2/3 md:h-full shrink-0">
                <div className="w-full h-full bg-amber-800">
                </div>
            </div>
        </div>
    )
}

export default CardEncurtadorLink;