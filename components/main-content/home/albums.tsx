import data from "@/data";
import React from "react";
import Image from "next/image";
export default function Album() {
    return (
        <div className="space-y-2">
          <div className="flex justify-between">
        <span className="text-2xl font-semibold">Hecho para ti</span>
        <span className="text-sm text-dimmed font-semibold">Ver todo</span>
          </div>
          <div className="grid md:grid-cols-4 grid-cols-2 gap-4">
            {data.albums.map((album) => (
                <div key={album.name} className="space-y-4 w-full">
                  <Image 
                    src={album.cover}
                    alt="Album cover" 
                    className="object-cover rounded-lg"
                    width={200}
                    height={200}
                    />
                    <span className="text-dimmed text-sm leading-snug">{album.name} - {album.artist}</span>
            </div>
            ))}
          </div>
        </div>        
    )
}