import React from 'react';
import Albums from './albums';
import Home from './home';
import Details from './details';  

export default function MainContent() {
  return (
  <div className="grow md:grid md:grid-cols-10 flex flex-col gap-1.5 max-h-full overflow-hidden">
    <div className="col-span-2">
        <Albums />
    </div>
    <div className="col-span-5 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
      <Home />
    </div>
    <div className="col-span-3 h-full overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
     <Details />
    </div>
  </div>
  
)
}
