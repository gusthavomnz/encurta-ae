import CardEncurtadorLink from "../components/HeaderHome";
import CardListaLinks from "../components/CardListaLinks";
import { useListAllLinks } from "../hooks/useListAllLinks";
import type { getLinkRequest } from "../types/Link";
import LeftMenu from "../components/LeftSideBar";

function PaginaMeusLinks() {
  const { data, isLoading } = useListAllLinks();
  const listaDeLinks = data?.Links || [];

  return (
    <div className="flex flex-row w-screen h-screen bg-slate-300  font-sans overflow-hidden">
      

      <LeftMenu />


      <div className="flex-1 h-full overflow-y-auto flex flex-col">
        

        <header className="w-full max-w-5xl mx-auto pt-12 px-8 flex flex-col gap-1">
          <h1 className="text-3xl font-bold text-slate-800  font-display">
            Meus Links Encurtados
          </h1>
          <p className="text-slate-500 text-sm">
            Gerencie, copie e acompanhe as estatísticas de acesso dos seus links.
          </p>
        </header>

        <main className="w-full max-w-5xl mx-auto px-8 py-8 flex flex-col gap-4 flex-1">
          

          {!isLoading && listaDeLinks.length === 0 && (
            <div className="p-6 text-center border border-slate-200 rounded-2xl bg-white text-slate-500">
              Nenhum link encurtado por aqui ainda.
            </div>
          )}

          {listaDeLinks.map((link: getLinkRequest) => (
            <CardListaLinks
              key={link.id}
              id={link.id}
              shortCode={link.shortCode}
              expiresAt={link.expiresAt}
              redirectUrl={link.redirectUrl}
              clickCount={link.clickCount}
            />
          ))}
        </main>

      </div>
    </div>
  );
}

export default PaginaMeusLinks;