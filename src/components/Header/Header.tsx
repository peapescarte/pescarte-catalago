import Image from "next/image"

import { Button } from "../Button"

import log_in from 'public/log-in.svg'
import logo from 'public/logo.svg'

export function Header() {
  return (
    <header className="w-full flex items-center justify-between px-10 py-6 bg-white">
        <Image src={logo} className="w-auto h-auto max-[375px]:w-[8rem] max-[320px]:w-[6rem]" width={196} height={62} alt="" />
        <Button text="Acessar" icon={log_in}/>
    </header>
  )
}