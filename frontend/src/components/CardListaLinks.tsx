import imgCalendar from "../assets/editCalendar.png";
import imgViewsLink from "../assets/visualizacoesLink.png";
import imgLixeira from "../assets/iconDelete.png";
import CardLogin from "./CardLogin";

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
  const previewRedirectUrl = redirectUrl
    .replace(/^https?:\/\//, "")
    .substring(0, 22);
  const dataDiaMesAno = expiresAt.substring(0, 10);
  const HoraMinuto = expiresAt.substring(12, 19);

  return (
    <div className=" w-full h-24 md:h-12 md:w-4/5 p-0.5 flex flex-col md:flex-row justify-between rounded-2xl overflow-hidden border-2">
      <div className="bg-white h-1/2 md:h-full flex flex-row">
        <div className="flex items-center truncate px-2">
          <p className="px-2 text-xl">{linkEncurtadoCompleto} </p>
        </div>

        <div className="flex  justify-end text-2xl px-2 flex-row  items-center">
          <img src={imgViewsLink} className="p-2 h-full items-center " />
          <span>{clickCount}</span>
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
          <p>ás: {HoraMinuto}</p>
        </div>

        <div className="h-full flex flex-row shrink-0">
          <button onClick={(e) => console.log("Ainda não implementei editar expiração!") }className="bg-white h-full w-12 hover:bg-gray-100 transition-colors flex items-center justify-center border-r border-gray-200">
            <img
              src={imgCalendar}
              className="h-full p-2.5"
              alt="Editar Calendário"
            />
          </button>

          <button
            onClick={(e) => console.log("Ainda não implementei deletar!")}
            className="h-full w-12  flex items-center justify-center"
          >
            <img src={imgLixeira} className="h-full p-2.5" alt="Deletar" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardListaLinks;
