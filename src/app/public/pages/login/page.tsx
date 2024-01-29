import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header/header'
import { LoginForm } from './components/login-forms'

export default function Login() {
  return (
    <div className="flex flex-col h-screen">
      <main className="h-screen w-full flex items-center justify-center bg-fixed bg-cover bg-center" style={{backgroundImage: "url(https://pescarte.uenf.br/images/fish_background-c4aaa0426c2ea6898aa748f3520e654f.svg?vsn=d)"}}>
        <div className="w-80 m-2 md:w-[500px] flex flex-col space-y-8 items-center justify-center rounded-lg bg-white p-6 shadow">
          <h3 className="text-xl font-bold text-[#404040] text-center">Faça login para acessar a plataforma</h3>
          <LoginForm />
        </div>
      </main>
      <Footer />
    </div>
  )
}
