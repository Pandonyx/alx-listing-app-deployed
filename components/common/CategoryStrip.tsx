import React from 'react'
import Image from 'next/image';
import { useState } from 'react';


const icons = [
    {name: "Rooms", src:"./assets/icons/Room.svg"},
    {name: "Mansion", src:"./assets/icons/Mansion.svg"},
    {name: "Countryside", src:"./assets/icons/Countryside.svg"},
    {name: "Villa", src:"./assets/icons/Villa.svg"},
    {name: "Tropical", src:"./assets/icons/Tropical.svg"},
    {name: "New", src:"./assets/icons/New.svg"},
    {name: "Amazing pool", src:"./assets/icons/Amazingpool.svg"},
    {name: "Beach house", src:"./assets/icons/Beachhouse.svg"},
    {name: "Island", src:"./assets/icons/Island.svg"},
    {name: "Camping", src:"./assets/icons/Camping.svg"},
    {name: "Apartment", src:"./assets/icons/Apartment.svg"},
    {name: "House", src:"./assets/icons/House.svg"},
    {name: "Lakefront", src:"./assets/icons/Lake.svg"},
    {name: "Farm house", src:"./assets/icons/Farmhouse.svg"},
    {name: "Treehouse", src:"./assets/icons/Treehouse.svg"},
    {name: "Cabins", src:"./assets/icons/Cabins.svg"},
    {name: "Castles", src:"./assets/icons/Castles.svg"},
    {name: "Lakeside", src:"./assets/icons/Countryside.svg"},


];

const CategoryStrip = () => {
    const [active, setActive] = useState(icons[0].name);
    return (
        <div className='overflow-x-auto border-b border-gray-200 no-scrollbar'>
                    <div className='flex items-center justify-between w-full px-4 space-x-8 md:space-x-12 md:px-8 whitespace-nowrap'>
                        {icons.map((icon, index) => {
                            return(
                                <button
                                key={icon.name + index}
                                type='button'
                                onClick={() => setActive(icon.name)}
                                className='relative flex flex-col items-center flex-none gap-2 px-4 py-2 group '>
                                    
                                    <Image src={icon.src}
                                    width={28}
                                    height={28}
                                    priority={active === icon.name}
                                    alt={icon.name}
                                    className='mb-2'
                                    />
                                    <span className='text-sm text-gray-800 hover:text-black'>{icon.name}
                                    </span>
                                    
                                    <div className='absolute bottom-0 left-0 w-full h-[2px] bg-black scale-x-0 group-hover:scale-x-50 transition-transform origin-center duration-200'></div> 
                                </button>
                            )
                        }
                    )}
                    </div>
                    </div>
    )
}

export default CategoryStrip;
