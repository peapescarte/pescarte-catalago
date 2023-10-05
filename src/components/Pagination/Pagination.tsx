"use client";

import { useState } from "react";

import {MdOutlineArrowBackIos, MdOutlineArrowForwardIos} from "react-icons/md"

export function Pagination() {
  let [num, setNum] = useState(1);
  let [cur, setCur] = useState(1);

  const pages = [
    { page: num },
    { page: num + 1 },
    { page: num + 2 },
    { page: num + 3 },
  ];

  function Next() {
    setNum(++num);
  }

  function back() {
    num > 1 && setNum(--num);
  }

  return (

    <div className="flex gap-4">
      <button
        onClick={back}
        className="h-6 w-6 flex items-center justify-center bg-[#F3F3F3] rounded-full hover:bg-[#0064C8] hover:text-white"
      >
        <MdOutlineArrowBackIos />
      </button>

      {pages.map((pg, i) => {
        const isActive = cur === pg.page;
        const buttonStyle = `h-6 w-6 flex items-center justify-center rounded-full hover:bg-[#0064C8] hover:text-white ${isActive ? 'bg-[#0064C8] text-white' : 'bg-[#F3F3F3]'}`;

        return (
          <button
            key={i}
            onClick={() => setCur(pg.page)}
            className={buttonStyle}
          >
            {pg.page}
          </button>
        );
      })}

      <button
        onClick={Next}
        className="h-6 w-6 flex items-center justify-center bg-[#F3F3F3] rounded-full hover:bg-[#0064C8] hover:text-white"
      >
       <MdOutlineArrowForwardIos />
      </button>
    </div>
  );
}
