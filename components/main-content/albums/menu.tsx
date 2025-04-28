import React from 'react';
import { IoIosAlbums, IoMdAdd, IoIosSearch } from 'react-icons/io';
import { IoList } from 'react-icons/io5';

export default function Menu() {
  return (
<>
    <div className="flex justify-between items-center">
        <div className="flex items-center gap-4 hover:text-white">
            <IoIosAlbums />
            <span className="text-lg font-semibold">Tu biblioteca</span>
        </div>
        <div className="text-xl bg-transparent hover:bg-hover rounded-full p-1">
            <IoMdAdd />
        </div>
    </div>
    <div className="text-sm text-white rounded-full bg-hover w-fit px-3 py-1">
        Albumes
    </div>
    <div className="flex justify-between items-center">
        <IoIosSearch />
        <div className="items-center gap-1">
            <span className="text-xs">Recientes</span>
            <IoList />
        </div>
    </div>
</>
  )
}