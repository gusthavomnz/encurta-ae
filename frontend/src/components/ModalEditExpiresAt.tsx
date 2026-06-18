import { Cross1Icon } from "@radix-ui/react-icons";
import { useState } from "react";

interface ModalEditExpiresAtProps {
  isOpen: boolean;
  onClose: () => void;
  idLink: string
}


function ModalEditExpiresAt({ isOpen, onClose, idLink }: ModalEditExpiresAtProps) {
    if (!isOpen) return null;



    return (
        <div className="h-full  w-full flex justify-center items-center z-10 fixed inset-0 bg-black/50 backdrop-blur-md"> 
        <div className="bg-white w-100 h-100 justify-center items-center rounded-2xl relative">
            <button onClick={onClose}className=" absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors">  <Cross1Icon/>  </button>

            <div className="absolute top-12 flex items-center px-2">
                <h1 className="text-2xl"> Selecione a nova data de Expiração: </h1>
            </div>
        </div>
  
        </div>

    )

    

}

export default ModalEditExpiresAt;