import React from "react";
import { IoIosSearch } from "react-icons/io";
import { BiBox } from "react-icons/bi";

export default function SearchInput() {
  return (
    <div className="bg-foreground py-2.5 px-4 rounded-full flex-justify-between text-2xl">
        <div className="flex items-center gap-2">
            <IoIosSearch />
            <input 
            placeholder="¿Que deseas escuchar?"
            className="md:inline hidden w-96 bg-transparent outline-none placeholder:text-[14px] text-[14px] font-bold"
            />
            <div className="h-5 w-[1px] bg-white/30" />
            <BiBox />
        </div>
        </div>
  )
}
