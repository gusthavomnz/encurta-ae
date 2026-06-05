import CardEncurtadorLink from "../components/CardEncurtadorLink";

function PaginaPrincipal() {
    return ( 
        <div className="flex flex-col w-screen h-screen overflow-y-auto md:overflow-hidden"> 

            {/* Div da imagem(esquerda) + encurtador de links(direita)*/}
            <div className="h-auto md:h-1/2 w-full flex flex-row shrink-0">
                <div className="hidden md:block md:w-1/12 h-full bg-[radial-gradient(#9ca3af_1px,transparent_1px)] bg-[size:20px_20px]"> </div>

                <div className="w-full md:w-10/12 h-full">
                    <CardEncurtadorLink />
                </div>

                <div className="hidden md:block md:w-1/12 h-full bg-[radial-gradient(#9ca3af_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                
            </div>

           {/* Div da lista de links */}
            <div className="h-screen md:h-1/2 bg-[#bfc3c5] shrink-0">
                div de baixo
            </div>
        </div>
    )
}

export default PaginaPrincipal;