import data from '@/data';
import React from 'react';
import Image from 'next/image';
export default function Artist() {
  return (
    <div>
        <div className="md:grid md:grid-cols-2 flex flex-col gap-1.5">
        {data.artists.map(artist => (
            <div key={artist.name} className="rounded-lg w-full bg-white/10 hover:bg-white/30 transition-all flex items-center gap-2">
                <div className="w-12 h-12 aspect-square relative">
                    <Image src={artist.picture} alt="Artist Picture" fill className="object-cover rounded-l-lg" />
                    </div>
                    <span className="text-sm font-semibold">{artist.name}</span>
            </div>
        ))}
        </div>
    </div>
  );
}