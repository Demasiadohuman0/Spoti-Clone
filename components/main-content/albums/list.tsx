import data from '@/data';
import React from 'react';
import Image from 'next/image';

export default function List() {
  return (
    <ul className="flex flex-col">
        {data.albums.map(album => (
            <div key={album.name} className="flex gap-3 hover:bg-hover p-2 rounded">
                <Image
                    src={album.cover}
                    width={45}
                    height={45}
                    alt="Album cover"
                    className="rounded object-cover"
                />
                <div>
                    <span className="block text-white text-[15px] font-semibold">{album.name}</span>
                    <span className="block text-dimmed text-xs">Album ● {album.artist}</span>       
                </div>
            </div>
        ))}
    </ul>
  )
}
