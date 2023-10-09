import Image from "next/image"

import log_in from 'public/log-in.svg'
import logo from 'public/logo.svg'
import { LuLogIn } from "react-icons/lu"
import Link from "next/link"

export function Header() {
  return (
    <header className="w-full flex items-center justify-between px-1 py-6 md:px-10 bg-white">
      <Link href={"/"}>
        <Image src={logo} width={156} height={50} alt="Logo Pescarte" />
      </Link>
      <Link href={"/pages/login"}>
        <button className="flex items-center justify-center gap-2 p-4 rounded bg-[#0064C8] text-white hover:bg-[#3383D3]">
          <LuLogIn className="w-6 h-6"/>
          Acessar
        </button>
      </Link>
    </header>
  )
}