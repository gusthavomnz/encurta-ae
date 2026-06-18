import { Cross1Icon } from "@radix-ui/react-icons";
import { useState } from "react";
import ConfirmButton from "./ui/ConfirmBotton";

interface ModalEditExpiresAtProps {

    isOpen: boolean;
    onClose: () => void;
    linkId: string;
    linkEncurtado: string;
    linkOriginal: string;
    dataExpiracao: string;
    
}



function DeleteLinkModal({isOpen,onClose,linkId,linkEncurtado,linkOriginal,dataExpiracao}: ModalEditExpiresAtProps) {


    const [modalDeletarLink, setModalDeletarLink] = useState(true)

    if (isOpen==false) return null;


    return (
        <div className="h-full  w-full flex justify-center items-center z-10 fixed inset-0 bg-black/50 backdrop-blur-md">
            <div className="bg-white w-100 h-100 rounded-2xl relative flex flex-col justify-between"> 
                <button onClick={onClose}className=" absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors">  <Cross1Icon/>  </button>
                            <h1> aqui é o modal de deletar link</h1>

                            <div>
                                {linkEncurtado}
                                {linkOriginal}
                                {dataExpiracao}

                        
                            </div>





                <div className="bg-pink-400 bottom w-full h-20 bottom flex-row "> 

                    <button type="button" onClick={(e)=> console.log('cliquei no cancelar')} className="bg-red-700 w-1/2 h-10 rounded-2xl">
                        <h1 className="font-bold "> Botão de Cancelar</h1>
                    </button>

                    <button type="button" onClick={(e)=> console.log('cliquei no deletar!')} className="bg-blue-700 w-1/2 h-10 rounded-2xl"> 
                        <h1 className="font-bold "> Botão de Deletar! </h1>
                    </button>

                </div>
            </div>


            </div>

    )

}

export default DeleteLinkModal;