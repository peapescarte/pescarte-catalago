"use client"

import Link from "next/link";

import { useState } from "react";
import { usePathname } from 'next/navigation';

import { SideBarItem } from "./constants";
import { ChevronDown } from "lucide-react";

type MenuItemProps = {
  item: SideBarItem
}

export function MenuItem({ item }: MenuItemProps) {
  const pathname = usePathname();
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const toggleSubMenu = () => {
    setSubMenuOpen(!subMenuOpen);
  };

  return (
    <div>
      {item.submenu ? (
        <>
          <button
            onClick={toggleSubMenu}
            className={`flex flex-row items-center p-2 rounded-lg text-[#707070] hover:text-white hover-bg-[#3383D3] w-full justify-between hover:bg-[#3383D3] ${
              pathname.includes(item.path) ? 'bg-[#0064C8] text-white' : ''
            }`}
          >
            <div className="flex flex-row space-x-4 items-center">
              {item.icon}
              <span className="flex">{item.title}</span>
            </div>

            <div className={`${subMenuOpen ? 'rotate-180' : ''} flex`}>
              <ChevronDown width="20" height="20" />
            </div>
          </button>

          {subMenuOpen && (
            <div className="my-2 ml-12 flex flex-col space-y-4">
              {item.subMenuItems?.map((subItem, idx) => {
                return (
                  <Link
                    key={idx}
                    href={subItem.path}
                    className={`${
                      subItem.path === pathname ? 'font-bold text-[#0064C8]' : 'text-[#707070] hover:text-[#3383D3]'
                    }`}
                  >
                    <span>{subItem.title}</span>
                  </Link>
                );
              })}
            </div>
          )}
        </>
      ) : (
        <Link
          href={item.path}
          className={`flex flex-row space-x-4 items-center p-2 rounded-lg hover:bg-[#3383D3] text-[#707070] hover:text-white ${
            item.path === pathname ? 'bg-[#0064C8] text-white' : ''
          }`}
        >
          {item.icon}
          <span className="flex">{item.title}</span>
        </Link>
      )}
    </div>
  );
};