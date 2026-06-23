import { useState } from "react";
import { useCreateLink } from "../hooks/useCreateLink";
import { LightningBoltIcon, CalendarIcon } from "@radix-ui/react-icons";

function CardEncurtador() {
  const [redirectUrl, setRedirectUrl] = useState("");
  const [expiresAt, setExpiresAt] = useState("");

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

    mutate({ redirectUrl, expiresAt: new Date(expiresAt) });
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-4">
      <div className="flex flex-col items-center text-center mb-10">
        <h1 className="font-sans text-white text-5xl md:text-6xl font-semibold">
          Encurta-Aê
        </h1>
        <h2 className="font-sans text-white/70 text-lg md:text-xl mt-4 max-w-xl">
          Seu encurtador de links favorito! Como podemos te ajudar hoje?
        </h2>
      </div>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg flex flex-col items-center gap-3"
      >
        <div className="w-full flex items-center bg-white rounded-full pl-5 pr-1.5 py-1.5 shadow-lg shadow-black/20 ">
          <input
            type="text"
            placeholder="Cole o link que você quer encurtar"
            value={redirectUrl}
            onChange={(e) => setRedirectUrl(e.target.value)}
            className="flex-1 h-10 bg-transparent text-slate-900 placeholder-slate-900/50 outline-none text-sm md:text-base"
          />
        </div>

        <label className="w-full flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-5 py-2 text-white/70 text-sm focus-within:border-white/40 transition-colors">
          <CalendarIcon className="text-white/50" />
          <span className="text-white/50">Expira em:</span>
          <input
            type="date"
            value={expiresAt}
            onChange={(e) => setExpiresAt(e.target.value)}
            className="bg-transparent text-white outline-none flex-1 [color-scheme:dark]"
          />
        </label>

        <button
          type="submit"
          disabled={isPending}
          className="flex items-center gap-2 bg-white hover:bg-white/90 text-slate-900 font-semibold text-sm md:text-base px-5 h-10 rounded-full transition-colors disabled:opacity-60 disabled:cursor-not-allowed w-full justify-center items-center"
        >
          {isPending ? "Encurtando..." : "Encurtar"}
          <LightningBoltIcon />
        </button>
      </form>
    </div>
  );
}

export default CardEncurtador;
