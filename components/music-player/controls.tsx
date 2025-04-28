import React from "react";
import { GoVideo } from "react-icons/go";
import { HiOutlineQueueList } from "react-icons/hi2";
import { TbMicrophone2, TbVolume } from "react-icons/tb";
import { CgExpand, CgMusicSpeaker } from "react-icons/cg";
import { CgMiniPlayer } from "react-icons/cg";


export default function Controls() {
    return (
        <div className="hidden md:flex items-center gap-3 text-xl text-dimmed">
            <GoVideo />
            <TbMicrophone2 />
            <HiOutlineQueueList />
            <CgMusicSpeaker />
            <TbVolume />
            <div className="w-[60px] h-[3px] rounded-full bg-white" />
            <CgMiniPlayer />
            <CgExpand />
        </div>
    )
}
