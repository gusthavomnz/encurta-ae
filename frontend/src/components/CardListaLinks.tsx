import { useEditData } from "../hooks/useEditDateLink";
import {
  CalendarIcon,
  TrashIcon,
  EyeOpenIcon,
  ClipboardCopyIcon,
} from "@radix-ui/react-icons";
import { useState, useRef } from "react";
import ModalEditExpiresAt from "./ModalEditExpiresAt";
import DeleteLinkModal from "./DeleteLinkModal";
import qrCodeIcon from "../assets/qr-code.png";
import { QrCodeModal } from "./QrCodeModal";

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

  const { mutate: atualizarDataNoBanco } = useEditData();

  const handleButtonCopyLink = () => {
    navigator.clipboard.writeText(linkEncurtadoCompleto);
    alert("Link copiado!");
  };

  const previewRedirectUrl = redirectUrl.replace(/^https?:\/\//, "");

  const [editedExpiresAt, setEditedExpiresAt] = useState("");
  const dataDiaMesAno = editedExpiresAt
    ? editedExpiresAt
    : expiresAt
      ? expiresAt.substring(0, 10)
      : "Sem data";
  const HoraMinuto = expiresAt ? expiresAt.substring(11, 16) : ""; 

  const [modalCalendario, setModalCalendario] = useState(false);
  const [modalDeletarLink, setModalDeletarLink] = useState(false);
  const [modalGerarQrCode, setModalQrCode] = useState(false);

  return (
    <div className="w-full flex flex-row items-center justify-between p-4 rounded-xl border border-slate-200 bg-white shadow-xs hover:shadow-sm transition-shadow font-sans gap-4">
      <div className="flex-1 min-w-0 flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <p className="text-lg font-semibold text-purple-950 truncate">
            {linkEncurtadoCompleto}
          </p>
          <button
            onClick={handleButtonCopyLink}
            className="text-slate-400 hover:text-purple-600 transition-colors p-1 rounded-sm hover:bg-slate-100"
            title="Copiar link"
          >
            <ClipboardCopyIcon className="w-4 h-4" />
          </button>
        </div>
        <p className="text-sm text-slate-500 truncate" title={redirectUrl}>
          {previewRedirectUrl}
        </p>
      </div>

      <div className="flex items-center gap-6 shrink-0">
        <div
          className="flex items-center gap-1.5 text-slate-600"
          title="Total de cliques"
        >
          <EyeOpenIcon className="w-4 h-4" />
          <span className="text-sm font-medium">{clickCount}</span>
        </div>

        <div className="text-right text-xs text-slate-500 leading-tight">
          <p className="font-medium text-slate-700">Exp: {dataDiaMesAno}</p>
          {HoraMinuto && <p className="text-slate-400">às {HoraMinuto}</p>}
        </div>
      </div>

      <div className="flex items-center gap-1 border-l border-slate-100 pl-4 shrink-0">
        <button
          className="p-2 rounded-lg text-slate-500 hover:bg-slate-100 hover:text-slate-700 transition-colors"
          onClick={() => setModalQrCode(true)}
          title="Gerar QR Code"
        >
          <img
            src={qrCodeIcon}
            alt="QR Code"
            className="w-4 h-4 opacity-70 hover:opacity-100"
          />
        </button>

        <button
          type="button"
          onClick={() => setModalCalendario(true)}
          className="p-2 rounded-lg text-slate-500 hover:bg-slate-100 hover:text-slate-700 transition-colors"
          title="Alterar expiração"
        >
          <CalendarIcon className="w-4 h-4" />
        </button>

        <button
          type="button"
          onClick={() => setModalDeletarLink(true)}
          className="p-2 rounded-lg text-red-500 hover:bg-red-50 transition-colors"
          title="Excluir link"
        >
          <TrashIcon className="w-4 h-4" />
        </button>
      </div>

      <ModalEditExpiresAt
        isOpen={modalCalendario}
        onClose={() => setModalCalendario(false)}
        idLink={id}
      />
      <DeleteLinkModal
        isOpen={modalDeletarLink}
        onClose={() => setModalDeletarLink(false)}
        linkEncurtado={linkEncurtadoCompleto}
        linkOriginal={redirectUrl}
        dataExpiracao={dataDiaMesAno}
        linkId={id}
      />
      <QrCodeModal
        isOpen={modalGerarQrCode}
        onClose={() => setModalQrCode(false)}
        url={linkEncurtadoCompleto}
      />
    </div>
  );
}

export default CardListaLinks;
