import CardEncurtadorLink from "../components/CardEncurtadorLink";
import CardListaLinks from "../components/CardListaLinks";
import type { allLinkRequest } from "../types/Link";
import { useListAllLinks } from "../hooks/useListAllLinks";
import type { getLinkRequest } from "../types/Link";

function PaginaPrincipal() {
    const userId = localStorage.getItem('userId')
    const {data, isLoading} = useListAllLinks(userId || "")
    const listaDeLinks = data?.Links || [];
    return ( 
        <div className="flex flex-col w-screen min-h-screen overflow-y-auto md:overflow-hidden"> 

            {/* Div da imagem(esquerda) + encurtador de links(direita)*/}
            <div className="h-auto md:h-1/2 w-full flex flex-row shrink-0">
                <div className="hidden md:block md:w-1/12  bg-[radial-gradient(#9ca3af_1px,transparent_1px)] bg-[size:20px_20px]"> </div>
                <div className="w-full md:w-10/12 h-full">
                    <CardEncurtadorLink />
                </div>
                <div className="hidden md:block md:w-1/12  bg-[radial-gradient(#9ca3af_1px,transparent_1px)] bg-[size:20px_20px]"></div>           
            </div>

           {/* Div da lista de links */}
            <div className="h-screen  bg-white flex flex-row ">
            <div className="hidden md:block md:w-1/12 h-full bg-[radial-gradient(#9ca3af_1px,transparent_1px)] bg-[size:20px_20px]"> </div>
            <div className="flex flex-col  items-center w-full gap-1">
                {!isLoading && listaDeLinks.map((link: getLinkRequest) => (
                <CardListaLinks 
                key={link.id}
                id={link.id}
                shortCode={link.shortCode} 
                expiresAt={link.expiresAt} 
                redirectUrl={link.redirectUrl}
                clickCount={link.clickCount}
                  />
                  ))}

                
                </div>
            <div className="hidden md:block md:w-1/12 h-full bg-[radial-gradient(#9ca3af_1px,transparent_1px)] bg-[size:20px_20px]"> </div>
                
            </div>
            
        </div>
    )
}

export default PaginaPrincipal;