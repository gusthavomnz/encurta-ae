import LeftMenu from "../components/LeftSideBar";
import CardEncurtador from "../components/CardEncurtador";
function PaginaPrincipal() {


    return ( 
    
        <div className="flex flex-col w-screen min-h-full overflow-y-auto md:overflow-hidden bg-yellow-600"> 
           <LeftMenu/>
           <CardEncurtador/>
            
        </div>
    )
}

export default PaginaPrincipal;
