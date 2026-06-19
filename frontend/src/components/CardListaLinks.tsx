import CardLogin from "./CardLogin";
import { useCreateQrCode } from "../hooks/useCreateQrCode";
import { useEditData } from "../hooks/useEditDateLink";
import { CalendarIcon, TrashIcon, EyeOpenIcon, ClipboardCopyIcon } from "@radix-ui/react-icons";
import { useState, useRef } from "react";
import ModalEditExpiresAt from "./ModalEditExpiresAt";
import DeleteLinkModal from "./DeleteLinkModal";

interface CardListaLinksProps {
  id: string;
  shortCode: string;
  redirectUrl: string;
  clickCount: number;
  expiresAt: string;
}

function CardListaLinks({
  id,
  shortCode,
  redirectUrl,
  clickCount,
  expiresAt,
}: CardListaLinksProps) {
  const urlDoFront = window.location.origin;
  const linkEncurtadoCompleto = `${urlDoFront}/${shortCode}`;

  const { refetch } = useCreateQrCode(linkEncurtadoCompleto);
  const { mutate: atualizarDataNoBanco } = useEditData();

  const handleButtonClickQrCode = () => {
    refetch(); 
  }; 

  const handleButtonCopyLink = () => {
    navigator.clipboard.writeText(linkEncurtadoCompleto);
    alert("Link copiado!");
  };

  const previewRedirectUrl = redirectUrl
    .replace(/^https?:\/\//, "")
    .substring(0, 22);

  const [editedExpiresAt, setEditedExpiresAt] = useState("");
  const dateInputRef = useRef<HTMLInputElement>(null);

  const dataDiaMesAno = editedExpiresAt ? editedExpiresAt : (expiresAt ? expiresAt.substring(0, 10) : "");
  const HoraMinuto = expiresAt ? expiresAt.substring(12, 19) : "";
  const [modalCalendario, setModalCalendario] = useState(false)
  const [modalDeletarLink, setModalDeletarLink] = useState(false)

  function AbrirModalCalendario(){
    setModalCalendario(true)
  }

  function AbrirModalDeletarLink(){
  setModalDeletarLink(true)
  }

const idUserLogado = localStorage.getItem("userId");

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const novaDataStr = e.target.value;
    if (!novaDataStr) return;

  
    if (!idUserLogado) {
      alert("Usuário não autenticado!");
      return;
    }

    setEditedExpiresAt(novaDataStr);

    const dataObjeto = new Date(novaDataStr);

    atualizarDataNoBanco({
      idLinkRequest: id,
      idUserRequest: idUserLogado,
      newExpiresAt: dataObjeto
    });
  };

  return (
    <div className="w-full h-24 md:h-12 md:w-4/5 p-0.5 flex flex-col md:flex-row justify-between rounded-2xl  border-2 bg-white ">
      <div className="h-1/2 md:h-full flex flex-row">
        <div className="flex items-center truncate px-2">
          <p className="px-2 text-xl">{linkEncurtadoCompleto}</p>
          <button onClick={handleButtonCopyLink} className="">
            <ClipboardCopyIcon/> 
          </button>
        </div>

        <div className="flex justify-end text-2xl px-2 flex-row items-center">
          <EyeOpenIcon/>
          <span className="px-2 text-xl p-2">{clickCount}</span>
        </div>
      </div>

      <div className="h-1/2 md:h-full md:w-1/2 flex flex-row items-center justify-between">
        <div className="bg-white h-full flex items-center px-2 flex-1 min-w-0">
          <p className="px-2 text-xl text-gray-600 truncate">
            {previewRedirectUrl}...
          </p>
        </div>

        <div className="flex flex-col h-full shrink-0 w-24 py-0 m-0 p-0 leading-none text-[12px] justify-center px-1">
          <p>Exp: {dataDiaMesAno}</p>
          <p>às: {HoraMinuto}</p>
        </div>

        <div className="h-full flex flex-row shrink-0">
          <button 
            type="button"
            onClick={AbrirModalCalendario} 
            className="bg-white h-full w-12 hover:bg-gray-100 transition-colors flex items-center justify-center border-l border-r border-gray-200"
          >
            <CalendarIcon/>
          </button>

          <button
            type="button"
            onClick={AbrirModalDeletarLink}
            className="h-full w-12 flex items-center justify-center text-red-500"
          >
            <TrashIcon/>
          </button>
        </div>
      </div>

      <ModalEditExpiresAt 
        isOpen={modalCalendario} 
        onClose={()=> setModalCalendario(false)}
        idLink={id}
      />


      <DeleteLinkModal
      isOpen={modalDeletarLink}
      onClose={()=> setModalDeletarLink(false)}
      linkEncurtado={linkEncurtadoCompleto}
      linkOriginal={redirectUrl}
      dataExpiracao={dataDiaMesAno}
      linkId={id}
      userId={idUserLogado}
      />


    </div>
  );
}

export default CardListaLinks;