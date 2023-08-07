import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

export default function Home() {
  
  return (
    <>
      <Header />
      <main className="w-full">
        <div className={`min-h-screen flex items-center justify-center bg-fixed bg-cover bg-center`} style={{backgroundImage: "url(https://pescarte.uenf.br/images/fish_background-c4aaa0426c2ea6898aa748f3520e654f.svg?vsn=d)"}}>
          <form className="h-[37.125rem] w-[39.75rem] flex flex-col items-center gap-12 p-16 rounded-3xl bg-white">
            <h3 className="text-2xl font-bold text-[#404040]">Faça login para acessar a plataforma</h3>
            <div className="flex flex-col gap-1 w-[27.25rem] h-[5.25rem]">
              <label htmlFor="" className="text-xl">CPF</label>
              <input
                type="text" 
                name="cpf"
                className="border border-zinc-200 shadow-sm rounded h-12 mt-3 p-3  focus:outline-none focus:border-[#3383D3] focus:ring-1 focus:ring-[#3383D3]"
                required
              />
            </div>
            <div className="flex flex-col gap-1 w-[27.25rem] h-[5.25rem]">
              <label htmlFor="" className="text-xl">Senha</label>
              <input
                type="password" 
                name="password"
                className="border border-zinc-200 shadow-sm rounded h-12 mt-3 p-3  focus:outline-none focus:border-[#3383D3] focus:ring-1 focus:ring-[#3383D3]"
                required
              />
            </div>
            <div className="w-[27.25rem] flex justify-between">
              <div className="flex gap-1 items-center">
                <input type="checkbox" value="" className="appearance-none h-5 w-5 outline-none before:pointer-events-none rounded border border-solid border-zinc-200 focus:ring-blue-500 checked:bg-[#3383D3]"/>
                <label className="text-sm">Lembre de mim</label>
              </div>
              <a className="text-sm font-semibold text-[#404040]" href="https://pescarte.uenf.br/usuarios/recuperar_senha">
                Esqueci minha senha
              </a>
            </div>
            <button 
              type="submit" 
              className="w-[27.25rem] flex items-center justify-center gap-2 h-12 py-6 px-4 rounded text-white bg-[#0064C8] hover:bg-[#3383D3]"
            >
              Acessar
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </>
  )
}
