import LeftMenu from "../components/LeftSideBar";
import CardEncurtador from "../components/CardEncurtador";
function PaginaPrincipal() {


    return ( 
    
        <div className="flex flex-row w-screen h-screen  bg-slate-900 flex items-center"> 
           <LeftMenu/>
                       <CardEncurtador/>

            
        </div>
    )
}

export default PaginaPrincipal;
