import LeftMenu from "../components/LeftSideBar";
import { PersonIcon, LockClosedIcon, EnvelopeClosedIcon } from "@radix-ui/react-icons";
import { Toggle } from "../components/ui/Toggle";

function PaginaProfile() {

  return (
    <div className="flex flex-row w-screen h-screen bg-slate-900">
      <LeftMenu />

      <div className="flex-1 flex flex-col items-center overflow-y-auto p-8">
        <div className="w-full max-w-4xl flex flex-col py-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center shrink-0">
              <PersonIcon width={32} height={32} className="text-white/60" />
            </div>
            <div>
              <h1 className="text-white text-2xl font-semibold">Configurações do Perfil</h1>
              <p className="text-white/50 text-sm">Gerencie suas informações e preferências</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">

            <div className="bg-white rounded-2xl p-6 shadow-lg shadow-black/20 flex flex-col gap-5">
              <h2 className="text-lg font-semibold text-slate-800">Dados Pessoais</h2>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm text-gray-500 font-medium">Nome</label>
                <input
                  type="text"
                  placeholder="Seu nome"
                  className="w-full h-11 px-4 bg-gray-100 rounded-lg text-slate-800 outline-none focus:ring-2 focus:ring-slate-400 transition-shadow placeholder:text-gray-400"
                />
                <span className="text-xs text-amber-600">Você pode alterar seu nome a cada 30 dias</span>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm text-gray-500 font-medium">E-mail</label>
                <div className="flex items-center gap-2 w-full h-11 px-4 bg-gray-100 rounded-lg">
                  <EnvelopeClosedIcon className="text-gray-400 shrink-0" />
                  <input
                    type="email"
                    placeholder="email@provedor.com"
                    disabled
                    className="flex-1 bg-transparent text-slate-800 outline-none disabled:text-gray-400 placeholder:text-gray-400"
                  />
                  <LockClosedIcon className="text-gray-300 shrink-0 w-4 h-4" />
                </div>
              </div>
            </div>


            <div className="bg-white rounded-2xl p-6 shadow-lg shadow-black/20 flex flex-col gap-5">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-slate-800">Alterar Senha</h2>
                <span className="text-xs text-amber-600">Permitido a cada 7 dias</span>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm text-gray-500 font-medium">Senha atual</label>
                <div className="flex items-center gap-2 w-full h-11 px-4 bg-gray-100 rounded-lg">
                  <LockClosedIcon className="text-gray-400 shrink-0" />
                  <input type="password" placeholder="Senha atual" className="flex-1 bg-transparent text-slate-800 outline-none placeholder:text-gray-400" />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm text-gray-500 font-medium">Nova senha</label>
                <div className="flex items-center gap-2 w-full h-11 px-4 bg-gray-100 rounded-lg">
                  <LockClosedIcon className="text-gray-400 shrink-0" />
                  <input type="password" placeholder="Nova senha" className="flex-1 bg-transparent text-slate-800 outline-none placeholder:text-gray-400" />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm text-gray-500 font-medium">Confirmar nova senha</label>
                <div className="flex items-center gap-2 w-full h-11 px-4 bg-gray-100 rounded-lg">
                  <LockClosedIcon className="text-gray-400 shrink-0" />
                  <input type="password" placeholder="Confirme a senha" className="flex-1 bg-transparent text-slate-800 outline-none placeholder:text-gray-400" />
                </div>
              </div>
            </div>
          </div>


          <div className="bg-white rounded-2xl p-6 shadow-lg shadow-black/20 flex flex-col gap-5 mb-6">
            <h2 className="text-lg font-semibold text-slate-800">Preferências</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
              <Toggle
                label="Tema escuro"
                description="Alternar entre tema claro e escuro"
              />
              <Toggle
                label="Notificações por e-mail"
                description="Receber atualizações sobre seus links por e-mail"
              />
              <Toggle
                label="Links públicos por padrão"
                description="Novos links criados ficam visíveis publicamente"
              />
              <Toggle
                label="Relatórios semanais"
                description="Receber estatísticas dos links toda semana"
              />
            </div>
          </div>


          <div className="flex gap-4">
            <button className="flex-1 h-11 bg-gray-700 hover:bg-gray-800 text-white font-medium rounded-lg transition-colors">
              Salvar alterações
            </button>
            <button className="flex-1 h-11 bg-red-50 hover:bg-red-100 text-red-600 font-medium rounded-lg transition-colors">
              Excluir conta
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PaginaProfile;