import React from 'react'
import Button from '../common/Button';
import Search from '../common/Search';
import Image from 'next/image';

const icons = [
    {name: "Rooms", src:"./assets/icons/Rooms.svg"},
    {name: "Hotels", src:"./assets/icons/Hotels.svg"},
    {name: "Pool", src:"./assets/icons/Pool.svg"},
    {name: "Room", src:"./assets/icons/Rooms.svg"},
    {name: "Hotel", src:"./assets/icons/Hotels.svg"},
    {name: "Pool", src:"./assets/icons/Pool.svg"},
    {name: "Rooms", src:"./assets/icons/Rooms.svg"},
    {name: "Hotels", src:"./assets/icons/Hotels.svg"},
    {name: "Pool", src:"./assets/icons/Pool.svg"},
    {name: "Rooms", src:"./assets/icons/Rooms.svg"},
    {name: "Hotels", src:"./assets/icons/Hotels.svg"},
];

const Header = () => {
    return (
        <header className="flex flex-col w-full">
            <div className="flex flex-row items-center justify-center w-full px-2 py-1 bg-brand-teal">
                <Image src="/assets/icons/CaseM.png" alt="case" width={25} height={25} />
                <p className="px-2 text-sm text-white">Overseas trip? Get the latest information on travel guides</p>
                 <Button 
                    text="More info" 
                    onClick={() => console.log('More info clicked!')}
                    variant="secondary"
                    size="small"
                />

            </div>

            <div className="flex flex-row items-center w-full px-2 py-2">
                <div className="items-start px-4 py-2">
                    <a href="#"><Image src="/assets/icons/alxlogo.svg" alt="ALX logo" width={150} height={150} className="p-3" /></a>
                    
                </div>
                <div className="items-center justify-center w-full ">
                    <Search />
                </div>

                <div className="flex flex-row items-center justify-end flex-shrink-0 px-8 py-4 space-x-2">
                    <Button 
                    text="Sign in" 
                    onClick={() => console.log('Sign in clicked!')}
                    variant="primary"
                    size="small"
                    
                />
                
                    <Button 
                    text="Sign up" 
                    onClick={() => console.log('Sign up clicked!')}
                    variant="white"
                    size="small"
                    
                />
                 
                </div>

            </div>

            <div className='overflow-x-auto border-b border-gray-200 scrollbar-hide'>
            <div className='flex items-center justify-between w-full px-4 space-x-8 md:space-x-12 md:px-8 whitespace-nowrap'>
                {icons.map((icon) => {
                    return(
                        <div
                        key={icon.name}
                        className='flex flex-col items-center flex-grow gap-2 px-4 py-2 mx-auto text-gray-200 hover:text'>
                            <Image src={icon.src}
                            width={50}
                            height={50}
                            alt='icon'
                            className='mb-2'
                            />
                            <span className='text-sm text-gray-800 hover:text-black'>{icon.name}
                            </span>
                            <div className='absolute bottom-0 left-0 w-full h-[2px] bg-black scale-x-0 group-hover:scale-x-50 transition-transform origin-center duration-200'></div> 
                        </div>
                    )
                }
            )}
            </div>
            </div>
        </header>
    )
}

export default Header;
