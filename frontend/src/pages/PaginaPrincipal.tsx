import CardEncurtadorLink from "../components/HeaderHome";
import CardListaLinks from "../components/CardListaLinks";
import type { allLinkRequest } from "../types/Link";
import { useListAllLinks } from "../hooks/useListAllLinks";
import type { getLinkRequest } from "../types/Link";
import LeftMenu from "../components/LeftSideBar";
function PaginaPrincipal() {
    const {data, isLoading} = useListAllLinks()
    const listaDeLinks = data?.Links || [];

    return ( 
    
        <div className="flex flex-col w-screen min-h-full overflow-y-auto md:overflow-hidden "> 
           <LeftMenu/>

                <div className="w-full h-full">
                    <CardEncurtadorLink />
                </div>
        

           {/* Div da lista de links */}
            <div className="h-screen  w-full flex flex-row bg-gradient-to-b from-[#27272A] via-[#1C1C1F] to-[#0A0A0B] ">
            <div className="flex flex-col  items-center w-full gap-1 py-20 ">
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
    
                
            </div>
            
        </div>
    )
}

export default PaginaPrincipal;
