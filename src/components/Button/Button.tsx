import Image from "next/image"

interface ButtonProps {
  icon: string
  text: string
}

export function Button({text, icon, ...rest}: ButtonProps) {
  return (
    <button {...rest} className="flex items-center justify-center gap-2 h-12 py-6 px-4 rounded bg-[#0064C8] hover:bg-[#3383D3]">
      <Image src={icon} alt=""/>
      <p className="text-[#fff]">{text}</p>
    </button>
  )
}