"use client"

import Image from "next/image"
import Link from "next/link"

import logo from '../../../public/logo_full.svg'

import { Button } from "../ui/button"
import { LogIn, Menu, X } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleNav = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <header className="w-full px-6 py-2 2xl:px-16 h-24 shadow-sm bg-[white]">
      <div className="h-full w-full flex items-center justify-between">
        <Link href={"/"}>
          <Image src={logo} width="156" height="50" alt="Logo Pescarte" priority />
        </Link>
        <div className="hidden md:block">
          <Link href={"/pages/login"}>
            <Button variant="submit" className="w-32 h-12">
              <LogIn className="mr-4" size={20}/>
              Acessar
            </Button>
          </Link>
        </div>
        <div onClick={handleNav} className="sm:hidden cursor-pointer pl-24">
          <Menu size={25} />
        </div>
      </div>
      <div className={
        menuOpen
          ? "fixed z-10 left-0 top-0 w-[75%] bg-slate-200 sm:hidden h-screen p-10 ease-in duration-500"
          : "fixed left-[-100%] w-[75%] h-screen top-0 p-10 ease-in duration-500"
      }>
        <div className="flex w-full items-center justify-end">
          <div onClick={handleNav} className="cursor-pointer">
            <X size={25} />
          </div>
        </div>
        <div className="py-4">
          <Link href={"/pages/login"}>
            <Button variant="submit" className="w-32 h-12">
              <LogIn className="mr-4" size={20} />
              Acessar
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}