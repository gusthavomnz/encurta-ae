import ConfirmButton from "./ui/ConfirmBotton";
import { useState } from "react";
import { useCreateLink } from "../hooks/useCreateLink";
import { ButtonIcon } from "@radix-ui/react-icons";
import {LightningBoltIcon} from "@radix-ui/react-icons";

function CardEncurtador() {
  const [redirectUrl, setRedirectUrl] = useState("");
  const [expiresAt, setExpiresAt] = useState("");
  const usuarioId = localStorage.getItem("userId") || "";

  const { mutate, isSuccess, isError, isPending } = useCreateLink();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!redirectUrl) {
      alert("Informe o link");
      return;
    }

    if (!expiresAt) {
      alert("Informe a data de expiração");
      return;
    }

    mutate({ redirectUrl, expiresAt: new Date(expiresAt), usuarioId });
  };
  return (
    <div className="w-full h-[50vh] md:w-2/3 md:h-full shrink-0 md:px-32 md:py-32 px-2 py-2 backdrop-blur-2xl">
      
      <div className="md:w-full md:h-full border-1 border-white/50 bg-mist-700/50 backdrop-blur-2xl justify-center items-center py-16 p-4 rounded-4xl ">
        <p className="font-sans text-white px-4 text-2xl">
          Encurte seu link e utilize como quiser!
        </p>
        <span className="font-sans text-white/50 text-sm px-4"> Links curtos, rastreáveis e com expiração automática. </span>
        <form
          onSubmit={handleSubmit}
          className="w-full h-full flex flex-col justify-center bg-green items-center gap-4 p-4"
        >
          <input
            type="text"
            placeholder="Cole seu link aqui..."
            value={redirectUrl}
            onChange={(clicou) => setRedirectUrl(clicou.target.value)}
            className="w-full h-12 bg-white/5 border border-white/10 rounded-2xl px-4 text-white placeholder-white/40 outline-none focus:border-white/60 focus:bg-white/10 transition-colors"
          />
          <input 
            type="date"
            placeholder="Cole sua data aqui..."
            value={expiresAt}
            onChange={(clicou) => setExpiresAt(clicou.target.value)}
            className="w-full h-12 bg-white/5 border border-white/10 rounded-2xl px-4 text-white placeholder-white/40 outline-none focus:border-white/60 focus:bg-white/10 transition-colors"
          />

        <button className="w-full px-4 h-10 border-2 border-white/50 rounded-2xl "> 
            <p className="font-sans items-center text-xl text-white px-2 flex justify-center gap-4"> Encurtar <LightningBoltIcon/> </p>

        </button>
        </form>
      </div>
    </div>
  );
}

export default CardEncurtador;
