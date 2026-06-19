import { Cross1Icon } from "@radix-ui/react-icons";
import { useState } from "react";
import ConfirmButton from "./ui/ConfirmBotton";
import { Link2Icon } from "@radix-ui/react-icons";
import { CalendarIcon } from "@radix-ui/react-icons";
import {GlobeIcon} from "@radix-ui/react-icons";
import { useDeleteLink } from "../hooks/useDeleteLink";
import type { deleteLinkRequest } from "../types/Link";

interface ModalEditExpiresAtProps {
  isOpen: boolean;
  onClose: () => void;
  linkId: string;
  linkEncurtado: string;
  linkOriginal: string;
  dataExpiracao: string;
  userId: string
}

function DeleteLinkModal({
  isOpen,
  onClose,
  linkId,
  linkEncurtado,
  linkOriginal,
  dataExpiracao,
  userId
}: ModalEditExpiresAtProps) {
  const [modalDeletarLink, setModalDeletarLink] = useState(true);
  const { mutate: setLogicaDeletarLink, isPending, isSuccess, isError } = useDeleteLink()
  

  if (isOpen == false) return null;


  const handleDeletarLink = async (e: React.FormEvent)=> {
    const data: deleteLinkRequest = {linkId, userId} 
    setLogicaDeletarLink(data)
  }


  return (
    <div className="h-full  w-full flex justify-center items-center z-10 fixed inset-0 bg-black/50 backdrop-blur-md">
      <div className="bg-gray-100 w-100 h-100 rounded-2xl relative flex flex-col justify-between overflow-hidden">
        <button
          onClick={onClose}
          className="flex absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors"
        >
          {" "}
          <Cross1Icon />{" "}
        </button>

        <div className="w-full">
          <p className="flex text-left mt-4 font-bold  text-3xl font-sans py-0.5 px-2 ">
            Deletar link encurtado
          </p>
          <spam className="flex text-left text-xs px-2">
            Atenção: essa ação é permanente e irreversivel. Caso deseja apenas
            alterar a data de expiração, clique aqui.
          </spam>
        </div>

        <div className="flex flex-col text-left px-2">
          <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5">
            Confira os Detalhes:
          </p>

          <div className="flex justify-center flex flex-col bg-gray-900 rounded-2xl font-semibold font-bold text-white font-sans p-6">
            <h1 className="break-all flex flex-row items-center gap-2">
              {" "}
              <Link2Icon />: {linkEncurtado}{" "}
            </h1>
            <h1 className="break-all flex flex-row items-center gap-2">
                <GlobeIcon/>: {linkOriginal} 
            </h1>
            <h1 className="break-all flex flex-row items-center gap-2">
              {" "}
              <CalendarIcon />: Data de Expiração: {dataExpiracao}{" "}
            </h1>
          </div>
        </div>

        <div className="bottom w-full h-20 bottom flex-row px-4 ">
          <button
            type="button"
            onClick={(e) => console.log("cliquei no cancelar")}
            className="bg-white w-1/2 h-10 rounded-2xl border-2"
          >
            <h1 className="font-bold font-sans"> Cancelar</h1>
          </button>

          <button
            type="button"
            onClick={handleDeletarLink}
            className="bg-gray-900 w-1/2 h-10 rounded-2xl border-2 border-gray-200 shadow-2xl shadow-white"
          >
            <h1 className="font-bold text-white font-sans"> Deletar </h1>
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteLinkModal;
